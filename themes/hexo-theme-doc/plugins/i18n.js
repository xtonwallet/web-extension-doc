const _ = require('lodash');
const util = require('hexo-util');

module.exports = ({hexo}) => {
  const {
      isDefaultLanguage,
      getUsedLanguages,
      getDisplayLanguages,
      getPageLanguage,
      formatRfc5646,
      formatIso639,
      getClosestRfc5646WithCountryCode
  } = require('../lib/nodejs/i18n')(hexo);

  hexo.extend.filter.register('template_locals', function (locals) {
    locals.initial_state.config.lang = getPageLanguage(locals.page);
    return locals;
  }, 20);

  /**
   * Get all languages set in the site's _config.yml
   */
  hexo.extend.helper.register('display_languages', function () {
      return getDisplayLanguages();
  });

  /**
   * Test if the given language is sites default language.
   */
  hexo.extend.helper.register('is_default_language', function (language) {
      return isDefaultLanguage(language);
  });

  /**
   * Get page language. Returns empty if language is not found or is default language.
   */
  hexo.extend.helper.register('page_language', function () {
      return getPageLanguage(this.page);
  });

  /**
   * Get page path given a certain language tag
   */
  hexo.extend.helper.register('i18n_path', function (language) {
      const path = this.page.path;
      const lang = getPageLanguage(this.page);
      const base = path.startsWith(lang) ? path.slice(lang.length + 1) : path;
      return (language ? '/' + language : '') + '/' + base;
  });

  /**
   * Format language to RFC5646 style
   */
  hexo.extend.helper.register('rfc5646', function (language) {
      return formatRfc5646(language);
  });

  /**
   * Return the ISO639 part of the language tag
   */
  hexo.extend.helper.register('iso639', function (language) {
      return formatIso639(language);
  });

  /**
   * Get the closest language tag to the provided language tag
   */
  hexo.extend.helper.register('closest_rfc5646_with_country_code', function (language) {
      return getClosestRfc5646WithCountryCode(language);
  });

  /**
   * Get the language name
   */
  hexo.extend.helper.register('language_name', function (language) {
      const name = hexo.theme.i18n.__(language)('name');
      return name === 'name' ? language : name;
  });
}
