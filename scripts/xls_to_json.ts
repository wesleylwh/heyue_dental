import fs from 'node:fs';
import path from 'node:path';
import xlsx from 'xlsx';
import { PROJECTS as DEFAULT_PROJECTS } from '../src/constants';

type Project = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  priceRange: string;
  subItems?: string[];
};

type ServiceItem = {
  name: string;
  price?: number;
  unit?: string;
};

const ROOT = process.cwd();
const INPUT_XLS = path.resolve(ROOT, 'storage/xls/诊疗项目202603131541.xls');
const OUTPUT_JSON = path.resolve(ROOT, 'public/services.json');

const bucketForService = (name: string): string => {
  if (/乳牙|儿童|窝沟封闭|涂氟|预成冠|奶瓶龋/.test(name)) return 'pediatric';
  if (/正畸|矫正|矫治|托槽|保持器|弓丝|隐形|扩弓/.test(name)) return 'ortho';
  if (/拔除|拔牙|智齿|阻生|搔刮|牙槽|翻瓣|切除|刮除|骨|囊肿|开窗|切开|缝合|整形|修整|牙龈/.test(name)) return 'extraction';
  if (/根管|牙髓|充填|补牙|龋|洞|脱敏|树脂|玻璃离子|垫底|再治疗|牙体/.test(name)) return 'filling';
  if (/冠|修复|义齿|桥|贴面|桩核|基台|种植|全瓷|烤瓷|活动|固定义齿|嵌体/.test(name)) return 'crown';
  if (/洁治|洗牙|洁牙|检查|诊查|拍片|CT|全景|牙片|咬合|测量|口腔检查|系统检查/.test(name)) return 'cleaning';
  return 'general';
};

const toNumber = (v: unknown): number | undefined => {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  const s = String(v).trim();
  if (!s) return undefined;
  const num = Number(s.replace(/[^\d.]+/g, ''));
  return Number.isFinite(num) ? num : undefined;
};

const formatItem = (item: ServiceItem): string => {
  return item.name;
};

function main() {
  if (!fs.existsSync(INPUT_XLS)) {
    console.error(`XLS 文件不存在: ${INPUT_XLS}`);
    process.exit(1);
  }
  const wb = xlsx.readFile(INPUT_XLS, { cellDates: true });
  const sheetName = wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  const rows: any[][] = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' }) as any[][];

  const headerIndex = rows.findIndex(r => r.some(c => String(c).includes('项目名称')));
  if (headerIndex === -1) {
    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify([], null, 2), 'utf-8');
    console.log(`生成服务项目数据: ${path.relative(ROOT, OUTPUT_JSON)}  (0 类)`);
    return;
  }

  const header = rows[headerIndex].map(c => String(c).trim());
  const nameIdx = header.findIndex(h => h.includes('项目名称'));
  const priceIdx = header.findIndex(h => h.includes('项目单价') || h.includes('单价') || h.includes('价格'));
  const unitIdx = header.findIndex(h => h.includes('项目单位') || h.includes('单位'));

  const items: ServiceItem[] = [];
  for (const r of rows.slice(headerIndex + 1)) {
    const name = String(r[nameIdx] ?? '').trim();
    if (!name) continue;
    const price = priceIdx >= 0 ? toNumber(r[priceIdx]) : undefined;
    const unit = unitIdx >= 0 ? String(r[unitIdx] ?? '').trim() : undefined;
    items.push({ name, price, unit });
  }

  const byId = new Map<string, Project>();
  for (const p of DEFAULT_PROJECTS as Project[]) {
    byId.set(p.id, { ...p, priceRange: '', subItems: p.subItems ? [...p.subItems] : [] });
  }

  const general: Project = {
    id: 'general',
    title: '其他诊疗项目',
    description: '按收费项目明细展示。',
    icon: 'Stethoscope',
    category: 'health',
    priceRange: '',
    subItems: [],
  };

  for (const item of items) {
    const bucket = bucketForService(item.name);
    const label = formatItem(item);
    if (bucket === 'general') {
      general.subItems?.push(label);
      continue;
    }
    const project = byId.get(bucket);
    if (!project) {
      general.subItems?.push(label);
      continue;
    }
    project.subItems?.push(label);
  }

  for (const p of byId.values()) {
    if (p.subItems && p.subItems.length > 0) {
      p.subItems = Array.from(new Set(p.subItems));
    }
  }
  if (general.subItems && general.subItems.length > 0) {
    general.subItems = Array.from(new Set(general.subItems));
  }

  const list = [
    byId.get('cleaning'),
    byId.get('filling'),
    byId.get('extraction'),
    byId.get('crown'),
    byId.get('ortho'),
    byId.get('pediatric'),
    general.subItems && general.subItems.length > 0 ? general : undefined,
  ].filter(Boolean) as Project[];

  fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(list, null, 2), 'utf-8');
  console.log(`生成服务项目数据: ${path.relative(ROOT, OUTPUT_JSON)}  (${list.length} 类)`);
}

main();
