window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "044", n: 44, scene: "parlour", searchTime: 80, culprit: "dunstan",
  clues: {
    c1: { prop: "glass", voice: "logic" },
    c2: { prop: "letter", voice: "gossip", puzzle: true },
    c3: { prop: "cushion", voice: "intuition" },
    c4: { prop: "chess", voice: "gossip" },
    c5: { prop: "bottle", voice: "logic" },
  },
  decoys: { window: "intuition", painting: "logic", clock: "logic", pipe: "intuition" },
  suspects: [
    { id: "tilney", color: "#d1a94e", look: { hair: "grey-short", hairColor: "#c8c8c8", outfit: "suit", outfitColor: "#6a5038", extras: ["glasses", "beard"] }, qs: [
        { id: "til1" },
        { id: "til2", voice: "logic" },
        { id: "til3", needs: "c4", voice: "intuition" },
        { id: "til4" },
    ] },
    { id: "dunstan", color: "#86b8dc", look: { hair: "slick", hairColor: "#2a2018", outfit: "tux", outfitColor: "#151515", extras: ["mustache"] }, qs: [
        { id: "dun1", voice: "logic" },
        { id: "dun2", voice: "intuition" },
        { id: "dun3", needs: "c1" },
        { id: "dun4", needs: "c2" },
    ] },
    { id: "hazel", color: "#8cc79a", look: { hair: "bob", hairColor: "#8a5a2a", outfit: "uniform", outfitColor: "#e8e8ee", extras: ["sweat"], female: true }, qs: [
        { id: "haz1" },
        { id: "haz2", needs: "c1", voice: "logic" },
        { id: "haz3", needs: "c3", voice: "intuition" },
    ] },
    { id: "celia", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#2a1a14", outfit: "dress", outfitColor: "#24305a", extras: ["pearls", "stern"], female: true, lips: "#903040" }, qs: [
        { id: "cel1", voice: "gossip" },
        { id: "cel2", voice: "logic" },
        { id: "cel3" },
    ] },
  ],
  objections: { dun3: { evidence: "haz2" }, dun4: { evidence: "c2" } },
  proof: ["haz2", "c2", "obj:dun3", "obj:dun4"],
  text: {
    ru: {
      title: "Отложенная партия",
      desc: "Старый шахматист каждый вечер выпивал за доской один стакан виски. В субботу его партия так и осталась недоигранной.",
      meta: ["Ферн-лодж, Суррей", "4 июня 1932", "≈ 5 минут"],
      introEyebrow: "Гостиная · 21:50",
      introTitle: "Партия прервана",
      intro: [
        "За ужином мистер Игнатиус Венн объявил о помолвке со своей сиделкой. В понедельник он собирался переписать завещание.",
        "После ужина он сел в гостиной доигрывать партию с давним соперником. В 21:50 его нашли в кресле у доски, рядом стоял пустой стакан.",
        "Вы гостите в доме, мисс Ада Лэнгтон. Кто подходил к стакану?"
      ],
      introVoice: "Часы тикают громко, будто считают ходы.",
      clues: {
        c1: { title: "Стакан", text: "Стакан для виски, на дне янтарный остаток. Анализ: морфий. Яд был в стакане.", note: "В стакане мистера Венна был морфий." },
        c2: { title: "Письмо", text: "Конверт с красной печатью и развёрнутый лист на бюро! Ростовщики пишут зятю хозяина, а адрес — этот дом!", note: "«Горринг и сын» напоминают Хью Данстану о займе в 3 000 фунтов под будущее наследство жены. Срок — понедельник." },
        c3: { title: "Подушка", text: "Под вышитой подушкой бумажный пакетик из аптеки. Его засунули поглубже, будто прятали.", note: "Под подушкой на диване — пустой пакетик веронала с наклейкой «Мисс Х. Ормерод»." },
        c4: { title: "Шахматы", text: "Партия брошена на середине, фигур почти не осталось! Говорят, мистер Тилни двадцать лет не мог его обыграть, дорогуша!", note: "Партия прервана. По слухам, мистер Тилни двадцать лет проигрывал мистеру Венну." },
        c5: { title: "Графин", text: "Графин рубинового стекла на буфете. Из него же налили мистеру Тилни, и он здоров.", note: "Виски в графине чистый. Яд положили прямо в стакан." }
      },
      letter: [
        "«Мистеру Х. Данстану, Ферн-лодж.",
        "Сэр, напоминаем: заём в 3 000 фунтов",
        "выдан под будущее наследство",
        "вашей супруги. Срок — понедельник.",
        "Горринг и сын, Холборн»."
      ],
      decoys: {
        window: "За окном луна над лужайкой. Портьеры не задёрнуты.",
        painting: "Пейзаж в золочёной раме: холмы под луной. Подпись художника не разобрать.",
        clock: "Напольные часы идут исправно, маятник качается мерно.",
        pipe: "Трубка мистера Тилни в пепельнице ещё дымится. Пахнет вишнёвым табаком."
      },
      suspects: {
        tilney: { name: "Мистер Бертрам Тилни", role: "Партнёр по шахматам, 70 лет", intro: "Твид, очки, седая бородка. Трубку из рук не выпускает." },
        dunstan: { name: "Мистер Хью Данстан", role: "Зять мистера Венна, маклер, 42 года", intro: "Смокинг, гладкий пробор, тонкие усики. Вежлив без улыбки." },
        hazel: { name: "Мисс Хейзел Ормерод", role: "Сиделка и невеста мистера Венна, 26 лет", intro: "Белый передник, каре, испарина на висках." },
        celia: { name: "Миссис Силия Данстан", role: "Дочь мистера Венна, 38 лет", intro: "Тёмные волны волос, жемчуг, сжатые губы." }
      },
      qs: {
        til1: { q: "Что было после ужина?", a: "Мы с Игнатиусом сели доигрывать партию, мисс, ту, что тянется с апреля. В половине десятого меня позвали к телефону." },
        til2: { q: "Когда вы вернулись?", a: "Без десяти десять. Миссис Данстан проговорила со мной в холле до последней минуты, а когда я вошёл, Игнатиус уже не дышал.", v: "Отошёл в 21:30, вернулся в 21:50. Был в холле с миссис Данстан.", nt: "Мистер Тилни у телефона", nx: "С 21:30 до 21:50 мистер Тилни был в холле, с ним говорила миссис Данстан." },
        til3: { q: "Вы выигрывали?", a: "Впервые за двадцать лет, мисс. Мы играли на двести фунтов, которые я ему должен, и он злился, как мальчишка.", v: "Он улыбается, вспоминая партию, и тут же отводит глаза." },
        til4: { q: "Кто вам звонил?", a: "Брат из Гилфорда, мисс, спрашивал про матч в клубе. Четверть часа про один дебют — вот что такое шахматисты." },
        dun1: { q: "Что вы делали после ужина?", a: "Сидел с газетой на диване, мисс, пока старики играли. В половине десятого вышел на террасу с сигарой.", v: "Терраса с 21:30." },
        dun2: { q: "Как вы ладили с тестем?", a: "Отлично, мисс. Он считал меня скучным, а я его — великим шахматистом, и оба мы были правы.", v: "Он смотрит на доску, будто там ещё идёт партия." },
        dun3: { q: "Кто наливал мистеру Венну виски?", a: "Он сам, мисс, всегда сам. [[Я сегодня к буфету и не подходил: после ужина я пью только содовую.]]" },
        dun4: { q: "Вы кому-нибудь должны?", a: "Вопрос, достойный налогового инспектора, мисс. [[Я никому не должен ни пенни, а ростовщиков знаю только по романам.]]" },
        haz1: { q: "Где вы были после ужина?", a: "Наверху, мисс, стелила мистеру Венну постель и готовила капли на ночь. Он ложится ровно в десять." },
        haz2: { q: "Кто подходил к его стакану?", a: "Когда я заглянула в 21:35, мистер Данстан стоял у буфета и наливал виски. Сказал: «Отнесу тестю, пусть спит крепче».", v: "21:35, буфет.", nt: "Сиделка в 21:35", nx: "В 21:35 мистер Данстан стоял у буфета и наливал мистеру Венну виски." },
        haz3: { q: "Это ваш пакетик?", a: "Мой, мисс, веронал, я плохо сплю. Только он лежал в сумочке, а сумочка весь вечер висела в холле на вешалке.", v: "Щёки у неё пылают. Ей неловко, что кто-то рылся в её сумочке.", nt: "Пакетик сиделки", nx: "Веронал мисс Ормерод лежал в сумочке на вешалке в холле. Взять его мог любой." },
        cel1: { q: "Что было за ужином?", a: "Папа объявил о помолвке между супом и рыбой, мисс. Я сказала, что он выжил из ума, и вышла из-за стола.", v: "Дочь против мачехи моложе себя! Весь Суррей будет судачить!" },
        cel2: { q: "Где вы были в половине десятого?", a: "В холле, у телефона, мисс. Позвала мистера Тилни, а потом мы говорили, пока он не вернулся в гостиную.", v: "Холл, с 21:30." },
        cel3: { q: "Ваш муж ладил с отцом?", a: "Хью терпел папины шахматы, а папа терпел Хью, и на этом в нашем доме держался мир." }
      },
      objections: {
        dun3: { reply: "Ладно, налил, раз уж вас так занимает буфет. Старик попросил, а сиделка смотрела так, будто я краду серебро.", nt: "Данстан солгал", nx: "В 21:35 он сам налил мистеру Венну виски у буфета." },
        dun4: { reply: "Три тысячи под наследство жены. В понедельник старик переписал бы завещание, и «Горринг и сын» пришли бы за мной, а не за ней.", nt: "Долг", nx: "Хью Данстан занял 3 000 фунтов под наследство жены. Новое завещание разорило бы его. Вот мотив." }
      },
      wrong: {
        tilney: "Мистер Тилни с 21:30 до 21:50 был в холле с миссис Данстан. Впервые за двадцать лет он выигрывал — зачем ему прерывать партию?",
        hazel: "Мисс Ормерод сама сказала, где висела её сумочка. И в стакане был морфий, а не её веронал.",
        celia: "Миссис Данстан ссорилась с отцом за ужином, но с половины десятого стояла в холле у телефона вместе с мистером Тилни.",
        proof: "Хью Данстан поправляет манжету: «Старик налил себе сам». Докажите, что он подходил к буфету, или зачем ему было успеть до понедельника."
      },
      deduce: [
        "Под подушкой веронал. А что нашли в стакане?",
        "Кто подходил к буфету, пока мистер Тилни был у телефона?",
        "Кого новое завещание лишило бы трёх тысяч?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "В понедельник завещание так и не переписали. Хью Данстан расплатился с «Горрингом и сыном» до конца месяца",
        p: [
          "Хью Данстан занял у ростовщиков три тысячи фунтов под будущее наследство жены. Помолвка тестя и новое завещание оставили бы его ни с чем.",
          "Морфий остался в доме после болезни покойной миссис Венн. Когда мистера Тилни позвали к телефону, Данстан налил тестю виски и высыпал морфий прямо в стакан.",
          "Пакетик веронала он вытащил из сумочки сиделки в холле и сунул под подушку. Но в стакане был морфий, а сиделка видела его у буфета в 21:35."
        ]
      }
    },
    en: {
      title: "The Adjourned Game",
      desc: "Every evening the old chess player drank one glass of whisky over the board. On Saturday his game was left unfinished.",
      meta: ["Fern Lodge, Surrey", "4 June 1932", "≈ 5 minutes"],
      introEyebrow: "Parlour · 9:50 pm",
      introTitle: "Play interrupted",
      intro: [
        "At dinner Mr Ignatius Venn announced his engagement to his nurse. On Monday he meant to rewrite his will.",
        "After dinner he sat down in the parlour to finish a game with his old rival. At 9:50 he was found in the chair by the board, an empty glass at his elbow.",
        "You're a guest in the house, Miss Ada Langton. Who went near that glass?"
      ],
      introVoice: "The clock ticks loudly, as if it were counting the moves.",
      clues: {
        c1: { title: "Glass", text: "A whisky tumbler with an amber drop in the bottom. Analysis: morphine. The poison was in the glass.", note: "Mr Venn's glass held morphine." },
        c2: { title: "Letter", text: "An envelope with a red seal and an open sheet on the bureau! Moneylenders writing to the master's son-in-law, and at this address!", note: "Gorringe & Son remind Hugh Dunstan of a £3,000 loan against his wife's future inheritance. Due on Monday." },
        c3: { title: "Cushion", text: "Under the embroidered cushion, a chemist's paper packet. Pushed well down, as if someone wanted it hidden.", note: "Under the sofa cushion: an empty veronal packet labelled “Miss H. Ormerod”." },
        c4: { title: "Chess", text: "The game's abandoned halfway, hardly a piece left! They say Mr Tilney couldn't beat him in twenty years, my dear!", note: "The game was interrupted. Rumour has it Mr Tilney lost to Mr Venn for twenty years." },
        c5: { title: "Decanter", text: "A ruby-glass decanter on the sideboard. Mr Tilney was poured a drink from it too, and he's perfectly well.", note: "The whisky in the decanter is clean. The poison went straight into the glass." }
      },
      letter: [
        "“To Mr H. Dunstan, Fern Lodge.",
        "Sir, we remind you that the loan of £3,000",
        "was made against the future inheritance",
        "of your wife. Payment is due on Monday.",
        "Gorringe & Son, Holborn.”"
      ],
      decoys: {
        window: "Moonlight over the lawn. The curtains are open.",
        painting: "A landscape in a gilt frame: hills under the moon. The signature is illegible.",
        clock: "The grandfather clock keeps good time; the pendulum swings steadily.",
        pipe: "Mr Tilney's pipe is still smoking in the ashtray. It smells of cherry tobacco."
      },
      suspects: {
        tilney: { name: "Mr Bertram Tilney", role: "Chess partner, 70", intro: "Tweed, spectacles, a grey goatee. Never lets go of his pipe." },
        dunstan: { name: "Mr Hugh Dunstan", role: "Mr Venn's son-in-law, stockbroker, 42", intro: "Dinner jacket, sleek parting, a thin moustache. Polite without a smile." },
        hazel: { name: "Miss Hazel Ormerod", role: "Mr Venn's nurse and fiancée, 26", intro: "White apron, a neat bob, beads of sweat at her temples." },
        celia: { name: "Mrs Celia Dunstan", role: "Mr Venn's daughter, 38", intro: "Dark waved hair, pearls, lips pressed tight." }
      },
      qs: {
        til1: { q: "What happened after dinner?", a: "Ignatius and I sat down to finish our game, miss, the one we've had going since April. At half past nine I was called to the telephone." },
        til2: { q: "When did you come back?", a: "At ten to ten. Mrs Dunstan kept me talking in the hall till the last minute, and when I came in, Ignatius had stopped breathing.", v: "Left at 9:30, back at 9:50. In the hall with Mrs Dunstan.", nt: "Mr Tilney on the telephone", nx: "From 9:30 to 9:50 Mr Tilney was in the hall, talking with Mrs Dunstan." },
        til3: { q: "Were you winning?", a: "For the first time in twenty years, miss. We were playing for the two hundred pounds I owe him, and he was cross as a schoolboy.", v: "He smiles at the memory of the game, then looks away at once." },
        til4: { q: "Who telephoned you?", a: "My brother in Guildford, miss, asking about the club match. A quarter of an hour on a single opening: that's chess players for you." },
        dun1: { q: "What did you do after dinner?", a: "I sat on the sofa with the paper, miss, while the old men played. At half past nine I went out on the terrace with a cigar.", v: "The terrace from 9:30." },
        dun2: { q: "How did you get on with your father-in-law?", a: "Splendidly, miss. He thought me dull and I thought him a great chess player, and we were both right.", v: "He watches the board as if the game were still going on." },
        dun3: { q: "Who poured Mr Venn's whisky?", a: "He did, miss, he always did. [[I never went near the sideboard tonight: after dinner I only drink soda.]]" },
        dun4: { q: "Do you owe anyone money?", a: "A question worthy of the taxman, miss. [[I don't owe a penny to anyone, and I only know moneylenders from novels.]]" },
        haz1: { q: "Where were you after dinner?", a: "Upstairs, miss, turning down Mr Venn's bed and getting his night drops ready. He goes to bed at ten sharp." },
        haz2: { q: "Who went near his glass?", a: "When I looked in at 9:35, Mr Dunstan was at the sideboard pouring whisky. He said, “I'll take it to the old man, help him sleep.”", v: "9:35, the sideboard.", nt: "The nurse at 9:35", nx: "At 9:35 Mr Dunstan was at the sideboard pouring whisky for Mr Venn." },
        haz3: { q: "Is this your packet?", a: "It is, miss, veronal, I sleep badly. Only it was in my handbag, and my handbag hung on the hall stand all evening.", v: "Her cheeks are burning. She hates the thought of someone going through her bag.", nt: "The nurse's packet", nx: "Miss Ormerod's veronal was in her handbag on the hall stand. Anyone could have taken it." },
        cel1: { q: "What happened at dinner?", a: "Papa announced the engagement between the soup and the fish, miss. I told him he'd lost his mind and left the table.", v: "A stepmother younger than the daughter! All Surrey will be talking!" },
        cel2: { q: "Where were you at half past nine?", a: "In the hall, by the telephone, miss. I called Mr Tilney, and then we talked until he went back into the parlour.", v: "The hall, from 9:30." },
        cel3: { q: "Did your husband get on with your father?", a: "Hugh put up with Papa's chess and Papa put up with Hugh, and that was what kept the peace in this house." }
      },
      objections: {
        dun3: { reply: "All right, I poured it, since you're so taken with the sideboard. The old man asked, and that nurse looked at me as if I were pinching the silver.", nt: "Dunstan lied", nx: "At 9:35 he poured Mr Venn's whisky at the sideboard himself." },
        dun4: { reply: "Three thousand against my wife's inheritance. On Monday the old man would have changed his will, and Gorringe & Son would have come for me, not her.", nt: "The debt", nx: "Hugh Dunstan borrowed £3,000 against his wife's inheritance. A new will would have ruined him. There's the motive." }
      },
      wrong: {
        tilney: "From 9:30 to 9:50 Mr Tilney was in the hall with Mrs Dunstan. For the first time in twenty years he was winning: why stop the game?",
        hazel: "Miss Ormerod told you herself where her handbag hung. And the glass held morphine, not her veronal.",
        celia: "Mrs Dunstan quarrelled with her father at dinner, but from half past nine she was by the hall telephone with Mr Tilney.",
        proof: "Hugh Dunstan straightens a cuff: “The old man poured his own.” Prove he went to the sideboard, or why he couldn't wait till Monday."
      },
      deduce: [
        "Under the cushion, veronal. And what was in the glass?",
        "Who went to the sideboard while Mr Tilney was on the telephone?",
        "Who would a new will have cost three thousand pounds?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "On Monday the will stayed as it was. Hugh Dunstan paid off Gorringe & Son before the month was out",
        p: [
          "Hugh Dunstan had borrowed three thousand pounds from moneylenders against his wife's future inheritance. His father-in-law's engagement and a new will would have left him with nothing.",
          "There was morphine in the house from the late Mrs Venn's illness. When Mr Tilney was called to the telephone, Dunstan poured the old man a whisky and tipped the morphine straight into the glass.",
          "He took the veronal packet from the nurse's handbag in the hall and pushed it under the cushion. But the glass held morphine, and the nurse had seen him at the sideboard at 9:35."
        ]
      }
    },
    es: {
      title: "La partida aplazada",
      desc: "Cada noche el viejo ajedrecista se tomaba un vaso de whisky ante el tablero. El sábado su partida quedó sin terminar.",
      meta: ["Fern Lodge, Surrey", "4 de junio de 1932", "≈ 5 minutos"],
      introEyebrow: "Salón · 21:50",
      introTitle: "Partida interrumpida",
      intro: [
        "Durante la cena, el señor Ignatius Venn anunció su compromiso con su enfermera. El lunes pensaba rehacer el testamento.",
        "Después de cenar se sentó en el salón a terminar una partida con su viejo rival. A las 21:50 lo encontraron en el sillón junto al tablero, con un vaso vacío al lado.",
        "Eres invitada en la casa, señorita Ada Langton. ¿Quién se acercó a ese vaso?"
      ],
      introVoice: "El reloj hace tictac muy fuerte, como si contara las jugadas.",
      clues: {
        c1: { title: "Vaso", text: "Un vaso de whisky con un resto ambarino en el fondo. Análisis: morfina. El veneno estaba en el vaso.", note: "En el vaso del señor Venn había morfina." },
        c2: { title: "Carta", text: "¡Un sobre con sello rojo y una hoja abierta en el escritorio! Unos prestamistas escriben al yerno del señor, ¡y a esta dirección!", note: "Gorringe e Hijo recuerdan a Hugh Dunstan un préstamo de 3.000 libras a cuenta de la futura herencia de su esposa. Vence el lunes." },
        c3: { title: "Cojín", text: "Bajo el cojín bordado, un sobrecito de farmacia. Metido muy al fondo, como si alguien quisiera esconderlo.", note: "Bajo el cojín del sofá: un sobrecito vacío de veronal con la etiqueta «Srta. H. Ormerod»." },
        c4: { title: "Ajedrez", text: "¡La partida abandonada a medias y casi sin piezas! ¡Dicen que en veinte años el señor Tilney nunca le ganó, querida!", note: "La partida quedó interrumpida. Según dicen, el señor Tilney llevaba veinte años perdiendo contra el señor Venn." },
        c5: { title: "Licorera", text: "Una licorera de cristal rubí en el aparador. De ella también se sirvió al señor Tilney, y está perfectamente.", note: "El whisky de la licorera está limpio. El veneno se echó directamente en el vaso." }
      },
      letter: [
        "«Al Sr. H. Dunstan, Fern Lodge.",
        "Señor, le recordamos que el préstamo de 3.000 libras",
        "se concedió a cuenta de la futura herencia",
        "de su esposa. El plazo vence el lunes.",
        "Gorringe e Hijo, Holborn»."
      ],
      decoys: {
        window: "La luna sobre el césped. Las cortinas están abiertas.",
        painting: "Un paisaje en marco dorado: colinas bajo la luna. La firma no se lee.",
        clock: "El reloj de pie va en hora; el péndulo oscila con calma.",
        pipe: "La pipa del señor Tilney aún humea en el cenicero. Huele a tabaco de cereza."
      },
      suspects: {
        tilney: { name: "Señor Bertram Tilney", role: "Compañero de ajedrez, 70 años", intro: "Tweed, gafas, perilla gris. No suelta la pipa." },
        dunstan: { name: "Señor Hugh Dunstan", role: "Yerno del señor Venn, corredor de bolsa, 42 años", intro: "Esmoquin, raya impecable, bigote fino. Cortés sin sonreír." },
        hazel: { name: "Señorita Hazel Ormerod", role: "Enfermera y prometida del señor Venn, 26 años", intro: "Delantal blanco, melena corta, gotas de sudor en las sienes." },
        celia: { name: "Señora Celia Dunstan", role: "Hija del señor Venn, 38 años", intro: "Ondas oscuras, perlas, labios apretados." }
      },
      qs: {
        til1: { q: "¿Qué pasó después de la cena?", a: "Ignatius y yo nos sentamos a terminar la partida, señorita, la que llevamos desde abril. A las nueve y media me llamaron al teléfono." },
        til2: { q: "¿Cuándo volvió?", a: "A las diez menos diez. La señora Dunstan me tuvo hablando en el vestíbulo hasta el último minuto, y cuando entré, Ignatius ya no respiraba.", v: "Salió a las 21:30, volvió a las 21:50. En el vestíbulo con la señora Dunstan.", nt: "El señor Tilney al teléfono", nx: "De 21:30 a 21:50 el señor Tilney estuvo en el vestíbulo hablando con la señora Dunstan." },
        til3: { q: "¿Iba ganando?", a: "Por primera vez en veinte años, señorita. Jugábamos las doscientas libras que le debo, y estaba enfadado como un colegial.", v: "Sonríe al recordar la partida y enseguida aparta la mirada." },
        til4: { q: "¿Quién le llamó?", a: "Mi hermano, desde Guildford, señorita, para preguntar por el torneo del club. Un cuarto de hora sobre una sola apertura: así somos los ajedrecistas." },
        dun1: { q: "¿Qué hizo después de la cena?", a: "Leí el periódico en el sofá, señorita, mientras los viejos jugaban. A las nueve y media salí a la terraza con un puro.", v: "En la terraza desde las 21:30." },
        dun2: { q: "¿Cómo se llevaba con su suegro?", a: "De maravilla, señorita. Él me tenía por aburrido y yo a él por un gran ajedrecista, y los dos teníamos razón.", v: "Mira el tablero como si la partida siguiera." },
        dun3: { q: "¿Quién le sirvió el whisky al señor Venn?", a: "Él mismo, señorita, siempre él. [[Esta noche ni me acerqué al aparador: después de cenar solo tomo soda.]]" },
        dun4: { q: "¿Debe dinero a alguien?", a: "Pregunta digna de un inspector de Hacienda, señorita. [[No le debo ni un penique a nadie, y a los prestamistas solo los conozco por las novelas.]]" },
        haz1: { q: "¿Dónde estuvo después de la cena?", a: "Arriba, señorita, abriendo la cama del señor Venn y preparándole las gotas de la noche. Se acuesta a las diez en punto." },
        haz2: { q: "¿Quién se acercó a su vaso?", a: "Cuando me asomé a las 21:35, el señor Dunstan estaba en el aparador sirviendo whisky. Dijo: «Se lo llevo al viejo, para que duerma bien».", v: "21:35, el aparador.", nt: "La enfermera a las 21:35", nx: "A las 21:35 el señor Dunstan estaba en el aparador sirviendo whisky para el señor Venn." },
        haz3: { q: "¿Es suyo este sobrecito?", a: "Sí, señorita, veronal, duermo mal. Pero estaba en mi bolso, y el bolso estuvo toda la noche colgado en el perchero del vestíbulo.", v: "Le arden las mejillas. Le molesta pensar que alguien hurgó en su bolso.", nt: "El sobrecito de la enfermera", nx: "El veronal de la señorita Ormerod estaba en su bolso, en el perchero del vestíbulo. Cualquiera pudo cogerlo." },
        cel1: { q: "¿Qué pasó en la cena?", a: "Papá anunció el compromiso entre la sopa y el pescado, señorita. Le dije que había perdido el juicio y me levanté de la mesa.", v: "¡Una madrastra más joven que la hija! ¡Todo Surrey va a hablar!" },
        cel2: { q: "¿Dónde estaba a las nueve y media?", a: "En el vestíbulo, junto al teléfono, señorita. Avisé al señor Tilney y luego estuvimos hablando hasta que volvió al salón.", v: "El vestíbulo, desde las 21:30." },
        cel3: { q: "¿Su marido se llevaba bien con su padre?", a: "Hugh aguantaba el ajedrez de papá y papá aguantaba a Hugh, y en eso consistía la paz de esta casa." }
      },
      objections: {
        dun3: { reply: "Está bien, se lo serví, ya que tanto le interesa el aparador. El viejo me lo pidió, y la enfermera me miraba como si me llevara la plata.", nt: "Dunstan mintió", nx: "A las 21:35 él mismo le sirvió el whisky al señor Venn en el aparador." },
        dun4: { reply: "Tres mil a cuenta de la herencia de mi mujer. El lunes el viejo habría cambiado el testamento, y Gorringe e Hijo habrían venido a por mí, no a por ella.", nt: "La deuda", nx: "Hugh Dunstan pidió 3.000 libras a cuenta de la herencia de su mujer. Un testamento nuevo lo habría arruinado. Ese es el móvil." }
      },
      wrong: {
        tilney: "De 21:30 a 21:50 el señor Tilney estuvo en el vestíbulo con la señora Dunstan. Por primera vez en veinte años iba ganando: ¿para qué cortar la partida?",
        hazel: "La señorita Ormerod te dijo ella misma dónde colgaba su bolso. Y en el vaso había morfina, no su veronal.",
        celia: "La señora Dunstan discutió con su padre en la cena, pero desde las nueve y media estuvo junto al teléfono del vestíbulo con el señor Tilney.",
        proof: "Hugh Dunstan se ajusta un puño: «El viejo se sirvió solo». Demuestra que se acercó al aparador, o por qué no podía esperar al lunes."
      },
      deduce: [
        "Bajo el cojín, veronal. ¿Y qué había en el vaso?",
        "¿Quién fue al aparador mientras el señor Tilney estaba al teléfono?",
        "¿A quién le habría costado tres mil libras un testamento nuevo?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "El lunes el testamento siguió como estaba. Hugh Dunstan saldó su deuda con Gorringe e Hijo antes de fin de mes",
        p: [
          "Hugh Dunstan había pedido tres mil libras a unos prestamistas a cuenta de la futura herencia de su mujer. El compromiso de su suegro y un testamento nuevo lo habrían dejado sin nada.",
          "En la casa quedaba morfina de la enfermedad de la difunta señora Venn. Cuando llamaron al señor Tilney al teléfono, Dunstan le sirvió un whisky al viejo y echó la morfina directamente en el vaso.",
          "Sacó el sobrecito de veronal del bolso de la enfermera en el vestíbulo y lo metió bajo el cojín. Pero en el vaso había morfina, y la enfermera lo había visto en el aparador a las 21:35."
        ]
      }
    },
    de: {
      title: "Die vertagte Partie",
      desc: "Jeden Abend trank der alte Schachspieler am Brett ein Glas Whisky. Am Samstag blieb seine Partie unvollendet.",
      meta: ["Fern Lodge, Surrey", "4. Juni 1932", "≈ 5 Minuten"],
      introEyebrow: "Salon · 21:50",
      introTitle: "Partie abgebrochen",
      intro: [
        "Beim Dinner verkündete Mr Ignatius Venn seine Verlobung mit seiner Pflegerin. Am Montag wollte er sein Testament ändern.",
        "Nach dem Essen setzte er sich in den Salon, um mit seinem alten Rivalen eine Partie zu Ende zu spielen. Um 21:50 fand man ihn im Sessel am Brett, ein leeres Glas neben sich.",
        "Du bist Gast im Haus, Miss Ada Langton. Wer war an diesem Glas?"
      ],
      introVoice: "Die Uhr tickt laut, als zählte sie die Züge.",
      clues: {
        c1: { title: "Glas", text: "Ein Whiskyglas, auf dem Boden ein bernsteinfarbener Rest. Analyse: Morphium. Das Gift war im Glas.", note: "In Mr Venns Glas war Morphium." },
        c2: { title: "Brief", text: "Ein Umschlag mit rotem Siegel und ein offener Bogen auf dem Sekretär! Geldverleiher schreiben dem Schwiegersohn des Hausherrn, und zwar an diese Adresse!", note: "Gorringe & Sohn erinnern Hugh Dunstan an ein Darlehen über 3000 Pfund auf das künftige Erbe seiner Frau. Fällig am Montag." },
        c3: { title: "Kissen", text: "Unter dem bestickten Kissen ein Papiertütchen aus der Apotheke. Tief hineingeschoben, als wollte es jemand verstecken.", note: "Unter dem Sofakissen: ein leeres Veronal-Tütchen mit dem Etikett „Miss H. Ormerod“." },
        c4: { title: "Schach", text: "Die Partie mittendrin abgebrochen, kaum noch Figuren! Es heißt, Mr Tilney hat ihn zwanzig Jahre lang nicht besiegt, Schätzchen!", note: "Die Partie wurde abgebrochen. Angeblich verlor Mr Tilney zwanzig Jahre lang gegen Mr Venn." },
        c5: { title: "Karaffe", text: "Eine Karaffe aus Rubinglas auf der Anrichte. Auch Mr Tilney bekam daraus eingeschenkt, und ihm fehlt nichts.", note: "Der Whisky in der Karaffe ist sauber. Das Gift kam direkt ins Glas." }
      },
      letter: [
        "„An Mr H. Dunstan, Fern Lodge.",
        "Sir, wir erinnern daran, dass das Darlehen über 3000 Pfund",
        "auf das künftige Erbe",
        "Ihrer Gattin gewährt wurde. Fällig am Montag.",
        "Gorringe & Sohn, Holborn.“"
      ],
      decoys: {
        window: "Mondlicht über dem Rasen. Die Vorhänge sind offen.",
        painting: "Eine Landschaft im Goldrahmen: Hügel unter dem Mond. Die Signatur ist unleserlich.",
        clock: "Die Standuhr geht genau, das Pendel schwingt gleichmäßig.",
        pipe: "Mr Tilneys Pfeife qualmt noch im Aschenbecher. Es riecht nach Kirschtabak."
      },
      suspects: {
        tilney: { name: "Mr Bertram Tilney", role: "Schachpartner, 70", intro: "Tweed, Brille, grauer Spitzbart. Lässt die Pfeife nie los." },
        dunstan: { name: "Mr Hugh Dunstan", role: "Mr Venns Schwiegersohn, Börsenmakler, 42", intro: "Smoking, glatter Scheitel, schmaler Schnurrbart. Höflich ohne Lächeln." },
        hazel: { name: "Miss Hazel Ormerod", role: "Mr Venns Pflegerin und Verlobte, 26", intro: "Weiße Schürze, Bubikopf, Schweißperlen an den Schläfen." },
        celia: { name: "Mrs Celia Dunstan", role: "Mr Venns Tochter, 38", intro: "Dunkle Wellen, Perlen, zusammengepresste Lippen." }
      },
      qs: {
        til1: { q: "Was geschah nach dem Dinner?", a: "Ignatius und ich setzten uns an unsere Partie, Miss, die seit April läuft. Um halb zehn rief man mich ans Telefon." },
        til2: { q: "Wann kamen Sie zurück?", a: "Um zehn vor zehn. Mrs Dunstan hielt mich in der Halle bis zur letzten Minute im Gespräch, und als ich hereinkam, atmete Ignatius nicht mehr.", v: "Weg um 21:30, zurück um 21:50. In der Halle mit Mrs Dunstan.", nt: "Mr Tilney am Telefon", nx: "Von 21:30 bis 21:50 war Mr Tilney in der Halle und sprach mit Mrs Dunstan." },
        til3: { q: "Lagen Sie vorn?", a: "Zum ersten Mal in zwanzig Jahren, Miss. Wir spielten um die zweihundert Pfund, die ich ihm schulde, und er war bockig wie ein Schuljunge.", v: "Er lächelt bei der Erinnerung an die Partie und schaut sofort weg." },
        til4: { q: "Wer hat Sie angerufen?", a: "Mein Bruder aus Guildford, Miss, wegen des Turniers im Club. Eine Viertelstunde über eine einzige Eröffnung: So sind wir Schachspieler." },
        dun1: { q: "Was taten Sie nach dem Dinner?", a: "Ich saß mit der Zeitung auf dem Sofa, Miss, während die alten Herren spielten. Um halb zehn ging ich mit einer Zigarre auf die Terrasse.", v: "Terrasse ab 21:30." },
        dun2: { q: "Wie kamen Sie mit Ihrem Schwiegervater aus?", a: "Prächtig, Miss. Er hielt mich für langweilig und ich ihn für einen großen Schachspieler, und wir hatten beide recht.", v: "Er blickt aufs Brett, als liefe die Partie noch." },
        dun3: { q: "Wer hat Mr Venn den Whisky eingeschenkt?", a: "Er selbst, Miss, immer er selbst. [[Ich war heute gar nicht an der Anrichte: Nach dem Dinner trinke ich nur Soda.]]" },
        dun4: { q: "Schulden Sie jemandem Geld?", a: "Eine Frage, eines Steuerprüfers würdig, Miss. [[Ich schulde niemandem einen Penny, und Geldverleiher kenne ich nur aus Romanen.]]" },
        haz1: { q: "Wo waren Sie nach dem Dinner?", a: "Oben, Miss, ich habe Mr Venns Bett aufgeschlagen und seine Tropfen für die Nacht gerichtet. Er geht Punkt zehn zu Bett." },
        haz2: { q: "Wer war an seinem Glas?", a: "Als ich um 21:35 hereinsah, stand Mr Dunstan an der Anrichte und schenkte Whisky ein. Er sagte: „Ich bring's dem Alten, damit er gut schläft.“", v: "21:35, die Anrichte.", nt: "Die Pflegerin um 21:35", nx: "Um 21:35 stand Mr Dunstan an der Anrichte und schenkte Mr Venn Whisky ein." },
        haz3: { q: "Ist das Ihr Tütchen?", a: "Ja, Miss, Veronal, ich schlafe schlecht. Nur war es in meiner Handtasche, und die hing den ganzen Abend an der Garderobe in der Halle.", v: "Ihre Wangen glühen. Der Gedanke, dass jemand in ihrer Tasche gewühlt hat, ist ihr peinlich.", nt: "Das Tütchen der Pflegerin", nx: "Miss Ormerods Veronal war in ihrer Handtasche an der Garderobe in der Halle. Jeder konnte es nehmen." },
        cel1: { q: "Was geschah beim Dinner?", a: "Papa verkündete die Verlobung zwischen Suppe und Fisch, Miss. Ich sagte, er habe den Verstand verloren, und stand vom Tisch auf.", v: "Eine Stiefmutter, jünger als die Tochter! Ganz Surrey wird darüber reden!" },
        cel2: { q: "Wo waren Sie um halb zehn?", a: "In der Halle, am Telefon, Miss. Ich rief Mr Tilney, und dann haben wir uns unterhalten, bis er in den Salon zurückging.", v: "Die Halle, ab 21:30." },
        cel3: { q: "Verstand sich Ihr Mann mit Ihrem Vater?", a: "Hugh ertrug Papas Schach, und Papa ertrug Hugh, und darauf ruhte der Friede in diesem Haus." }
      },
      objections: {
        dun3: { reply: "Schön, ich habe eingeschenkt, wenn Sie die Anrichte so fesselt. Der Alte hat darum gebeten, und die Pflegerin sah mich an, als würde ich das Silber stehlen.", nt: "Dunstan hat gelogen", nx: "Um 21:35 schenkte er Mr Venn an der Anrichte selbst den Whisky ein." },
        dun4: { reply: "Dreitausend auf das Erbe meiner Frau. Am Montag hätte der Alte sein Testament geändert, und Gorringe & Sohn wären zu mir gekommen, nicht zu ihr.", nt: "Die Schulden", nx: "Hugh Dunstan lieh sich 3000 Pfund auf das Erbe seiner Frau. Ein neues Testament hätte ihn ruiniert. Das ist das Motiv." }
      },
      wrong: {
        tilney: "Von 21:30 bis 21:50 war Mr Tilney mit Mrs Dunstan in der Halle. Zum ersten Mal in zwanzig Jahren lag er vorn: Warum sollte er die Partie abbrechen?",
        hazel: "Miss Ormerod hat dir selbst gesagt, wo ihre Handtasche hing. Und im Glas war Morphium, nicht ihr Veronal.",
        celia: "Mrs Dunstan stritt beim Dinner mit ihrem Vater, aber ab halb zehn stand sie mit Mr Tilney am Telefon in der Halle.",
        proof: "Hugh Dunstan zupft an seiner Manschette: „Der Alte hat sich selbst eingeschenkt.“ Beweise, dass er an der Anrichte war, oder warum er nicht bis Montag warten konnte."
      },
      deduce: [
        "Unter dem Kissen Veronal. Und was war im Glas?",
        "Wer ging zur Anrichte, während Mr Tilney am Telefon war?",
        "Wen hätte ein neues Testament dreitausend Pfund gekostet?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Am Montag blieb das Testament, wie es war. Hugh Dunstan zahlte Gorringe & Sohn noch vor Monatsende aus",
        p: [
          "Hugh Dunstan hatte sich bei Geldverleihern dreitausend Pfund auf das künftige Erbe seiner Frau geliehen. Die Verlobung des Schwiegervaters und ein neues Testament hätten ihm nichts gelassen.",
          "Von der Krankheit der verstorbenen Mrs Venn war noch Morphium im Haus. Als Mr Tilney ans Telefon gerufen wurde, schenkte Dunstan dem Alten einen Whisky ein und schüttete das Morphium direkt ins Glas.",
          "Das Veronal-Tütchen nahm er aus der Handtasche der Pflegerin in der Halle und schob es unter das Kissen. Aber im Glas war Morphium, und die Pflegerin hatte ihn um 21:35 an der Anrichte gesehen."
        ]
      }
    },
    pl: {
      title: "Odłożona partia",
      desc: "Co wieczór stary szachista wypijał przy szachownicy jedną szklaneczkę whisky. W sobotę jego partia została nieskończona.",
      meta: ["Fern Lodge, Surrey", "4 czerwca 1932", "≈ 5 minut"],
      introEyebrow: "Salon · 21:50",
      introTitle: "Partia przerwana",
      intro: [
        "Przy kolacji pan Ignatius Venn ogłosił zaręczyny ze swoją pielęgniarką. W poniedziałek zamierzał zmienić testament.",
        "Po kolacji usiadł w salonie, żeby dokończyć partię ze starym rywalem. O 21:50 znaleziono go w fotelu przy szachownicy, obok stała pusta szklaneczka.",
        "Jesteś gościem w tym domu, panno Ado Langton. Kto podszedł do tej szklaneczki?"
      ],
      introVoice: "Zegar tyka głośno, jakby liczył ruchy.",
      clues: {
        c1: { title: "Szklaneczka", text: "Szklaneczka do whisky, na dnie bursztynowa resztka. Analiza: morfina. Trucizna była w szklaneczce.", note: "W szklaneczce pana Venna była morfina." },
        c2: { title: "List", text: "Koperta z czerwoną pieczęcią i rozłożona kartka na sekretarzyku! Lichwiarze piszą do zięcia pana domu, i to na ten adres!", note: "„Gorringe i Syn” przypominają Hugh Dunstanowi o pożyczce 3000 funtów pod przyszły spadek żony. Termin: poniedziałek." },
        c3: { title: "Poduszka", text: "Pod haftowaną poduszką papierowa kopertka z apteki. Wciśnięta głęboko, jakby ktoś chciał ją ukryć.", note: "Pod poduszką na kanapie: pusta kopertka po weronalu z nalepką „Panna H. Ormerod”." },
        c4: { title: "Szachy", text: "Partia porzucona w połowie, figur prawie nie zostało! Podobno pan Tilney przez dwadzieścia lat nie mógł go pokonać, kochana!", note: "Partia przerwana. Podobno pan Tilney przez dwadzieścia lat przegrywał z panem Vennem." },
        c5: { title: "Karafka", text: "Karafka z rubinowego szkła na kredensie. Z niej nalano też panu Tilneyowi, a on ma się dobrze.", note: "Whisky w karafce jest czysta. Truciznę wsypano prosto do szklaneczki." }
      },
      letter: [
        "„Pan H. Dunstan, Fern Lodge.",
        "Szanowny Panie, przypominamy, że pożyczka 3000 funtów",
        "została udzielona pod przyszły spadek",
        "Pańskiej małżonki. Termin: poniedziałek.",
        "Gorringe i Syn, Holborn”."
      ],
      decoys: {
        window: "Księżyc nad trawnikiem. Zasłony nie są zaciągnięte.",
        painting: "Pejzaż w złoconej ramie: wzgórza pod księżycem. Podpisu nie da się odczytać.",
        clock: "Zegar stojący chodzi dokładnie, wahadło kołysze się równo.",
        pipe: "Fajka pana Tilneya jeszcze dymi w popielniczce. Pachnie wiśniowym tytoniem."
      },
      suspects: {
        tilney: { name: "Pan Bertram Tilney", role: "Partner szachowy, 70 lat", intro: "Tweed, okulary, siwa bródka. Nie wypuszcza fajki z ręki." },
        dunstan: { name: "Pan Hugh Dunstan", role: "Zięć pana Venna, makler, 42 lata", intro: "Smoking, gładki przedziałek, cienki wąsik. Uprzejmy bez uśmiechu." },
        hazel: { name: "Panna Hazel Ormerod", role: "Pielęgniarka i narzeczona pana Venna, 26 lat", intro: "Biały fartuch, krótkie włosy, kropelki potu na skroniach." },
        celia: { name: "Pani Celia Dunstan", role: "Córka pana Venna, 38 lat", intro: "Ciemne fale włosów, perły, zaciśnięte usta." }
      },
      qs: {
        til1: { q: "Co było po kolacji?", a: "Usiedliśmy z Ignatiusem dokończyć partię, panienko, tę, którą ciągniemy od kwietnia. O 21:30 wezwano mnie do telefonu." },
        til2: { q: "Kiedy pan wrócił?", a: "O 21:50. Pani Dunstan zagadała mnie w holu do ostatniej minuty, a kiedy wszedłem, Ignatius już nie oddychał.", v: "Wyszedł o 21:30, wrócił o 21:50. W holu z panią Dunstan.", nt: "Pan Tilney przy telefonie", nx: "Od 21:30 do 21:50 pan Tilney był w holu i rozmawiał z panią Dunstan." },
        til3: { q: "Wygrywał pan?", a: "Pierwszy raz od dwudziestu lat, panienko. Graliśmy o dwieście funtów, które mu jestem winien, a on złościł się jak uczniak.", v: "Uśmiecha się na wspomnienie partii i zaraz odwraca wzrok." },
        til4: { q: "Kto do pana dzwonił?", a: "Brat z Guildford, panienko, pytał o turniej w klubie. Kwadrans o jednym debiucie, tacy już są szachiści." },
        dun1: { q: "Co pan robił po kolacji?", a: "Siedziałem z gazetą na kanapie, panienko, kiedy starsi panowie grali. O 21:30 wyszedłem na taras z cygarem.", v: "Taras od 21:30." },
        dun2: { q: "Jak pan żył z teściem?", a: "Znakomicie, panienko. On uważał mnie za nudziarza, a ja jego za wielkiego szachistę, i obaj mieliśmy rację.", v: "Patrzy na szachownicę, jakby partia wciąż trwała." },
        dun3: { q: "Kto nalał panu Vennowi whisky?", a: "On sam, panienko, zawsze sam. [[Nie podchodziłem dziś do kredensu: po kolacji piję tylko wodę sodową.]]" },
        dun4: { q: "Jest pan komuś winien pieniądze?", a: "Pytanie godne poborcy podatkowego, panienko. [[Nie jestem nikomu winien ani pensa, a lichwiarzy znam tylko z powieści.]]" },
        haz1: { q: "Gdzie pani była po kolacji?", a: "Na górze, panienko, słałam panu Vennowi łóżko i szykowałam krople na noc. On kładzie się punktualnie o dziesiątej." },
        haz2: { q: "Kto podchodził do jego szklaneczki?", a: "Kiedy zajrzałam o 21:35, pan Dunstan stał przy kredensie i nalewał whisky. Powiedział: „Zaniosę teściowi, niech śpi mocniej”.", v: "21:35, kredens.", nt: "Pielęgniarka o 21:35", nx: "O 21:35 pan Dunstan stał przy kredensie i nalewał panu Vennowi whisky." },
        haz3: { q: "Czy to pani kopertka?", a: "Moja, panienko, weronal, źle sypiam. Tylko że leżał w torebce, a torebka cały wieczór wisiała na wieszaku w holu.", v: "Policzki jej płoną. Wstydzi się, że ktoś grzebał w jej torebce.", nt: "Kopertka pielęgniarki", nx: "Weronal panny Ormerod leżał w torebce na wieszaku w holu. Każdy mógł go wziąć." },
        cel1: { q: "Co się stało przy kolacji?", a: "Tata ogłosił zaręczyny między zupą a rybą, panienko. Powiedziałam, że postradał zmysły, i wstałam od stołu.", v: "Macocha młodsza od córki! Całe Surrey będzie o tym gadać!" },
        cel2: { q: "Gdzie pani była o 21:30?", a: "W holu, przy telefonie, panienko. Zawołałam pana Tilneya, a potem rozmawialiśmy, aż wrócił do salonu.", v: "Hol, od 21:30." },
        cel3: { q: "Czy mąż dobrze żył z pani ojcem?", a: "Hugh znosił szachy taty, a tata znosił Hugh, i na tym w naszym domu trzymał się spokój." }
      },
      objections: {
        dun3: { reply: "No dobrze, nalałem, skoro tak panią zajmuje ten kredens. Stary poprosił, a pielęgniarka patrzyła na mnie, jakbym kradł srebra.", nt: "Dunstan skłamał", nx: "O 21:35 sam nalał panu Vennowi whisky przy kredensie." },
        dun4: { reply: "Trzy tysiące pod spadek żony. W poniedziałek stary zmieniłby testament i „Gorringe i Syn” przyszliby po mnie, nie po nią.", nt: "Dług", nx: "Hugh Dunstan pożyczył 3000 funtów pod spadek żony. Nowy testament by go zrujnował. Oto motyw." }
      },
      wrong: {
        tilney: "Od 21:30 do 21:50 pan Tilney był w holu z panią Dunstan. Pierwszy raz od dwudziestu lat wygrywał: po co miałby przerywać partię?",
        hazel: "Panna Ormerod sama ci powiedziała, gdzie wisiała jej torebka. A w szklaneczce była morfina, nie jej weronal.",
        celia: "Pani Dunstan pokłóciła się z ojcem przy kolacji, ale od 21:30 stała z panem Tilneyem przy telefonie w holu.",
        proof: "Hugh Dunstan poprawia mankiet: „Stary nalał sobie sam”. Udowodnij, że podchodził do kredensu, albo dlaczego nie mógł czekać do poniedziałku."
      },
      deduce: [
        "Pod poduszką weronal. A co było w szklaneczce?",
        "Kto podszedł do kredensu, kiedy pan Tilney był przy telefonie?",
        "Kogo nowy testament kosztowałby trzy tysiące funtów?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "W poniedziałek testament został bez zmian. Hugh Dunstan spłacił „Gorringe i Syna” jeszcze przed końcem miesiąca",
        p: [
          "Hugh Dunstan pożyczył od lichwiarzy trzy tysiące funtów pod przyszły spadek żony. Zaręczyny teścia i nowy testament zostawiłyby go z niczym.",
          "W domu została morfina z choroby nieboszczki pani Venn. Kiedy pana Tilneya wezwano do telefonu, Dunstan nalał staremu whisky i wsypał morfinę prosto do szklaneczki.",
          "Kopertkę po weronalu wyjął z torebki pielęgniarki w holu i wsunął pod poduszkę. Ale w szklaneczce była morfina, a pielęgniarka widziała go przy kredensie o 21:35."
        ]
      }
    }
  }
});
