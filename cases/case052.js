window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "052", n: 52, scene: "parlour", searchTime: 80, culprit: "kittering",
  clues: {
    c1: { prop: "window", voice: "logic" },
    c2: { prop: "letter", voice: "gossip", puzzle: true },
    c3: { prop: "cushion", voice: "logic" },
    c4: { prop: "pipe", voice: "intuition" },
    c5: { prop: "clock", voice: "logic" },
  },
  decoys: { painting: "intuition", vase: "gossip", lamp: "logic", glass: "logic" },
  suspects: [
    { id: "tessa", color: "#bc9be0", look: { hair: "bun", hairColor: "#7a5a3a", outfit: "blouse", outfitColor: "#4a4a5a", extras: ["glasses", "sweat"], female: true }, qs: [
        { id: "tes1", voice: "gossip" },
        { id: "tes2", needs: "c3", voice: "gossip" },
        { id: "tes3" },
    ] },
    { id: "kittering", color: "#86b8dc", look: { hair: "slick", hairColor: "#3a2a1a", outfit: "suit", outfitColor: "#1e1e2a", extras: ["mustache", "tie"] }, qs: [
        { id: "kit1", voice: "intuition" },
        { id: "kit2" },
        { id: "kit3", needs: "c2" },
    ] },
    { id: "lysaght", color: "#c7c7c7", look: { hair: "grey-short", hairColor: "#c0c0c0", outfit: "suit", outfitColor: "#2a2a2a", extras: ["monocle", "sideburns"] }, qs: [
        { id: "lys1" },
        { id: "lys2", voice: "logic" },
        { id: "lys3" },
        { id: "lys4", voice: "intuition" },
    ] },
    { id: "nancy", color: "#e7a2b9", look: { hair: "bun", hairColor: "#b05a2a", outfit: "maid", outfitColor: "#1e1e1e", extras: ["headband"], female: true }, qs: [
        { id: "nan1" },
        { id: "nan2", needs: "c1", voice: "logic" },
        { id: "nan3", voice: "intuition" },
    ] },
  ],
  objections: { kit2: { evidence: "nan2" }, kit3: { evidence: "c2" } },
  proof: ["nan2", "lys1", "c2", "obj:kit2", "obj:kit3"],
  text: {
    ru: {
      title: "Вечерний воздух",
      desc: "Каждый вечер ровно в десять хозяин выходил с трубкой на балкон подышать. В эту субботу перила не выдержали.",
      meta: ["Ройял-Кресент, Бат", "21 января 1933", "≈ 5 минут"],
      introEyebrow: "Гостиная · 22:05",
      introTitle: "Перила",
      intro: [
        "После похорон мисс Гонт в гостиной её дома на втором этаже собрались родные и поверенный. Вечером прочли завещание: дом и всё состояние достались брату, мистеру Сильвестру Гонту.",
        "В десять он, как всегда, вышел на балкон, и перила не выдержали. Их кто-то подпилил.",
        "Вы гостите в доме, мисс Ада Лэнгтон. Кто выходил на балкон до него?"
      ],
      introVoice: "Из окна тянет морозом. На стекле тает иней.",
      clues: {
        c1: { title: "Окно", text: "Шпингалет поднят. На подоконнике мокрые пятна и железные опилки: кто-то выходил на заиндевевший балкон и вернулся через окно.", note: "Шпингалет окна поднят, на подоконнике мокрые пятна и железные опилки. Кто-то выходил на балкон до хозяина." },
        c2: { title: "Письмо", text: "Письмо на бюро у окна, и сургуч красный! Мистер Гонт кому-то пишет про долг и про дом!", note: "Мистер Гонт требует с Обри Киттеринга карточный долг: дом Киттеринга — к понедельнику." },
        c3: { title: "Подушка", text: "Под вышитой подушкой лобзик из рукодельной шкатулки мисс Ломакс. Перила подпилены этим лобзиком.", note: "Под подушкой на диване — лобзик мисс Ломакс из её рукодельной шкатулки." },
        c4: { title: "Трубка", text: "Трубка в пепельнице набита, но так и не раскурена. Он не успел.", note: "Хозяин каждый вечер в десять выходил на балкон с трубкой." },
        c5: { title: "Часы", text: "Напольные часы с боем. С последним ударом в десять хозяин открывал окно на балкон, это знал весь дом.", note: "В 22:00, с боем часов, мистер Гонт выходил на балкон. Привычку знал весь дом." }
      },
      letter: [
        "«Обри, долг чести есть долг чести.",
        "Вы проиграли мне в субботу ваш дом",
        "на Гей-стрит, при свидетелях.",
        "Ключи и бумаги жду к понедельнику,",
        "иначе клуб узнает всё. С. Гонт»"
      ],
      decoys: {
        painting: "Пейзаж над буфетом: холмы под луной. Покойная мисс Гонт любила его больше всех картин.",
        vase: "Белые лилии с похорон! От них в гостиной пахнет, как в церкви, дорогуша!",
        lamp: "Торшер у окна горит. Абажур развёрнут к дивану.",
        glass: "Стакан на буфете, на дне капля хереса. Пили за упокой."
      },
      suspects: {
        tessa: { name: "Мисс Тесса Ломакс", role: "Компаньонка покойной мисс Гонт, 31 год", intro: "Очки, пучок, серая блузка, испарина на лбу." },
        kittering: { name: "Мистер Обри Киттеринг", role: "Друг семьи, игрок в вист, 40 лет", intro: "Гладкий пробор, усики, чёрный галстук. Тасует колоду." },
        lysaght: { name: "Мистер Хобарт Лисахт", role: "Поверенный семьи, 64 года", intro: "Монокль, бакенбарды, папка с завещанием под мышкой." },
        nancy: { name: "Нэнси Пердью", role: "Горничная, 20 лет", intro: "Наколка, рыжий пучок, руки в медной пыли." }
      },
      qs: {
        tes1: { q: "Что вам оставила мисс Гонт?", a: "Ничего, мисс, кроме шкатулки с лобзиками. Восемь лет я читала ей вслух, а дом достался брату.", v: "Восемь лет задаром! Ох, обидно, дорогуша!" },
        tes2: { q: "Это ваш лобзик?", a: "Мой, мисс, из рукодельной шкатулки: я выпиливаю рамки для фотографий. Шкатулка весь вечер стояла в библиотеке, у всех на виду.", v: "Лобзиком — чугунные перила? Да им только фанерку пилить!" },
        tes3: { q: "Мистер Гонт был к вам добр?", a: "За восемь лет он ни разу не назвал меня по имени, мисс, всё «девица» да «эй, вы»." },
        kit1: { q: "Вы хорошо знали мисс Гонт?", a: "Двадцать лет играл с ней в вист по четвергам, мисс. Она жульничала, а я делал вид, что не замечаю.", v: "Он вспоминает её с нежностью и вертит в пальцах колоду." },
        kit2: { q: "Где вы были, пока читали завещание?", a: "В библиотеке, мисс, кроме десяти минут. [[В двадцать минут девятого я выходил в холл позвонить в клуб.]]" },
        kit3: { q: "Вы должны мистеру Гонту?", a: "Играли мы в прошлую субботу, мисс, это правда. [[Проиграл пару фунтов и расплатился в тот же вечер, наличными.]]" },
        lys1: { q: "Когда читали завещание?", a: "С восьми до без четверти девять, мисс, в библиотеке, при всех. Выходил только мистер Киттеринг, минут на десять, около двадцати минут девятого.", nt: "Поверенный", nx: "Во время чтения завещания из библиотеки выходил только мистер Киттеринг, около 20:20, минут на десять." },
        lys2: { q: "Что было в завещании?", a: "Дом и всё состояние — брату, мистеру Сильвестру Гонту. Мисс Ломакс — шкатулка, мне — гонорар.", v: "Всё — брату. Компаньонке — шкатулка." },
        lys3: { q: "Мистер Гонт был доволен?", a: "Сказал, что к понедельнику у него будет два дома вместо одного, мисс, и рассмеялся." },
        lys4: { q: "Давно вы ведёте дела семьи?", a: "Тридцать лет, мисс. Я видел, как мистер Гонт выигрывал в карты имения, и ни разу — чтобы проигрывал.", v: "Он протирает монокль и вздыхает." },
        nan1: { q: "Где вы были вечером?", a: "С восьми до девяти чистила медь в холле, мисс, а потом подавала чай в библиотеку." },
        nan2: { q: "Кто выходил в холл во время завещания?", a: "Только мистер Киттеринг, мисс, в половине девятого. К телефону он не подходил: вышел из гостиной и отряхивал колени.", v: "20:30, из гостиной. Телефон не трогали.", nt: "Горничная в 20:30", nx: "В 20:30 мистер Киттеринг вышел из гостиной, а не от телефона, и отряхивал колени." },
        nan3: { q: "Хозяин выходил на балкон каждый вечер?", a: "Ровно в десять, мисс, с трубкой, хоть в снег, хоть в дождь. Весь дом знал.", v: "Она теребит фартук и не сводит глаз с окна." }
      },
      objections: {
        kit2: { reply: "…Был я в гостиной. Хотел побыть там один. Двадцать лет виста с покойной, мисс, а попрощаться так никто и не дал.", nt: "Киттеринг солгал", nx: "В 20:20 он был в гостиной, а не у телефона." },
        kit3: { reply: "Дом на Гей-стрит, мисс. Мой дед его строил. А Гонт собирался в понедельник продать его вместе с этим, и рассказать клубу, если я не отдам.", nt: "Долг чести", nx: "Киттеринг проиграл мистеру Гонту свой дом. Расплатиться нужно было к понедельнику. Вот мотив." }
      },
      wrong: {
        tessa: "Мисс Ломакс весь вечер слушала завещание в библиотеке. А лобзиком чугунные перила не перепилишь, им пилят фанерку.",
        lysaght: "Мистер Лисахт читал завещание вслух с восьми до без четверти девять и ни разу не вставал.",
        nancy: "Нэнси до девяти чистила медь в холле. Это она видела, откуда вышел мистер Киттеринг.",
        proof: "Мистер Киттеринг тасует колоду: «Я звонил в клуб, мисс, вот и всё». Докажите, что он был в гостиной, или чем ему грозил понедельник."
      },
      deduce: [
        "Лобзиком чугун не перепилишь. Кто выходил во время завещания?",
        "Откуда в половине девятого вышел мистер Киттеринг, если не от телефона?",
        "Кто проиграл мистеру Гонту дом?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Дом на Гей-стрит остался у Киттеринга. В клубе говорили, что ему наконец повезло в карты",
        p: [
          "Двадцать лет мистер Сильвестр Гонт выигрывал в карты чужие имения. В прошлую субботу он выиграл у Обри Киттеринга дом, и расплатиться нужно было к понедельнику.",
          "Пока в библиотеке читали завещание, Киттеринг будто бы вышел позвонить. Через окно гостиной он вылез на заиндевевший балкон и подпилил ножовкой перила, к которым хозяин каждый вечер прислонялся с трубкой. Ножовку он бросил с балкона в соседний сад.",
          "Лобзик мисс Ломакс он сунул под подушку, чтобы подумали на неё. Но горничная видела, как он выходил из гостиной и отряхивал колени."
        ]
      }
    },
    en: {
      title: "A Breath of Air",
      desc: "Every evening at ten sharp the master stepped out onto the balcony with his pipe for some air. This Saturday the railing gave way.",
      meta: ["Royal Crescent, Bath", "21 January 1933", "≈ 5 minutes"],
      introEyebrow: "Parlour · 10:05 pm",
      introTitle: "The railing",
      intro: [
        "After Miss Gaunt's funeral, her family and the solicitor gathered in the first-floor parlour of her house. In the evening the will was read: the house and the whole estate went to her brother, Mr Sylvester Gaunt.",
        "At ten he stepped out onto the balcony as usual, and the railing gave way. Someone had sawn through it.",
        "You're staying in the house, Miss Ada Langton. Who went out on the balcony before him?"
      ],
      introVoice: "Frosty air seeps from the window. Rime is melting on the glass.",
      clues: {
        c1: { title: "Window", text: "The latch is up. Wet patches and iron filings on the sill: someone went out onto the frosty balcony and came back in through the window.", note: "The window latch is up, wet patches and iron filings on the sill. Someone went out on the balcony before the master." },
        c2: { title: "Letter", text: "A letter on the bureau by the window, and a red seal! Mr Gaunt is writing to someone about a debt and a house!", note: "Mr Gaunt demands Aubrey Kittering's card debt: Kittering's house, by Monday." },
        c3: { title: "Cushion", text: "Under the embroidered cushion, a fretsaw from Miss Lomax's work box. The railing was cut with this fretsaw.", note: "Under the sofa cushion: Miss Lomax's fretsaw from her work box." },
        c4: { title: "Pipe", text: "The pipe in the ashtray is filled but never lit. He didn't get the chance.", note: "Every evening at ten the master went out on the balcony with his pipe." },
        c5: { title: "Clock", text: "A striking grandfather clock. On the last stroke of ten the master opened the window onto the balcony; the whole house knew it.", note: "At 10:00, as the clock struck, Mr Gaunt went out on the balcony. The whole house knew the habit." }
      },
      letter: [
        "“Aubrey, a debt of honour is a debt of honour.",
        "Last Saturday you lost me your house",
        "in Gay Street, before witnesses.",
        "I expect the keys and deeds by Monday,",
        "or the club shall hear everything. S. Gaunt”"
      ],
      decoys: {
        painting: "A landscape over the sideboard: hills under the moon. The late Miss Gaunt loved it best of all her pictures.",
        vase: "White lilies from the funeral! The parlour smells like a church, darling!",
        lamp: "The standard lamp by the window is lit. The shade is turned towards the sofa.",
        glass: "A tumbler on the sideboard with a drop of sherry. They drank to the departed."
      },
      suspects: {
        tessa: { name: "Miss Tessa Lomax", role: "The late Miss Gaunt's companion, 31", intro: "Spectacles, a bun, a grey blouse, sweat on her brow." },
        kittering: { name: "Mr Aubrey Kittering", role: "Family friend, whist player, 40", intro: "Sleek parting, a small moustache, a black tie. Shuffles a pack of cards." },
        lysaght: { name: "Mr Hobart Lysaght", role: "Family solicitor, 64", intro: "A monocle, side-whiskers, the will in a folder under his arm." },
        nancy: { name: "Nancy Purdew", role: "Housemaid, 20", intro: "A cap, a ginger bun, brass polish on her hands." }
      },
      qs: {
        tes1: { q: "What did Miss Gaunt leave you?", a: "Nothing, miss, except a box of fretsaws. Eight years I read aloud to her, and the house went to her brother.", v: "Eight years for nothing! Oh, it stings, darling!" },
        tes2: { q: "Is this your fretsaw?", a: "It is, miss, from my work box: I cut photograph frames. The box stood in the library all evening, in plain view of everyone.", v: "A fretsaw, through a cast-iron railing? It's only fit for plywood!" },
        tes3: { q: "Was Mr Gaunt kind to you?", a: "In eight years he never once called me by my name, miss, it was always “girl” or “you there”." },
        kit1: { q: "Did you know Miss Gaunt well?", a: "Twenty years I played whist with her on Thursdays, miss. She cheated, and I pretended not to notice.", v: "He remembers her fondly and turns a pack of cards in his fingers." },
        kit2: { q: "Where were you while the will was read?", a: "In the library, miss, except for ten minutes. [[At twenty past eight I went out to the hall to telephone the club.]]" },
        kit3: { q: "Do you owe Mr Gaunt money?", a: "We did play last Saturday, miss, that's true. [[I lost a couple of pounds and paid up the same evening, in cash.]]" },
        lys1: { q: "When was the will read?", a: "From eight until a quarter to nine, miss, in the library, with everyone present. Only Mr Kittering went out, for ten minutes or so, at about twenty past eight.", nt: "The solicitor", nx: "While the will was read, only Mr Kittering left the library, at about 8:20, for some ten minutes." },
        lys2: { q: "What was in the will?", a: "The house and the whole estate to her brother, Mr Sylvester Gaunt. To Miss Lomax, the work box; to me, my fee.", v: "Everything to the brother. A work box for the companion." },
        lys3: { q: "Was Mr Gaunt pleased?", a: "He said that by Monday he'd have two houses instead of one, miss, and laughed." },
        lys4: { q: "Have you handled the family's affairs long?", a: "Thirty years, miss. I've seen Mr Gaunt win estates at cards, and never once seen him lose.", v: "He polishes his monocle and sighs." },
        nan1: { q: "Where were you this evening?", a: "From eight till nine I was polishing the brass in the hall, miss, and then I took tea into the library." },
        nan2: { q: "Who came out into the hall while the will was read?", a: "Only Mr Kittering, miss, at half past eight. He never went near the telephone: he came out of the parlour, brushing off his knees.", v: "8:30, from the parlour. The telephone wasn't touched.", nt: "The maid at 8:30", nx: "At 8:30 Mr Kittering came out of the parlour, not from the telephone, brushing off his knees." },
        nan3: { q: "Did the master go out on the balcony every evening?", a: "At ten sharp, miss, with his pipe, snow or rain. The whole house knew.", v: "She twists her apron and can't take her eyes off the window." }
      },
      objections: {
        kit2: { reply: "…I was in the parlour. I wanted to be alone there. Twenty years of whist with her, miss, and nobody gave me a chance to say goodbye.", nt: "Kittering lied", nx: "At 8:20 he was in the parlour, not at the telephone." },
        kit3: { reply: "The house in Gay Street, miss. My grandfather built it. And on Monday Gaunt meant to sell it along with this one, and tell the club if I didn't hand it over.", nt: "A debt of honour", nx: "Kittering lost his house to Mr Gaunt at cards. The debt was due on Monday. There's the motive." }
      },
      wrong: {
        tessa: "Miss Lomax sat through the reading of the will in the library all evening. And you can't cut a cast-iron railing with a fretsaw; it's for plywood.",
        lysaght: "Mr Lysaght read the will aloud from eight to a quarter to nine and never once got up.",
        nancy: "Nancy was polishing brass in the hall until nine. She's the one who saw where Mr Kittering came out from.",
        proof: "Mr Kittering shuffles his cards: “I telephoned the club, miss, that's all.” Prove he was in the parlour, or what Monday held in store for him."
      },
      deduce: [
        "A fretsaw won't cut cast iron. Who left the room while the will was read?",
        "Where did Mr Kittering come from at 8:30, if not the telephone?",
        "Who lost a house to Mr Gaunt at cards?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "Kittering kept his house in Gay Street. At the club they said his luck at cards had turned at last",
        p: [
          "For twenty years Mr Sylvester Gaunt had won other men's estates at cards. Last Saturday he won Aubrey Kittering's house, and the debt was due by Monday.",
          "While the will was being read in the library, Kittering went out, supposedly to telephone. He climbed through the parlour window onto the frosty balcony and sawed through the railing the master leant on every evening with his pipe. He threw the hacksaw from the balcony into the next-door garden.",
          "He pushed Miss Lomax's fretsaw under the cushion so that she would be suspected. But the maid saw him come out of the parlour, brushing off his knees."
        ]
      }
    },
    es: {
      title: "Un poco de aire",
      desc: "Cada noche, a las diez en punto, el señor salía con su pipa al balcón a tomar el aire. Este sábado la barandilla cedió.",
      meta: ["Royal Crescent, Bath", "21 de enero de 1933", "≈ 5 minutos"],
      introEyebrow: "Salón · 22:05",
      introTitle: "La barandilla",
      intro: [
        "Tras el entierro de la señorita Gaunt, la familia y el abogado se reunieron en el salón del primer piso de su casa. Por la tarde se leyó el testamento: la casa y toda la fortuna pasaban a su hermano, el señor Sylvester Gaunt.",
        "A las diez salió al balcón como siempre, y la barandilla cedió. Alguien la había serrado.",
        "Pasas unos días en la casa, señorita Ada Langton. ¿Quién salió al balcón antes que él?"
      ],
      introVoice: "Por la ventana entra el frío. La escarcha se derrite en el cristal.",
      clues: {
        c1: { title: "Ventana", text: "El pestillo está levantado. En el alféizar hay manchas húmedas y limaduras de hierro: alguien salió al balcón escarchado y volvió a entrar por la ventana.", note: "El pestillo de la ventana está levantado, hay manchas húmedas y limaduras de hierro en el alféizar. Alguien salió al balcón antes que el señor." },
        c2: { title: "Carta", text: "¡Una carta en el escritorio junto a la ventana, y con lacre rojo! ¡El señor Gaunt le escribe a alguien sobre una deuda y una casa!", note: "El señor Gaunt le exige a Aubrey Kittering una deuda de juego: la casa de Kittering, para el lunes." },
        c3: { title: "Cojín", text: "Bajo el cojín bordado, una segueta del costurero de la señorita Lomax. La barandilla la serraron con esta segueta.", note: "Bajo el cojín del sofá: la segueta de la señorita Lomax, de su costurero." },
        c4: { title: "Pipa", text: "La pipa del cenicero está cargada, pero nunca se encendió. No le dio tiempo.", note: "Cada noche a las diez el señor salía al balcón con su pipa." },
        c5: { title: "Reloj", text: "Un reloj de pie con campanadas. Con la última campanada de las diez el señor abría la ventana del balcón; lo sabía toda la casa.", note: "A las 22:00, al dar el reloj, el señor Gaunt salía al balcón. Toda la casa conocía la costumbre." }
      },
      letter: [
        "«Aubrey, una deuda de honor es una deuda de honor.",
        "El sábado pasado perdió usted conmigo su casa",
        "de Gay Street, ante testigos.",
        "Espero las llaves y las escrituras para el lunes,",
        "o el club se enterará de todo. S. Gaunt»"
      ],
      decoys: {
        painting: "Un paisaje sobre el aparador: colinas bajo la luna. Era el cuadro favorito de la difunta señorita Gaunt.",
        vase: "¡Lirios blancos del entierro! ¡El salón huele a iglesia, querida!",
        lamp: "La lámpara de pie junto a la ventana está encendida. La pantalla mira hacia el sofá.",
        glass: "Un vaso en el aparador con una gota de jerez. Brindaron por la difunta."
      },
      suspects: {
        tessa: { name: "Señorita Tessa Lomax", role: "Dama de compañía de la difunta señorita Gaunt, 31 años", intro: "Gafas, moño, blusa gris, sudor en la frente." },
        kittering: { name: "Señor Aubrey Kittering", role: "Amigo de la familia, jugador de whist, 40 años", intro: "Raya impecable, bigotito, corbata negra. Baraja una y otra vez." },
        lysaght: { name: "Señor Hobart Lysaght", role: "Abogado de la familia, 64 años", intro: "Monóculo, patillas, el testamento en una carpeta bajo el brazo." },
        nancy: { name: "Nancy Purdew", role: "Doncella, 20 años", intro: "Cofia, moño pelirrojo, polvo de latón en las manos." }
      },
      qs: {
        tes1: { q: "¿Qué le dejó la señorita Gaunt?", a: "Nada, señorita, salvo una caja de seguetas. Ocho años leyéndole en voz alta, y la casa fue para su hermano.", v: "¡Ocho años para nada! ¡Ay, eso escuece, querida!" },
        tes2: { q: "¿Es suya esta segueta?", a: "Sí, señorita, de mi costurero: recorto marcos para fotografías. El costurero estuvo toda la tarde en la biblioteca, a la vista de todos.", v: "¿Una segueta, contra una barandilla de hierro colado? ¡Si solo sirve para madera contrachapada!" },
        tes3: { q: "¿El señor Gaunt era amable con usted?", a: "En ocho años no me llamó ni una vez por mi nombre, señorita: siempre «muchacha» o «oiga, usted»." },
        kit1: { q: "¿Conocía bien a la señorita Gaunt?", a: "Veinte años jugando al whist con ella los jueves, señorita. Ella hacía trampas y yo fingía no verlo.", v: "La recuerda con cariño y hace girar una baraja entre los dedos." },
        kit2: { q: "¿Dónde estuvo mientras se leía el testamento?", a: "En la biblioteca, señorita, salvo diez minutos. [[A las ocho y veinte salí al vestíbulo a telefonear al club.]]" },
        kit3: { q: "¿Le debe dinero al señor Gaunt?", a: "Jugamos el sábado pasado, señorita, eso es verdad. [[Perdí un par de libras y las pagué esa misma noche, en efectivo.]]" },
        lys1: { q: "¿Cuándo se leyó el testamento?", a: "De ocho a nueve menos cuarto, señorita, en la biblioteca, delante de todos. Solo salió el señor Kittering, unos diez minutos, hacia las ocho y veinte.", nt: "El abogado", nx: "Durante la lectura del testamento solo salió de la biblioteca el señor Kittering, hacia las 20:20, unos diez minutos." },
        lys2: { q: "¿Qué decía el testamento?", a: "La casa y toda la fortuna, para el hermano, el señor Sylvester Gaunt. Para la señorita Lomax, el costurero; para mí, mis honorarios.", v: "Todo para el hermano. Un costurero para la dama de compañía." },
        lys3: { q: "¿Estaba contento el señor Gaunt?", a: "Dijo que para el lunes tendría dos casas en vez de una, señorita, y se echó a reír." },
        lys4: { q: "¿Lleva mucho con los asuntos de la familia?", a: "Treinta años, señorita. He visto al señor Gaunt ganar fincas a las cartas, y nunca, ni una vez, perder.", v: "Limpia el monóculo y suspira." },
        nan1: { q: "¿Dónde estuvo esta noche?", a: "De ocho a nueve estuve limpiando los bronces del vestíbulo, señorita, y luego serví el té en la biblioteca." },
        nan2: { q: "¿Quién salió al vestíbulo durante el testamento?", a: "Solo el señor Kittering, señorita, a las ocho y media. Al teléfono no se acercó: salió del salón sacudiéndose las rodillas.", v: "20:30, del salón. El teléfono no se tocó.", nt: "La doncella a las 20:30", nx: "A las 20:30 el señor Kittering salió del salón, no del teléfono, sacudiéndose las rodillas." },
        nan3: { q: "¿El señor salía al balcón todas las noches?", a: "A las diez en punto, señorita, con su pipa, nevara o lloviera. Lo sabía toda la casa.", v: "Retuerce el delantal y no aparta la vista de la ventana." }
      },
      objections: {
        kit2: { reply: "…Estuve en el salón. Quería estar allí a solas. Veinte años de whist con ella, señorita, y nadie me dejó despedirme.", nt: "Kittering mintió", nx: "A las 20:20 estaba en el salón, no al teléfono." },
        kit3: { reply: "La casa de Gay Street, señorita. La construyó mi abuelo. Y el lunes Gaunt pensaba venderla junto con esta, y contárselo al club si no se la entregaba.", nt: "Deuda de honor", nx: "Kittering perdió su casa a las cartas con el señor Gaunt. Tenía que pagar el lunes. Ese es el móvil." }
      },
      wrong: {
        tessa: "La señorita Lomax estuvo toda la tarde en la biblioteca escuchando el testamento. Y una barandilla de hierro colado no se sierra con una segueta: eso es para madera contrachapada.",
        lysaght: "El señor Lysaght leyó el testamento en voz alta de ocho a nueve menos cuarto y no se levantó ni una vez.",
        nancy: "Nancy estuvo limpiando bronces en el vestíbulo hasta las nueve. Fue ella quien vio de dónde salió el señor Kittering.",
        proof: "El señor Kittering baraja: «Telefoneé al club, señorita, eso es todo». Demuestra que estuvo en el salón, o qué le esperaba el lunes."
      },
      deduce: [
        "Una segueta no corta el hierro colado. ¿Quién salió durante la lectura del testamento?",
        "¿De dónde salió el señor Kittering a las 20:30, si no del teléfono?",
        "¿Quién perdió una casa a las cartas con el señor Gaunt?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "Kittering conservó su casa de Gay Street. En el club decían que por fin le sonreía la suerte en las cartas",
        p: [
          "Durante veinte años el señor Sylvester Gaunt había ganado a las cartas fincas ajenas. El sábado pasado le ganó a Aubrey Kittering su casa, y la deuda vencía el lunes.",
          "Mientras en la biblioteca se leía el testamento, Kittering salió, supuestamente a telefonear. Salió por la ventana del salón al balcón escarchado y serró la barandilla en la que el señor se apoyaba cada noche con su pipa. La sierra para metales la tiró desde el balcón al jardín vecino.",
          "Metió la segueta de la señorita Lomax bajo el cojín para que sospecharan de ella. Pero la doncella lo vio salir del salón sacudiéndose las rodillas."
        ]
      }
    },
    de: {
      title: "Frische Luft",
      desc: "Jeden Abend Punkt zehn trat der Hausherr mit seiner Pfeife auf den Balkon, um Luft zu schnappen. An diesem Samstag gab das Geländer nach.",
      meta: ["Royal Crescent, Bath", "21. Januar 1933", "≈ 5 Minuten"],
      introEyebrow: "Salon · 22:05",
      introTitle: "Das Geländer",
      intro: [
        "Nach Miss Gaunts Beerdigung versammelten sich die Familie und der Anwalt im Salon im ersten Stock ihres Hauses. Am Abend wurde das Testament verlesen: Haus und Vermögen gingen an ihren Bruder, Mr Sylvester Gaunt.",
        "Um zehn trat er wie immer auf den Balkon, und das Geländer gab nach. Jemand hatte es angesägt.",
        "Du bist Gast im Haus, Miss Ada Langton. Wer war vor ihm auf dem Balkon?"
      ],
      introVoice: "Vom Fenster zieht Frostluft herein. Auf dem Glas taut der Reif.",
      clues: {
        c1: { title: "Fenster", text: "Der Riegel ist hochgeschoben. Auf dem Fensterbrett feuchte Flecken und Eisenspäne: Jemand ist auf den bereiften Balkon hinausgestiegen und durchs Fenster zurückgekommen.", note: "Der Fensterriegel ist hochgeschoben, feuchte Flecken und Eisenspäne auf dem Fensterbrett. Jemand war vor dem Hausherrn auf dem Balkon." },
        c2: { title: "Brief", text: "Ein Brief auf dem Sekretär am Fenster, und das Siegel rot! Mr Gaunt schreibt jemandem über eine Schuld und ein Haus!", note: "Mr Gaunt verlangt von Aubrey Kittering eine Spielschuld: Kitterings Haus, bis Montag." },
        c3: { title: "Kissen", text: "Unter dem bestickten Kissen eine Laubsäge aus Miss Lomax' Nähkasten. Das Geländer wurde mit dieser Laubsäge angesägt.", note: "Unter dem Sofakissen: Miss Lomax' Laubsäge aus ihrem Nähkasten." },
        c4: { title: "Pfeife", text: "Die Pfeife im Aschenbecher ist gestopft, aber nie angezündet worden. Er kam nicht mehr dazu.", note: "Jeden Abend um zehn trat der Hausherr mit seiner Pfeife auf den Balkon." },
        c5: { title: "Uhr", text: "Eine schlagende Standuhr. Beim letzten Schlag um zehn öffnete der Hausherr das Fenster zum Balkon; das ganze Haus wusste es.", note: "Um 22:00, beim Stundenschlag, trat Mr Gaunt auf den Balkon. Die Gewohnheit kannte das ganze Haus." }
      },
      letter: [
        "„Aubrey, Ehrenschuld ist Ehrenschuld.",
        "Letzten Samstag haben Sie mir Ihr Haus",
        "in der Gay Street verspielt, vor Zeugen.",
        "Schlüssel und Urkunden erwarte ich bis Montag,",
        "sonst erfährt der Klub alles. S. Gaunt“"
      ],
      decoys: {
        painting: "Eine Landschaft über der Anrichte: Hügel unter dem Mond. Die verstorbene Miss Gaunt liebte sie von allen Bildern am meisten.",
        vase: "Weiße Lilien von der Beerdigung! Im Salon riecht es wie in der Kirche, Schätzchen!",
        lamp: "Die Stehlampe am Fenster brennt. Der Schirm ist zum Sofa gedreht.",
        glass: "Ein Glas auf der Anrichte, ein Tropfen Sherry darin. Man hat auf die Verstorbene getrunken."
      },
      suspects: {
        tessa: { name: "Miss Tessa Lomax", role: "Gesellschafterin der verstorbenen Miss Gaunt, 31", intro: "Brille, Haarknoten, graue Bluse, Schweiß auf der Stirn." },
        kittering: { name: "Mr Aubrey Kittering", role: "Freund der Familie, Whistspieler, 40", intro: "Glatter Scheitel, Schnurrbärtchen, schwarze Krawatte. Mischt ein Kartenspiel." },
        lysaght: { name: "Mr Hobart Lysaght", role: "Anwalt der Familie, 64", intro: "Monokel, Koteletten, das Testament in einer Mappe unter dem Arm." },
        nancy: { name: "Nancy Purdew", role: "Hausmädchen, 20", intro: "Häubchen, roter Knoten, Messingstaub an den Händen." }
      },
      qs: {
        tes1: { q: "Was hat Miss Gaunt Ihnen hinterlassen?", a: "Nichts, Miss, außer einem Kasten mit Laubsägen. Acht Jahre habe ich ihr vorgelesen, und das Haus bekam ihr Bruder.", v: "Acht Jahre für nichts! Ach, das tut weh, Schätzchen!" },
        tes2: { q: "Ist das Ihre Laubsäge?", a: "Ja, Miss, aus meinem Nähkasten: Ich säge Bilderrahmen aus. Der Kasten stand den ganzen Abend in der Bibliothek, vor aller Augen.", v: "Eine Laubsäge, durch ein gusseisernes Geländer? Die taugt doch nur für Sperrholz!" },
        tes3: { q: "War Mr Gaunt freundlich zu Ihnen?", a: "In acht Jahren hat er mich kein einziges Mal beim Namen genannt, Miss, immer nur „Mädchen“ oder „Sie da“." },
        kit1: { q: "Kannten Sie Miss Gaunt gut?", a: "Zwanzig Jahre habe ich donnerstags mit ihr Whist gespielt, Miss. Sie hat gemogelt, und ich tat so, als merkte ich es nicht.", v: "Er erinnert sich zärtlich an sie und dreht ein Kartenspiel zwischen den Fingern." },
        kit2: { q: "Wo waren Sie, während das Testament verlesen wurde?", a: "In der Bibliothek, Miss, bis auf zehn Minuten. [[Um zwanzig nach acht ging ich in die Halle, um im Klub anzurufen.]]" },
        kit3: { q: "Schulden Sie Mr Gaunt Geld?", a: "Gespielt haben wir letzten Samstag, Miss, das stimmt. [[Ich habe ein paar Pfund verloren und noch am selben Abend bar bezahlt.]]" },
        lys1: { q: "Wann wurde das Testament verlesen?", a: "Von acht bis Viertel vor neun, Miss, in der Bibliothek, vor allen. Den Raum verlassen hat nur Mr Kittering, für etwa zehn Minuten, gegen zwanzig nach acht.", nt: "Der Anwalt", nx: "Während der Testamentsverlesung verließ nur Mr Kittering die Bibliothek, gegen 20:20, für etwa zehn Minuten." },
        lys2: { q: "Was stand im Testament?", a: "Haus und Vermögen an den Bruder, Mr Sylvester Gaunt. Miss Lomax bekommt den Nähkasten, ich mein Honorar.", v: "Alles an den Bruder. Ein Nähkasten für die Gesellschafterin." },
        lys3: { q: "War Mr Gaunt zufrieden?", a: "Er sagte, bis Montag habe er zwei Häuser statt einem, Miss, und lachte." },
        lys4: { q: "Führen Sie schon lange die Geschäfte der Familie?", a: "Dreißig Jahre, Miss. Ich habe Mr Gaunt Güter beim Kartenspiel gewinnen sehen und kein einziges Mal verlieren.", v: "Er putzt sein Monokel und seufzt." },
        nan1: { q: "Wo waren Sie heute Abend?", a: "Von acht bis neun habe ich in der Halle das Messing geputzt, Miss, und danach den Tee in die Bibliothek gebracht." },
        nan2: { q: "Wer kam während der Verlesung in die Halle?", a: "Nur Mr Kittering, Miss, um halb neun. Ans Telefon ist er nicht gegangen: Er kam aus dem Salon und klopfte sich die Knie ab.", v: "20:30, aus dem Salon. Das Telefon wurde nicht angerührt.", nt: "Das Hausmädchen um 20:30", nx: "Um 20:30 kam Mr Kittering aus dem Salon, nicht vom Telefon, und klopfte sich die Knie ab." },
        nan3: { q: "Ging der Herr jeden Abend auf den Balkon?", a: "Punkt zehn, Miss, mit seiner Pfeife, ob Schnee oder Regen. Das ganze Haus wusste es.", v: "Sie knetet ihre Schürze und lässt das Fenster nicht aus den Augen." }
      },
      objections: {
        kit2: { reply: "…Ich war im Salon. Ich wollte dort allein sein. Zwanzig Jahre Whist mit ihr, Miss, und niemand ließ mich Abschied nehmen.", nt: "Kittering hat gelogen", nx: "Um 20:20 war er im Salon, nicht am Telefon." },
        kit3: { reply: "Das Haus in der Gay Street, Miss. Mein Großvater hat es gebaut. Und am Montag wollte Gaunt es zusammen mit diesem hier verkaufen und dem Klub alles erzählen, falls ich es nicht herausgebe.", nt: "Ehrenschuld", nx: "Kittering verspielte sein Haus an Mr Gaunt. Bezahlen musste er bis Montag. Das ist das Motiv." }
      },
      wrong: {
        tessa: "Miss Lomax saß den ganzen Abend bei der Testamentsverlesung in der Bibliothek. Und ein gusseisernes Geländer sägt man nicht mit der Laubsäge an, die ist für Sperrholz.",
        lysaght: "Mr Lysaght las das Testament von acht bis Viertel vor neun vor und stand kein einziges Mal auf.",
        nancy: "Nancy putzte bis neun in der Halle das Messing. Sie hat gesehen, woher Mr Kittering kam.",
        proof: "Mr Kittering mischt die Karten: „Ich habe im Klub angerufen, Miss, das ist alles.“ Beweise, dass er im Salon war, oder was ihm der Montag bringen sollte."
      },
      deduce: [
        "Eine Laubsäge schneidet kein Gusseisen. Wer verließ während der Verlesung den Raum?",
        "Woher kam Mr Kittering um 20:30, wenn nicht vom Telefon?",
        "Wer hat sein Haus an Mr Gaunt verspielt?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Kittering behielt sein Haus in der Gay Street. Im Klub hieß es, endlich habe er Glück im Spiel",
        p: [
          "Zwanzig Jahre lang hatte Mr Sylvester Gaunt anderen Leuten beim Kartenspiel ihre Güter abgenommen. Letzten Samstag gewann er Aubrey Kitterings Haus, und die Schuld war bis Montag fällig.",
          "Während in der Bibliothek das Testament verlesen wurde, ging Kittering angeblich telefonieren. Er stieg durchs Salonfenster auf den bereiften Balkon und sägte das Geländer an, an das sich der Hausherr jeden Abend mit seiner Pfeife lehnte. Die Metallsäge warf er vom Balkon in den Nachbargarten.",
          "Miss Lomax' Laubsäge schob er unter das Kissen, damit der Verdacht auf sie fiel. Aber das Hausmädchen sah ihn aus dem Salon kommen und sich die Knie abklopfen."
        ]
      }
    },
    pl: {
      title: "Wieczorne powietrze",
      desc: "Co wieczór punktualnie o dziesiątej pan domu wychodził z fajką na balkon zaczerpnąć powietrza. Tej soboty balustrada nie wytrzymała.",
      meta: ["Royal Crescent, Bath", "21 stycznia 1933", "≈ 5 minut"],
      introEyebrow: "Salon · 22:05",
      introTitle: "Balustrada",
      intro: [
        "Po pogrzebie panny Gaunt rodzina i notariusz zebrali się w salonie na piętrze jej domu. Wieczorem odczytano testament: dom i cały majątek przypadły jej bratu, panu Sylvestrowi Gauntowi.",
        "O dziesiątej wyszedł jak zwykle na balkon i balustrada nie wytrzymała. Ktoś ją podpiłował.",
        "Gościsz w tym domu, panno Ado Langton. Kto wychodził na balkon przed nim?"
      ],
      introVoice: "Od okna ciągnie mrozem. Na szybie topnieje szron.",
      clues: {
        c1: { title: "Okno", text: "Zasuwka podniesiona. Na parapecie mokre plamy i opiłki żelaza: ktoś wyszedł na oszroniony balkon i wrócił przez okno.", note: "Zasuwka okna podniesiona, na parapecie mokre plamy i opiłki żelaza. Ktoś był na balkonie przed panem domu." },
        c2: { title: "List", text: "List na sekretarzyku przy oknie, a lak czerwony! Pan Gaunt pisze do kogoś o długu i o domu!", note: "Pan Gaunt żąda od Aubreya Kitteringa długu karcianego: domu Kitteringa, do poniedziałku." },
        c3: { title: "Poduszka", text: "Pod haftowaną poduszką laubzega z przybornika panny Lomax. Balustradę podpiłowano tą laubzegą.", note: "Pod poduszką na kanapie: laubzega panny Lomax z jej przybornika do robótek." },
        c4: { title: "Fajka", text: "Fajka w popielniczce nabita, ale nigdy nie zapalona. Nie zdążył.", note: "Co wieczór o dziesiątej pan domu wychodził z fajką na balkon." },
        c5: { title: "Zegar", text: "Zegar stojący z kurantem. Z ostatnim uderzeniem dziesiątej pan domu otwierał okno na balkon, wiedział o tym cały dom.", note: "O 22:00, z biciem zegara, pan Gaunt wychodził na balkon. Zwyczaj znał cały dom." }
      },
      letter: [
        "„Aubrey, dług honorowy to dług honorowy.",
        "W zeszłą sobotę przegrał pan ze mną swój dom",
        "przy Gay Street, przy świadkach.",
        "Klucze i akt własności oczekuję do poniedziałku,",
        "inaczej klub dowie się wszystkiego. S. Gaunt”"
      ],
      decoys: {
        painting: "Pejzaż nad kredensem: wzgórza pod księżycem. Nieboszczka panna Gaunt kochała go najbardziej ze wszystkich obrazów.",
        vase: "Białe lilie z pogrzebu! W salonie pachnie jak w kościele, kochana!",
        lamp: "Lampa stojąca przy oknie świeci. Abażur zwrócony w stronę kanapy.",
        glass: "Szklaneczka na kredensie, na dnie kropla sherry. Pito za zmarłą."
      },
      suspects: {
        tessa: { name: "Panna Tessa Lomax", role: "Dama do towarzystwa nieboszczki panny Gaunt, 31 lat", intro: "Okulary, kok, szara bluzka, pot na czole." },
        kittering: { name: "Pan Aubrey Kittering", role: "Przyjaciel rodziny, gracz w wista, 40 lat", intro: "Gładki przedziałek, wąsik, czarny krawat. Tasuje talię." },
        lysaght: { name: "Pan Hobart Lysaght", role: "Notariusz rodziny, 64 lata", intro: "Monokl, bokobrody, teczka z testamentem pod pachą." },
        nancy: { name: "Nancy Purdew", role: "Pokojówka, 20 lat", intro: "Czepek, rudy kok, mosiężny pył na rękach." }
      },
      qs: {
        tes1: { q: "Co zostawiła pani panna Gaunt?", a: "Nic, panienko, oprócz pudełka z laubzegami. Osiem lat czytałam jej na głos, a dom dostał brat.", v: "Osiem lat za darmo! Ach, to boli, kochana!" },
        tes2: { q: "Czy to pani laubzega?", a: "Moja, panienko, z przybornika: wycinam ramki do fotografii. Przybornik cały wieczór stał w bibliotece, na oczach wszystkich.", v: "Laubzegą — żeliwną balustradę? Przecież nią tnie się tylko sklejkę!" },
        tes3: { q: "Czy pan Gaunt był dla pani dobry?", a: "Przez osiem lat ani razu nie nazwał mnie po imieniu, panienko, tylko „dziewczyno” albo „ej, pani”." },
        kit1: { q: "Czy dobrze znał pan pannę Gaunt?", a: "Dwadzieścia lat grałem z nią w wista w czwartki, panienko. Oszukiwała, a ja udawałem, że nie widzę.", v: "Wspomina ją z czułością i obraca w palcach talię kart." },
        kit2: { q: "Gdzie pan był, kiedy odczytywano testament?", a: "W bibliotece, panienko, poza dziesięcioma minutami. [[O 20:20 wyszedłem do holu zadzwonić do klubu.]]" },
        kit3: { q: "Czy jest pan winien panu Gauntowi pieniądze?", a: "Graliśmy w zeszłą sobotę, panienko, to prawda. [[Przegrałem parę funtów i zapłaciłem tego samego wieczoru, gotówką.]]" },
        lys1: { q: "Kiedy odczytywano testament?", a: "Od ósmej do za kwadrans dziewiąta, panienko, w bibliotece, przy wszystkich. Wychodził tylko pan Kittering, na jakieś dziesięć minut, około 20:20.", nt: "Notariusz", nx: "Podczas odczytywania testamentu z biblioteki wychodził tylko pan Kittering, około 20:20, na jakieś dziesięć minut." },
        lys2: { q: "Co było w testamencie?", a: "Dom i cały majątek dla brata, pana Sylvestra Gaunta. Dla panny Lomax przybornik, dla mnie honorarium.", v: "Wszystko dla brata. Dla damy do towarzystwa przybornik." },
        lys3: { q: "Czy pan Gaunt był zadowolony?", a: "Powiedział, że do poniedziałku będzie miał dwa domy zamiast jednego, panienko, i się roześmiał." },
        lys4: { q: "Od dawna prowadzi pan sprawy rodziny?", a: "Trzydzieści lat, panienko. Widziałem, jak pan Gaunt wygrywał w karty majątki, i ani razu nie widziałem, żeby przegrał.", v: "Przeciera monokl i wzdycha." },
        nan1: { q: "Gdzie pani była wieczorem?", a: "Od ósmej do dziewiątej czyściłam mosiądze w holu, panienko, a potem podawałam herbatę do biblioteki." },
        nan2: { q: "Kto wychodził do holu podczas testamentu?", a: "Tylko pan Kittering, panienko, o 20:30. Do telefonu nie podchodził: wyszedł z salonu i otrzepywał kolana.", v: "20:30, z salonu. Telefonu nikt nie ruszał.", nt: "Pokojówka o 20:30", nx: "O 20:30 pan Kittering wyszedł z salonu, a nie od telefonu, i otrzepywał kolana." },
        nan3: { q: "Czy pan wychodził na balkon co wieczór?", a: "Punktualnie o dziesiątej, panienko, z fajką, czy śnieg, czy deszcz. Cały dom wiedział.", v: "Miętosi fartuch i nie odrywa oczu od okna." }
      },
      objections: {
        kit2: { reply: "…Byłem w salonie. Chciałem pobyć tam sam. Dwadzieścia lat wista z nią, panienko, a nikt nie dał mi się pożegnać.", nt: "Kittering skłamał", nx: "O 20:20 był w salonie, a nie przy telefonie." },
        kit3: { reply: "Dom przy Gay Street, panienko. Zbudował go mój dziadek. A w poniedziałek Gaunt chciał go sprzedać razem z tym i powiedzieć klubowi, jeśli go nie oddam.", nt: "Dług honorowy", nx: "Kittering przegrał w karty swój dom z panem Gauntem. Zapłacić musiał do poniedziałku. Oto motyw." }
      },
      wrong: {
        tessa: "Panna Lomax cały wieczór słuchała testamentu w bibliotece. A żeliwnej balustrady laubzegą nie podpiłujesz, jest do sklejki.",
        lysaght: "Pan Lysaght czytał testament na głos od ósmej do za kwadrans dziewiąta i ani razu nie wstał.",
        nancy: "Nancy do dziewiątej czyściła mosiądze w holu. To ona widziała, skąd wyszedł pan Kittering.",
        proof: "Pan Kittering tasuje karty: „Dzwoniłem do klubu, panienko, i tyle”. Udowodnij, że był w salonie, albo czym groził mu poniedziałek."
      },
      deduce: [
        "Laubzegą nie przetnie się żeliwa. Kto wychodził podczas czytania testamentu?",
        "Skąd o 20:30 wyszedł pan Kittering, jeśli nie od telefonu?",
        "Kto przegrał w karty dom z panem Gauntem?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Dom przy Gay Street został przy Kitteringu. W klubie mówiono, że wreszcie ma szczęście w kartach",
        p: [
          "Przez dwadzieścia lat pan Sylvester Gaunt wygrywał w karty cudze majątki. W zeszłą sobotę wygrał od Aubreya Kitteringa dom, a dług trzeba było spłacić do poniedziałku.",
          "Kiedy w bibliotece czytano testament, Kittering wyszedł niby zadzwonić. Przez okno salonu wydostał się na oszroniony balkon i podpiłował balustradę, o którą pan domu co wieczór opierał się z fajką. Piłkę do metalu zrzucił z balkonu do sąsiedniego ogrodu.",
          "Laubzegę panny Lomax wsunął pod poduszkę, żeby podejrzenie padło na nią. Ale pokojówka widziała, jak wychodził z salonu i otrzepywał kolana."
        ]
      }
    }
  }
});
