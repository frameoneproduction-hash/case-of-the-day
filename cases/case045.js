window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "045", n: 45, scene: "parlour", searchTime: 80, culprit: "coker",
  clues: {
    c1: { prop: "lamp", voice: "logic" },
    c2: { prop: "letter", voice: "gossip", puzzle: true },
    c3: { prop: "clock", voice: "intuition" },
    c4: { prop: "cushion", voice: "intuition" },
    c5: { prop: "window", voice: "logic" },
  },
  decoys: { painting: "logic", vase: "gossip", chess: "intuition", glass: "logic" },
  suspects: [
    { id: "kit", color: "#86b8dc", look: { hair: "curly", hairColor: "#7a4a22", outfit: "vest", outfitColor: "#3a5a3a", extras: ["sweat"] }, qs: [
        { id: "kit1", voice: "gossip" },
        { id: "kit2", voice: "logic" },
        { id: "kit3", needs: "c4", voice: "intuition" },
    ] },
    { id: "dora", color: "#bc9be0", look: { hair: "bun", hairColor: "#b0642a", outfit: "maid", outfitColor: "#1e1e1e", extras: ["headband"], female: true }, qs: [
        { id: "dor1" },
        { id: "dor2", needs: "c1", voice: "logic" },
        { id: "dor3", voice: "gossip" },
    ] },
    { id: "coker", color: "#8cc79a", look: { hair: "bun", hairColor: "#6a5a4a", outfit: "dress", outfitColor: "#3a4a3a", extras: ["glasses"], female: true, lips: "#a06060" }, qs: [
        { id: "ivy1", voice: "logic" },
        { id: "ivy2", voice: "intuition" },
        { id: "ivy3", needs: "c1" },
        { id: "ivy4", needs: "c2" },
    ] },
    { id: "haslam", color: "#c7c7c7", look: { hair: "grey-short", hairColor: "#d0d0d0", outfit: "suit", outfitColor: "#141414", extras: ["sideburns", "stern"] }, qs: [
        { id: "has1" },
        { id: "has2", voice: "logic" },
        { id: "has3" },
        { id: "has4", voice: "intuition" },
    ] },
  ],
  objections: { ivy3: { evidence: "dor2" }, ivy4: { evidence: "c2" } },
  proof: ["dor2", "c2", "obj:ivy3", "obj:ivy4"],
  text: {
    ru: {
      title: "Бой часов",
      desc: "Каждый вечер с боем часов хозяйка дома садилась писать письма. В субботу она успела только включить свет.",
      meta: ["Тиллингем-холл, Кент", "9 июля 1932", "≈ 5 минут"],
      introEyebrow: "Гостиная · 22:00",
      introTitle: "Свет погас",
      intro: [
        "Днём миссис Лавиния Марчбэнк дала в саду свой знаменитый летний приём, и весь Кент пил у неё чай.",
        "Вечером, едва часы пробили десять, она включила торшер у бюро, и во всём доме погас свет. Миссис Марчбэнк лежала у торшера.",
        "Вы ночуете в доме, мисс Ада Лэнгтон. Кто трогал торшер?"
      ],
      introVoice: "Пахнет палёной резиной и розами.",
      clues: {
        c1: { title: "Торшер", text: "Под абажуром провод надрезан зигзагом, голая медь касается латунной ножки. Ножка была под током.", note: "Провод торшера надрезан зигзагом. Латунная ножка была под током." },
        c2: { title: "Письмо", text: "Недописанное письмо на бюро, рядом конверт с красной печатью! Хозяйка писала подруге о своей портнихе!", note: "Миссис Марчбэнк писала: её портниха — та самая Айви Хартли, чью помолвку с Чарльзом она расстроила в 1912 году." },
        c3: { title: "Часы", text: "Напольные часы с боем. Каждый вечер в десять хозяйка шла к бюро. Кто-то знал её привычку наизусть.", note: "Каждый вечер в 22:00, с боем часов, миссис Марчбэнк включала торшер и садилась к бюро." },
        c4: { title: "Подушка", text: "Под вышитой подушкой отвёртка, на ручке выжжено «К. Э.». Её сунули второпях.", note: "Под подушкой на диване — отвёртка Кита Эйнсли." },
        c5: { title: "Окно", text: "Окно у бюро, портьеры подвязаны, над садом луна. В 22:00 свет во всём доме погас разом: сгорели пробки.", note: "В 22:00 сгорели пробки: миссис Марчбэнк включила торшер, и её ударило током." }
      },
      letter: [
        "«Дорогая Фрэнсис, ты не поверишь:",
        "моя новая портниха — та самая",
        "Айви Хартли, от которой я в 1912-м",
        "спасла нашего Чарльза. Она и не знает,",
        "кто тогда написал ему письмо. Л.»"
      ],
      decoys: {
        painting: "Пейзаж над буфетом: луна над холмами. Рама протёрта до блеска.",
        vase: "Розы из сада! Срезал их мистер Хаслам, а хозяйка опять бранила его за кривые стебли, дорогуша!",
        chess: "На журнальном столике брошена партия. Чёрный король загнан в угол.",
        glass: "Стакан на буфете, на дне капля виски. Пахнет только виски."
      },
      suspects: {
        kit: { name: "Кит Эйнсли", role: "Внучатый племянник, радиолюбитель, 20 лет", intro: "Вихры, жилет, пальцы в канифоли. На лбу испарина." },
        dora: { name: "Дора Кембл", role: "Горничная, 19 лет", intro: "Наколка, чёрное платье, веснушки. Смотрит в пол." },
        coker: { name: "Миссис Айви Коукер", role: "Портниха из городка, 41 год", intro: "Очки, тёмно-зелёное платье, булавки на лацкане." },
        haslam: { name: "Мистер Альфред Хаслам", role: "Дворецкий, 66 лет", intro: "Чёрный сюртук, седые бакенбарды, руки за спиной." }
      },
      qs: {
        kit1: { q: "Что вы делали вечером?", a: "До половины десятого играл с Хасламом в шахматы, мисс. Потом укатил на велосипеде на станцию встречать приятеля с поезда 21:52.", v: "Двоюродная бабушка грозилась лишить его наследства за эти радиоштуки! Весь Кент знает!" },
        kit2: { q: "Когда вы вернулись?", a: "В двадцать минут одиннадцатого, мисс, с приятелем на раме. Дом стоял тёмный, все бегали со свечами.", v: "Ушёл в 21:30, станция, назад в 22:20.", nt: "Кит на станции", nx: "С 21:30 до 22:20 Кит ездил на станцию за приятелем." },
        kit3: { q: "Это ваша отвёртка?", a: "Моя, мисс, из ящика в каретном сарае, сарай у нас не запирают. Только она плоская, а я с утра её в руки не брал.", v: "Он вертит отвёртку, и пальцы у него дрожат.", nt: "Отвёртка Кита", nx: "Отвёртка Кита лежала в незапертом каретном сарае." },
        dor1: { q: "Где вы были вечером?", a: "На кухне и в коридорах, мисс, носила какао и грелки, а с без четверти десять до самого крика запирала с мистером Хасламом ставни наверху." },
        dor2: { q: "Кто подходил к торшеру?", a: "В 21:40 я несла какао мимо двери, а миссис Коукер стояла у торшера с ножницами. Сказала, кисть на абажуре отпоролась.", v: "21:40, торшер, ножницы.", nt: "Горничная в 21:40", nx: "В 21:40 миссис Коукер стояла у торшера с ножницами." },
        dor3: { q: "Как прошёл приём?", a: "Хозяйка за чаем рассказывала, как в двенадцатом году расстроила одну помолвку. Хвасталась, будто кубок на скачках взяла.", v: "Уж кто умел расстроить свадьбу, так это хозяйка! Пол-Кента от неё натерпелось!" },
        ivy1: { q: "Где вы были вечером?", a: "На диване с шитьём, мисс: подгоняла хозяйке платье к воскресенью. Без четверти десять ушла к себе.", v: "К себе — в 21:45." },
        ivy2: { q: "Давно вы шьёте для миссис Марчбэнк?", a: "С весны, мисс. Платит она щедро, а капризничает ещё щедрее.", v: "Иголка у неё в пальцах так и ходит." },
        ivy3: { q: "Вы подходили к торшеру?", a: "Подходила, мисс, кисть на абажуре отпоролась. [[Только подшила я её ещё днём, до приёма, при дневном свете.]]" },
        ivy4: { q: "Вы знали миссис Марчбэнк до этой весны?", a: "Городок у нас маленький, мисс, её тут все знают в лицо. [[Но до весны наши дороги нигде не пересекались.]]" },
        has1: { q: "Где вы были вечером?", a: "До половины десятого играл с мистером Китом в шахматы, мисс, с позволения хозяйки. Потом обходил дом и запирал двери." },
        has2: { q: "Торшер горел, пока вы играли?", a: "Горел, мисс. В половине десятого я сам его выключил, и всё было как всегда.", v: "21:30 — торшер исправен.", nt: "Торшер в 21:30", nx: "В 21:30 дворецкий выключил торшер. Тот был исправен." },
        has3: { q: "Хозяйка всегда садилась к бюро в десять?", a: "С боем часов, мисс, двадцать лет подряд: сначала включала торшер, потом брала перо." },
        has4: { q: "Где вы служили до этого дома?", a: "Клерком в лондонском ломбарде, мисс, до семнадцатого года. Помню, в мае шестнадцатого часы с гравировкой «Г. Л.» заложили за пять шиллингов, а стоили они фунтов двадцать.", v: "«Г. Л.» Отцовские часы отдали за бесценок. Зачем, если не ради денег?" }
      },
      objections: {
        ivy3: { reply: "Ну, вечером! Днём хозяйка гоняла меня с булавками по всему саду, когда мне было подшивать?", nt: "Миссис Коукер солгала", nx: "В 21:40 она была у торшера с ножницами, а не днём." },
        ivy4: { reply: "Двадцать лет я думала, что Чарльз бросил меня сам. А она сегодня рассказывала это за чаем, как анекдот, и все смеялись.", nt: "Айви Хартли", nx: "Миссис Коукер — та самая Айви Хартли, чью помолвку миссис Марчбэнк расстроила в 1912 году. Вот мотив." }
      },
      wrong: {
        kit: "Кит в 21:30 уехал на станцию и вернулся в 22:20 с приятелем. А плоской отвёрткой провод зигзагом не надрежешь.",
        dora: "Дора весь вечер носила какао и грелки. Это она и видела у торшера миссис Коукер.",
        haslam: "Мистер Хаслам сам сказал, что в 21:30 торшер был исправен, а с без четверти десять он запирал с Дорой ставни наверху. Зигзаг на проводе оставляют портновские ножницы, а не ключи дворецкого.",
        proof: "Миссис Коукер прячет ножницы в карман: «Я простая портниха, мисс». Докажите, что она была у торшера, или за что ей было мстить."
      },
      deduce: [
        "Плоской отвёрткой зигзаг не надрежешь. Кто был у торшера после 21:30?",
        "Кого горничная видела у торшера с ножницами?",
        "О ком хозяйка писала в недописанном письме?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Миссис Коукер дошила воскресное платье и уехала в городок. Хозяйку в нём и похоронили",
        p: [
          "В 1912 году Лавиния Марчбэнк анонимным письмом расстроила помолвку молодой портнихи Айви Хартли с кузеном Чарльзом. Двадцать лет Айви думала, что жених бросил её сам.",
          "Сегодня за чаем хозяйка со смехом рассказала эту историю, и Айви всё поняла. Вечером, когда дворецкий выключил торшер и ушёл, она надрезала провод портновскими ножницами-зигзагом, и латунная ножка оказалась под током.",
          "Отвёртку Кита она взяла в незапертом сарае и сунула под подушку. Ровно в десять, с боем часов, миссис Марчбэнк, как всегда, включила торшер."
        ]
      }
    },
    en: {
      title: "The Striking Clock",
      desc: "Every evening, as the clock struck, the lady of the house sat down to write her letters. On Saturday she only managed to switch on the light.",
      meta: ["Tillingham Hall, Kent", "9 July 1932", "≈ 5 minutes"],
      introEyebrow: "Parlour · 10:00 pm",
      introTitle: "The lights go out",
      intro: [
        "That afternoon Mrs Lavinia Marchbank gave her famous summer garden party, and half of Kent took tea on her lawn.",
        "In the evening, just as the clock struck ten, she switched on the standard lamp by the bureau, and every light in the house went out. Mrs Marchbank lay beside the lamp.",
        "You're staying the night, Miss Ada Langton. Who touched that lamp?"
      ],
      introVoice: "It smells of scorched rubber and roses.",
      clues: {
        c1: { title: "Standard lamp", text: "Under the shade the flex has been cut in a zigzag, and bare copper touches the brass stem. The stem was live.", note: "The lamp flex was cut in a zigzag. The brass stem was live." },
        c2: { title: "Letter", text: "An unfinished letter on the bureau, an envelope with a red seal beside it! The mistress was writing to a friend about her dressmaker!", note: "Mrs Marchbank wrote that her dressmaker is the very Ivy Hartley whose engagement to Charles she broke off in 1912." },
        c3: { title: "Clock", text: "A striking grandfather clock. Every evening at ten the mistress went to the bureau. Someone knew her habit by heart.", note: "Every evening at 10:00, as the clock struck, Mrs Marchbank switched on the lamp and sat down at the bureau." },
        c4: { title: "Cushion", text: "Under the embroidered cushion, a screwdriver with “K. A.” burnt into the handle. Pushed there in a hurry.", note: "Under the sofa cushion: Kit Ainsley's screwdriver." },
        c5: { title: "Window", text: "The window by the bureau, curtains tied back, the moon over the garden. At 10:00 every light in the house went out at once: the fuses blew.", note: "At 10:00 the fuses blew: Mrs Marchbank switched on the lamp and was electrocuted." }
      },
      letter: [
        "“Dearest Frances, you'll never believe it:",
        "my new dressmaker is none other than",
        "Ivy Hartley, from whom in 1912",
        "I rescued our Charles. She has no idea",
        "who wrote him that letter. L.”"
      ],
      decoys: {
        painting: "A landscape over the sideboard: the moon above the hills. The frame is polished to a shine.",
        vase: "Roses from the garden! Mr Haslam cut them, and the mistress scolded him again for crooked stems, my dear!",
        chess: "A game abandoned on the coffee table. The black king is driven into a corner.",
        glass: "A tumbler on the sideboard with a drop of whisky in it. It smells of nothing but whisky."
      },
      suspects: {
        kit: { name: "Kit Ainsley", role: "Great-nephew, wireless enthusiast, 20", intro: "Tousled hair, waistcoat, rosin on his fingers. Sweat on his forehead." },
        dora: { name: "Dora Kemble", role: "Housemaid, 19", intro: "Cap, black dress, freckles. Keeps her eyes on the floor." },
        coker: { name: "Mrs Ivy Coker", role: "Dressmaker from the town, 41", intro: "Spectacles, a dark green dress, pins in her lapel." },
        haslam: { name: "Mr Alfred Haslam", role: "Butler, 66", intro: "Black tailcoat, grey side-whiskers, hands behind his back." }
      },
      qs: {
        kit1: { q: "What did you do this evening?", a: "Played chess with Haslam till half past nine, miss. Then I rode my bicycle to the station to meet a pal off the 9:52.", v: "His great-aunt threatened to cut him off over those wireless sets! All Kent knows it!" },
        kit2: { q: "When did you get back?", a: "At twenty past ten, miss, with my pal on the crossbar. The house was dark and everyone was running about with candles.", v: "Left at 9:30, the station, back at 10:20.", nt: "Kit at the station", nx: "From 9:30 to 10:20 Kit was off at the station fetching a friend." },
        kit3: { q: "Is this your screwdriver?", a: "It is, miss, from the toolbox in the coach house, and we never lock the coach house. Only it's a flat one, and I haven't touched it since morning.", v: "He turns the screwdriver over, and his fingers are shaking.", nt: "Kit's screwdriver", nx: "Kit's screwdriver was kept in the unlocked coach house." },
        dor1: { q: "Where were you this evening?", a: "In the kitchen and the passages, miss, carrying cocoa and hot-water bottles, and from a quarter to ten until the scream I was closing the upstairs shutters with Mr Haslam." },
        dor2: { q: "Who went near the lamp?", a: "At 9:40 I was taking cocoa past the door, and Mrs Coker was at the lamp with her scissors. She said a tassel had come off the shade.", v: "9:40, the lamp, scissors.", nt: "The maid at 9:40", nx: "At 9:40 Mrs Coker was standing at the lamp with her scissors." },
        dor3: { q: "How did the garden party go?", a: "Over tea the mistress told how she'd broken off an engagement back in 1912. Crowed about it as if she'd won a cup at the races.", v: "If anyone knew how to wreck a wedding, it was the mistress! Half of Kent has suffered at her hands!" },
        ivy1: { q: "Where were you this evening?", a: "On the sofa with my sewing, miss, taking in the mistress's dress for Sunday. At a quarter to ten I went up to my room.", v: "Up to her room at 9:45." },
        ivy2: { q: "How long have you sewn for Mrs Marchbank?", a: "Since the spring, miss. She pays generously and fusses more generously still.", v: "The needle never stops moving in her fingers." },
        ivy3: { q: "Did you go near the lamp?", a: "I did, miss, a tassel had come off the shade. [[Only I sewed it back on in the afternoon, before the party, by daylight.]]" },
        ivy4: { q: "Did you know Mrs Marchbank before this spring?", a: "Ours is a small town, miss, everyone knows her by sight. [[But before the spring our paths had never crossed anywhere.]]" },
        has1: { q: "Where were you this evening?", a: "Until half past nine I played chess with Master Kit, miss, with the mistress's permission. Then I went round the house locking up." },
        has2: { q: "Was the lamp on while you played?", a: "It was, miss. At half past nine I switched it off myself, and everything was as usual.", v: "9:30: the lamp is working.", nt: "The lamp at 9:30", nx: "At 9:30 the butler switched the lamp off. It was working." },
        has3: { q: "Did the mistress always go to the bureau at ten?", a: "As the clock struck, miss, twenty years running: first she switched on the lamp, then she took up her pen." },
        has4: { q: "Where were you in service before this house?", a: "I was a clerk in a London pawnshop, miss, until 1917. I remember in May 1916 a watch engraved “H. L.” was pawned for five shillings, and it was worth a good twenty pounds.", v: "“H. L.” Father's watch, let go for next to nothing. Why, if not for the money?" }
      },
      objections: {
        ivy3: { reply: "All right, in the evening! All afternoon the mistress had me running round the garden with pins; when was I to sew anything?", nt: "Mrs Coker lied", nx: "At 9:40 she was at the lamp with her scissors, not in the afternoon." },
        ivy4: { reply: "For twenty years I thought Charles jilted me of his own accord. And today she told it over tea like a funny story, and everyone laughed.", nt: "Ivy Hartley", nx: "Mrs Coker is the very Ivy Hartley whose engagement Mrs Marchbank broke off in 1912. There's the motive." }
      },
      wrong: {
        kit: "Kit left for the station at 9:30 and came back at 10:20 with his friend. And you can't cut a zigzag with a flat screwdriver.",
        dora: "Dora spent the evening carrying cocoa and hot-water bottles. She's the one who saw Mrs Coker at the lamp.",
        haslam: "Mr Haslam told you himself the lamp was working at 9:30, and from a quarter to ten he was closing the upstairs shutters with Dora. A zigzag cut comes from a dressmaker's shears, not a butler's keys.",
        proof: "Mrs Coker slips her scissors into her pocket: “I'm only a dressmaker, miss.” Prove she was at the lamp, or what she had to avenge."
      },
      deduce: [
        "A flat screwdriver can't cut a zigzag. Who was at the lamp after 9:30?",
        "Whom did the maid see at the lamp with scissors?",
        "Who was the mistress writing about in her unfinished letter?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "Mrs Coker finished the Sunday dress and went home to town. The mistress was buried in it",
        p: [
          "In 1912 Lavinia Marchbank broke off young dressmaker Ivy Hartley's engagement to her cousin Charles with an anonymous letter. For twenty years Ivy believed he had jilted her of his own accord.",
          "Today over tea the mistress told the story with a laugh, and Ivy understood everything. In the evening, once the butler had switched off the lamp and gone, she cut the flex with her pinking shears, and the brass stem was left live.",
          "She took Kit's screwdriver from the unlocked coach house and pushed it under the cushion. At ten o'clock sharp, as the clock struck, Mrs Marchbank switched on the lamp as always."
        ]
      }
    },
    es: {
      title: "Las campanadas",
      desc: "Cada noche, al dar la hora el reloj, la señora de la casa se sentaba a escribir cartas. El sábado solo llegó a encender la luz.",
      meta: ["Tillingham Hall, Kent", "9 de julio de 1932", "≈ 5 minutos"],
      introEyebrow: "Salón · 22:00",
      introTitle: "Se apaga la luz",
      intro: [
        "Por la tarde la señora Lavinia Marchbank dio en el jardín su famosa fiesta de verano, y medio Kent tomó el té en su césped.",
        "Por la noche, justo cuando el reloj dio las diez, encendió la lámpara de pie junto al escritorio y se apagaron todas las luces de la casa. La señora Marchbank yacía junto a la lámpara.",
        "Pasas la noche en la casa, señorita Ada Langton. ¿Quién tocó esa lámpara?"
      ],
      introVoice: "Huele a goma quemada y a rosas.",
      clues: {
        c1: { title: "Lámpara de pie", text: "Bajo la pantalla el cable está cortado en zigzag, y el cobre pelado toca el pie de latón. El pie tenía corriente.", note: "El cable de la lámpara estaba cortado en zigzag. El pie de latón tenía corriente." },
        c2: { title: "Carta", text: "¡Una carta a medio escribir en el escritorio, y al lado un sobre con sello rojo! ¡La señora le escribía a una amiga sobre su modista!", note: "La señora Marchbank escribía que su modista es la mismísima Ivy Hartley, cuyo compromiso con Charles ella deshizo en 1912." },
        c3: { title: "Reloj", text: "Un reloj de pie con campanadas. Cada noche a las diez la señora iba al escritorio. Alguien se sabía su costumbre de memoria.", note: "Cada noche a las 22:00, al dar la hora, la señora Marchbank encendía la lámpara y se sentaba al escritorio." },
        c4: { title: "Cojín", text: "Bajo el cojín bordado, un destornillador con «K. A.» grabado a fuego en el mango. Lo metieron ahí a toda prisa.", note: "Bajo el cojín del sofá: el destornillador de Kit Ainsley." },
        c5: { title: "Ventana", text: "La ventana junto al escritorio, las cortinas recogidas, la luna sobre el jardín. A las 22:00 se apagaron de golpe todas las luces: saltaron los plomos.", note: "A las 22:00 saltaron los plomos: la señora Marchbank encendió la lámpara y recibió la descarga." }
      },
      letter: [
        "«Querida Frances, no te lo vas a creer:",
        "mi nueva modista es nada menos que",
        "Ivy Hartley, de la que en 1912",
        "salvé a nuestro Charles. Ni se imagina",
        "quién le escribió aquella carta. L.»"
      ],
      decoys: {
        painting: "Un paisaje sobre el aparador: la luna encima de las colinas. El marco está bruñido.",
        vase: "¡Rosas del jardín! Las cortó el señor Haslam, ¡y la señora volvió a reñirle por los tallos torcidos, querida!",
        chess: "Una partida abandonada en la mesita. El rey negro está acorralado en una esquina.",
        glass: "Un vaso en el aparador con una gota de whisky. Solo huele a whisky."
      },
      suspects: {
        kit: { name: "Kit Ainsley", role: "Sobrino nieto, aficionado a la radio, 20 años", intro: "Pelo revuelto, chaleco, resina en los dedos. Sudor en la frente." },
        dora: { name: "Dora Kemble", role: "Doncella, 19 años", intro: "Cofia, vestido negro, pecas. No levanta la vista del suelo." },
        coker: { name: "Señora Ivy Coker", role: "Modista del pueblo, 41 años", intro: "Gafas, vestido verde oscuro, alfileres en la solapa." },
        haslam: { name: "Señor Alfred Haslam", role: "Mayordomo, 66 años", intro: "Levita negra, patillas grises, las manos a la espalda." }
      },
      qs: {
        kit1: { q: "¿Qué hizo esta noche?", a: "Jugué al ajedrez con Haslam hasta las nueve y media, señorita. Luego fui en bicicleta a la estación a recoger a un amigo del tren de las 21:52.", v: "¡Su tía abuela amenazó con desheredarlo por esos aparatos de radio! ¡Lo sabe todo Kent!" },
        kit2: { q: "¿Cuándo volvió?", a: "A las diez y veinte, señorita, con mi amigo en la barra de la bici. La casa estaba a oscuras y todos corrían con velas.", v: "Salió a las 21:30, la estación, volvió a las 22:20.", nt: "Kit en la estación", nx: "De 21:30 a 22:20 Kit estuvo yendo a la estación a recoger a un amigo." },
        kit3: { q: "¿Es suyo este destornillador?", a: "Sí, señorita, de la caja de herramientas de la cochera, que nunca cerramos con llave. Pero es plano, y no lo he tocado desde la mañana.", v: "Le da vueltas al destornillador, y le tiemblan los dedos.", nt: "El destornillador de Kit", nx: "El destornillador de Kit estaba en la cochera, que no se cierra con llave." },
        dor1: { q: "¿Dónde estuvo esta noche?", a: "En la cocina y por los pasillos, señorita, llevando cacao y bolsas de agua caliente, y desde las diez menos cuarto hasta el grito estuve cerrando los postigos de arriba con el señor Haslam." },
        dor2: { q: "¿Quién se acercó a la lámpara?", a: "A las 21:40 pasé por la puerta con el cacao, y la señora Coker estaba junto a la lámpara con las tijeras. Dijo que se había descosido una borla de la pantalla.", v: "21:40, la lámpara, tijeras.", nt: "La doncella a las 21:40", nx: "A las 21:40 la señora Coker estaba junto a la lámpara con unas tijeras." },
        dor3: { q: "¿Qué tal fue la fiesta?", a: "Durante el té la señora contó cómo en el año doce deshizo un compromiso. Presumía como si hubiera ganado una copa en las carreras.", v: "¡Si alguien sabía estropear una boda, era la señora! ¡Medio Kent ha sufrido por ella!" },
        ivy1: { q: "¿Dónde estuvo esta noche?", a: "En el sofá con la costura, señorita, ajustándole a la señora el vestido del domingo. A las diez menos cuarto me fui a mi cuarto.", v: "A su cuarto a las 21:45." },
        ivy2: { q: "¿Desde cuándo cose para la señora Marchbank?", a: "Desde la primavera, señorita. Paga con generosidad y tiene caprichos con más generosidad todavía.", v: "La aguja no para quieta entre sus dedos." },
        ivy3: { q: "¿Se acercó a la lámpara?", a: "Sí, señorita, se había descosido una borla de la pantalla. [[Pero la cosí por la tarde, antes de la fiesta, con luz de día.]]" },
        ivy4: { q: "¿Conocía a la señora Marchbank antes de esta primavera?", a: "El pueblo es pequeño, señorita, aquí todos la conocen de vista. [[Pero antes de la primavera nuestros caminos nunca se habían cruzado.]]" },
        has1: { q: "¿Dónde estuvo esta noche?", a: "Hasta las nueve y media jugué al ajedrez con el señorito Kit, señorita, con permiso de la señora. Luego recorrí la casa cerrando puertas." },
        has2: { q: "¿Estaba encendida la lámpara mientras jugaban?", a: "Sí, señorita. A las nueve y media la apagué yo mismo, y todo estaba como siempre.", v: "21:30: la lámpara funciona.", nt: "La lámpara a las 21:30", nx: "A las 21:30 el mayordomo apagó la lámpara. Funcionaba bien." },
        has3: { q: "¿La señora siempre iba al escritorio a las diez?", a: "Con las campanadas, señorita, veinte años seguidos: primero encendía la lámpara y luego tomaba la pluma." },
        has4: { q: "¿Dónde sirvió antes de esta casa?", a: "Fui dependiente en una casa de empeños de Londres, señorita, hasta el diecisiete. Recuerdo que en mayo del dieciséis empeñaron un reloj grabado «H. L.» por cinco chelines, y valía sus buenas veinte libras.", v: "«H. L.» El reloj de padre, malvendido. ¿Para qué, si no era por el dinero?" }
      },
      objections: {
        ivy3: { reply: "¡Pues por la noche! Toda la tarde la señora me tuvo corriendo por el jardín con los alfileres; ¿cuándo iba a coser nada?", nt: "La señora Coker mintió", nx: "A las 21:40 estaba junto a la lámpara con las tijeras, no por la tarde." },
        ivy4: { reply: "Veinte años creyendo que Charles me dejó porque quiso. Y hoy ella lo contaba con el té como un chiste, y todos se reían.", nt: "Ivy Hartley", nx: "La señora Coker es la mismísima Ivy Hartley, cuyo compromiso la señora Marchbank deshizo en 1912. Ese es el móvil." }
      },
      wrong: {
        kit: "Kit se fue a la estación a las 21:30 y volvió a las 22:20 con su amigo. Y con un destornillador plano no se corta un zigzag.",
        dora: "Dora se pasó la noche llevando cacao y bolsas de agua caliente. Fue ella quien vio a la señora Coker junto a la lámpara.",
        haslam: "El señor Haslam te dijo él mismo que a las 21:30 la lámpara funcionaba, y desde las diez menos cuarto cerraba los postigos de arriba con Dora. Un corte en zigzag lo hacen unas tijeras de modista, no las llaves de un mayordomo.",
        proof: "La señora Coker se guarda las tijeras en el bolsillo: «Solo soy una modista, señorita». Demuestra que estuvo junto a la lámpara, o de qué tenía que vengarse."
      },
      deduce: [
        "Con un destornillador plano no se corta en zigzag. ¿Quién estuvo junto a la lámpara después de las 21:30?",
        "¿A quién vio la doncella junto a la lámpara con unas tijeras?",
        "¿De quién hablaba la señora en su carta a medio escribir?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "La señora Coker terminó el vestido del domingo y volvió al pueblo. Con ese vestido enterraron a la señora",
        p: [
          "En 1912 Lavinia Marchbank deshizo con una carta anónima el compromiso de la joven modista Ivy Hartley con su primo Charles. Durante veinte años Ivy creyó que él la había dejado por su cuenta.",
          "Hoy, con el té, la señora contó la historia entre risas, e Ivy lo entendió todo. Por la noche, cuando el mayordomo apagó la lámpara y se fue, cortó el cable con sus tijeras dentadas de modista, y el pie de latón quedó con corriente.",
          "Cogió el destornillador de Kit en la cochera abierta y lo metió bajo el cojín. A las diez en punto, con las campanadas, la señora Marchbank encendió la lámpara como siempre."
        ]
      }
    },
    de: {
      title: "Der Stundenschlag",
      desc: "Jeden Abend, wenn die Uhr schlug, setzte sich die Hausherrin an ihre Briefe. Am Samstag kam sie nur noch dazu, das Licht anzuknipsen.",
      meta: ["Tillingham Hall, Kent", "9. Juli 1932", "≈ 5 Minuten"],
      introEyebrow: "Salon · 22:00",
      introTitle: "Das Licht erlischt",
      intro: [
        "Am Nachmittag gab Mrs Lavinia Marchbank im Garten ihr berühmtes Sommerfest, und halb Kent trank bei ihr Tee.",
        "Am Abend, gerade als die Uhr zehn schlug, knipste sie die Stehlampe am Sekretär an, und im ganzen Haus erlosch das Licht. Mrs Marchbank lag neben der Lampe.",
        "Du übernachtest im Haus, Miss Ada Langton. Wer hat die Lampe angefasst?"
      ],
      introVoice: "Es riecht nach verschmortem Gummi und nach Rosen.",
      clues: {
        c1: { title: "Stehlampe", text: "Unter dem Schirm ist das Kabel im Zickzack eingeschnitten, blankes Kupfer berührt den Messingfuß. Der Fuß stand unter Strom.", note: "Das Lampenkabel war im Zickzack eingeschnitten. Der Messingfuß stand unter Strom." },
        c2: { title: "Brief", text: "Ein unfertiger Brief auf dem Sekretär, daneben ein Umschlag mit rotem Siegel! Die Hausherrin schrieb einer Freundin über ihre Schneiderin!", note: "Mrs Marchbank schrieb, ihre Schneiderin sei genau jene Ivy Hartley, deren Verlobung mit Charles sie 1912 hintertrieben hatte." },
        c3: { title: "Uhr", text: "Eine schlagende Standuhr. Jeden Abend um zehn ging die Hausherrin zum Sekretär. Jemand kannte ihre Gewohnheit auswendig.", note: "Jeden Abend um 22:00, beim Stundenschlag, knipste Mrs Marchbank die Lampe an und setzte sich an den Sekretär." },
        c4: { title: "Kissen", text: "Unter dem bestickten Kissen ein Schraubenzieher, in den Griff ist „K. A.“ eingebrannt. Hastig hineingeschoben.", note: "Unter dem Sofakissen: Kit Ainsleys Schraubenzieher." },
        c5: { title: "Fenster", text: "Das Fenster am Sekretär, die Vorhänge gerafft, der Mond über dem Garten. Um 22:00 ging im ganzen Haus schlagartig das Licht aus: Die Sicherungen brannten durch.", note: "Um 22:00 brannten die Sicherungen durch: Mrs Marchbank knipste die Lampe an und bekam den Schlag." }
      },
      letter: [
        "„Liebste Frances, du wirst es nicht glauben:",
        "Meine neue Schneiderin ist keine andere als",
        "Ivy Hartley, vor der ich 1912",
        "unseren Charles bewahrt habe. Sie ahnt nicht,",
        "wer ihm damals den Brief schrieb. L.“"
      ],
      decoys: {
        painting: "Eine Landschaft über der Anrichte: der Mond über den Hügeln. Der Rahmen ist blank poliert.",
        vase: "Rosen aus dem Garten! Mr Haslam hat sie geschnitten, und die Hausherrin hat ihn wieder wegen krummer Stiele gescholten, Schätzchen!",
        chess: "Eine liegengelassene Partie auf dem Couchtisch. Der schwarze König ist in die Ecke gedrängt.",
        glass: "Ein Glas auf der Anrichte, ein Tropfen Whisky darin. Es riecht nur nach Whisky."
      },
      suspects: {
        kit: { name: "Kit Ainsley", role: "Großneffe, Radiobastler, 20", intro: "Struwwelhaar, Weste, Kolophonium an den Fingern. Schweiß auf der Stirn." },
        dora: { name: "Dora Kemble", role: "Hausmädchen, 19", intro: "Häubchen, schwarzes Kleid, Sommersprossen. Hält den Blick gesenkt." },
        coker: { name: "Mrs Ivy Coker", role: "Schneiderin aus dem Städtchen, 41", intro: "Brille, dunkelgrünes Kleid, Stecknadeln am Revers." },
        haslam: { name: "Mr Alfred Haslam", role: "Butler, 66", intro: "Schwarzer Frack, graue Koteletten, die Hände auf dem Rücken." }
      },
      qs: {
        kit1: { q: "Was haben Sie heute Abend gemacht?", a: "Bis halb zehn mit Haslam Schach gespielt, Miss. Dann bin ich mit dem Rad zum Bahnhof, einen Freund vom Zug um 21:52 abholen.", v: "Die Großtante drohte, ihn wegen dieser Radiokisten zu enterben! Ganz Kent weiß das!" },
        kit2: { q: "Wann kamen Sie zurück?", a: "Um zwanzig nach zehn, Miss, mit meinem Freund auf der Stange. Das Haus war dunkel, alle liefen mit Kerzen herum.", v: "Weg um 21:30, Bahnhof, zurück um 22:20.", nt: "Kit am Bahnhof", nx: "Von 21:30 bis 22:20 war Kit unterwegs zum Bahnhof, einen Freund abholen." },
        kit3: { q: "Ist das Ihr Schraubenzieher?", a: "Ja, Miss, aus dem Werkzeugkasten in der Remise, und die schließen wir nie ab. Nur ist er flach, und ich hatte ihn seit dem Morgen nicht in der Hand.", v: "Er dreht den Schraubenzieher hin und her, und seine Finger zittern.", nt: "Kits Schraubenzieher", nx: "Kits Schraubenzieher lag in der unverschlossenen Remise." },
        dor1: { q: "Wo waren Sie heute Abend?", a: "In der Küche und auf den Gängen, Miss, mit Kakao und Wärmflaschen, und ab Viertel vor zehn bis zum Schrei habe ich mit Mr Haslam oben die Fensterläden geschlossen." },
        dor2: { q: "Wer war an der Lampe?", a: "Um 21:40 trug ich Kakao an der Tür vorbei, und Mrs Coker stand mit der Schere an der Lampe. Sie sagte, am Schirm habe sich eine Quaste gelöst.", v: "21:40, die Lampe, eine Schere.", nt: "Das Hausmädchen um 21:40", nx: "Um 21:40 stand Mrs Coker mit einer Schere an der Lampe." },
        dor3: { q: "Wie war das Gartenfest?", a: "Beim Tee erzählte die Hausherrin, wie sie anno zwölf eine Verlobung hintertrieben hat. Sie prahlte, als hätte sie einen Pokal beim Rennen gewonnen.", v: "Wenn jemand Hochzeiten verderben konnte, dann die Hausherrin! Halb Kent hat unter ihr gelitten!" },
        ivy1: { q: "Wo waren Sie heute Abend?", a: "Auf dem Sofa beim Nähen, Miss, ich habe der Hausherrin das Sonntagskleid enger gemacht. Um Viertel vor zehn ging ich auf mein Zimmer.", v: "Auf ihr Zimmer um 21:45." },
        ivy2: { q: "Seit wann nähen Sie für Mrs Marchbank?", a: "Seit dem Frühjahr, Miss. Sie zahlt großzügig und ist mit ihren Launen noch großzügiger.", v: "Die Nadel steht in ihren Fingern keinen Augenblick still." },
        ivy3: { q: "Waren Sie an der Lampe?", a: "Ja, Miss, am Schirm hatte sich eine Quaste gelöst. [[Nur habe ich sie schon am Nachmittag angenäht, vor dem Fest, bei Tageslicht.]]" },
        ivy4: { q: "Kannten Sie Mrs Marchbank vor diesem Frühjahr?", a: "Unser Städtchen ist klein, Miss, hier kennt sie jeder vom Sehen. [[Aber vor dem Frühjahr haben sich unsere Wege nirgends gekreuzt.]]" },
        has1: { q: "Wo waren Sie heute Abend?", a: "Bis halb zehn spielte ich mit dem jungen Herrn Kit Schach, Miss, mit Erlaubnis der Hausherrin. Dann ging ich durchs Haus und schloss ab." },
        has2: { q: "Brannte die Lampe, während Sie spielten?", a: "Ja, Miss. Um halb zehn habe ich sie selbst ausgeknipst, und alles war wie immer.", v: "21:30: Die Lampe funktioniert.", nt: "Die Lampe um 21:30", nx: "Um 21:30 knipste der Butler die Lampe aus. Sie funktionierte." },
        has3: { q: "Ging die Hausherrin immer um zehn an den Sekretär?", a: "Mit dem Stundenschlag, Miss, zwanzig Jahre lang: erst knipste sie die Lampe an, dann nahm sie die Feder." },
        has4: { q: "Wo standen Sie vor diesem Haus in Diensten?", a: "Ich war Schreiber in einem Londoner Pfandhaus, Miss, bis siebzehn. Ich weiß noch, im Mai sechzehn wurde eine Uhr mit der Gravur „H. L.“ für fünf Shilling versetzt, dabei war sie gut zwanzig Pfund wert.", v: "„H. L.“ Vaters Uhr, für einen Spottpreis hergegeben. Wozu, wenn nicht des Geldes wegen?" }
      },
      objections: {
        ivy3: { reply: "Na schön, am Abend! Den ganzen Nachmittag hat mich die Hausherrin mit Stecknadeln durch den Garten gescheucht, wann hätte ich nähen sollen?", nt: "Mrs Coker hat gelogen", nx: "Um 21:40 war sie mit der Schere an der Lampe, nicht am Nachmittag." },
        ivy4: { reply: "Zwanzig Jahre dachte ich, Charles hätte mich von selbst sitzen lassen. Und heute erzählte sie es beim Tee wie einen Witz, und alle lachten.", nt: "Ivy Hartley", nx: "Mrs Coker ist genau jene Ivy Hartley, deren Verlobung Mrs Marchbank 1912 hintertrieben hat. Das ist das Motiv." }
      },
      wrong: {
        kit: "Kit fuhr um 21:30 zum Bahnhof und kam um 22:20 mit seinem Freund zurück. Und mit einem flachen Schraubenzieher schneidet man kein Zickzack.",
        dora: "Dora trug den ganzen Abend Kakao und Wärmflaschen. Sie hat Mrs Coker an der Lampe gesehen.",
        haslam: "Mr Haslam hat dir selbst gesagt, dass die Lampe um 21:30 funktionierte, und ab Viertel vor zehn schloss er mit Dora oben die Läden. Einen Zickzackschnitt macht eine Schneiderschere, nicht der Schlüsselbund eines Butlers.",
        proof: "Mrs Coker steckt die Schere in die Tasche: „Ich bin nur eine Schneiderin, Miss.“ Beweise, dass sie an der Lampe war, oder wofür sie sich rächen wollte."
      },
      deduce: [
        "Mit einem flachen Schraubenzieher schneidet man kein Zickzack. Wer war nach 21:30 an der Lampe?",
        "Wen sah das Hausmädchen mit einer Schere an der Lampe?",
        "Über wen schrieb die Hausherrin in ihrem unfertigen Brief?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Mrs Coker nähte das Sonntagskleid fertig und fuhr zurück ins Städtchen. Die Hausherrin wurde darin begraben",
        p: [
          "1912 hintertrieb Lavinia Marchbank mit einem anonymen Brief die Verlobung der jungen Schneiderin Ivy Hartley mit ihrem Cousin Charles. Zwanzig Jahre glaubte Ivy, er habe sie von selbst verlassen.",
          "Heute beim Tee erzählte die Hausherrin die Geschichte lachend, und Ivy begriff alles. Am Abend, als der Butler die Lampe ausgeknipst hatte und gegangen war, schnitt sie das Kabel mit ihrer Zackenschere ein, und der Messingfuß stand unter Strom.",
          "Kits Schraubenzieher holte sie aus der offenen Remise und schob ihn unter das Kissen. Punkt zehn, beim Stundenschlag, knipste Mrs Marchbank wie immer die Lampe an."
        ]
      }
    },
    pl: {
      title: "Bicie zegara",
      desc: "Co wieczór, gdy zegar wybijał godzinę, pani domu siadała do listów. W sobotę zdążyła tylko zapalić światło.",
      meta: ["Tillingham Hall, Kent", "9 lipca 1932", "≈ 5 minut"],
      introEyebrow: "Salon · 22:00",
      introTitle: "Gaśnie światło",
      intro: [
        "Po południu pani Lavinia Marchbank wydała w ogrodzie swoje słynne letnie przyjęcie i pół Kentu piło u niej herbatę.",
        "Wieczorem, gdy tylko zegar wybił dziesiątą, zapaliła lampę stojącą przy sekretarzyku i w całym domu zgasło światło. Pani Marchbank leżała przy lampie.",
        "Nocujesz w tym domu, panno Ado Langton. Kto dotykał lampy?"
      ],
      introVoice: "Pachnie przypaloną gumą i różami.",
      clues: {
        c1: { title: "Lampa stojąca", text: "Pod abażurem przewód jest nacięty zygzakiem, gołą miedź dotyka mosiężnej nóżki. Nóżka była pod napięciem.", note: "Przewód lampy był nacięty zygzakiem. Mosiężna nóżka była pod napięciem." },
        c2: { title: "List", text: "Niedokończony list na sekretarzyku, obok koperta z czerwoną pieczęcią! Pani domu pisała do przyjaciółki o swojej krawcowej!", note: "Pani Marchbank pisała, że jej krawcowa to ta sama Ivy Hartley, której zaręczyny z Charlesem zerwała w 1912 roku." },
        c3: { title: "Zegar", text: "Zegar stojący z kurantem. Co wieczór o dziesiątej pani domu szła do sekretarzyka. Ktoś znał ten zwyczaj na pamięć.", note: "Co wieczór o 22:00, gdy zegar bił, pani Marchbank zapalała lampę i siadała do sekretarzyka." },
        c4: { title: "Poduszka", text: "Pod haftowaną poduszką śrubokręt z wypalonym na rączce „K. A.”. Wsunięty w pośpiechu.", note: "Pod poduszką na kanapie: śrubokręt Kita Ainsleya." },
        c5: { title: "Okno", text: "Okno przy sekretarzyku, zasłony upięte, nad ogrodem księżyc. O 22:00 w całym domu naraz zgasło światło: przepaliły się bezpieczniki.", note: "O 22:00 przepaliły się bezpieczniki: pani Marchbank zapaliła lampę i poraził ją prąd." }
      },
      letter: [
        "„Najdroższa Frances, nie uwierzysz:",
        "moja nowa krawcowa to nie kto inny, jak",
        "Ivy Hartley, przed którą w 1912",
        "uratowałam naszego Charlesa. Ona nie wie,",
        "kto wtedy napisał do niego list. L.”"
      ],
      decoys: {
        painting: "Pejzaż nad kredensem: księżyc nad wzgórzami. Rama wypolerowana na błysk.",
        vase: "Róże z ogrodu! Ściął je pan Haslam, a pani znowu go łajała za krzywe łodygi, kochana!",
        chess: "Na stoliku porzucona partia. Czarny król zapędzony w róg.",
        glass: "Szklaneczka na kredensie, na dnie kropla whisky. Pachnie tylko whisky."
      },
      suspects: {
        kit: { name: "Kit Ainsley", role: "Wnuk siostry pani domu, radioamator, 20 lat", intro: "Rozczochrane włosy, kamizelka, kalafonia na palcach. Pot na czole." },
        dora: { name: "Dora Kemble", role: "Pokojówka, 19 lat", intro: "Czepek, czarna sukienka, piegi. Patrzy w podłogę." },
        coker: { name: "Pani Ivy Coker", role: "Krawcowa z miasteczka, 41 lat", intro: "Okulary, ciemnozielona suknia, szpilki w klapie." },
        haslam: { name: "Pan Alfred Haslam", role: "Kamerdyner, 66 lat", intro: "Czarny frak, siwe bokobrody, ręce za plecami." }
      },
      qs: {
        kit1: { q: "Co pan robił wieczorem?", a: "Do 21:30 grałem z Haslamem w szachy, panienko. Potem pojechałem rowerem na stację po kolegę z pociągu o 21:52.", v: "Ciotka babka groziła, że go wydziedziczy za te radiowe graty! Cały Kent wie!" },
        kit2: { q: "Kiedy pan wrócił?", a: "O 22:20, panienko, z kolegą na ramie. Dom stał ciemny, wszyscy biegali ze świecami.", v: "Wyszedł o 21:30, stacja, powrót o 22:20.", nt: "Kit na stacji", nx: "Od 21:30 do 22:20 Kit jeździł na stację po kolegę." },
        kit3: { q: "Czy to pański śrubokręt?", a: "Mój, panienko, ze skrzynki z narzędziami w wozowni, a wozowni u nas nikt nie zamyka. Tylko że jest płaski, a od rana nie miałem go w ręku.", v: "Obraca śrubokręt w palcach, a palce mu drżą.", nt: "Śrubokręt Kita", nx: "Śrubokręt Kita leżał w niezamkniętej wozowni." },
        dor1: { q: "Gdzie pani była wieczorem?", a: "W kuchni i na korytarzach, panienko, nosiłam kakao i termofory, a od 21:45 aż do krzyku zamykałam z panem Haslamem okiennice na górze." },
        dor2: { q: "Kto podchodził do lampy?", a: "O 21:40 niosłam kakao koło drzwi, a pani Coker stała przy lampie z nożyczkami. Powiedziała, że odpruł się chwost przy abażurze.", v: "21:40, lampa, nożyczki.", nt: "Pokojówka o 21:40", nx: "O 21:40 pani Coker stała przy lampie z nożyczkami." },
        dor3: { q: "Jak udało się przyjęcie?", a: "Przy herbacie pani opowiadała, jak w dwunastym roku zerwała czyjeś zaręczyny. Chwaliła się, jakby wygrała puchar na wyścigach.", v: "Jak ktoś umiał popsuć wesele, to właśnie pani! Pół Kentu przez nią ucierpiało!" },
        ivy1: { q: "Gdzie pani była wieczorem?", a: "Na kanapie z szyciem, panienko, zwężałam pani suknię na niedzielę. O 21:45 poszłam do siebie.", v: "Do siebie o 21:45." },
        ivy2: { q: "Od kiedy szyje pani dla pani Marchbank?", a: "Od wiosny, panienko. Płaci hojnie, a grymasi jeszcze hojniej.", v: "Igła ani na chwilę nie zastyga w jej palcach." },
        ivy3: { q: "Czy podchodziła pani do lampy?", a: "Podchodziłam, panienko, odpruł się chwost przy abażurze. [[Tylko przyszyłam go jeszcze po południu, przed przyjęciem, przy dziennym świetle.]]" },
        ivy4: { q: "Znała pani panią Marchbank przed tą wiosną?", a: "Miasteczko mamy małe, panienko, wszyscy ją tu znają z widzenia. [[Ale przed wiosną nasze drogi nigdzie się nie skrzyżowały.]]" },
        has1: { q: "Gdzie pan był wieczorem?", a: "Do 21:30 grałem z panem Kitem w szachy, panienko, za pozwoleniem pani. Potem obchodziłem dom i zamykałem drzwi." },
        has2: { q: "Czy lampa paliła się, kiedy panowie grali?", a: "Paliła się, panienko. O 21:30 sam ją zgasiłem i wszystko było jak zawsze.", v: "21:30: lampa sprawna.", nt: "Lampa o 21:30", nx: "O 21:30 kamerdyner zgasił lampę. Była sprawna." },
        has3: { q: "Czy pani zawsze siadała do sekretarzyka o dziesiątej?", a: "Z biciem zegara, panienko, dwadzieścia lat z rzędu: najpierw zapalała lampę, potem brała pióro." },
        has4: { q: "Gdzie pan służył przed tym domem?", a: "Byłem urzędnikiem w londyńskim lombardzie, panienko, do 1917 roku. Pamiętam, w maju 1916 zastawiono zegarek z grawerem „H. L.” za pięć szylingów, a był wart dobre dwadzieścia funtów.", v: "„H. L.” Zegarek ojca oddany za bezcen. Po co, jeśli nie dla pieniędzy?" }
      },
      objections: {
        ivy3: { reply: "No dobrze, wieczorem! Całe popołudnie pani ganiała mnie ze szpilkami po ogrodzie, kiedy miałam szyć?", nt: "Pani Coker skłamała", nx: "O 21:40 była przy lampie z nożyczkami, nie po południu." },
        ivy4: { reply: "Dwadzieścia lat myślałam, że Charles porzucił mnie sam. A ona dziś opowiadała to przy herbacie jak anegdotę i wszyscy się śmiali.", nt: "Ivy Hartley", nx: "Pani Coker to ta sama Ivy Hartley, której zaręczyny pani Marchbank zerwała w 1912 roku. Oto motyw." }
      },
      wrong: {
        kit: "Kit o 21:30 pojechał na stację i wrócił o 22:20 z kolegą. A płaskim śrubokrętem nie natniesz przewodu zygzakiem.",
        dora: "Dora cały wieczór nosiła kakao i termofory. To ona widziała panią Coker przy lampie.",
        haslam: "Pan Haslam sam ci powiedział, że o 21:30 lampa była sprawna, a od 21:45 zamykał z Dorą okiennice na górze. Zygzak na przewodzie zostawiają nożyce krawcowej, nie klucze kamerdynera.",
        proof: "Pani Coker chowa nożyczki do kieszeni: „Jestem zwykłą krawcową, panienko”. Udowodnij, że była przy lampie, albo za co miała się mścić."
      },
      deduce: [
        "Płaskim śrubokrętem nie zrobisz zygzaka. Kto był przy lampie po 21:30?",
        "Kogo pokojówka widziała przy lampie z nożyczkami?",
        "O kim pani domu pisała w niedokończonym liście?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Pani Coker dokończyła niedzielną suknię i wróciła do miasteczka. W tej sukni pochowano panią domu",
        p: [
          "W 1912 roku Lavinia Marchbank anonimowym listem zerwała zaręczyny młodej krawcowej Ivy Hartley ze swoim kuzynem Charlesem. Przez dwadzieścia lat Ivy myślała, że porzucił ją z własnej woli.",
          "Dziś przy herbacie pani domu ze śmiechem opowiedziała tę historię i Ivy wszystko zrozumiała. Wieczorem, gdy kamerdyner zgasił lampę i wyszedł, nacięła przewód krawieckimi nożycami ząbkowanymi i mosiężna nóżka znalazła się pod napięciem.",
          "Śrubokręt Kita wzięła z niezamkniętej wozowni i wsunęła pod poduszkę. Punktualnie o dziesiątej, gdy zegar bił, pani Marchbank jak zawsze zapaliła lampę."
        ]
      }
    }
  }
});
