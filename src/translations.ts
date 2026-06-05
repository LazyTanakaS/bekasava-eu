type TranslationItem = {
  eyebrow: string;
  heroTitle: string;
  heroSub: string;
  heroBtn: string;
  servicesTitle: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutText: string;
  contactTitle: string;
  contactSub: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactHours: string;
  cards: Array<{ title: string; text: string }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

type TranslationMap = Record<'cz' | 'ru' | 'bg' | 'be', TranslationItem>;

export const t: TranslationMap = {
  cz: {
    eyebrow: 'SOUDNÍ TLUMOČNICE · PŘEKLADATELKA',
    heroTitle: 'Profesionální překlady a tlumočení',
    heroSub: 'Praha · Čeština, ruština, běloruština, bulharština',
    heroBtn: 'Kontaktovat →',
    servicesTitle: 'Naše služby',
    aboutEyebrow: 'O MNĚ',
    aboutTitle: 'Mgr. Aksana Bekasava Ph.D.',
    aboutText:
      'Nabízíme Vám profesionálně a rychle: tlumočení a překlady z českého do bulharského jazyka (soudní ověření), překlady a tlumočení z bulharského do českého jazyka (soudní ověření), tlumočení a překlady z českého do ruského jazyka (soudní ověření), překlady a tlumočení z ruského do českého jazyka (soudní ověření), překlady z běloruského do českého jazyka (soudní ověření) a překlady z českého do běloruského jazyka (soudní ověření).',
    contactTitle: 'Kontaktujte nás',
    contactSub: 'Ozvěte se nám, rádi vám pomůžeme',
    contactEmail: 'oksanaprin@seznam.cz',
    contactPhone: '+420 608 789 395',
    contactAddress: 'Hurbanova 1305/11, Praha',
    contactHours: 'Po domluvě',
    cards: [
      {
        title: 'Úřední překlady',
        text: 'Pasy, diplomy, rodné listy, úřední listiny',
      },
      {
        title: 'Tlumočení',
        text: 'Soudy, svatby, matriky, konsekutivní tlumočení',
      },
      {
        title: 'Právní texty',
        text: 'Soudní překlady s razítkem, naprostá diskrétnost',
      },
    ],
    faqTitle: 'Časté otázky',
    faqs: [
      {
        question: 'Jaké jazyky překládáte?',
        answer:
          'Ruský, běloruský a bulharský jazyk do češtiny, běloruštiny a zpět.',
      },
      {
        question: 'Jak dlouho trvá překlad?',
        answer: 'Záleží na rozsahu, obvykle 1–3 pracovní dny.',
      },
      {
        question: 'Jsou překlady úředně ověřené?',
        answer: 'Ano, jako soudní tlumočnice mohu opatřit překlad razítkem.',
      },
      {
        question: 'Jak probíhá spolupráce?',
        answer:
          'Zašlete nám dokument e-mailem, domluvíme se na ceně a termínu. Hotový překlad obdržíte e-mailem nebo osobně.',
      },
      {
        question: 'Spolupracujete s firmami?',
        answer:
          'Ano, spolupracujeme jak s fyzickými osobami, tak s firmami a orgány veřejné moci.',
      },
      {
        question: 'Provádíte ústní tlumočení?',
        answer: 'Ano.',
      },
      {
        question: 'Poskytujete soudní překlady a tlumočení?',
        answer: 'Ano.',
      },
    ],
  },
  ru: {
    eyebrow: 'СУДЕБНЫЙ ПЕРЕВОДЧИК',
    heroTitle: 'Профессиональные переводы и устный перевод',
    heroSub: 'Прага · Чешский, русский, белорусский, болгарский',
    heroBtn: 'Связаться →',
    servicesTitle: 'Наши услуги',
    aboutEyebrow: 'ОБО МНЕ',
    aboutTitle: 'Mgr. Aksana Bekasava Ph.D.',
    aboutText:
      'Имею почти двадцатилетний опыт в переводе и устном переводе и с радостью поделюсь им с вами. Предлагаю профессиональные переводы официальных документов, правовых актов, перевожу в судах, на свадьбах, в загсах и предоставляю последовательный перевод на совещаниях. Полная конфиденциальность и защита персональных данных гарантированы.',
    contactTitle: 'Связаться с нами',
    contactSub: 'Напишите нам, мы рады помочь',
    contactEmail: 'oksanaprin@seznam.cz',
    contactPhone: '+420 608 789 395',
    contactAddress: 'Hurbanova 1305/11, Praha',
    contactHours: 'По договорённости',
    cards: [
      {
        title: 'Официальные переводы',
        text: 'Паспорта, дипломы, свидетельства, официальные документы',
      },
      {
        title: 'Устный перевод',
        text: 'Суды, свадьбы, загсы, последовательный перевод',
      },
      {
        title: 'Юридические тексты',
        text: 'Судебные переводы с печатью, полная конфиденциальность',
      },
    ],
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Какие языки вы переводите?',
        answer:
          'Русский, белорусский и болгарский язык на чешский, белорусский и обратно.',
      },
      {
        question: 'Сколько времени занимает перевод?',
        answer: 'Зависит от объёма, обычно 1–3 рабочих дня.',
      },
      {
        question: 'Являются ли переводы официально заверенными?',
        answer: 'Да, как судебный переводчик я могу заверить перевод печатью.',
      },
      {
        question: 'Как проходит сотрудничество?',
        answer:
          'Отправьте нам документ по email, договоримся о цене и сроке. Готовый перевод получите по email или лично.',
      },
      {
        question: 'Работаете ли вы с компаниями?',
        answer:
          'Да, работаем как с физическими лицами, так и с компаниями и государственными органами.',
      },
    ],
  },
  bg: {
    eyebrow: 'СЪДЕБЕН ПРЕВОДАЧ',
    heroTitle: 'Професионални преводи и устен превод',
    heroSub: 'Прага · Чешки, руски, беларуски, български',
    heroBtn: 'Свържете се →',
    servicesTitle: 'Нашите услуги',
    aboutEyebrow: 'ЗА МЕН',
    aboutTitle: 'Mgr. Aksana Bekasava Ph.D.',
    aboutText:
      'Имам почти двадесетгодишен опит в превода и устния превод и с удоволствие ще го споделя с вас. Предлагаме професионални преводи на официални документи, правни актове, превеждаме в съдилища, на сватби, в матрикулни служби и осигуряваме последователен превод на срещи. Пълна дискретност и защита на личните данни са гарантирани.',
    contactTitle: 'Свържете се с нас',
    contactSub: 'Пишете ни, ще се радваме да помогнем',
    contactEmail: 'oksanaprin@seznam.cz',
    contactPhone: '+420 608 789 395',
    contactAddress: 'Hurbanova 1305/11, Praha',
    contactHours: 'По договореност',
    cards: [
      {
        title: 'Официални преводи',
        text: 'Паспорти, дипломи, удостоверения, официални документи',
      },
      {
        title: 'Устен превод',
        text: 'Съдилища, сватби, матрикулни служби, последователен превод',
      },
      {
        title: 'Правни текстове',
        text: 'Съдебни преводи с печат, пълна дискретност',
      },
    ],
    faqTitle: 'Често задавани въпроси',
    faqs: [
      {
        question: 'Какви езици превеждате?',
        answer:
          'Руски, беларуски и български език на чешки, беларуски и обратно.',
      },
      {
        question: 'Колко време отнема преводът?',
        answer: 'Зависи от обема, обикновено 1–3 работни дни.',
      },
      {
        question: 'Официално заверени ли са преводите?',
        answer: 'Да, като съдебен преводач мога да заверя превода с печат.',
      },
      {
        question: 'Как протича сътрудничеството?',
        answer:
          'Изпратете ни документа по email, ще се договорим за цена и срок. Готовият превод ще получите по email или лично.',
      },
      {
        question: 'Работите ли с фирми?',
        answer:
          'Да, работим както с физически лица, така и с фирми и държавни органи.',
      },
    ],
  },
  be: {
    eyebrow: 'СУДОВЫ ПЕРАКЛАДЧЫК',
    heroTitle: 'Прафесійныя пераклады і вусны пераклад',
    heroSub: 'Прага · Чэшская, руская, беларуская, балгарская мовы',
    heroBtn: 'Звязацца →',
    servicesTitle: 'Нашы паслугі',
    aboutEyebrow: 'ПРА МЯНЕ',
    aboutTitle: 'Mgr. Aksana Bekasava Ph.D.',
    aboutText:
      'Маю амаль дваццацігадовы досвед у перакладзе і вусным перакладзе і з радасцю падзялюся ім з вамі. Прапаную прафесійныя пераклады афіцыйных дакументаў, прававых актаў, перакладаю ў судах, на вяселлях, у загсах і забяспечваю паслядоўны пераклад на нарадах. Поўная канфідэнцыяльнасць і абарона персанальных даных гарантаваныя.',
    contactTitle: 'Звязацца з намі',
    contactSub: 'Напішыце нам, мы рады дапамагчы',
    contactEmail: 'oksanaprin@seznam.cz',
    contactPhone: '+420 608 789 395',
    contactAddress: 'Hurbanova 1305/11, Praha',
    contactHours: 'Па дамоўленасці',
    cards: [
      {
        title: 'Афіцыйныя пераклады',
        text: 'Пашпарты, дыпломы, пасведчанні, афіцыйныя дакументы',
      },
      {
        title: 'Вусны пераклад',
        text: 'Суды, вяселлі, загсы, паслядоўны пераклад',
      },
      {
        title: 'Прававыя тэксты',
        text: 'Судовыя пераклады з пячаткай, поўная канфідэнцыяльнасць',
      },
    ],
    faqTitle: 'Частыя пытанні',
    faqs: [
      {
        question: 'Якія мовы вы перакладаеце?',
        answer:
          'Рускую, беларускую і балгарскую мову на чэшскую, беларускую і назад.',
      },
      {
        question: 'Колькі часу займае пераклад?',
        answer: "Залежыць ад аб'ёму, звычайна 1–3 працоўныя дні.",
      },
      {
        question: "Ці з'яўляюцца пераклады афіцыйна засведчанымі?",
        answer:
          'Так, як судовы перакладчык я магу засведчыць пераклад пячаткай.',
      },
      {
        question: 'Як адбываецца супрацоўніцтва?',
        answer:
          'Адпраўце нам дакумент па email, дамовімся аб цане і тэрміне. Гатовы пераклад атрымаеце па email або асабіста.',
      },
      {
        question: 'Ці працуеце вы з кампаніямі?',
        answer:
          'Так, працуем як з фізічнымі асобамі, так і з кампаніямі і дзяржаўнымі органамі.',
      },
    ],
  },
};
