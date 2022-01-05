#!/usr/bin/env bash

echo "set current $GIT_COMMIT_HASH"
cd homepage
if [[ ! -f "./ossutil64" ]]; then
    echo "Download ossutil";
    wget http://gosspublic.alicdn.com/ossutil/1.6.0/ossutil64
    chmod 755 ossutil64
fi
./ossutil64 cp -r -c shared/config/oss_config --update \
    "deploys/$GIT_COMMIT_HASH/" "oss://jrgcdn1/$JIRENGU_CDN_DIR/" --jobs 100
rm current
ln -s "deploys/$GIT_COMMIT_HASH" current
# remain 10 deploys
cd deploys
ls -1tr | head -n -10 | xargs -d '\n' rm -rf --
exit 0
