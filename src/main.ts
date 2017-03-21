import { Aurelia } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal'
import 'materialize-css';
import * as Backend from 'i18next-xhr-backend';

function loadLocales(url, options, callback, data) {
  try {
    let waitForLocale = require('bundle-loader!./locales/'+url+'.json');
    waitForLocale((locale) => {
      callback(locale, {status: '200'});
    })
  } catch (e) {
    callback(null, {status: '404'});
  }
}

export function configure(aurelia: Aurelia): void {
    aurelia.use.standardConfiguration()
      //     .plugin(PLATFORM.moduleName('aurelia-dialog'))
           .plugin(PLATFORM.moduleName('ag-grid-aurelia'))
           .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), (bridge:any) => bridge.useAll())
           .plugin(PLATFORM.moduleName('aurelia-i18n'), (instance:any) => {
             // register backend plugin
             instance.i18next.use(Backend);


             // adapt options to your needs (see http://i18next.com/docs/options/)
             // make sure to return the promise of the setup method, in order to guarantee proper loading
             return instance.setup({
                                     backend: {                                  // <-- configure backend settings
                                       loadPath: '{{lng}}',
                                       parse: (data) => data,
                                       ajax: loadLocales
                                     },
                                     lng: 'en',
                                     attributes: ['t', 'i18n'],
                                     fallbackLng: 'en',
                                     debug: false
                                   })});

            aurelia.start().then(() => aurelia.setRoot('app'));
}
