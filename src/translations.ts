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
  contactEmail: string[];
  contactPhone: string;
  contactAddress: string[];
  pricingText: string;
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
      'Nabízíme profesionální překlady úředních listin, právních předpisů, tlumočíme u soudů, na svatbách, na matrikách, poskytujeme konsekutivní tlumočení schůzí. Spolupracujeme jednak s orgány veřejné moci, jednak s fyzickými a právnickými osobami. Překládáme a tlumočíme pro vás nad dvacet pět let. Ručíme za diskrétnost, důvěrnost informací, ochranu osobních údajů podle platné právní úpravy.',
    pricingText:
      'Naše ceny jsou v souladu s právními předpisy. Pro stálé zákazníky máme příjemné slevy. Pro lepší představu o cenách se neváhejte nás kontaktovat.',
    contactTitle: 'Kontaktujte nás',
    contactSub: 'Ozvěte se nám, rádi vám pomůžeme',
    contactEmail: ['abekasava@gmail.com', 'oksnaprin@seznam.cz'],
    contactPhone: '+420 608 789 395',
    contactAddress: [
      'Hurbanova 1305/11, Praha',
      'Stará Kysibelská 191/16, Karlovy Vary',
    ],
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
          'Z českého jazyka do ruského, běloruského a bulharského jazyka a z ruského, běloruského a bulharského jazyka do českého jazyka.',
      },
      {
        question: 'Jak dlouho trvá překlad?',
        answer: 'Záleží na rozsahu, obvykle 2–5 pracovních dní.',
      },
      {
        question: 'Jsou překlady úředně ověřené?',
        answer:
          'Ano, jako soudní tlumočnice a překladatelka zapsána do seznamu soudních tlumočníků a překladatelů Ministerstva spravedlnosti České republiky vykonávám svou činnost v souladu se zákonem č. 354/2019 Sb. a mám zákonné právo opatřit překlad nebo zápis tlumočnického úkonu oficiálním razítkem soudního překladatele nebo soudního tlumočníka.',
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
        answer:
          'Ano. Tlumočíme pro fyzické a právnické osoby: u soudu, při obchodních jednáních, u notářských záležitostí, na svatbách, na matrikách atd.',
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
      'Предлагаем профессиональные переводы официальных документов, правовых актов, переводим в судах, на свадьбах, в загсах, обеспечиваем последовательный перевод на совещаниях. Сотрудничаем как с органами государственной власти, так и с физическими и юридическими лицами. Переводим для вас уже более двадцати пяти лет. Гарантируем дискретность, конфиденциальность информации, защиту персональных данных в соответствии с действующим законодательством.',
    pricingText:
      'Наши цены соответствуют законодательным нормам. Для постоянных клиентов предусмотрены приятные скидки. Для получения информации о ценах не стесняйтесь обращаться к нам.',
    contactTitle: 'Связаться с нами',
    contactSub: 'Напишите нам, мы рады помочь',
    contactEmail: ['abekasava@gmail.com', 'oksnaprin@seznam.cz'],
    contactPhone: '+420 608 789 395',
    contactAddress: [
      'Hurbanova 1305/11, Praha',
      'Stará Kysibelská 191/16, Karlovy Vary',
    ],
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
          'С чешского языка на русский, белорусский и болгарский, а также с русского, белорусского и болгарского языков на чешский.',
      },
      {
        question: 'Сколько времени занимает перевод?',
        answer: 'Зависит от объёма, обычно 2–5 рабочих дней.',
      },
      {
        question: 'Являются ли переводы официально заверенными?',
        answer:
          'Да, как судебный переводчик и переводчица, внесённая в список судебных переводчиков Министерства юстиции Чешской Республики, я осуществляю свою деятельность в соответствии с законом № 354/2019 Сб. и имею законное право заверить перевод официальной печатью судебного переводчика.',
      },
      {
        question: 'Как проходит сотрудничество?',
        answer:
          'Отправьте нам документ по email, договоримся о цене и сроке. Готовый перевод получите по email или лично.',
      },
      {
        question: 'Выполняете ли вы устный перевод?',
        answer:
          'Да. Переводим для физических и юридических лиц: в суде, на деловых переговорах, у нотариуса, на свадьбах, в загсах и т.д.',
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
      'Предлагаме професионални преводи на официални документи, правни актове, превеждаме в съдилища, на сватби, в матрикулни служби, осигуряваме последователен превод на срещи. Работим както с органи на публичната власт, така и с физически и юридически лица. Превеждаме за вас вече над двадесет и пет години. Гарантираме дискретност, поверителност на информацията и защита на личните данни съгласно действащото законодателство.',
    pricingText:
      'Нашите цени са в съответствие с нормативните изисквания. За постоянни клиенти предлагаме приятни отстъпки. За по-добра представа за цените не се колебайте да се свържете с нас.',
    contactTitle: 'Свържете се с нас',
    contactSub: 'Пишете ни, ще се радваме да помогнем',
    contactEmail: ['abekasava@gmail.com', 'oksnaprin@seznam.cz'],
    contactPhone: '+420 608 789 395',
    contactAddress: [
      'Hurbanova 1305/11, Praha',
      'Stará Kysibelská 191/16, Karlovy Vary',
    ],
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
          'От чешки на руски, беларуски и български език, както и от руски, беларуски и български на чешки.',
      },
      {
        question: 'Колко време отнема преводът?',
        answer: 'Зависи от обема, обикновено 2–5 работни дни.',
      },
      {
        question: 'Официално заверени ли са преводите?',
        answer:
          'Да, като съдебен преводач, вписан в списъка на съдебните преводачи на Министерството на правосъдието на Република Чехия, извършвам дейността си в съответствие със закон № 354/2019 Сб. и имам законното право да заверя превода с официален печат на съдебен преводач.',
      },
      {
        question: 'Как протича сътрудничеството?',
        answer:
          'Изпратете ни документа по email, ще се договорим за цена и срок. Готовият превод ще получите по email или лично.',
      },
      {
        question: 'Извършвате ли устен превод?',
        answer:
          'Да. Превеждаме за физически и юридически лица: в съда, при бизнес преговори, при нотариални дела, на сватби, в матрикулни служби и др.',
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
      'Прапануем прафесійныя пераклады афіцыйных дакументаў, прававых актаў, перакладаем у судах, на вяселлях, у загсах, забяспечваем паслядоўны пераклад на нарадах. Супрацоўнічаем як з органамі дзяржаўнай улады, так і з фізічнымі і юрыдычнымі асобамі. Перакладаем для вас ужо больш за дваццаць пяць гадоў. Гарантуем дыскрэтнасць, канфідэнцыяльнасць інфармацыі, абарону персанальных даных у адпаведнасці з дзеючым заканадаўствам.',
    pricingText:
      'Нашы цэны адпавядаюць нарматыўным патрабаванням. Для пастаянных кліентаў прадугледжаны прыемныя зніжкі. Для атрымання інфармацыі аб цэнах не саромейцеся звяртацца да нас.',
    contactTitle: 'Звязацца з намі',
    contactSub: 'Напішыце нам, мы рады дапамагчы',
    contactEmail: ['abekasava@gmail.com', 'oksnaprin@seznam.cz'],
    contactPhone: '+420 608 789 395',
    contactAddress: [
      'Hurbanova 1305/11, Praha',
      'Stará Kysibelská 191/16, Karlovy Vary',
    ],
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
          'З чэшскай мовы на рускую, беларускую і балгарскую, а таксама з рускай, беларускай і балгарскай на чэшскую.',
      },
      {
        question: 'Колькі часу займае пераклад?',
        answer: "Залежыць ад аб'ёму, звычайна 2–5 працоўных дзён.",
      },
      {
        question: "Ці з'яўляюцца пераклады афіцыйна засведчанымі?",
        answer:
          'Так, як судовы перакладчык, унесены ў спіс судовых перакладчыкаў Міністэрства юстыцыі Чэшскай Рэспублікі, я ажыццяўляю сваю дзейнасць у адпаведнасці з законам № 354/2019 Зб. і маю законнае права засведчыць пераклад афіцыйнай пячаткай судовага перакладчыка.',
      },
      {
        question: 'Як адбываецца супрацоўніцтва?',
        answer:
          'Адпраўце нам дакумент па email, дамовімся аб цане і тэрміне. Гатовы пераклад атрымаеце па email або асабіста.',
      },
      {
        question: 'Ці выконваеце вы вусны пераклад?',
        answer:
          'Так. Перакладаем для фізічных і юрыдычных асоб: у судзе, на дзелавых перамовах, у натарыяльных справах, на вяселлях, у загсах і г.д.',
      },
      {
        question: 'Ці працуеце вы з кампаніямі?',
        answer:
          'Так, працуем як з фізічнымі асобамі, так і з кампаніямі і дзяржаўнымі органамі.',
      },
    ],
  },
};
