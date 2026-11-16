window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "046", n: 46, scene: "parlour", searchTime: 80, culprit: "overton",
  clues: {
    c1: { prop: "bottle", voice: "logic" },
    c2: { prop: "newspaper", voice: "gossip", puzzle: true },
    c3: { prop: "clock", voice: "intuition" },
    c4: { prop: "glass", voice: "logic" },
    c5: { prop: "pipe", voice: "gossip" },
  },
  decoys: { painting: "logic", vase: "gossip", window: "intuition", lamp: "intuition" },
  suspects: [
    { id: "overton", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#9a7a5a", outfit: "dress", outfitColor: "#5a2a4a", extras: ["pearls", "sweat"], female: true, lips: "#a04050" }, qs: [
        { id: "ovr1" },
        { id: "ovr2", voice: "logic" },
        { id: "ovr3", needs: "c2" },
    ] },
    { id: "felicity", color: "#bc9be0", look: { hair: "bob", hairColor: "#e0c070", outfit: "dress", outfitColor: "#2a6a7a", extras: ["earrings", "headband"], female: true, lips: "#c03050" }, qs: [
        { id: "fel1", voice: "gossip" },
        { id: "fel2", voice: "logic" },
        { id: "fel3" },
    ] },
    { id: "crispin", color: "#86b8dc", look: { hair: "long", hairColor: "#3a2a1a", outfit: "vest", outfitColor: "#7a5a3a", extras: ["sweat"] }, qs: [
        { id: "cri1", voice: "intuition" },
        { id: "cri2", needs: "c3", voice: "logic" },
        { id: "cri3", voice: "gossip" },
    ] },
    { id: "pumphrey", color: "#d1a94e", look: { hair: "grey-short", hairColor: "#b8b0a8", outfit: "maid", outfitColor: "#3a3a4a", extras: ["glasses"], female: true }, qs: [
        { id: "pum1" },
        { id: "pum2", needs: "c1", voice: "logic" },
        { id: "pum3" },
        { id: "pum4", voice: "intuition" },
    ] },
  ],
  objections: { ovr1: { evidence: "fel2" }, ovr3: { evidence: "c2" } },
  proof: ["pum2", "c2", "obj:ovr1", "obj:ovr3"],
  text: {
    ru: {
      title: "Портвейн полковника",
      desc: "Портвейн в этом доме пил только хозяин, и только по субботам. В эту субботу графин стал для него последним.",
      meta: ["Хэмбли-хаус, Глостершир", "13 августа 1932", "≈ 5 минут"],
      introEyebrow: "Гостиная · 21:40",
      introTitle: "Последняя трубка",
      intro: [
        "Полковник Джаспер Уинслоу, мировой судья, каждую субботу принимал соседей к ужину и бриджу.",
        "После ужина он отлучился позвонить начальнику полиции, вернулся, выпил портвейна, закурил трубку и в 21:40 уронил голову на подлокотник.",
        "Вы в числе гостей, мисс Ада Лэнгтон. Кто подходил к графину?"
      ],
      introVoice: "Табачный дым ещё висит под абажуром.",
      clues: {
        c1: { title: "Графин", text: "Графин рубинового стекла с портвейном. Анализ: атропин, яд белладонны. Портвейн в доме пил только полковник.", note: "В портвейне атропин. Портвейн пил только полковник." },
        c2: { title: "Газета", text: "Местная газета на диване, заметка обведена карандашом! И на полях что-то нацарапано рукой полковника!", note: "«Вестник Хэмбли»: в пятницу, 5 августа, у моста сбит велосипедист, полиция ищет зелёный «Остин». На полях рукой полковника: «Остин» молодого Овертона, в понедельник — к суду." },
        c3: { title: "Часы", text: "В футляре напольных часов, за маятником, пузырёк глазных капель. Наклейка аптеки: «Мистер К. Уинслоу». Кто-то прятал его от чужих глаз.", note: "В футляре часов — пузырёк атропиновых капель Криспина Уинслоу. Полный, сургуч на пробке цел." },
        c4: { title: "Стакан", text: "Стакан для виски на буфете, на дне остаток. Яда нет.", note: "Виски в стакане чистый. Яд только в портвейне." },
        c5: { title: "Трубка", text: "Трубка полковника в пепельнице, ещё тёплая! Он закуривал её только после портвейна, дорогуша, тридцать лет одно и то же!", note: "Полковник выпил портвейн около 21:30, после звонка, и закурил трубку." }
      },
      letter: [
        "«Вестник Хэмбли», 10 августа:",
        "«В пятницу у моста сбит велосипедист.",
        "Полиция ищет зелёный „Остин“».",
        "На полях: «Видел сам у трактира: „Остин“",
        "молодого Овертона. В понедельник — к суду. Дж. У.»"
      ],
      decoys: {
        painting: "Пейзаж над буфетом под стеклом. В стекле, как в зеркале, отражается комната.",
        vase: "Цветы с церковного базара! Полковник купил их всем назло: он букеты терпеть не может!",
        window: "Окно на террасу. Луна, на плитах ни души.",
        lamp: "Торшер горит ровно. Под абажуром висит табачный дым."
      },
      suspects: {
        overton: { name: "Леди Филиппа Овертон", role: "Соседка, вдова, 50 лет", intro: "Жемчуг, веер, огромные блестящие глаза. Над губой испарина." },
        felicity: { name: "Миссис Фелисити Уинслоу", role: "Жена полковника, 35 лет", intro: "Светлое каре, серьги, бирюзовое платье. Курит, не скрываясь." },
        crispin: { name: "Мистер Криспин Уинслоу", role: "Племянник, художник, 30 лет", intro: "Длинные волосы, жилет в краске, испарина на лбу." },
        pumphrey: { name: "Миссис Грейси Памфри", role: "Экономка, 60 лет", intro: "Очки, тёмное платье, ключи на поясе. Руки прячет под фартук." }
      },
      qs: {
        ovr1: { q: "Где вы были после ужина?", a: "Мы с миссис Уинслоу вышли подышать, мисс, пока полковник звонил. [[И до половины десятого гуляли по террасе вдвоём.]]" },
        ovr2: { q: "Вы часто бываете в этом доме?", a: "Каждую субботу, мисс, уже десять лет. Ужин, бридж, портвейн для полковника и сплетни для дам.", v: "Каждую субботу, десять лет. Порядки дома ей известны." },
        ovr3: { q: "Ваш сын водит зелёный «Остин»?", a: "Водит, мисс, мальчику девятнадцать, он с этой машины не слезает. [[Но в ту пятницу Роджер гостил у тётки в Оксфорде.]]" },
        fel1: { q: "Что было после ужина?", a: "Муж ушёл звонить начальнику полиции, а я вышла на террасу. Бридж я терпеть не могу.", v: "Молодая жена и старый полковник! Говорят, она с племянника глаз не сводит!" },
        fel2: { q: "Кто был с вами на террасе?", a: "Никого, мисс. Леди Овертон собиралась выйти со мной, но осталась в гостиной: сказала, что от ночного воздуха у неё слезятся глаза.", v: "На террасе одна. Леди Овертон осталась в гостиной.", nt: "Миссис Уинслоу на террасе", nx: "С 21:05 до 21:30 миссис Уинслоу была на террасе одна. Леди Овертон осталась в гостиной." },
        fel3: { q: "Вы счастливы в браке?", a: "Муж любил порядок, портвейн и свою полицию, а я люблю танцы, так что виделись мы за ужином." },
        cri1: { q: "Где вы были после ужина?", a: "Наверху, мисс, ни разу не спускался до самого крика. Дописывал этюд при лампе.", v: "Пальцы в краске, взгляд беспокойный." },
        cri2: { q: "Это ваши капли?", a: "Мои, мисс, от воспаления глаз. Это запасной флакон, он стоял нераспечатанный у меня на умывальнике, а начатый я ношу в кармане.", v: "Флакон не распечатан.", nt: "Капли Криспина", nx: "Пузырёк Криспина из часов не распечатан: из него ничего не брали. Стоял у него на умывальнике." },
        cri3: { q: "Вы ладили с дядей?", a: "Он платил за мои холсты и каждый раз напоминал, сколько они стоят. Я задолжал ему триста фунтов.", v: "Триста фунтов долга! И ни одной проданной картины!" },
        pum1: { q: "Что вы делали вечером?", a: "Подала ужин, мисс, в девять принесла полковнику портвейн, а в двадцать минут десятого отнесла мистеру Криспину наверх какао — он сидел у мольберта." },
        pum2: { q: "Кто подходил к графину?", a: "В четверть десятого я зашла за подносом. У буфета стояла леди Овертон с пипеткой, будто капала себе в глаза и гляделась в стекло картины.", v: "21:15, буфет, пипетка.", nt: "Экономка в 21:15", nx: "В 21:15 леди Овертон стояла у буфета с пипеткой в руке." },
        pum3: { q: "Портвейн был хороший?", a: "…Разбавленный, мисс. Хороший я сдаю в «Зелёного человека», а полковник за десять лет разницы не заметил." },
        pum4: { q: "Полковник был строг?", a: "Строг, мисс, но справедлив. За ужином сказал: «В понедельник один молодой человек пожалеет, что сел за руль».", v: "Она говорит о хозяине тепло и прячет руки под фартук." }
      },
      objections: {
        ovr1: { reply: "Ах, ну осталась! Глаза слезились, я и вернулась к дивану. Неужели теперь и за это отвечать?", nt: "Леди Овертон солгала", nx: "Она не выходила на террасу: с 21:05 до 21:30 оставалась в гостиной." },
        ovr3: { reply: "Хорошо, он был дома. Мальчик испугался и уехал, а велосипедист жив и уже ходит! А полковник в понедельник отдал бы его под суд.", nt: "Сын", nx: "Сын леди Овертон сбил велосипедиста. В понедельник полковник отдал бы его под суд. Вот мотив." }
      },
      wrong: {
        felicity: "Миссис Уинслоу полчаса гуляла по террасе одна, и это она сказала, что леди Овертон осталась в гостиной. Муж ей наскучил, но от скуки спасают танцы.",
        crispin: "Пузырёк Криспина в часах не распечатан, сургуч цел. А в 21:20 экономка застала его наверху у мольберта.",
        pumphrey: "Миссис Памфри разбавляла портвейн водой, а не ядом. Это она видела у буфета леди Овертон с пипеткой.",
        proof: "Леди Овертон обмахивается веером: «Капли? Я ношу их от мигрени». Докажите, что она была у графина, или чего ей было бояться в понедельник."
      },
      deduce: [
        "Пузырёк в часах не распечатан. Откуда тогда яд?",
        "Кого экономка видела у буфета с пипеткой?",
        "Кого полковник собирался в понедельник отдать под суд?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Леди Овертон увезла сына на воды в Баден. Дело о велосипедисте закрыли: свидетелей не нашлось",
        p: [
          "В пятницу сын леди Овертон на зелёном «Остине» сбил у моста велосипедиста и уехал. Полковник Уинслоу, мировой судья, видел машину у трактира и в понедельник собирался отдать юношу под суд.",
          "Леди Овертон каждый день капала в глаза белладонну, чтобы они блестели. Пока полковник звонил начальнику полиции, она осталась в гостиной и накапала атропин в графин, из которого пил только он.",
          "Чтобы подозрение пало на племянника, она взяла с его умывальника запасной флакон с каплями и спрятала в часах. Но флакон был не распечатан, а экономка видела её у буфета с пипеткой."
        ]
      }
    },
    en: {
      title: "The Colonel's Port",
      desc: "Only the master of the house drank port, and only on Saturdays. This Saturday the decanter was his last.",
      meta: ["Hambly House, Gloucestershire", "13 August 1932", "≈ 5 minutes"],
      introEyebrow: "Parlour · 9:40 pm",
      introTitle: "The last pipe",
      intro: [
        "Every Saturday Colonel Jasper Winslow, Justice of the Peace, had the neighbours in for dinner and bridge.",
        "After dinner he stepped out to telephone the Chief Constable, came back, drank his port, lit his pipe, and at 9:40 his head dropped onto the arm of his chair.",
        "You're among the guests, Miss Ada Langton. Who went near the decanter?"
      ],
      introVoice: "Pipe smoke still hangs beneath the lampshade.",
      clues: {
        c1: { title: "Decanter", text: "A ruby-glass decanter of port. Analysis: atropine, the poison of belladonna. Only the colonel drank port in this house.", note: "The port held atropine. Only the colonel drank port." },
        c2: { title: "Newspaper", text: "A local paper on the sofa with a report ringed in pencil! And something scribbled in the margin in the colonel's hand!", note: "The Hambly Herald: on Friday 5 August a cyclist was knocked down by the bridge; police seek a green Austin. In the margin, in the colonel's hand: young Overton's Austin, to court on Monday." },
        c3: { title: "Clock", text: "Inside the grandfather clock case, behind the pendulum, a bottle of eye drops. The chemist's label reads “Mr C. Winslow”. Someone was keeping it out of sight.", note: "In the clock case: Crispin Winslow's bottle of atropine drops. Full, the wax on the stopper unbroken." },
        c4: { title: "Glass", text: "A whisky tumbler on the sideboard with a little left in the bottom. No poison.", note: "The whisky in the glass is clean. The poison is only in the port." },
        c5: { title: "Pipe", text: "The colonel's pipe in the ashtray, still warm! He only ever lit it after his port, my dear, thirty years the same!", note: "The colonel drank his port around 9:30, after the telephone call, and lit his pipe." }
      },
      letter: [
        "The Hambly Herald, 10 August:",
        "“Cyclist knocked down by the bridge on Friday.",
        "Police seek a green Austin.”",
        "In the margin: “Saw it myself outside the inn: young",
        "Overton's Austin. To court on Monday. J. W.”"
      ],
      decoys: {
        painting: "A landscape under glass over the sideboard. The glass reflects the room like a mirror.",
        vase: "Flowers from the church bazaar! The colonel bought them out of sheer contrariness: he can't abide bouquets!",
        window: "The window onto the terrace. Moonlight, and not a soul on the flagstones.",
        lamp: "The standard lamp burns steadily. Tobacco smoke hangs beneath the shade."
      },
      suspects: {
        overton: { name: "Lady Philippa Overton", role: "Neighbour, widow, 50", intro: "Pearls, a fan, huge shining eyes. Beads of sweat on her upper lip." },
        felicity: { name: "Mrs Felicity Winslow", role: "The colonel's wife, 35", intro: "Fair bob, earrings, a turquoise dress. Smokes openly." },
        crispin: { name: "Mr Crispin Winslow", role: "Nephew, painter, 30", intro: "Long hair, a paint-smeared waistcoat, sweat on his brow." },
        pumphrey: { name: "Mrs Gracie Pumphrey", role: "Housekeeper, 60", intro: "Spectacles, a dark dress, keys at her belt. Hides her hands under her apron." }
      },
      qs: {
        ovr1: { q: "Where were you after dinner?", a: "Mrs Winslow and I went out for some air, miss, while the colonel was on the telephone. [[We walked the terrace together until half past nine.]]" },
        ovr2: { q: "Do you come to this house often?", a: "Every Saturday, miss, these ten years. Dinner, bridge, port for the colonel and gossip for the ladies.", v: "Every Saturday for ten years. She knows the ways of the house." },
        ovr3: { q: "Does your son drive a green Austin?", a: "He does, miss, the boy's nineteen and lives in that motor. [[But that Friday Roger was staying with his aunt in Oxford.]]" },
        fel1: { q: "What happened after dinner?", a: "My husband went to telephone the Chief Constable, and I went out on the terrace. I can't bear bridge.", v: "A young wife and an old colonel! They say she can't take her eyes off the nephew!" },
        fel2: { q: "Who was with you on the terrace?", a: "No one, miss. Lady Overton was going to come out with me, but she stayed in the parlour: said the night air made her eyes water.", v: "Alone on the terrace. Lady Overton stayed in the parlour.", nt: "Mrs Winslow on the terrace", nx: "From 9:05 to 9:30 Mrs Winslow was alone on the terrace. Lady Overton stayed in the parlour." },
        fel3: { q: "Are you happily married?", a: "My husband loved order, port and his police, and I love dancing, so we saw each other at dinner." },
        cri1: { q: "Where were you after dinner?", a: "Upstairs, miss, and I never came down once until the scream. I was finishing a study by lamplight.", v: "Paint on his fingers, a restless look in his eyes." },
        cri2: { q: "Are these your drops?", a: "They are, miss, for an inflamed eye. That's my spare bottle; it stood unopened on my washstand, and I carry the one I'm using in my pocket.", v: "The bottle is unopened.", nt: "Crispin's drops", nx: "Crispin's bottle from the clock is unopened: nothing was taken from it. It stood on his washstand." },
        cri3: { q: "Did you get on with your uncle?", a: "He paid for my canvases and reminded me every time what they cost. I owe him three hundred pounds.", v: "Three hundred pounds in debt! And not one picture sold!" },
        pum1: { q: "What did you do this evening?", a: "I served dinner, miss, brought the colonel his port at nine, and at twenty past took Mr Crispin his cocoa upstairs: he was at his easel." },
        pum2: { q: "Who went near the decanter?", a: "At a quarter past nine I came in for the tray. Lady Overton was at the sideboard with a dropper, as if she were putting drops in her eyes, looking at herself in the glass of the picture.", v: "9:15, the sideboard, a dropper.", nt: "The housekeeper at 9:15", nx: "At 9:15 Lady Overton was at the sideboard with a dropper in her hand." },
        pum3: { q: "Was it good port?", a: "…Watered, miss. I sell the good stuff to the Green Man, and in ten years the colonel never noticed the difference." },
        pum4: { q: "Was the colonel strict?", a: "Strict, miss, but fair. At dinner he said, “On Monday a certain young man will be sorry he ever took the wheel.”", v: "She speaks warmly of her master and hides her hands under her apron." }
      },
      objections: {
        ovr1: { reply: "Oh, very well, I stayed! My eyes were watering, so I went back to the sofa. Is one to be hanged for that now?", nt: "Lady Overton lied", nx: "She never went out on the terrace: from 9:05 to 9:30 she stayed in the parlour." },
        ovr3: { reply: "All right, he was at home. The boy panicked and drove off, and the cyclist's alive and already walking! And on Monday the colonel would have sent him for trial.", nt: "The son", nx: "Lady Overton's son knocked down a cyclist. On Monday the colonel would have sent him for trial. There's the motive." }
      },
      wrong: {
        felicity: "Mrs Winslow spent half an hour alone on the terrace, and she's the one who told you Lady Overton stayed in the parlour. Her husband bored her, but dancing is the cure for boredom.",
        crispin: "Crispin's bottle in the clock is unopened, the wax unbroken. And at 9:20 the housekeeper found him upstairs at his easel.",
        pumphrey: "Mrs Pumphrey watered the port with water, not poison. She's the one who saw Lady Overton at the sideboard with a dropper.",
        proof: "Lady Overton plies her fan: “Drops? I carry them for my migraines.” Prove she went to the decanter, or what she had to fear on Monday."
      },
      deduce: [
        "The bottle in the clock is unopened. So where did the poison come from?",
        "Whom did the housekeeper see at the sideboard with a dropper?",
        "Whom did the colonel mean to send for trial on Monday?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "Lady Overton took her son to Baden for the waters. The cyclist case was closed for want of witnesses",
        p: [
          "On Friday Lady Overton's son knocked a cyclist down by the bridge in his green Austin and drove off. Colonel Winslow, the local magistrate, had seen the car outside the inn and meant to send the young man for trial on Monday.",
          "Every day Lady Overton put belladonna in her eyes to make them shine. While the colonel was telephoning the Chief Constable, she stayed in the parlour and dropped atropine into the decanter only he drank from.",
          "To throw suspicion on the nephew, she took his spare bottle of drops from his washstand and hid it in the clock. But the bottle was unopened, and the housekeeper had seen her at the sideboard with a dropper."
        ]
      }
    },
    es: {
      title: "El oporto del coronel",
      desc: "En esta casa solo el señor bebía oporto, y solo los sábados. Este sábado la licorera fue la última para él.",
      meta: ["Hambly House, Gloucestershire", "13 de agosto de 1932", "≈ 5 minutos"],
      introEyebrow: "Salón · 21:40",
      introTitle: "La última pipa",
      intro: [
        "Cada sábado el coronel Jasper Winslow, juez de paz, invitaba a los vecinos a cenar y jugar al bridge.",
        "Después de la cena salió a telefonear al jefe de policía, volvió, se bebió su oporto, encendió la pipa y a las 21:40 dejó caer la cabeza sobre el brazo del sillón.",
        "Estás entre los invitados, señorita Ada Langton. ¿Quién se acercó a la licorera?"
      ],
      introVoice: "El humo de la pipa aún flota bajo la pantalla.",
      clues: {
        c1: { title: "Licorera", text: "Una licorera de cristal rubí con oporto. Análisis: atropina, el veneno de la belladona. En esta casa solo el coronel bebía oporto.", note: "En el oporto había atropina. Solo lo bebía el coronel." },
        c2: { title: "Periódico", text: "¡Un periódico local en el sofá con una noticia rodeada a lápiz! ¡Y algo garabateado en el margen con la letra del coronel!", note: "El Heraldo de Hambly: el viernes 5 de agosto atropellaron a un ciclista junto al puente; la policía busca un Austin verde. En el margen, de puño del coronel: el Austin del joven Overton, el lunes ante el tribunal." },
        c3: { title: "Reloj", text: "En la caja del reloj de pie, detrás del péndulo, un frasco de colirio. Etiqueta de farmacia: «Sr. C. Winslow». Alguien lo escondía de miradas ajenas.", note: "En la caja del reloj: el frasco de gotas de atropina de Crispin Winslow. Lleno, con el lacre del tapón intacto." },
        c4: { title: "Vaso", text: "Un vaso de whisky en el aparador con un resto en el fondo. Sin veneno.", note: "El whisky del vaso está limpio. El veneno solo está en el oporto." },
        c5: { title: "Pipa", text: "¡La pipa del coronel en el cenicero, aún tibia! Solo la encendía después del oporto, querida, ¡treinta años igual!", note: "El coronel se tomó el oporto hacia las 21:30, después de la llamada, y encendió la pipa." }
      },
      letter: [
        "El Heraldo de Hambly, 10 de agosto:",
        "«El viernes atropellaron a un ciclista junto al puente.",
        "La policía busca un Austin verde».",
        "En el margen: «Lo vi yo mismo ante la posada: el Austin",
        "del joven Overton. El lunes, al tribunal. J. W.»"
      ],
      decoys: {
        painting: "Un paisaje con cristal sobre el aparador. El cristal refleja la habitación como un espejo.",
        vase: "¡Flores del mercadillo de la parroquia! El coronel las compró por llevar la contraria: ¡no soporta los ramos!",
        window: "La ventana de la terraza. Luna, y ni un alma en las losas.",
        lamp: "La lámpara de pie arde tranquila. Bajo la pantalla flota humo de tabaco."
      },
      suspects: {
        overton: { name: "Lady Philippa Overton", role: "Vecina, viuda, 50 años", intro: "Perlas, abanico, unos ojos enormes y brillantes. Sudor sobre el labio." },
        felicity: { name: "Señora Felicity Winslow", role: "Esposa del coronel, 35 años", intro: "Melena rubia corta, pendientes, vestido turquesa. Fuma sin esconderse." },
        crispin: { name: "Señor Crispin Winslow", role: "Sobrino, pintor, 30 años", intro: "Pelo largo, chaleco manchado de pintura, sudor en la frente." },
        pumphrey: { name: "Señora Gracie Pumphrey", role: "Ama de llaves, 60 años", intro: "Gafas, vestido oscuro, llaves al cinto. Esconde las manos bajo el delantal." }
      },
      qs: {
        ovr1: { q: "¿Dónde estuvo después de la cena?", a: "La señora Winslow y yo salimos a tomar el aire, señorita, mientras el coronel telefoneaba. [[Y paseamos juntas por la terraza hasta las nueve y media.]]" },
        ovr2: { q: "¿Viene a menudo a esta casa?", a: "Todos los sábados, señorita, desde hace diez años. Cena, bridge, oporto para el coronel y chismes para las señoras.", v: "Todos los sábados, diez años. Conoce las costumbres de la casa." },
        ovr3: { q: "¿Su hijo conduce un Austin verde?", a: "Sí, señorita, el chico tiene diecinueve años y no se baja de ese coche. [[Pero aquel viernes Roger estaba en casa de su tía, en Oxford.]]" },
        fel1: { q: "¿Qué pasó después de la cena?", a: "Mi marido fue a telefonear al jefe de policía y yo salí a la terraza. No soporto el bridge.", v: "¡Una esposa joven y un coronel viejo! ¡Dicen que no le quita ojo al sobrino!" },
        fel2: { q: "¿Quién estaba con usted en la terraza?", a: "Nadie, señorita. Lady Overton iba a salir conmigo, pero se quedó en el salón: dijo que el aire de la noche le hacía llorar los ojos.", v: "Sola en la terraza. Lady Overton se quedó en el salón.", nt: "La señora Winslow en la terraza", nx: "De 21:05 a 21:30 la señora Winslow estuvo sola en la terraza. Lady Overton se quedó en el salón." },
        fel3: { q: "¿Es feliz en su matrimonio?", a: "Mi marido amaba el orden, el oporto y su policía, y a mí me encanta bailar, así que nos veíamos en la cena." },
        cri1: { q: "¿Dónde estuvo después de la cena?", a: "Arriba, señorita, y no bajé ni una vez hasta el grito. Estaba terminando un estudio a la luz de la lámpara.", v: "Pintura en los dedos, la mirada inquieta." },
        cri2: { q: "¿Son suyas estas gotas?", a: "Sí, señorita, para un ojo inflamado. Es el frasco de repuesto: estaba sin abrir en mi lavabo, y el empezado lo llevo en el bolsillo.", v: "El frasco está sin abrir.", nt: "Las gotas de Crispin", nx: "El frasco de Crispin del reloj está sin abrir: no se sacó nada de él. Estaba en su lavabo." },
        cri3: { q: "¿Se llevaba bien con su tío?", a: "Me pagaba los lienzos y siempre me recordaba lo que costaban. Le debo trescientas libras.", v: "¡Trescientas libras de deuda! ¡Y ni un cuadro vendido!" },
        pum1: { q: "¿Qué hizo esta noche?", a: "Serví la cena, señorita, a las nueve le llevé el oporto al coronel y a las nueve y veinte le subí el cacao al señor Crispin: estaba ante el caballete." },
        pum2: { q: "¿Quién se acercó a la licorera?", a: "A las nueve y cuarto entré a por la bandeja. Lady Overton estaba en el aparador con un cuentagotas, como si se echara gotas en los ojos mirándose en el cristal del cuadro.", v: "21:15, el aparador, un cuentagotas.", nt: "El ama de llaves a las 21:15", nx: "A las 21:15 Lady Overton estaba en el aparador con un cuentagotas en la mano." },
        pum3: { q: "¿Era bueno el oporto?", a: "…Aguado, señorita. El bueno se lo vendo al Hombre Verde, y en diez años el coronel no notó la diferencia." },
        pum4: { q: "¿Era severo el coronel?", a: "Severo, señorita, pero justo. En la cena dijo: «El lunes cierto jovencito se arrepentirá de haberse sentado al volante».", v: "Habla con cariño de su señor y esconde las manos bajo el delantal." }
      },
      objections: {
        ovr1: { reply: "¡Ay, está bien, me quedé! Me lloraban los ojos y volví al sofá. ¿Ahora también hay que responder por eso?", nt: "Lady Overton mintió", nx: "No salió a la terraza: de 21:05 a 21:30 se quedó en el salón." },
        ovr3: { reply: "Está bien, estaba en casa. El chico se asustó y se fue, ¡y el ciclista está vivo y ya camina! Y el lunes el coronel lo habría llevado ante el tribunal.", nt: "El hijo", nx: "El hijo de Lady Overton atropelló a un ciclista. El lunes el coronel lo habría llevado ante el tribunal. Ese es el móvil." }
      },
      wrong: {
        felicity: "La señora Winslow pasó media hora sola en la terraza, y fue ella quien te dijo que Lady Overton se quedó en el salón. Su marido la aburría, pero para el aburrimiento está el baile.",
        crispin: "El frasco de Crispin del reloj está sin abrir, con el lacre intacto. Y a las 21:20 el ama de llaves lo encontró arriba, ante el caballete.",
        pumphrey: "La señora Pumphrey aguaba el oporto con agua, no con veneno. Fue ella quien vio a Lady Overton en el aparador con un cuentagotas.",
        proof: "Lady Overton se abanica: «¿Gotas? Las llevo para la jaqueca». Demuestra que se acercó a la licorera, o qué temía del lunes."
      },
      deduce: [
        "El frasco del reloj está sin abrir. ¿De dónde salió entonces el veneno?",
        "¿A quién vio el ama de llaves en el aparador con un cuentagotas?",
        "¿A quién pensaba el coronel llevar el lunes ante el tribunal?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "Lady Overton se llevó a su hijo a tomar las aguas en Baden. El caso del ciclista se cerró por falta de testigos",
        p: [
          "El viernes el hijo de Lady Overton atropelló a un ciclista junto al puente con su Austin verde y se fue. El coronel Winslow, juez de paz, había visto el coche ante la posada y pensaba llevar al joven ante el tribunal el lunes.",
          "Lady Overton se echaba belladona en los ojos cada día para que le brillaran. Mientras el coronel telefoneaba al jefe de policía, se quedó en el salón y echó atropina en la licorera de la que solo bebía él.",
          "Para que las sospechas recayeran en el sobrino, cogió de su lavabo el frasco de repuesto y lo escondió en el reloj. Pero el frasco estaba sin abrir, y el ama de llaves la había visto en el aparador con un cuentagotas."
        ]
      }
    },
    de: {
      title: "Der Portwein des Colonels",
      desc: "Portwein trank in diesem Haus nur der Hausherr, und nur samstags. An diesem Samstag war die Karaffe seine letzte.",
      meta: ["Hambly House, Gloucestershire", "13. August 1932", "≈ 5 Minuten"],
      introEyebrow: "Salon · 21:40",
      introTitle: "Die letzte Pfeife",
      intro: [
        "Jeden Samstag lud Colonel Jasper Winslow, Friedensrichter, die Nachbarn zu Dinner und Bridge.",
        "Nach dem Essen ging er hinaus, um den Polizeichef anzurufen, kam zurück, trank seinen Portwein, zündete die Pfeife an, und um 21:40 sank sein Kopf auf die Sessellehne.",
        "Du bist unter den Gästen, Miss Ada Langton. Wer war an der Karaffe?"
      ],
      introVoice: "Pfeifenrauch hängt noch unter dem Lampenschirm.",
      clues: {
        c1: { title: "Karaffe", text: "Eine Karaffe aus Rubinglas mit Portwein. Analyse: Atropin, das Gift der Tollkirsche. Portwein trank im Haus nur der Colonel.", note: "Im Portwein war Atropin. Ihn trank nur der Colonel." },
        c2: { title: "Zeitung", text: "Eine Lokalzeitung auf dem Sofa, eine Meldung mit Bleistift eingekreist! Und am Rand hat der Colonel etwas hingekritzelt!", note: "Hambly-Bote: Am Freitag, 5. August, wurde an der Brücke ein Radfahrer angefahren; die Polizei sucht einen grünen Austin. Am Rand, in der Hand des Colonels: der Austin des jungen Overton, am Montag vor Gericht." },
        c3: { title: "Uhr", text: "Im Gehäuse der Standuhr, hinter dem Pendel, ein Fläschchen Augentropfen. Apothekenetikett: „Mr C. Winslow“. Jemand wollte es vor fremden Blicken verbergen.", note: "Im Uhrgehäuse: Crispin Winslows Fläschchen Atropintropfen. Voll, das Wachs auf dem Stöpsel unversehrt." },
        c4: { title: "Glas", text: "Ein Whiskyglas auf der Anrichte, ein Rest am Boden. Kein Gift.", note: "Der Whisky im Glas ist sauber. Das Gift ist nur im Portwein." },
        c5: { title: "Pfeife", text: "Die Pfeife des Colonels im Aschenbecher, noch warm! Die zündete er immer erst nach dem Portwein an, Schätzchen, dreißig Jahre lang!", note: "Der Colonel trank seinen Portwein gegen 21:30, nach dem Anruf, und zündete die Pfeife an." }
      },
      letter: [
        "Hambly-Bote, 10. August:",
        "„Am Freitag Radfahrer an der Brücke angefahren.",
        "Polizei sucht grünen Austin.“",
        "Am Rand: „Selbst gesehen vor dem Gasthaus: der Austin",
        "des jungen Overton. Montag vor Gericht. J. W.“"
      ],
      decoys: {
        painting: "Eine Landschaft unter Glas über der Anrichte. Das Glas spiegelt den Raum wie ein Spiegel.",
        vase: "Blumen vom Kirchenbasar! Der Colonel hat sie aus reinem Trotz gekauft: Sträuße kann er nicht ausstehen!",
        window: "Das Fenster zur Terrasse. Mondlicht, und keine Menschenseele auf den Platten.",
        lamp: "Die Stehlampe brennt ruhig. Unter dem Schirm hängt Tabakrauch."
      },
      suspects: {
        overton: { name: "Lady Philippa Overton", role: "Nachbarin, Witwe, 50", intro: "Perlen, ein Fächer, riesige glänzende Augen. Schweißperlen über der Lippe." },
        felicity: { name: "Mrs Felicity Winslow", role: "Frau des Colonels, 35", intro: "Blonder Bubikopf, Ohrringe, türkisfarbenes Kleid. Raucht ganz offen." },
        crispin: { name: "Mr Crispin Winslow", role: "Neffe, Maler, 30", intro: "Lange Haare, farbbekleckste Weste, Schweiß auf der Stirn." },
        pumphrey: { name: "Mrs Gracie Pumphrey", role: "Haushälterin, 60", intro: "Brille, dunkles Kleid, Schlüssel am Gürtel. Versteckt die Hände unter der Schürze." }
      },
      qs: {
        ovr1: { q: "Wo waren Sie nach dem Dinner?", a: "Mrs Winslow und ich gingen an die Luft, Miss, während der Colonel telefonierte. [[Und bis halb zehn gingen wir zu zweit auf der Terrasse auf und ab.]]" },
        ovr2: { q: "Sind Sie oft in diesem Haus?", a: "Jeden Samstag, Miss, seit zehn Jahren. Dinner, Bridge, Portwein für den Colonel und Klatsch für die Damen.", v: "Jeden Samstag, zehn Jahre lang. Sie kennt die Gepflogenheiten des Hauses." },
        ovr3: { q: "Fährt Ihr Sohn einen grünen Austin?", a: "Ja, Miss, der Junge ist neunzehn und steigt aus dem Wagen gar nicht mehr aus. [[Aber an jenem Freitag war Roger bei seiner Tante in Oxford.]]" },
        fel1: { q: "Was geschah nach dem Dinner?", a: "Mein Mann ging den Polizeichef anrufen, und ich ging auf die Terrasse. Bridge kann ich nicht ausstehen.", v: "Junge Frau, alter Colonel! Es heißt, sie lässt den Neffen nicht aus den Augen!" },
        fel2: { q: "Wer war mit Ihnen auf der Terrasse?", a: "Niemand, Miss. Lady Overton wollte mitkommen, blieb aber im Salon: Von der Nachtluft tränten ihr die Augen, sagte sie.", v: "Allein auf der Terrasse. Lady Overton blieb im Salon.", nt: "Mrs Winslow auf der Terrasse", nx: "Von 21:05 bis 21:30 war Mrs Winslow allein auf der Terrasse. Lady Overton blieb im Salon." },
        fel3: { q: "Sind Sie glücklich verheiratet?", a: "Mein Mann liebte Ordnung, Portwein und seine Polizei, und ich liebe das Tanzen, also sahen wir uns beim Dinner." },
        cri1: { q: "Wo waren Sie nach dem Dinner?", a: "Oben, Miss, und ich bin kein einziges Mal heruntergekommen, bis zum Schrei. Ich habe bei Lampenlicht eine Studie fertig gemalt.", v: "Farbe an den Fingern, ein unruhiger Blick." },
        cri2: { q: "Sind das Ihre Tropfen?", a: "Ja, Miss, für ein entzündetes Auge. Das ist das Ersatzfläschchen, es stand ungeöffnet auf meinem Waschtisch, das angebrochene trage ich in der Tasche.", v: "Das Fläschchen ist ungeöffnet.", nt: "Crispins Tropfen", nx: "Crispins Fläschchen aus der Uhr ist ungeöffnet: Daraus wurde nichts genommen. Es stand auf seinem Waschtisch." },
        cri3: { q: "Kamen Sie mit Ihrem Onkel aus?", a: "Er bezahlte meine Leinwände und erinnerte mich jedes Mal, was sie kosten. Ich schulde ihm dreihundert Pfund.", v: "Dreihundert Pfund Schulden! Und kein einziges Bild verkauft!" },
        pum1: { q: "Was haben Sie heute Abend getan?", a: "Ich habe das Dinner serviert, Miss, um neun dem Colonel den Portwein gebracht und um zwanzig nach neun Mr Crispin den Kakao hinaufgetragen: Er saß an der Staffelei." },
        pum2: { q: "Wer war an der Karaffe?", a: "Um Viertel nach neun kam ich das Tablett holen. Lady Overton stand mit einer Pipette an der Anrichte, als träufelte sie sich Tropfen in die Augen, und schaute dabei ins Glas des Bildes.", v: "21:15, die Anrichte, eine Pipette.", nt: "Die Haushälterin um 21:15", nx: "Um 21:15 stand Lady Overton mit einer Pipette in der Hand an der Anrichte." },
        pum3: { q: "War es guter Portwein?", a: "…Verdünnter, Miss. Den guten verkaufe ich an den Grünen Mann, und in zehn Jahren hat der Colonel keinen Unterschied gemerkt." },
        pum4: { q: "War der Colonel streng?", a: "Streng, Miss, aber gerecht. Beim Dinner sagte er: „Am Montag wird ein gewisser junger Mann bereuen, dass er sich ans Steuer gesetzt hat.“", v: "Sie spricht warm von ihrem Herrn und versteckt die Hände unter der Schürze." }
      },
      objections: {
        ovr1: { reply: "Ach, schön, ich bin geblieben! Mir tränten die Augen, also ging ich zurück zum Sofa. Muss man sich jetzt auch dafür verantworten?", nt: "Lady Overton hat gelogen", nx: "Sie war nicht auf der Terrasse: Von 21:05 bis 21:30 blieb sie im Salon." },
        ovr3: { reply: "Gut, er war zu Hause. Der Junge bekam Angst und fuhr weg, und der Radfahrer lebt und läuft schon wieder! Und am Montag hätte ihn der Colonel vor Gericht gebracht.", nt: "Der Sohn", nx: "Lady Overtons Sohn hat einen Radfahrer angefahren. Am Montag hätte ihn der Colonel vor Gericht gebracht. Das ist das Motiv." }
      },
      wrong: {
        felicity: "Mrs Winslow ging eine halbe Stunde allein auf der Terrasse, und sie hat dir gesagt, dass Lady Overton im Salon blieb. Ihr Mann langweilte sie, aber gegen Langeweile hilft Tanzen.",
        crispin: "Crispins Fläschchen in der Uhr ist ungeöffnet, das Wachs unversehrt. Und um 21:20 traf ihn die Haushälterin oben an der Staffelei an.",
        pumphrey: "Mrs Pumphrey hat den Portwein mit Wasser verdünnt, nicht mit Gift. Sie hat Lady Overton mit der Pipette an der Anrichte gesehen.",
        proof: "Lady Overton fächelt sich Luft zu: „Tropfen? Die trage ich gegen Migräne.“ Beweise, dass sie an der Karaffe war, oder was sie am Montag zu fürchten hatte."
      },
      deduce: [
        "Das Fläschchen in der Uhr ist ungeöffnet. Woher kam dann das Gift?",
        "Wen sah die Haushälterin mit einer Pipette an der Anrichte?",
        "Wen wollte der Colonel am Montag vor Gericht bringen?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Lady Overton fuhr mit ihrem Sohn zur Kur nach Baden. Der Fall des Radfahrers wurde mangels Zeugen eingestellt",
        p: [
          "Am Freitag fuhr Lady Overtons Sohn mit seinem grünen Austin an der Brücke einen Radfahrer an und fuhr davon. Colonel Winslow, der Friedensrichter, hatte den Wagen vor dem Gasthaus gesehen und wollte den jungen Mann am Montag vor Gericht bringen.",
          "Lady Overton träufelte sich jeden Tag Belladonna in die Augen, damit sie glänzten. Während der Colonel den Polizeichef anrief, blieb sie im Salon und gab Atropin in die Karaffe, aus der nur er trank.",
          "Damit der Verdacht auf den Neffen fiel, nahm sie sein Ersatzfläschchen vom Waschtisch und versteckte es in der Uhr. Aber das Fläschchen war ungeöffnet, und die Haushälterin hatte sie mit der Pipette an der Anrichte gesehen."
        ]
      }
    },
    pl: {
      title: "Porto pułkownika",
      desc: "Porto pił w tym domu tylko pan domu, i tylko w soboty. Tej soboty karafka okazała się dla niego ostatnia.",
      meta: ["Hambly House, Gloucestershire", "13 sierpnia 1932", "≈ 5 minut"],
      introEyebrow: "Salon · 21:40",
      introTitle: "Ostatnia fajka",
      intro: [
        "Co sobotę pułkownik Jasper Winslow, sędzia pokoju, przyjmował sąsiadów na kolacji i brydżu.",
        "Po kolacji wyszedł zadzwonić do komendanta policji, wrócił, wypił porto, zapalił fajkę i o 21:40 opuścił głowę na poręcz fotela.",
        "Jesteś wśród gości, panno Ado Langton. Kto podchodził do karafki?"
      ],
      introVoice: "Pod abażurem wciąż wisi dym z fajki.",
      clues: {
        c1: { title: "Karafka", text: "Karafka z rubinowego szkła z porto. Analiza: atropina, trucizna z pokrzyku. Porto pił w tym domu tylko pułkownik.", note: "W porto była atropina. Pił je tylko pułkownik." },
        c2: { title: "Gazeta", text: "Miejscowa gazeta na kanapie, notatka obwiedziona ołówkiem! A na marginesie coś nabazgrane ręką pułkownika!", note: "„Goniec Hambly”: w piątek 5 sierpnia przy moście potrącono rowerzystę, policja szuka zielonego austina. Na marginesie ręką pułkownika: austin młodego Overtona, w poniedziałek przed sąd." },
        c3: { title: "Zegar", text: "W skrzyni zegara stojącego, za wahadłem, buteleczka kropli do oczu. Nalepka apteki: „Pan C. Winslow”. Ktoś chował ją przed cudzym wzrokiem.", note: "W skrzyni zegara: buteleczka kropli z atropiną Crispina Winslowa. Pełna, lak na korku nienaruszony." },
        c4: { title: "Szklaneczka", text: "Szklaneczka do whisky na kredensie, na dnie resztka. Trucizny brak.", note: "Whisky w szklaneczce jest czysta. Trucizna jest tylko w porto." },
        c5: { title: "Fajka", text: "Fajka pułkownika w popielniczce, jeszcze ciepła! Zapalał ją tylko po porto, kochana, trzydzieści lat to samo!", note: "Pułkownik wypił porto około 21:30, po telefonie, i zapalił fajkę." }
      },
      letter: [
        "„Goniec Hambly”, 10 sierpnia:",
        "„W piątek przy moście potrącono rowerzystę.",
        "Policja szuka zielonego austina”.",
        "Na marginesie: „Widziałem sam przed gospodą: austin",
        "młodego Overtona. W poniedziałek przed sąd. J. W.”"
      ],
      decoys: {
        painting: "Pejzaż za szkłem nad kredensem. Szkło odbija pokój jak lustro.",
        vase: "Kwiaty z kiermaszu parafialnego! Pułkownik kupił je na przekór wszystkim: nie znosi bukietów!",
        window: "Okno na taras. Księżyc i ani żywej duszy na płytach.",
        lamp: "Lampa stojąca świeci równo. Pod abażurem wisi dym tytoniowy."
      },
      suspects: {
        overton: { name: "Lady Philippa Overton", role: "Sąsiadka, wdowa, 50 lat", intro: "Perły, wachlarz, ogromne lśniące oczy. Pot nad górną wargą." },
        felicity: { name: "Pani Felicity Winslow", role: "Żona pułkownika, 35 lat", intro: "Jasne krótkie włosy, kolczyki, turkusowa suknia. Pali otwarcie." },
        crispin: { name: "Pan Crispin Winslow", role: "Bratanek, malarz, 30 lat", intro: "Długie włosy, kamizelka w farbie, pot na czole." },
        pumphrey: { name: "Pani Gracie Pumphrey", role: "Gospodyni, 60 lat", intro: "Okulary, ciemna suknia, klucze u paska. Chowa ręce pod fartuch." }
      },
      qs: {
        ovr1: { q: "Gdzie pani była po kolacji?", a: "Wyszłyśmy z panią Winslow zaczerpnąć powietrza, panienko, kiedy pułkownik telefonował. [[I do 21:30 spacerowałyśmy razem po tarasie.]]" },
        ovr2: { q: "Czy często pani tu bywa?", a: "Co sobotę, panienko, od dziesięciu lat. Kolacja, brydż, porto dla pułkownika i plotki dla pań.", v: "Co sobotę, od dziesięciu lat. Zna zwyczaje tego domu." },
        ovr3: { q: "Czy pani syn jeździ zielonym austinem?", a: "Jeździ, panienko, chłopak ma dziewiętnaście lat i nie wysiada z tego auta. [[Ale w tamten piątek Roger był u ciotki w Oksfordzie.]]" },
        fel1: { q: "Co było po kolacji?", a: "Mąż poszedł zadzwonić do komendanta policji, a ja wyszłam na taras. Nie znoszę brydża.", v: "Młoda żona i stary pułkownik! Podobno nie spuszcza oka z bratanka!" },
        fel2: { q: "Kto był z panią na tarasie?", a: "Nikt, panienko. Lady Overton miała wyjść ze mną, ale została w salonie: mówiła, że od nocnego powietrza łzawią jej oczy.", v: "Sama na tarasie. Lady Overton została w salonie.", nt: "Pani Winslow na tarasie", nx: "Od 21:05 do 21:30 pani Winslow była na tarasie sama. Lady Overton została w salonie." },
        fel3: { q: "Czy jest pani szczęśliwa w małżeństwie?", a: "Mąż kochał porządek, porto i swoją policję, a ja kocham tańce, więc widywaliśmy się przy kolacji." },
        cri1: { q: "Gdzie pan był po kolacji?", a: "Na górze, panienko, i ani razu nie zszedłem aż do krzyku. Kończyłem szkic przy lampie.", v: "Farba na palcach, niespokojne spojrzenie." },
        cri2: { q: "Czy to pańskie krople?", a: "Moje, panienko, na zapalenie oka. To zapasowa buteleczka, stała nieotwarta na mojej umywalce, a napoczętą noszę w kieszeni.", v: "Buteleczka nieotwarta.", nt: "Krople Crispina", nx: "Buteleczka Crispina z zegara jest nieotwarta: nic z niej nie wzięto. Stała na jego umywalce." },
        cri3: { q: "Czy dobrze żył pan ze stryjem?", a: "Płacił za moje płótna i za każdym razem przypominał, ile kosztują. Jestem mu winien trzysta funtów.", v: "Trzysta funtów długu! I ani jednego sprzedanego obrazu!" },
        pum1: { q: "Co pani robiła wieczorem?", a: "Podałam kolację, panienko, o dziewiątej przyniosłam pułkownikowi porto, a o 21:20 zaniosłam panu Crispinowi kakao na górę: siedział przy sztaludze." },
        pum2: { q: "Kto podchodził do karafki?", a: "Kwadrans po dziewiątej przyszłam po tacę. Przy kredensie stała lady Overton z pipetą, jakby zakraplała sobie oczy, przeglądając się w szkle obrazu.", v: "21:15, kredens, pipeta.", nt: "Gospodyni o 21:15", nx: "O 21:15 lady Overton stała przy kredensie z pipetą w ręku." },
        pum3: { q: "Czy porto było dobre?", a: "…Rozcieńczone, panienko. Dobre odsprzedaję do „Zielonego Człowieka”, a pułkownik przez dziesięć lat nie poczuł różnicy." },
        pum4: { q: "Czy pułkownik był surowy?", a: "Surowy, panienko, ale sprawiedliwy. Przy kolacji powiedział: „W poniedziałek pewien młody człowiek pożałuje, że usiadł za kierownicą”.", v: "Mówi o panu ciepło i chowa ręce pod fartuch." }
      },
      objections: {
        ovr1: { reply: "Ach, no dobrze, zostałam! Łzawiły mi oczy, więc wróciłam na kanapę. Teraz i za to trzeba odpowiadać?", nt: "Lady Overton skłamała", nx: "Nie wychodziła na taras: od 21:05 do 21:30 została w salonie." },
        ovr3: { reply: "Dobrze, był w domu. Chłopak się przestraszył i odjechał, a rowerzysta żyje i już chodzi! A w poniedziałek pułkownik postawiłby go przed sądem.", nt: "Syn", nx: "Syn lady Overton potrącił rowerzystę. W poniedziałek pułkownik postawiłby go przed sądem. Oto motyw." }
      },
      wrong: {
        felicity: "Pani Winslow pół godziny spacerowała sama po tarasie i to ona ci powiedziała, że lady Overton została w salonie. Mąż ją nudził, ale na nudę są tańce.",
        crispin: "Buteleczka Crispina w zegarze jest nieotwarta, lak nienaruszony. A o 21:20 gospodyni zastała go na górze przy sztaludze.",
        pumphrey: "Pani Pumphrey rozcieńczała porto wodą, nie trucizną. To ona widziała lady Overton z pipetą przy kredensie.",
        proof: "Lady Overton wachluje się: „Krople? Noszę je na migrenę”. Udowodnij, że podchodziła do karafki, albo czego bała się w poniedziałek."
      },
      deduce: [
        "Buteleczka w zegarze jest nieotwarta. Skąd więc trucizna?",
        "Kogo gospodyni widziała przy kredensie z pipetą?",
        "Kogo pułkownik zamierzał w poniedziałek postawić przed sądem?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Lady Overton wywiozła syna do wód w Baden. Sprawę rowerzysty umorzono z braku świadków",
        p: [
          "W piątek syn lady Overton potrącił przy moście rowerzystę zielonym austinem i odjechał. Pułkownik Winslow, sędzia pokoju, widział auto przed gospodą i w poniedziałek zamierzał postawić młodzieńca przed sądem.",
          "Lady Overton codziennie zakraplała oczy belladonną, żeby lśniły. Kiedy pułkownik dzwonił do komendanta policji, została w salonie i nakropiła atropiny do karafki, z której pił tylko on.",
          "Żeby podejrzenie padło na bratanka, wzięła z jego umywalki zapasową buteleczkę kropli i schowała w zegarze. Ale buteleczka była nieotwarta, a gospodyni widziała ją z pipetą przy kredensie."
        ]
      }
    }
  }
});
