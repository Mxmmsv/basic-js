const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let domain of domains) {
    const parts = domain.split('.');
    let subDomain = '';

    for (let i = 0; i < parts.length; i++) {
      subDomain += '.' + parts[parts.length - 1 - i];
      result[subDomain] = (result[subDomain] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
