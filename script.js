// AHD Integrator v1.29 - Core Logic (inline translations)
let currentLang = localStorage.getItem('preferred_lang') || 'ru';
// ==== CONFIG ====
const CONFIG = {
  BASE_URL: "https://ahd-integrator.com/",
  PAYMENT_LINKS: {
    ru:   "https://t.me/ElenaDerkach?text=Здравствуйте!%20Я%20хочу%20оплатить%20полный%20AHD%20отчет%20(5000%20руб).%20Куда%20перевести?", // Оплата РФ (Telegram)
    intl: "https://t.me/ElenaDerkach?text=Hello!%20I%20would%20like%20to%20pay%20for%20the%20full%20AHD%20report.%20How%20can%20I%20pay%20with%20an%20international%20card?" // Оплата Мир (Telegram)
  },
  MAKE_WEBHOOK: "PASTE_MAKE_WEBHOOK_URL_HERE", // [РУЧНОЕ] Webhook URL из Make.com
  GEOCODE_URL: "https://nominatim.openstreetmap.org/search"
};

let translations = {};
const TRANSLATIONS = {
  ru: {
    "meta_title":"Разбор личности: астрология, Human Design, Матрица Судьбы | AHD Integrator","meta_desc":"Разбор личности по дате рождения: натальная карта, Human Design и Матрица Судьбы в одном отчёте. Вывод попадает в PDF, только если подтверждён 2+ системами.","nav_order":"Заказать отчёт","hero_title":"Персональный отчёт о твоей архитектуре — астрология, Human Design, Матрица Судьбы","hero_sub":"На основе шести систем: астрология, Human Design, Матрица Судьбы. Читаешь — и узнаёшь себя. Не знак Зодиака. Себя.","hero_tg":"Заказать отчет","hero_structure":"Смотреть структуру","hero_meta_1":"📄 PDF · 12 разделов","hero_meta_2":"⏱ 3 дня","hero_meta_3":"🔒 Индивидуально","how_tag":"Как это работает","how_title":"Три шага.<br>Никаких лишних действий.","step1_name":"Оставляешь данные","step1_desc":"Дата, время и город рождения. Если есть готовый расчёт HD или натальная карта — пришли, это повысит точность.","step2_name":"Индивидуальный анализ","step2_desc":"3 дня работы с шестью системами. Каждый вывод верифицируется минимум двумя независимыми источниками.","step3_name":"Получаешь отчёт","step3_desc":"PDF-документ: 12 разделов, IR-индекс, три конкретных задания и инструкция на 12 месяцев.","sample_tag":"Механический аудит (Пример верификации)","sample_title":"Простой пример: Выбор между реализацией и покоем","sample_astro":"Асцендент в Льве (жажда признания) + Марс в 10 доме (карьера).","sample_hd":"Проектор (ожидание приглашения) + Эго-центр (воля к успеху).","sample_matrix":"19 аркан (Солнце — масштаб) + 11 аркан (Сила).","sample_quote":"«...Вывод: Паттерн подтвержден. Вы обладаете огромным ресурсом для лидерства, но ваше тело блокирует действия без признания заслуг другими...»","sample_note":"Фрагмент из реального отчета. Данные изменены для примера.","forwho_tag":"Для кого","forwho_title":"Знакомая ситуация: <br>гороскопы и Human Design.","forwho_desc":"Они дают много красивых слов, но мало понимания, что с этим делать.","card1":"Знаешь свой тип HD, но не понимаешь как применить в реальной жизни","card2":"Видишь паттерн, но не знаешь откуда он и как его остановить","card3":"Хочешь механизм — не вдохновение — который объясняет именно твои действия","card4":"Готовы к честному разговору: не только про таланты, но и про теневые зоны","card5":"Хочешь конкретные задания, а не общие рекомендации","card6":"Понимаешь, почему один и тот же сценарий повторяется — в деньгах, в отношениях, в решениях","method_tag":"Принцип метода","method_title":"Одна система — это версия.<br>Несколько систем — это факт о тебе.","method_desc":"В отчёт попадает только то, что подтверждено минимум двумя системами. Шесть источников смотрят на одно и то же.","sys1_name":"Натальная карта","sys1_desc":"Природа, мышление, конструкция","sys1_detail":"Базовый психологический фундамент. Показывает ваши врожденные таланты, способ обработки информации и эмоциональные реакции.","sys2_name":"Human Design","sys2_desc":"Тип энергии, стратегия решений","sys2_detail":"Механика вашего взаимодействия с миром. Как корректно тратить энергию, чтобы не выгорать.","sys3_name":"Матрица Судьбы","sys3_desc":"Данность, задача, теневые зоны","sys3_detail":"Показывает основные архетипы вашей личности. Мы анализируем задачи и теневые сценарии.","sys4_name":"Кармические узлы","sys4_desc":"Откуда паттерн и куда расти","sys4_detail":"Вектор вашего развития. Показывает привычные модели поведения и новые качества для следующего уровня.","sys5_name":"Теневые арканы","sys5_desc":"Блоки в деньгах и отношениях","sys5_detail":"Скрытые механизмы саботажа. Мы разбираем, почему вы выбираете стратегии, которые ведут к потерям.","sys6_name":"Психологический слой","sys6_desc":"Механизм: почему, а не только что","sys6_detail":"Интеграция всех данных через призму современной психологии.","sys_p1":"Приоритет I","sys_p2":"Приоритет II","sys_p3":"Приоритет III","sys_hier":"Иерархия систем:","sys_hier_desc":"Если системы говорят разное, мы следуем иерархии: Натальная карта → Human Design → Арканы.","ir_tag":"IR-Индекс","ir_title":"Числовая метрика согласованности","ir_desc":"IR (Integrator Rating) — индекс того, насколько ваши текущие действия совпадают с вашим природным дизайном.","ir_help":"Чем выше индекс, тем меньше внутреннего сопротивления и больше результатов при тех же усилиях.","ir_l1":"Выживание","ir_d1":"Энергия в защите","ir_l2":"Компенсация","ir_d2":"Много усилий, мало результата","ir_l3":"Раскрытие","ir_d3":"Рост возможен","ir_l4":"Реализация","ir_d4":"Действует из ядра","struct_tag":"Структура отчёта","struct_title":"12 разделов глубокого анализа","struct_desc":"Нажмите на раздел, чтобы узнать, что именно мы в нем разбираем.","s1":"Конструкция личности","s1_d":"Как вы думаете и принимаете решения","s1_detail":"Разбор вашего способа восприятия реальности.","s2":"Главный внутренний конфликт","s2_d":"Ваш основной сценарий саботажа","s2_detail":"Мы находим точку, где ваши желания сталкиваются со страхами.","s3":"Точка силы","s3_d":"Ваш самый мощный подтвержденный талант","s3_detail":"То, что подтверждено минимум тремя системами.","s4":"Стратегический вектор 3–5 лет","s4_d":"Направления для долгосрочного роста","s4_detail":"Рекомендации по развитию, основанные на циклах планет.","s5":"Зоны риска","s5_d":"Где вы теряете энергию и деньги","s5_detail":"Механизм слива: триггер — реакция — потеря.","s6":"IR-индекс","s6_d":"Числовой расчет вашей текущей точки","s6_detail":"Подробный разбор IR по 5 параметрам.","s7":"Деньги и реализация","s7_d":"Условия вашего максимального дохода","s7_detail":"Где лежат деньги именно для вас.","s8":"Партнёрские отношения","s8_d":"Ваша модель ресурсного союза","s8_detail":"Кого вы выбираете и почему.","s9":"Личная жизнь","s9_d":"Эмоциональный комфорт и скрытые зоны","s9_detail":"Что вам нужно для безопасности и счастья.","s10":"Инструкция на 12 месяцев","s10_d":"План действий на ближайший год","s10_detail":"Конкретные фокусы внимания по месяцам.","s11":"Активные транзиты","s11_d":"Влияние внешних циклов прямо сейчас","s11_detail":"Какие уроки вы проходите в данный момент.","s12":"Мотивационный протокол","s12_d":"Три задания для трансформации","s12_detail":"Практические упражнения под вашу структуру личности.","comp_tag":"Чем отличается","comp_title":"Больше, чем просто отчет","c_usual":"Обычно","c_ahd":"AHD Integrator","cr1_l":"Описание знака, типа, профиля — каждое отдельно","cr1_r":"Шесть систем говорят об одном — видишь пересечения","cr2_l":"Вдохновляющие слова без привязки к данным","cr2_r":"Каждый вывод подтверждён минимум двумя источниками","cr3_l":"Таланты перечислены — что делать непонятно","cr3_r":"Механизм: не только что, но почему и как остановить","cr4_l":"Теневая зона смягчена или не упоминается","cr4_r":"Теневые зоны честно и поведенчески — без диагнозов","cr5_l":"Одна система — одна версия тебя","cr5_r":"IR-индекс: числовая точка отсчёта, не ощущение","cr6_l":"Читаешь и живёшь по-прежнему","cr6_r":"Три конкретных задания — знаешь что делать дальше","inc_tag":"Что входит","inc_title":"Полный комплект для работы над собой","inc1":"PDF-отчёт · 12 разделов","inc1_d":"Глубокий анализ всей вашей архитектуры","inc2":"Вводная страница","inc2_d":"Инструкция: как читать и применять без знаний систем","inc3":"IR-индекс с расшифровкой","inc3_d":"Ваша персональная метрика эффективности","inc4":"Три персональных задания","inc4_d":"Метод, адаптированный под ваш тип личности","inc5":"Инструкция на 12 месяцев","inc5_d":"Календарь фокусов внимания на год","inc6":"Активные транзиты","inc6_d":"Понимание текущих внешних вызовов","needs_title":"Нужны только ваши данные:","n1":"📅 Дата рождения","n2":"⏰ Время рождения","n3":"📍 Город рождения","faq_tag":"FAQ","faq_title":"Часто задаваемые вопросы","q1":"Нужно ли знать астрологию или Human Design?","a1":"Нет. Основной текст написан простым человеческим языком. Все термины расшифрованы.","q2":"У меня уже есть натальная карта. Что нового я узнаю?","a2":"Вы узнаете, как данные карты подтверждаются другими 5 системами. Мы даем не описание, а механику ваших действий.","q3":"Почему две системы должны подтвердить вывод?","a3":"Чтобы исключить случайности и общие описания. Мы ищем только те черты, которые в вас фундаментальны.","q4":"Как отчет поможет в карьере?","a4":"Он покажет ваши идеальные условия работы: как вам проще принимать решения и где ваш ресурс для денег.","q5":"Сколько времени ждать?","a5":"3 рабочих дня. Это ручная аналитическая работа, а не автоматическая генерация текста.","q6":"Какие еще отчеты доступны?","a6":"Детские отчеты, партнерская совместимость, бизнес-совместимость и расчет астрографии.","ask_title":"Остались вопросы?","ask_sub":"Напишите мне напрямую","ask_btn":"Отправить вопрос","rev_tag":"Отзывы","rev_title":"Истории трансформации","r1_t":"«Впервые всё было связано в единую систему. Наконец-то не просто описание, а механика.»","r1_n":"Анна","rev_meta":"Клиент AHD Integrator","r2_t":"«Это совсем другое ощущение — когда то, что знала внутри, теперь видишь снаружи, в четкой структуре.»","r2_n":"Мария","r3_t":"«Разрозненно я всё знала. Но так, чтобы это было связано в единую систему — впервые. Наконец-то не просто описание, а механика. Понятно что с этим делать.»","r3_n":"Ольга","r4_t":"«В точку, особенно последнее. Я перечитала раздел три раза — не потому что не поняла, а потому что хотела убедиться что это правда про меня. Это правда.»","r4_n":"Екатерина","r5_t":"«Ожидала красивых слов — получила цифры, таблицы, задания. IR-индекс показал именно то, что я чувствовала, но не могла сформулировать. Теперь понятно почему одно и то же повторяется.»","r5_n":"Татьяна","r6_t":"«Три задания из XII раздела — конкретные, без воды. Два месяца работаю с ними. Впервые ощущение что двигаюсь из правильного места, а не из страха или привычки.»","r6_n":"Ирина","r7_t":"«Очень подробный разбор по всем темам. Еще больше утверждаешься в том, что это твое.»","r_client":"Клиент","r8_t":"«В отчете есть конкретные рекомендации для дальнейшего развития в определенных задачах. Это прям карта действий. Благодарю за твое исследование 🔥»","r8_n":"Екатерина","r9_t":"«Волосы дыбом, вот лет на 20 бы эту проработку пораньше, а так весь зарытый потенциал впустую. Очень много прямо про себя правильного...»","r9_n":"Клиент","rev_more":"Больше отзывов в Telegram","auth_tag":"Об авторе","auth_text":"Привет! Меня зовут Елена Деркач. Я создала AHD Integrator как систему для тех, кто любит логику и структуру так же, как и я.","stat1_num":"1.5 года","stat1_label":"исследований","stat2_label":"систем анализа","stat3_label":"слоя верификации","order_tag":"ЗАКАЗАТЬ ОТЧЕТ","order_sub":"PDF · 12 разделов · 3 дня","oi1":"12 разделов","oi2":"IR-индекс","oi3":"3 задания","oi4":"План на год","oi5":"Транзиты","price_val":"5000 руб, 50 евро, 55 долларов","price_note":"Разовая оплата. Без подписок.","trust_note":"Остались вопросы?","btn_pay":"Заполнить данные и заказать","n_footer":"Нужны: дата, время и место рождения","foot_tg":"Написать в Телеграмм","foot_copy":"© 2026 AHD Integrator. Все права защищены.","form_title":"Оформление заказа","form_name":"Ваше имя","form_birthdate":"Дата рождения","form_birthtime":"Время рождения","form_unknown_time":"Не знаю точного времени","form_birthplace":"Место рождения (город)","form_contact":"Ваш контакт (Telegram / WhatsApp)","form_submit":"Отправить данные и перейти к оплате"
  },
  en: {
    "meta_title":"Personality Analysis: Astrology, Human Design, Destiny Matrix | AHD Integrator","meta_desc":"Personal PDF report across 6 systems: Astrology, Human Design, Destiny Matrix. 12 sections, IR index, and 3 tasks. Only what's confirmed by ≥2 systems. In 3 days.","nav_order":"Order Report","hero_title":"Personal report on your architecture — Astrology, Human Design, Destiny Matrix","hero_sub":"Based on six systems: astrology, Human Design, Destiny Matrix. You read it — and you recognize yourself. Not a Zodiac sign. Yourself.","hero_tg":"Order Report","hero_structure":"See Structure","hero_meta_1":"📄 PDF · 12 sections","hero_meta_2":"⏱ 3 days","hero_meta_3":"🔒 Individual","how_tag":"How it works","how_title":"Three steps.<br>No extra actions.","step1_name":"Provide data","step1_desc":"Date, time, and city of birth. If you have a ready HD calculation or birth chart, send it to increase accuracy.","step2_name":"Individual analysis","step2_desc":"3 days of work with six systems. Every conclusion is verified by at least two independent sources.","step3_name":"Receive report","step3_desc":"PDF document: 12 sections, IR index, three specific tasks, and a 12-month guide. Ready for study.","sample_tag":"Mechanical Audit (Verification Example)","sample_title":"Simple Example: Choosing between realization and peace","sample_astro":"Ascendant in Leo (desire for recognition) + Mars in 10th house (career).","sample_hd":"Projector (waiting for invitation) + Ego center (will to succeed).","sample_matrix":"19th Arcana (Sun — scale) + 11th Arcana (Strength).","sample_quote":"\"...Conclusion: The pattern is confirmed. You have a huge resource for leadership, but your body blocks actions without recognition of your merits by others...\"","sample_note":"Fragment from a real report. Data changed for the example.","forwho_tag":"For whom","forwho_title":"Familiar situation: <br>horoscopes and Human Design.","forwho_desc":"They give many beautiful words but little understanding of what to do.","card1":"Know your HD type but don't understand how to apply it in real life","card2":"See a pattern but don't know where it comes from or how to stop it","card3":"Want a mechanism — not inspiration — that explains your specific actions","card4":"Ready for an honest conversation: not just about talents but about shadow zones","card5":"Want specific tasks, not general recommendations","card6":"Understand why the same scenario repeats — in money, relationships, decisions","method_tag":"Method Principle","method_title":"One system is a version.<br>Multiple systems is a fact about you.","method_desc":"Only what is confirmed by at least two systems gets into the report. Six sources look at the same thing.","sys1_name":"Natal Chart","sys1_desc":"Nature, thinking, construction","sys1_detail":"Basic psychological foundation. Shows your innate talents, way of processing information, and emotional reactions.","sys2_name":"Human Design","sys2_desc":"Energy type, decision strategy","sys2_detail":"Mechanics of your interaction with the world. How to correctly spend energy without burning out.","sys3_name":"Destiny Matrix","sys3_desc":"Given data, task, shadow zones","sys3_detail":"Shows the main archetypes of your personality. We analyze tasks and shadow scenarios.","sys4_name":"Karmic Nodes","sys4_desc":"Where the pattern is from and where to grow","sys4_detail":"The vector of your development. Shows habitual behavior models and new qualities for the next level.","sys5_name":"Shadow Arcana","sys5_desc":"Blocks in money and relationships","sys5_detail":"Hidden sabotage mechanisms. We break down why you choose strategies that lead to losses.","sys6_name":"Psychological Layer","sys6_desc":"Mechanism: why, not just what","sys6_detail":"Integration of all data through the prism of modern psychology.","sys_p1":"Priority I","sys_p2":"Priority II","sys_p3":"Priority III","sys_hier":"System Hierarchy:","sys_hier_desc":"If systems say different things, we follow the hierarchy: Natal Chart → Human Design → Arcana.","ir_tag":"IR Index","ir_title":"Numerical consistency metric","ir_desc":"IR (Integrator Rating) is an index of how much your current actions coincide with your natural design.","ir_help":"The higher the index, the less internal resistance and more results with the same efforts.","ir_l1":"Survival","ir_d1":"Energy in defense","ir_l2":"Compensation","ir_d2":"Much effort, little result","ir_l3":"Opening","ir_d3":"Growth is possible","ir_l4":"Realization","ir_d4":"Acts from the core","struct_tag":"Report Structure","struct_title":"12 sections of deep analysis","struct_desc":"Click on a section to find out exactly what we analyze in it.","s1":"Personality Construction","s1_d":"How you think and make decisions","s1_detail":"Deconstruction of your way of perceiving reality.","s2":"Main Internal Conflict","s2_d":"Your main sabotage scenario","s2_detail":"We find the point where your desires clash with fears.","s3":"Point of Strength","s3_d":"Your most powerful confirmed talent","s3_detail":"What is confirmed by at least three systems.","s4":"Strategic Vector 3–5 Years","s4_d":"Directions for long-term growth","s4_detail":"Development recommendations based on planetary cycles.","s5":"Risk Zones","s5_d":"Where you lose energy and money","s5_detail":"Drain mechanism: trigger — reaction — loss.","s6":"IR Index","s6_d":"Numerical calculation of your current point","s6_detail":"Detailed deconstruction of IR by 5 parameters.","s7":"Money and Realization","s7_d":"Conditions for your maximum income","s7_detail":"Where the money lies specifically for you.","s8":"Partnership Relations","s8_d":"Your model of a resourceful union","s8_detail":"Who you choose and why.","s9":"Personal Life","s9_d":"Emotional comfort and hidden zones","s9_detail":"What you need to feel safe and truly happy.","s10":"12-Month Instruction","s10_d":"Action plan for the coming year","s10_detail":"Specific focus points by months.","s11":"Active Transits","s11_d":"Influence of external cycles right now","s11_detail":"Analysis of what lessons you are currently going through.","s12":"Motivational Protocol","s12_d":"Three tasks for transformation","s12_detail":"Practical exercises selected for your personality structure.","comp_tag":"Difference","comp_title":"More than just a report","c_usual":"Usually","c_ahd":"AHD Integrator","cr1_l":"Description of sign, type, profile — each separately","cr1_r":"Six systems speak of one thing — you see intersections","cr2_l":"Inspirational words without data binding","cr2_r":"Each conclusion is confirmed by at least two sources","cr3_l":"Talents listed — unclear what to do","cr3_r":"Mechanism: not just what but why and how to stop it","cr4_l":"Shadow zone softened or not mentioned","cr4_r":"Shadow zones honestly and behaviorally — without diagnoses","cr5_l":"One system — one version of you","cr5_r":"IR index: numerical starting point, not a feeling","cr6_l":"You read it and live as before","cr6_r":"Three specific tasks — you know what to do next","inc_tag":"What's Included","inc_title":"Complete set for self-work","inc1":"PDF report · 12 sections","inc1_d":"Deep analysis of your entire architecture","inc2":"Introductory page","inc2_d":"Instruction: how to read and apply without systems knowledge","inc3":"IR index with decryption","inc3_d":"Your personal efficiency metric","inc4":"Three personal tasks","inc4_d":"Method adapted to your personality type","inc5":"12-month instruction","inc5_d":"Calendar of focus points for the year","inc6":"Active transits","inc6_d":"Understanding current external challenges","needs_title":"Only your data is needed:","n1":"📅 Date of birth","n2":"⏰ Time of birth","n3":"📍 City of birth","faq_tag":"FAQ","faq_title":"Frequently Asked Questions","q1":"Do I need to know astrology or Human Design?","a1":"No. The main text is written in simple human language. All terms are decrypted.","q2":"I already have a natal chart. What new will I learn?","a2":"You will learn how the chart data is confirmed by the other 5 systems. We give not a description, but the mechanics of your actions.","q3":"Why must two systems confirm a conclusion?","a3":"To exclude accidents and general descriptions. We look only for those features that are fundamental in you.","q4":"How will the report help in my career?","a4":"It will show your ideal working conditions: how it's easier for you to make decisions and where your resource for money is.","q5":"How long to wait?","a5":"3 working days. This is manual analytical work, not automatic text generation.","q6":"What other reports are available?","a6":"Child reports, partner compatibility, business compatibility, and astrography calculation.","ask_title":"Any questions left?","ask_sub":"Write to me directly","ask_btn":"Send question","rev_tag":"Reviews","rev_title":"Transformation Stories","r1_t":"\"For the first time, everything was linked into a single system. Finally, not just a description, but mechanics.\"","r1_n":"Anna","rev_meta":"AHD Integrator Client","r2_t":"\"It's a completely different feeling — when what you knew inside, you now see outside, in a clear structure.\"","r2_n":"Maria","r3_t":"\"I knew everything in pieces. But for it to be connected in a single system — for the first time. Finally, not just a description, but mechanics. Clear what to do with it.\"","r3_n":"Olga","r4_t":"\"Spot on, especially the last part. I reread the section three times — not because I didn't understand, but because I wanted to make sure it was true about me. It is true.\"","r4_n":"Ekaterina","r5_t":"\"I expected beautiful words — I got numbers, tables, tasks. The IR index showed exactly what I felt but couldn't articulate. Now it's clear why the same thing repeats.\"","r5_n":"Tatiana","r6_t":"\"Three tasks from section XII — specific, without fluff. I've been working with them for two months. For the first time I feel I'm moving from the right place, not out of fear or habit.\"","r6_n":"Irina","r7_t":"\"Very detailed deconstruction across all topics. You become even more established that this is yours.\"","r_client":"Client","r8_t":"\"The report contains specific recommendations for further development in certain tasks. It's a literal action map. Thank you for your research 🔥\"","r8_n":"Ekaterina","r9_t":"\"Mind-blowing, I wish I had this breakdown 20 years earlier, so much buried potential wasted. Very much correct about myself...\"","r9_n":"Client","rev_more":"More reviews in Telegram","auth_tag":"About the author","auth_text":"Hi! My name is Elena Derkach. I created AHD Integrator as a system for those who love logic and structure as much as I do.","stat1_num":"1.5 years","stat1_label":"of research","stat2_label":"analysis systems","stat3_label":"verification layer","order_tag":"ORDER REPORT","order_sub":"PDF · 12 sections · 3 days","oi1":"12 sections","oi2":"IR index","oi3":"3 tasks","oi4":"Annual plan","oi5":"Transits","price_val":"5000 rub, 50 euro, 55 usd","price_note":"One-time payment. No subscriptions.","trust_note":"Still have questions?","btn_pay":"Fill data and order","n_footer":"Needed: date, time, and place of birth","foot_tg":"Write in Telegram","foot_copy":"© 2026 AHD Integrator. All rights reserved.","form_title":"Order Checkout","form_name":"Your Name","form_birthdate":"Date of Birth","form_birthtime":"Time of Birth","form_unknown_time":"I don't know exact time","form_birthplace":"Place of Birth (City)","form_contact":"Your Contact (Telegram / WhatsApp)","form_submit":"Send data and proceed to payment"
  }
};

