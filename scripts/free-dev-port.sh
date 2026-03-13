#!/usr/bin/env bash

set -euo pipefail

PORT="${1:-3001}"

pids="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN || true)"

if [[ -z "$pids" ]]; then
  echo "端口 $PORT 没有被占用。"
  exit 0
fi

echo "释放端口 $PORT: $pids"
kill $pids

echo "端口 $PORT 已处理。"
