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

sudo chmod -R 777 .

echo 'Moving stuff around...'

sudo mkdir -p public/documentation_files/$1/$2/$3
sudo cp -R tmp/$3/* public/documentation_files/$1/$2/$3
cd public/documentation_files/$1/$2/$3

sudo chmod -R 777 .

echo 'Renaming stuff...'

find -name "*.fltoc" -print0 | xargs -0 sed -i 's/\/Content//g'

sudo mv Online\ Output.fltoc OnlineOutput.xml

prefix="\/documentation_files\/$1\/$2\/$3\/Content\/Resources\/"
prefix="$prefix"

echo 'Updating img src paths...'

find . -type f -print0 | xargs -0 sed -i 's/src="\/...\/...\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="\/Resources/src="'"$prefix"'/g'

cd ../../../../..

echo 'Copying Data folders into place...'

sudo mkdir -p public/$1/$2/$3/en
sudo cp -R tmp/$3/Content/Data public/$1/$2/$3/en
cd public/$1/$2/$3

sudo cp -R en fr
sudo cp -R en es
sudo cp -R en nl
sudo cp -R en cn
sudo cp -R en de

cd ../../../..

echo 'Setting File permissions...'

sudo find . ! -name '*.sh' -type f -exec chmod 644 {} \;    
sudo find . ! -name '*.sh' -type d -exec chmod 755 {} \;

echo 'Done.'
