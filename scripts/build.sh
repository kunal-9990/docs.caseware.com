# Adding a new help version:
#
# Place a folder named as the new version into the tmp directory as shown below.
# ----------------------------
# /docsmk2/
# │
# └───/tmp/
# │   │  
# │   └───/30/
# │       │   
# │       └─── /Content/
# │       │    Online Output.fltoc
# │       │    csh_redirect.xml
#
# ----------------------------
#
# Run "npm run build" and supply the year, product, and version as parameters.
# Example:
# npm run build 2018 webapps 30
#
# wait until the script says "done." 

chmod -R 777 .

echo 'Moving stuff around...'

mkdir -p public/documentation_files/$1/$2/$3/Content/$4
cp -R tmp/$3/* public/documentation_files/$1/$2/$3/Content/$4
cd public/documentation_files/$1/$2/$3/Content/$4

sudo chmod -R 777 .

echo 'Renaming stuff...'

find -name "*.fltoc" -print0 | xargs -0 sed -i 's/\/Content//g'

mv Online\ Output.fltoc OnlineOutput.xml

prefix="\/documentation_files\/$1\/$2\/$3\/Content\/$4\/Resources\/"
prefix="$prefix"

# echo $prefix

echo 'Updating img src paths...'

# cd public/documentation_files/$1/$2/$3/Content/$4

find . -type f -print0 | xargs -0 sed -i 's/src="\/...\/...\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="\/Resources/src="'"$prefix"'/g'

cd ../../../../../..

echo 'Copying Data folders into place...'

mkdir -p public/$1/$2/$3/en
cp -R tmp/$3/Content/Data public/$1/$2/$3/en
cd public/$1/$2/$3

cp -R en fr
cp -R en es
cp -R en cn
cp -R en de
# cp -R en nl


cd ../../../..

echo 'Setting File permissions...'

# find . ! -name '*.sh' -type f -exec chmod 644 {} \;    
# find . ! -name 'scripts' -type d -exec chmod 755 {} \;
chmod -R 777 .

echo 'Done.'