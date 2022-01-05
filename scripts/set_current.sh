#!/usr/bin/env bash

echo "set current $GIT_COMMIT_HASH"
cd homepage
    
rm current
ln -s "deploys/$GIT_COMMIT_HASH" current
# remain 10 deploys
cd deploys
ls -1tr | head -n -10 | xargs -d '\n' rm -rf --
exit 0
