import fs from 'node:fs';
import path from 'node:path';
import xlsx from 'xlsx';
import {PROJECTS as DEFAULT_PROJECTS} from '../src/constants';

type Project = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  priceRange: string;
  subItems?: string[];
  sections?: {
    id: string;
    title: string;
    items: string[];
  }[];
};

type TaxonomySection = {
  id: string;
  title: string;
  patterns: RegExp[];
};

type TaxonomyModule = {
  id: string;
  sections: TaxonomySection[];
};

const ROOT = process.cwd();
const INPUT_XLS = path.resolve(ROOT, 'storage/xls/诊疗项目202603131541.xls');
const OUTPUT_JSON = path.resolve(ROOT, 'public/services.json');

const hasPattern = (value: string, patterns: RegExp[]) => patterns.some(pattern => pattern.test(value));

const taxonomy: TaxonomyModule[] = [
  {
    id: 'diagnosis',
    sections: [
      {
        id: 'clinic-consultation',
        title: '门诊诊查与方案设计',
        patterns: [/诊查费|系统检查|治疗设计|初检|正中颌位检查/],
      },
      {
        id: 'occlusion-measurement',
        title: '咬合与功能测量',
        patterns: [/咬合|颌力|下颌运动|轨迹描记|颞颌关节|唾液量|流速|缓冲能力|咬合动度/],
      },
      {
        id: 'imaging-model',
        title: '影像与模型检查',
        patterns: [/模型制备|记存模型|面颌像|内镜|RVG|X线|CT|CBCT|曲面体层|测色仪|菌斑|龈沟液/],
      },
    ],
  },
  {
    id: 'periodontal',
    sections: [
      {
        id: 'periodontal-cleaning',
        title: '洁治与龈下处理',
        patterns: [/洁治|龈下刮治|牙面光洁|根面平整|超声根面平整/],
      },
      {
        id: 'periodontal-surgery',
        title: '牙龈与牙周手术',
        patterns: [/冠周炎|翻瓣术|切除术|成形术|牙周固定|去除牙周固定|保护剂塞治|坏死性龈炎|干槽症换药/],
      },
    ],
  },
  {
    id: 'surgery',
    sections: [
      {
        id: 'surgery-extraction',
        title: '拔牙与阻生牙',
        patterns: [/拔除术|拔牙|阻生牙|智齿|搔刮术|牙槽骨修整|龈瓣整形/],
      },
      {
        id: 'surgery-oral',
        title: '切开引流与外科处置',
        patterns: [/病灶刮除|止血|切开引流|活检|动力钻|关节复位|开窗助萌|正畸牙开窗术|烧伤清创|牙槽骨修整/],
      },
    ],
  },
  {
    id: 'endodontics',
    sections: [
      {
        id: 'endo-filling',
        title: '充填与牙体修复',
        patterns: [/充填|补牙|祛龋|桩钉|粘接修复|抛光术|美容修复|树脂嵌体|树脂高嵌体|橡皮障|盖髓术|龋齿的特殊检查/],
      },
      {
        id: 'endo-pulp',
        title: '牙髓治疗',
        patterns: [/失活术|开髓引流术|干髓术|摘除术|活髓切断术|塑化治疗术/],
      },
      {
        id: 'endo-root',
        title: '根管治疗',
        patterns: [/根管|显微|根尖屏障|髓腔消毒|瘘管治疗|折断器械|穿孔|诱导成形|钙化桥|劈裂牙|纵折固定/],
      },
    ],
  },
  {
    id: 'prevention',
    sections: [
      {
        id: 'prevention-care',
        title: '预防保健',
        patterns: [/氟防龋|脱敏治疗|冲洗上药|窝沟封闭/],
      },
      {
        id: 'prevention-kids',
        title: '儿童基础修复',
        patterns: [/乳牙预成冠|儿童前牙树脂冠|缺隙保持器/],
      },
    ],
  },
  {
    id: 'fixed-restoration',
    sections: [
      {
        id: 'fixed-bridge',
        title: '桥体与粘结修复',
        patterns: [/固定桥|粘结桥|固定修复计算机辅助设计|固定桥$/],
      },
      {
        id: 'fixed-cad',
        title: '全冠 / 嵌体 / 咬合重建',
        patterns: [/全冠|嵌体|咬合重建|粘结$/],
      },
    ],
  },
  {
    id: 'removable-restoration',
    sections: [
      {
        id: 'removable-denture',
        title: '活动义齿',
        patterns: [/活动桥|局部义齿|美容义齿|即刻义齿|附着体义齿|弹性假牙龈/],
      },
      {
        id: 'removable-repair',
        title: '加工维修与调整',
        patterns: [/拆冠桥|锤造冠|拆铸造冠|拆桩|加焊|装饰面|崩瓷修理|调改义齿|颌关系记录|加人工牙|接长基托|折裂修理|组织面重衬|加卡环|基托|颌支托|铸颌面|加固装置|连接杆|颌面加高咬合|镀金加工|铸造加工|配金加工|黄金材料加工|磁性固位体|附着体增换|垫颌/],
      },
    ],
  },
  {
    id: 'ortho-support',
    sections: [
      {
        id: 'ortho-support-check',
        title: '检查与制备',
        patterns: [/带环制备|颌导板制备|特殊要求颌导板|导合板|外科引导合板/],
      },
      {
        id: 'ortho-support-follow',
        title: '复诊与辅助处置',
        patterns: [/复诊处置|舌侧矫正器加收|拆除固定装置|调颌|调磨颌垫|全牙列颌垫固定术|根牵引|结扎固定术|制戴活动矫正器/],
      },
    ],
  },
  {
    id: 'orthodontics',
    sections: [
      {
        id: 'orthodontics-primary',
        title: '乳牙期正畸',
        patterns: [/乳牙期/],
      },
      {
        id: 'orthodontics-mixed',
        title: '替牙期正畸',
        patterns: [/替牙期/],
      },
      {
        id: 'orthodontics-permanent',
        title: '恒牙期正畸',
        patterns: [/恒牙期|恒牙早期/],
      },
      {
        id: 'orthodontics-special',
        title: '特殊正畸',
        patterns: [/牙周病伴错颌|牙合创伤|颜面不对称|阻生磨牙竖直/],
      },
      {
        id: 'orthodontics-retention',
        title: '正畸保持',
        patterns: [/保持器治疗/],
      },
    ],
  },
  {
    id: 'other-care',
    sections: [
      {
        id: 'other-care-laser',
        title: '激光与漂白',
        patterns: [/激光口内治疗|脱色术|漂白术/],
      },
      {
        id: 'other-care-other',
        title: '其他处置',
        patterns: [/不良修复体拆除|局部浸润麻醉/],
      },
    ],
  },
];

