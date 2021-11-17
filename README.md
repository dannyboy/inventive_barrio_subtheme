# Inventive Bootstrap 5 Drupal subtheme for Barrio 5.5+

## How to use this starter kit

### Setup Barrio in Drupal

1. Download Barrio, run `composer require 'drupal/bootstrap_barrio:^5.5'`
2. Install Barrio in Drupal, run `drush theme:enable bootstrap_barrio`
3. Set Barrio as default theme in Drupal, run `drush config-set system.theme default bootstrap_barrio`

### Download this repo and install it's dependancies

1. Clone this repo into your Drupal `/themes/custom` directory
2. Run `npm install`

### Configure browser sync

1. Change the browser-sync proxy to reflect your environment in the file `/src/build/browser-sync.config.js`

### Finalise theme files and install theme in Drupal

1. Rename `THEMENAME.info.yml` and modify the file contents as nessasary
2. Rename `THEMENAME.libraries.yml`
3. Rename `THEMENAME.theme`
4. Install theme in Drupal, run `drush theme:enable THEMENAME`
5. Set theme as default theme in Drupal, run `drush config-set system.theme default THEMENAME`
6. Run `npm start`

You are good to go! It will watch all your files for changes automatically and live update your browser.