// 1. LOCALIZATION SYSTEM
async function loadTranslations(lang) {
  console.log(`[AHD-i18n] Loading: ${lang}`);

  // Use inline translations (works locally and on server)
  if (TRANSLATIONS[lang]) {
    translations = TRANSLATIONS[lang];
    window.currentTranslations = translations;
    applyTranslations();
    console.log(`[AHD-i18n] Success (inline): ${lang}`);
    return;
  }

  // Fallback: try fetch if on a server
  if (window.location.protocol !== 'file:') {
    try {
      const response = await fetch(`${lang}.json?v=1.29`);
      if (!response.ok) throw new Error(`Could not load ${lang}.json`);
      translations = await response.json();
      window.currentTranslations = translations;
      applyTranslations();
      console.log(`[AHD-i18n] Success (fetch): ${lang}`);
    } catch (err) {
      console.error('[AHD-i18n] Failed:', err);
    }
  }
}

function applyTranslations() {
  // Elements with data-t
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t-placeholder');
    if (translations[key]) el.placeholder = translations[key];
  });

  // Meta tags
  document.querySelectorAll('[data-t-content]').forEach(el => {
    const key = el.getAttribute('data-t-content');
    if (translations[key]) el.setAttribute('content', translations[key]);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferred_lang', lang);
  
  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const bLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', bLang === lang);
  });
  
  loadTranslations(lang);
}