const directModuleMatches: Array<{moduleId: string; patterns: RegExp[]}> = [
  {moduleId: 'orthodontics', patterns: [/乳牙期|替牙期|恒牙期|错颌|功能矫治器治疗|固定矫治器治疗|保持器治疗|牙周病伴错颌|牙合创伤|颜面不对称|阻生磨牙竖直/]},
  {moduleId: 'ortho-support', patterns: [/复诊处置|带环制备|颌导板制备|调颌|调磨颌垫|拆除固定装置|结扎固定术|根牵引|舌侧矫正器|引导合板|全牙列颌垫固定术|制戴活动矫正器/]},
  {moduleId: 'removable-restoration', patterns: [/义齿|活动桥|拆冠桥|拆铸造冠|拆桩|加焊|崩瓷修理|调改义齿|颌关系记录|加人工牙|加卡环|基托|连接杆|垫颌|磁性固位体|镀金加工|铸造加工|配金加工|锤造冠|加装饰面|加颌支托|加铸颌面|增加加固装置|塑料颌面加高咬合|黄金材料加工|附着体增换|弹性假牙龈/]},
  {moduleId: 'fixed-restoration', patterns: [/固定桥|粘结桥|全冠|嵌体|咬合重建|固定修复计算机辅助设计|粘结$/]},
  {moduleId: 'prevention', patterns: [/氟防龋|脱敏治疗|窝沟封闭|冲洗上药|乳牙预成冠|儿童前牙树脂冠|缺隙保持器/]},
  {moduleId: 'endodontics', patterns: [/根管|牙髓|开髓|失活|摘除术|充填|祛龋|盖髓术|活髓切断术|髓腔|瘘管|劈裂牙|纵折固定|桩钉|牙体缺损|橡皮障|诱导成形|钙化桥|显微镜下根尖屏障|前牙美容修复术|干髓术/]},
  {moduleId: 'surgery', patterns: [/拔除术|拔牙|阻生牙|智齿|病灶刮除|活检|切开引流|止血|关节复位|动力钻|开窗助萌|正畸牙开窗术|牙槽骨修整|牙槽骨烧伤清创/]},
  {moduleId: 'periodontal', patterns: [/洁治|龈下刮治|牙龈|牙周固定|根面平整|坏死性龈炎|冠周炎|干槽症换药|牙面光洁/]},
  {moduleId: 'diagnosis', patterns: [/诊查费|检查|设计|测量|影像|模型|内镜|X线|CT|CBCT|曲面体层|测色仪|菌斑|龈沟液|轨迹描记|咬合动度/]},
  {moduleId: 'other-care', patterns: [/激光口内治疗|脱色术|漂白术|局部浸润麻醉|不良修复体拆除/]},
];

