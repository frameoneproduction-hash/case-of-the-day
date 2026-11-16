window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "047", n: 47, scene: "parlour", searchTime: 80, culprit: "olive",
  clues: {
    c1: { prop: "pipe", voice: "logic" },
    c2: { prop: "letter", voice: "gossip", puzzle: true },
    c3: { prop: "newspaper", voice: "intuition" },
    c4: { prop: "glass", voice: "logic" },
    c5: { prop: "vase", voice: "gossip" },
  },
  decoys: { window: "intuition", painting: "logic", clock: "logic", chess: "intuition" },
  suspects: [
    { id: "may", color: "#bc9be0", look: { hair: "bun", hairColor: "#4a3020", outfit: "maid", outfitColor: "#222222", extras: ["headband"], female: true }, qs: [
        { id: "may1" },
        { id: "may2", needs: "c1", voice: "logic" },
        { id: "may3", voice: "gossip" },
    ] },
    { id: "clement", color: "#d1a94e", look: { hair: "bald", hairColor: "#a09080", outfit: "suit", outfitColor: "#4a4030", extras: ["mustache", "sweat"] }, qs: [
        { id: "cle1", voice: "gossip" },
        { id: "cle2", voice: "logic" },
        { id: "cle3", needs: "c3", voice: "intuition" },
    ] },
    { id: "haddow", color: "#8cc79a", look: { hair: "short", hairColor: "#6a4a2a", outfit: "vest", outfitColor: "#4a5a3a", extras: ["cap"] }, qs: [
        { id: "had1" },
        { id: "had2", needs: "c5", voice: "logic" },
        { id: "had3" },
        { id: "had4", voice: "intuition" },
    ] },
    { id: "olive", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#8a8078", outfit: "dress", outfitColor: "#5a3a5a", extras: ["necklace", "sweat"], female: true, lips: "#a05060" }, qs: [
        { id: "oli1", voice: "logic" },
        { id: "oli2" },
        { id: "oli3", needs: "c5" },
    ] },
  ],
  objections: { oli2: { evidence: "cle2" }, oli3: { evidence: "had2" } },
  proof: ["may2", "c2", "obj:oli2", "obj:oli3"],
  text: {
    ru: {
      title: "Трубка мира",
      desc: "Двадцать лет братья не разговаривали, а в субботу помирились и обменялись трубками. Через четверть часа старший был мёртв.",
      meta: ["Орчард-корт, Сомерсет", "10 сентября 1932", "≈ 5 минут"],
      introEyebrow: "Гостиная · 22:15",
      introTitle: "Трубка мира",
      intro: [
        "Хорацио и Клемент Эпплгарты двадцать лет враждовали из-за семейного сидрового завода. В субботу жена Хорацио устроила ужин примирения.",
        "В десять братья, смеясь, обменялись трубками, как в детстве. В 22:15 Хорацио выронил трубку брата и упал.",
        "Вы гостите в доме, мисс Ада Лэнгтон. Кто трогал эту трубку?"
      ],
      introVoice: "Пахнет табаком, розами и чем-то горьким.",
      clues: {
        c1: { title: "Трубка", text: "Мундштук пахнет горько: никотиновый раствор, каким опрыскивают розы от тли. Это трубка Клемента.", note: "Мундштук трубки смазан никотином. Это трубка Клемента Эпплгарта: братья обменялись трубками в 22:00." },
        c2: { title: "Письмо", text: "Неотправленное письмо на бюро, конверт с красной печатью! Хозяин писал какой-то Розе, и сколько нежностей!", note: "Хорацио писал Розе в Бристоль: продаст брату долю завода и к октябрю уплывёт с ней в Канаду, а Олив узнает обо всём последней." },
        c3: { title: "Газета", text: "В сложенной газете на диване пустой флакончик «Гибель тли». Его завернули бережно, будто стыдились.", note: "В газете на диване, где весь вечер сидел Клемент, — пустой флакончик из-под никотинового раствора." },
        c4: { title: "Стакан", text: "Стакан хозяина на буфете, на дне остаток виски. Яда нет.", note: "В стакане яда нет. Яд был на трубке." },
        c5: { title: "Ваза", text: "Розы в вазе чем-то опрысканы, листья так и блестят! Кто-то сегодня воевал с тлёй, дорогуша!", note: "Розы в гостиной сегодня опрыскали никотиновым раствором от тли." }
      },
      letter: [
        "«Моя Роза, после примирения с братом",
        "я продам ему свою долю завода.",
        "К октябрю мы будем в Канаде.",
        "Олив ничего не узнает до самого",
        "парохода. Твой Х.»"
      ],
      decoys: {
        window: "За окном луна над садом. Где-то там оранжерея.",
        painting: "Пейзаж над буфетом: холмы под луной. Рама новая, позолота блестит.",
        clock: "Напольные часы показывают время верно. Маятник качается мерно.",
        chess: "Братья начали партию, но не доиграли. Белые только успели вывести коня."
      },
      suspects: {
        may: { name: "Мэй Тиббс", role: "Горничная, 22 года", intro: "Наколка, чёрное платье, румяные щёки." },
        clement: { name: "Мистер Клемент Эпплгарт", role: "Младший брат, 58 лет", intro: "Лысина, усы, мятый костюм. Испарина на висках." },
        haddow: { name: "Джем Хэддоу", role: "Садовник, 45 лет", intro: "Кепка, жилет, земля под ногтями." },
        olive: { name: "Миссис Олив Эпплгарт", role: "Жена Хорацио, 50 лет", intro: "Седеющие волны, лиловое платье, испарина на лбу." }
      },
      qs: {
        may1: { q: "Где вы были вечером?", a: "Подавала ужин и кофе, мисс, а потом мыла посуду до самого крика." },
        may2: { q: "Кто трогал трубку мистера Клемента?", a: "В девять хозяйка протирала её салфеткой на журнальном столике. Сказала: «Пусть будет как новая, для трубки мира».", v: "21:00, журнальный столик, салфетка.", nt: "Горничная в 21:00", nx: "В 21:00 миссис Эпплгарт протирала мундштук трубки Клемента." },
        may3: { q: "Хозяин был в духе?", a: "Как никогда, мисс. Утром получил письмо из Бристоля, пел в саду и дал мне полкроны.", v: "Письмо из Бристоля, и хозяин запел! Ох, неспроста!" },
        cle1: { q: "Из-за чего вы поссорились с братом?", a: "Из-за рецепта сидра, мисс, двадцать лет назад. Глупость, но оба мы были упрямы, как мулы.", v: "Двадцать лет вражды, и вдруг мир! Не верится, дорогуша!" },
        cle2: { q: "Кто придумал обменяться трубками?", a: "Олив, мисс, за ужином: «Пусть будет трубка мира, как у вас в детстве». Мы посмеялись, до десяти свои трубки не трогали, как она велела, и в десять поменялись.", v: "Обмен предложили за ужином.", nt: "Трубка мира", nx: "Обменяться трубками за ужином предложила Олив Эпплгарт." },
        cle3: { q: "Это ваш флакон?", a: "Нет, мисс, я такую дрянь и в руки не беру. Газету я читал до десяти, а потом мы пересели к шахматам.", v: "Он смотрит на флакон, как на змею." },
        had1: { q: "Где вы были вечером?", a: "В оранжерее да в сторожке, мисс, в дом сегодня ни ногой. Меня позвали, когда хозяин упал." },
        had2: { q: "Кто брал раствор от тли?", a: "Хозяйка, мисс, в шесть. Взяла опрыскиватель и флакон, сказала, тля завелась на розах в гостиной, и ключ от оранжереи унесла.", v: "18:00, оранжерея. Ключ унесли.", nt: "Садовник в 18:00", nx: "В 18:00 миссис Эпплгарт взяла в оранжерее никотиновый раствор и унесла ключ." },
        had3: { q: "Этот раствор опасен?", a: "Капля на губах — и конец, мисс. Я его держу под замком и без перчаток не трогаю." },
        had4: { q: "Хозяин был хорошим человеком?", a: "Платил вовремя, мисс, а розы любил больше, чем людей. Утром сказал, что продаёт долю, и сад, может, тоже уйдёт.", v: "Он мнёт кепку и не поднимает глаз." },
        oli1: { q: "Где вы были после ужина?", a: "Здесь, в гостиной, мисс, разливала кофе. Двадцать лет братья не сидели за одним столом, я глаз с них не сводила.", v: "Весь вечер в гостиной. Хозяйка дома." },
        oli2: { q: "Кто придумал обменяться трубками?", a: "Это у них с детства, мисс, ещё отец их так мирил. [[Они сами вспомнили за ужином, я тут ни при чём.]]" },
        oli3: { q: "Вы бываете в оранжерее?", a: "Розы у нас — забота Хэддоу, мисс. [[А я в оранжерею не хожу: от тамошней духоты у меня мигрень.]]" }
      },
      objections: {
        oli2: { reply: "Ну, я предложила! Мне хотелось красивого жеста, а мужчины до таких вещей сами не додумываются.", nt: "Миссис Эпплгарт солгала", nx: "Обменяться трубками предложила она сама." },
        oli3: { reply: "Да, взяла раствор! Тля на розах, я сама их и опрыскала, понюхайте. Хэддоу вечно некогда.", nt: "Оранжерея", nx: "В 18:00 миссис Эпплгарт взяла в оранжерее никотиновый раствор." }
      },
      wrong: {
        clement: "Яд был на трубке Клемента, но меняться трубками придумал не он. А флакон в газете был пуст: прятать его там, где сидел сам, — себе дороже.",
        haddow: "Хэддоу весь вечер не заходил в дом, а ключ от оранжереи с шести был у хозяйки.",
        may: "Мэй весь вечер мыла посуду. Это она видела, как хозяйка протирала трубку на столике.",
        proof: "Миссис Эпплгарт прикладывает платок к глазам: «Это была трубка Клемента, не моя». Докажите, что она трогала трубку, или зачем ей было желать мужу смерти."
      },
      deduce: [
        "Трубка была Клемента. Кто знал заранее, что её закурит хозяин?",
        "Кто протирал мундштук в девять вечера?",
        "Кому писал хозяин и о ком?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Мистера Клемента неделю продержали в участке. Миссис Эпплгарт продала завод и уехала к сестре в Девон",
        p: [
          "Хорацио Эпплгарт собирался продать брату долю сидрового завода и уплыть в Канаду с бристольской вдовой. Жена нашла его неотправленное письмо.",
          "Олив устроила ужин примирения и сама предложила братьям трубку мира. В шесть она взяла в оранжерее никотиновый раствор от тли, а в девять смазала им мундштук трубки Клемента.",
          "В десять братья обменялись трубками, и хозяин закурил трубку брата. Пустой флакон Олив завернула в газету, на диване, где весь вечер сидел Клемент."
        ]
      }
    },
    en: {
      title: "The Pipe of Peace",
      desc: "For twenty years the brothers hadn't spoken; on Saturday they made it up and swapped pipes. A quarter of an hour later the elder was dead.",
      meta: ["Orchard Court, Somerset", "10 September 1932", "≈ 5 minutes"],
      introEyebrow: "Parlour · 10:15 pm",
      introTitle: "The pipe of peace",
      intro: [
        "Horatio and Clement Applegarth had feuded for twenty years over the family cider works. On Saturday Horatio's wife gave a reconciliation dinner.",
        "At ten the brothers laughingly swapped pipes, as they had as boys. At 10:15 Horatio dropped his brother's pipe and fell.",
        "You're a guest in the house, Miss Ada Langton. Who touched that pipe?"
      ],
      introVoice: "It smells of tobacco, roses and something bitter.",
      clues: {
        c1: { title: "Pipe", text: "The mouthpiece smells bitter: nicotine solution, the kind sprayed on roses against greenfly. This is Clement's pipe.", note: "The mouthpiece was smeared with nicotine. It's Clement Applegarth's pipe: the brothers swapped pipes at 10:00." },
        c2: { title: "Letter", text: "An unsent letter on the bureau, an envelope with a red seal! The master was writing to someone called Rose, and so tenderly!", note: "Horatio wrote to Rose in Bristol: he'd sell his share of the works to his brother and sail with her to Canada by October, and Olive would be the last to know." },
        c3: { title: "Newspaper", text: "Inside the folded newspaper on the sofa, an empty little bottle of Aphid-Bane. Wrapped carefully, as if in shame.", note: "In the newspaper on the sofa, where Clement sat all evening: an empty bottle of nicotine solution." },
        c4: { title: "Glass", text: "The master's tumbler on the sideboard, a little whisky left in the bottom. No poison.", note: "No poison in the glass. The poison was on the pipe." },
        c5: { title: "Vase", text: "The roses in the vase have been sprayed with something, the leaves fairly gleam! Someone was at war with greenfly today, my dear!", note: "The parlour roses were sprayed with nicotine solution against greenfly today." }
      },
      letter: [
        "“My Rose, once I've made peace with my brother",
        "I shall sell him my share of the works.",
        "By October we'll be in Canada.",
        "Olive won't know a thing until",
        "the ship sails. Your H.”"
      ],
      decoys: {
        window: "Moonlight over the garden beyond the window. The glasshouse is out there somewhere.",
        painting: "A landscape over the sideboard: hills under the moon. The frame is new, the gilt bright.",
        clock: "The grandfather clock keeps true time. The pendulum swings steadily.",
        chess: "The brothers began a game but never finished it. White had only just brought out a knight."
      },
      suspects: {
        may: { name: "May Tibbs", role: "Housemaid, 22", intro: "Cap, black dress, rosy cheeks." },
        clement: { name: "Mr Clement Applegarth", role: "Younger brother, 58", intro: "Bald head, moustache, a crumpled suit. Sweat at his temples." },
        haddow: { name: "Jem Haddow", role: "Gardener, 45", intro: "Cap, waistcoat, earth under his nails." },
        olive: { name: "Mrs Olive Applegarth", role: "Horatio's wife, 50", intro: "Greying waves, a lilac dress, sweat on her brow." }
      },
      qs: {
        may1: { q: "Where were you this evening?", a: "Serving dinner and coffee, miss, and then washing up right until the scream." },
        may2: { q: "Who touched Mr Clement's pipe?", a: "At nine the mistress was wiping it with a napkin at the coffee table. She said, “Let it be good as new for the pipe of peace.”", v: "9:00, the coffee table, a napkin.", nt: "The maid at 9:00", nx: "At 9:00 Mrs Applegarth was wiping the mouthpiece of Clement's pipe." },
        may3: { q: "Was the master in good spirits?", a: "Never better, miss. This morning he had a letter from Bristol, sang in the garden and gave me half a crown.", v: "A letter from Bristol, and the master starts singing! That means something!" },
        cle1: { q: "What did you and your brother quarrel about?", a: "A cider recipe, miss, twenty years ago. Foolishness, but we were both as stubborn as mules.", v: "Twenty years of feuding, and suddenly peace! I can hardly believe it, my dear!" },
        cle2: { q: "Whose idea was it to swap pipes?", a: "Olive's, miss, at dinner: “Let's have a pipe of peace, like when you were boys.” We laughed, left our pipes alone till ten as she told us, and swapped at ten.", v: "The swap was suggested at dinner.", nt: "The pipe of peace", nx: "It was Olive Applegarth who suggested at dinner that the brothers swap pipes." },
        cle3: { q: "Is this your bottle?", a: "No, miss, I wouldn't touch such muck. I read the paper till ten, and then we moved over to the chessboard.", v: "He looks at the bottle as if it were a snake." },
        had1: { q: "Where were you this evening?", a: "In the glasshouse and the lodge, miss, never set foot in the house today. They called me when the master fell." },
        had2: { q: "Who took the greenfly spray?", a: "The mistress, miss, at six. Took the sprayer and the bottle, said the parlour roses had greenfly, and went off with the glasshouse key.", v: "6:00, the glasshouse. The key went with her.", nt: "The gardener at 6:00", nx: "At 6:00 Mrs Applegarth took nicotine solution from the glasshouse and kept the key." },
        had3: { q: "Is that solution dangerous?", a: "One drop on the lips and that's that, miss. I keep it under lock and never touch it without gloves." },
        had4: { q: "Was the master a good man?", a: "Paid on time, miss, and loved his roses more than people. This morning he said he was selling his share, and the garden might go too.", v: "He twists his cap and keeps his eyes down." },
        oli1: { q: "Where were you after dinner?", a: "Here in the parlour, miss, pouring the coffee. For twenty years the brothers hadn't sat at one table; I couldn't take my eyes off them.", v: "In the parlour all evening. The lady of the house." },
        oli2: { q: "Whose idea was it to swap pipes?", a: "It goes back to when they were boys, miss; their father used to make peace between them that way. [[They remembered it themselves at dinner, it was nothing to do with me.]]" },
        oli3: { q: "Do you go into the glasshouse?", a: "The roses are Haddow's business, miss. [[I never go into the glasshouse: the closeness in there gives me migraines.]]" }
      },
      objections: {
        oli2: { reply: "Very well, I suggested it! I wanted a pretty gesture, and men never think of such things by themselves.", nt: "Mrs Applegarth lied", nx: "It was she who suggested swapping pipes." },
        oli3: { reply: "Yes, I took the solution! The roses had greenfly and I sprayed them myself; smell them. Haddow never has the time.", nt: "The glasshouse", nx: "At 6:00 Mrs Applegarth took nicotine solution from the glasshouse." }
      },
      wrong: {
        clement: "The poison was on Clement's pipe, but swapping pipes wasn't his idea. And hiding the empty bottle right where he'd been sitting would only hang himself.",
        haddow: "Haddow never set foot in the house all evening, and from six the glasshouse key was with the mistress.",
        may: "May was washing up all evening. She's the one who saw the mistress wiping the pipe at the coffee table.",
        proof: "Mrs Applegarth dabs her eyes with a handkerchief: “It was Clement's pipe, not mine.” Prove she touched the pipe, or why she should want her husband dead."
      },
      deduce: [
        "It was Clement's pipe. Who knew beforehand that the master would smoke it?",
        "Who was wiping the mouthpiece at nine o'clock?",
        "Whom was the master writing to, and about whom?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "Mr Clement was held at the police station for a week. Mrs Applegarth sold the works and went to her sister in Devon",
        p: [
          "Horatio Applegarth meant to sell his brother his share of the cider works and sail for Canada with a widow from Bristol. His wife found his unsent letter.",
          "Olive arranged the reconciliation dinner and suggested the pipe of peace herself. At six she took nicotine solution from the glasshouse, and at nine she smeared it on the mouthpiece of Clement's pipe.",
          "At ten the brothers swapped pipes, and the master smoked his brother's. Olive wrapped the empty bottle in the newspaper on the sofa where Clement had sat all evening."
        ]
      }
    },
    es: {
      title: "La pipa de la paz",
      desc: "Durante veinte años los hermanos no se hablaron; el sábado hicieron las paces y se cambiaron las pipas. Un cuarto de hora después el mayor estaba muerto.",
      meta: ["Orchard Court, Somerset", "10 de septiembre de 1932", "≈ 5 minutos"],
      introEyebrow: "Salón · 22:15",
      introTitle: "La pipa de la paz",
      intro: [
        "Horatio y Clement Applegarth llevaban veinte años enemistados por la fábrica de sidra de la familia. El sábado la esposa de Horatio organizó una cena de reconciliación.",
        "A las diez los hermanos, entre risas, se cambiaron las pipas, como de niños. A las 22:15 Horatio soltó la pipa de su hermano y se desplomó.",
        "Eres invitada en la casa, señorita Ada Langton. ¿Quién tocó esa pipa?"
      ],
      introVoice: "Huele a tabaco, a rosas y a algo amargo.",
      clues: {
        c1: { title: "Pipa", text: "La boquilla huele amarga: solución de nicotina, de la que se echa a las rosas contra el pulgón. Es la pipa de Clement.", note: "La boquilla estaba untada de nicotina. Es la pipa de Clement Applegarth: los hermanos se cambiaron las pipas a las 22:00." },
        c2: { title: "Carta", text: "¡Una carta sin enviar en el escritorio, un sobre con sello rojo! ¡El señor le escribía a una tal Rose, y con cuánta ternura!", note: "Horatio escribía a Rose, en Bristol: vendería su parte de la fábrica a su hermano y en octubre se embarcaría con ella a Canadá, y Olive sería la última en enterarse." },
        c3: { title: "Periódico", text: "Dentro del periódico doblado en el sofá, un frasquito vacío de Matapulgón. Envuelto con cuidado, como con vergüenza.", note: "En el periódico del sofá, donde Clement estuvo sentado toda la noche: un frasco vacío de solución de nicotina." },
        c4: { title: "Vaso", text: "El vaso del señor en el aparador, con un resto de whisky en el fondo. Sin veneno.", note: "En el vaso no hay veneno. El veneno estaba en la pipa." },
        c5: { title: "Jarrón", text: "¡Las rosas del jarrón están rociadas con algo, las hojas relucen! ¡Alguien ha estado hoy en guerra con el pulgón, querida!", note: "Las rosas del salón se rociaron hoy con solución de nicotina contra el pulgón." }
      },
      letter: [
        "«Mi Rose, cuando haga las paces con mi hermano",
        "le venderé mi parte de la fábrica.",
        "En octubre estaremos en Canadá.",
        "Olive no sabrá nada hasta",
        "que zarpe el barco. Tuyo, H.»"
      ],
      decoys: {
        window: "La luna sobre el jardín, al otro lado de la ventana. Por ahí está el invernadero.",
        painting: "Un paisaje sobre el aparador: colinas bajo la luna. El marco es nuevo, el dorado brilla.",
        clock: "El reloj de pie da la hora exacta. El péndulo oscila tranquilo.",
        chess: "Los hermanos empezaron una partida y no la acabaron. Las blancas apenas habían sacado un caballo."
      },
      suspects: {
        may: { name: "May Tibbs", role: "Doncella, 22 años", intro: "Cofia, vestido negro, mejillas sonrosadas." },
        clement: { name: "Señor Clement Applegarth", role: "Hermano menor, 58 años", intro: "Calvo, bigote, traje arrugado. Sudor en las sienes." },
        haddow: { name: "Jem Haddow", role: "Jardinero, 45 años", intro: "Gorra, chaleco, tierra bajo las uñas." },
        olive: { name: "Señora Olive Applegarth", role: "Esposa de Horatio, 50 años", intro: "Ondas canosas, vestido lila, sudor en la frente." }
      },
      qs: {
        may1: { q: "¿Dónde estuvo esta noche?", a: "Sirviendo la cena y el café, señorita, y luego fregando hasta el mismo grito." },
        may2: { q: "¿Quién tocó la pipa del señor Clement?", a: "A las nueve la señora la limpiaba con una servilleta en la mesita. Dijo: «Que quede como nueva, para la pipa de la paz».", v: "21:00, la mesita, una servilleta.", nt: "La doncella a las 21:00", nx: "A las 21:00 la señora Applegarth limpiaba la boquilla de la pipa de Clement." },
        may3: { q: "¿El señor estaba de buen humor?", a: "Como nunca, señorita. Por la mañana recibió una carta de Bristol, cantó en el jardín y me dio media corona.", v: "¡Una carta de Bristol, y el señor se pone a cantar! ¡Algo hay ahí!" },
        cle1: { q: "¿Por qué se pelearon usted y su hermano?", a: "Por una receta de sidra, señorita, hace veinte años. Una tontería, pero los dos éramos tercos como mulas.", v: "¡Veinte años de enemistad, y de pronto la paz! ¡Me cuesta creerlo, querida!" },
        cle2: { q: "¿A quién se le ocurrió cambiarse las pipas?", a: "A Olive, señorita, en la cena: «Que sea la pipa de la paz, como cuando erais niños». Nos reímos, no tocamos las pipas hasta las diez, como ella dijo, y entonces nos las cambiamos.", v: "El cambio se propuso en la cena.", nt: "La pipa de la paz", nx: "Fue Olive Applegarth quien propuso en la cena que los hermanos se cambiaran las pipas." },
        cle3: { q: "¿Es suyo este frasco?", a: "No, señorita, yo esa porquería no la toco. Leí el periódico hasta las diez y luego nos pasamos al ajedrez.", v: "Mira el frasco como si fuera una serpiente." },
        had1: { q: "¿Dónde estuvo esta noche?", a: "En el invernadero y en la casita, señorita, hoy no he pisado la casa. Me llamaron cuando el señor cayó." },
        had2: { q: "¿Quién cogió el producto contra el pulgón?", a: "La señora, señorita, a las seis. Cogió el pulverizador y el frasco, dijo que las rosas del salón tenían pulgón, y se llevó la llave del invernadero.", v: "18:00, el invernadero. La llave se fue con ella.", nt: "El jardinero a las 18:00", nx: "A las 18:00 la señora Applegarth cogió solución de nicotina en el invernadero y se quedó con la llave." },
        had3: { q: "¿Es peligrosa esa solución?", a: "Una gota en los labios y se acabó, señorita. La guardo bajo llave y no la toco sin guantes." },
        had4: { q: "¿Era buena persona el señor?", a: "Pagaba puntual, señorita, y quería más a sus rosas que a la gente. Esta mañana dijo que vendía su parte, y puede que el jardín también se vaya.", v: "Retuerce la gorra y no levanta la vista." },
        oli1: { q: "¿Dónde estuvo después de la cena?", a: "Aquí, en el salón, señorita, sirviendo el café. En veinte años los hermanos no se habían sentado a la misma mesa; no les quitaba ojo.", v: "Toda la noche en el salón. La señora de la casa." },
        oli2: { q: "¿A quién se le ocurrió cambiarse las pipas?", a: "Es cosa de cuando eran niños, señorita, su padre los reconciliaba así. [[Se acordaron ellos solos en la cena, yo no tuve nada que ver.]]" },
        oli3: { q: "¿Entra usted en el invernadero?", a: "Las rosas son cosa de Haddow, señorita. [[Yo no entro en el invernadero: con ese bochorno me da jaqueca.]]" }
      },
      objections: {
        oli2: { reply: "¡Está bien, lo propuse yo! Quería un gesto bonito, y a los hombres esas cosas no se les ocurren solos.", nt: "La señora Applegarth mintió", nx: "Fue ella quien propuso cambiarse las pipas." },
        oli3: { reply: "¡Sí, cogí la solución! Las rosas tenían pulgón y las rocié yo misma; huélalas. Haddow nunca tiene tiempo.", nt: "El invernadero", nx: "A las 18:00 la señora Applegarth cogió solución de nicotina en el invernadero." }
      },
      wrong: {
        clement: "El veneno estaba en la pipa de Clement, pero la idea de cambiárselas no fue suya. Y esconder el frasco vacío justo donde él se sentaba habría sido delatarse.",
        haddow: "Haddow no pisó la casa en toda la noche, y desde las seis la llave del invernadero la tenía la señora.",
        may: "May estuvo fregando toda la noche. Fue ella quien vio a la señora limpiar la pipa en la mesita.",
        proof: "La señora Applegarth se seca los ojos con un pañuelo: «Era la pipa de Clement, no la mía». Demuestra que tocó la pipa, o por qué iba a querer muerto a su marido."
      },
      deduce: [
        "La pipa era de Clement. ¿Quién sabía de antemano que la fumaría el señor?",
        "¿Quién limpiaba la boquilla a las nueve?",
        "¿A quién escribía el señor, y sobre quién?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "Al señor Clement lo retuvieron una semana en comisaría. La señora Applegarth vendió la fábrica y se fue con su hermana a Devon",
        p: [
          "Horatio Applegarth pensaba vender a su hermano su parte de la fábrica de sidra y embarcarse a Canadá con una viuda de Bristol. Su mujer encontró la carta sin enviar.",
          "Olive organizó la cena de reconciliación y propuso ella misma la pipa de la paz. A las seis cogió en el invernadero la solución de nicotina contra el pulgón, y a las nueve untó con ella la boquilla de la pipa de Clement.",
          "A las diez los hermanos se cambiaron las pipas, y el señor fumó la de su hermano. Olive envolvió el frasco vacío en el periódico del sofá donde Clement había estado sentado toda la noche."
        ]
      }
    },
    de: {
      title: "Die Friedenspfeife",
      desc: "Zwanzig Jahre sprachen die Brüder kein Wort miteinander; am Samstag versöhnten sie sich und tauschten die Pfeifen. Eine Viertelstunde später war der Ältere tot.",
      meta: ["Orchard Court, Somerset", "10. September 1932", "≈ 5 Minuten"],
      introEyebrow: "Salon · 22:15",
      introTitle: "Die Friedenspfeife",
      intro: [
        "Horatio und Clement Applegarth lagen seit zwanzig Jahren im Streit um die Apfelweinkelterei der Familie. Am Samstag gab Horatios Frau ein Versöhnungsdinner.",
        "Um zehn tauschten die Brüder lachend die Pfeifen, wie früher als Jungen. Um 22:15 ließ Horatio die Pfeife seines Bruders fallen und brach zusammen.",
        "Du bist Gast im Haus, Miss Ada Langton. Wer hat diese Pfeife angefasst?"
      ],
      introVoice: "Es riecht nach Tabak, nach Rosen und nach etwas Bitterem.",
      clues: {
        c1: { title: "Pfeife", text: "Das Mundstück riecht bitter: Nikotinlösung, wie man sie gegen Blattläuse auf Rosen spritzt. Das ist Clements Pfeife.", note: "Das Mundstück war mit Nikotin bestrichen. Es ist Clement Applegarths Pfeife: Die Brüder tauschten die Pfeifen um 22:00." },
        c2: { title: "Brief", text: "Ein nicht abgeschickter Brief auf dem Sekretär, ein Umschlag mit rotem Siegel! Der Hausherr schrieb einer gewissen Rose, und wie zärtlich!", note: "Horatio schrieb an Rose in Bristol: Er werde seinem Bruder seinen Anteil an der Kelterei verkaufen und bis Oktober mit ihr nach Kanada fahren, Olive werde es als Letzte erfahren." },
        c3: { title: "Zeitung", text: "In der gefalteten Zeitung auf dem Sofa ein leeres Fläschchen „Blattlaus-Tod“. Sorgfältig eingewickelt, wie aus Scham.", note: "In der Zeitung auf dem Sofa, wo Clement den ganzen Abend saß: ein leeres Fläschchen Nikotinlösung." },
        c4: { title: "Glas", text: "Das Glas des Hausherrn auf der Anrichte, ein Rest Whisky am Boden. Kein Gift.", note: "Im Glas ist kein Gift. Das Gift war an der Pfeife." },
        c5: { title: "Vase", text: "Die Rosen in der Vase sind mit etwas besprüht, die Blätter glänzen nur so! Da hat heute jemand gegen Blattläuse gekämpft, Schätzchen!", note: "Die Rosen im Salon wurden heute mit Nikotinlösung gegen Blattläuse gespritzt." }
      },
      letter: [
        "„Meine Rose, wenn ich mich mit meinem Bruder versöhnt habe,",
        "verkaufe ich ihm meinen Anteil an der Kelterei.",
        "Im Oktober sind wir in Kanada.",
        "Olive erfährt nichts, bis",
        "das Schiff ablegt. Dein H.“"
      ],
      decoys: {
        window: "Mondlicht über dem Garten hinter dem Fenster. Irgendwo dort ist das Gewächshaus.",
        painting: "Eine Landschaft über der Anrichte: Hügel unter dem Mond. Der Rahmen ist neu, das Gold glänzt.",
        clock: "Die Standuhr geht genau. Das Pendel schwingt gleichmäßig.",
        chess: "Die Brüder begannen eine Partie und spielten sie nicht zu Ende. Weiß hatte gerade erst einen Springer gezogen."
      },
      suspects: {
        may: { name: "May Tibbs", role: "Hausmädchen, 22", intro: "Häubchen, schwarzes Kleid, rote Wangen." },
        clement: { name: "Mr Clement Applegarth", role: "Jüngerer Bruder, 58", intro: "Glatze, Schnurrbart, zerknitterter Anzug. Schweiß an den Schläfen." },
        haddow: { name: "Jem Haddow", role: "Gärtner, 45", intro: "Schiebermütze, Weste, Erde unter den Nägeln." },
        olive: { name: "Mrs Olive Applegarth", role: "Horatios Frau, 50", intro: "Ergrauende Wellen, fliederfarbenes Kleid, Schweiß auf der Stirn." }
      },
      qs: {
        may1: { q: "Wo waren Sie heute Abend?", a: "Ich habe Dinner und Kaffee serviert, Miss, und dann bis zum Schrei abgewaschen." },
        may2: { q: "Wer hat Mr Clements Pfeife angefasst?", a: "Um neun wischte die Hausherrin sie am Couchtisch mit einer Serviette ab. Sie sagte: „Sie soll wie neu sein, für die Friedenspfeife.“", v: "21:00, der Couchtisch, eine Serviette.", nt: "Das Hausmädchen um 21:00", nx: "Um 21:00 wischte Mrs Applegarth das Mundstück von Clements Pfeife ab." },
        may3: { q: "War der Hausherr guter Laune?", a: "Wie noch nie, Miss. Am Morgen bekam er einen Brief aus Bristol, sang im Garten und gab mir eine halbe Krone.", v: "Ein Brief aus Bristol, und der Hausherr singt! Da steckt doch was dahinter!" },
        cle1: { q: "Worüber haben Sie und Ihr Bruder gestritten?", a: "Über ein Apfelweinrezept, Miss, vor zwanzig Jahren. Eine Dummheit, aber wir waren beide störrisch wie Maultiere.", v: "Zwanzig Jahre Fehde, und plötzlich Frieden! Kaum zu glauben, Schätzchen!" },
        cle2: { q: "Wessen Idee war es, die Pfeifen zu tauschen?", a: "Olives, Miss, beim Dinner: „Lasst es eine Friedenspfeife sein, wie damals, als ihr Jungen wart.“ Wir lachten, ließen die Pfeifen bis zehn liegen, wie sie es wollte, und tauschten dann.", v: "Der Tausch wurde beim Dinner vorgeschlagen.", nt: "Die Friedenspfeife", nx: "Olive Applegarth schlug beim Dinner vor, dass die Brüder die Pfeifen tauschen." },
        cle3: { q: "Ist das Ihr Fläschchen?", a: "Nein, Miss, solches Zeug fasse ich nicht an. Ich habe bis zehn Zeitung gelesen, dann sind wir ans Schachbrett gewechselt.", v: "Er sieht das Fläschchen an wie eine Schlange." },
        had1: { q: "Wo waren Sie heute Abend?", a: "Im Gewächshaus und im Pförtnerhaus, Miss, das Haus habe ich heute nicht betreten. Man rief mich, als der Herr umfiel." },
        had2: { q: "Wer hat das Blattlausmittel genommen?", a: "Die Hausherrin, Miss, um sechs. Sie nahm die Spritze und das Fläschchen, sagte, die Rosen im Salon hätten Läuse, und nahm den Gewächshausschlüssel mit.", v: "18:00, das Gewächshaus. Der Schlüssel ging mit ihr.", nt: "Der Gärtner um 18:00", nx: "Um 18:00 holte Mrs Applegarth Nikotinlösung aus dem Gewächshaus und behielt den Schlüssel." },
        had3: { q: "Ist diese Lösung gefährlich?", a: "Ein Tropfen auf die Lippen, und aus ist es, Miss. Ich halte sie unter Verschluss und fasse sie nur mit Handschuhen an." },
        had4: { q: "War der Herr ein guter Mensch?", a: "Zahlte pünktlich, Miss, und liebte seine Rosen mehr als die Leute. Heute früh sagte er, er verkaufe seinen Anteil, und der Garten gehe vielleicht mit.", v: "Er knetet seine Mütze und hebt den Blick nicht." },
        oli1: { q: "Wo waren Sie nach dem Dinner?", a: "Hier im Salon, Miss, ich habe Kaffee eingeschenkt. Zwanzig Jahre saßen die Brüder nicht an einem Tisch; ich konnte die Augen nicht von ihnen lassen.", v: "Den ganzen Abend im Salon. Die Dame des Hauses." },
        oli2: { q: "Wessen Idee war es, die Pfeifen zu tauschen?", a: "Das stammt aus ihrer Kindheit, Miss, ihr Vater hat sie so versöhnt. [[Sie haben sich beim Dinner selbst daran erinnert, ich hatte damit nichts zu tun.]]" },
        oli3: { q: "Gehen Sie ins Gewächshaus?", a: "Die Rosen sind Haddows Sache, Miss. [[Ins Gewächshaus gehe ich nicht: Von der Schwüle dort bekomme ich Migräne.]]" }
      },
      objections: {
        oli2: { reply: "Schön, ich habe es vorgeschlagen! Ich wollte eine hübsche Geste, und Männer kommen auf so etwas nie von selbst.", nt: "Mrs Applegarth hat gelogen", nx: "Sie selbst schlug vor, die Pfeifen zu tauschen." },
        oli3: { reply: "Ja, ich habe die Lösung genommen! Die Rosen hatten Läuse, und ich habe sie selbst gespritzt, riechen Sie daran. Haddow hat ja nie Zeit.", nt: "Das Gewächshaus", nx: "Um 18:00 holte Mrs Applegarth Nikotinlösung aus dem Gewächshaus." }
      },
      wrong: {
        clement: "Das Gift war an Clements Pfeife, aber der Tausch war nicht seine Idee. Und das leere Fläschchen ausgerechnet dort zu verstecken, wo er selbst saß, hätte ihn nur verraten.",
        haddow: "Haddow betrat den ganzen Abend das Haus nicht, und ab sechs hatte die Hausherrin den Gewächshausschlüssel.",
        may: "May hat den ganzen Abend abgewaschen. Sie hat gesehen, wie die Hausherrin die Pfeife am Couchtisch abwischte.",
        proof: "Mrs Applegarth tupft sich die Augen: „Es war Clements Pfeife, nicht meine.“ Beweise, dass sie die Pfeife angefasst hat, oder warum sie ihrem Mann den Tod wünschen sollte."
      },
      deduce: [
        "Es war Clements Pfeife. Wer wusste vorher, dass der Hausherr sie rauchen würde?",
        "Wer wischte um neun das Mundstück ab?",
        "Wem schrieb der Hausherr, und über wen?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Mr Clement saß eine Woche auf der Polizeiwache. Mrs Applegarth verkaufte die Kelterei und zog zu ihrer Schwester nach Devon",
        p: [
          "Horatio Applegarth wollte seinem Bruder seinen Anteil an der Kelterei verkaufen und mit einer Witwe aus Bristol nach Kanada fahren. Seine Frau fand den nicht abgeschickten Brief.",
          "Olive richtete das Versöhnungsdinner aus und schlug selbst die Friedenspfeife vor. Um sechs holte sie die Nikotinlösung aus dem Gewächshaus, um neun bestrich sie damit das Mundstück von Clements Pfeife.",
          "Um zehn tauschten die Brüder die Pfeifen, und der Hausherr rauchte die seines Bruders. Das leere Fläschchen wickelte Olive in die Zeitung auf dem Sofa, wo Clement den ganzen Abend gesessen hatte."
        ]
      }
    },
    pl: {
      title: "Fajka pokoju",
      desc: "Przez dwadzieścia lat bracia się nie odzywali; w sobotę pogodzili się i zamienili fajkami. Kwadrans później starszy nie żył.",
      meta: ["Orchard Court, Somerset", "10 września 1932", "≈ 5 minut"],
      introEyebrow: "Salon · 22:15",
      introTitle: "Fajka pokoju",
      intro: [
        "Horatio i Clement Applegarthowie przez dwadzieścia lat byli skłóceni o rodzinną wytwórnię cydru. W sobotę żona Horatia wydała kolację pojednania.",
        "O dziesiątej bracia ze śmiechem zamienili się fajkami, jak w dzieciństwie. O 22:15 Horatio upuścił fajkę brata i upadł.",
        "Jesteś gościem w tym domu, panno Ado Langton. Kto dotykał tej fajki?"
      ],
      introVoice: "Pachnie tytoniem, różami i czymś gorzkim.",
      clues: {
        c1: { title: "Fajka", text: "Ustnik pachnie gorzko: roztwór nikotyny, jakim pryska się róże na mszyce. To fajka Clementa.", note: "Ustnik fajki był posmarowany nikotyną. To fajka Clementa Applegartha: bracia zamienili się fajkami o 22:00." },
        c2: { title: "List", text: "Niewysłany list na sekretarzyku, koperta z czerwoną pieczęcią! Pan domu pisał do jakiejś Rose, i ile czułości!", note: "Horatio pisał do Rose w Bristolu: sprzeda bratu swój udział w wytwórni, do października popłynie z nią do Kanady, a Olive dowie się ostatnia." },
        c3: { title: "Gazeta", text: "W złożonej gazecie na kanapie pusta buteleczka „Mszycobój”. Zawinięta starannie, jakby ze wstydu.", note: "W gazecie na kanapie, gdzie Clement siedział cały wieczór: pusta buteleczka po roztworze nikotyny." },
        c4: { title: "Szklaneczka", text: "Szklaneczka pana domu na kredensie, na dnie resztka whisky. Trucizny brak.", note: "W szklaneczce nie ma trucizny. Trucizna była na fajce." },
        c5: { title: "Wazon", text: "Róże w wazonie czymś opryskane, liście aż lśnią! Ktoś dziś wojował z mszycami, kochana!", note: "Róże w salonie opryskano dziś roztworem nikotyny przeciw mszycom." }
      },
      letter: [
        "„Moja Rose, kiedy pogodzę się z bratem,",
        "sprzedam mu swój udział w wytwórni.",
        "W październiku będziemy w Kanadzie.",
        "Olive nie dowie się niczego, aż",
        "statek odbije od brzegu. Twój H.”"
      ],
      decoys: {
        window: "Za oknem księżyc nad ogrodem. Gdzieś tam jest cieplarnia.",
        painting: "Pejzaż nad kredensem: wzgórza pod księżycem. Rama nowa, złocenie lśni.",
        clock: "Zegar stojący wskazuje dokładny czas. Wahadło kołysze się równo.",
        chess: "Bracia zaczęli partię, ale jej nie skończyli. Białe zdążyły wyprowadzić tylko skoczka."
      },
      suspects: {
        may: { name: "May Tibbs", role: "Pokojówka, 22 lata", intro: "Czepek, czarna sukienka, rumiane policzki." },
        clement: { name: "Pan Clement Applegarth", role: "Młodszy brat, 58 lat", intro: "Łysina, wąsy, wygnieciony garnitur. Pot na skroniach." },
        haddow: { name: "Jem Haddow", role: "Ogrodnik, 45 lat", intro: "Kaszkiet, kamizelka, ziemia za paznokciami." },
        olive: { name: "Pani Olive Applegarth", role: "Żona Horatia, 50 lat", intro: "Siwiejące fale, liliowa suknia, pot na czole." }
      },
      qs: {
        may1: { q: "Gdzie pani była wieczorem?", a: "Podawałam kolację i kawę, panienko, a potem zmywałam aż do samego krzyku." },
        may2: { q: "Kto dotykał fajki pana Clementa?", a: "O dziewiątej pani przecierała ją serwetką przy stoliku. Powiedziała: „Niech będzie jak nowa, na fajkę pokoju”.", v: "21:00, stolik, serwetka.", nt: "Pokojówka o 21:00", nx: "O 21:00 pani Applegarth przecierała ustnik fajki Clementa." },
        may3: { q: "Czy pan domu był w dobrym humorze?", a: "Jak nigdy, panienko. Rano dostał list z Bristolu, śpiewał w ogrodzie i dał mi pół korony.", v: "List z Bristolu i pan domu zaczyna śpiewać! To nie bez powodu!" },
        cle1: { q: "O co pokłócił się pan z bratem?", a: "O przepis na cydr, panienko, dwadzieścia lat temu. Głupota, ale obaj byliśmy uparci jak muły.", v: "Dwadzieścia lat wrogości i nagle pokój! Aż trudno uwierzyć, kochana!" },
        cle2: { q: "Kto wymyślił, żeby zamienić się fajkami?", a: "Olive, panienko, przy kolacji: „Niech to będzie fajka pokoju, jak wtedy, gdy byliście chłopcami”. Pośmialiśmy się, do dziesiątej nie ruszaliśmy fajek, jak kazała, i wtedy się zamieniliśmy.", v: "Zamianę zaproponowano przy kolacji.", nt: "Fajka pokoju", nx: "To Olive Applegarth zaproponowała przy kolacji, żeby bracia zamienili się fajkami." },
        cle3: { q: "Czy to pańska buteleczka?", a: "Nie, panienko, takiego świństwa nie biorę do ręki. Czytałem gazetę do dziesiątej, a potem przesiedliśmy się do szachów.", v: "Patrzy na buteleczkę jak na żmiję." },
        had1: { q: "Gdzie pan był wieczorem?", a: "W cieplarni i w stróżówce, panienko, do domu dziś nawet nie zajrzałem. Zawołali mnie, kiedy pan upadł." },
        had2: { q: "Kto brał środek na mszyce?", a: "Pani, panienko, o szóstej. Wzięła opryskiwacz i buteleczkę, powiedziała, że na różach w salonie są mszyce, i zabrała klucz od cieplarni.", v: "18:00, cieplarnia. Klucz poszedł z nią.", nt: "Ogrodnik o 18:00", nx: "O 18:00 pani Applegarth wzięła z cieplarni roztwór nikotyny i zatrzymała klucz." },
        had3: { q: "Czy ten roztwór jest groźny?", a: "Kropla na wargach i po wszystkim, panienko. Trzymam go pod kluczem i nie dotykam bez rękawic." },
        had4: { q: "Czy pan domu był dobrym człowiekiem?", a: "Płacił w terminie, panienko, a róże kochał bardziej niż ludzi. Rano powiedział, że sprzedaje udział i że ogród może też pójdzie.", v: "Miętosi w rękach kaszkiet i nie podnosi oczu." },
        oli1: { q: "Gdzie pani była po kolacji?", a: "Tutaj, w salonie, panienko, nalewałam kawę. Dwadzieścia lat bracia nie siedzieli przy jednym stole, nie mogłam oderwać od nich oczu.", v: "Cały wieczór w salonie. Pani domu." },
        oli2: { q: "Kto wymyślił, żeby zamienić się fajkami?", a: "To u nich z dzieciństwa, panienko, ojciec tak ich godził. [[Sami sobie przypomnieli przy kolacji, ja nie miałam z tym nic wspólnego.]]" },
        oli3: { q: "Czy bywa pani w cieplarni?", a: "Róże to sprawa Haddowa, panienko. [[Ja do cieplarni nie chodzę: od tej duchoty mam migrenę.]]" }
      },
      objections: {
        oli2: { reply: "No dobrze, to ja zaproponowałam! Chciałam pięknego gestu, a mężczyźni sami na takie rzeczy nie wpadną.", nt: "Pani Applegarth skłamała", nx: "To ona zaproponowała zamianę fajek." },
        oli3: { reply: "Tak, wzięłam roztwór! Róże miały mszyce i sama je opryskałam, niech pani powącha. Haddow nigdy nie ma czasu.", nt: "Cieplarnia", nx: "O 18:00 pani Applegarth wzięła z cieplarni roztwór nikotyny." }
      },
      wrong: {
        clement: "Trucizna była na fajce Clementa, ale zamiana nie była jego pomysłem. A chowanie pustej buteleczki akurat tam, gdzie sam siedział, tylko by go zgubiło.",
        haddow: "Haddow przez cały wieczór nie wszedł do domu, a klucz od cieplarni od szóstej miała pani.",
        may: "May cały wieczór zmywała. To ona widziała, jak pani przecierała fajkę przy stoliku.",
        proof: "Pani Applegarth przykłada chusteczkę do oczu: „To była fajka Clementa, nie moja”. Udowodnij, że dotykała fajki, albo dlaczego miałaby życzyć mężowi śmierci."
      },
      deduce: [
        "Fajka była Clementa. Kto wiedział z góry, że zapali ją pan domu?",
        "Kto przecierał ustnik o dziewiątej?",
        "Do kogo pisał pan domu i o kim?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Pana Clementa przez tydzień trzymano na posterunku. Pani Applegarth sprzedała wytwórnię i wyjechała do siostry w Devon",
        p: [
          "Horatio Applegarth zamierzał sprzedać bratu swój udział w wytwórni cydru i popłynąć do Kanady z wdową z Bristolu. Żona znalazła jego niewysłany list.",
          "Olive wydała kolację pojednania i sama zaproponowała braciom fajkę pokoju. O szóstej wzięła z cieplarni roztwór nikotyny na mszyce, a o dziewiątej posmarowała nim ustnik fajki Clementa.",
          "O dziesiątej bracia zamienili się fajkami i pan domu zapalił fajkę brata. Pustą buteleczkę Olive zawinęła w gazetę na kanapie, gdzie przez cały wieczór siedział Clement."
        ]
      }
    }
  }
});
