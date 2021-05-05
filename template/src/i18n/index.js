import ZhCn from './ZhCn.js'
import EnUs from './EnUs.js'

let locale = ZhCn.LANGUAGE.ID
const messages = {}

messages[ZhCn.LANGUAGE.ID] = ZhCn
messages[EnUs.LANGUAGE.ID] = EnUs


const userLanguage = window.localStorage.getItem('language')
if (userLanguage && userLanguage in messages) {
  locale = userLanguage
}

export default {
  locale,
  messages,
}