const getModule = (name: string): TaxonomyModule => {
  for (const entry of directModuleMatches) {
    if (hasPattern(name, entry.patterns)) {
      return taxonomy.find(module => module.id === entry.moduleId)!;
    }
  }
  return taxonomy.find(module => module.id === 'other-care')!;
};

const getSection = (module: TaxonomyModule, name: string) => {
  return module.sections.find(section => hasPattern(name, section.patterns)) || module.sections[module.sections.length - 1];
};

function main() {
  if (!fs.existsSync(INPUT_XLS)) {
    console.error(`XLS 文件不存在: ${INPUT_XLS}`);
    process.exit(1);
  }

  const workbook = xlsx.readFile(INPUT_XLS, {cellDates: true});
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, {header: 1, defval: ''}) as unknown[][];

  const headerIndex = rows.findIndex(row => row.some(cell => String(cell).includes('项目名称')));
  if (headerIndex === -1) {
    fs.mkdirSync(path.dirname(OUTPUT_JSON), {recursive: true});
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify([], null, 2), 'utf-8');
    console.log(`生成服务项目数据: ${path.relative(ROOT, OUTPUT_JSON)}  (0 类)`);
    return;
  }

  const header = rows[headerIndex].map(cell => String(cell).trim());
  const nameIndex = header.findIndex(label => label.includes('项目名称'));

  const names = rows
    .slice(headerIndex + 1)
    .map(row => String(row[nameIndex] ?? '').trim())
    .filter(Boolean);

  const projectMap = new Map<string, Project>();
  for (const project of DEFAULT_PROJECTS as Project[]) {
    projectMap.set(project.id, {
      ...project,
      priceRange: '',
      subItems: [],
      sections: project.sections?.map(section => ({...section, items: []})) || [],
    });
  }

  for (const name of names) {
    const module = getModule(name);
    const project = projectMap.get(module.id);
    if (!project) continue;

    project.subItems?.push(name);

    const section = getSection(module, name);
    let targetSection = project.sections?.find(item => item.id === section.id);
    if (!targetSection) {
      targetSection = {id: section.id, title: section.title, items: []};
      project.sections?.push(targetSection);
    }
    targetSection.items.push(name);
  }

  const list = DEFAULT_PROJECTS.map(project => {
    const data = projectMap.get(project.id)!;
    return {
      ...data,
      subItems: Array.from(new Set(data.subItems || [])),
      sections: (data.sections || [])
        .map(section => ({
          ...section,
          items: Array.from(new Set(section.items)),
        }))
        .filter(section => section.items.length > 0),
    };
  }).filter(project => (project.subItems?.length || 0) > 0);

  fs.mkdirSync(path.dirname(OUTPUT_JSON), {recursive: true});
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(list, null, 2), 'utf-8');
  console.log(`生成服务项目数据: ${path.relative(ROOT, OUTPUT_JSON)}  (${list.length} 类)`);
}

main();