// 2. INTERACTIVE SECTIONS (Accordions)
function initAccordions() {
  try {
    const items = document.querySelectorAll('.clickable');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        const parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.clickable').forEach(sib => sib.classList.remove('active'));
        }
        if (!isActive) item.classList.add('active');
      });
    });
  } catch (e) { console.error('Accordion error:', e); }
}

// 3. ORDER MODAL LOGIC
function initModal() {
  try {
    const modal = document.getElementById('orderModal');
    if (!modal) return;
    
    const btns = document.querySelectorAll('.open-order');
    const close = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    const openModal = () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    btns.forEach(btn => btn.addEventListener('click', openModal));
    if (close) close.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    const form = document.getElementById('mainOrderForm');
    const demoModal = document.getElementById('demoModal');
    
    if (demoModal) {
      const demoCloseBtn = demoModal.querySelector('.modal-close');
      const demoOverlay = demoModal.querySelector('.modal-overlay');
      const closeDemo = () => {
        demoModal.classList.remove('active');
        document.body.style.overflow = '';
      };
      if (demoCloseBtn) demoCloseBtn.addEventListener('click', closeDemo);
      if (demoOverlay) demoOverlay.addEventListener('click', closeDemo);
    }

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Сбор данных и расчет
        const demoData = buildDemoData(form);
        
        // 2. Заполнение демо-модалки
        document.getElementById('demo-sun-sign').textContent = demoData.sun.sign;
        document.getElementById('demo-sun').textContent = demoData.sun.text;
        
        document.getElementById('demo-hd-sign').textContent = demoData.hd.sign;
        document.getElementById('demo-hd').textContent = demoData.hd.text;
        
        document.getElementById('demo-matrix-sign').textContent = demoData.matrix.sign;
        document.getElementById('demo-matrix').textContent = demoData.matrix.text;
        
        // 3. Закрытие orderModal и открытие demoModal
        closeModal();
        if (demoModal) {
          demoModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    // Payment Buttons Logic
    document.querySelectorAll(".btn-pay").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const cur = btn.dataset.cur;
        
        const originalText = btn.textContent;
        btn.textContent = "Переход к оплате...";
        btn.style.pointerEvents = 'none';

        if (form) await submitLead(form, cur);
        
        const link = CONFIG.PAYMENT_LINKS[cur];
        if (link && link.startsWith("http")) {
          window.location.href = link;
        } else {
          alert("Ссылка на оплату еще не настроена (TODO: Владелец)");
          btn.textContent = originalText;
          btn.style.pointerEvents = '';
        }
      });
    });
  } catch (e) { console.error('Modal error:', e); }
}

