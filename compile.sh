#!/bin/bash

set -e
export PATH=/usr/bin:/bin
cd "$(dirname -- "$0")"

rm -rf ./build
mkdir -p ./build

osacompile -l JavaScript -a x86_64 -o ./build/FooIME.app -s ./main.js
cp ./Info.plist ./build/FooIME.app/Contents
mv ./build/FooIME.app/Contents/MacOS/{*,FooIME}
mv ./build/FooIME.app/Contents/Resources/{*.rsrc,FooIME.rsrc}
mv ./build/FooIME.app/Contents/Resources/{*.icns,icon.icns}
