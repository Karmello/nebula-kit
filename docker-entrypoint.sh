#!/bin/sh
set -e

MEMORY_SRC="/usr/src/nebula-kit/.claude-memory"
MEMORY_DEST="/root/.claude/projects/-usr-src-nebula-kit/memory"

if [ -d "$MEMORY_SRC" ]; then
  mkdir -p "$MEMORY_DEST"

  if [ -z "$(ls -A "$MEMORY_DEST" 2>/dev/null)" ]; then
    cp "$MEMORY_SRC"/*.md "$MEMORY_DEST"/
    echo "Restored Claude memory from .claude-memory/ into $MEMORY_DEST"
  fi
fi

exec "$@"
