window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "054", n: 54, scene: "theatre", look: "plum", searchTime: 85, culprit: "hartnell",
  clues: {
    c1: { prop: "dagger", voice: "logic" },
    c2: { prop: "telegram", voice: "gossip", puzzle: true },
    c3: { prop: "programme", voice: "gossip" },
    c4: { prop: "bouquet", voice: "intuition" },
    c5: { prop: "mirror", voice: "logic" },
  },
  decoys: { lipstick: "intuition", perfume: "logic", mask: "intuition", poster: "logic" },
  suspects: [
    { id: "penrice", color: "#86b8dc", look: { hair: "curly", hairColor: "#2a1a10", outfit: "suit", outfitColor: "#5a2a2a", extras: ["sweat"] }, qs: [
        { id: "pen1", voice: "gossip" },
        { id: "pen2", voice: "logic" },
        { id: "pen3", needs: "c1", voice: "intuition" },
    ] },
    { id: "edna", color: "#d1a94e", look: { hair: "bun", hairColor: "#8a7a6a", outfit: "blouse", outfitColor: "#4a4a3a", extras: ["glasses"], female: true }, qs: [
        { id: "edn1" },
        { id: "edn2", needs: "c1", voice: "gossip" },
        { id: "edn3" },
        { id: "edn4", voice: "intuition" },
    ] },
    { id: "lalage", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#c09040", outfit: "dress", outfitColor: "#6a2a5a", extras: ["pearls", "earrings"], female: true, lips: "#b02040" }, qs: [
        { id: "lal1", voice: "intuition" },
        { id: "lal2", needs: "c5", voice: "logic" },
        { id: "lal3" },
    ] },
    { id: "hartnell", color: "#8cc79a", look: { hair: "slick", hairColor: "#4a3a2a", outfit: "suit", outfitColor: "#2a2a3a", extras: ["sweat", "mustache"] }, qs: [
        { id: "har1", voice: "intuition" },
        { id: "har2" },
        { id: "har3", needs: "c2" },
    ] },
  ],
  objections: { har2: { evidence: "lal2" }, har3: { evidence: "c2" } },
  proof: ["lal2", "c2", "c3", "obj:har2", "obj:har3"],
  text: {
    ru: {
      title: "Третий акт",
      desc: "Каждый вечер в третьем акте Иво Пенрис закалывал злодея-барона бутафорским кинжалом. На премьере в Лидсе барон не поднялся.",
      meta: ["Театр «Минерва», Лидс", "18 февраля 1933", "≈ 5 минут"],
      introEyebrow: "Гримёрная · 21:20",
      introTitle: "Не тот кинжал",
      intro: [
        "Гастроли в Лидсе, премьера мелодрамы «Ночь в Венеции». В третьем акте герой закалывает злодея-барона бутафорским кинжалом со складным клинком.",
        "В 21:05 Иво Пенрис ударил, как на всех репетициях, но Валентин Крюдсон не поднялся: кинжал оказался настоящим. Занавес дали раньше времени.",
        "Вы были в зале, мисс Ада Лэнгтон. Кто подменил кинжал?"
      ],
      introVoice: "За стеной ещё гудит растерянный зал.",
      clues: {
        c1: { title: "Кинжал", text: "Бутафорский кинжал со складным клинком нашёлся в кармане камзола Пенриса. Подменили, выходит, уже на сцене, перед самым ударом.", note: "Бутафорский кинжал нашёлся в кармане сценического камзола Пенриса." },
        c2: { title: "Телеграмма", text: "Телеграмма из Лондона, да не звезде, а дублёру! Такое почтальон не каждый день в театр носит!", note: "Продюсер Гейл сообщает Саймону Хартнеллу: спектакль переносят в Лондон, но Крюдсон потребовал нового дублёра, контракт Хартнелла не продлят." },
        c3: { title: "Программка", text: "Программка премьеры! «Барон — Валентин Крюдсон», а мелким шрифтом: «дублёр — Саймон Хартнелл». Всю жизнь в тени, бедняжка!", note: "Дублёр Крюдсона в роли барона — Саймон Хартнелл." },
        c4: { title: "Букет", text: "Букет роз с карточкой «Моему барону. Л.». Кто-то в этой труппе ревнует.", note: "Розы для Крюдсона от Лалаге Дорн: «Моему барону»." },
        c5: { title: "Зеркало", text: "За раму зеркала заткнуто расписание выходов: удар кинжалом — третий акт, 21:05. Кинжалы раскладывает реквизитор в антракте.", note: "Кинжал для третьего акта реквизитор кладёт на стол у кулисы в антракте." }
      },
      letter: [
        "ТЕЛЕГРАММА. С. ХАРТНЕЛЛУ, ТЕАТР «МИНЕРВА», ЛИДС.",
        "ПЕРЕНОС В ЛОНДОН ПОДТВЕРЖДЁН НО ПО ТРЕБОВАНИЮ",
        "КРЮДСОНА ДУБЛЁРОМ В ЛОНДОНЕ БУДЕТ",
        "ДРУГОЙ АКТЁР ТЧК ВАШ КОНТРАКТ НЕ ПРОДЛЕВАЕМ",
        "ГЕЙЛ, ПРОДЮСЕР"
      ],
      decoys: {
        lipstick: "Помада барона, тёмная, почти чёрная. Злодеи у нас красят губы погуще.",
        perfume: "Флакон одеколона «Венеция». Наполовину пуст.",
        mask: "Карнавальная маска барона из второго акта. Изнутри пахнет гримом.",
        poster: "Афиша: «Ночь в Венеции», премьера, 18 февраля, начало в 19:30."
      },
      suspects: {
        penrice: { name: "Мистер Иво Пенрис", role: "Герой мелодрамы, 34 года", intro: "Чёрные кудри, бордовый жилет, испарина на висках." },
        edna: { name: "Миссис Эдна Фаррант", role: "Реквизитор, 57 лет", intro: "Очки, пучок, булавки на кофте." },
        lalage: { name: "Мисс Лалаге Дорн", role: "Героиня мелодрамы, 29 лет", intro: "Золотые волны, жемчуг, сценическое платье." },
        hartnell: { name: "Мистер Саймон Хартнелл", role: "Дублёр барона, 46 лет", intro: "Гладкий пробор, усы, испарина на лбу." }
      },
      qs: {
        pen1: { q: "Вы ладили с мистером Крюдсоном?", a: "На сцене я закалывал его каждый вечер, мисс, а за кулисами он отбивал у меня Лалаге. Публике нравилось и то и другое.", v: "Соперники и на сцене, и за кулисами! Весь Лидс про них знает!" },
        pen2: { q: "Где вы были в антракте?", a: "В зелёной комнате, мисс, с половины девятого до звонка. Без двадцати девять ко мне подсела мисс Дорн.", v: "Антракт — зелёная комната.", nt: "Пенрис в антракте", nx: "Весь антракт Пенрис сидел в зелёной комнате. С 20:40 с ним была мисс Дорн." },
        pen3: { q: "Это кинжал из вашего камзола?", a: "Бутафорский, мисс, его я и должен был взять со стола. Камзол весь антракт висел в коридоре у двери.", v: "Руки у него дрожат. На кинжал он смотреть не может." },
        edn1: { q: "Как раскладывают реквизит?", a: "В антракте, мисс: в 20:35 я кладу кинжал на стол у левой кулисы и иду за клеем для бутафории." },
        edn2: { q: "Могли подменить кинжал на сцене?", a: "На сцене его до удара никто не касался, мисс, кроме Пенриса: с конца антракта стол стоял на виду у помощника режиссёра. Подменить могли только в антракте, пока меня не было.", v: "На сцене, у всех на глазах? Да помреж там и чихнуть не даст! Ищите того, кто крутился у стола в антракте!" },
        edn3: { q: "Откуда в театре настоящий кинжал?", a: "Из запасника, мисс, старый, с прошлогодних гастролей «Отелло». Ключ от запасника висит на гвоздике у всех на виду." },
        edn4: { q: "Давно вы служите реквизитором?", a: "Тридцать лет раскладываю чужие кинжалы, мисс, и ни разу ни одного не перепутала. До сегодняшнего вечера.", v: "Она комкает фартук и изо всех сил старается не заплакать." },
        lal1: { q: "Вы любили мистера Крюдсона?", a: "Я любила его барона, мисс, а самого Валентина — по средам. Он был тщеславен, как павлин.", v: "Она улыбается сквозь слёзы." },
        lal2: { q: "Кто подходил к столу реквизита в антракте?", a: "В 20:38 я шла в зелёную комнату, а у стола стоял мистер Хартнелл. Сказал, проверяет, не туп ли кинжал: дублёру, мол, тоже надо знать реквизит.", v: "20:38, стол реквизита.", nt: "Мисс Дорн в 20:38", nx: "В 20:38 у стола реквизита стоял мистер Хартнелл и держал кинжал." },
        lal3: { q: "Мистер Пенрис ревновал?", a: "Иво ревнует только к аплодисментам, мисс, а в этот вечер их хватало на двоих." },
        har1: { q: "Давно вы дублёр?", a: "Двенадцать лет, мисс, и ни разу не вышел вместо него: Валентин не болел даже в инфлюэнцу.", v: "В его голосе нет злости, одна усталость." },
        har2: { q: "Где вы были в антракте?", a: "Учил текст, мисс, я всегда учу. [[Весь антракт просидел у себя в гримёрной, дверь на ключ.]]" },
        har3: { q: "Что это за телеграмма?", a: "Из Лондона, мисс, от продюсера. [[О Лондоне я узнал только сейчас, от вас: телеграмму в глаза не видел.]]" }
      },
      objections: {
        har2: { reply: "Да, я был у стола, мисс, в 20:38: проверял остриё ногтем, как перед каждым спектаклем. Дублёр, который не знает реквизита, — плохой дублёр.", nt: "Хартнелл солгал", nx: "В 20:38 он был у стола реквизита, а не у себя в гримёрной." },
        har3: { reply: "Двенадцать лет в тени, мисс, а он выбросил меня, как старый парик. Лондон, а я — на улицу. Кто бы ещё знал барона назубок, если не я?", nt: "Лондон", nx: "Крюдсон потребовал нового дублёра, и Хартнелл терял место перед лондонским переносом. Вот мотив." }
      },
      wrong: {
        penrice: "Иво ударил бутафорским, как каждый вечер: о подмене он не знал. Весь антракт он сидел в зелёной комнате, а камзол висел в коридоре у всех на виду.",
        edna: "Миссис Фаррант положила на стол бутафорский кинжал и ушла за клеем. Это она объяснила, что подменить могли только в антракте.",
        lalage: "Мисс Дорн любила барона только на сцене. Это она видела мистера Хартнелла у стола реквизита.",
        proof: "Мистер Хартнелл разводит руками: «Я учил текст, мисс, под замком». Докажите, что он был у стола реквизита, или что он терял из-за мистера Крюдсона."
      },
      deduce: [
        "Кинжал подменили не на сцене. Где и когда?",
        "Кого видели у стола реквизита в антракте?",
        "Кому Крюдсон закрыл дорогу в Лондон?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Весной «Ночь в Венеции» с успехом шла в Лондоне. Барона играл Саймон Хартнелл",
        p: [
          "Двенадцать лет Саймон Хартнелл дублировал Валентина Крюдсона и ни разу не вышел на сцену. В субботу пришла телеграмма: спектакль едет в Лондон, а Крюдсон потребовал другого дублёра.",
          "В антракте, пока реквизитор ходила за клеем, Хартнелл положил на стол настоящий кинжал из запасника вместо бутафорского. В третьем акте Иво Пенрис ударил, как каждый вечер, не зная о подмене.",
          "Бутафорский кинжал Хартнелл сунул в карман камзола Пенриса, висевшего в коридоре. Но мисс Дорн видела его у стола реквизита, а телеграмму он обронил в гримёрной."
        ]
      }
    },
    en: {
      title: "Act Three",
      desc: "Every night in Act Three Ivo Penrice ran the villainous baron through with a stage dagger. At the Leeds premiere the baron did not get up.",
      meta: ["The Minerva Theatre, Leeds", "18 February 1933", "≈ 5 minutes"],
      introEyebrow: "Dressing room · 9:20 pm",
      introTitle: "The wrong dagger",
      intro: [
        "On tour in Leeds, the premiere of the melodrama A Night in Venice. In Act Three the hero runs the villainous baron through with a stage dagger whose blade slides back into the hilt.",
        "At 9:05 Ivo Penrice struck as he had at every rehearsal, but Valentine Crewdson did not get up: the dagger was real. The curtain came down early.",
        "You were in the audience, Miss Ada Langton. Who swapped the dagger?"
      ],
      introVoice: "Beyond the wall the bewildered house is still murmuring.",
      clues: {
        c1: { title: "Dagger", text: "The stage dagger with the sliding blade turned up in the pocket of Penrice's doublet. So it was swapped on stage, just before the blow.", note: "The stage dagger turned up in the pocket of Penrice's stage doublet." },
        c2: { title: "Telegram", text: "A telegram from London, and not for the star but for the understudy! The post boy doesn't bring the likes of that every day!", note: "The producer, Gale, informs Simon Hartnell: the play transfers to London, but Crewdson has demanded a new understudy, and Hartnell's contract won't be renewed." },
        c3: { title: "Programme", text: "The premiere programme! “The Baron — Valentine Crewdson”, and in small print: “understudy — Simon Hartnell”. A lifetime in the shadows, poor soul!", note: "Crewdson's understudy as the Baron is Simon Hartnell." },
        c4: { title: "Bouquet", text: "Roses with a card: “To my Baron. L.” Someone in this company is jealous.", note: "Roses for Crewdson from Lalage Dorne: “To my Baron.”" },
        c5: { title: "Mirror", text: "The running order is tucked into the mirror frame: the dagger blow, Act Three, 9:05. The property mistress sets out the daggers in the interval.", note: "The property mistress lays the Act Three dagger on the table by the wings during the interval." }
      },
      letter: [
        "TELEGRAM. S. HARTNELL, MINERVA THEATRE, LEEDS.",
        "LONDON TRANSFER CONFIRMED BUT AT",
        "CREWDSONS REQUEST UNDERSTUDY IN LONDON WILL BE",
        "ANOTHER ACTOR STOP YOUR CONTRACT NOT RENEWED",
        "GALE, PRODUCER"
      ],
      decoys: {
        lipstick: "The Baron's lip colour, dark, almost black. Our villains paint their mouths thick.",
        perfume: "A bottle of “Venezia” cologne, half empty.",
        mask: "The Baron's carnival mask from Act Two. It smells of greasepaint inside.",
        poster: "A poster: A Night in Venice, premiere, 18 February, curtain up at 7:30."
      },
      suspects: {
        penrice: { name: "Mr Ivo Penrice", role: "The melodrama's hero, 34", intro: "Black curls, a burgundy waistcoat, sweat at his temples." },
        edna: { name: "Mrs Edna Farrant", role: "Property mistress, 57", intro: "Spectacles, a bun, pins on her cardigan." },
        lalage: { name: "Miss Lalage Dorne", role: "The melodrama's heroine, 29", intro: "Golden waves, pearls, a stage gown." },
        hartnell: { name: "Mr Simon Hartnell", role: "The Baron's understudy, 46", intro: "Sleek parting, a moustache, sweat on his brow." }
      },
      qs: {
        pen1: { q: "Did you get on with Mr Crewdson?", a: "On stage I ran him through every night, miss, and in the wings he was stealing Lalage from me. The public liked both.", v: "Rivals on stage and off! All Leeds knows about them!" },
        pen2: { q: "Where were you in the interval?", a: "In the green room, miss, from half past eight till the bell. Miss Dorne came and sat with me at twenty to nine.", v: "The interval: the green room.", nt: "Penrice in the interval", nx: "Penrice spent the whole interval in the green room. From 8:40 Miss Dorne was with him." },
        pen3: { q: "Is this the dagger from your doublet?", a: "It's the stage one, miss, the one I should have picked up from the table. My doublet hung in the passage by the door the whole interval.", v: "His hands are shaking. He can't bear to look at the dagger." },
        edn1: { q: "How are the props set out?", a: "In the interval, miss: at 8:35 I lay the dagger on the table by the left-hand wings and go for the glue for the props." },
        edn2: { q: "Could the dagger have been swapped on stage?", a: "On stage no one touched it before the blow, miss, except Penrice: from the end of the interval the table was in full view of the stage manager. It could only have been swapped in the interval, while I was away.", v: "On stage, in front of everyone? The stage manager wouldn't let you so much as sneeze there! Look for whoever was hanging about that table in the interval!" },
        edn3: { q: "Where did a real dagger come from in a theatre?", a: "From the store, miss, an old one from last year's Othello tour. The key to the store hangs on a nail where anyone can see it." },
        edn4: { q: "Have you been a property mistress long?", a: "Thirty years I've been setting out other people's daggers, miss, and never once mixed one up. Until tonight.", v: "She crumples her apron and tries her hardest not to cry." },
        lal1: { q: "Did you love Mr Crewdson?", a: "I loved his Baron, miss, and Valentine himself on Wednesdays. He was vain as a peacock.", v: "She smiles through her tears." },
        lal2: { q: "Who went near the property table in the interval?", a: "At 8:38 I was on my way to the green room, and Mr Hartnell was standing at the table. He said he was checking the dagger wasn't blunt: an understudy has to know the props too.", v: "8:38, the property table.", nt: "Miss Dorne at 8:38", nx: "At 8:38 Mr Hartnell was standing at the property table, holding the dagger." },
        lal3: { q: "Was Mr Penrice jealous?", a: "Ivo is only jealous of applause, miss, and tonight there was enough for two." },
        har1: { q: "How long have you been an understudy?", a: "Twelve years, miss, and never once went on in his place: Valentine didn't fall ill even in the influenza.", v: "There's no anger in his voice, only weariness." },
        har2: { q: "Where were you in the interval?", a: "Learning lines, miss, I always am. [[I sat the whole interval in my dressing room with the door locked.]]" },
        har3: { q: "What is this telegram?", a: "From London, miss, from the producer. [[I've only just heard about London, from you: I never set eyes on that telegram.]]" }
      },
      objections: {
        har2: { reply: "Yes, I was at the table, miss, at 8:38: I tested the point with my thumbnail, as I do before every performance. An understudy who doesn't know the props is a poor understudy.", nt: "Hartnell lied", nx: "At 8:38 he was at the property table, not in his dressing room." },
        har3: { reply: "Twelve years in the shadows, miss, and he threw me out like an old wig. London, and me out on the street. Who else knows the Baron by heart, if not me?", nt: "London", nx: "Crewdson had demanded a new understudy, and Hartnell was losing his place just before the London transfer. There's the motive." }
      },
      wrong: {
        penrice: "Ivo struck with the stage dagger as he did every night: he knew nothing of the swap. He spent the whole interval in the green room, and his doublet hung in the passage for anyone to reach.",
        edna: "Mrs Farrant laid the stage dagger on the table and went for the glue. She's the one who explained that it could only have been swapped in the interval.",
        lalage: "Miss Dorne loved the Baron only on stage. She's the one who saw Mr Hartnell at the property table.",
        proof: "Mr Hartnell spreads his hands: “I was learning lines, miss, behind a locked door.” Prove he was at the property table, or what Mr Crewdson was costing him."
      },
      deduce: [
        "The dagger wasn't swapped on stage. Where and when, then?",
        "Who was seen at the property table in the interval?",
        "Whose road to London had Crewdson closed?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "In the spring A Night in Venice was a hit in London. The Baron was played by Simon Hartnell",
        p: [
          "For twelve years Simon Hartnell had understudied Valentine Crewdson without once going on. On Saturday a telegram came: the play was going to London, and Crewdson had demanded a different understudy.",
          "In the interval, while the property mistress went for glue, Hartnell put a real dagger from the store on the table in place of the stage one. In Act Three Ivo Penrice struck as he did every night, knowing nothing of the swap.",
          "Hartnell pushed the stage dagger into the pocket of Penrice's doublet, hanging in the passage. But Miss Dorne had seen him at the property table, and he had dropped the telegram in the dressing room."
        ]
      }
    },
    es: {
      title: "El tercer acto",
      desc: "Cada noche, en el tercer acto, Ivo Penrice atravesaba al malvado barón con un puñal de atrezo. En el estreno de Leeds el barón no se levantó.",
      meta: ["Teatro Minerva, Leeds", "18 de febrero de 1933", "≈ 5 minutos"],
      introEyebrow: "Camerino · 21:20",
      introTitle: "El puñal equivocado",
      intro: [
        "Gira por Leeds, estreno del melodrama «Una noche en Venecia». En el tercer acto el héroe atraviesa al malvado barón con un puñal de atrezo cuya hoja se esconde en el mango.",
        "A las 21:05 Ivo Penrice golpeó como en todos los ensayos, pero Valentine Crewdson no se levantó: el puñal era de verdad. El telón bajó antes de tiempo.",
        "Estabas en la sala, señorita Ada Langton. ¿Quién cambió el puñal?"
      ],
      introVoice: "Al otro lado de la pared el público, desconcertado, aún murmura.",
      clues: {
        c1: { title: "Puñal", text: "El puñal de atrezo con la hoja retráctil apareció en el bolsillo del jubón de Penrice. O sea, que lo cambiaron ya en escena, justo antes del golpe.", note: "El puñal de atrezo apareció en el bolsillo del jubón de escena de Penrice." },
        c2: { title: "Telegrama", text: "¡Un telegrama de Londres, y no para la estrella, sino para el suplente! ¡Eso no lo trae el cartero todos los días!", note: "El productor Gale comunica a Simon Hartnell: la obra pasa a Londres, pero Crewdson ha exigido un suplente nuevo y el contrato de Hartnell no se renueva." },
        c3: { title: "Programa", text: "¡El programa del estreno! «El Barón — Valentine Crewdson», y en letra pequeña: «suplente — Simon Hartnell». ¡Toda la vida a la sombra, pobrecillo!", note: "El suplente de Crewdson en el papel del Barón es Simon Hartnell." },
        c4: { title: "Ramo", text: "Rosas con una tarjeta: «A mi barón. L.». Alguien en esta compañía tiene celos.", note: "Rosas para Crewdson de Lalage Dorne: «A mi barón»." },
        c5: { title: "Espejo", text: "En el marco del espejo, el orden de entradas: la puñalada, tercer acto, 21:05. Los puñales los coloca la utilera en el entreacto.", note: "La utilera deja el puñal del tercer acto en la mesa junto a los bastidores durante el entreacto." }
      },
      letter: [
        "TELEGRAMA. S. HARTNELL, TEATRO MINERVA, LEEDS.",
        "TRASLADO A LONDRES CONFIRMADO PERO A PETICIÓN DE",
        "CREWDSON EL SUPLENTE EN LONDRES SERÁ",
        "OTRO ACTOR STOP SU CONTRATO NO SE RENUEVA",
        "GALE, PRODUCTOR"
      ],
      decoys: {
        lipstick: "El carmín del barón, oscuro, casi negro. Aquí los villanos se pintan los labios bien cargados.",
        perfume: "Un frasco de colonia «Venezia», a medias.",
        mask: "La máscara de carnaval del barón, del segundo acto. Por dentro huele a maquillaje.",
        poster: "Un cartel: «Una noche en Venecia», estreno, 18 de febrero, a las 19:30."
      },
      suspects: {
        penrice: { name: "Señor Ivo Penrice", role: "Galán del melodrama, 34 años", intro: "Rizos negros, chaleco burdeos, sudor en las sienes." },
        edna: { name: "Señora Edna Farrant", role: "Utilera, 57 años", intro: "Gafas, moño, alfileres en la rebeca." },
        lalage: { name: "Señorita Lalage Dorne", role: "Primera actriz del melodrama, 29 años", intro: "Ondas doradas, perlas, vestido de escena." },
        hartnell: { name: "Señor Simon Hartnell", role: "Suplente del barón, 46 años", intro: "Raya impecable, bigote, sudor en la frente." }
      },
      qs: {
        pen1: { q: "¿Se llevaba bien con el señor Crewdson?", a: "En escena lo atravesaba cada noche, señorita, y entre bastidores él me quitaba a Lalage. Al público le gustaba lo uno y lo otro.", v: "¡Rivales en escena y fuera de ella! ¡Todo Leeds lo sabe!" },
        pen2: { q: "¿Dónde estuvo en el entreacto?", a: "En el saloncillo, señorita, desde las ocho y media hasta el timbre. A las nueve menos veinte se sentó conmigo la señorita Dorne.", v: "El entreacto: el saloncillo.", nt: "Penrice en el entreacto", nx: "Penrice pasó todo el entreacto en el saloncillo. Desde las 20:40 estuvo con él la señorita Dorne." },
        pen3: { q: "¿Es este el puñal de su jubón?", a: "Es el de atrezo, señorita, el que yo tenía que coger de la mesa. Mi jubón estuvo todo el entreacto colgado en el pasillo, junto a la puerta.", v: "Le tiemblan las manos. No soporta mirar el puñal." },
        edn1: { q: "¿Cómo se coloca el atrezo?", a: "En el entreacto, señorita: a las 20:35 dejo el puñal en la mesa junto al bastidor izquierdo y voy a por la cola para el atrezo." },
        edn2: { q: "¿Pudieron cambiar el puñal en escena?", a: "En escena nadie lo tocó antes del golpe, señorita, salvo Penrice: desde el final del entreacto la mesa estaba a la vista del regidor. Solo pudieron cambiarlo en el entreacto, mientras yo no estaba.", v: "¿En escena, delante de todos? ¡Si allí el regidor no te deja ni estornudar! ¡Busca a quien rondaba la mesa en el entreacto!" },
        edn3: { q: "¿De dónde sale un puñal de verdad en un teatro?", a: "Del almacén, señorita, uno viejo de la gira de «Otelo» del año pasado. La llave del almacén cuelga de un clavo a la vista de todos." },
        edn4: { q: "¿Lleva mucho de utilera?", a: "Treinta años colocando puñales ajenos, señorita, y ni una vez me equivoqué de uno. Hasta esta noche.", v: "Estruja el delantal y hace lo posible por no llorar." },
        lal1: { q: "¿Amaba usted al señor Crewdson?", a: "Amaba a su barón, señorita, y a Valentine en persona, los miércoles. Era vanidoso como un pavo real.", v: "Sonríe entre lágrimas." },
        lal2: { q: "¿Quién se acercó a la mesa de atrezo en el entreacto?", a: "A las 20:38 iba al saloncillo, y en la mesa estaba el señor Hartnell. Dijo que comprobaba que el puñal no estuviera romo: un suplente también tiene que conocer el atrezo.", v: "20:38, la mesa de atrezo.", nt: "La señorita Dorne a las 20:38", nx: "A las 20:38 el señor Hartnell estaba junto a la mesa de atrezo con el puñal en la mano." },
        lal3: { q: "¿El señor Penrice era celoso?", a: "Ivo solo tiene celos de los aplausos, señorita, y esta noche hubo de sobra para los dos." },
        har1: { q: "¿Desde cuándo es suplente?", a: "Doce años, señorita, y ni una vez salí en su lugar: Valentine no enfermó ni con la gripe.", v: "En su voz no hay rabia, solo cansancio." },
        har2: { q: "¿Dónde estuvo en el entreacto?", a: "Estudiando el papel, señorita, siempre lo estudio. [[Pasé todo el entreacto en mi camerino, con la puerta cerrada con llave.]]" },
        har3: { q: "¿Qué es este telegrama?", a: "De Londres, señorita, del productor. [[Me entero ahora de lo de Londres, por usted: ese telegrama no lo había visto nunca.]]" }
      },
      objections: {
        har2: { reply: "Sí, estuve en la mesa, señorita, a las 20:38: probé la punta con la uña, como antes de cada función. Un suplente que no conoce el atrezo es un mal suplente.", nt: "Hartnell mintió", nx: "A las 20:38 estaba junto a la mesa de atrezo, no en su camerino." },
        har3: { reply: "Doce años a la sombra, señorita, y me tiró como una peluca vieja. Londres, y yo a la calle. ¿Quién más se sabe al barón de memoria, si no yo?", nt: "Londres", nx: "Crewdson había exigido un suplente nuevo, y Hartnell perdía su puesto justo antes del traslado a Londres. Ese es el móvil." }
      },
      wrong: {
        penrice: "Ivo golpeó con el puñal de atrezo como cada noche: no sabía nada del cambio. Pasó todo el entreacto en el saloncillo, y su jubón colgaba en el pasillo al alcance de cualquiera.",
        edna: "La señora Farrant dejó el puñal de atrezo en la mesa y fue a por cola. Fue ella quien explicó que solo pudieron cambiarlo en el entreacto.",
        lalage: "La señorita Dorne solo amaba al barón en escena. Fue ella quien vio al señor Hartnell junto a la mesa de atrezo.",
        proof: "El señor Hartnell abre las manos: «Estudiaba el papel, señorita, con la puerta cerrada». Demuestra que estuvo junto a la mesa de atrezo, o qué le costaba el señor Crewdson."
      },
      deduce: [
        "El puñal no se cambió en escena. ¿Dónde y cuándo, entonces?",
        "¿A quién vieron junto a la mesa de atrezo en el entreacto?",
        "¿A quién le había cerrado Crewdson el camino a Londres?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "En primavera «Una noche en Venecia» triunfó en Londres. Al barón lo interpretaba Simon Hartnell",
        p: [
          "Durante doce años Simon Hartnell había sido el suplente de Valentine Crewdson sin salir a escena ni una vez. El sábado llegó un telegrama: la obra iba a Londres, y Crewdson había exigido otro suplente.",
          "En el entreacto, mientras la utilera iba a por cola, Hartnell dejó en la mesa un puñal de verdad del almacén en lugar del de atrezo. En el tercer acto Ivo Penrice golpeó como cada noche, sin saber nada del cambio.",
          "Hartnell metió el puñal de atrezo en el bolsillo del jubón de Penrice, colgado en el pasillo. Pero la señorita Dorne lo había visto junto a la mesa de atrezo, y el telegrama se le cayó en el camerino."
        ]
      }
    },
    de: {
      title: "Der dritte Akt",
      desc: "Jeden Abend im dritten Akt erstach Ivo Penrice den bösen Baron mit einem Bühnendolch. Bei der Premiere in Leeds stand der Baron nicht wieder auf.",
      meta: ["Minerva-Theater, Leeds", "18. Februar 1933", "≈ 5 Minuten"],
      introEyebrow: "Garderobe · 21:20",
      introTitle: "Der falsche Dolch",
      intro: [
        "Gastspiel in Leeds, Premiere des Melodrams „Eine Nacht in Venedig“. Im dritten Akt ersticht der Held den bösen Baron mit einem Bühnendolch, dessen Klinge in den Griff zurückgleitet.",
        "Um 21:05 stieß Ivo Penrice zu wie bei allen Proben, aber Valentine Crewdson stand nicht wieder auf: Der Dolch war echt. Der Vorhang fiel vorzeitig.",
        "Du saßt im Zuschauerraum, Miss Ada Langton. Wer hat den Dolch vertauscht?"
      ],
      introVoice: "Hinter der Wand murmelt noch das ratlose Publikum.",
      clues: {
        c1: { title: "Dolch", text: "Der Bühnendolch mit der gleitenden Klinge fand sich in der Tasche von Penrices Wams. Also wurde er erst auf der Bühne vertauscht, kurz vor dem Stoß.", note: "Der Bühnendolch fand sich in der Tasche von Penrices Bühnenwams." },
        c2: { title: "Telegramm", text: "Ein Telegramm aus London, und nicht für den Star, sondern für die Zweitbesetzung! So etwas bringt der Bote nicht alle Tage!", note: "Der Produzent Gale teilt Simon Hartnell mit: Das Stück geht nach London, aber Crewdson verlangt eine neue Zweitbesetzung, Hartnells Vertrag wird nicht verlängert." },
        c3: { title: "Programmheft", text: "Das Programmheft der Premiere! „Der Baron — Valentine Crewdson“, und klein gedruckt: „Zweitbesetzung — Simon Hartnell“. Ein Leben lang im Schatten, der Ärmste!", note: "Crewdsons Zweitbesetzung als Baron ist Simon Hartnell." },
        c4: { title: "Blumenstrauß", text: "Rosen mit einer Karte: „Meinem Baron. L.“ Jemand in dieser Truppe ist eifersüchtig.", note: "Rosen für Crewdson von Lalage Dorne: „Meinem Baron“." },
        c5: { title: "Spiegel", text: "Im Spiegelrahmen steckt der Ablaufplan: der Dolchstoß, dritter Akt, 21:05. Die Dolche legt die Requisiteurin in der Pause bereit.", note: "Die Requisiteurin legt den Dolch für den dritten Akt in der Pause auf den Tisch an der Seitenbühne." }
      },
      letter: [
        "TELEGRAMM. S. HARTNELL, MINERVA-THEATER, LEEDS.",
        "LONDONER ÜBERNAHME BESTÄTIGT ABER AUF WUNSCH VON",
        "CREWDSON ZWEITBESETZUNG IN LONDON WIRD",
        "EIN ANDERER SCHAUSPIELER STOP IHR VERTRAG ENDET",
        "GALE, PRODUZENT"
      ],
      decoys: {
        lipstick: "Der Lippenstift des Barons, dunkel, fast schwarz. Bei uns schminken sich die Bösewichte die Lippen dick.",
        perfume: "Ein Flakon Kölnischwasser „Venezia“, halb leer.",
        mask: "Die Karnevalsmaske des Barons aus dem zweiten Akt. Innen riecht sie nach Schminke.",
        poster: "Ein Plakat: „Eine Nacht in Venedig“, Premiere, 18. Februar, Beginn 19:30."
      },
      suspects: {
        penrice: { name: "Mr Ivo Penrice", role: "Held des Melodrams, 34", intro: "Schwarze Locken, weinrote Weste, Schweiß an den Schläfen." },
        edna: { name: "Mrs Edna Farrant", role: "Requisiteurin, 57", intro: "Brille, Haarknoten, Stecknadeln an der Strickjacke." },
        lalage: { name: "Miss Lalage Dorne", role: "Heldin des Melodrams, 29", intro: "Goldene Wellen, Perlen, ein Bühnenkleid." },
        hartnell: { name: "Mr Simon Hartnell", role: "Zweitbesetzung des Barons, 46", intro: "Glatter Scheitel, Schnurrbart, Schweiß auf der Stirn." }
      },
      qs: {
        pen1: { q: "Kamen Sie mit Mr Crewdson aus?", a: "Auf der Bühne habe ich ihn jeden Abend erstochen, Miss, und hinter den Kulissen spannte er mir Lalage aus. Dem Publikum gefiel beides.", v: "Rivalen auf der Bühne und dahinter! Ganz Leeds weiß von den beiden!" },
        pen2: { q: "Wo waren Sie in der Pause?", a: "Im Künstlerfoyer, Miss, von halb neun bis zum Klingeln. Um zwanzig vor neun setzte sich Miss Dorne zu mir.", v: "Die Pause: das Künstlerfoyer.", nt: "Penrice in der Pause", nx: "Penrice saß die ganze Pause im Künstlerfoyer. Ab 20:40 war Miss Dorne bei ihm." },
        pen3: { q: "Ist das der Dolch aus Ihrem Wams?", a: "Das ist der Bühnendolch, Miss, den ich vom Tisch hätte nehmen sollen. Mein Wams hing die ganze Pause auf dem Gang neben der Tür.", v: "Seine Hände zittern. Er bringt es nicht über sich, den Dolch anzusehen." },
        edn1: { q: "Wie werden die Requisiten bereitgelegt?", a: "In der Pause, Miss: Um 20:35 lege ich den Dolch auf den Tisch an der linken Seitenbühne und hole den Leim für die Requisiten." },
        edn2: { q: "Konnte der Dolch auf der Bühne vertauscht werden?", a: "Auf der Bühne hat ihn vor dem Stoß niemand angerührt, Miss, außer Penrice: Seit dem Ende der Pause stand der Tisch im Blick des Inspizienten. Vertauscht werden konnte er nur in der Pause, als ich fort war.", v: "Auf der Bühne, vor aller Augen? Da lässt einen der Inspizient ja nicht mal niesen! Such den, der sich in der Pause am Tisch herumgedrückt hat!" },
        edn3: { q: "Woher kommt in einem Theater ein echter Dolch?", a: "Aus dem Fundus, Miss, ein alter von der „Othello“-Tournee im letzten Jahr. Der Schlüssel zum Fundus hängt für jeden sichtbar an einem Nagel." },
        edn4: { q: "Sind Sie schon lange Requisiteurin?", a: "Dreißig Jahre lege ich fremde Dolche bereit, Miss, und nie habe ich einen verwechselt. Bis heute Abend.", v: "Sie knüllt ihre Schürze und gibt sich alle Mühe, nicht zu weinen." },
        lal1: { q: "Haben Sie Mr Crewdson geliebt?", a: "Ich liebte seinen Baron, Miss, und Valentine selbst mittwochs. Er war eitel wie ein Pfau.", v: "Sie lächelt unter Tränen." },
        lal2: { q: "Wer war in der Pause am Requisitentisch?", a: "Um 20:38 ging ich ins Künstlerfoyer, und am Tisch stand Mr Hartnell. Er sagte, er prüfe, ob der Dolch stumpf sei: Auch eine Zweitbesetzung müsse die Requisiten kennen.", v: "20:38, der Requisitentisch.", nt: "Miss Dorne um 20:38", nx: "Um 20:38 stand Mr Hartnell mit dem Dolch in der Hand am Requisitentisch." },
        lal3: { q: "War Mr Penrice eifersüchtig?", a: "Ivo ist nur auf Applaus eifersüchtig, Miss, und heute Abend gab es genug für zwei." },
        har1: { q: "Wie lange sind Sie schon Zweitbesetzung?", a: "Zwölf Jahre, Miss, und kein einziges Mal habe ich für ihn gespielt: Valentine wurde nicht einmal bei der Grippe krank.", v: "In seiner Stimme ist kein Zorn, nur Müdigkeit." },
        har2: { q: "Wo waren Sie in der Pause?", a: "Ich habe Text gelernt, Miss, das tue ich immer. [[Die ganze Pause saß ich in meiner Garderobe, die Tür abgeschlossen.]]" },
        har3: { q: "Was ist das für ein Telegramm?", a: "Aus London, Miss, vom Produzenten. [[Von London höre ich eben erst, von Ihnen: Dieses Telegramm habe ich nie gesehen.]]" }
      },
      objections: {
        har2: { reply: "Ja, ich war am Tisch, Miss, um 20:38: Ich habe die Spitze mit dem Daumennagel geprüft, wie vor jeder Vorstellung. Eine Zweitbesetzung, die die Requisiten nicht kennt, taugt nichts.", nt: "Hartnell hat gelogen", nx: "Um 20:38 war er am Requisitentisch, nicht in seiner Garderobe." },
        har3: { reply: "Zwölf Jahre im Schatten, Miss, und er warf mich weg wie eine alte Perücke. London, und ich auf der Straße. Wer kann den Baron auswendig, wenn nicht ich?", nt: "London", nx: "Crewdson verlangte eine neue Zweitbesetzung, und Hartnell verlor kurz vor der Londoner Übernahme seinen Platz. Das ist das Motiv." }
      },
      wrong: {
        penrice: "Ivo stieß mit dem Bühnendolch zu wie jeden Abend: Vom Tausch wusste er nichts. Er saß die ganze Pause im Künstlerfoyer, und sein Wams hing für jeden erreichbar auf dem Gang.",
        edna: "Mrs Farrant legte den Bühnendolch auf den Tisch und holte Leim. Sie hat erklärt, dass er nur in der Pause vertauscht werden konnte.",
        lalage: "Miss Dorne liebte den Baron nur auf der Bühne. Sie hat Mr Hartnell am Requisitentisch gesehen.",
        proof: "Mr Hartnell breitet die Hände aus: „Ich habe Text gelernt, Miss, hinter verschlossener Tür.“ Beweise, dass er am Requisitentisch war, oder was ihn Mr Crewdson kostete."
      },
      deduce: [
        "Der Dolch wurde nicht auf der Bühne vertauscht. Wo und wann dann?",
        "Wen sah man in der Pause am Requisitentisch?",
        "Wem hatte Crewdson den Weg nach London versperrt?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Im Frühjahr wurde „Eine Nacht in Venedig“ in London ein Erfolg. Den Baron spielte Simon Hartnell",
        p: [
          "Zwölf Jahre lang war Simon Hartnell Valentine Crewdsons Zweitbesetzung gewesen, ohne ein einziges Mal aufzutreten. Am Samstag kam ein Telegramm: Das Stück ging nach London, und Crewdson hatte eine andere Zweitbesetzung verlangt.",
          "In der Pause, während die Requisiteurin Leim holte, legte Hartnell einen echten Dolch aus dem Fundus statt des Bühnendolchs auf den Tisch. Im dritten Akt stieß Ivo Penrice zu wie jeden Abend, ohne von dem Tausch zu wissen.",
          "Den Bühnendolch steckte Hartnell in die Tasche von Penrices Wams, das auf dem Gang hing. Aber Miss Dorne hatte ihn am Requisitentisch gesehen, und das Telegramm hatte er in der Garderobe verloren."
        ]
      }
    },
    pl: {
      title: "Trzeci akt",
      desc: "Co wieczór w trzecim akcie Ivo Penrice przebijał złego barona teatralnym sztyletem. Na premierze w Leeds baron już nie wstał.",
      meta: ["Teatr Minerwa, Leeds", "18 lutego 1933", "≈ 5 minut"],
      introEyebrow: "Garderoba · 21:20",
      introTitle: "Nie ten sztylet",
      intro: [
        "Tournée w Leeds, premiera melodramatu „Noc w Wenecji”. W trzecim akcie bohater przebija złego barona teatralnym sztyletem, którego ostrze chowa się w rękojeść.",
        "O 21:05 Ivo Penrice pchnął jak na wszystkich próbach, ale Valentine Crewdson nie wstał: sztylet był prawdziwy. Kurtynę opuszczono przed czasem.",
        "Byłaś na widowni, panno Ado Langton. Kto podmienił sztylet?"
      ],
      introVoice: "Za ścianą wciąż szemrze zdezorientowana widownia.",
      clues: {
        c1: { title: "Sztylet", text: "Teatralny sztylet z chowanym ostrzem znalazł się w kieszeni kaftana Penrice'a. Czyli podmieniono go już na scenie, tuż przed pchnięciem.", note: "Teatralny sztylet znalazł się w kieszeni scenicznego kaftana Penrice'a." },
        c2: { title: "Telegram", text: "Telegram z Londynu, i to nie do gwiazdy, tylko do dublera! Takich listonosz nie nosi co dzień!", note: "Producent Gale zawiadamia Simona Hartnella: spektakl przenoszą do Londynu, ale Crewdson zażądał nowego dublera, a kontraktu Hartnella nie przedłużą." },
        c3: { title: "Program", text: "Program premiery! „Baron — Valentine Crewdson”, a drobnym drukiem: „dubler — Simon Hartnell”. Całe życie w cieniu, biedaczysko!", note: "Dublerem Crewdsona w roli Barona jest Simon Hartnell." },
        c4: { title: "Bukiet", text: "Róże z bilecikiem: „Mojemu baronowi. L.”. Ktoś w tej trupie jest zazdrosny.", note: "Róże dla Crewdsona od Lalage Dorne: „Mojemu baronowi”." },
        c5: { title: "Lustro", text: "Za ramę lustra wsunięty porządek wejść: pchnięcie sztyletem, trzeci akt, 21:05. Sztylety rozkłada rekwizytorka w antrakcie.", note: "Sztylet na trzeci akt rekwizytorka kładzie w antrakcie na stole przy kulisach." }
      },
      letter: [
        "TELEGRAM. S. HARTNELL, TEATR MINERWA, LEEDS.",
        "PRZENIESIENIE DO LONDYNU POTWIERDZONE ALE NA ŻYCZENIE",
        "CREWDSONA DUBLEREM W LONDYNIE BĘDZIE",
        "INNY AKTOR STOP PANA KONTRAKT NIEPRZEDŁUŻONY",
        "GALE, PRODUCENT"
      ],
      decoys: {
        lipstick: "Szminka barona, ciemna, prawie czarna. U nas złoczyńcy mocno malują usta.",
        perfume: "Flakon wody kolońskiej „Venezia”, do połowy pusty.",
        mask: "Karnawałowa maska barona z drugiego aktu. W środku pachnie szminką.",
        poster: "Afisz: „Noc w Wenecji”, premiera, 18 lutego, początek o 19:30."
      },
      suspects: {
        penrice: { name: "Pan Ivo Penrice", role: "Amant melodramatu, 34 lata", intro: "Czarne loki, bordowa kamizelka, pot na skroniach." },
        edna: { name: "Pani Edna Farrant", role: "Rekwizytorka, 57 lat", intro: "Okulary, kok, szpilki na swetrze." },
        lalage: { name: "Panna Lalage Dorne", role: "Bohaterka melodramatu, 29 lat", intro: "Złote fale, perły, suknia sceniczna." },
        hartnell: { name: "Pan Simon Hartnell", role: "Dubler barona, 46 lat", intro: "Gładki przedziałek, wąsy, pot na czole." }
      },
      qs: {
        pen1: { q: "Dobrze żył pan z panem Crewdsonem?", a: "Na scenie przebijałem go co wieczór, panienko, a za kulisami odbijał mi Lalage. Publiczności podobało się i jedno, i drugie.", v: "Rywale na scenie i za kulisami! Całe Leeds o nich wie!" },
        pen2: { q: "Gdzie pan był w antrakcie?", a: "W foyer dla aktorów, panienko, od 20:30 do dzwonka. Za dwadzieścia dziewiąta przysiadła się do mnie panna Dorne.", v: "Antrakt: foyer dla aktorów.", nt: "Penrice w antrakcie", nx: "Penrice cały antrakt siedział w foyer dla aktorów. Od 20:40 była z nim panna Dorne." },
        pen3: { q: "Czy to sztylet z pańskiego kaftana?", a: "Teatralny, panienko, ten, który miałem wziąć ze stołu. Kaftan cały antrakt wisiał na korytarzu przy drzwiach.", v: "Ręce mu drżą. Nie może patrzeć na sztylet." },
        edn1: { q: "Jak rozkłada się rekwizyty?", a: "W antrakcie, panienko: o 20:35 kładę sztylet na stole przy lewej kulisie i idę po klej do rekwizytów." },
        edn2: { q: "Czy sztylet mogli podmienić na scenie?", a: "Na scenie nikt go nie dotykał przed pchnięciem, panienko, oprócz Penrice'a: od końca antraktu stół był na oczach inspicjenta. Podmienić mogli tylko w antrakcie, kiedy mnie nie było.", v: "Na scenie, na oczach wszystkich? Tam inspicjent nie pozwoli nawet kichnąć! Szukaj tego, kto kręcił się przy stole w antrakcie!" },
        edn3: { q: "Skąd w teatrze prawdziwy sztylet?", a: "Z magazynu, panienko, stary, z zeszłorocznego tournée z „Otellem”. Klucz do magazynu wisi na gwoździu na widoku." },
        edn4: { q: "Od dawna jest pani rekwizytorką?", a: "Trzydzieści lat rozkładam cudze sztylety, panienko, i ani razu żadnego nie pomyliłam. Aż do dzisiejszego wieczoru.", v: "Miętosi fartuch i ze wszystkich sił stara się nie rozpłakać." },
        lal1: { q: "Czy kochała pani pana Crewdsona?", a: "Kochałam jego barona, panienko, a samego Valentine'a w środy. Był próżny jak paw.", v: "Uśmiecha się przez łzy." },
        lal2: { q: "Kto podchodził do stołu z rekwizytami w antrakcie?", a: "O 20:38 szłam do foyer, a przy stole stał pan Hartnell. Powiedział, że sprawdza, czy sztylet nie jest tępy: dubler też musi znać rekwizyty.", v: "20:38, stół z rekwizytami.", nt: "Panna Dorne o 20:38", nx: "O 20:38 pan Hartnell stał przy stole z rekwizytami ze sztyletem w ręku." },
        lal3: { q: "Czy pan Penrice był zazdrosny?", a: "Ivo jest zazdrosny tylko o oklaski, panienko, a tego wieczoru starczyło ich dla dwóch." },
        har1: { q: "Od dawna jest pan dublerem?", a: "Dwanaście lat, panienko, i ani razu nie zagrałem za niego: Valentine nie zachorował nawet na grypę.", v: "W jego głosie nie ma złości, tylko zmęczenie." },
        har2: { q: "Gdzie pan był w antrakcie?", a: "Uczyłem się roli, panienko, zawsze się uczę. [[Cały antrakt przesiedziałem w swojej garderobie, drzwi na klucz.]]" },
        har3: { q: "Co to za telegram?", a: "Z Londynu, panienko, od producenta. [[O Londynie dowiaduję się dopiero teraz, od pani: tego telegramu na oczy nie widziałem.]]" }
      },
      objections: {
        har2: { reply: "Tak, byłem przy stole, panienko, o 20:38: sprawdzałem ostrze paznokciem, jak przed każdym przedstawieniem. Dubler, który nie zna rekwizytów, to kiepski dubler.", nt: "Hartnell skłamał", nx: "O 20:38 był przy stole z rekwizytami, a nie w garderobie." },
        har3: { reply: "Dwanaście lat w cieniu, panienko, a on wyrzucił mnie jak starą perukę. Londyn, a ja na bruk. Kto zna barona na pamięć, jeśli nie ja?", nt: "Londyn", nx: "Crewdson zażądał nowego dublera i Hartnell tracił miejsce tuż przed przeniesieniem do Londynu. Oto motyw." }
      },
      wrong: {
        penrice: "Ivo pchnął teatralnym sztyletem jak co wieczór: o podmianie nic nie wiedział. Cały antrakt siedział w foyer, a jego kaftan wisiał na korytarzu w zasięgu każdego.",
        edna: "Pani Farrant położyła teatralny sztylet na stole i poszła po klej. To ona wyjaśniła, że podmienić mogli tylko w antrakcie.",
        lalage: "Panna Dorne kochała barona tylko na scenie. To ona widziała pana Hartnella przy stole z rekwizytami.",
        proof: "Pan Hartnell rozkłada ręce: „Uczyłem się roli, panienko, za zamkniętymi drzwiami”. Udowodnij, że był przy stole z rekwizytami, albo co tracił przez pana Crewdsona."
      },
      deduce: [
        "Sztyletu nie podmieniono na scenie. Gdzie więc i kiedy?",
        "Kogo widziano przy stole z rekwizytami w antrakcie?",
        "Komu Crewdson zamknął drogę do Londynu?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Wiosną „Noc w Wenecji” odniosła sukces w Londynie. Barona grał Simon Hartnell",
        p: [
          "Przez dwanaście lat Simon Hartnell dublował Valentine'a Crewdsona i ani razu nie wyszedł na scenę. W sobotę przyszedł telegram: spektakl jedzie do Londynu, a Crewdson zażądał innego dublera.",
          "W antrakcie, kiedy rekwizytorka poszła po klej, Hartnell położył na stole prawdziwy sztylet z magazynu zamiast teatralnego. W trzecim akcie Ivo Penrice pchnął jak co wieczór, nie wiedząc o podmianie.",
          "Teatralny sztylet Hartnell wsunął do kieszeni kaftana Penrice'a, wiszącego na korytarzu. Ale panna Dorne widziała go przy stole z rekwizytami, a telegram zgubił w garderobie."
        ]
      }
    }
  }
});
