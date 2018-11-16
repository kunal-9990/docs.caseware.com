cd public/documentation_files/$1/$2/$3
# prefix="/documentation_files/$1/$2/$3/Content/Resources/"
# prefix="$prefix"
find . -type f -print0 | xargs -0 sed -i 's/src="\/...\/...\/Resources/src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/Resources/src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find . -type f -print0 | xargs -0 sed -i 's/src="..\/..\/..\/Resources/src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find . -type f -print0 | xargs -0 sed -i 's/src="\/Resources/src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find -name "*.fltoc" -print0 | xargs -0 sed -i 's/\/Content//g'


