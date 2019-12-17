# docs.caseware.com
    This is the documentation site for CaseWare Cloud. It supports multiple products, versions, and proper translations. If proper translations do not exist, google translate is used.
    This site was built as a solution for the technical writers to continue using their authoring tool, Flare, while not having to rely on the website that Flare builds with that content.
    The flare websites were limited in terms of functionality, styling, accessibility, etc. This site uses laravel to parse through a flare build (provided by the technical writers) and 
    inserts the content of each page into a new blade template. ** Commits to the staging and master branches trigger jenkins builds and deployments to staging and master servers respectively.**

# Application built with:
- node version: 9.11.1
- Laravel
- Jenkins (found at http://iserv.caseware.com/ - see google docs of Info Services credentials to access)
    
# Where things are:
    - Content and Table of Contents xml files for each version can be found in public/documentation_files in their respective subfolder
    - Downloads throughout the site are kept in public/downloads
    - Search "Data" folders are found in public/year/product/version/
    - Bash scripts are found in /scripts/
    - Logged emails are found in storage/logs/emails.log
    - Content backups created upon running the build script are kept in tmp/Content_backups

# Urls
## Staging:
- http://docs.iserv-staging.caseware.com
## Production:
- https://docs.caseware.com

# To Start:
    - start a local web server with apache
    - create/update the .env variable PATH_TO_PUBLIC and DOMAIN (see example.env)
    - composer install
    - npm install
    - publish content with the build.sh script (see next section, "Publishing a new help version")
    - npm run production / npm run watch (to start local development server)

# Publishing a new help version:

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


