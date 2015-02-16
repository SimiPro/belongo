'use strict';

/**
 * @ngdoc overview
 * @name belongojsApp
 * @description
 * # belongojsApp
 *
 * Main module of the application.
 */
angular
  .module('belongo', [
    /* ang - modules */
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    ///
    'gettext',
    'toasty',

    /** Our modules */
    'com.module.core',
    'com.module.users'

  ])
  .run(function ($rootScope, $cookies, gettextCatalog) {

    $rootScope.locales = {
      'en': {lang: 'en', country: 'US', name: gettextCatalog.getString('English')},
      'de': {lang: 'de', country: 'DE', name: gettextCatalog.getString('German')},
      'fr': {lang: 'fr', country: 'FR', name: gettextCatalog.getString('Français')}
    }

    var lang = $cookies.lang || navigator.language || navigator.userLanguage;

    $rootScope.locale = $rootScope.locales[lang];

    if ($rootScope.locale === undefined) {
      $rootScope.locale = $rootScope.locales[lang];
      if ($rootScope.locale === undefined) {
        $rootScope.locale = $rootScope.locales['en'];
      }
    }

    gettextCatalog.setCurrentLanguage($rootScope.locale.lang);
  });
