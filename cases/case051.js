window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "051", n: 51, scene: "theatre", look: "panto", searchTime: 85, culprit: "pask",
  clues: {
    c1: { prop: "mirror", voice: "logic" },
    c2: { prop: "telegram", voice: "gossip", puzzle: true },
    c3: { prop: "costume", voice: "gossip" },
    c4: { prop: "wig", voice: "intuition" },
    c5: { prop: "powder", voice: "logic" },
  },
  decoys: { lipstick: "gossip", bouquet: "intuition", mask: "logic", poster: "logic" },
  suspects: [
    { id: "coral", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#e0c060", outfit: "dress", outfitColor: "#3a6a5a", extras: ["sweat", "feather"], female: true, lips: "#c03050" }, qs: [
        { id: "cor1" },
        { id: "cor2", needs: "c1", voice: "logic" },
        { id: "cor3", voice: "gossip" },
    ] },
    { id: "pask", color: "#8cc79a", look: { hair: "curly", hairColor: "#3a2a1a", outfit: "dress", outfitColor: "#5a8a3a", extras: ["earrings", "mustache"] }, qs: [
        { id: "pas1", voice: "intuition" },
        { id: "pas2" },
        { id: "pas3", needs: "c2" },
    ] },
    { id: "gaskin", color: "#86b8dc", look: { hair: "bald", hairColor: "#c09070", outfit: "dress", outfitColor: "#4a5aa0", extras: ["earrings"] }, qs: [
        { id: "gas1", voice: "gossip" },
        { id: "gas2", voice: "logic" },
        { id: "gas3", needs: "c4", voice: "intuition" },
    ] },
    { id: "danby", color: "#d1a94e", look: { hair: "grey-short", hairColor: "#a0a0a0", outfit: "vest", outfitColor: "#4a3a2a", extras: ["cap"] }, qs: [
        { id: "dan1" },
        { id: "dan2", needs: "c1", voice: "logic" },
        { id: "dan3", voice: "logic" },
        { id: "dan4" },
    ] },
  ],
  objections: { pas2: { evidence: "gas2" }, pas3: { evidence: "c2" } },
  proof: ["dan2", "gas3", "c5", "gas2", "c2", "obj:pas2", "obj:pas3"],
  text: {
    ru: {
      title: "Две сестры",
      desc: "Между утренником и вечерним спектаклем фея-крёстная всегда дремала у себя в гримёрке. В этот раз из-под её двери пополз красный дым.",
      meta: ["Театр «Фонарь», Норидж", "14 января 1933", "≈ 5 минут"],
      introEyebrow: "Гримёрная · 17:40",
      introTitle: "Красный дым",
      intro: [
        "В январе театр «Фонарь» играл пантомиму «Золушка». Мисс Эсме Боултер, фея-крёстная и хозяйка труппы, между утренником и вечерним спектаклем всегда спала у себя в гримёрке, приняв порошок от бессонницы.",
        "В 17:40 из-под её двери пополз красный дым бутафорского огня. Мисс Боултер разбудить уже не смогли.",
        "Вы пришли за кулисы к знакомой, мисс Ада Лэнгтон. Кто зажёг огонь?"
      ],
      introVoice: "Пахнет серой, пудрой и мимозой.",
      clues: {
        c1: { title: "Зеркало", text: "Зеркало в копоти. Под столиком жестянка с золой красного огня: дым шёл отсюда.", note: "Под гримёрным столиком сожгли банку красного огня. В закрытой комнате этот дым смертелен." },
        c2: { title: "Телеграмма", text: "Телеграмма из страховой конторы, и адрес — гримёрная № 7! Чья это гримёрная, дорогуша?", note: "Страховая контора «Тихая гавань» сообщает в гримёрную № 7: полис на жизнь Э. Боултер на 2000 фунтов оформлен, выгодоприобретатель — «племянник Л. Пэск»." },
        c3: { title: "Платье", text: "Платье феи соскользнуло на решётку вентиляции! Она вечно всё роняет, у неё и шляпки с крючков падают!", note: "Платье феи завесило решётку вентиляции: дыму некуда было уйти." },
        c4: { title: "Парик", text: "На подставке вместо седого парика феи — рыжий парик Уродливой сестры. Лежит прямо на виду.", note: "На подставке — рыжий парик Эуфорбии, Уродливой сестры, которую играет Гаскин." },
        c5: { title: "Пудреница", text: "Пудреница мисс Боултер, на перламутровой крышке мазок зелёных театральных теней. Сама она тенями не пользовалась.", note: "На пудренице мисс Боултер — мазок зелёных теней. Её трогали гримированной рукой." }
      },
      letter: [
        "ТЕЛЕГРАММА. ТЕАТР «ФОНАРЬ», ГРИМЁРНАЯ 7.",
        "ПОЛИС НА ЖИЗНЬ Э. БОУЛТЕР НА СУММУ",
        "2000 ФУНТОВ ОФОРМЛЕН В ПОЛЬЗУ",
        "ПЛЕМЯННИКА Л. ПЭСКА ТЧК",
        "ВЗНОС ПОЛУЧЕН. «ТИХАЯ ГАВАНЬ»"
      ],
      decoys: {
        lipstick: "Алая помада «Принцесса»! Мисс Боултер красилась ею ещё с девятисотых годов!",
        bouquet: "Букет мимозы от маленьких зрителей. Открытка нарисована цветными карандашами.",
        mask: "Маска Демона из соседнего номера. Висит здесь с генеральной репетиции.",
        poster: "Афиша: «Золушка», утренник в 14:00, вечерний спектакль в 19:30."
      },
      suspects: {
        coral: { name: "Мисс Корал Эскью", role: "Принц из пантомимы, 26 лет", intro: "Золотые кудри, перо на берете, испарина над губой." },
        pask: { name: "Мистер Леонард Пэск", role: "Уродливая сестра Гризельда, 50 лет", intro: "Зелёное платье, серьги до плеч, усы под гримом." },
        gaskin: { name: "Мистер Руперт Гаскин", role: "Уродливая сестра Эуфорбия, 48 лет", intro: "Синее платье, серьги, голая макушка без парика." },
        danby: { name: "Альф Дэнби", role: "Реквизитор, 63 года", intro: "Кепка, жилет, карманы набиты гвоздями." }
      },
      qs: {
        cor1: { q: "Где вы были после утренника?", a: "Сидела у себя в гримёрке, мисс, и учила новые куплеты к вечернему, их мне дали только сегодня." },
        cor2: { q: "Кто заметил дым?", a: "Я, мисс, в 17:40: из-под двери тянуло красным дымом, как на выходе Демона. Дверь не заперта, а внутри уже нечем дышать.", v: "17:40, дым из-под двери.", nt: "Мисс Эскью в 17:40", nx: "В 17:40 мисс Эскью увидела дым из-под двери гримёрной. Дверь была не заперта." },
        cor3: { q: "Мисс Боултер вас любила?", a: "Она сделала меня принцем, мисс, а на будущий сезон обещала роль феи. Сама говорила: «Крылышки тебе пойдут».", v: "Роль феи по наследству! Говорят, принц уже примерял крылышки!" },
        pas1: { q: "Как прошёл утренник?", a: "Прекрасно, мисс: дети визжали, когда я застрял в дверце тыквы. Ради этого визга я двенадцать лет и играю уродин.", v: "Он говорит о детях, и лицо под гримом теплеет." },
        pas2: { q: "Где вы были после утренника?", a: "Отдыхал, мисс, ноги после тыквы не держат. [[Сразу после утренника ушёл в курилку к Гаскину и сидел там до шести.]]" },
        pas3: { q: "Что это за полис?", a: "Первый раз слышу, мисс. [[Это, верно, другой Пэск: в Норфолке Пэсков пруд пруди.]]" },
        gas1: { q: "Вы ладили с мисс Боултер?", a: "Она грозилась выгнать нас обоих после сезона, мисс. Говорила: «Две сестры на одну труппу — роскошь».", v: "Выгнать обоих! Вот вам и мотив у двоих, дорогуша!" },
        gas2: { q: "Где вы были после утренника?", a: "В курилке, мисс, один и без парика: его кто-то стащил с крючка около пяти. Пэск туда не заглядывал.", v: "Курилка, один. Пэска там не было.", nt: "Гаскин в курилке", nx: "После утренника Гаскин сидел в курилке один. Пэск туда не заходил." },
        gas3: { q: "Это ваш парик?", a: "Мой, мисс, рыжий, для Эуфорбии. А тени у меня голубые, у Пэска — зелёные: так мы договорились, чтобы публика нас различала.", v: "Он трогает голую макушку и морщится.", nt: "Тени сестёр", nx: "У Гаскина голубые тени, у Пэска — зелёные." },
        dan1: { q: "Что вы делали после утренника?", a: "Менял декорации к вечернему, мисс: тыква, бальный зал, часы на двенадцать." },
        dan2: { q: "Кто заходил к мисс Боултер?", a: "В 17:10 из её гримёрки вышла Уродливая сестра, мисс, в парике и в полном гриме. Которая — не скажу: они одинаковые, как две капли.", v: "17:10, Уродливая сестра, в гриме.", nt: "Реквизитор в 17:10", nx: "В 17:10 из гримёрной мисс Боултер вышла одна из Уродливых сестёр, в парике и гриме." },
        dan3: { q: "Откуда здесь красный огонь?", a: "Из моего ящика за кулисами, мисс, он не запирается, а банок за день стало на одну меньше. А вешалку у феи я сам привинчивал, платье с неё само не съедет.", v: "Вешалка привинчена. Само платье с неё не сдвинулось бы." },
        dan4: { q: "Давно служите в театре?", a: "Сорок лет, мисс, ещё с газовых ламп. Мисс Боултер я помню инженю, она тогда играла Золушку." }
      },
      objections: {
        pas2: { reply: "…Чай я ей ношу после каждого утренника, мисс, двенадцать лет подряд. Она спала. Я поставил чашку и вышел на цыпочках.", nt: "Пэск солгал", nx: "После утренника Пэск не был в курилке: Гаскин сидел там один." },
        pas3: { reply: "Две тысячи, мисс. Двенадцать лет я играю уродин за три фунта в неделю, а весной она меня выгнала бы. Я записался её племянником: кто станет проверять?", nt: "Полис", nx: "Пэск застраховал жизнь мисс Боултер на 2000 фунтов, назвавшись её племянником. Вот мотив." }
      },
      wrong: {
        coral: "Мисс Эскью учила куплеты у себя и первой подняла тревогу. Роль феи ей и так обещали, ждать оставалось до весны.",
        gaskin: "Гаскин сидел в курилке без парика: парик стащили, чтобы оставить на подставке. А тени у него голубые.",
        danby: "Альф весь вечер ворочал декорации. Это он видел, как из гримёрной вышла Уродливая сестра.",
        proof: "Мистер Пэск поправляет серьгу: «Мы с Гаскином одинаковые, мисс, как две капли». Докажите, что из гримёрной вышел именно он, или кому смерть мисс Боултер приносила деньги."
      },
      deduce: [
        "Из гримёрной вышла Уродливая сестра. Но которая из двух?",
        "Чьи тени остались на пудренице?",
        "Кому полис на жизнь мисс Боултер приносил деньги?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Вечерний спектакль сыграли с дублёршей. «Тихая гавань» выплатила племяннику страховку к Пасхе",
        p: [
          "Леонард Пэск двенадцать лет играл Уродливую сестру за гроши, а весной мисс Боултер собиралась его выгнать. Он застраховал её жизнь на две тысячи фунтов, назвавшись её племянником.",
          "В 17:05, в гриме и в своём парике, с рыжим париком Гаскина под мышкой, он вошёл к спящей мисс Боултер, поджёг под столиком банку красного огня из ящика реквизитора и завесил решётку вентиляции её платьем.",
          "Парик он оставил на подставке, чтобы подумали на Гаскина. Но Пэск задел пудреницу пальцами в гриме, и на перламутре остался мазок зелёных теней."
        ]
      }
    },
    en: {
      title: "Two Sisters",
      desc: "Between the matinee and the evening show the Fairy Godmother always dozed in her dressing room. This time red smoke came creeping from under her door.",
      meta: ["The Lantern Theatre, Norwich", "14 January 1933", "≈ 5 minutes"],
      introEyebrow: "Dressing room · 5:40 pm",
      introTitle: "Red smoke",
      intro: [
        "In January the Lantern Theatre was playing the pantomime Cinderella. Miss Esmé Boulter, Fairy Godmother and head of the company, always slept in her dressing room between the matinee and the evening show, after a sleeping powder.",
        "At 5:40 red smoke from stage fire came creeping out from under her door. Miss Boulter could not be woken.",
        "You've come backstage to see a friend, Miss Ada Langton. Who lit the fire?"
      ],
      introVoice: "It smells of sulphur, face powder and mimosa.",
      clues: {
        c1: { title: "Mirror", text: "The mirror is sooty. Under the dressing table, a tin of red-fire ash: the smoke came from here.", note: "A tin of red fire was burnt under the dressing table. In a closed room that smoke is deadly." },
        c2: { title: "Telegram", text: "A telegram from an insurance office, addressed to dressing room No. 7! Whose dressing room is that, darling?", note: "The Safe Harbour insurance office informs dressing room No. 7: a £2,000 policy on the life of E. Boulter is issued, payable to “nephew L. Pask”." },
        c3: { title: "Costume", text: "The Fairy's gown has slipped onto the ventilation grille! She's forever dropping things: even her hats fall off their hooks!", note: "The Fairy's gown covered the ventilation grille: the smoke had nowhere to go." },
        c4: { title: "Wig", text: "On the stand, instead of the Fairy's white wig, the ginger wig of an Ugly Sister. Lying in plain sight.", note: "On the stand: the ginger wig of Euphorbia, the Ugly Sister played by Gaskin." },
        c5: { title: "Powder compact", text: "Miss Boulter's powder compact, with a smear of green stage eyeshadow on the mother-of-pearl lid. She never wore eyeshadow herself.", note: "A smear of green eyeshadow on Miss Boulter's compact. Someone in make-up touched it." }
      },
      letter: [
        "TELEGRAM. LANTERN THEATRE, DRESSING ROOM 7.",
        "POLICY ON LIFE OF E. BOULTER FOR SUM OF",
        "2000 POUNDS ISSUED IN FAVOUR OF",
        "NEPHEW L. PASK STOP",
        "PREMIUM RECEIVED. SAFE HARBOUR"
      ],
      decoys: {
        lipstick: "Scarlet lipstick, “Princess”! Miss Boulter has worn it since the nineteen-hundreds!",
        bouquet: "A bunch of mimosa from the little ones in the audience. The card is drawn in coloured pencils.",
        mask: "The Demon's mask from the next turn. It's hung here since the dress rehearsal.",
        poster: "A poster: Cinderella, matinee at 2:00, evening performance at 7:30."
      },
      suspects: {
        coral: { name: "Miss Coral Askew", role: "Principal Boy, the Prince, 26", intro: "Golden curls, a feather in her cap, sweat on her upper lip." },
        pask: { name: "Mr Leonard Pask", role: "Ugly Sister Grizelda, 50", intro: "A green gown, shoulder-length earrings, a moustache under the greasepaint." },
        gaskin: { name: "Mr Rupert Gaskin", role: "Ugly Sister Euphorbia, 48", intro: "A blue gown, earrings, a bald crown with no wig." },
        danby: { name: "Alf Danby", role: "Property master, 63", intro: "Cap, waistcoat, pockets full of nails." }
      },
      qs: {
        cor1: { q: "Where were you after the matinee?", a: "In my own dressing room, miss, learning the new verses for tonight; I was only given them today." },
        cor2: { q: "Who noticed the smoke?", a: "I did, miss, at 5:40: red smoke was coming from under the door, like the Demon's entrance. The door wasn't locked, and inside there was no air left to breathe.", v: "5:40, smoke from under the door.", nt: "Miss Askew at 5:40", nx: "At 5:40 Miss Askew saw smoke from under the dressing-room door. The door wasn't locked." },
        cor3: { q: "Was Miss Boulter fond of you?", a: "She made me her Prince, miss, and promised me the Fairy next season. She said so herself: “Wings will suit you.”", v: "The Fairy's part passed down! They say the Prince has already tried on the wings!" },
        pas1: { q: "How did the matinee go?", a: "Splendidly, miss: the children shrieked when I got stuck in the pumpkin door. That shriek is why I've played ugly sisters for twelve years.", v: "He talks about the children, and his face warms under the greasepaint." },
        pas2: { q: "Where were you after the matinee?", a: "Resting, miss; after that pumpkin my legs give way. [[Straight after the matinee I went to the smoking room with Gaskin and sat there till six.]]" },
        pas3: { q: "What is this policy?", a: "First I've heard of it, miss. [[It must be some other Pask: Norfolk is full of Pasks.]]" },
        gas1: { q: "Did you get on with Miss Boulter?", a: "She threatened to sack us both after the season, miss. She used to say, “Two sisters for one company is a luxury.”", v: "Sack them both! That's a motive for two, darling!" },
        gas2: { q: "Where were you after the matinee?", a: "In the smoking room, miss, alone and without my wig: someone pinched it off its hook around five. Pask never looked in.", v: "The smoking room, alone. Pask wasn't there.", nt: "Gaskin in the smoking room", nx: "After the matinee Gaskin sat alone in the smoking room. Pask never came in." },
        gas3: { q: "Is this your wig?", a: "It is, miss, the ginger one, for Euphorbia. And my eyeshadow's blue, Pask's is green: we agreed on it so the audience could tell us apart.", v: "He touches his bare crown and winces.", nt: "The sisters' eyeshadow", nx: "Gaskin's eyeshadow is blue, Pask's is green." },
        dan1: { q: "What did you do after the matinee?", a: "Changed the scenery for tonight, miss: the pumpkin, the ballroom, the clock set to twelve." },
        dan2: { q: "Who went in to Miss Boulter?", a: "At 5:10 an Ugly Sister came out of her dressing room, miss, in wig and full make-up. Which one I couldn't say: they're as alike as two peas.", v: "5:10, an Ugly Sister, in make-up.", nt: "The property master at 5:10", nx: "At 5:10 one of the Ugly Sisters, in wig and make-up, came out of Miss Boulter's dressing room." },
        dan3: { q: "Where did the red fire come from?", a: "From my box in the wings, miss; it isn't locked, and today there's one tin fewer. And I screwed the Fairy's hanger to the wall myself; that gown won't slide off by itself.", v: "The hanger is screwed down. The gown couldn't have moved by itself." },
        dan4: { q: "Have you been at the theatre long?", a: "Forty years, miss, since the gaslight days. I remember Miss Boulter as an ingénue; she played Cinderella then." }
      },
      objections: {
        pas2: { reply: "…I've taken her tea after every matinee for twelve years, miss. She was asleep. I put the cup down and tiptoed out.", nt: "Pask lied", nx: "After the matinee Pask wasn't in the smoking room: Gaskin sat there alone." },
        pas3: { reply: "Two thousand, miss. Twelve years I've played ugly sisters for three pounds a week, and come spring she'd have sacked me. I put myself down as her nephew: who's going to check?", nt: "The policy", nx: "Pask insured Miss Boulter's life for £2,000, posing as her nephew. There's the motive." }
      },
      wrong: {
        coral: "Miss Askew was learning her verses in her own room and was the first to raise the alarm. The Fairy's part was promised to her anyway; she had only to wait till spring.",
        gaskin: "Gaskin sat in the smoking room without his wig: it was taken to be left on the stand. And his eyeshadow is blue.",
        danby: "Alf was shifting scenery all evening. He's the one who saw an Ugly Sister leave the dressing room.",
        proof: "Mr Pask straightens an earring: “Gaskin and I are as alike as two peas, miss.” Prove it was he who left the dressing room, or who stood to gain from Miss Boulter's death."
      },
      deduce: [
        "An Ugly Sister left the dressing room. But which of the two?",
        "Whose eyeshadow is on the powder compact?",
        "Who stood to gain from the policy on Miss Boulter's life?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "The evening show went on with the understudy. By Easter the Safe Harbour had paid the nephew in full",
        p: [
          "For twelve years Leonard Pask had played an Ugly Sister for a pittance, and in the spring Miss Boulter meant to sack him. He insured her life for two thousand pounds, posing as her nephew.",
          "At 5:05, in make-up and his own wig, with Gaskin's ginger wig under his arm, he went in to the sleeping Miss Boulter, lit a tin of red fire from the property box under her dressing table and covered the ventilation grille with her gown.",
          "He left the wig on the stand so that Gaskin would be suspected. But his made-up fingers brushed the powder compact and left a smear of green eyeshadow on the mother-of-pearl."
        ]
      }
    },
    es: {
      title: "Las dos hermanastras",
      desc: "Entre la función de tarde y la de noche, el hada madrina siempre dormitaba en su camerino. Esta vez, por debajo de su puerta salió humo rojo.",
      meta: ["Teatro El Farol, Norwich", "14 de enero de 1933", "≈ 5 minutos"],
      introEyebrow: "Camerino · 17:40",
      introTitle: "Humo rojo",
      intro: [
        "En enero el teatro El Farol representaba la pantomima «La Cenicienta». La señorita Esmé Boulter, hada madrina y directora de la compañía, siempre dormía en su camerino entre la función de tarde y la de noche, tras tomar un somnífero.",
        "A las 17:40 empezó a salir por debajo de su puerta el humo rojo del fuego de escena. A la señorita Boulter ya no hubo forma de despertarla.",
        "Has venido entre bastidores a ver a una conocida, señorita Ada Langton. ¿Quién encendió el fuego?"
      ],
      introVoice: "Huele a azufre, a polvos de maquillaje y a mimosa.",
      clues: {
        c1: { title: "Espejo", text: "El espejo está tiznado. Bajo el tocador, una lata con ceniza de fuego rojo: el humo salía de aquí.", note: "Bajo el tocador quemaron una lata de fuego rojo. En un cuarto cerrado ese humo es mortal." },
        c2: { title: "Telegrama", text: "¡Un telegrama de una aseguradora, dirigido al camerino n.º 7! ¿De quién es ese camerino, querida?", note: "La aseguradora Puerto Seguro comunica al camerino n.º 7: póliza de vida de E. Boulter por 2.000 libras emitida, beneficiario «sobrino L. Pask»." },
        c3: { title: "Vestido", text: "¡El vestido del hada se ha resbalado sobre la rejilla de ventilación! Siempre se le cae todo: ¡hasta los sombreros se le caen de los ganchos!", note: "El vestido del hada tapaba la rejilla de ventilación: el humo no tenía por dónde salir." },
        c4: { title: "Peluca", text: "En el soporte, en vez de la peluca blanca del hada, la peluca pelirroja de una hermanastra. Está a la vista de todos.", note: "En el soporte: la peluca pelirroja de Euforbia, la hermanastra que interpreta Gaskin." },
        c5: { title: "Polvera", text: "La polvera de la señorita Boulter, con una mancha de sombra de ojos verde en la tapa de nácar. Ella nunca usaba sombra.", note: "En la polvera de la señorita Boulter hay una mancha de sombra verde. La tocó alguien maquillado." }
      },
      letter: [
        "TELEGRAMA. TEATRO EL FAROL, CAMERINO 7.",
        "PÓLIZA DE VIDA DE E. BOULTER POR",
        "2000 LIBRAS EMITIDA A FAVOR DEL",
        "SOBRINO L. PASK STOP",
        "PRIMA RECIBIDA. PUERTO SEGURO"
      ],
      decoys: {
        lipstick: "¡Carmín escarlata «Princesa»! ¡La señorita Boulter lo usa desde principios de siglo!",
        bouquet: "Un ramo de mimosa de los pequeños espectadores. La tarjeta está pintada con lápices de colores.",
        mask: "La máscara del Demonio, del número de al lado. Cuelga aquí desde el ensayo general.",
        poster: "Un cartel: «La Cenicienta», función de tarde a las 14:00, de noche a las 19:30."
      },
      suspects: {
        coral: { name: "Señorita Coral Askew", role: "El Príncipe de la pantomima, 26 años", intro: "Rizos dorados, pluma en la gorra, sudor sobre el labio." },
        pask: { name: "Señor Leonard Pask", role: "La hermanastra Griselda, 50 años", intro: "Vestido verde, pendientes hasta los hombros, bigote bajo el maquillaje." },
        gaskin: { name: "Señor Rupert Gaskin", role: "La hermanastra Euforbia, 48 años", intro: "Vestido azul, pendientes, la coronilla calva sin peluca." },
        danby: { name: "Alf Danby", role: "Utilero, 63 años", intro: "Gorra, chaleco, bolsillos llenos de clavos." }
      },
      qs: {
        cor1: { q: "¿Dónde estuvo después de la función de tarde?", a: "En mi camerino, señorita, aprendiéndome las coplas nuevas para la noche; me las dieron hoy mismo." },
        cor2: { q: "¿Quién vio el humo?", a: "Yo, señorita, a las 17:40: por debajo de la puerta salía humo rojo, como en la entrada del Demonio. La puerta no estaba cerrada con llave, y dentro ya no se podía respirar.", v: "17:40, humo por debajo de la puerta.", nt: "La señorita Askew a las 17:40", nx: "A las 17:40 la señorita Askew vio humo bajo la puerta del camerino. La puerta no estaba cerrada con llave." },
        cor3: { q: "¿La señorita Boulter la apreciaba?", a: "Me hizo su Príncipe, señorita, y para la próxima temporada me prometió el hada. Me lo dijo ella: «Las alitas te sentarán bien».", v: "¡El papel del hada en herencia! ¡Dicen que el Príncipe ya se ha probado las alitas!" },
        pas1: { q: "¿Qué tal fue la función de tarde?", a: "De maravilla, señorita: los niños chillaban cuando me quedé atascado en la puerta de la calabaza. Por esos chillidos llevo doce años haciendo de hermanastra fea.", v: "Habla de los niños y la cara se le ablanda bajo el maquillaje." },
        pas2: { q: "¿Dónde estuvo después de la función de tarde?", a: "Descansando, señorita; después de la calabaza las piernas no me sostienen. [[Nada más acabar me fui a la sala de fumadores con Gaskin y allí estuve hasta las seis.]]" },
        pas3: { q: "¿Qué es esta póliza?", a: "Primera noticia, señorita. [[Será otro Pask: en Norfolk hay Pasks a montones.]]" },
        gas1: { q: "¿Se llevaba bien con la señorita Boulter?", a: "Amenazaba con echarnos a los dos al acabar la temporada, señorita. Decía: «Dos hermanastras para una compañía es un lujo».", v: "¡Echar a los dos! ¡Ahí tienes móvil para dos, querida!" },
        gas2: { q: "¿Dónde estuvo después de la función de tarde?", a: "En la sala de fumadores, señorita, solo y sin peluca: alguien me la quitó del gancho hacia las cinco. Pask no se asomó.", v: "La sala de fumadores, solo. Pask no estaba.", nt: "Gaskin en la sala de fumadores", nx: "Después de la función de tarde Gaskin estuvo solo en la sala de fumadores. Pask no entró." },
        gas3: { q: "¿Es suya esta peluca?", a: "Sí, señorita, la pelirroja, para Euforbia. Y mi sombra es azul, la de Pask, verde: lo acordamos para que el público nos distinguiera.", v: "Se toca la coronilla calva y hace una mueca.", nt: "La sombra de las hermanastras", nx: "La sombra de ojos de Gaskin es azul; la de Pask, verde." },
        dan1: { q: "¿Qué hizo después de la función de tarde?", a: "Cambiar el decorado para la noche, señorita: la calabaza, el salón de baile, el reloj en las doce." },
        dan2: { q: "¿Quién entró a ver a la señorita Boulter?", a: "A las 17:10 salió de su camerino una hermanastra, señorita, con peluca y maquillaje completo. Cuál de las dos, no lo sé: son como dos gotas de agua.", v: "17:10, una hermanastra, maquillada.", nt: "El utilero a las 17:10", nx: "A las 17:10 una de las hermanastras, con peluca y maquillaje, salió del camerino de la señorita Boulter." },
        dan3: { q: "¿De dónde salió el fuego rojo?", a: "De mi caja entre bastidores, señorita; no tiene llave, y hoy falta una lata. Y la percha del hada la atornillé yo mismo: de ahí el vestido no se mueve solo.", v: "La percha está atornillada. El vestido no pudo moverse solo." },
        dan4: { q: "¿Lleva mucho en el teatro?", a: "Cuarenta años, señorita, desde las lámparas de gas. Recuerdo a la señorita Boulter de ingenua; entonces hacía de Cenicienta." }
      },
      objections: {
        pas2: { reply: "…Hace doce años que le llevo el té después de cada función de tarde, señorita. Dormía. Dejé la taza y salí de puntillas.", nt: "Pask mintió", nx: "Después de la función de tarde Pask no estuvo en la sala de fumadores: Gaskin estuvo allí solo." },
        pas3: { reply: "Dos mil, señorita. Doce años haciendo de hermanastra por tres libras a la semana, y en primavera me habría echado. Me inscribí como su sobrino: ¿quién lo iba a comprobar?", nt: "La póliza", nx: "Pask aseguró la vida de la señorita Boulter por 2.000 libras haciéndose pasar por su sobrino. Ese es el móvil." }
      },
      wrong: {
        coral: "La señorita Askew estudiaba sus coplas en su camerino y fue la primera en dar la alarma. El papel del hada ya se lo habían prometido; solo tenía que esperar a la primavera.",
        gaskin: "Gaskin estaba en la sala de fumadores sin peluca: se la quitaron para dejarla en el soporte. Y su sombra es azul.",
        danby: "Alf estuvo toda la tarde moviendo decorados. Fue él quien vio salir del camerino a una hermanastra.",
        proof: "El señor Pask se arregla un pendiente: «Gaskin y yo somos como dos gotas de agua, señorita». Demuestra que fue él quien salió del camerino, o a quién beneficiaba la muerte de la señorita Boulter."
      },
      deduce: [
        "Del camerino salió una hermanastra. Pero ¿cuál de las dos?",
        "¿De quién es la sombra que quedó en la polvera?",
        "¿A quién beneficiaba la póliza de vida de la señorita Boulter?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "La función de noche se hizo con la suplente. Para Semana Santa, Puerto Seguro ya había pagado al sobrino",
        p: [
          "Durante doce años Leonard Pask había hecho de hermanastra por una miseria, y en primavera la señorita Boulter pensaba echarlo. Aseguró la vida de ella en dos mil libras haciéndose pasar por su sobrino.",
          "A las 17:05, maquillado y con su propia peluca, con la peluca pelirroja de Gaskin bajo el brazo, entró a ver a la señorita Boulter dormida, encendió bajo el tocador una lata de fuego rojo de la caja del utilero y tapó la rejilla de ventilación con el vestido del hada.",
          "Dejó la peluca en el soporte para que sospecharan de Gaskin. Pero rozó la polvera con los dedos maquillados, y en el nácar quedó una mancha de sombra verde."
        ]
      }
    },
    de: {
      title: "Zwei Schwestern",
      desc: "Zwischen Nachmittags- und Abendvorstellung döste die gute Fee immer in ihrer Garderobe. Diesmal kroch roter Rauch unter ihrer Tür hervor.",
      meta: ["Laterne-Theater, Norwich", "14. Januar 1933", "≈ 5 Minuten"],
      introEyebrow: "Garderobe · 17:40",
      introTitle: "Roter Rauch",
      intro: [
        "Im Januar spielte das Laterne-Theater die Weihnachtspantomime „Aschenputtel“. Miss Esmé Boulter, die gute Fee und Leiterin der Truppe, schlief zwischen Nachmittags- und Abendvorstellung immer in ihrer Garderobe, nach einem Schlafpulver.",
        "Um 17:40 kroch roter Rauch von Bühnenfeuer unter ihrer Tür hervor. Miss Boulter war nicht mehr zu wecken.",
        "Du bist hinter die Bühne gekommen, um eine Bekannte zu besuchen, Miss Ada Langton. Wer hat das Feuer entzündet?"
      ],
      introVoice: "Es riecht nach Schwefel, Puder und Mimosen.",
      clues: {
        c1: { title: "Spiegel", text: "Der Spiegel ist verrußt. Unter dem Schminktisch eine Dose mit Asche von Rotfeuer: Der Rauch kam von hier.", note: "Unter dem Schminktisch wurde eine Dose Rotfeuer abgebrannt. In einem geschlossenen Raum ist dieser Rauch tödlich." },
        c2: { title: "Telegramm", text: "Ein Telegramm von einer Versicherung, adressiert an Garderobe Nr. 7! Wessen Garderobe ist das, Schätzchen?", note: "Die Versicherung Sicherer Hafen teilt Garderobe Nr. 7 mit: Police auf das Leben von E. Boulter über 2000 Pfund ausgestellt, Begünstigter „Neffe L. Pask“." },
        c3: { title: "Kostüm", text: "Das Kleid der Fee ist aufs Lüftungsgitter gerutscht! Ihr fällt ständig alles herunter, sogar die Hüte von den Haken!", note: "Das Kleid der Fee verdeckte das Lüftungsgitter: Der Rauch konnte nicht abziehen." },
        c4: { title: "Perücke", text: "Auf dem Ständer statt der weißen Perücke der Fee die rote Perücke einer hässlichen Schwester. Sie liegt ganz offen da.", note: "Auf dem Ständer: die rote Perücke von Euphorbia, der hässlichen Schwester, die Gaskin spielt." },
        c5: { title: "Puderdose", text: "Miss Boulters Puderdose, auf dem Perlmuttdeckel ein Strich grüner Bühnen-Lidschatten. Sie selbst trug nie Lidschatten.", note: "Auf Miss Boulters Puderdose ist ein Strich grüner Lidschatten. Jemand mit Schminke hat sie berührt." }
      },
      letter: [
        "TELEGRAMM. LATERNE-THEATER, GARDEROBE 7.",
        "POLICE AUF DAS LEBEN VON E. BOULTER ÜBER",
        "2000 PFUND AUSGESTELLT ZUGUNSTEN DES",
        "NEFFEN L. PASK STOP",
        "PRÄMIE ERHALTEN. SICHERER HAFEN"
      ],
      decoys: {
        lipstick: "Scharlachroter Lippenstift „Prinzessin“! Miss Boulter trägt ihn seit der Jahrhundertwende!",
        bouquet: "Ein Mimosenstrauß von den kleinen Zuschauern. Die Karte ist mit Buntstiften gemalt.",
        mask: "Die Dämonenmaske aus der Nachbarnummer. Sie hängt hier seit der Generalprobe.",
        poster: "Ein Plakat: „Aschenputtel“, Nachmittagsvorstellung um 14:00, Abendvorstellung um 19:30."
      },
      suspects: {
        coral: { name: "Miss Coral Askew", role: "Der Prinz der Pantomime, 26", intro: "Goldene Locken, eine Feder am Barett, Schweiß über der Lippe." },
        pask: { name: "Mr Leonard Pask", role: "Hässliche Schwester Griselda, 50", intro: "Grünes Kleid, schulterlange Ohrringe, Schnurrbart unter der Schminke." },
        gaskin: { name: "Mr Rupert Gaskin", role: "Hässliche Schwester Euphorbia, 48", intro: "Blaues Kleid, Ohrringe, kahler Scheitel ohne Perücke." },
        danby: { name: "Alf Danby", role: "Requisiteur, 63", intro: "Mütze, Weste, die Taschen voller Nägel." }
      },
      qs: {
        cor1: { q: "Wo waren Sie nach der Nachmittagsvorstellung?", a: "In meiner Garderobe, Miss, und habe die neuen Couplets für den Abend gelernt; ich habe sie erst heute bekommen." },
        cor2: { q: "Wer hat den Rauch bemerkt?", a: "Ich, Miss, um 17:40: Unter der Tür quoll roter Rauch hervor, wie beim Auftritt des Dämons. Die Tür war nicht abgeschlossen, und drinnen bekam man keine Luft mehr.", v: "17:40, Rauch unter der Tür.", nt: "Miss Askew um 17:40", nx: "Um 17:40 sah Miss Askew Rauch unter der Garderobentür. Die Tür war nicht abgeschlossen." },
        cor3: { q: "Mochte Miss Boulter Sie?", a: "Sie hat mich zu ihrem Prinzen gemacht, Miss, und mir für die nächste Saison die Fee versprochen. Sie sagte selbst: „Flügel werden dir stehen.“", v: "Die Rolle der Fee als Erbe! Angeblich hat der Prinz die Flügel schon anprobiert!" },
        pas1: { q: "Wie lief die Nachmittagsvorstellung?", a: "Prächtig, Miss: Die Kinder kreischten, als ich in der Kürbistür stecken blieb. Wegen dieses Kreischens spiele ich seit zwölf Jahren hässliche Schwestern.", v: "Er spricht von den Kindern, und sein Gesicht wird unter der Schminke weich." },
        pas2: { q: "Wo waren Sie nach der Nachmittagsvorstellung?", a: "Ausgeruht, Miss; nach dem Kürbis tragen mich die Beine nicht mehr. [[Gleich nach der Vorstellung ging ich mit Gaskin ins Rauchzimmer und saß dort bis sechs.]]" },
        pas3: { q: "Was ist das für eine Police?", a: "Davon höre ich zum ersten Mal, Miss. [[Das ist wohl ein anderer Pask: In Norfolk gibt es Pasks wie Sand am Meer.]]" },
        gas1: { q: "Kamen Sie mit Miss Boulter aus?", a: "Sie drohte, uns beide nach der Saison hinauszuwerfen, Miss. Sie sagte: „Zwei Schwestern für eine Truppe sind ein Luxus.“", v: "Beide hinauswerfen! Da hast du gleich ein Motiv für zwei, Schätzchen!" },
        gas2: { q: "Wo waren Sie nach der Nachmittagsvorstellung?", a: "Im Rauchzimmer, Miss, allein und ohne Perücke: Jemand hat sie gegen fünf vom Haken geklaut. Pask hat nicht hereingeschaut.", v: "Rauchzimmer, allein. Pask war nicht da.", nt: "Gaskin im Rauchzimmer", nx: "Nach der Nachmittagsvorstellung saß Gaskin allein im Rauchzimmer. Pask kam nicht herein." },
        gas3: { q: "Ist das Ihre Perücke?", a: "Ja, Miss, die rote, für Euphorbia. Und mein Lidschatten ist blau, Pasks ist grün: So haben wir es abgemacht, damit das Publikum uns unterscheiden kann.", v: "Er fasst sich an den kahlen Scheitel und verzieht das Gesicht.", nt: "Der Lidschatten der Schwestern", nx: "Gaskins Lidschatten ist blau, Pasks grün." },
        dan1: { q: "Was haben Sie nach der Nachmittagsvorstellung gemacht?", a: "Die Kulissen für den Abend umgebaut, Miss: der Kürbis, der Ballsaal, die Uhr auf zwölf." },
        dan2: { q: "Wer war bei Miss Boulter?", a: "Um 17:10 kam eine hässliche Schwester aus ihrer Garderobe, Miss, mit Perücke und voller Schminke. Welche, kann ich nicht sagen: Die gleichen sich wie ein Ei dem anderen.", v: "17:10, eine hässliche Schwester, geschminkt.", nt: "Der Requisiteur um 17:10", nx: "Um 17:10 kam eine der hässlichen Schwestern mit Perücke und Schminke aus Miss Boulters Garderobe." },
        dan3: { q: "Woher kommt das Rotfeuer?", a: "Aus meiner Kiste hinter der Bühne, Miss; sie ist nicht verschlossen, und heute fehlt eine Dose. Und den Kleiderhaken der Fee habe ich selbst an die Wand geschraubt, davon rutscht kein Kleid von allein.", v: "Der Haken ist festgeschraubt. Von selbst hätte sich das Kleid nicht verschoben." },
        dan4: { q: "Sind Sie schon lange am Theater?", a: "Vierzig Jahre, Miss, noch aus der Zeit der Gaslampen. Miss Boulter kenne ich als Naive, damals spielte sie das Aschenputtel." }
      },
      objections: {
        pas2: { reply: "…Seit zwölf Jahren bringe ich ihr nach jeder Nachmittagsvorstellung Tee, Miss. Sie schlief. Ich stellte die Tasse hin und schlich auf Zehenspitzen davon.", nt: "Pask hat gelogen", nx: "Nach der Nachmittagsvorstellung war Pask nicht im Rauchzimmer: Gaskin saß dort allein." },
        pas3: { reply: "Zweitausend, Miss. Zwölf Jahre spiele ich hässliche Schwestern für drei Pfund die Woche, und im Frühjahr hätte sie mich hinausgeworfen. Ich habe mich als ihr Neffe eingetragen: Wer prüft das schon?", nt: "Die Police", nx: "Pask versicherte Miss Boulters Leben über 2000 Pfund und gab sich als ihr Neffe aus. Das ist das Motiv." }
      },
      wrong: {
        coral: "Miss Askew lernte ihre Couplets in der eigenen Garderobe und schlug als Erste Alarm. Die Rolle der Fee war ihr ohnehin versprochen, sie musste nur bis zum Frühjahr warten.",
        gaskin: "Gaskin saß ohne Perücke im Rauchzimmer: Die Perücke wurde gestohlen, um sie auf dem Ständer liegen zu lassen. Und sein Lidschatten ist blau.",
        danby: "Alf hat den ganzen Abend Kulissen geschoben. Er hat die hässliche Schwester aus der Garderobe kommen sehen.",
        proof: "Mr Pask rückt einen Ohrring zurecht: „Gaskin und ich gleichen uns wie ein Ei dem anderen, Miss.“ Beweise, dass gerade er die Garderobe verließ, oder wem Miss Boulters Tod Geld brachte."
      },
      deduce: [
        "Aus der Garderobe kam eine hässliche Schwester. Aber welche der beiden?",
        "Wessen Lidschatten ist auf der Puderdose?",
        "Wem brachte die Police auf Miss Boulters Leben Geld?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Die Abendvorstellung spielte die Zweitbesetzung. Bis Ostern hatte Sicherer Hafen dem Neffen alles ausgezahlt",
        p: [
          "Zwölf Jahre lang hatte Leonard Pask für ein Butterbrot eine hässliche Schwester gespielt, und im Frühjahr wollte Miss Boulter ihn hinauswerfen. Er versicherte ihr Leben über zweitausend Pfund und gab sich dabei als ihr Neffe aus.",
          "Um 17:05 ging er geschminkt und mit eigener Perücke, Gaskins rote Perücke unter dem Arm, zu der schlafenden Miss Boulter, zündete unter dem Schminktisch eine Dose Rotfeuer aus der Requisitenkiste an und verdeckte das Lüftungsgitter mit ihrem Kleid.",
          "Die Perücke ließ er auf dem Ständer liegen, damit der Verdacht auf Gaskin fiel. Aber seine geschminkten Finger streiften die Puderdose, und auf dem Perlmutt blieb ein Strich grüner Lidschatten."
        ]
      }
    },
    pl: {
      title: "Dwie siostry",
      desc: "Między popołudniowym a wieczornym przedstawieniem dobra wróżka zawsze drzemała w swojej garderobie. Tym razem spod jej drzwi popełzł czerwony dym.",
      meta: ["Teatr „Latarnia”, Norwich", "14 stycznia 1933", "≈ 5 minut"],
      introEyebrow: "Garderoba · 17:40",
      introTitle: "Czerwony dym",
      intro: [
        "W styczniu teatr „Latarnia” grał pantomimę „Kopciuszek”. Panna Esmé Boulter, dobra wróżka i szefowa trupy, między popołudniowym a wieczornym przedstawieniem zawsze spała w swojej garderobie, po proszku nasennym.",
        "O 17:40 spod jej drzwi popełzł czerwony dym teatralnego ognia. Panny Boulter nie dało się już dobudzić.",
        "Przyszłaś za kulisy do znajomej, panno Ado Langton. Kto zapalił ogień?"
      ],
      introVoice: "Pachnie siarką, pudrem i mimozą.",
      clues: {
        c1: { title: "Lustro", text: "Lustro okopcone. Pod toaletką puszka z popiołem czerwonego ognia: dym szedł stąd.", note: "Pod toaletką spalono puszkę czerwonego ognia. W zamkniętym pokoju ten dym jest śmiertelny." },
        c2: { title: "Telegram", text: "Telegram z towarzystwa ubezpieczeniowego, adres: garderoba nr 7! Czyja to garderoba, kochana?", note: "Towarzystwo „Cicha Przystań” zawiadamia garderobę nr 7: polisa na życie E. Boulter na 2000 funtów wystawiona, uposażony „bratanek L. Pask”." },
        c3: { title: "Suknia", text: "Suknia wróżki zsunęła się na kratkę wentylacji! Ona ciągle wszystko upuszcza, nawet kapelusze spadają jej z haczyków!", note: "Suknia wróżki zasłoniła kratkę wentylacji: dym nie miał którędy uciec." },
        c4: { title: "Peruka", text: "Na stojaku zamiast siwej peruki wróżki — ruda peruka brzydkiej siostry. Leży na widoku.", note: "Na stojaku: ruda peruka Eufobii, brzydkiej siostry, którą gra Gaskin." },
        c5: { title: "Puderniczka", text: "Puderniczka panny Boulter, na perłowej masie wieczka smuga zielonego scenicznego cienia. Ona sama cieni nie używała.", note: "Na puderniczce panny Boulter jest smuga zielonego cienia. Dotykał jej ktoś w charakteryzacji." }
      },
      letter: [
        "TELEGRAM. TEATR LATARNIA, GARDEROBA 7.",
        "POLISA NA ŻYCIE E. BOULTER NA KWOTĘ",
        "2000 FUNTÓW WYSTAWIONA NA RZECZ",
        "BRATANKA L. PASKA STOP",
        "SKŁADKA OTRZYMANA. CICHA PRZYSTAŃ"
      ],
      decoys: {
        lipstick: "Szkarłatna szminka „Księżniczka”! Panna Boulter maluje się nią od początku wieku!",
        bouquet: "Bukiet mimozy od małych widzów. Kartka narysowana kredkami.",
        mask: "Maska Demona z sąsiedniego numeru. Wisi tu od próby generalnej.",
        poster: "Afisz: „Kopciuszek”, przedstawienie popołudniowe o 14:00, wieczorne o 19:30."
      },
      suspects: {
        coral: { name: "Panna Coral Askew", role: "Królewicz z pantomimy, 26 lat", intro: "Złote loki, pióro przy berecie, pot nad wargą." },
        pask: { name: "Pan Leonard Pask", role: "Brzydka siostra Gryzelda, 50 lat", intro: "Zielona suknia, kolczyki do ramion, wąsy pod charakteryzacją." },
        gaskin: { name: "Pan Rupert Gaskin", role: "Brzydka siostra Eufobia, 48 lat", intro: "Niebieska suknia, kolczyki, łysy czubek głowy bez peruki." },
        danby: { name: "Alf Danby", role: "Rekwizytor, 63 lata", intro: "Kaszkiet, kamizelka, kieszenie pełne gwoździ." }
      },
      qs: {
        cor1: { q: "Gdzie pani była po przedstawieniu popołudniowym?", a: "U siebie w garderobie, panienko, uczyłam się nowych kupletów na wieczór, dostałam je dopiero dziś." },
        cor2: { q: "Kto zauważył dym?", a: "Ja, panienko, o 17:40: spod drzwi szedł czerwony dym, jak przy wejściu Demona. Drzwi nie były zamknięte na klucz, a w środku nie było już czym oddychać.", v: "17:40, dym spod drzwi.", nt: "Panna Askew o 17:40", nx: "O 17:40 panna Askew zobaczyła dym spod drzwi garderoby. Drzwi nie były zamknięte na klucz." },
        cor3: { q: "Czy panna Boulter panią lubiła?", a: "Zrobiła mnie swoim królewiczem, panienko, a na przyszły sezon obiecała mi rolę wróżki. Sama mówiła: „Skrzydełka będą ci pasować”.", v: "Rola wróżki w spadku! Podobno królewicz już przymierzał skrzydełka!" },
        pas1: { q: "Jak poszło przedstawienie popołudniowe?", a: "Wspaniale, panienko: dzieci piszczały, kiedy utknąłem w drzwiczkach dyni. Dla tego pisku od dwunastu lat gram brzydkie siostry.", v: "Mówi o dzieciach i jego twarz łagodnieje pod charakteryzacją." },
        pas2: { q: "Gdzie pan był po przedstawieniu popołudniowym?", a: "Odpoczywałem, panienko; po tej dyni nogi odmawiają posłuszeństwa. [[Zaraz po przedstawieniu poszedłem z Gaskinem do palarni i siedziałem tam do szóstej.]]" },
        pas3: { q: "Co to za polisa?", a: "Pierwsze słyszę, panienko. [[To pewnie jakiś inny Pask: w Norfolku Pasków jest jak mrówek.]]" },
        gas1: { q: "Czy dobrze się panu układało z panną Boulter?", a: "Groziła, że po sezonie wyrzuci nas obu, panienko. Mówiła: „Dwie siostry na jedną trupę to zbytek”.", v: "Wyrzucić obu! Masz tu motyw dla dwóch, kochana!" },
        gas2: { q: "Gdzie pan był po przedstawieniu popołudniowym?", a: "W palarni, panienko, sam i bez peruki: ktoś ściągnął mi ją z wieszaka koło piątej. Pask tam nie zaglądał.", v: "Palarnia, sam. Paska tam nie było.", nt: "Gaskin w palarni", nx: "Po przedstawieniu popołudniowym Gaskin siedział sam w palarni. Pask tam nie wchodził." },
        gas3: { q: "Czy to pańska peruka?", a: "Moja, panienko, ruda, do Eufobii. A cienie mam niebieskie, Pask zielone: tak się umówiliśmy, żeby publiczność nas odróżniała.", v: "Dotyka łysego czubka głowy i krzywi się.", nt: "Cienie sióstr", nx: "Gaskin ma niebieskie cienie, Pask zielone." },
        dan1: { q: "Co pan robił po przedstawieniu popołudniowym?", a: "Zmieniałem dekoracje na wieczór, panienko: dynia, sala balowa, zegar na dwunastą." },
        dan2: { q: "Kto wchodził do panny Boulter?", a: "O 17:10 z jej garderoby wyszła brzydka siostra, panienko, w peruce i pełnej charakteryzacji. Która, nie powiem: są podobne jak dwie krople wody.", v: "17:10, brzydka siostra, w charakteryzacji.", nt: "Rekwizytor o 17:10", nx: "O 17:10 z garderoby panny Boulter wyszła jedna z brzydkich sióstr, w peruce i charakteryzacji." },
        dan3: { q: "Skąd tu czerwony ogień?", a: "Z mojej skrzynki za kulisami, panienko; nie zamyka się, a dziś brakuje jednej puszki. A wieszak wróżki sam przykręcałem do ściany, suknia sama z niego nie zjedzie.", v: "Wieszak jest przykręcony. Suknia sama by się nie przesunęła." },
        dan4: { q: "Długo pan pracuje w teatrze?", a: "Czterdzieści lat, panienko, jeszcze od lamp gazowych. Pannę Boulter pamiętam jako amantkę, grała wtedy Kopciuszka." }
      },
      objections: {
        pas2: { reply: "…Od dwunastu lat noszę jej herbatę po każdym popołudniowym przedstawieniu, panienko. Spała. Postawiłem filiżankę i wyszedłem na palcach.", nt: "Pask skłamał", nx: "Po przedstawieniu popołudniowym Paska nie było w palarni: Gaskin siedział tam sam." },
        pas3: { reply: "Dwa tysiące, panienko. Dwanaście lat gram brzydkie siostry za trzy funty tygodniowo, a wiosną by mnie wyrzuciła. Wpisałem się jako jej bratanek: kto by to sprawdzał?", nt: "Polisa", nx: "Pask ubezpieczył życie panny Boulter na 2000 funtów, podając się za jej bratanka. Oto motyw." }
      },
      wrong: {
        coral: "Panna Askew uczyła się kupletów u siebie i pierwsza podniosła alarm. Rolę wróżki i tak jej obiecano, wystarczyło poczekać do wiosny.",
        gaskin: "Gaskin siedział w palarni bez peruki: zabrano mu ją, żeby zostawić na stojaku. A cienie ma niebieskie.",
        danby: "Alf cały wieczór przestawiał dekoracje. To on widział, jak z garderoby wyszła brzydka siostra.",
        proof: "Pan Pask poprawia kolczyk: „Gaskin i ja jesteśmy jak dwie krople wody, panienko”. Udowodnij, że z garderoby wyszedł właśnie on, albo komu śmierć panny Boulter przynosiła pieniądze."
      },
      deduce: [
        "Z garderoby wyszła brzydka siostra. Ale która z dwóch?",
        "Czyje cienie zostały na puderniczce?",
        "Komu polisa na życie panny Boulter przynosiła pieniądze?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Wieczorne przedstawienie zagrała dublerka. Do Wielkanocy „Cicha Przystań” wypłaciła bratankowi całą sumę",
        p: [
          "Przez dwanaście lat Leonard Pask grał brzydką siostrę za grosze, a wiosną panna Boulter zamierzała go wyrzucić. Ubezpieczył jej życie na dwa tysiące funtów, podając się za jej bratanka.",
          "O 17:05, w charakteryzacji i we własnej peruce, z rudą peruką Gaskina pod pachą, wszedł do śpiącej panny Boulter, zapalił pod toaletką puszkę czerwonego ognia ze skrzynki rekwizytora i zasłonił kratkę wentylacji jej suknią.",
          "Perukę zostawił na stojaku, żeby podejrzenie padło na Gaskina. Ale musnął puderniczkę palcami w charakteryzacji i na perłowej masie została smuga zielonego cienia."
        ]
      }
    }
  }
});
