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
git config user.email "danka.suchomelova@seznam.cz"
git config user.name "suchomelova-dana"
git push -f https://github.com/suchomelova-dana/ekos-zitenice.git master:gh-pages
#
cd -

