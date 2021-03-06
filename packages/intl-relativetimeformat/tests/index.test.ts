import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-pluralrules/polyfill-locales';
import * as zh from '../dist/locale-data/zh.json';
import * as en from '../dist/locale-data/en.json';
import RelativeTimeFormat from '../src';
RelativeTimeFormat.__addLocaleData(en, zh);

describe('Intl.RelativeTimeFormat', function () {
  it('should lookup zh-CN', function () {
    expect(new RelativeTimeFormat('zh-CN').format(-1, 'second')).toBe(
      '1秒钟前'
    );
  });
  it('should lookup zh-TW', function () {
    expect(new RelativeTimeFormat('zh-TW').format(-1, 'second')).toBe('1 秒前');
  });
  it('should resolve parent correctly', function () {
    expect(new RelativeTimeFormat('en-AI').format(-1, 'second')).toBe(
      '1 second ago'
    );
  });
});
