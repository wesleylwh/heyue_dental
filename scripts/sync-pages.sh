#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

BRANCH="${1:-main}"
COMMIT_MSG="${2:-chore: sync github pages}"

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "当前分支是 $current_branch，不是 $BRANCH。请先切到目标分支后再同步。"
  exit 1
fi

echo "==> Building project"
npm run build

echo "==> Staging changes"
git add -A

if git diff --cached --quiet; then
  echo "没有可提交的变更，跳过 commit。"
else
  echo "==> Committing changes"
  git commit -m "$COMMIT_MSG"
fi

echo "==> Pushing to origin/$BRANCH"
git push origin "$BRANCH"

echo "同步完成。GitHub Actions 会继续部署 GitHub Pages。"
