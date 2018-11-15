cd public/documentation_files/$1/$2/$3/Content
# prefix="/documentation_files/$1/$2/$3/Content/Resources/"
# prefix="$prefix"
find . -type f -print0 | xargs -0 sed -i 's/<img src="..\/..\/Resources/<img src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find . -type f -print0 | xargs -0 sed -i 's/<img src="..\/..\/..\/Resources/<img src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'
find . -type f -print0 | xargs -0 sed -i 's/<img src="\/Resources/<img src="\/documentation_files\/2018\/webapps\/29\/Content\/Resources/g'


