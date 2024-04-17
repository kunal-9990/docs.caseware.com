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

function usage {
    cat << EOF
Usage: ./build.sh <year> <product> <version> <language>
Supply the year, product, version, and language as parameters.

Example: ./build.sh 2018 webapps 30 en
EOF
}

if [ "$#" != 4 ]; then
  usage
  exit 1
fi

year=$1
product=$2
version=$3
language=$4

# echo 'Resetting group ownership to jenkins for /usr/share/nginx/docs'
# chgrp -R jenkins /usr/share/nginx/docs

echo 'Copying new content into place...'
# mkdir -p public/documentation_files/$year/$product/$version/Content/$language

if [[ $language = "nl" ]] || [[ $language = "de" ]]; then
   echo "Moving $language toc into place..."
   cp -R "tmp/$language/$version/Online Output_$language.fltoc" public/documentation_files/$year/$product/$version/Content/$language/SE-Authoring-TOC.fltoc
fi
echo "Backing up old content into /tmp/old..."
rm -R /tmp/old/*
mv public/documentation_files/$year/$product/$version/Content/$language/* /tmp/old

echo "Copying new content into place: from tmp/$language/$version/ to public/documentation_files/$year/$product/$version/Content/$language"
cp -R tmp/$language/$version/* public/documentation_files/$year/$product/$version/Content/$language

echo "Changing dir to public/documentation_files/$year/$product/$version/Content/$language"
pushd "public/documentation_files/$year/$product/$version/Content/$language"

    echo 'Stripping out /Content/ from .fltoc files...'

    find -name "*.fltoc" -print0 | xargs -0 sed -i 's/\/Content\//\//g'

    echo "Renaming .fltoc extension to .xml"
    for f in *.fltoc; do 
        mv -- "$f" "${f%.fltoc}.xml"
    done

    echo "Moving csh_redirect.xml..."
    if [ -e "./csh_redirect.xml" ]; then
        mv csh_redirect.xml ../..
        echo "Moving csh_redirect.xml..."
    else 
        echo "csh_redirect.xml was not included in upload"
    fi 

    echo 'Updating img src paths...'
    prefix="\/documentation_files\/$year\/$product\/$version\/Content\/$language\/Resources\/"
    find . -type f -print0 | xargs -0 sed -i 's/src="\/...\/...\/Resources/src="'"$prefix"'/g'
    find . -type f -print0 | xargs -0 sed -i 's/src="..\/Resources/src="'"$prefix"'/g'
    find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/Resources/src="'"$prefix"'/g'
    find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/..\/Resources/src="'"$prefix"'/g'
    find . -type f -print0 | xargs -0 sed -i 's/src="\/Resources/src="'"$prefix"'/g'

echo "Changing dir back to /usr/share/nginx/docs"
popd

# echo 'Setting File permissions...'
# sudo chmod -R 777 storage
# sudo chmod -R 777 scripts

echo "Cleaning up /tmp/docs_content"
rm -R /tmp/docs_content/*
echo "Cleaning up /usr/share/nginx/docs/tmp/$language/$version..."
sudo rm -R /usr/share/nginx/docs/tmp/$language/$version/*
#find /usr/share/nginx/docs/public/documentation_files/$year/$product/$version/Content/$language/ -mindepth 1 -type f -mmin +15 -delete
echo 'Done.'
