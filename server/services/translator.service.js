import { createRequire } from 'module';
// eslint-disable-next-line import/extensions

const require = createRequire(import.meta.url);
const { Translate } = require('@google-cloud/translate').v2;

class TranslatorService {
  constructor() {
    this.translate = new Translate({
      keyFilename: '/home/elregalo/Github/OpenSource/Learn-R/server/afridek-354500-09f946a810ff.json',
      projectId: 'afridek-354500',
    });
  }

  // eslint-disable-next-line max-len
  translateText = (text, target) => this.translate.translate(text, target).then(([translation]) => translation).catch((plain) => plain);
}

const translator = new TranslatorService();

export default translator;
