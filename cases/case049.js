window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "049", n: 49, scene: "train", look: "snow", searchTime: 80, culprit: "bramble",
  clues: {
    c1: { prop: "glass", voice: "logic" },
    c2: { prop: "newspaper", voice: "gossip", puzzle: true },
    c3: { prop: "gloves", voice: "logic" },
    c4: { prop: "hatbox", voice: "intuition" },
    c5: { prop: "bottle", voice: "intuition" },
  },
  decoys: { window: "intuition", lamp: "logic", suitcase: "gossip", ticket: "logic" },
  suspects: [
    { id: "june", color: "#e7a2b9", look: { hair: "bob", hairColor: "#c03a2a", outfit: "coat", outfitColor: "#3a5a7a", extras: ["sweat", "earrings"], female: true, lips: "#c03050" }, qs: [
        { id: "jun1", voice: "gossip" },
        { id: "jun2", voice: "logic" },
        { id: "jun3" },
    ] },
    { id: "tope", color: "#d1a94e", look: { hair: "grey-short", hairColor: "#a8a8a8", outfit: "uniform", outfitColor: "#1e2a4a", extras: ["cap", "mustache"] }, qs: [
        { id: "top1" },
        { id: "top2", voice: "logic" },
        { id: "top3" },
        { id: "top4", voice: "intuition" },
    ] },
    { id: "bramble", color: "#c7c7c7", look: { hair: "bun", hairColor: "#e0e0e0", outfit: "coat", outfitColor: "#5a3a4a", extras: ["glasses", "hat"], female: true }, qs: [
        { id: "bra1", voice: "intuition" },
        { id: "bra2" },
        { id: "bra3", needs: "c4" },
    ] },
    { id: "pippin", color: "#8cc79a", look: { hair: "slick", hairColor: "#6a4a2a", outfit: "suit", outfitColor: "#5a4a2a", extras: ["bowtie"] }, qs: [
        { id: "pip1", voice: "logic" },
        { id: "pip2", voice: "intuition" },
        { id: "pip3", needs: "c3", voice: "gossip" },
    ] },
  ],
  objections: { bra2: { evidence: "top2" }, bra3: { evidence: "c1" } },
  proof: ["top2", "pip2", "c1", "c4", "c2", "obj:bra2", "obj:bra3"],
  text: {
    ru: {
      title: "Сладкое какао",
      desc: "Старый суконщик всю дорогу ворчал на снег и сквозняки, а какао похвалил. Через десять минут он уже не дышал.",
      meta: ["Экспресс Йорк — Лондон", "2 января 1933", "≈ 5 минут"],
      introEyebrow: "Экспресс · 19:40",
      introTitle: "Снег за окном",
      intro: [
        "После праздников экспресс вёз пассажиров домой сквозь метель. Мистер Октавиус Скин ехал в Лондон на суд: он хотел отобрать внука у невестки.",
        "В 19:40 он схватился за горло и упал на сиденье. Все в купе знали, что ему нельзя даже крошки миндаля.",
        "Вы едете в соседнем купе, мисс Ада Лэнгтон. Откуда взялся миндаль?"
      ],
      introVoice: "Пахнет какао, мокрой шерстью и снегом.",
      clues: {
        c1: { title: "Стакан", text: "Стакан мистера Скина, на дне какао. Пахнет сладко, миндалём: миндальный сироп. Для него и капля миндаля смертельна.", note: "В какао мистера Скина — миндальный сироп." },
        c2: { title: "Газета", text: "Газета на сиденье, судебная хроника обведена! А на полях мистер Скин что-то царапал про какую-то бабку!", note: "«Вестник Уэнсли»: 4 января суд «Скин против Скин» об опеке над Питером Скином, 6 лет. На полях рукой мистера Скина: «Бабку Брэмбл к мальчику не подпускать»." },
        c3: { title: "Перчатка", text: "В перчатке мистера Скина обёртка марципана фирмы «Пиппин и сыновья». Марципан — это миндаль. Выходит, конфету он съел сам.", note: "В перчатке мистера Скина — обёртка от марципана фирмы мистера Пиппина." },
        c4: { title: "Шляпная коробка", text: "Под вязанием пузырёк оршада и недовязанный полосатый шарфик, как раз на шестилетнего.", note: "В шляпной коробке миссис Брэмбл — почти пустой пузырёк оршада, миндального сиропа." },
        c5: { title: "Бутылка", text: "Бутылка бренди мистера Скина не откупорена. Он берёг её к приезду.", note: "Бренди мистер Скин не пил. За вечер он выпил только какао." }
      },
      letter: [
        "«Вестник Уэнсли», 31 декабря:",
        "«4 января в Лондоне слушается дело",
        "„Скин против Скин“ об опеке",
        "над малолетним Питером Скином».",
        "На полях: «Бабку Брэмбл к мальчику не подпускать. О. С.»"
      ],
      decoys: {
        window: "Снег залепил стекло. Поезд еле ползёт.",
        lamp: "Светильник горит ровно, стекло без копоти.",
        suitcase: "Чемодан мистера Скина: сукно, сукно и опять сукно! Шерстяной король, дорогуша!",
        ticket: "Билет мистера Скина: Йорк — Лондон, первый класс."
      },
      suspects: {
        june: { name: "Миссис Джун Скин", role: "Невестка, танцовщица варьете, 28 лет", intro: "Рыжее каре, синее пальто, испарина на висках." },
        tope: { name: "Альберт Тоуп", role: "Кондуктор, 55 лет", intro: "Фуражка, седые усы, свисток на цепочке." },
        bramble: { name: "Миссис Хэтти Брэмбл", role: "Мать Джун, 66 лет", intro: "Очки, шляпка, спицы в руках. Улыбается внуку." },
        pippin: { name: "Мистер Сэмюэл Пиппин", role: "Коммивояжёр кондитерской фирмы, 45 лет", intro: "Бабочка, гладкий пробор, саквояж с образцами." }
      },
      qs: {
        jun1: { q: "Как вы ладили со свёкром?", a: "Он хотел отнять у меня Питера, мисс. Четвёртого суд: я танцую в варьете, а для мистера Скина это хуже воровства.", v: "Танцовщица и шерстяной король! Ну, тут без суда никак!" },
        jun2: { q: "Где вы были с четверти восьмого?", a: "В коридоре, у окна, с Питером: он впервые видел такой снег. Кондуктор проходил мимо дважды.", v: "С 19:15 в коридоре, у окна.", nt: "Джун в коридоре", nx: "С 19:15 миссис Скин стояла с сыном в коридоре у окна." },
        jun3: { q: "Ваша мать любит Питера?", a: "Мама связала ему за праздники три шарфа и всё грозится связать четвёртый." },
        top1: { q: "Что вы видели вечером?", a: "Обходил вагон, мисс, как положено, в 19:20 и в 19:35. Метель, поезд опаздывает на час." },
        top2: { q: "Кто был в коридоре?", a: "Только миссис Скин с мальчонкой у окна, мисс, оба раза. А коммивояжёр с 19:20 сидел в вагоне-ресторане, я сам ему место показывал.", v: "Коридор — миссис Скин и мальчик. Мистер Пиппин — в ресторане.", nt: "Кондуктор в 19:20 и 19:35", nx: "В коридоре стояли только миссис Скин с сыном. Мистер Пиппин с 19:20 был в вагоне-ресторане." },
        top3: { q: "Мистер Скин на что-нибудь жаловался?", a: "На всё, мисс: на снег, на сквозняк и на чай. Только какао похвалил, первый раз за дорогу." },
        top4: { q: "Давно служите на линии?", a: "Тридцать лет, мисс. В январе всегда кто-нибудь едет к судье, а не к ёлке.", v: "Он поправляет фуражку и долго смотрит на снег." },
        bra1: { q: "Вы едете с семьёй?", a: "С дочкой и внуком, мисс, домой после Рождества у сестры в Йорке. Питер всю дорогу считает снеговиков за окном.", v: "Она вяжет внуку шарфик и всё время ему улыбается." },
        bra2: { q: "Где вы были с четверти восьмого?", a: "В купе, мисс, за вязанием, у меня петли убегают. [[А с мистером Скином сидел мистер Пиппин и угощал его своими конфетами.]]" },
        bra3: { q: "Это ваш сироп?", a: "Пузырёк мой, мисс, внуку на сладкое. [[Только в какао я его не лила: в термосе у меня простое какао на молоке.]]" },
        pip1: { q: "Где вы были после семи?", a: "С 19:20 в вагоне-ресторане, мисс: чай с лимоном и кроссворд, до самого переполоха.", v: "В ресторане с 19:20." },
        pip2: { q: "Кто разливал какао?", a: "Миссис Брэмбл, мисс, всем из своего термоса, такая заботливая. Я отказался: двадцать лет торгую конфетами и сладкого видеть не могу.", v: "Он морщится, вспоминая какао.", nt: "Какао", nx: "Какао всем в купе наливала миссис Брэмбл из своего термоса." },
        pip3: { q: "Это ваша обёртка?", a: "Моей фирмы, мисс. Мальчонке я дал пару марципанов ещё в Йорке, а обёртки он отдал бабушке: она складывает их на закладки.", v: "Марципан? Да мистер Скин орехов боялся пуще чумы, дорогуша! Сам бы в жизни не взял!" }
      },
      objections: {
        bra2: { reply: "Ну, может, и не мистер Пиппин… Я старуха, мисс, у меня всё путается: кто где сидел, кто куда выходил.", nt: "Миссис Брэмбл солгала", nx: "Мистер Пиппин с 19:20 был в ресторане. С мистером Скином в купе оставалась она одна." },
        bra3: { reply: "Капельку, для вкуса! Он же сам похвалил. Почём мне было знать, что от сиропа такое бывает?", nt: "Сироп в какао", nx: "Миндальный сироп был в какао из термоса миссис Брэмбл." }
      },
      wrong: {
        june: "Джун могла потерять сына в суде, но с 19:15 стояла с ним в коридоре: кондуктор видел их дважды.",
        tope: "Кондуктор только обходил вагон. Это он и видел, кто где был с четверти восьмого.",
        pippin: "Мистер Пиппин с 19:20 сидел в ресторане. А обёртки от его марципана мальчик отдал бабушке.",
        proof: "Миссис Брэмбл не поднимает глаз от вязания: «Я всего лишь бабушка, мисс». Докажите, что она осталась с ним одна, или откуда в какао миндаль."
      },
      deduce: [
        "Мистер Скин боялся орехов как огня. Стал бы он сам есть марципан?",
        "Кто разливал какао и кто остался с ним в купе?",
        "Кого мистер Скин не хотел подпускать к внуку?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Суд четвёртого января не состоялся. Миссис Брэмбл довязала Питеру четвёртый шарф",
        p: [
          "Октавиус Скин, шерстяной король, ехал в Лондон отсудить у невестки маленького Питера. Бабушку Брэмбл он к внуку подпускать не собирался.",
          "Все в купе знали, что миндаль для мистера Скина смертелен. Когда Джун увела мальчика к окну, а коммивояжёр ушёл в ресторан, миссис Брэмбл подлила во второй стаканчик какао миндальный сироп.",
          "Обёртку от марципана, которую внук отдал ей на закладку, она сунула в перчатку покойного. Но мистер Скин орехов в рот не брал, а пузырёк сиропа так и лежал у неё под вязанием."
        ]
      }
    },
    en: {
      title: "Sweet Cocoa",
      desc: "All the way the old cloth merchant grumbled about snow and draughts, and he praised only the cocoa. Ten minutes later he had stopped breathing.",
      meta: ["The York to London express", "2 January 1933", "≈ 5 minutes"],
      introEyebrow: "Express · 7:40 pm",
      introTitle: "Snow at the window",
      intro: [
        "After the holidays the express was carrying people home through a blizzard. Mr Octavius Skene was going to London for a court case: he meant to take his grandson away from his daughter-in-law.",
        "At 7:40 he clutched at his throat and fell back on the seat. Everyone in the compartment knew he couldn't touch so much as a crumb of almond.",
        "You're in the next compartment, Miss Ada Langton. Where did the almond come from?"
      ],
      introVoice: "It smells of cocoa, damp wool and snow.",
      clues: {
        c1: { title: "Glass", text: "Mr Skene's glass, cocoa in the bottom. A sweet smell of almonds: almond syrup. For him even a drop of almond was deadly.", note: "Mr Skene's cocoa contained almond syrup." },
        c2: { title: "Newspaper", text: "A newspaper on the seat with the court report ringed! And Mr Skene scribbled something in the margin about some granny!", note: "The Wensley Herald: on 4 January the case of Skene v. Skene, custody of Peter Skene, aged 6. In the margin, in Mr Skene's hand: “Keep the Bramble woman away from the boy.”" },
        c3: { title: "Glove", text: "In Mr Skene's glove, a marzipan wrapper from Pippin & Sons. Marzipan is almond. So he ate the sweet himself.", note: "In Mr Skene's glove: a marzipan wrapper from Mr Pippin's firm." },
        c4: { title: "Hatbox", text: "Under the knitting, a little bottle of orgeat and a half-finished striped scarf, just the size for a six-year-old.", note: "In Mrs Bramble's hatbox: a nearly empty bottle of orgeat, almond syrup." },
        c5: { title: "Bottle", text: "Mr Skene's bottle of brandy hasn't been opened. He was saving it for when he arrived.", note: "Mr Skene drank no brandy. All evening he had only cocoa." }
      },
      letter: [
        "The Wensley Herald, 31 December:",
        "“On 4 January in London the case of",
        "Skene v. Skene, concerning the custody",
        "of the infant Peter Skene, will be heard.”",
        "In the margin: “Keep the Bramble woman away from the boy. O. S.”"
      ],
      decoys: {
        window: "Snow plastered over the glass. The train is crawling.",
        lamp: "The lamp burns steadily, the glass free of soot.",
        suitcase: "Mr Skene's suitcase: cloth, cloth and more cloth! The wool king, darling!",
        ticket: "Mr Skene's ticket: York to London, first class."
      },
      suspects: {
        june: { name: "Mrs June Skene", role: "Daughter-in-law, music-hall dancer, 28", intro: "Red bob, a blue coat, sweat at her temples." },
        tope: { name: "Albert Tope", role: "Guard, 55", intro: "Cap, grey moustache, a whistle on a chain." },
        bramble: { name: "Mrs Hattie Bramble", role: "June's mother, 66", intro: "Spectacles, a little hat, knitting needles. Smiles at her grandson." },
        pippin: { name: "Mr Samuel Pippin", role: "Confectionery traveller, 45", intro: "Bow tie, sleek parting, a case of samples." }
      },
      qs: {
        jun1: { q: "How did you get on with your father-in-law?", a: "He wanted to take Peter from me, miss. The hearing's on the fourth: I dance in the music hall, and to Mr Skene that's worse than thieving.", v: "A dancer and the wool king! No wonder it came to court!" },
        jun2: { q: "Where were you from a quarter past seven?", a: "In the corridor, at the window, with Peter: he'd never seen snow like it. The guard went past twice.", v: "In the corridor at the window from 7:15.", nt: "June in the corridor", nx: "From 7:15 Mrs Skene stood with her son at the corridor window." },
        jun3: { q: "Is your mother fond of Peter?", a: "Mother's knitted him three scarves over the holidays and keeps threatening a fourth." },
        top1: { q: "What did you see this evening?", a: "I walked the coach, miss, as is proper, at 7:20 and at 7:35. In this blizzard we're an hour late." },
        top2: { q: "Who was in the corridor?", a: "Only Mrs Skene and the little lad at the window, miss, both times. And the traveller was in the dining car from 7:20; I showed him to his seat myself.", v: "The corridor: Mrs Skene and the boy. Mr Pippin: in the dining car.", nt: "The guard at 7:20 and 7:35", nx: "Only Mrs Skene and her son stood in the corridor. Mr Pippin was in the dining car from 7:20." },
        top3: { q: "Did Mr Skene complain of anything?", a: "Of everything, miss: the snow, the draught and the tea. Except the cocoa, miss: he praised that, first time all journey." },
        top4: { q: "Have you been on the line long?", a: "Thirty years, miss. In January there's always somebody travelling to a judge, not a Christmas tree.", v: "He straightens his cap and looks at the snow for a long while." },
        bra1: { q: "Are you travelling with family?", a: "With my daughter and grandson, miss, home after Christmas at my sister's in York. Peter's been counting snowmen out of the window all the way.", v: "She knits her grandson a scarf and keeps smiling at him." },
        bra2: { q: "Where were you from a quarter past seven?", a: "In the compartment, miss, at my knitting; I keep dropping stitches. [[And Mr Pippin was sitting with Mr Skene, treating him to his sweets.]]" },
        bra3: { q: "Is this your syrup?", a: "The bottle's mine, miss, a treat for my grandson. [[Only I never put it in the cocoa: my flask is plain cocoa made with milk.]]" },
        pip1: { q: "Where were you after seven?", a: "In the dining car from 7:20, miss: lemon tea and the crossword, right up until the commotion.", v: "In the dining car from 7:20." },
        pip2: { q: "Who poured the cocoa?", a: "Mrs Bramble, miss, for everyone, from her own flask; such a thoughtful lady. I said no: twenty years selling sweets and I can't stand anything sugary.", v: "He winces at the thought of the cocoa.", nt: "The cocoa", nx: "Mrs Bramble poured cocoa for everyone in the compartment from her own flask." },
        pip3: { q: "Is this your wrapper?", a: "It's my firm's, miss. I gave the little lad a couple of marzipans back in York, and he gave the wrappers to his granny: she keeps them for bookmarks.", v: "Marzipan? Mr Skene feared nuts worse than the plague, darling! He'd never have taken one himself!" }
      },
      objections: {
        bra2: { reply: "Well, perhaps not Mr Pippin… I'm an old woman, miss, I get it all muddled: who sat where, who went out when.", nt: "Mrs Bramble lied", nx: "Mr Pippin was in the dining car from 7:20. She was the only one left in the compartment with Mr Skene." },
        bra3: { reply: "Just a drop, for the taste! He praised it himself. How was I to know syrup could do such a thing?", nt: "Syrup in the cocoa", nx: "The almond syrup was in the cocoa from Mrs Bramble's flask." }
      },
      wrong: {
        june: "June stood to lose her son in court, but from 7:15 she was in the corridor with him: the guard saw them twice.",
        tope: "The guard only walked the coach. He's the one who saw who was where from a quarter past seven.",
        pippin: "Mr Pippin sat in the dining car from 7:20. And the boy gave the wrappers from his marzipan to his granny.",
        proof: "Mrs Bramble doesn't look up from her knitting: “I'm only a granny, miss.” Prove she was left alone with him, or how almond got into the cocoa."
      },
      deduce: [
        "Mr Skene feared nuts like fire. Would he have eaten marzipan himself?",
        "Who poured the cocoa, and who stayed in the compartment with him?",
        "Whom did Mr Skene want kept away from his grandson?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "The hearing on the fourth of January never took place. Mrs Bramble finished Peter's fourth scarf",
        p: [
          "Octavius Skene, the wool king, was on his way to London to win little Peter away from his daughter-in-law. He had no intention of letting Granny Bramble near the boy.",
          "Everyone in the compartment knew almond was deadly to Mr Skene. When June took the boy to the window and the traveller went to the dining car, Mrs Bramble put almond syrup in the second cup of cocoa.",
          "The marzipan wrapper her grandson had given her for a bookmark she pushed into the dead man's glove. But Mr Skene never touched nuts, and the bottle of syrup was still lying under her knitting."
        ]
      }
    },
    es: {
      title: "Cacao dulce",
      desc: "Todo el viaje el viejo pañero refunfuñó por la nieve y las corrientes, y solo elogió el cacao. Diez minutos después ya no respiraba.",
      meta: ["Expreso York — Londres", "2 de enero de 1933", "≈ 5 minutos"],
      introEyebrow: "Expreso · 19:40",
      introTitle: "Nieve en la ventanilla",
      intro: [
        "Pasadas las fiestas, el expreso llevaba a la gente a casa entre la ventisca. El señor Octavius Skene iba a Londres a un juicio: quería quitarle el nieto a su nuera.",
        "A las 19:40 se llevó la mano a la garganta y cayó sobre el asiento. Todos en el compartimento sabían que no podía probar ni una miga de almendra.",
        "Viajas en el compartimento de al lado, señorita Ada Langton. ¿De dónde salió la almendra?"
      ],
      introVoice: "Huele a cacao, a lana mojada y a nieve.",
      clues: {
        c1: { title: "Vaso", text: "El vaso del señor Skene, con cacao en el fondo. Huele dulce, a almendra: jarabe de almendra. Para él, una sola gota de almendra era mortal.", note: "En el cacao del señor Skene había jarabe de almendra." },
        c2: { title: "Periódico", text: "¡Un periódico en el asiento con la crónica judicial rodeada! ¡Y el señor Skene garabateó algo en el margen sobre una abuela!", note: "El Heraldo de Wensley: el 4 de enero, juicio Skene contra Skene por la custodia de Peter Skene, 6 años. En el margen, de puño del señor Skene: «A la Bramble, lejos del niño»." },
        c3: { title: "Guante", text: "En el guante del señor Skene, el envoltorio de un mazapán de Pippin e Hijos. El mazapán es almendra. O sea, que se comió el dulce él mismo.", note: "En el guante del señor Skene: el envoltorio de un mazapán de la casa del señor Pippin." },
        c4: { title: "Sombrerera", text: "Bajo la labor de punto, un frasquito de jarabe de almendra y una bufanda de rayas a medio hacer, justo para un niño de seis años.", note: "En la sombrerera de la señora Bramble: un frasco casi vacío de jarabe de almendra." },
        c5: { title: "Botella", text: "La botella de coñac del señor Skene está sin abrir. La guardaba para la llegada.", note: "El señor Skene no bebió coñac. En toda la tarde solo tomó cacao." }
      },
      letter: [
        "El Heraldo de Wensley, 31 de diciembre:",
        "«El 4 de enero se verá en Londres el caso",
        "Skene contra Skene, sobre la custodia",
        "del menor Peter Skene».",
        "En el margen: «A la Bramble, lejos del niño. O. S.»"
      ],
      decoys: {
        window: "La nieve tapa el cristal. El tren va a paso de tortuga.",
        lamp: "La lámpara arde con calma, el cristal sin hollín.",
        suitcase: "La maleta del señor Skene: ¡paño, paño y más paño! ¡El rey de la lana, querida!",
        ticket: "El billete del señor Skene: York — Londres, primera clase."
      },
      suspects: {
        june: { name: "Señora June Skene", role: "Nuera, bailarina de variedades, 28 años", intro: "Melena corta pelirroja, abrigo azul, sudor en las sienes." },
        tope: { name: "Albert Tope", role: "Revisor, 55 años", intro: "Gorra, bigote gris, silbato con cadena." },
        bramble: { name: "Señora Hattie Bramble", role: "Madre de June, 66 años", intro: "Gafas, sombrerito, agujas de punto. Le sonríe a su nieto." },
        pippin: { name: "Señor Samuel Pippin", role: "Viajante de una casa de dulces, 45 años", intro: "Pajarita, raya impecable, maletín de muestras." }
      },
      qs: {
        jun1: { q: "¿Cómo se llevaba con su suegro?", a: "Quería quitarme a Peter, señorita. El juicio es el día cuatro: yo bailo en las variedades, y para el señor Skene eso es peor que robar.", v: "¡Una bailarina y el rey de la lana! ¡Cómo no iba a acabar en juicio!" },
        jun2: { q: "¿Dónde estuvo desde las siete y cuarto?", a: "En el pasillo, junto a la ventanilla, con Peter: nunca había visto tanta nieve. El revisor pasó dos veces.", v: "Desde las 19:15 en el pasillo, junto a la ventanilla.", nt: "June en el pasillo", nx: "Desde las 19:15 la señora Skene estuvo con su hijo junto a la ventanilla del pasillo." },
        jun3: { q: "¿Su madre quiere a Peter?", a: "Mamá le ha tejido tres bufandas en estas fiestas y amenaza con tejerle la cuarta." },
        top1: { q: "¿Qué vio esta noche?", a: "Recorrí el vagón, señorita, como es debido, a las 19:20 y a las 19:35. Con esta ventisca vamos una hora tarde." },
        top2: { q: "¿Quién estaba en el pasillo?", a: "Solo la señora Skene con el chiquillo junto a la ventanilla, señorita, las dos veces. Y el viajante estaba desde las 19:20 en el vagón restaurante; yo mismo le acompañé a su mesa.", v: "El pasillo: la señora Skene y el niño. El señor Pippin: en el restaurante.", nt: "El revisor a las 19:20 y 19:35", nx: "En el pasillo solo estaban la señora Skene y su hijo. El señor Pippin estaba en el vagón restaurante desde las 19:20." },
        top3: { q: "¿Se quejó de algo el señor Skene?", a: "De todo, señorita: de la nieve, de la corriente y del té. Solo elogió el cacao, por primera vez en todo el viaje." },
        top4: { q: "¿Lleva mucho en la línea?", a: "Treinta años, señorita. En enero siempre hay alguien que viaja a ver a un juez, no un árbol de Navidad.", v: "Se ajusta la gorra y se queda un rato mirando la nieve." },
        bra1: { q: "¿Viaja con su familia?", a: "Con mi hija y mi nieto, señorita, de vuelta a casa tras pasar la Navidad con mi hermana en York. Peter lleva todo el viaje contando muñecos de nieve.", v: "Le teje a su nieto una bufanda y no deja de sonreírle." },
        bra2: { q: "¿Dónde estuvo desde las siete y cuarto?", a: "En el compartimento, señorita, con mi punto; se me escapan los puntos. [[Y con el señor Skene estaba el señor Pippin, convidándole a sus dulces.]]" },
        bra3: { q: "¿Es suyo este jarabe?", a: "El frasco es mío, señorita, un capricho para mi nieto. [[Pero no lo eché en el cacao: en mi termo llevo cacao corriente, con leche.]]" },
        pip1: { q: "¿Dónde estuvo después de las siete?", a: "En el vagón restaurante desde las 19:20, señorita: té con limón y el crucigrama, hasta el revuelo.", v: "En el restaurante desde las 19:20." },
        pip2: { q: "¿Quién sirvió el cacao?", a: "La señora Bramble, señorita, a todos, de su propio termo; una señora muy atenta. Yo dije que no: veinte años vendiendo dulces y no soporto nada azucarado.", v: "Hace una mueca al recordar el cacao.", nt: "El cacao", nx: "La señora Bramble sirvió el cacao a todos en el compartimento de su propio termo." },
        pip3: { q: "¿Es suyo este envoltorio?", a: "De mi casa, señorita. Al chiquillo le di un par de mazapanes en York, y los envoltorios se los dio a su abuela: los guarda para marcapáginas.", v: "¿Mazapán? ¡Si el señor Skene les tenía más miedo a las nueces que a la peste, querida! ¡Jamás lo habría cogido él!" }
      },
      objections: {
        bra2: { reply: "Bueno, quizá no fuera el señor Pippin… Soy una anciana, señorita, todo se me mezcla: quién se sentó dónde, quién salió cuándo.", nt: "La señora Bramble mintió", nx: "El señor Pippin estaba en el restaurante desde las 19:20. En el compartimento con el señor Skene se quedó ella sola." },
        bra3: { reply: "¡Una gotita, para el sabor! Si él mismo lo elogió. ¿Cómo iba yo a saber que un jarabe hace eso?", nt: "Jarabe en el cacao", nx: "El jarabe de almendra estaba en el cacao del termo de la señora Bramble." }
      },
      wrong: {
        june: "June iba a perder a su hijo en el juicio, pero desde las 19:15 estuvo con él en el pasillo: el revisor los vio dos veces.",
        tope: "El revisor solo recorría el vagón. Fue él quien vio quién estaba dónde desde las siete y cuarto.",
        pippin: "El señor Pippin estaba en el restaurante desde las 19:20. Y los envoltorios de su mazapán el niño se los dio a su abuela.",
        proof: "La señora Bramble no levanta la vista del punto: «Solo soy una abuela, señorita». Demuestra que se quedó a solas con él, o de dónde salió la almendra del cacao."
      },
      deduce: [
        "El señor Skene temía las nueces como al fuego. ¿Se habría comido él un mazapán?",
        "¿Quién sirvió el cacao y quién se quedó con él en el compartimento?",
        "¿A quién no quería el señor Skene cerca de su nieto?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "El juicio del 4 de enero no se celebró. La señora Bramble le terminó a Peter la cuarta bufanda",
        p: [
          "Octavius Skene, el rey de la lana, iba a Londres a quitarle al pequeño Peter a su nuera. No pensaba dejar que la abuela Bramble se acercara al niño.",
          "Todos en el compartimento sabían que la almendra era mortal para el señor Skene. Cuando June llevó al niño a la ventanilla y el viajante se fue al restaurante, la señora Bramble echó jarabe de almendra en la segunda taza de cacao.",
          "El envoltorio de mazapán que su nieto le había dado para marcapáginas lo metió en el guante del muerto. Pero el señor Skene no probaba las nueces, y el frasco de jarabe seguía bajo su labor de punto."
        ]
      }
    },
    de: {
      title: "Süßer Kakao",
      desc: "Die ganze Fahrt schimpfte der alte Tuchhändler über Schnee und Zugluft, nur den Kakao lobte er. Zehn Minuten später atmete er nicht mehr.",
      meta: ["Expresszug York — London", "2. Januar 1933", "≈ 5 Minuten"],
      introEyebrow: "Express · 19:40",
      introTitle: "Schnee am Fenster",
      intro: [
        "Nach den Feiertagen brachte der Express die Leute durch den Schneesturm nach Hause. Mr Octavius Skene fuhr zu einem Prozess nach London: Er wollte seiner Schwiegertochter den Enkel wegnehmen.",
        "Um 19:40 griff er sich an die Kehle und sank auf den Sitz. Alle im Abteil wussten, dass er nicht einmal einen Krümel Mandel vertrug.",
        "Du fährst im Nachbarabteil, Miss Ada Langton. Woher kam die Mandel?"
      ],
      introVoice: "Es riecht nach Kakao, nasser Wolle und Schnee.",
      clues: {
        c1: { title: "Glas", text: "Mr Skenes Glas, unten Kakao. Es riecht süß nach Mandeln: Mandelsirup. Für ihn war schon ein Tropfen Mandel tödlich.", note: "In Mr Skenes Kakao war Mandelsirup." },
        c2: { title: "Zeitung", text: "Eine Zeitung auf dem Sitz, der Gerichtsbericht eingekreist! Und Mr Skene hat am Rand etwas über eine Großmutter gekritzelt!", note: "Wensley-Bote: Am 4. Januar Prozess Skene gegen Skene um das Sorgerecht für Peter Skene, 6 Jahre. Am Rand, in Mr Skenes Hand: „Die Bramble vom Jungen fernhalten.“" },
        c3: { title: "Handschuh", text: "In Mr Skenes Handschuh das Papier eines Marzipans von Pippin & Söhne. Marzipan ist Mandel. Also hat er das Konfekt selbst gegessen.", note: "In Mr Skenes Handschuh: das Papier eines Marzipans aus Mr Pippins Firma." },
        c4: { title: "Hutschachtel", text: "Unter dem Strickzeug ein Fläschchen Orgeat und ein halbfertiger gestreifter Schal, gerade recht für einen Sechsjährigen.", note: "In Mrs Brambles Hutschachtel: ein fast leeres Fläschchen Orgeat, Mandelsirup." },
        c5: { title: "Flasche", text: "Mr Skenes Flasche Brandy ist nicht geöffnet. Er hob sie für die Ankunft auf.", note: "Mr Skene trank keinen Brandy. Den ganzen Abend nur Kakao." }
      },
      letter: [
        "Wensley-Bote, 31. Dezember:",
        "„Am 4. Januar wird in London der Fall",
        "Skene gegen Skene um das Sorgerecht",
        "für den minderjährigen Peter Skene verhandelt.“",
        "Am Rand: „Die Bramble vom Jungen fernhalten. O. S.“"
      ],
      decoys: {
        window: "Schnee klebt am Glas. Der Zug kriecht nur noch.",
        lamp: "Die Lampe brennt ruhig, das Glas ohne Ruß.",
        suitcase: "Mr Skenes Koffer: Tuch, Tuch und noch mal Tuch! Der Wollkönig, Schätzchen!",
        ticket: "Mr Skenes Fahrkarte: York — London, erste Klasse."
      },
      suspects: {
        june: { name: "Mrs June Skene", role: "Schwiegertochter, Varietétänzerin, 28", intro: "Roter Bubikopf, blauer Mantel, Schweiß an den Schläfen." },
        tope: { name: "Albert Tope", role: "Schaffner, 55", intro: "Mütze, grauer Schnurrbart, Pfeife an der Kette." },
        bramble: { name: "Mrs Hattie Bramble", role: "Junes Mutter, 66", intro: "Brille, Hütchen, Stricknadeln. Lächelt ihrem Enkel zu." },
        pippin: { name: "Mr Samuel Pippin", role: "Handlungsreisender für Süßwaren, 45", intro: "Fliege, glatter Scheitel, Musterkoffer." }
      },
      qs: {
        jun1: { q: "Wie kamen Sie mit Ihrem Schwiegervater aus?", a: "Er wollte mir Peter wegnehmen, Miss. Am Vierten ist die Verhandlung: Ich tanze im Varieté, und für Mr Skene ist das schlimmer als Stehlen.", v: "Eine Tänzerin und der Wollkönig! Kein Wunder, dass das vor Gericht ging!" },
        jun2: { q: "Wo waren Sie ab Viertel nach sieben?", a: "Im Gang, am Fenster, mit Peter: So einen Schnee hatte er noch nie gesehen. Der Schaffner kam zweimal vorbei.", v: "Ab 19:15 im Gang, am Fenster.", nt: "June im Gang", nx: "Ab 19:15 stand Mrs Skene mit ihrem Sohn am Gangfenster." },
        jun3: { q: "Hat Ihre Mutter Peter gern?", a: "Mutter hat ihm über die Feiertage drei Schals gestrickt und droht schon mit dem vierten." },
        top1: { q: "Was haben Sie heute Abend gesehen?", a: "Ich bin den Wagen abgegangen, Miss, wie es sich gehört, um 19:20 und um 19:35. Bei dem Sturm haben wir eine Stunde Verspätung." },
        top2: { q: "Wer war im Gang?", a: "Nur Mrs Skene mit dem Kleinen am Fenster, Miss, beide Male. Und der Reisende saß ab 19:20 im Speisewagen, ich habe ihn selbst an seinen Platz gebracht.", v: "Im Gang: Mrs Skene und der Junge. Mr Pippin: im Speisewagen.", nt: "Der Schaffner um 19:20 und 19:35", nx: "Im Gang standen nur Mrs Skene und ihr Sohn. Mr Pippin war ab 19:20 im Speisewagen." },
        top3: { q: "Hat Mr Skene sich über etwas beklagt?", a: "Über alles, Miss: den Schnee, die Zugluft und den Tee. Nur den Kakao hat er gelobt, zum ersten Mal auf der ganzen Fahrt." },
        top4: { q: "Sind Sie schon lange auf der Strecke?", a: "Dreißig Jahre, Miss. Im Januar fährt immer jemand zum Richter statt zum Christbaum.", v: "Er rückt seine Mütze zurecht und schaut lange in den Schnee." },
        bra1: { q: "Reisen Sie mit Ihrer Familie?", a: "Mit meiner Tochter und meinem Enkel, Miss, nach Weihnachten bei meiner Schwester in York geht es heim. Peter zählt die ganze Fahrt Schneemänner draußen.", v: "Sie strickt ihrem Enkel einen Schal und lächelt ihm immer wieder zu." },
        bra2: { q: "Wo waren Sie ab Viertel nach sieben?", a: "Im Abteil, Miss, beim Stricken; mir laufen ständig die Maschen weg. [[Und bei Mr Skene saß Mr Pippin und bot ihm von seinem Konfekt an.]]" },
        bra3: { q: "Ist das Ihr Sirup?", a: "Das Fläschchen gehört mir, Miss, etwas Süßes für den Enkel. [[Nur in den Kakao kam er nicht: In meiner Thermosflasche ist einfacher Kakao mit Milch.]]" },
        pip1: { q: "Wo waren Sie nach sieben?", a: "Ab 19:20 im Speisewagen, Miss: Tee mit Zitrone und das Kreuzworträtsel, bis zur Aufregung.", v: "Im Speisewagen ab 19:20." },
        pip2: { q: "Wer hat den Kakao eingeschenkt?", a: "Mrs Bramble, Miss, allen aus ihrer eigenen Thermosflasche, eine so fürsorgliche Dame. Ich habe abgelehnt: Zwanzig Jahre verkaufe ich Süßes und kann nichts Süßes mehr sehen.", v: "Er verzieht das Gesicht beim Gedanken an den Kakao.", nt: "Der Kakao", nx: "Mrs Bramble schenkte allen im Abteil Kakao aus ihrer eigenen Thermosflasche ein." },
        pip3: { q: "Ist das Ihr Papier?", a: "Von meiner Firma, Miss. Dem Kleinen habe ich schon in York ein paar Marzipane geschenkt, und die Papiere gab er seiner Großmutter: Sie sammelt sie als Lesezeichen.", v: "Marzipan? Mr Skene fürchtete Nüsse mehr als die Pest, Schätzchen! Selbst hätte er nie eins genommen!" }
      },
      objections: {
        bra2: { reply: "Nun, vielleicht war es nicht Mr Pippin … Ich bin eine alte Frau, Miss, bei mir geht alles durcheinander: wer wo saß, wer wann hinausging.", nt: "Mrs Bramble hat gelogen", nx: "Mr Pippin war ab 19:20 im Speisewagen. Mit Mr Skene blieb sie allein im Abteil." },
        bra3: { reply: "Ein Tröpfchen, für den Geschmack! Er hat ihn doch selbst gelobt. Wie sollte ich wissen, dass Sirup so etwas anrichtet?", nt: "Sirup im Kakao", nx: "Der Mandelsirup war im Kakao aus Mrs Brambles Thermosflasche." }
      },
      wrong: {
        june: "June drohte vor Gericht ihren Sohn zu verlieren, aber ab 19:15 stand sie mit ihm im Gang: Der Schaffner sah die beiden zweimal.",
        tope: "Der Schaffner ging nur den Wagen ab. Er hat gesehen, wer ab Viertel nach sieben wo war.",
        pippin: "Mr Pippin saß ab 19:20 im Speisewagen. Und die Papiere seines Marzipans gab der Junge seiner Großmutter.",
        proof: "Mrs Bramble hebt den Blick nicht vom Strickzeug: „Ich bin doch nur eine Großmutter, Miss.“ Beweise, dass sie mit ihm allein war, oder wie die Mandel in den Kakao kam."
      },
      deduce: [
        "Mr Skene fürchtete Nüsse wie das Feuer. Hätte er selbst Marzipan gegessen?",
        "Wer hat den Kakao eingeschenkt, und wer blieb mit ihm im Abteil?",
        "Wen wollte Mr Skene von seinem Enkel fernhalten?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Die Verhandlung am vierten Januar fand nie statt. Mrs Bramble strickte Peter den vierten Schal fertig",
        p: [
          "Octavius Skene, der Wollkönig, fuhr nach London, um seiner Schwiegertochter den kleinen Peter wegzunehmen. Großmutter Bramble wollte er nicht an den Jungen heranlassen.",
          "Alle im Abteil wussten, dass Mandel für Mr Skene tödlich war. Als June den Jungen ans Fenster führte und der Reisende in den Speisewagen ging, gab Mrs Bramble Mandelsirup in die zweite Tasse Kakao.",
          "Das Marzipanpapier, das ihr der Enkel als Lesezeichen geschenkt hatte, steckte sie dem Toten in den Handschuh. Aber Mr Skene rührte keine Nüsse an, und das Fläschchen Sirup lag noch unter ihrem Strickzeug."
        ]
      }
    },
    pl: {
      title: "Słodkie kakao",
      desc: "Przez całą drogę stary sukiennik narzekał na śnieg i przeciągi, a pochwalił tylko kakao. Dziesięć minut później już nie oddychał.",
      meta: ["Ekspres York — Londyn", "2 stycznia 1933", "≈ 5 minut"],
      introEyebrow: "Ekspres · 19:40",
      introTitle: "Śnieg za oknem",
      intro: [
        "Po świętach ekspres wiózł ludzi do domu przez śnieżycę. Pan Octavius Skene jechał do Londynu na rozprawę: chciał odebrać synowej wnuka.",
        "O 19:40 chwycił się za gardło i osunął na siedzenie. Wszyscy w przedziale wiedzieli, że nie wolno mu nawet okruszka migdała.",
        "Jedziesz w sąsiednim przedziale, panno Ado Langton. Skąd wziął się migdał?"
      ],
      introVoice: "Pachnie kakao, mokrą wełną i śniegiem.",
      clues: {
        c1: { title: "Szklanka", text: "Szklanka pana Skene'a, na dnie kakao. Pachnie słodko migdałami: syrop migdałowy. Dla niego nawet kropla migdała była śmiertelna.", note: "W kakao pana Skene'a był syrop migdałowy." },
        c2: { title: "Gazeta", text: "Gazeta na siedzeniu, kronika sądowa obwiedziona! A na marginesie pan Skene coś nabazgrał o jakiejś babci!", note: "„Goniec Wensley”: 4 stycznia rozprawa Skene przeciw Skene o opiekę nad Peterem Skene'em, lat 6. Na marginesie ręką pana Skene'a: „Bramble trzymać z dala od chłopca”." },
        c3: { title: "Rękawiczka", text: "W rękawiczce pana Skene'a papierek po marcepanie firmy „Pippin i Synowie”. Marcepan to migdały. Wychodzi na to, że cukierek zjadł sam.", note: "W rękawiczce pana Skene'a: papierek po marcepanie z firmy pana Pippina." },
        c4: { title: "Pudło na kapelusz", text: "Pod robótką buteleczka orszady i niedokończony szalik w paski, akurat na sześciolatka.", note: "W pudle na kapelusz pani Bramble: prawie pusta buteleczka orszady, syropu migdałowego." },
        c5: { title: "Butelka", text: "Butelka brandy pana Skene'a nieotwarta. Chował ją na przyjazd.", note: "Pan Skene nie pił brandy. Przez cały wieczór pił tylko kakao." }
      },
      letter: [
        "„Goniec Wensley”, 31 grudnia:",
        "„4 stycznia w Londynie rozpatrzona zostanie sprawa",
        "Skene przeciw Skene o opiekę",
        "nad małoletnim Peterem Skene'em”.",
        "Na marginesie: „Bramble trzymać z dala od chłopca. O. S.”"
      ],
      decoys: {
        window: "Śnieg oblepił szybę. Pociąg ledwie się wlecze.",
        lamp: "Lampa świeci równo, szkło bez sadzy.",
        suitcase: "Walizka pana Skene'a: sukno, sukno i jeszcze raz sukno! Wełniany król, kochana!",
        ticket: "Bilet pana Skene'a: York — Londyn, pierwsza klasa."
      },
      suspects: {
        june: { name: "Pani June Skene", role: "Synowa, tancerka w rewii, 28 lat", intro: "Rude krótkie włosy, niebieski płaszcz, pot na skroniach." },
        tope: { name: "Albert Tope", role: "Konduktor, 55 lat", intro: "Czapka, siwe wąsy, gwizdek na łańcuszku." },
        bramble: { name: "Pani Hattie Bramble", role: "Matka June, 66 lat", intro: "Okulary, kapelusik, druty w rękach. Uśmiecha się do wnuka." },
        pippin: { name: "Pan Samuel Pippin", role: "Komiwojażer firmy cukierniczej, 45 lat", intro: "Muszka, gładki przedziałek, walizeczka z próbkami." }
      },
      qs: {
        jun1: { q: "Jak układało się pani z teściem?", a: "Chciał mi odebrać Petera, panienko. Czwartego rozprawa: tańczę w rewii, a dla pana Skene'a to gorsze niż kradzież.", v: "Tancerka i wełniany król! Nic dziwnego, że skończyło się w sądzie!" },
        jun2: { q: "Gdzie pani była od 19:15?", a: "Na korytarzu, przy oknie, z Peterem: nigdy nie widział takiego śniegu. Konduktor przechodził dwa razy.", v: "Od 19:15 na korytarzu, przy oknie.", nt: "June na korytarzu", nx: "Od 19:15 pani Skene stała z synem przy oknie na korytarzu." },
        jun3: { q: "Czy pani matka kocha Petera?", a: "Mama zrobiła mu przez święta na drutach trzy szaliki i grozi czwartym." },
        top1: { q: "Co pan widział wieczorem?", a: "Obchodziłem wagon, panienko, jak należy, o 19:20 i o 19:35. W tę śnieżycę mamy godzinę spóźnienia." },
        top2: { q: "Kto był na korytarzu?", a: "Tylko pani Skene z malcem przy oknie, panienko, oba razy. A komiwojażer od 19:20 siedział w wagonie restauracyjnym, sam go zaprowadziłem do stolika.", v: "Korytarz: pani Skene i chłopiec. Pan Pippin: w restauracji.", nt: "Konduktor o 19:20 i 19:35", nx: "Na korytarzu stali tylko pani Skene z synem. Pan Pippin od 19:20 był w wagonie restauracyjnym." },
        top3: { q: "Czy pan Skene na coś się skarżył?", a: "Na wszystko, panienko: na śnieg, na przeciąg i na herbatę. Tylko kakao pochwalił, pierwszy raz w całej podróży." },
        top4: { q: "Długo pan jeździ na tej linii?", a: "Trzydzieści lat, panienko. W styczniu zawsze ktoś jedzie do sędziego, a nie do choinki.", v: "Poprawia czapkę i długo patrzy na śnieg." },
        bra1: { q: "Podróżuje pani z rodziną?", a: "Z córką i wnukiem, panienko, wracamy do domu po świętach u siostry w Yorku. Peter całą drogę liczy bałwany za oknem.", v: "Robi wnukowi szalik na drutach i wciąż się do niego uśmiecha." },
        bra2: { q: "Gdzie pani była od 19:15?", a: "W przedziale, panienko, przy robótce; oczka mi uciekają. [[A z panem Skene'em siedział pan Pippin i częstował go swoimi cukierkami.]]" },
        bra3: { q: "Czy to pani syrop?", a: "Buteleczka moja, panienko, coś słodkiego dla wnuka. [[Tylko do kakao go nie lałam: w termosie mam zwykłe kakao na mleku.]]" },
        pip1: { q: "Gdzie pan był po siódmej?", a: "Od 19:20 w wagonie restauracyjnym, panienko: herbata z cytryną i krzyżówka, aż do zamieszania.", v: "W restauracji od 19:20." },
        pip2: { q: "Kto nalewał kakao?", a: "Pani Bramble, panienko, wszystkim, z własnego termosu; taka troskliwa. Odmówiłem: dwadzieścia lat handluję cukierkami i na słodkie nie mogę patrzeć.", v: "Krzywi się na wspomnienie kakao.", nt: "Kakao", nx: "Pani Bramble nalewała wszystkim w przedziale kakao z własnego termosu." },
        pip3: { q: "Czy to pański papierek?", a: "Mojej firmy, panienko. Malcowi dałem parę marcepanów jeszcze w Yorku, a papierki oddał babci: zbiera je na zakładki.", v: "Marcepan? Pan Skene bał się orzechów gorzej niż zarazy, kochana! Sam by go nigdy nie wziął!" }
      },
      objections: {
        bra2: { reply: "No, może to nie był pan Pippin… Jestem starą kobietą, panienko, wszystko mi się myli: kto gdzie siedział, kto kiedy wychodził.", nt: "Pani Bramble skłamała", nx: "Pan Pippin od 19:20 był w restauracji. Z panem Skene'em w przedziale została ona sama." },
        bra3: { reply: "Kropelkę, dla smaku! Przecież sam pochwalił. Skąd miałam wiedzieć, że od syropu może się stać coś takiego?", nt: "Syrop w kakao", nx: "Syrop migdałowy był w kakao z termosu pani Bramble." }
      },
      wrong: {
        june: "June mogła stracić syna w sądzie, ale od 19:15 stała z nim na korytarzu: konduktor widział ich dwa razy.",
        tope: "Konduktor tylko obchodził wagon. To on widział, kto gdzie był od 19:15.",
        pippin: "Pan Pippin od 19:20 siedział w restauracji. A papierki po jego marcepanie chłopiec oddał babci.",
        proof: "Pani Bramble nie podnosi oczu znad robótki: „Jestem tylko babcią, panienko”. Udowodnij, że została z nim sama, albo skąd w kakao migdał."
      },
      deduce: [
        "Pan Skene bał się orzechów jak ognia. Zjadłby sam marcepan?",
        "Kto nalewał kakao i kto został z nim w przedziale?",
        "Kogo pan Skene nie chciał dopuszczać do wnuka?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Rozprawa czwartego stycznia się nie odbyła. Pani Bramble skończyła Peterowi czwarty szalik",
        p: [
          "Octavius Skene, wełniany król, jechał do Londynu, żeby odebrać synowej małego Petera. Babci Bramble nie zamierzał dopuszczać do chłopca.",
          "Wszyscy w przedziale wiedzieli, że migdały są dla pana Skene'a śmiertelne. Kiedy June zabrała chłopca do okna, a komiwojażer poszedł do restauracji, pani Bramble dolała syropu migdałowego do drugiej filiżanki kakao.",
          "Papierek po marcepanie, który wnuk dał jej na zakładkę, wsunęła zmarłemu do rękawiczki. Ale pan Skene orzechów nie tykał, a buteleczka syropu wciąż leżała pod jej robótką."
        ]
      }
    }
  }
});
