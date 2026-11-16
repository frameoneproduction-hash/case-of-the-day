window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "050", n: 50, scene: "study", look: "twelfth", searchTime: 80, culprit: "mawle",
  clues: {
    c1: { prop: "cat", voice: "logic" },
    c2: { prop: "papers", voice: "gossip", puzzle: true },
    c3: { prop: "vial", voice: "logic" },
    c4: { prop: "teacup", voice: "logic" },
    c5: { prop: "window", voice: "logic" },
  },
  decoys: { clock: "logic", portrait: "gossip", lamp: "intuition", candle: "logic" },
  suspects: [
    { id: "imelda", color: "#bc9be0", look: { hair: "bob", hairColor: "#2a2a2a", outfit: "blouse", outfitColor: "#d8c8a8", extras: ["glasses", "headband"], female: true, lips: "#a04050" }, qs: [
        { id: "imm1", voice: "gossip" },
        { id: "imm2", needs: "c1", voice: "logic" },
        { id: "imm3" },
    ] },
    { id: "mawle", color: "#86b8dc", look: { hair: "short", hairColor: "#7a5a3a", outfit: "suit", outfitColor: "#3a3a3a", extras: ["beard", "sweat"] }, qs: [
        { id: "maw1" },
        { id: "maw2", voice: "intuition" },
        { id: "maw3", needs: "c2" },
    ] },
    { id: "bettany", color: "#e0956a", look: { hair: "bun", hairColor: "#8a7a6a", outfit: "maid", outfitColor: "#5a4a3a", extras: ["sweat"], female: true }, qs: [
        { id: "bet1" },
        { id: "bet2", needs: "c4", voice: "gossip" },
        { id: "bet3" },
    ] },
    { id: "ruddle", color: "#c7c7c7", look: { hair: "bald", hairColor: "#c0c0c0", outfit: "uniform", outfitColor: "#2a3a2a", extras: ["sideburns"] }, qs: [
        { id: "rud1" },
        { id: "rud2", needs: "c3", voice: "logic" },
        { id: "rud3", voice: "gossip" },
        { id: "rud4", voice: "intuition" },
    ] },
  ],
  objections: { maw1: { evidence: "imm2" }, maw3: { evidence: "c2" } },
  proof: ["imm2", "rud2", "c2", "obj:maw1", "obj:maw3"],
  text: {
    ru: {
      title: "Двенадцатая ночь",
      desc: "Профессор не любил шарады и ушёл в кабинет дописывать рецензию. Когда гости наигрались, он уже не дышал.",
      meta: ["Хэвлок-лодж, Оксфорд", "5 января 1933", "≈ 5 минут"],
      introEyebrow: "Кабинет · 22:05",
      introTitle: "Шарады",
      intro: [
        "В Двенадцатую ночь профессор Олдос Ферриер позвал гостей на шарады, а сам ушёл в кабинет дописывать рецензию. У профессора тяжёлая астма, кошку в кабинет не пускают.",
        "В 22:05 его нашли в кресле. Порошок от астмы не помог, а на соседнем кресле спала кошка.",
        "Вы гостите в доме, мисс Ада Лэнгтон. Как кошка попала в кабинет?"
      ],
      introVoice: "Пахнет туманом, свечным воском и чаем.",
      clues: {
        c1: { title: "Кошка", text: "Кошка Шафран спит в кресле. В кабинет её не пускают: от кошачьей шерсти у профессора астма.", note: "В кабинете кошка. У профессора астма от кошачьей шерсти, кошку сюда не пускали." },
        c2: { title: "Бумаги", text: "Черновик рецензии на столе! И какой злой, дорогуша: прямо по чьей-то книге!", note: "Черновик рецензии профессора: книга доктора Моула — пересказ чужих работ. В понедельник — в «Хедингтонском обозрении»." },
        c3: { title: "Пузырёк", text: "Пузырёк с порошком от астмы. Только пахнет он чаем: внутри толчёный чай, а не лекарство. Порошок подменили.", note: "Порошок от астмы в пузырьке профессора подменили толчёным чаем." },
        c4: { title: "Чашка", text: "Чашка с остывшим чаем, в блюдце молоко. Кошку кормит кухарка, значит, и молоко налила она.", note: "На блюдце от профессорской чашки — молоко." },
        c5: { title: "Окно", text: "Окно закрыто на шпингалет, за стеклом туман. Сама кошка сюда не попала бы.", note: "Окно заперто. Кошку внесли через дверь." }
      },
      letter: [
        "«Хедингтонское обозрение», в набор к понедельнику.",
        "«Книга д-ра К. Моула „Медь и бронза“",
        "есть пересказ чужих работ, и прежде всего",
        "моих, без единой ссылки. Учёному,",
        "который так поступает, не место в Оксфорде. А. Ф.»"
      ],
      decoys: {
        clock: "Часы на камине тикают. Профессор писал по странице в час.",
        portrait: "Портрет профессора в мантии! Нос задран выше шапочки, дорогуша!",
        lamp: "Лампа горит над недописанной страницей.",
        candle: "Свеча на камине оплыла наполовину."
      },
      suspects: {
        imelda: { name: "Мисс Имельда Фенчерч", role: "Секретарь и подопечная профессора, 24 года", intro: "Очки, каре, лента в волосах, чернила на пальцах." },
        mawle: { name: "Доктор Катберт Моул", role: "Учёный, бывший ученик профессора, 45 лет", intro: "Бородка, серый костюм, испарина на лбу." },
        bettany: { name: "Миссис Нелл Беттани", role: "Кухарка, 58 лет", intro: "Седой пучок, фартук в муке, румянец от плиты." },
        ruddle: { name: "Мистер Джозеф Раддл", role: "Швейцар, нанятый на вечер, 70 лет", intro: "Лысина, бакенбарды, ливрея с медными пуговицами." }
      },
      qs: {
        imm1: { q: "Как вам жилось у профессора?", a: "Я его секретарь и подопечная, мисс. Он диктовал до полуночи и платил мне книгами вместо жалованья.", v: "Книгами платил! Говорят, ей же и достанется вся эта библиотека!" },
        imm2: { q: "Кто принёс кошку?", a: "В двадцать минут десятого я бежала наверх за тюрбаном для шарады и встретила в коридоре доктора Моула. Он нёс Шафран к кабинету.", v: "21:20, коридор, кошка на руках.", nt: "Мисс Фенчерч в 21:20", nx: "В 21:20 доктор Моул нёс кошку по коридору к кабинету." },
        imm3: { q: "Профессор боялся кошек?", a: "Не боялся, мисс, он их любил, только от шерсти задыхался, поэтому Шафран жила на кухне." },
        maw1: { q: "Где вы были в двадцать минут десятого?", a: "Шарады, мисс, моя команда показывала «Клеопатру», я был пирамидой. [[Из гостиной я не отлучался ни на минуту.]]" },
        maw2: { q: "Вы давно знали профессора?", a: "Двадцать лет, мисс: сперва он был моим учителем, потом соперником. Злые языки скажут ещё что-нибудь, но они ошибутся.", v: "Он говорит о профессоре почтительно и крутит пуговицу." },
        maw3: { q: "Профессор писал о вашей книге?", a: "Рецензию для «Хедингтонского обозрения», мисс. [[Он показывал мне черновик: отзыв самый благосклонный.]]" },
        bet1: { q: "Где вы были вечером?", a: "У плиты, мисс, с восьми и до самого крика: на Двенадцатую ночь у нас пирог с бобом, не до шарад." },
        bet2: { q: "Это вы налили кошке молока?", a: "Нет, мисс, это блюдце от профессорского чайного прибора. Шафран я наливаю в жестяную миску, а после ужина заперла её в буфетной у чёрной лестницы.", v: "Кухарка — из профессорского-то блюдца? Да она его сервиз и в руки брать боится!", nt: "Кухарка", nx: "После ужина кухарка заперла кошку в буфетной у чёрной лестницы. Своё молоко кошка пьёт из жестяной миски." },
        bet3: { q: "Кто ходил мимо буфетной?", a: "Да все, мисс: за тюрбанами, пробками и сажей для усов. Чёрная лестница — короткая дорога к гардеробной." },
        rud1: { q: "Что вы делаете в этом доме?", a: "Нанят на вечер, мисс: подаю пальто и открываю двери. До войны тридцать лет стоял швейцаром в клубе «Сент-Олбанс»." },
        rud2: { q: "Кто заходил к профессору вечером?", a: "В семь — доктор Моул, мисс, минут на десять, с книгой под мышкой. Больше я никого не видел, но с девяти до половины десятого ужинал на кухне.", v: "19:00, кабинет, десять минут.", nt: "Швейцар в 19:00", nx: "В 19:00 доктор Моул десять минут был у профессора в кабинете." },
        rud3: { q: "Профессор был в духе?", a: "Как никогда, мисс. Сказал мне, что в понедельник «Обозрение» наделает шуму.", v: "Шуму! Кому-то в понедельник не поздоровится!" },
        rud4: { q: "Вы помните членов клуба?", a: "Всех до единого, мисс. Третьего марта шестнадцатого года у нас обедал мистер Генри Лэнгтон с гостем, и гость расплатился за обоих, хотя членом клуба не был.", v: "Кто мог платить в клубе, не будучи его членом?" }
      },
      objections: {
        maw1: { reply: "Ну вышел, вышел! Пирамиде тоже нужен воздух. Кошка мяукала в буфетной, я её и выпустил, из жалости.", nt: "Доктор Моул солгал", nx: "В 21:20 он выходил из гостиной и нёс кошку к кабинету." },
        maw3: { reply: "Двадцать лет я носил ему книги и чай. А он собрался объявить на весь Оксфорд, что я его обокрал. Одной рецензией — конец всему.", nt: "Рецензия", nx: "Рецензия профессора погубила бы карьеру доктора Моула. Вот мотив." }
      },
      wrong: {
        imelda: "Мисс Фенчерч сама встретила доктора с кошкой в коридоре. Книги вместо жалованья — повод ворчать, а не убивать.",
        bettany: "Миссис Беттани заперла кошку в буфетной и весь вечер пекла пирог. Блюдце-то из профессорского прибора, а не её жестяная миска.",
        ruddle: "С девяти до половины десятого мистер Раддл ужинал на кухне при кухарке, а остальное время стоял в холле. Это он видел, кто заходил к профессору в семь.",
        proof: "Доктор Моул разводит руками: «Я был пирамидой, мисс, весь вечер на виду». Докажите, что он принёс кошку в кабинет, или зачем ему было бояться понедельника."
      },
      deduce: [
        "Кошку заперли в буфетной. Кто принёс её в кабинет?",
        "Кто заходил к профессору, пока порошок ещё был в пузырьке?",
        "Чью книгу профессор разносил в рецензии?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Рецензия так и не вышла. В марте книгу доктора Моула наградили медалью Общества древностей",
        p: [
          "В понедельник «Хедингтонское обозрение» напечатало бы рецензию профессора Ферриера: книга его бывшего ученика доктора Моула — пересказ чужих работ. Для Моула это был конец карьеры.",
          "В семь, зайдя к профессору с книгой, Моул подменил порошок от астмы толчёным чаем. В 21:20, будто за реквизитом для шарады, он выпустил кошку из буфетной и тихо впустил её в кабинет: профессор писал спиной к двери и её не заметил.",
          "Молоко на блюдце он налил, чтобы подумали на кухарку. Но подопечная профессора встретила его в коридоре с кошкой на руках."
        ]
      }
    },
    en: {
      title: "Twelfth Night",
      desc: "The professor disliked charades and withdrew to his study to finish a review. By the time the guests had tired of the game, he had stopped breathing.",
      meta: ["Havelock Lodge, Oxford", "5 January 1933", "≈ 5 minutes"],
      introEyebrow: "Study · 10:05 pm",
      introTitle: "Charades",
      intro: [
        "On Twelfth Night Professor Aldous Ferrier invited guests for charades, while he himself retired to his study to finish a review. The professor has severe asthma, and the cat is never let into the study.",
        "At 10:05 he was found in his armchair. His asthma powder hadn't helped, and the cat was asleep in the chair beside him.",
        "You're staying in the house, Miss Ada Langton. How did the cat get into the study?"
      ],
      introVoice: "It smells of fog, candle wax and tea.",
      clues: {
        c1: { title: "Cat", text: "Saffron the cat is asleep in the armchair. She's never allowed in the study: cat fur brings on the professor's asthma.", note: "The cat is in the study. Cat fur brings on the professor's asthma; she was never let in here." },
        c2: { title: "Papers", text: "A draft review on the desk! And how savage, darling: straight at somebody's book!", note: "The professor's draft review: Dr Mawle's book is a rehash of other men's work. Due in the Headington Review on Monday." },
        c3: { title: "Bottle", text: "The bottle of asthma powder. But it smells of tea: crushed tea inside, not medicine. The powder was swapped.", note: "The asthma powder in the professor's bottle had been swapped for crushed tea." },
        c4: { title: "Teacup", text: "A cup of cold tea, milk in the saucer. The cook feeds the cat, so the milk must be hers.", note: "Milk in the saucer of the professor's teacup." },
        c5: { title: "Window", text: "The window is latched, fog beyond the glass. The cat couldn't have got in by herself.", note: "The window is locked. The cat was brought in through the door." }
      },
      letter: [
        "The Headington Review, for setting, Monday.",
        "“Dr C. Mawle's book ‘Copper and Bronze’",
        "is a rehash of other men's work, chiefly",
        "mine, without a single reference. A scholar",
        "who does this has no place in Oxford. A. F.”"
      ],
      decoys: {
        clock: "The mantel clock ticks on. The professor wrote a page an hour.",
        portrait: "A portrait of the professor in his gown! Nose held higher than his cap, darling!",
        lamp: "The lamp burns over an unfinished page.",
        candle: "The candle on the mantelpiece has burnt halfway down."
      },
      suspects: {
        imelda: { name: "Miss Imelda Fenchurch", role: "The professor's secretary and ward, 24", intro: "Spectacles, a bob, a ribbon in her hair, ink on her fingers." },
        mawle: { name: "Dr Cuthbert Mawle", role: "Scholar, the professor's former pupil, 45", intro: "A goatee, a grey suit, sweat on his brow." },
        bettany: { name: "Mrs Nell Bettany", role: "Cook, 58", intro: "Grey bun, a floury apron, cheeks flushed from the range." },
        ruddle: { name: "Mr Joseph Ruddle", role: "Porter hired for the evening, 70", intro: "Bald head, side-whiskers, livery with brass buttons." }
      },
      qs: {
        imm1: { q: "What was it like living with the professor?", a: "I'm his secretary and his ward, miss. He dictated till midnight and paid me in books instead of wages.", v: "Paid her in books! And they say the whole library comes to her!" },
        imm2: { q: "Who brought the cat in?", a: "At twenty past nine I was running upstairs for a turban for the charade and met Dr Mawle in the passage. He was carrying Saffron towards the study.", v: "9:20, the passage, the cat in his arms.", nt: "Miss Fenchurch at 9:20", nx: "At 9:20 Dr Mawle was carrying the cat along the passage towards the study." },
        imm3: { q: "Was the professor afraid of cats?", a: "Not afraid, miss, he loved them, only their fur made him choke, so Saffron lived in the kitchen." },
        maw1: { q: "Where were you at twenty past nine?", a: "Charades, miss: my team was doing “Cleopatra” and I was the pyramid. [[I never left the drawing room for a minute.]]" },
        maw2: { q: "Had you known the professor long?", a: "Twenty years, miss: first he was my teacher, then my rival. Sharp tongues will say something else, but they'll be wrong.", v: "He speaks of the professor respectfully and twists a button." },
        maw3: { q: "Was the professor writing about your book?", a: "A review for the Headington Review, miss. [[He showed me the draft: it's most favourable.]]" },
        bet1: { q: "Where were you this evening?", a: "At the range, miss, from eight right up to the scream: on Twelfth Night we bake the bean cake, no time for charades." },
        bet2: { q: "Did you pour the cat that milk?", a: "No, miss, that saucer's from the professor's tea service. I give Saffron hers in a tin bowl, and after dinner I shut her in the pantry by the back stairs.", v: "The cook, using the professor's own saucer? She's afraid to so much as touch his tea service!", nt: "The cook", nx: "After dinner the cook shut the cat in the pantry by the back stairs. The cat drinks her milk from a tin bowl." },
        bet3: { q: "Who went past the pantry?", a: "Everybody, miss: for turbans, corks and soot for moustaches. The back stairs are the short way to the dressing room." },
        rud1: { q: "What are you doing in this house?", a: "Hired for the evening, miss: taking coats and opening doors. Before the war I was hall porter at the St Albans Club for thirty years." },
        rud2: { q: "Who went in to the professor this evening?", a: "At seven, Dr Mawle, miss, for ten minutes or so, with a book under his arm. Nobody else that I saw, but from nine to half past I was at supper in the kitchen.", v: "7:00, the study, ten minutes.", nt: "The porter at 7:00", nx: "At 7:00 Dr Mawle spent ten minutes with the professor in the study." },
        rud3: { q: "Was the professor in good spirits?", a: "Never better, miss. He told me that on Monday the Review would cause quite a stir.", v: "A stir! Someone's in for it on Monday!" },
        rud4: { q: "Do you remember the club's members?", a: "Every last one, miss. On the third of March 1916 Mr Henry Langton lunched with us with a guest, and the guest paid for both, though not a member of the club.", v: "Who could pay at a club without being a member?" }
      },
      objections: {
        maw1: { reply: "All right, I went out! Even a pyramid needs air. The cat was mewing in the pantry, so I let her out, out of pity.", nt: "Dr Mawle lied", nx: "At 9:20 he left the drawing room and carried the cat to the study." },
        maw3: { reply: "Twenty years I carried his books and his tea. And he was going to tell all Oxford that I'd robbed him. One review, and everything's finished.", nt: "The review", nx: "The professor's review would have ruined Dr Mawle's career. There's the motive." }
      },
      wrong: {
        imelda: "Miss Fenchurch met the doctor with the cat in the passage herself. Books instead of wages are a reason to grumble, not to kill.",
        bettany: "Mrs Bettany shut the cat in the pantry and baked all evening. That saucer is from the professor's service, not her tin bowl.",
        ruddle: "From nine to half past Mr Ruddle was at supper in the kitchen under the cook's eye, and the rest of the evening in the hall. He's the one who saw who went in to the professor at seven.",
        proof: "Dr Mawle spreads his hands: “I was a pyramid, miss, in full view all evening.” Prove he carried the cat into the study, or why he had reason to fear Monday."
      },
      deduce: [
        "The cat was shut in the pantry. Who carried her into the study?",
        "Who went in to the professor while the powder was still in the bottle?",
        "Whose book was the professor tearing apart in his review?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "The review never appeared. In March Dr Mawle's book won the Society of Antiquaries' medal",
        p: [
          "On Monday the Headington Review would have printed Professor Ferrier's review: his former pupil Dr Mawle's book was a rehash of other men's work. For Mawle it meant the end of his career.",
          "At seven, calling on the professor with a book, Mawle swapped the asthma powder for crushed tea. At 9:20, as if fetching props for the charade, he let the cat out of the pantry and slipped her into the study: the professor was writing with his back to the door and never noticed.",
          "He poured the milk into the saucer so that the cook would be suspected. But the professor's ward met him in the passage with the cat in his arms."
        ]
      }
    },
    es: {
      title: "La Noche de Reyes",
      desc: "Al profesor no le gustaban las charadas y se retiró al despacho a terminar una reseña. Cuando los invitados se cansaron de jugar, ya no respiraba.",
      meta: ["Havelock Lodge, Oxford", "5 de enero de 1933", "≈ 5 minutos"],
      introEyebrow: "Despacho · 22:05",
      introTitle: "Charadas",
      intro: [
        "La víspera de Reyes, el profesor Aldous Ferrier invitó a sus huéspedes a jugar a las charadas y él se retiró al despacho a terminar una reseña. El profesor tiene un asma grave, y a la gata nunca la dejan entrar en el despacho.",
        "A las 22:05 lo encontraron en el sillón. Los polvos para el asma no le sirvieron de nada, y en el sillón de al lado dormía la gata.",
        "Pasas unos días en la casa, señorita Ada Langton. ¿Cómo entró la gata en el despacho?"
      ],
      introVoice: "Huele a niebla, a cera de vela y a té.",
      clues: {
        c1: { title: "Gata", text: "La gata Saffron duerme en el sillón. En el despacho no la dejan entrar: el pelo de gato le provoca asma al profesor.", note: "La gata está en el despacho. El pelo de gato le provoca asma al profesor; aquí no la dejaban entrar." },
        c2: { title: "Papeles", text: "¡Un borrador de reseña en la mesa! ¡Y qué saña, querida: derechito contra el libro de alguien!", note: "El borrador de la reseña del profesor: el libro del doctor Mawle es un refrito de trabajos ajenos. Sale el lunes en la Revista de Headington." },
        c3: { title: "Frasco", text: "El frasco de polvos para el asma. Pero huele a té: dentro hay té molido, no medicina. Cambiaron los polvos.", note: "Los polvos para el asma del frasco del profesor se cambiaron por té molido." },
        c4: { title: "Taza", text: "Una taza de té frío, leche en el platillo. A la gata la alimenta la cocinera, así que la leche la puso ella.", note: "En el platillo de la taza del profesor hay leche." },
        c5: { title: "Ventana", text: "La ventana tiene el pestillo echado, y fuera, niebla. La gata no pudo entrar sola.", note: "La ventana está cerrada. A la gata la trajeron por la puerta." }
      },
      letter: [
        "Revista de Headington, a imprenta, lunes.",
        "«El libro del Dr. C. Mawle “Cobre y bronce”",
        "es un refrito de trabajos ajenos, sobre todo",
        "de los míos, sin una sola cita. El erudito",
        "que obra así no tiene sitio en Oxford. A. F.»"
      ],
      decoys: {
        clock: "El reloj de la chimenea sigue haciendo tictac. El profesor escribía una página por hora.",
        portrait: "¡Un retrato del profesor con toga! ¡La nariz más alta que el birrete, querida!",
        lamp: "La lámpara arde sobre una página sin terminar.",
        candle: "La vela de la repisa se ha consumido hasta la mitad."
      },
      suspects: {
        imelda: { name: "Señorita Imelda Fenchurch", role: "Secretaria y pupila del profesor, 24 años", intro: "Gafas, melena corta, una cinta en el pelo, tinta en los dedos." },
        mawle: { name: "Doctor Cuthbert Mawle", role: "Erudito, antiguo alumno del profesor, 45 años", intro: "Perilla, traje gris, sudor en la frente." },
        bettany: { name: "Señora Nell Bettany", role: "Cocinera, 58 años", intro: "Moño canoso, delantal enharinado, mejillas encendidas por el fogón." },
        ruddle: { name: "Señor Joseph Ruddle", role: "Portero contratado para la velada, 70 años", intro: "Calvo, patillas, librea con botones de latón." }
      },
      qs: {
        imm1: { q: "¿Qué tal vivir con el profesor?", a: "Soy su secretaria y su pupila, señorita. Dictaba hasta medianoche y me pagaba en libros en vez de sueldo.", v: "¡Le pagaba en libros! ¡Y dicen que toda la biblioteca será para ella!" },
        imm2: { q: "¿Quién trajo a la gata?", a: "A las nueve y veinte subía corriendo a por un turbante para la charada y me crucé en el pasillo con el doctor Mawle. Llevaba a Saffron hacia el despacho.", v: "21:20, el pasillo, la gata en brazos.", nt: "La señorita Fenchurch a las 21:20", nx: "A las 21:20 el doctor Mawle llevaba a la gata por el pasillo hacia el despacho." },
        imm3: { q: "¿El profesor les tenía miedo a los gatos?", a: "Miedo no, señorita, los adoraba, solo que el pelo lo ahogaba, y por eso Saffron vivía en la cocina." },
        maw1: { q: "¿Dónde estaba a las nueve y veinte?", a: "Charadas, señorita: mi equipo hacía «Cleopatra» y yo era la pirámide. [[No salí del salón ni un minuto.]]" },
        maw2: { q: "¿Conocía al profesor desde hace mucho?", a: "Veinte años, señorita: primero fue mi maestro y luego mi rival. Las malas lenguas dirán otra cosa, pero se equivocan.", v: "Habla del profesor con respeto y retuerce un botón." },
        maw3: { q: "¿El profesor escribía sobre su libro?", a: "Una reseña para la Revista de Headington, señorita. [[Me enseñó el borrador: es de lo más favorable.]]" },
        bet1: { q: "¿Dónde estuvo esta noche?", a: "En el fogón, señorita, desde las ocho hasta el mismo grito: en Reyes hacemos la tarta del haba, no hay tiempo para charadas." },
        bet2: { q: "¿Le puso usted esa leche a la gata?", a: "No, señorita, ese platillo es del juego de té del profesor. A Saffron se la pongo en un cuenco de lata, y después de cenar la encerré en la despensa, junto a la escalera de servicio.", v: "¿La cocinera, con el platillo del profesor? ¡Si no se atreve ni a tocar su juego de té!", nt: "La cocinera", nx: "Después de cenar la cocinera encerró a la gata en la despensa junto a la escalera de servicio. La gata bebe su leche en un cuenco de lata." },
        bet3: { q: "¿Quién pasó por la despensa?", a: "Todos, señorita: a por turbantes, corchos y hollín para bigotes. La escalera de servicio es el atajo al vestidor." },
        rud1: { q: "¿Qué hace usted en esta casa?", a: "Me han contratado para la velada, señorita: recojo abrigos y abro puertas. Antes de la guerra fui treinta años portero del Club St Albans." },
        rud2: { q: "¿Quién entró a ver al profesor esta noche?", a: "A las siete, el doctor Mawle, señorita, unos diez minutos, con un libro bajo el brazo. A nadie más vi, pero de las nueve a las nueve y media estuve cenando en la cocina.", v: "19:00, el despacho, diez minutos.", nt: "El portero a las 19:00", nx: "A las 19:00 el doctor Mawle pasó diez minutos con el profesor en el despacho." },
        rud3: { q: "¿Estaba de buen humor el profesor?", a: "Como nunca, señorita. Me dijo que el lunes la Revista iba a dar que hablar.", v: "¡Dar que hablar! ¡A alguien le espera un buen lunes!" },
        rud4: { q: "¿Recuerda a los socios del club?", a: "A todos, señorita. El tres de marzo de 1916 almorzó con nosotros el señor Henry Langton con un invitado, y fue el invitado quien pagó por los dos, sin pertenecer al club.", v: "¿Quién podía pagar en un club sin pertenecer a él?" }
      },
      objections: {
        maw1: { reply: "¡Está bien, salí! Hasta una pirámide necesita aire. La gata maullaba en la despensa y la saqué, por lástima.", nt: "El doctor Mawle mintió", nx: "A las 21:20 salió del salón y llevó a la gata al despacho." },
        maw3: { reply: "Veinte años llevándole libros y té. Y pensaba anunciar a todo Oxford que yo le había robado. Una reseña, y se acabó todo.", nt: "La reseña", nx: "La reseña del profesor habría arruinado la carrera del doctor Mawle. Ese es el móvil." }
      },
      wrong: {
        imelda: "La señorita Fenchurch se cruzó ella misma con el doctor y la gata en el pasillo. Libros en vez de sueldo son motivo para refunfuñar, no para matar.",
        bettany: "La señora Bettany encerró a la gata en la despensa y pasó la noche horneando. El platillo es del juego del profesor, no su cuenco de lata.",
        ruddle: "De las nueve a las nueve y media el señor Ruddle cenó en la cocina, a la vista de la cocinera, y el resto de la noche estuvo en el vestíbulo. Fue él quien vio quién entró a ver al profesor a las siete.",
        proof: "El doctor Mawle abre las manos: «Yo era la pirámide, señorita, a la vista de todos». Demuestra que llevó a la gata al despacho, o por qué temía al lunes."
      },
      deduce: [
        "La gata estaba encerrada en la despensa. ¿Quién la llevó al despacho?",
        "¿Quién entró a ver al profesor cuando los polvos aún estaban en el frasco?",
        "¿De quién era el libro que el profesor despedazaba en su reseña?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "La reseña nunca se publicó. En marzo el libro del doctor Mawle ganó la medalla de la Sociedad de Anticuarios",
        p: [
          "El lunes la Revista de Headington habría publicado la reseña del profesor Ferrier: el libro de su antiguo alumno, el doctor Mawle, era un refrito de trabajos ajenos. Para Mawle era el fin de su carrera.",
          "A las siete, al pasar a ver al profesor con un libro, Mawle cambió los polvos para el asma por té molido. A las 21:20, como si fuera a por atrezo para la charada, sacó a la gata de la despensa y la coló en el despacho: el profesor escribía de espaldas a la puerta y no la vio.",
          "Echó la leche en el platillo para que sospecharan de la cocinera. Pero la pupila del profesor se lo cruzó en el pasillo con la gata en brazos."
        ]
      }
    },
    de: {
      title: "Dreikönigsabend",
      desc: "Der Professor mochte keine Scharaden und zog sich in sein Arbeitszimmer zurück, um eine Rezension fertigzuschreiben. Als die Gäste genug gespielt hatten, atmete er nicht mehr.",
      meta: ["Havelock Lodge, Oxford", "5. Januar 1933", "≈ 5 Minuten"],
      introEyebrow: "Arbeitszimmer · 22:05",
      introTitle: "Scharaden",
      intro: [
        "Am Dreikönigsabend lud Professor Aldous Ferrier Gäste zu Scharaden ein und zog sich selbst ins Arbeitszimmer zurück, um eine Rezension fertigzuschreiben. Der Professor hat schweres Asthma, die Katze darf nie ins Arbeitszimmer.",
        "Um 22:05 fand man ihn im Sessel. Das Asthmapulver hatte nicht geholfen, und im Sessel daneben schlief die Katze.",
        "Du bist Gast im Haus, Miss Ada Langton. Wie kam die Katze ins Arbeitszimmer?"
      ],
      introVoice: "Es riecht nach Nebel, Kerzenwachs und Tee.",
      clues: {
        c1: { title: "Katze", text: "Die Katze Saffron schläft im Sessel. Ins Arbeitszimmer darf sie nie: Von Katzenhaaren bekommt der Professor Asthma.", note: "Die Katze ist im Arbeitszimmer. Von Katzenhaaren bekommt der Professor Asthma; sie durfte nie hierher." },
        c2: { title: "Papiere", text: "Ein Rezensionsentwurf auf dem Schreibtisch! Und wie bissig, Schätzchen: geradewegs gegen jemandes Buch!", note: "Der Rezensionsentwurf des Professors: Dr. Mawles Buch ist ein Aufguss fremder Arbeiten. Erscheint am Montag in der Headington-Rundschau." },
        c3: { title: "Fläschchen", text: "Das Fläschchen mit Asthmapulver. Aber es riecht nach Tee: zerstoßener Tee statt Arznei. Das Pulver wurde vertauscht.", note: "Das Asthmapulver im Fläschchen des Professors wurde gegen zerstoßenen Tee vertauscht." },
        c4: { title: "Teetasse", text: "Eine Tasse kalter Tee, Milch auf der Untertasse. Die Katze füttert die Köchin, also stammt die Milch von ihr.", note: "Auf der Untertasse der Teetasse des Professors ist Milch." },
        c5: { title: "Fenster", text: "Das Fenster ist verriegelt, draußen Nebel. Von selbst wäre die Katze nicht hereingekommen.", note: "Das Fenster ist verschlossen. Die Katze wurde durch die Tür hereingebracht." }
      },
      letter: [
        "Headington-Rundschau, für den Satz, Montag.",
        "„Dr. C. Mawles Buch ‚Kupfer und Bronze‘",
        "ist ein Aufguss fremder Arbeiten, vor allem",
        "meiner, ohne einen einzigen Verweis. Ein Gelehrter,",
        "der so handelt, hat in Oxford nichts verloren. A. F.“"
      ],
      decoys: {
        clock: "Die Kaminuhr tickt weiter. Der Professor schrieb eine Seite pro Stunde.",
        portrait: "Ein Porträt des Professors im Talar! Die Nase höher als das Barett, Schätzchen!",
        lamp: "Die Lampe brennt über einer unfertigen Seite.",
        candle: "Die Kerze auf dem Kaminsims ist zur Hälfte heruntergebrannt."
      },
      suspects: {
        imelda: { name: "Miss Imelda Fenchurch", role: "Sekretärin und Mündel des Professors, 24", intro: "Brille, Bubikopf, ein Band im Haar, Tinte an den Fingern." },
        mawle: { name: "Dr. Cuthbert Mawle", role: "Gelehrter, ehemaliger Schüler des Professors, 45", intro: "Spitzbart, grauer Anzug, Schweiß auf der Stirn." },
        bettany: { name: "Mrs Nell Bettany", role: "Köchin, 58", intro: "Grauer Knoten, mehlige Schürze, rote Wangen vom Herd." },
        ruddle: { name: "Mr Joseph Ruddle", role: "Für den Abend angeheuerter Portier, 70", intro: "Glatze, Koteletten, Livree mit Messingknöpfen." }
      },
      qs: {
        imm1: { q: "Wie lebte es sich beim Professor?", a: "Ich bin seine Sekretärin und sein Mündel, Miss. Er diktierte bis Mitternacht und bezahlte mich mit Büchern statt mit Lohn.", v: "Mit Büchern bezahlt! Und es heißt, die ganze Bibliothek geht an sie!" },
        imm2: { q: "Wer hat die Katze hereingebracht?", a: "Um zwanzig nach neun lief ich nach oben, einen Turban für die Scharade holen, und traf auf dem Gang Dr. Mawle. Er trug Saffron zum Arbeitszimmer.", v: "21:20, der Gang, die Katze auf dem Arm.", nt: "Miss Fenchurch um 21:20", nx: "Um 21:20 trug Dr. Mawle die Katze über den Gang zum Arbeitszimmer." },
        imm3: { q: "Hatte der Professor Angst vor Katzen?", a: "Angst nicht, Miss, er liebte sie, nur bekam er von den Haaren keine Luft, deshalb lebte Saffron in der Küche." },
        maw1: { q: "Wo waren Sie um zwanzig nach neun?", a: "Scharaden, Miss: Meine Gruppe spielte „Kleopatra“, und ich war die Pyramide. [[Ich habe den Salon keine Minute verlassen.]]" },
        maw2: { q: "Kannten Sie den Professor schon lange?", a: "Zwanzig Jahre, Miss: Erst war er mein Lehrer, dann mein Rivale. Böse Zungen werden etwas anderes sagen, aber sie irren sich.", v: "Er spricht respektvoll vom Professor und dreht an einem Knopf." },
        maw3: { q: "Schrieb der Professor über Ihr Buch?", a: "Eine Rezension für die Headington-Rundschau, Miss. [[Er zeigte mir den Entwurf: höchst wohlwollend.]]" },
        bet1: { q: "Wo waren Sie heute Abend?", a: "Am Herd, Miss, von acht bis zum Schrei: Am Dreikönigsabend backen wir den Bohnenkuchen, da ist keine Zeit für Scharaden." },
        bet2: { q: "Haben Sie der Katze die Milch hingestellt?", a: "Nein, Miss, die Untertasse gehört zum Teeservice des Professors. Saffron bekommt ihre Milch im Blechnapf, und nach dem Essen habe ich sie in die Speisekammer an der Hintertreppe gesperrt.", v: "Die Köchin, mit der Untertasse des Professors? Die traut sich ja nicht einmal, sein Teeservice anzufassen!", nt: "Die Köchin", nx: "Nach dem Essen sperrte die Köchin die Katze in die Speisekammer an der Hintertreppe. Ihre Milch trinkt die Katze aus einem Blechnapf." },
        bet3: { q: "Wer ging an der Speisekammer vorbei?", a: "Alle, Miss: nach Turbanen, Korken und Ruß für Schnurrbärte. Die Hintertreppe ist der kurze Weg zur Garderobe." },
        rud1: { q: "Was tun Sie in diesem Haus?", a: "Für den Abend angeheuert, Miss: Mäntel abnehmen und Türen öffnen. Vor dem Krieg war ich dreißig Jahre Portier im St-Albans-Klub." },
        rud2: { q: "Wer war heute Abend beim Professor?", a: "Um sieben Dr. Mawle, Miss, etwa zehn Minuten, mit einem Buch unter dem Arm. Sonst sah ich niemanden, aber von neun bis halb zehn aß ich in der Küche zu Abend.", v: "19:00, Arbeitszimmer, zehn Minuten.", nt: "Der Portier um 19:00", nx: "Um 19:00 war Dr. Mawle zehn Minuten beim Professor im Arbeitszimmer." },
        rud3: { q: "War der Professor guter Laune?", a: "Wie noch nie, Miss. Er sagte mir, am Montag werde die Rundschau für Aufsehen sorgen.", v: "Aufsehen! Da kriegt am Montag jemand sein Fett weg!" },
        rud4: { q: "Erinnern Sie sich an die Klubmitglieder?", a: "An jeden einzelnen, Miss. Am dritten März 1916 aß Mr Henry Langton bei uns mit einem Gast zu Mittag, und der Gast bezahlte für beide, ohne Mitglied des Klubs zu sein.", v: "Wer konnte in einem Klub bezahlen, ohne Mitglied zu sein?" }
      },
      objections: {
        maw1: { reply: "Na schön, ich war draußen! Auch eine Pyramide braucht Luft. Die Katze miaute in der Speisekammer, da habe ich sie aus Mitleid herausgelassen.", nt: "Dr. Mawle hat gelogen", nx: "Um 21:20 verließ er den Salon und trug die Katze ins Arbeitszimmer." },
        maw3: { reply: "Zwanzig Jahre habe ich ihm Bücher und Tee gebracht. Und er wollte ganz Oxford verkünden, ich hätte ihn bestohlen. Eine Rezension, und alles ist aus.", nt: "Die Rezension", nx: "Die Rezension des Professors hätte Dr. Mawles Laufbahn ruiniert. Das ist das Motiv." }
      },
      wrong: {
        imelda: "Miss Fenchurch ist dem Doktor mit der Katze selbst auf dem Gang begegnet. Bücher statt Lohn sind ein Grund zu murren, nicht zu morden.",
        bettany: "Mrs Bettany sperrte die Katze in die Speisekammer und backte den ganzen Abend. Die Untertasse gehört zum Service des Professors, nicht zu ihrem Blechnapf.",
        ruddle: "Von neun bis halb zehn aß Mr Ruddle unter den Augen der Köchin in der Küche, den Rest des Abends stand er in der Halle. Er hat gesehen, wer um sieben zum Professor ging.",
        proof: "Dr. Mawle breitet die Hände aus: „Ich war die Pyramide, Miss, den ganzen Abend vor aller Augen.“ Beweise, dass er die Katze ins Arbeitszimmer trug, oder warum er den Montag fürchten musste."
      },
      deduce: [
        "Die Katze war in der Speisekammer eingesperrt. Wer trug sie ins Arbeitszimmer?",
        "Wer war beim Professor, als das Pulver noch im Fläschchen war?",
        "Wessen Buch zerriss der Professor in seiner Rezension?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Die Rezension erschien nie. Im März erhielt Dr. Mawles Buch die Medaille der Altertumsgesellschaft",
        p: [
          "Am Montag hätte die Headington-Rundschau Professor Ferriers Rezension gedruckt: Das Buch seines ehemaligen Schülers Dr. Mawle war ein Aufguss fremder Arbeiten. Für Mawle das Ende seiner Laufbahn.",
          "Um sieben, als er den Professor mit einem Buch besuchte, vertauschte Mawle das Asthmapulver gegen zerstoßenen Tee. Um 21:20, als hole er Requisiten für die Scharade, ließ er die Katze aus der Speisekammer und schob sie leise ins Arbeitszimmer: Der Professor schrieb mit dem Rücken zur Tür und bemerkte sie nicht.",
          "Die Milch goss er auf die Untertasse, damit der Verdacht auf die Köchin fiel. Aber das Mündel des Professors begegnete ihm auf dem Gang mit der Katze auf dem Arm."
        ]
      }
    },
    pl: {
      title: "Wieczór Trzech Króli",
      desc: "Profesor nie lubił szarad i zamknął się w gabinecie, żeby dokończyć recenzję. Kiedy goście mieli dość zabawy, już nie oddychał.",
      meta: ["Havelock Lodge, Oksford", "5 stycznia 1933", "≈ 5 minut"],
      introEyebrow: "Gabinet · 22:05",
      introTitle: "Szarady",
      intro: [
        "W wigilię Trzech Króli profesor Aldous Ferrier zaprosił gości na szarady, a sam poszedł do gabinetu dokończyć recenzję. Profesor ma ciężką astmę, kotki do gabinetu się nie wpuszcza.",
        "O 22:05 znaleziono go w fotelu. Proszek na astmę nie pomógł, a w sąsiednim fotelu spała kotka.",
        "Gościsz w tym domu, panno Ado Langton. Jak kotka dostała się do gabinetu?"
      ],
      introVoice: "Pachnie mgłą, woskiem i herbatą.",
      clues: {
        c1: { title: "Kotka", text: "Kotka Saffron śpi w fotelu. Do gabinetu jej nie wpuszczano: od kociej sierści profesor dostaje ataku astmy.", note: "Kotka jest w gabinecie. Od kociej sierści profesor dostaje astmy; tu jej nie wpuszczano." },
        c2: { title: "Papiery", text: "Szkic recenzji na biurku! I jaki zjadliwy, kochana: prosto w czyjąś książkę!", note: "Szkic recenzji profesora: książka doktora Mawle'a to przeróbka cudzych prac. Ukaże się w poniedziałek w „Przeglądzie Headingtońskim”." },
        c3: { title: "Buteleczka", text: "Buteleczka z proszkiem na astmę. Ale pachnie herbatą: w środku utłuczona herbata, nie lekarstwo. Proszek podmieniono.", note: "Proszek na astmę w buteleczce profesora podmieniono na utłuczoną herbatę." },
        c4: { title: "Filiżanka", text: "Filiżanka zimnej herbaty, mleko na spodeczku. Kotkę karmi kucharka, więc to ona nalała mleka.", note: "Na spodeczku od filiżanki profesora jest mleko." },
        c5: { title: "Okno", text: "Okno zamknięte na zasuwkę, za szybą mgła. Sama kotka by tu nie weszła.", note: "Okno zamknięte. Kotkę wniesiono przez drzwi." }
      },
      letter: [
        "„Przegląd Headingtoński”, do składu na poniedziałek.",
        "„Książka dra C. Mawle'a «Miedź i brąz»",
        "to przeróbka cudzych prac, przede wszystkim",
        "moich, bez jednego przypisu. Uczony,",
        "który tak postępuje, nie ma czego szukać w Oksfordzie. A. F.”"
      ],
      decoys: {
        clock: "Zegar na kominku tyka. Profesor pisał stronę na godzinę.",
        portrait: "Portret profesora w todze! Nos zadarty wyżej niż biret, kochana!",
        lamp: "Lampa świeci nad niedokończoną stroną.",
        candle: "Świeca na kominku wypaliła się do połowy."
      },
      suspects: {
        imelda: { name: "Panna Imelda Fenchurch", role: "Sekretarka i podopieczna profesora, 24 lata", intro: "Okulary, krótkie włosy, wstążka, atrament na palcach." },
        mawle: { name: "Doktor Cuthbert Mawle", role: "Uczony, dawny uczeń profesora, 45 lat", intro: "Bródka, szary garnitur, pot na czole." },
        bettany: { name: "Pani Nell Bettany", role: "Kucharka, 58 lat", intro: "Siwy kok, fartuch w mące, policzki rozpalone od pieca." },
        ruddle: { name: "Pan Joseph Ruddle", role: "Portier wynajęty na wieczór, 70 lat", intro: "Łysina, bokobrody, liberia z mosiężnymi guzikami." }
      },
      qs: {
        imm1: { q: "Jak się pani żyło u profesora?", a: "Jestem jego sekretarką i podopieczną, panienko. Dyktował do północy i płacił mi książkami zamiast pensji.", v: "Płacił książkami! A podobno cała biblioteka przypadnie właśnie jej!" },
        imm2: { q: "Kto przyniósł kotkę?", a: "O 21:20 biegłam na górę po turban do szarady i na korytarzu spotkałam doktora Mawle'a. Niósł Saffron w stronę gabinetu.", v: "21:20, korytarz, kotka na rękach.", nt: "Panna Fenchurch o 21:20", nx: "O 21:20 doktor Mawle niósł kotkę korytarzem w stronę gabinetu." },
        imm3: { q: "Czy profesor bał się kotów?", a: "Nie bał się, panienko, kochał je, tylko od sierści się dusił, więc Saffron mieszkała w kuchni." },
        maw1: { q: "Gdzie pan był o 21:20?", a: "Szarady, panienko: moja drużyna pokazywała „Kleopatrę”, a ja byłem piramidą. [[Ani na minutę nie wychodziłem z salonu.]]" },
        maw2: { q: "Długo znał pan profesora?", a: "Dwadzieścia lat, panienko: najpierw był moim nauczycielem, potem rywalem. Złe języki powiedzą co innego, ale się mylą.", v: "Mówi o profesorze z szacunkiem i kręci guzikiem." },
        maw3: { q: "Czy profesor pisał o pańskiej książce?", a: "Recenzję do „Przeglądu Headingtońskiego”, panienko. [[Pokazywał mi szkic: bardzo przychylny.]]" },
        bet1: { q: "Gdzie pani była wieczorem?", a: "Przy piecu, panienko, od ósmej do samego krzyku: na Trzech Króli pieczemy ciasto z fasolką, nie ma czasu na szarady." },
        bet2: { q: "Czy to pani nalała kotce mleka?", a: "Nie, panienko, ten spodeczek jest z serwisu profesora. Saffron dostaje mleko w blaszanej misce, a po kolacji zamknęłam ją w spiżarni przy tylnych schodach.", v: "Kucharka, z profesorskiego spodeczka? Ona boi się nawet dotknąć jego serwisu!", nt: "Kucharka", nx: "Po kolacji kucharka zamknęła kotkę w spiżarni przy tylnych schodach. Kotka pije mleko z blaszanej miski." },
        bet3: { q: "Kto przechodził koło spiżarni?", a: "Wszyscy, panienko: po turbany, korki i sadzę na wąsy. Tylne schody to najkrótsza droga do garderoby." },
        rud1: { q: "Co pan robi w tym domu?", a: "Wynajęty na wieczór, panienko: odbieram płaszcze i otwieram drzwi. Przed wojną przez trzydzieści lat byłem portierem w klubie St Albans." },
        rud2: { q: "Kto był wieczorem u profesora?", a: "O siódmej doktor Mawle, panienko, jakieś dziesięć minut, z książką pod pachą. Nikogo więcej nie widziałem, ale od dziewiątej do wpół do dziesiątej jadłem kolację w kuchni.", v: "19:00, gabinet, dziesięć minut.", nt: "Portier o 19:00", nx: "O 19:00 doktor Mawle był przez dziesięć minut u profesora w gabinecie." },
        rud3: { q: "Czy profesor był w dobrym humorze?", a: "Jak nigdy, panienko. Powiedział mi, że w poniedziałek „Przegląd” narobi szumu.", v: "Szumu! Komuś w poniedziałek się oberwie!" },
        rud4: { q: "Pamięta pan członków klubu?", a: "Wszystkich co do jednego, panienko. Trzeciego marca 1916 roku jadł u nas obiad pan Henry Langton z gościem i to gość zapłacił cały rachunek, choć do klubu nie należał.", v: "Kto mógł płacić w klubie, nie będąc jego członkiem?" }
      },
      objections: {
        maw1: { reply: "No dobrze, wyszedłem! Nawet piramida potrzebuje powietrza. Kotka miauczała w spiżarni, więc ją wypuściłem, z litości.", nt: "Doktor Mawle skłamał", nx: "O 21:20 wyszedł z salonu i zaniósł kotkę do gabinetu." },
        maw3: { reply: "Dwadzieścia lat nosiłem mu książki i herbatę. A on chciał ogłosić całemu Oksfordowi, że go okradłem. Jedna recenzja i koniec wszystkiego.", nt: "Recenzja", nx: "Recenzja profesora zniszczyłaby karierę doktora Mawle'a. Oto motyw." }
      },
      wrong: {
        imelda: "Panna Fenchurch sama spotkała doktora z kotką na korytarzu. Książki zamiast pensji to powód do narzekania, nie do zabójstwa.",
        bettany: "Pani Bettany zamknęła kotkę w spiżarni i cały wieczór piekła ciasto. Spodeczek jest z serwisu profesora, nie jej blaszana miska.",
        ruddle: "Od dziewiątej do wpół do dziesiątej pan Ruddle jadł kolację w kuchni na oczach kucharki, a resztę wieczoru stał w holu. To on widział, kto wszedł do profesora o siódmej.",
        proof: "Doktor Mawle rozkłada ręce: „Byłem piramidą, panienko, cały wieczór na oczach wszystkich”. Udowodnij, że zaniósł kotkę do gabinetu, albo czego bał się w poniedziałek."
      },
      deduce: [
        "Kotkę zamknięto w spiżarni. Kto zaniósł ją do gabinetu?",
        "Kto był u profesora, kiedy proszek był jeszcze w buteleczce?",
        "Czyją książkę profesor rozszarpywał w recenzji?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Recenzja nigdy się nie ukazała. W marcu książka doktora Mawle'a dostała medal Towarzystwa Starożytników",
        p: [
          "W poniedziałek „Przegląd Headingtoński” wydrukowałby recenzję profesora Ferriera: książka jego dawnego ucznia, doktora Mawle'a, okazywała się przeróbką cudzych prac. Dla Mawle'a to był koniec kariery.",
          "O siódmej, odwiedzając profesora z książką, Mawle podmienił proszek na astmę na utłuczoną herbatę. O 21:20, niby po rekwizyty do szarady, wypuścił kotkę ze spiżarni i po cichu wpuścił ją do gabinetu: profesor pisał tyłem do drzwi i jej nie zauważył.",
          "Mleko nalał na spodeczek, żeby podejrzenie padło na kucharkę. Ale podopieczna profesora spotkała go na korytarzu z kotką na rękach."
        ]
      }
    }
  }
});
