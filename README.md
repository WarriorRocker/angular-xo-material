# Xo for Angular WordPress Material Theme
The theme used for the Xo for Angular (angularxo.io) documentation site.

![Xo for Angular home page screenshot](/screenshot.png?raw=true "Theme home page template")

Use `ng serve` to rapidly develop locally, taking advantage of file watching to compile and reload the development site. Use `ng build` to create a distribution and let Xo serve the site through the main domain without any additional server setup.

Once the theme has been built using `ng build` or `ng build --prod` the source folders are no longer necessary. A theme developer may opt to publish a theme built with Xo that does not include the source or build tools.

## Setup

This theme comes compiled for production so all assets and application code are the minimal (fastest) size.

1. Download the latest Xo for Angular from the releases page, upload, and activate within WordPress.
2. Download the latest Xo Material theme from the releases page, upload, and activate within WordPress.
3. Create menus, pages, posts, and other content and let Xo do the heavy lifting.

## Development

This theme additionally comes with all source files and configuration info necessary to develop, modify, and debug the Angular App running within the theme.

### Local Server

Just as your Angular App can run with `ng serve` your WordPress will also need to run on a server. I recommend XAMPP for beginners, though the below should work for any apache server.

#### XAMPP on Windows
1. Download your entire WordPress installation and place the files at: `C:\Projects\AngularXoMat`. If the path does not exist, create the `Projects` folder first and then `AngularXoMat` inside. This can be a path anywhere on your machine, inside should be the `index.php` file and `wp-content` folder for example. Make sure if you have an `.htaccess` file that it has been copied as well, sometimes this file is hidden depending on your view settings.

2. Add a virtual DNS entry for `angularxo.local`. Otherwise the site must work at the root or sub folder of `localhost` which can be messy when working on multiple projects. This entry will tell the browser that the data for this domain should come a server on our local machine.
   1. Open notepad as Administrator.
   2. File -> Open -> `C:\windows\system32\drivers\etc\hosts`.
   3. On a new line at the bottom add `127.0.0.1		angularxo.local`.
   4. Save.
   
3. Add a virtual host entry in `httpd.conf`. This is necessary to point `angularxo.local` to our local WordPress directory at `C:\Projects\AngularXoMat`.
   1. Open notepad or your editor of choice.
   2. File -> Open -> `C:\xampp\apache\conf\httpd.conf`.
   3. On a new line at the bottom add the below
    ```
    <VirtualHost *:80>
      ServerName angularxo.local
      DocumentRoot "C:\Projects\AngularXoMat"    
      <Directory "C:\Projects\AngularXoMat">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride all
        Require all granted
      </Directory>
    </VirtualHost>
    ```
   4. Save and restart apache.
   
4. Visit `http://angularxo.local` in your browser. The `http://` protocol portion is important as browsers such as Chrome may attempt to search for the unknown domain. Typing the protocol portion forces the browser to load the domain propertly.

### Angular CLI

It is possible to use the Angular CLI to build, modify, and add new modules and components. This theme comes with several shortcuts for running the `ng serve` local development server and `ng build` with the right arguments that are compatible with WordPress and Xo.

1. First open a command prompt.

#### Building with ng build

The easiest method as it makes use of your previously configured server to access your WordPress as normally through `http://angularxo.local`. This can be accomplished using one of the following commands:

- `npm run build` or `ng build --deploy-url /wp-content/themes/angular-xo-material/dist/`
  - Run a build to the dist folder at `/wp-content/themes/angular-xo-material/dist/`. This is important as unlike a typical Angular App where the files in the `/dist/` folder are deployed to the root of the server these files are actually nested within the theme folder in WordPress.
  - The Angular App will be in debug mode which may emit more verbose information on the console, additional resource map files, and assets and application files will not be minified.
  
- `npm run deploy` or `ng build --prod --deploy-url /wp-content/themes/angular-xo-material/dist/`
  - The same as `npm run deploy` except assets and application code are minified with the Angular App configured for production.
- `npm run watch` or `ng build --watch --deploy-url /wp-content/themes/angular-xo-material/dist/`

  - The same as `npm run deploy` except once the initial compilation is complete the script will be placed into a watch mode for file changes that may trigger recompliation. A refresh of the page is required to see the updated changes.

#### Building with ng serve

Running with `ng serve` we need a way to reference our local `angularxo.local` server from within the live server typically running at `localhost:4200`. This is made possible by adding an additional build configuration invoked by running the below command:

- `npm run serve` or `ng serve --configuration local`
  - Run `ng serve` and include the App Config specified in `/app/src/environments/environment.local.ts` within the theme folder.
  
If you run the local WordPress server from a host other than `angularxo.local` it is required that this be updated in the local environment file at `/app/src/environments/environment.local.ts` within the theme folder.

This is necessary as Xo within WordPress will not have the opportunity to parse the index file and add this configuration dynamically using the Live Redirect Mode. Additionally it is possible to specify this configuration manually for the production environment file and use the faster Offline Redirect Mode.
