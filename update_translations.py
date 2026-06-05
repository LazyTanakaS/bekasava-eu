import re

file_content = open('src/translations.ts').read()

new_fields = """
  pricingTitle: string;
  pricingSub: string;
  pricingBtn: string;
  pricingPlans: Array<{
    name: string;
    price: string;
    unit: string;
    features: string[];
    highlight?: boolean;
  }>;
"""

# Update TranslationItem interface
file_content = re.sub(r'type TranslationItem = \{.*?\};', 
                    lambda m: m.group(0).replace('};', new_fields + '};'), 
                    file_content, flags=re.DOTALL)

# Default data for each language
pricing_data = {
    'cz': {
        'pricingTitle': 'Ceník',
        'pricingSub': 'Transparentní ceny za naše vysoce kvalitní služby',
        'pricingBtn': 'Poptat službu',
        'pricingPlans': [
            {'name': 'Úřední překlady', 'price': 'od 450 Kč', 'unit': '/ normostrana', 'features': ['Soudní ověření', 'Rychlé dodání', 'Kvalitní zpracování']},
            {'name': 'Tlumočení', 'price': '700 Kč', 'unit': '/ hodina', 'features': ['Svatby a úřady', 'Soudní jednání', 'Konsekutivní tlumočení'], 'highlight': True},
            {'name': 'Právní texty', 'price': 'od 550 Kč', 'unit': '/ normostrana', 'features': ['Smlouvy a listiny', 'Odborná terminologie', 'Absolutní přesnost']}
        ]
    },
    'ru': {
        'pricingTitle': 'Цены',
        'pricingSub': 'Прозрачные цены на наши услуги высокого качества',
        'pricingBtn': 'Запросить услугу',
        'pricingPlans': [
            {'name': 'Официальные переводы', 'price': 'от 450 крон', 'unit': '/ страница', 'features': ['Судебное заверение', 'Быстрая доставка', 'Качественная обработка']},
            {'name': 'Перевод', 'price': '700 крон', 'unit': '/ час', 'features': ['Свадьбы и ведомства', 'Судебные заседания', 'Последовательный перевод'], 'highlight': True},
            {'name': 'Юридические тексты', 'price': 'от 550 крон', 'unit': '/ страница', 'features': ['Договоры и документы', 'Специальная терминология', 'Абсолютная точность']}
        ]
    },
    'bg': {
        'pricingTitle': 'Цени',
        'pricingSub': 'Прозрачни цени за нашите висококачествени услуги',
        'pricingBtn': 'Запитване',
        'pricingPlans': [
            {'name': 'Официални преводи', 'price': 'от 450 CZK', 'unit': '/ страница', 'features': ['Заклет превод', 'Бърза доставка', 'Качествена обработка']},
            {'name': 'Превод', 'price': '700 CZK', 'unit': '/ час', 'features': ['Сватби и институции', 'Съдебни заседания', 'Консекутивен превод'], 'highlight': True},
            {'name': 'Правни текстови', 'price': 'от 550 CZK', 'unit': '/ страница', 'features': ['Договори и документи', 'Специализирана терминология', 'Абсолютна точност']}
        ]
    },
    'be': {
        'pricingTitle': 'Цэны',
        'pricingSub': 'Празрыстыя цэны на нашы паслугі высокай якасці',
        'pricingBtn': 'Запытаць паслугу',
        'pricingPlans': [
            {'name': 'Афіцыйныя пераклады', 'price': 'ад 450 крон', 'unit': '/ старонка', 'features': ['Судовае засведчанне', 'Хуткая дастаўка', 'Якасная апрацоўка']},
            {'name': 'Пераклад', 'price': '700 крон', 'unit': '/ гадзіна', 'features': ['Вяселлі і ведамствы', 'Судовыя пасяджэнні', 'Паслядоўны пераклад'], 'highlight': True},
            {'name': 'Юрыдычныя тэксты', 'price': 'ад 550 крон', 'unit': '/ старонка', 'features': ['Дагаворы і дакументы', 'Спецыяльная тэрміналогія', 'Абсалютная дакладнасць']}
        ]
    }
}

import json

for lang, data in pricing_data.items():
    # Find the block for this language and inject the new fields
    pattern = rf'{lang}:\s*\{{.*?(faqs:\s*\[.*?\])\s*\}}'
    
    def replacer(match):
        faqs_part = match.group(1)
        new_content = faqs_part + ",\n"
        new_content += f"    pricingTitle: '{data['pricingTitle']}',\n"
        new_content += f"    pricingSub: '{data['pricingSub']}',\n"
        new_content += f"    pricingBtn: '{data['pricingBtn']}',\n"
        new_content += f"    pricingPlans: {json.dumps(data['pricingPlans'], ensure_ascii=False)}"
        return match.group(0).replace(faqs_part, new_content)

    file_content = re.sub(pattern, replacer, file_content, flags=re.DOTALL)

with open('src/translations.ts', 'w') as f:
    f.write(file_content)
