#!/usr/bin/env bash

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 2>&1
# https://serverfault.com/a/103569/373950
branch=$(git rev-parse --abbrev-ref HEAD);
hash=$(git rev-parse HEAD);

if [[ "$branch" == "master" ]]; then
  echo 'git pull origin master:master';
  git pull origin master:master &&
  echo 'rm -rf dist && build' &&
  # rm -rf dist && yarn build:all &&
  echo "build"
  cd dist && tar -czf build-${hash}.tar.gz ./* && cd - &&
  echo "uploading... dist/build-${hash}.tar.gz" &&
  scp "dist/build-${hash}.tar.gz" hunger@jirengu.com:homepage/deploys/ &&
  echo "ssh and set current dir ..." &&
  export GIT_COMMIT_HASH=$hash;
  ssh hunger@jirengu.com "cd homepage/deploys/ && rm -rf ${hash}; mkdir ${hash} && tar -xf build-${hash}.tar.gz -C ${hash}" &&
  ssh hunger@jirengu.com "cd homepage/deploys/ && rm build-${hash}.tar.gz"

  if [[ ! -f "./ossutil64" ]]; then
    echo "Download ossutil";
    wget http://gosspublic.alicdn.com/ossutil/1.6.0/ossutil64
    chmod 755 ossutil64
  fi

  rm "dist/build-${hash}.tar.gz"
  ./ossutil64 cp -r -c oss_config --update ./dist "oss://jirengu-website/" --jobs 10

  ssh hunger@jirengu.com "export GIT_COMMIT_HASH=$hash; bash -s" < ./scripts/set_current.sh

  echo "cleaning ..." &&
  echo 'OK!'
  exit 0
else
  echo "请确保你在 master 分支"
  exit 1
fi