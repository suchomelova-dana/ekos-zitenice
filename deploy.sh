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
git remote add origin git@github.com:suchomelova-dana/ekos-zitenice.git
git push -f origin master:gh-pages
#
cd -

