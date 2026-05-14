// Скрипт локализации AHD Integrator v1.15
const translations = {
  ru: {
    "nav_order": "Заказать отчёт",
    "hero_title": "Персональный отчёт о твоей <br><em>внутренней архитектуре.</em>",
    "hero_sub": "На основе шести систем: астрология, Human Design, Матрица Судьбы. Читаешь — и узнаёшь себя. Не знак Зодиака. Себя.",
    "hero_tg": "Заказать в Telegram",
    "hero_structure": "Смотреть структуру",
    "hero_meta_1": "📄 PDF · 12 разделов",
    "hero_meta_2": "⏱ 3 дня",
    "hero_meta_3": "🔒 Индивидуально",
    "how_tag": "Как это работает",
    "how_title": "Три шага.<br>Никаких лишних действий.",
    "step1_name": "Оставляешь данные",
    "step1_desc": "Дата, время и город рождения. Если есть готовый расчёт HD или натальная карта — пришли, это повысит точность.",
    "step2_name": "Индивидуальный анализ",
    "step2_desc": "3 дня работы с шестью системами. Каждый вывод верифицируется минимум двумя независимыми источниками.",
    "step3_name": "Получаешь отчёт",
    "step3_desc": "PDF-документ: 12 разделов, IR-индекс, три конкретных задания и инструкция на 12 месяцев. Готов для изучения.",
    "sample_tag": "Механический аудит (Пример верификации)",
    "sample_title": "Паттерн: Социальная дипломатия при глубокой внутренней избирательности",
    "sample_astro": "Асцендент в Весах (дружелюбие) + Луна в Рыбах (закрытость).",
    "sample_hd": "4 линия (Связи) + 2 линия (Одиночество).",
    "sample_matrix": "П5=15 (Магнетизм) + П3=12 (Дистанция).",
    "sample_quote": "«...Вывод: Паттерн подтвержден. Вы обладаете природным магнетизмом и легко располагаете к себе людей, но ваша истинная продуктивность возможна только в периоды тотального уединения. Попытка быть \"постоянно на связи\" ведет к энергетическому истощению...»",
    "sample_note": "Фрагмент из реального раздела VII. Данные изменены.",
    "forwho_tag": "Для кого",
    "forwho_title": "Знакомая ситуация: <br>гороскопы и Human Design.",
    "forwho_desc": "Они дают много красивых слов, но мало понимания, что с этим делать. Есть узнавание себя в описании, но нет ясности — какой сделать следующий шаг.",
    "card1": "Знаешь свой тип HD, но не понимаешь как применить в реальной жизни",
    "card2": "Видишь паттерн, но не знаешь откуда он и как его остановить",
    "card3": "Хочешь механизм — не вдохновение — который объясняет именно твои действия",
    "card4": "Готовы к честному разговору: не только про таланты, но и про теневые зоны",
    "card5": "Хочешь конкретные задания, а не общие рекомендации",
    "card6": "Понимаешь, почему один и тот же сценарий повторяется — в деньгах, в отношениях, в решениях",
    "method_tag": "Принцип метода",
    "method_title": "Одна система — это версия.<br>Несколько систем — это факт о тебе.",
    "method_desc": "В отчёт попадает только то, что подтверждено минимум <strong>двумя системами</strong>. Шесть независимых источников смотрят на одно и то же.",
    "sys1_name": "Натальная карта", "sys1_desc": "Природа, мышление, конструкция", "sys_p1": "Приоритет I",
    "sys2_name": "Human Design", "sys2_desc": "Тип энергии, стратегия решений", "sys_p2": "Priority II",
    "sys3_name": "Матрица Судьбы", "sys3_desc": "Данность, задача, теневые зоны",
    "sys4_name": "Кармические узлы", "sys4_desc": "Откуда паттерн и куда расти",
    "sys5_name": "Теневые арканы", "sys5_desc": "Блоки в деньгах и отношениях", "sys_p3": "Priority III",
    "sys6_name": "Психологический слой", "sys6_desc": "Механизм: почему, а не только что",
    "sys_hier": "Иерархия при противоречии:", "sys_arc": "Арканы",
    "ir_tag": "IR-Индекс", "ir_title": "Числовая метрика<br>согласованности", "ir_desc": "IR показывает, насколько твои текущие действия совпадают с тем, что заложено в карте.",
    "ir_p1": "Принятие решений", "ir_p2": "Действие", "ir_p3": "Деньги", "ir_p4": "Партнёрство", "ir_p5": "Кармический вектор",
    "ir_l1": "Выживание", "ir_d1": "Энергия в защите",
    "ir_l2": "Компенсация", "ir_d2": "Много усилий, мало результата",
    "ir_l3": "Раскрытие", "ir_d3": "Рост возможен",
    "ir_l4": "Реализация", "ir_d4": "Действует из ядра",
    "struct_tag": "Структура отчёта", "struct_title": "12 разделов.<br>Каждый — о конкретном механизме.", "struct_desc": "Не описание черт характера — описание того, как работает твоя психика и почему.",
    "s1": "Конструкция личности", "s1_d": "Как думаешь, как принимаешь решения, когда энергия растёт, когда падает",
    "s2": "Главный внутренний конфликт", "s2_d": "Повторяющийся сценарий: к чему стремишься — и что выбираешь снова и снова вместо этого",
    "s3": "Точка силы", "s3_d": "Только то, что подтверждено тремя системами одновременно. Не комплимент — факт",
    "s4": "Стратегический вектор 3–5 лет", "s4_d": "Что усилить, что делегировать, что исключить — из данных карты",
    "s5": "Зоны риска", "s5_d": "Механизм энергетического слива: триггер → паттерн → потеря",
    "s6": "IR-индекс согласованности", "s6_d": "Числовая оценка того, насколько твои действия совпадают с картой",
    "s7": "Деньги и реализация", "s7_d": "Условия максимального дохода. Кармический паттерн блока. Контрольные точки",
    "s8": "Партнёрские отношения", "s8_d": "Модель ресурсного партнёрства. Паттерн привязанности. Триггерная цепочка",
    "s9": "Личная жизнь", "s9_d": "Эмоциональная конструкция. Условия подлинной близости. Скрытая зона",
    "s10": "Инструкция на 12 месяцев", "s10_d": "Усилить, прекратить, как принимать решения",
    "s11": "Активные транзиты", "s11_d": "Какие планетарные циклы активны сейчас — и как влияют на деньги и отношения",
    "s12": "Мотивационный протокол", "s12_d": "Три задания по методу под твой IR и тип HD",
    "comp_tag": "Чем отличается", "comp_title": "Не ещё один красивый отчёт",
    "c_usual": "Обычно", "c_ahd": "AHD Integrator",
    "cr1_l": "Описание знака, типа, профиля — каждое отдельно", "cr1_r": "Шесть систем говорят об одном — видишь пересечения",
    "cr2_l": "Вдохновляющие слова без привязки к данным", "cr2_r": "Каждый вывод подтверждён минимум двумя источниками",
    "cr3_l": "Таланты перечислены — что делать непонятно", "cr3_r": "Механизм: не только что, но почему и как остановить",
    "cr4_l": "Теневая зона смягчена или не упоминается", "cr4_r": "Теневые зоны честно и поведенчески — без диагнозов",
    "cr5_l": "Одна система — одна версия тебя", "cr5_r": "IR-индекс: числовая точка отсчёта, не ощущение",
    "cr6_l": "Читаешь и живёшь по-прежнему", "cr6_r": "Три конкретных задания — знаешь что делать дальше",
    "inc_tag": "Что входит", "inc_title": "Всё необходимое.<br>Ничего лишнего.",
    "inc1": "PDF-отчёт · 12 разделов", "inc1_d": "Полный анализ по всем блокам",
    "inc2": "Вводная страница", "inc2_d": "Как читать без специальных знаний",
    "inc3": "IR-индекс с расшифровкой", "inc3_d": "По 5 параметров с интерпретацией",
    "inc4": "Три персональных задания", "inc4_d": "Метод подобран под твой IR",
    "inc5": "Инструкция на 12 месяцев", "inc5_d": "Усилить, прекратить, как решать",
    "inc6": "Активные транзиты", "inc6_d": "На текущий период: деньги и отношения",
    "needs_title": "Нужны только:", "n1": "📅 Дата рождения", "n2": "⏰ Время рождения", "n3": "📍 Город рождения",
    "faq_tag": "Вопросы и ответы", "faq_title": "Ответы на часто<br>встречающиеся вопросы",
    "q6": "Какие отчеты доступны для заказа?", "a6": "Персональная архитектура взрослого и ребенка; совместный отчет родитель-ребенок; личные партнеры; бизнес партнеры; расчет астрографии; коучинговый расчет на основании опросника «Выход на новый уровень».",
    "q1": "Нужно ли знать астрологию или Human Design?", "a1": "Нет. Основной текст написан простым языком без терминов. Технические источники — отдельно, для тех кто хочет проверить.",
    "q2": "У меня уже есть расчёт HD и натальная карта. Это поможет?", "a2": "Да. Если пришлёшь готовые данные — расчёты будут точнее. Если нет — достаточно даты, времени и города рождения.",
    "q3": "Почему вывод попадает в отчёт только если подтверждён двумя системами?", "a3": "Одна система — это версия. Она может описывать потенциал, а не реальность. Когда три независимых источника говорят об одном качестве — это структурный факт о тебе.",
    "q4": "Скажет ли отчёт какую профессию выбрать?", "a4": "Нет. Карта описывает условия реализации энергии, а не профессию.",
    "q5": "Сколько времени занимает подготовка?", "a5": "3 рабочих дня. Каждый отчёт готовится индивидуально.",
    "ask_title": "Остался вопрос?", "ask_sub": "Напиши — отвечу в течение 24 часов",
    "ask_name": "Твоё имя", "ask_email": "Email для ответа", "ask_q": "Напиши свой вопрос...",
    "ask_btn": "Отправить вопрос", "ask_success": "✓ Вопрос получен — отвечу в течение 24 часов",
    "rev_tag": "Отзывы", "rev_title": "Что говорят<br>после получения отчёта",
    "r1_t": "«То, что я читала в отчёте, я чувствовала, знала на уровне подсознания...»", "r1_n": "Анна",
    "r2_t": "«Интуитивно я так и чувствовала, а ты подтвердила мои догадки анализом...»", "r2_n": "Мария",
    "r3_t": "«Разрозненно я всё знала. Но так, чтобы это было связано в единую систему — впервые...»", "r3_n": "Ольга",
    "r4_t": "«В точку, особенно последнее. Я перечитала раздел три раза — это правда про меня.»", "r4_n": "Екатерина",
    "r5_t": "«Ожидала красивых слов — получила цифры, таблицы, задания...»", "r5_n": "Татьяна",
    "r6_t": "«Три задания из XII раздела — конкретные, без воды. Впервые ощущение движения.»", "r6_n": "Ирина",
    "r7_t": "«Даа, очень понравился формат, когда несколько систем укладываются в общее понимание...»", "r_client": "Клиент",
    "r8_t": "«В отчете есть конкретные рекомендации. Это прям карта действий.»", "r8_n": "Екатерина",
    "r9_t": "«Волосы дыбом, вот лет на 20 бы эту проработку пораньше...»", "r9_n": "Клиент",
    "rev_meta": "Клиент AHD Integrator", "rev_more": "Читать все отзывы в Telegram",
    "auth_tag": "Об авторе", "auth_text": "Привет! Меня зовут Елена Деркач. Я не астролог. Я не нумеролог. Я человек из бизнеса. Живу из головы, из структуры, из логики.<br><br>В итоге получилась архитектура, где каждый вывод верифицируется минимум тремя независимыми источниками.",
    "stat1_num": "1.5 года", "stat1_label": "изучения систем",
    "stat2_num": "6", "stat2_label": "систем в методе",
    "stat3_num": "3+", "stat3_label": "источника верификации",
    "order_tag": "ЗАКАЗАТЬ",
    "order_features": "Разовая оплата · Готовится индивидуально · PDF · 3 дня",
    "order_nav": "12 разделов · IR-индекс · 3 задания · Инструкция на год · Транзиты",
    "price_note": "Разовая оплата · Без подписки · Без скрытых условий",
    "btn_pay": "Заказать отчёт →",
    "n_footer": "Нужны: дата, время и город рождения",
    "ask_sub_footer": "Остались вопросы? Напишите мне — я отвечу в течение 24 часов.",
    "foot_copy": "© 2026 Deep Dive Report. Индивидуальный анализ."
  },
  en: {
    "nav_order": "Order Report",
    "hero_title": "Personal report on your <br><em>inner architecture.</em>",
    "hero_sub": "Based on six systems: astrology, Human Design, Matrix of Destiny. You read it and you recognize yourself. Not a Zodiac sign. Yourself.",
    "hero_tg": "Order in Telegram",
    "hero_structure": "View Structure",
    "hero_meta_1": "📄 PDF · 12 Sections",
    "hero_meta_2": "⏱ 3 Days",
    "hero_meta_3": "🔒 Personal",
    "how_tag": "How it works",
    "how_title": "Three steps.<br>No extra actions.",
    "step1_name": "Provide data",
    "step1_desc": "Date, time and city of birth. If you have a ready HD calculation or natal chart — send it, it will increase accuracy.",
    "step2_name": "Individual analysis",
    "step2_desc": "3 days of work with six systems. Every conclusion is verified by at least two independent sources.",
    "step3_name": "Get report",
    "step3_desc": "PDF document: 12 sections, IR index, three specific tasks, and a 12-month guide. Ready for study.",
    "sample_tag": "MECHANICAL AUDIT (VERIFICATION EXAMPLE)",
    "sample_title": "Pattern: Social diplomacy with deep inner selectivity",
    "sample_astro": "Ascendant in Libra (friendliness) + Moon in Pisces (closure).",
    "sample_hd": "4 line (Connections) + 2 line (Solitude).",
    "sample_matrix": "P5=15 (Magnetism) + P3=12 (Distance).",
    "sample_quote": "«...Conclusion: Pattern confirmed. You possess natural magnetism and easily win people over, but your true productivity is only possible during periods of total solitude. Attempting to be \"constantly connected\" leads to energy depletion...»",
    "sample_note": "Fragment from actual section VII. Data changed.",
    "forwho_tag": "For Whom",
    "forwho_title": "Familiar Situation: <br>Horoscopes and Human Design.",
    "forwho_desc": "They give many beautiful words, but little understanding of what to do. There's self-recognition, but no clarity on the next step.",
    "card1": "You know your HD type but don't understand how to apply it in real life",
    "card2": "You see a pattern but don't know where it comes from or how to stop it",
    "card3": "You want a mechanism — not inspiration — that explains your specific actions",
    "card4": "Ready for an honest conversation: not just about talents, but also about shadow zones",
    "card5": "You want specific tasks, not general recommendations",
    "card6": "You understand why the same scenario repeats — in money, relationships, decisions",
    "method_tag": "Method Principle",
    "method_title": "One system is a version.<br>Multiple systems is a fact about you.",
    "method_desc": "Only what is confirmed by at least <strong>two systems</strong> goes into the report. Six independent sources look at the same thing.",
    "sys1_name": "Natal Chart", "sys1_desc": "Nature, thinking, construction", "sys_p1": "Priority I",
    "sys2_name": "Human Design", "sys2_desc": "Energy type, decision strategy", "sys_p2": "Priority II",
    "sys3_name": "Matrix of Destiny", "sys3_desc": "Given potential, task, shadow zones",
    "sys4_name": "Karmic Nodes", "sys4_desc": "Origin of pattern and where to grow",
    "sys5_name": "Shadow Arcana", "sys5_desc": "Blocks in money and relationships", "sys_p3": "Priority III",
    "sys6_name": "Psychological Layer", "sys6_desc": "Mechanism: why, not just what",
    "sys_hier": "Hierarchy if conflict occurs:", "sys_arc": "Arcana",
    "ir_tag": "IR-Index", "ir_title": "Numerical metric<br>of consistency", "ir_desc": "IR shows how much your current actions match what is in the chart.",
    "ir_p1": "Decision making", "ir_p2": "Action", "ir_p3": "Money", "ir_p4": "Partnership", "ir_p5": "Karmic vector",
    "ir_l1": "Survival", "ir_d1": "Energy in defense",
    "ir_l2": "Compensation", "ir_d2": "Much effort, little result",
    "ir_l3": "Revelation", "ir_d3": "Growth is possible",
    "ir_l4": "Realization", "ir_d4": "Acting from the core",
    "struct_tag": "Report Structure", "struct_title": "12 Sections.<br>Each about a specific mechanism.", "struct_desc": "Not traits — mechanisms of your psyche.",
    "s1": "Personality Construction", "s1_d": "How you think, how you make decisions, energy cycles",
    "s2": "Main Inner Conflict", "s2_d": "Recurring scenario: what you strive for — and what you choose instead",
    "s3": "Point of Power", "s3_d": "Only what is confirmed by three systems. Not a compliment — a fact",
    "s4": "Strategic Vector 3–5 Years", "s4_d": "What to strengthen, what to delegate, what to exclude",
    "s5": "Risk Zones", "s5_d": "Energy drain mechanism: trigger → pattern → loss",
    "s6": "IR Consistency Index", "s6_d": "A numerical assessment of your alignment",
    "s7": "Money & Realization", "s7_d": "Conditions for maximum income. Blocks. Control points",
    "s8": "Partnership Relations", "s8_d": "Resourceful partnership model. Attachment pattern",
    "s9": "Personal Life", "s9_d": "Emotional structure. Conditions for true intimacy",
    "s10": "12-Month Instruction", "s10_d": "Strengthen, stop, how to make decisions",
    "s11": "Active Transits", "s11_d": "Which planetary cycles are active now",
    "s12": "Motivational Protocol", "s12_d": "Three tasks according to the method",
    "comp_tag": "Difference", "comp_title": "Not just another pretty report",
    "c_usual": "Usually", "c_ahd": "AHD Integrator",
    "cr1_l": "Description of sign/type — separately", "cr1_r": "Six systems say one thing — you see intersections",
    "cr2_l": "Inspiring words without data", "cr2_r": "Every conclusion is verified by 2+ sources",
    "cr3_l": "Talents are listed — unclear actions", "cr3_r": "Mechanism: why and how to stop it",
    "cr4_l": "Shadow zone is softened", "cr4_r": "Shadow zones honestly and behaviorally",
    "cr5_l": "One system — one version", "cr5_r": "IR index: numerical point of reference",
    "cr6_l": "You live as before", "cr6_r": "Three specific tasks — you know what to do",
    "inc_tag": "What's included", "inc_title": "Everything necessary.<br>Nothing extra.",
    "inc1": "PDF report · 12 sections", "inc1_d": "Full analysis across all blocks",
    "inc2": "Introductory page", "inc2_d": "How to read without special knowledge",
    "inc3": "IR index with decoding", "inc3_d": "By 5 parameters with interpretation",
    "inc4": "Three personal tasks", "inc4_d": "Method selected for your IR",
    "inc5": "12-month instruction", "inc5_d": "Strengthen, stop, how to solve",
    "inc6": "Active transits", "inc6_d": "For the current period: money and relationships",
    "needs_title": "Only need:", "n1": "📅 Birth Date", "n2": "⏰ Birth Time", "n3": "📍 Birth City",
    "faq_tag": "FAQ", "faq_title": "Frequently Asked Questions",
    "q6": "What reports are available for order?", "a6": "Personal architecture for adults and children; joint parent-child report; personal partners; business partners; astrographics calculation; coaching calculation based on the 'Leveling Up' questionnaire.",
    "q1": "Do I need to know astrology?", "a1": "No. The main text is written in simple language without terms. Technical sources — separately, for those who want to verify.",
    "q2": "I already have an HD calculation?", "a2": "Yes. If you send ready data, it increases accuracy. If not — date, time, and city of birth are sufficient.",
    "q3": "Why 2 systems confirmation?", "a3": "One system is a version. It can describe potential, not reality. When three independent sources say the same thing — it's a structural fact about you.",
    "q4": "Which profession to choose?", "a4": "No. The chart describes conditions, not professions.",
    "q5": "Preparation time?", "a5": "3 business days. Each report is prepared individually.",
    "ask_title": "Still have questions?", "ask_sub": "Message me — I'll answer within 24 hours",
    "ask_name": "Your name", "ask_email": "Email for reply", "ask_q": "Your question...",
    "ask_btn": "Send question", "ask_success": "✓ Question received — reply within 24 hours",
    "rev_tag": "Reviews", "rev_title": "What they say<br>after the report",
    "r1_t": "«What I read in the report, I knew subconsciously...»", "r1_n": "Anna",
    "r2_t": "«Intuitively I felt so, and you confirmed it with analysis...»", "r2_n": "Maria",
    "r3_t": "«Separately I knew everything. But connected — for the first time.»", "r3_n": "Olga",
    "r4_t": "«Spot on, especially the last part. It's true about me.»", "r4_n": "Catherine",
    "r5_t": "«Expected words — got numbers, tables, tasks...»", "r5_n": "Tatiana",
    "r6_t": "«Three tasks from section XII — concrete, no water.»", "r6_n": "Irina",
    "r7_t": "«Format with multiple systems is great for understanding.»", "r_client": "Client",
    "r8_t": "«There are specific recommendations. Action map.»", "r8_n": "Catherine",
    "r9_t": "«Hair on end, wish I had this 20 years earlier...»", "r9_n": "Client",
    "rev_meta": "AHD Integrator client", "rev_more": "Read all reviews in Telegram",
    "auth_tag": "About Author", "auth_text": "Hi! My name is Elena Derkach. I'm a person from business. I live from the head, structure, and logic.<br><br>The result is an architecture where every conclusion is verified by 3 sources.",
    "stat1_num": "1.5 Years", "stat1_label": "studying systems",
    "stat2_num": "6", "stat2_label": "systems in method",
    "stat3_num": "3+", "stat3_label": "verification sources",
    "order_tag": "ORDER",
    "order_features": "One-time payment · Individual preparation · PDF · 3 days",
    "order_nav": "12 sections · IR-index · 3 tasks · 1-year instruction · Transits",
    "price_note": "One-time payment · No subscription · No hidden fees",
    "btn_pay": "Order Report →",
    "n_footer": "Required: date, time and city of birth",
    "ask_sub_footer": "Still have questions? Message me — I'll answer within 24 hours.",
    "foot_copy": "© 2026 Deep Dive Report. Personal Analysis."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Translate text content
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_lang') || 'ru';
  setLanguage(savedLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});

const canvas = document.getElementById('stars');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  function createStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.2, s: 0.001 + Math.random() * 0.003, p: Math.random() * 10 });
    }
  }
  function animate(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(Math.sin(t * s.s + s.p) + 1) / 2})`; ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  window.addEventListener('resize', () => { resize(); createStars(); });
  resize(); createStars(); animate(0);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
