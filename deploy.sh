#
set -e
#
yarn build
#
cd dist
#
git init
git add -A
git commit -m "new deplyment"
git push -f git@github.com:suchomelova-dana/ekos-zitenice.git master:gh-pages
#
cd -

