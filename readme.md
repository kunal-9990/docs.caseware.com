<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

# Where things are:

    - Content and mapping xml files for each version can be found in public/documentation_files in their respective subfolder
    - Downloads throughout the site are kept in public/downloads
    - Search "Data" folders are found in public/year/product/version/
    - Bash scripts are found in scripts/
    - Logged emails are found in storage/logs/emails.log
    - Content backups created upon running the build script are kept in tmp/Content_backups

# Deployment:

    - composer install
    - update the .env variable PATH_TO_PUBLIC and DOMAIN
    - npm install
    - npm run production

# Adding a new help version:

    This script deploys content for all languages other than DUTCH, which we have proper translations of and will need to be published manually as updates are necessary.
    
    Place a folder named as the new version into the tmp directory as shown below.
    ----------------------------
    /docsmk2/
    │
    └───/tmp/
    │   │  
    │   └───/30/
    │       │   
    │       └─── /Content/
    │       │    Online Output.fltoc
    │       │    csh_redirect.xml
    ----------------------------
    - From the project root ( docsmk2/ ) run "scripts/build.sh" OR "npm run build" and supply the year, product, version, and "en" as parameters.
    - Example:
    - scripts/build.sh 2018 webapps 30 en
      OR
    - npm run build 2018 webapps 30 en (only works locally)
    - wait until the script says "done." 


