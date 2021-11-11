# Adding a new help version:
#
# Place a folder named as the new version into the tmp directory as shown below.
# ----------------------------
# /docsm42/
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
# Run "npm run build" and supply the year, product, version, and language as parameters.
# Example:
# npm run build 2018 webapps 30 en
#
# wait until the script says "done." 
#dos2unix scripts/build.sh

sudo chmod -R 777 /usr/share/nginx/docs


echo 'Copying new content into place...'
# mkdir -p public/documentation_files/$1/$2/$3/Content/$4

if [ $4 = "nl" ]; then
   echo "Moving NL toc into place..."
   cp -R tmp/$4/$3/Online\ Output\ \(SE\ Authoring\).fltoc public/documentation_files/$1/$2/$3/Content/$4/SE-Authoring-TOC.fltoc
fi
mv public/documentation_files/$1/$2/$3/Content/$4/* /tmp/old
cp -R tmp/$4/$3/* public/documentation_files/$1/$2/$3/Content/$4
cd public/documentation_files/$1/$2/$3/Content/$4


echo 'Renaming some files...'

find -name "*.fltoc" -print0 | xargs -0 sed -i 's/\/Content\//\//g'


echo "Copying over TOC and redirect xml files..."


for f in *.fltoc; do 
    mv -- "$f" "${f%.fltoc}.xml"
done


file=./csh_redirect.xml
if [ -e "$file" ]; then
    mv csh_redirect.xml ../..
    echo "Moving csh_redirect.xml..."
else 
    echo "csh_redirect.xml was not included in upload"
fi 


prefix="\/documentation_files\/$1\/$2\/$3\/Content\/$4\/Resources\/"
prefix="$prefix"

# echo $prefix

echo 'Updating img src paths...'

find . -type f -print0 | xargs -0 sed -i 's/src="\/...\/...\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/..\/Resources/src="'"$prefix"'/g'
find . -type f -print0 | xargs -0 sed -i 's/src="\/Resources/src="'"$prefix"'/g'

cd ../../../../../../..
echo 'Copying Data folders into place...'

echo 'Setting File permissions...'


sudo chmod -R 777 storage
sudo chmod -R 777 scripts

sudo rm -R /tmp/docs_content/*
sudo rm -R /usr/share/nginx/docs/tmp/$4/$3/*
sudo find /usr/share/nginx/docs/public/documentation_files/$1/$2/$3/Content/$4/ -mindepth 1 -type f -mmin +15 -delete
echo 'Done.'