// 4. ANIMATIONS & BACKGROUND
function initStars() {
  try {
    const canvas = document.getElementById('stars');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let stars = [];
    
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    function createStars() {
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2,
          s: 0.001 + Math.random() * 0.002,
          p: Math.random() * 10
        });
      }
    }
    
    function animate(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(Math.sin(t * s.s + s.p) + 1) / 2})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => { resize(); createStars(); });
    resize(); createStars(); animate(0);
  } catch (e) { console.error('Stars error:', e); }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Set language first
  setLanguage(currentLang);
  
  // Attach listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  initAccordions();
  initModal();
  initStars();
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ==== 5. GEOCODING & ASTROLOGY ====
let cachedCoords = null;
const geocodeCache = {};

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

async function geocodeCity(city) {
  if (!city || city.trim().length < 2) return null;
  const q = city.trim().toLowerCase();
  if (geocodeCache[q]) return geocodeCache[q];
  
  const url = `${CONFIG.GEOCODE_URL}?format=json&limit=1&q=${encodeURIComponent(q)}`;
  try {
    const res = await fetch(url, { headers: { "Accept-Language": "ru,en" } });
    const data = await res.json();
    if (!data || !data.length) return null;
    const result = { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon), label: data[0].display_name };
    geocodeCache[q] = result;
    return result;
  } catch (e) {
    console.error("Geocoding failed", e);
    return null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bpInput = document.querySelector('input[name="birthplace"]');
  if (bpInput) {
    bpInput.addEventListener('input', debounce(async (e) => {
      cachedCoords = await geocodeCity(e.target.value);
    }, 500));
  }
});

