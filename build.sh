#!/usr/bin/env bash

rm -rf dist/* &&
echo 'BUILD_FLAG=yinghekongjian' > .env &&
parcel build ./*.ejs --no-cache --no-source-maps --public-url https://jirengu-website.oss-cn-hangzhou.aliyuncs.com/java --out-dir dist/java &&
echo 'BUILD_FLAG=jirengu' > .env &&
parcel build ./*.ejs --no-cache --no-source-maps --public-url https://jirengu-website.oss-cn-hangzhou.aliyuncs.com/jirengu --out-dir dist/jirengu
echo 'BUILD_FLAG=cplusplus' > .env &&
parcel build ./*.ejs --no-cache --no-source-maps --public-url https://jirengu-website.oss-cn-hangzhou.aliyuncs.com/cplusplus --out-dir dist/cplusplus