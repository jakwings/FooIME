#!/bin/bash

set -e
export PATH=/usr/bin:/bin
cd "$(dirname -- "$0")"

APP_EXE=FooIME
APP_SRC="./build/${APP_EXE}.app"
APP_DIR="${HOME:-/dev/null}/Library/Input Methods"
APP_DST="${APP_DIR:-/dev/null}/${APP_EXE}.app"

set -x

./compile.sh
killall "${APP_EXE}" || true
rm -Rf "${APP_DST}"
cp -R "${APP_SRC}" "${APP_DIR}/"