// --- ASTRO CALCS ---
const ZODIAC_SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

function getSunSign(dateStr) {
  const d = new Date(dateStr);
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

function getMoonSign(dateStr, timeStr) {
  let d = new Date(dateStr + "T" + (timeStr && timeStr !== 'unknown' ? timeStr : "12:00") + ":00Z");
  if(isNaN(d.getTime())) d = new Date(dateStr);
  const diffDays = (d.getTime() - new Date("1999-12-31T00:00:00Z").getTime()) / (1000 * 60 * 60 * 24);
  let moonLong = (213.0 + diffDays * 13.176396) % 360;
  if(moonLong < 0) moonLong += 360;
  const signIndex = Math.floor(moonLong / 30);
  return { sign: ZODIAC_SIGNS[signIndex], approx: true };
}

function getAscendant(dateStr, timeStr, coords) {
  if (!timeStr || timeStr === 'unknown' || !coords) return null;
  let d = new Date(dateStr + "T" + timeStr + ":00Z");
  if(isNaN(d.getTime())) return null;
  const diffDays = (d.getTime() - new Date("2000-01-01T12:00:00Z").getTime()) / (1000 * 60 * 60 * 24);
  const lst = (100.46 + 0.985647 * diffDays + coords.lon + 15 * (d.getUTCHours() + d.getUTCMinutes()/60)) % 360;
  let lstRad = lst * Math.PI / 180;
  let latRad = coords.lat * Math.PI / 180;
  let e = 23.439 * Math.PI / 180; 
  let ascRad = Math.atan2(Math.cos(lstRad), -Math.sin(lstRad)*Math.cos(e) - Math.tan(latRad)*Math.sin(e));
  let ascDeg = (ascRad * 180 / Math.PI) % 360;
  if(ascDeg < 0) ascDeg += 360;
  const signIndex = Math.floor(ascDeg / 30);
  return ZODIAC_SIGNS[signIndex];
}

function getHDType(dateStr) {
  const d = new Date(dateStr);
  if(isNaN(d.getTime())) return "Generator";
  const hash = d.getUTCDate() + d.getUTCMonth() + d.getUTCFullYear();
  const val = hash % 10;
  if (val <= 6) return "Generator";
  if (val <= 8) return "Projector";
  return "Manifestor";
}

function getMatrixArcana(dateStr) {
  const d = new Date(dateStr);
  if(isNaN(d.getTime())) return 1;
  let day = d.getUTCDate();
  if (day > 22) day = Math.floor(day / 10) + (day % 10);
  return day;
}

const DEMO_TEXTS = {
  ru: {
    Aries: "Активность, инициативность, импульсивность. Вы привыкли действовать быстро и прокладывать новые пути.",
    Taurus: "Стабильность, упорство, тяга к комфорту. Для вас важна материальная база и надежность.",
    Gemini: "Коммуникабельность, гибкость, жажда знаний. Вы легко адаптируетесь и схватываете информацию на лету.",
    Cancer: "Эмоциональность, глубина, привязанность к семье. Вы принимаете решения, опираясь на внутренний компас.",
    Leo: "Яркость, щедрость, потребность в признании. Вы умеете вести за собой и вдохновлять.",
    Virgo: "Аналитичность, внимание к деталям, практичность. Вы всегда стремитесь к системе и порядку.",
    Libra: "Дипломатичность, поиск баланса, эстетика. Вы мастерски сглаживаете углы и выстраиваете связи.",
    Scorpio: "Трансформация, воля, проницательность. Вы способны преодолевать любые кризисы и видеть суть.",
    Sagittarius: "Оптимизм, масштабность мышления, поиск смыслов. Вы не любите рамок и всегда смотрите в будущее.",
    Capricorn: "Дисциплина, целеустремленность, ответственность. Вы методично идете к своим вершинам.",
    Aquarius: "Свободолюбие, оригинальность, интеллект. Вы часто видите то, чего еще не замечают другие.",
    Pisces: "Интуиция, эмпатия, многогранность. Ваше восприятие мира глубже, чем кажется на первый взгляд.",
    hd_Generator: "Вы здесь, чтобы созидать и откликаться на жизнь. Ваш ресурс огромен, если вы делаете то, что любите.",
    hd_Projector: "Ваш дар — направлять других. Вам важно дождаться правильного приглашения, чтобы ваш интеллект оценили по достоинству.",
    hd_Manifestor: "Вы — инициатор. Ваша энергия создана для того, чтобы начинать новое и влиять на окружающих.",
    mat_1: "Аркан Маг: сила слова, способность материализовывать идеи, лидерство.",
    mat_2: "Аркан Жрица: интуиция, дипломатия, способность видеть скрытое.",
    mat_3: "Аркан Императрица: плодородие, красота, умение создавать комфорт.",
    mat_4: "Аркан Император: структура, власть, дисциплина, умение управлять.",
    mat_5: "Аркан Иерофант: закон, порядок, передача знаний, авторитет.",
    mat_6: "Аркан Влюбленные: выбор по сердцу, коммуникация, эстетика.",
    mat_7: "Аркан Колесница: движение к цели, лидерство, завоевание, скорость.",
    mat_8: "Аркан Справедливость: карма, баланс, честность, структурность.",
    mat_9: "Аркан Отшельник: мудрость, глубина, опора на себя, поиск истины.",
    mat_10: "Аркан Колесо Фортуны: удача, потоковость, умение ловить шансы.",
    mat_11: "Аркан Сила: огромный потенциал, энергия, выносливость.",
    mat_12: "Аркан Повешенный: иное видение, служение, творческий подход.",
    mat_13: "Аркан Смерть (Трансформация): способность к радикальным переменам, отказ от старого.",
    mat_14: "Аркан Умеренность: баланс, искусство, гармония души.",
    mat_15: "Аркан Дьявол: мощная энергия, харизма, материальный успех.",
    mat_16: "Аркан Башня: разрушение иллюзий, духовное пробуждение, стройка заново.",
    mat_17: "Аркан Звезда: публичность, талант, яркость, надежда.",
    mat_18: "Аркан Луна: сильная интуиция, материализация мыслей, мистика.",
    mat_19: "Аркан Солнце: масштаб, радость, благополучие, лидерство.",
    mat_20: "Аркан Суд: связь с родом, глобальные перемены, система.",
    mat_21: "Аркан Мир: масштабное мышление, толерантность, миротворчество.",
    mat_22: "Аркан Шут: абсолютная свобода, легкость, начало нового пути."
  },
  en: {
    Aries: "Activity, initiative, impulsiveness. You are used to acting quickly and forging new paths.",
    Taurus: "Stability, persistence, craving for comfort. Material base and reliability are important to you.",
    Gemini: "Sociability, flexibility, thirst for knowledge. You easily adapt and grasp information on the fly.",
    Cancer: "Emotionality, depth, attachment to family. You make decisions based on your inner compass.",
    Leo: "Brightness, generosity, need for recognition. You know how to lead and inspire.",
    Virgo: "Analytical, attention to detail, practicality. You always strive for system and order.",
    Libra: "Diplomacy, search for balance, aesthetics. You masterfully smooth corners and build connections.",
    Scorpio: "Transformation, will, insight. You are capable of overcoming any crises and seeing the essence.",
    Sagittarius: "Optimism, scale of thinking, search for meanings. You don't like boundaries and always look to the future.",
    Capricorn: "Discipline, purposefulness, responsibility. You methodically move towards your peaks.",
    Aquarius: "Freedom-loving, originality, intellect. You often see what others don't notice yet.",
    Pisces: "Intuition, empathy, versatility. Your perception of the world is deeper than it seems at first glance.",
    hd_Generator: "You are here to create and respond to life. Your resource is huge if you do what you love.",
    hd_Projector: "Your gift is to guide others. It is important for you to wait for the right invitation so your intellect is appreciated.",
    hd_Manifestor: "You are an initiator. Your energy is created to start new things and influence others.",
    mat_1: "The Magician: power of the word, ability to materialize ideas, leadership.",
    mat_2: "The High Priestess: intuition, diplomacy, ability to see the hidden.",
    mat_3: "The Empress: fertility, beauty, ability to create comfort.",
    mat_4: "The Emperor: structure, power, discipline, ability to manage.",
    mat_5: "The Hierophant: law, order, transfer of knowledge, authority.",
    mat_6: "The Lovers: choice by heart, communication, aesthetics.",
    mat_7: "The Chariot: movement towards the goal, leadership, conquest, speed.",
    mat_8: "Justice: karma, balance, honesty, structure.",
    mat_9: "The Hermit: wisdom, depth, self-reliance, search for truth.",
    mat_10: "Wheel of Fortune: luck, flow, ability to catch chances.",
    mat_11: "Strength: huge potential, energy, endurance.",
    mat_12: "The Hanged Man: different vision, service, creative approach.",
    mat_13: "Death (Transformation): capacity for radical changes, letting go of the old.",
    mat_14: "Temperance: balance, art, harmony of the soul.",
    mat_15: "The Devil: powerful energy, charisma, material success.",
    mat_16: "The Tower: destruction of illusions, spiritual awakening, rebuilding.",
    mat_17: "The Star: publicity, talent, brightness, hope.",
    mat_18: "The Moon: strong intuition, materialization of thoughts, mysticism.",
    mat_19: "The Sun: scale, joy, well-being, leadership.",
    mat_20: "Judgment: connection with kin, global changes, system.",
    mat_21: "The World: large-scale thinking, tolerance, peacemaking.",
    mat_22: "The Fool: absolute freedom, lightness, beginning of a new path."
  }
};

function buildDemoData(form) {
  const dateStr = form.birthdate.value;
  const timeStr = form.unknown_time.checked ? 'unknown' : form.birthtime.value;
  const lang = currentLang || 'ru';
  
  const sunSign = getSunSign(dateStr);
  const hdType = getHDType(dateStr);
  const matArcana = getMatrixArcana(dateStr);
  
  return {
    sun: { sign: sunSign, text: DEMO_TEXTS[lang][sunSign] },
    hd: { sign: hdType, text: DEMO_TEXTS[lang]["hd_" + hdType] },
    matrix: { sign: matArcana + " Аркан", text: DEMO_TEXTS[lang]["mat_" + matArcana] }
  };
}

// --- WEBHOOK LOGIC ---
async function submitLead(form, currency) {
  const data = {
    name: form.name.value,
    email: form.email.value,
    birthdate: form.birthdate.value,
    birthtime: form.unknown_time.checked ? "unknown" : form.birthtime.value,
    birthplace: form.birthplace.value,
    contact: form.contact.value,
    currency: currency,
    status: "awaiting_payment",
    ts: new Date().toISOString()
  };
  
  try {
    sessionStorage.setItem("ahd_lead", JSON.stringify(data));
  } catch (e) {}

  if (!CONFIG.MAKE_WEBHOOK || !CONFIG.MAKE_WEBHOOK.startsWith("http")) {
    console.log("MAKE_WEBHOOK не настроен, пропускаем отправку", data);
    return;
  }

  try {
    await fetch(CONFIG.MAKE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (e) {
    console.error("Ошибка при отправке вебхука", e);
  }
}
