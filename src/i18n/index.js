import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en';
import zhCN from './zh-CN';
import ptBR from './pt-BR';

Vue.use(VueI18n)

// en-AU Australia 澳大利亚
// pt-BR Brazil 巴西
console.log(navigator.language)

// console.log(sessionStorage.getItem('lan'))
const i18n = new VueI18n({

    locale: navigator.language === 'pt-BR' ? navigator.language : 'en',
    messages: {
        en,
        'zh-CN': zhCN,
        'pt-BR': ptBR,
    },
});

export default i18n;