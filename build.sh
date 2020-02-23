 #!/bin/sh
set -o errexit
APP_NAME="zebra-ui"
TAR="$APP_NAME.tar.gz"
$echo node -v
npm install --production --registry=http://xxxxxxxx.xxxxxxxx.cc/npm/
rm -rf output
npm run build
rsync -rvl --exclude=/.git --exclude=/output --exclude=/logs --exclude=/public  *  output/nodeapp/$APP_NAME
cd output
tar zcvf $TAR ./nodeapp
rm -rf nodeapp
cd ../