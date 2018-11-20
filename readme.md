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
    - Tearch "Data" folders are found in public/year/product/version/
    - Bash scripts are found in scripts/
    - Logged emails are found in storage/logs/emails.log

# Deployment

    - composer install
    - update the .env variable PATH_TO_PUBLIC and DOMAIN
    - npm install
    - npm run production

# Adding a new help version:

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
Run "npm run build" and supply the year, product, and version as parameters.
Example:
npm run build 2018 webapps 30
wait until the script says "done." 


