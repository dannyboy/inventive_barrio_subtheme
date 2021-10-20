# Inventive Bootstrap 5 theme implementation with Barrio as parent.

## How to use this repo

### Setup Barrio in Drupal

1. Download Barrio, run `composer require 'drupal/bootstrap_barrio:^5.5'`
2. Install Barrio, run `drush theme:enable bootstrap_barrio`
3. Set Barrio as default theme, run `drush config-set system.theme default bootstrap_barrio`

### Download this repo and install it's dependancies

1. Clone this repo into your Drupal `/themes/custom directory`
2. Run `npm install`
3. Change the browser-sync proxy to reflect your environment in the file `/src/build/browser-sync.config.js`
4. Run `npm start`

### Finalise theme files and install theme in Drupal

1. Rename `THEMENAME.info.yml`
2. Rename `THEMENAME.libraries.yml`
3. Rename `THEMENAME.theme`
4. Install theme, run `drush theme:enable THEMENAME`
5. Set theme as default theme, run `drush config-set system.theme default THEMENAME`

You are good to go! It will watch all your files for changes automatically and live update your browser.
