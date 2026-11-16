window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "053", n: 53, scene: "train", look: "night", searchTime: 80, culprit: "dane",
  clues: {
    c1: { prop: "door", voice: "gossip" },
    c2: { prop: "newspaper", voice: "logic", puzzle: true },
    c3: { prop: "cigcase", voice: "logic" },
    c4: { prop: "gloves", voice: "intuition" },
    c5: { prop: "suitcase", voice: "intuition" },
  },
  decoys: { window: "intuition", lamp: "logic", bottle: "gossip", watch: "logic" },
  suspects: [
    { id: "rhoda", color: "#e7a2b9", look: { hair: "wavy", hairColor: "#2a1a10", outfit: "coat", outfitColor: "#5a2a3a", extras: ["sweat", "hat"], female: true, lips: "#a03040" }, qs: [
        { id: "rho1" },
        { id: "rho2", voice: "gossip" },
        { id: "rho3", needs: "c4", voice: "intuition" },
    ] },
    { id: "tremlett", color: "#d1a94e", look: { hair: "short", hairColor: "#5a4a3a", outfit: "uniform", outfitColor: "#1e2a3a", extras: ["cap", "mustache"] }, qs: [
        { id: "tre1", voice: "intuition" },
        { id: "tre2", needs: "c1", voice: "logic" },
        { id: "tre3" },
    ] },
    { id: "dane", color: "#86b8dc", look: { hair: "wavy", hairColor: "#a07a4a", outfit: "coat", outfitColor: "#3a3a2a", extras: ["scar"] }, qs: [
        { id: "dan1" },
        { id: "dan2", voice: "intuition" },
        { id: "dan3", needs: "c2" },
    ] },
    { id: "bligh", color: "#c7c7c7", look: { hair: "bald", hairColor: "#b0a090", outfit: "suit", outfitColor: "#2a2a2a", extras: ["glasses", "bowtie"] }, qs: [
        { id: "bli1" },
        { id: "bli2", voice: "logic" },
        { id: "bli3" },
        { id: "bli4", voice: "intuition" },
    ] },
  ],
  objections: { dan1: { evidence: ["tre3", "bli2"] }, dan3: { evidence: "c2" } },
  proof: ["tre3", "bli2", "c2", "c5", "obj:dan1", "obj:dan3"],
  text: {
    ru: {
      title: "Поворот у Доулиша",
      desc: "Мистер Хексли каждую ночь курил у наружной двери купе, опустив в ней стекло. На повороте у моря дверь распахнулась.",
      meta: ["Ночной экспресс Лондон — Плимут", "4 февраля 1933", "≈ 5 минут"],
      introEyebrow: "Экспресс · 23:47",
      introTitle: "Дверь на повороте",
      intro: [
        "Ночной экспресс Лондон — Плимут, вагон старого образца: у каждого купе есть своя дверь прямо на насыпь. Мистер Джулиус Хексли с женой ехал к её родителям подписывать бумаги о разводе.",
        "В 23:47, на повороте у Доулиша, наружная дверь его купе распахнулась, и мистер Хексли выпал на насыпь.",
        "Вы едете в соседнем купе, мисс Ада Лэнгтон. Кто трогал эту дверь?"
      ],
      introVoice: "Внизу, в темноте, о дамбу бьётся море.",
      clues: {
        c1: { title: "Дверь", text: "Наружная дверь купе распахнута! На этой линии двери вечно отскакивают на поворотах, дорогуша. Несчастный случай!", note: "Наружная дверь купе распахнулась на повороте у Доулиша в 23:47." },
        c2: { title: "Газета", text: "Частное объявление обведено карандашом. Кто-то требует денег за чужие письма. Подпись: «Дж. Х.»", note: "«Лондонский курьер»: мистер Хексли требовал с Ф. Дейн 50 фунтов за её письма к пятнице. На полях его рукой: «Пусть платит брат»." },
        c3: { title: "Портсигар", text: "Портсигар мистера Хексли открыт. Он курил по ночам у наружной двери, опустив в ней стекло.", note: "Каждую ночь мистер Хексли курил у наружной двери купе, опустив стекло." },
        c4: { title: "Перчатки", text: "Дамские перчатки на полке аккуратно сложены, в пальцах блестят металлические опилки.", note: "На полке в купе мистера Хексли — перчатки миссис Хексли, в них металлические опилки." },
        c5: { title: "Чемодан", text: "В чемодане мистера Хексли пачка писем, перевязанная голубой лентой. Почерк женский, подпись «Ф.».", note: "Мистер Хексли возил с собой чужие письма. Подпись: «Ф.»" }
      },
      letter: [
        "«Лондонский курьер», частные объявления:",
        "«Ф. Дейн (ныне миссис К.). Ваши письма",
        "у меня. Пятьдесят фунтов к пятнице,",
        "иначе их прочтёт ваш муж. Дж. Х.»",
        "На полях карандашом: «Пусть платит брат»."
      ],
      decoys: {
        window: "За окном ночь. Внизу в темноте белеет пена прибоя.",
        lamp: "Ночник горит синим светом.",
        bottle: "Бутылка мадеры почти пустая! Пил один, дорогуша, никого не угощал!",
        watch: "Часы мистера Хексли на столике идут. Он снимал их, когда закуривал."
      },
      suspects: {
        rhoda: { name: "Миссис Рода Хексли", role: "Жена, 34 года", intro: "Шляпка, бордовое пальто, испарина на висках." },
        tremlett: { name: "Сэм Тремлетт", role: "Проводник, 52 года", intro: "Фуражка, усы, фонарь в руке." },
        dane: { name: "Мистер Конрад Дейн", role: "Пассажир из соседнего купе, 35 лет", intro: "Твидовое пальто, шрам на подбородке." },
        bligh: { name: "Мистер Хамфри Блай", role: "Поверенный мистера Хексли, 58 лет", intro: "Лысина, очки, бабочка, портфель с бумагами." }
      },
      qs: {
        rho1: { q: "Вы заходили в купе мужа?", a: "Ни разу за всю дорогу, мисс. Мы едем разводиться, а не мириться." },
        rho2: { q: "Почему вы разводитесь?", a: "Джулиус собирал чужие письма, мисс, как другие собирают марки. Однажды я нашла у него в чемодане целую пачку.", v: "Чужие письма! Ну и увлечение для джентльмена!" },
        rho3: { q: "Это ваши перчатки?", a: "Мои, мисс, но я сняла их ещё в Тонтоне: в вагоне натоплено. Они остались на полке в моём купе.", v: "Она краснеет и прячет руки за спину." },
        tre1: { q: "Давно ездите на этой линии?", a: "Двадцать лет, мисс, от Паддингтона до Плимута. На Доулишском повороте я всегда держусь за поручень.", v: "Он крепче сжимает поручень, вспоминая поворот." },
        tre2: { q: "Как открылась дверь?", a: "Защёлку подпилили, мисс: на полу у двери свежие опилки. Сама эта дверь не открывается, я каждый рейс её проверяю.", v: "Защёлка подпилена. Сама дверь не открылась бы.", nt: "Проводник о двери", nx: "Защёлку наружной двери подпилили. Сама она не открылась бы." },
        tre3: { q: "Кто был в купе мистера Хексли на стоянке в Эксетере?", a: "Мистер Дейн, мисс. Все вышли на перрон, а он стоял на коленях у наружной двери, сказал, что обронил запонку.", nt: "Проводник в Эксетере", nx: "На стоянке в Эксетере мистер Дейн стоял на коленях у наружной двери купе мистера Хексли." },
        dan1: { q: "Что вы делали на стоянке в Эксетере?", a: "Размял ноги, мисс, как все. [[Все десять минут пил чай в буфете на перроне.]]" },
        dan2: { q: "Зачем вы едете в Плимут?", a: "К сестре, мисс, она недавно вышла замуж за моряка. Я ей с двенадцати лет вместо отца.", v: "Он говорит о сестре бережно, как о хрупкой вещи." },
        dan3: { q: "Вы знали мистера Хексли?", a: "Шапочно, мисс, встречались в клубе. [[Ни меня, ни моей семьи он толком не знал.]]" },
        bli1: { q: "Зачем вы едете в Плимут?", a: "Везу бумаги о разводе, мисс: подписывать будут у родителей миссис Хексли." },
        bli2: { q: "Где вы были на стоянке в Эксетере?", a: "В буфете на перроне, мисс, с миссис Хексли, все десять минут пили чай. Мистер Дейн туда не заходил.", v: "Эксетер: буфет, миссис Хексли. Мистера Дейна там не было.", nt: "Мистер Блай в Эксетере", nx: "На стоянке в Эксетере мистер Блай и миссис Хексли пили чай в буфете. Мистер Дейн туда не заходил." },
        bli3: { q: "Мистер Хексли согласился на развод?", a: "Согласился, мисс, за отступные. Он на всё соглашался за отступные." },
        bli4: { q: "Давно вы ведёте его дела?", a: "Пятнадцать лет, мисс, и пятнадцать лет мою руки после каждой встречи.", v: "Он поправляет бабочку и смотрит в тёмное окно." }
      },
      objections: {
        dan1: { reply: "Да, я стоял там на коленях. Запонка закатилась к двери, а в поездах, знаете ли, иногда приходится ползать.", nt: "Мистер Дейн солгал", nx: "В Эксетере он был не в буфете, а у наружной двери купе мистера Хексли." },
        dan3: { reply: "Флора — моя сестра. Она писала глупые письма в девятнадцать лет, а он продавал её молчание по пятьдесят фунтов. Муж-моряк убил бы её этими письмами.", nt: "Сестра", nx: "Мистер Хексли шантажировал сестру мистера Дейна её старыми письмами. Вот мотив." }
      },
      wrong: {
        rhoda: "Миссис Хексли ехала разводиться и в купе мужа не заходила. В Эксетере она пила чай с мистером Блаем, а перчатки остались в её купе.",
        tremlett: "Проводник сам нашёл опилки у двери и видел мистера Дейна у двери. Двадцать лет на линии — ни одной открытой двери.",
        bligh: "Мистер Блай пятнадцать лет брезгливо вёл дела мистера Хексли, но в Эксетере не отходил от миссис Хексли.",
        proof: "Мистер Дейн застёгивает пальто: «Я пил чай, мисс, как все». Докажите, что он был у наружной двери, или зачем ему было молчание мистера Хексли."
      },
      deduce: [
        "Сама дверь не открылась бы. Кто был у неё на стоянке?",
        "Кто на самом деле пил чай в буфете в Эксетере?",
        "Чьи письма возил с собой мистер Хексли?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Миссис Хексли подписала бумаги уже вдовой. Письма с голубой лентой кто-то сжёг в Плимуте",
        p: [
          "Джулиус Хексли собирал чужие письма и торговал молчанием. К пятнице сестра Конрада Дейна должна была заплатить ему пятьдесят фунтов, иначе письма прочёл бы её молодой муж.",
          "Дейн сел в тот же поезд. На стоянке в Эксетере, когда все вышли на перрон, он подпилил защёлку наружной двери в купе Хексли: тот каждую ночь курил у этой двери, опустив стекло.",
          "Опилки он стряхнул в перчатки миссис Хексли и положил их на полку в купе её мужа. Но проводник застал его на коленях у двери, а в буфете Дейна никто не видел."
        ]
      }
    },
    en: {
      title: "The Bend at Dawlish",
      desc: "Every night Mr Hexley smoked by the outer door of his compartment with its window let down. On the bend by the sea, the door swung open.",
      meta: ["The night express, London to Plymouth", "4 February 1933", "≈ 5 minutes"],
      introEyebrow: "Express · 11:47 pm",
      introTitle: "The door on the bend",
      intro: [
        "The night express from London to Plymouth, an old-fashioned coach: every compartment has its own door straight out onto the line. Mr Julius Hexley and his wife were travelling to her parents to sign their divorce papers.",
        "At 11:47, on the bend at Dawlish, the outer door of his compartment swung open, and Mr Hexley fell out onto the embankment.",
        "You're in the next compartment, Miss Ada Langton. Who touched that door?"
      ],
      introVoice: "Down below, in the dark, the sea is pounding the sea wall.",
      clues: {
        c1: { title: "Door", text: "The outer door of the compartment is wide open! On this line the doors are forever flying open on the bends, darling. An accident!", note: "The outer door of the compartment swung open on the bend at Dawlish at 11:47." },
        c2: { title: "Newspaper", text: "A personal notice ringed in pencil. Someone is demanding money for another person's letters. Signed “J. H.”", note: "The London Courier: Mr Hexley demanded £50 from F. Dane for her letters by Friday. In the margin, in his hand: “Let the brother pay.”" },
        c3: { title: "Cigarette case", text: "Mr Hexley's cigarette case lies open. At night he smoked by the outer door with its window let down.", note: "Every night Mr Hexley smoked by the outer door of his compartment, with the window let down." },
        c4: { title: "Gloves", text: "A pair of lady's gloves folded neatly on the rack, metal filings glinting in the fingers.", note: "On the rack in Mr Hexley's compartment: Mrs Hexley's gloves, with metal filings in them." },
        c5: { title: "Suitcase", text: "In Mr Hexley's suitcase, a bundle of letters tied with blue ribbon. A woman's hand, signed “F.”", note: "Mr Hexley carried other people's letters about with him. Signed “F.”" }
      },
      letter: [
        "The London Courier, personal column:",
        "“F. Dane (now Mrs K.). Your letters",
        "are with me. Fifty pounds by Friday,",
        "or your husband shall read them. J. H.”",
        "In the margin, in pencil: “Let the brother pay.”"
      ],
      decoys: {
        window: "Night beyond the window. Below, in the dark, the surf shows white.",
        lamp: "The night light glows blue.",
        bottle: "A bottle of Madeira, nearly empty! Drank alone, darling, never offered anyone a drop!",
        watch: "Mr Hexley's watch on the table is still going. He took it off when he lit up."
      },
      suspects: {
        rhoda: { name: "Mrs Rhoda Hexley", role: "His wife, 34", intro: "A hat, a burgundy coat, sweat at her temples." },
        tremlett: { name: "Sam Tremlett", role: "Guard, 52", intro: "Cap, moustache, a lantern in his hand." },
        dane: { name: "Mr Conrad Dane", role: "Passenger from the next compartment, 35", intro: "Tweed coat, a scar on his chin." },
        bligh: { name: "Mr Humphrey Bligh", role: "Mr Hexley's solicitor, 58", intro: "Bald head, spectacles, a bow tie, a briefcase of papers." }
      },
      qs: {
        rho1: { q: "Did you go into your husband's compartment?", a: "Not once the whole journey, miss. We're going to be divorced, not reconciled." },
        rho2: { q: "Why are you divorcing?", a: "Julius collected other people's letters, miss, the way some men collect stamps. Once I found a whole bundle in his suitcase.", v: "Other people's letters! What a hobby for a gentleman!" },
        rho3: { q: "Are these your gloves?", a: "They are, miss, but I took them off at Taunton: the carriage is overheated. I left them on the rack in my own compartment.", v: "She blushes and hides her hands behind her back." },
        tre1: { q: "Have you worked this line long?", a: "Twenty years, miss, Paddington to Plymouth. On the Dawlish bend I always hold on to the rail.", v: "He grips the rail tighter at the thought of the bend." },
        tre2: { q: "How did the door come open?", a: "The catch was filed through, miss: there are fresh filings on the floor by the door. That door doesn't open by itself; I check it every run.", v: "The catch was filed. The door couldn't have opened by itself.", nt: "The guard on the door", nx: "The catch of the outer door had been filed through. It couldn't have opened by itself." },
        tre3: { q: "Who was in Mr Hexley's compartment during the stop at Exeter?", a: "Mr Dane, miss. Everyone had gone out on the platform, and he was on his knees by the outer door; said he'd dropped a cufflink.", nt: "The guard at Exeter", nx: "During the stop at Exeter Mr Dane was on his knees by the outer door of Mr Hexley's compartment." },
        dan1: { q: "What did you do during the stop at Exeter?", a: "Stretched my legs, miss, like everyone. [[I spent the whole ten minutes drinking tea in the platform buffet.]]" },
        dan2: { q: "Why are you going to Plymouth?", a: "To my sister, miss; she's just married a sailor. I've been a father to her since she was twelve.", v: "He speaks of his sister gently, as of something fragile." },
        dan3: { q: "Did you know Mr Hexley?", a: "Only to nod to, miss, from the club. [[He hardly knew me or my family.]]" },
        bli1: { q: "Why are you going to Plymouth?", a: "I'm carrying the divorce papers, miss: they're to be signed at Mrs Hexley's parents'." },
        bli2: { q: "Where were you during the stop at Exeter?", a: "In the platform buffet, miss, with Mrs Hexley, drinking tea the whole ten minutes. Mr Dane never came in.", v: "Exeter: the buffet, Mrs Hexley. Mr Dane wasn't there.", nt: "Mr Bligh at Exeter", nx: "During the stop at Exeter Mr Bligh and Mrs Hexley drank tea in the buffet. Mr Dane never came in." },
        bli3: { q: "Had Mr Hexley agreed to the divorce?", a: "He had, miss, for a consideration. He agreed to anything for a consideration." },
        bli4: { q: "Have you handled his affairs long?", a: "Fifteen years, miss, and for fifteen years I've washed my hands after every meeting.", v: "He straightens his bow tie and looks out at the dark window." }
      },
      objections: {
        dan1: { reply: "Yes, I was on my knees in there. My cufflink rolled towards the door, and on trains, you know, one does sometimes have to crawl about.", nt: "Mr Dane lied", nx: "At Exeter he wasn't in the buffet but by the outer door of Mr Hexley's compartment." },
        dan3: { reply: "Flora is my sister. She wrote silly letters at nineteen, and he sold her silence at fifty pounds a time. Her sailor husband would have finished her over those letters.", nt: "The sister", nx: "Mr Hexley was blackmailing Mr Dane's sister with her old letters. There's the motive." }
      },
      wrong: {
        rhoda: "Mrs Hexley was on her way to a divorce and never went into her husband's compartment. At Exeter she drank tea with Mr Bligh, and her gloves stayed in her own compartment.",
        tremlett: "The guard found the filings by the door himself and saw Mr Dane by the door. Twenty years on the line and never a door come open.",
        bligh: "For fifteen years Mr Bligh handled Mr Hexley's affairs with distaste, but at Exeter he never left Mrs Hexley's side.",
        proof: "Mr Dane buttons his coat: “I was drinking tea, miss, like everyone.” Prove he was at the outer door, or why he needed Mr Hexley's silence."
      },
      deduce: [
        "The door couldn't have opened by itself. Who was at it during the stop?",
        "Who was really drinking tea in the buffet at Exeter?",
        "Whose letters was Mr Hexley carrying with him?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "Mrs Hexley signed the papers a widow. Someone burnt the letters with the blue ribbon in Plymouth",
        p: [
          "Julius Hexley collected other people's letters and traded in silence. By Friday Conrad Dane's sister was to pay him fifty pounds, or her young husband would read her letters.",
          "Dane took the same train. During the stop at Exeter, when everyone had gone out on the platform, he filed through the catch of the outer door in Hexley's compartment: every night Hexley smoked by that door with the window let down.",
          "He shook the filings into Mrs Hexley's gloves and put them on the rack in her husband's compartment. But the guard caught him on his knees by the door, and nobody saw Dane in the buffet."
        ]
      }
    },
    es: {
      title: "La curva de Dawlish",
      desc: "Cada noche el señor Hexley fumaba junto a la puerta exterior de su compartimento, con el cristal bajado. En la curva junto al mar, la puerta se abrió de golpe.",
      meta: ["Expreso nocturno Londres — Plymouth", "4 de febrero de 1933", "≈ 5 minutos"],
      introEyebrow: "Expreso · 23:47",
      introTitle: "La puerta en la curva",
      intro: [
        "El expreso nocturno de Londres a Plymouth, un vagón de los antiguos: cada compartimento tiene su propia puerta que da directamente a la vía. El señor Julius Hexley y su esposa iban a casa de los padres de ella a firmar los papeles del divorcio.",
        "A las 23:47, en la curva de Dawlish, la puerta exterior de su compartimento se abrió de golpe, y el señor Hexley cayó al terraplén.",
        "Viajas en el compartimento de al lado, señorita Ada Langton. ¿Quién tocó esa puerta?"
      ],
      introVoice: "Abajo, en la oscuridad, el mar golpea el dique.",
      clues: {
        c1: { title: "Puerta", text: "¡La puerta exterior del compartimento está abierta de par en par! En esta línea las puertas siempre saltan en las curvas, querida. ¡Un accidente!", note: "La puerta exterior del compartimento se abrió en la curva de Dawlish a las 23:47." },
        c2: { title: "Periódico", text: "Un anuncio personal rodeado a lápiz. Alguien exige dinero por las cartas de otra persona. Firma: «J. H.»", note: "El Correo de Londres: el señor Hexley exigía a F. Dane 50 libras por sus cartas para el viernes. En el margen, de su puño: «Que pague el hermano»." },
        c3: { title: "Pitillera", text: "La pitillera del señor Hexley está abierta. Por las noches fumaba junto a la puerta exterior, con el cristal bajado.", note: "Cada noche el señor Hexley fumaba junto a la puerta exterior de su compartimento, con el cristal bajado." },
        c4: { title: "Guantes", text: "Unos guantes de señora bien doblados en la rejilla, y en los dedos brillan limaduras de metal.", note: "En la rejilla del compartimento del señor Hexley: los guantes de la señora Hexley, con limaduras de metal." },
        c5: { title: "Maleta", text: "En la maleta del señor Hexley, un fajo de cartas atado con cinta azul. Letra de mujer, firma «F.».", note: "El señor Hexley llevaba consigo cartas ajenas. Firmadas «F.»." }
      },
      letter: [
        "El Correo de Londres, anuncios personales:",
        "«F. Dane (hoy señora K.). Sus cartas",
        "las tengo yo. Cincuenta libras para el viernes,",
        "o las leerá su marido. J. H.»",
        "En el margen, a lápiz: «Que pague el hermano»."
      ],
      decoys: {
        window: "Fuera, la noche. Abajo, en la oscuridad, blanquea la espuma.",
        lamp: "La lamparilla de noche da una luz azul.",
        bottle: "¡Una botella de madeira casi vacía! ¡Bebió solo, querida, sin convidar a nadie!",
        watch: "El reloj del señor Hexley sigue en marcha sobre la mesita. Se lo quitaba al encender un cigarrillo."
      },
      suspects: {
        rhoda: { name: "Señora Rhoda Hexley", role: "La esposa, 34 años", intro: "Sombrero, abrigo burdeos, sudor en las sienes." },
        tremlett: { name: "Sam Tremlett", role: "Revisor, 52 años", intro: "Gorra, bigote, un farol en la mano." },
        dane: { name: "Señor Conrad Dane", role: "Pasajero del compartimento de al lado, 35 años", intro: "Abrigo de tweed, una cicatriz en la barbilla." },
        bligh: { name: "Señor Humphrey Bligh", role: "Abogado del señor Hexley, 58 años", intro: "Calvo, gafas, pajarita, una cartera de papeles." }
      },
      qs: {
        rho1: { q: "¿Entró usted en el compartimento de su marido?", a: "Ni una sola vez en todo el viaje, señorita. Vamos a divorciarnos, no a reconciliarnos." },
        rho2: { q: "¿Por qué se divorcian?", a: "Julius coleccionaba cartas ajenas, señorita, como otros coleccionan sellos. Una vez encontré un fajo entero en su maleta.", v: "¡Cartas ajenas! ¡Vaya afición para un caballero!" },
        rho3: { q: "¿Son suyos estos guantes?", a: "Sí, señorita, pero me los quité ya en Taunton: en el vagón hace mucho calor. Se quedaron en la rejilla de mi compartimento.", v: "Se ruboriza y esconde las manos a la espalda." },
        tre1: { q: "¿Lleva mucho en esta línea?", a: "Veinte años, señorita, de Paddington a Plymouth. En la curva de Dawlish siempre me agarro al pasamanos.", v: "Aprieta más el pasamanos al recordar la curva." },
        tre2: { q: "¿Cómo se abrió la puerta?", a: "Limaron el pestillo, señorita: en el suelo, junto a la puerta, hay limaduras recientes. Esa puerta no se abre sola, la reviso en cada viaje.", v: "El pestillo está limado. La puerta no se habría abierto sola.", nt: "El revisor y la puerta", nx: "Limaron el pestillo de la puerta exterior. No se habría abierto sola." },
        tre3: { q: "¿Quién estaba en el compartimento del señor Hexley durante la parada de Exeter?", a: "El señor Dane, señorita. Todos habían bajado al andén, y él estaba de rodillas junto a la puerta exterior; dijo que se le había caído un gemelo.", nt: "El revisor en Exeter", nx: "Durante la parada de Exeter el señor Dane estaba de rodillas junto a la puerta exterior del compartimento del señor Hexley." },
        dan1: { q: "¿Qué hizo durante la parada de Exeter?", a: "Estirar las piernas, señorita, como todos. [[Los diez minutos enteros estuve tomando té en la cantina del andén.]]" },
        dan2: { q: "¿Por qué va a Plymouth?", a: "A ver a mi hermana, señorita; acaba de casarse con un marino. He sido un padre para ella desde que tenía doce años.", v: "Habla de su hermana con cuidado, como de algo frágil." },
        dan3: { q: "¿Conocía al señor Hexley?", a: "De vista, señorita, del club. [[Ni a mí ni a mi familia nos conocía apenas.]]" },
        bli1: { q: "¿Por qué va a Plymouth?", a: "Llevo los papeles del divorcio, señorita: se firmarán en casa de los padres de la señora Hexley." },
        bli2: { q: "¿Dónde estuvo durante la parada de Exeter?", a: "En la cantina del andén, señorita, con la señora Hexley, tomando té los diez minutos. El señor Dane no entró.", v: "Exeter: la cantina, la señora Hexley. El señor Dane no estaba.", nt: "El señor Bligh en Exeter", nx: "Durante la parada de Exeter el señor Bligh y la señora Hexley tomaron té en la cantina. El señor Dane no entró." },
        bli3: { q: "¿El señor Hexley aceptó el divorcio?", a: "Lo aceptó, señorita, a cambio de una compensación. Lo aceptaba todo a cambio de una compensación." },
        bli4: { q: "¿Lleva mucho con sus asuntos?", a: "Quince años, señorita, y quince años lavándome las manos después de cada reunión.", v: "Se arregla la pajarita y mira la ventanilla oscura." }
      },
      objections: {
        dan1: { reply: "Sí, estuve allí de rodillas. El gemelo rodó hasta la puerta, y en los trenes, ya sabe, a veces hay que andar a gatas.", nt: "El señor Dane mintió", nx: "En Exeter no estaba en la cantina, sino junto a la puerta exterior del compartimento del señor Hexley." },
        dan3: { reply: "Flora es mi hermana. Escribió cartas tontas a los diecinueve, y él vendía su silencio a cincuenta libras cada vez. Su marido marino la habría hundido por esas cartas.", nt: "La hermana", nx: "El señor Hexley chantajeaba a la hermana del señor Dane con sus cartas antiguas. Ese es el móvil." }
      },
      wrong: {
        rhoda: "La señora Hexley iba a divorciarse y no entró en el compartimento de su marido. En Exeter tomó té con el señor Bligh, y sus guantes se quedaron en su compartimento.",
        tremlett: "El revisor encontró él mismo las limaduras junto a la puerta y vio al señor Dane junto a la puerta. Veinte años en la línea y ni una puerta abierta.",
        bligh: "Durante quince años el señor Bligh llevó con asco los asuntos del señor Hexley, pero en Exeter no se separó de la señora Hexley.",
        proof: "El señor Dane se abotona el abrigo: «Tomaba té, señorita, como todos». Demuestra que estuvo junto a la puerta exterior, o para qué necesitaba el silencio del señor Hexley."
      },
      deduce: [
        "La puerta no se habría abierto sola. ¿Quién estuvo junto a ella durante la parada?",
        "¿Quién tomaba té de verdad en la cantina de Exeter?",
        "¿De quién eran las cartas que llevaba el señor Hexley?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "La señora Hexley firmó los papeles ya viuda. Alguien quemó en Plymouth las cartas de la cinta azul",
        p: [
          "Julius Hexley coleccionaba cartas ajenas y comerciaba con el silencio. Para el viernes, la hermana de Conrad Dane debía pagarle cincuenta libras, o su joven marido leería sus cartas.",
          "Dane tomó el mismo tren. En la parada de Exeter, cuando todos bajaron al andén, limó el pestillo de la puerta exterior del compartimento de Hexley: cada noche Hexley fumaba junto a esa puerta con el cristal bajado.",
          "Sacudió las limaduras en los guantes de la señora Hexley y los dejó en la rejilla del compartimento de su marido. Pero el revisor lo sorprendió de rodillas junto a la puerta, y en la cantina nadie vio a Dane."
        ]
      }
    },
    de: {
      title: "Die Kurve bei Dawlish",
      desc: "Jede Nacht rauchte Mr Hexley an der Außentür seines Abteils, das Fenster heruntergelassen. In der Kurve am Meer sprang die Tür auf.",
      meta: ["Nachtexpress London — Plymouth", "4. Februar 1933", "≈ 5 Minuten"],
      introEyebrow: "Express · 23:47",
      introTitle: "Die Tür in der Kurve",
      intro: [
        "Der Nachtexpress von London nach Plymouth, ein Wagen alter Bauart: Jedes Abteil hat eine eigene Tür direkt auf die Strecke. Mr Julius Hexley fuhr mit seiner Frau zu ihren Eltern, um die Scheidungspapiere zu unterschreiben.",
        "Um 23:47, in der Kurve bei Dawlish, sprang die Außentür seines Abteils auf, und Mr Hexley stürzte auf den Bahndamm.",
        "Du fährst im Nachbarabteil, Miss Ada Langton. Wer hat diese Tür angefasst?"
      ],
      introVoice: "Unten in der Dunkelheit schlägt das Meer gegen die Ufermauer.",
      clues: {
        c1: { title: "Tür", text: "Die Außentür des Abteils steht sperrangelweit offen! Auf dieser Strecke springen die Türen in den Kurven ständig auf, Schätzchen. Ein Unfall!", note: "Die Außentür des Abteils sprang um 23:47 in der Kurve bei Dawlish auf." },
        c2: { title: "Zeitung", text: "Eine Privatanzeige, mit Bleistift eingekreist. Jemand verlangt Geld für fremde Briefe. Unterschrift: „J. H.“", note: "Londoner Kurier: Mr Hexley verlangte von F. Dane bis Freitag 50 Pfund für ihre Briefe. Am Rand, in seiner Hand: „Soll der Bruder zahlen.“" },
        c3: { title: "Zigarettenetui", text: "Mr Hexleys Zigarettenetui liegt offen. Nachts rauchte er an der Außentür, das Fenster heruntergelassen.", note: "Jede Nacht rauchte Mr Hexley an der Außentür seines Abteils, das Fenster heruntergelassen." },
        c4: { title: "Handschuhe", text: "Damenhandschuhe, ordentlich gefaltet im Gepäcknetz, in den Fingern glitzern Metallspäne.", note: "Im Gepäcknetz in Mr Hexleys Abteil: Mrs Hexleys Handschuhe mit Metallspänen darin." },
        c5: { title: "Koffer", text: "In Mr Hexleys Koffer ein Bündel Briefe mit blauem Band. Frauenhandschrift, Unterschrift „F.“", note: "Mr Hexley trug fremde Briefe mit sich herum. Unterschrift: „F.“" }
      },
      letter: [
        "Londoner Kurier, Privatanzeigen:",
        "„F. Dane (jetzt Mrs K.). Ihre Briefe",
        "sind bei mir. Fünfzig Pfund bis Freitag,",
        "sonst liest sie Ihr Mann. J. H.“",
        "Am Rand mit Bleistift: „Soll der Bruder zahlen.“"
      ],
      decoys: {
        window: "Draußen Nacht. Unten in der Dunkelheit leuchtet weiß die Brandung.",
        lamp: "Das Nachtlicht leuchtet blau.",
        bottle: "Eine Flasche Madeira, fast leer! Allein getrunken, Schätzchen, keinem was angeboten!",
        watch: "Mr Hexleys Uhr auf dem Tischchen geht noch. Er nahm sie ab, wenn er sich eine anzündete."
      },
      suspects: {
        rhoda: { name: "Mrs Rhoda Hexley", role: "Ehefrau, 34", intro: "Hut, weinroter Mantel, Schweiß an den Schläfen." },
        tremlett: { name: "Sam Tremlett", role: "Schaffner, 52", intro: "Mütze, Schnurrbart, eine Laterne in der Hand." },
        dane: { name: "Mr Conrad Dane", role: "Fahrgast aus dem Nachbarabteil, 35", intro: "Tweedmantel, eine Narbe am Kinn." },
        bligh: { name: "Mr Humphrey Bligh", role: "Mr Hexleys Anwalt, 58", intro: "Glatze, Brille, Fliege, eine Aktentasche voller Papiere." }
      },
      qs: {
        rho1: { q: "Waren Sie im Abteil Ihres Mannes?", a: "Kein einziges Mal auf der ganzen Fahrt, Miss. Wir lassen uns scheiden, wir versöhnen uns nicht." },
        rho2: { q: "Warum lassen Sie sich scheiden?", a: "Julius sammelte fremde Briefe, Miss, wie andere Briefmarken sammeln. Einmal fand ich in seinem Koffer ein ganzes Bündel.", v: "Fremde Briefe! Was für ein Steckenpferd für einen Gentleman!" },
        rho3: { q: "Sind das Ihre Handschuhe?", a: "Ja, Miss, aber ich habe sie schon in Taunton ausgezogen: Im Wagen ist es überheizt. Sie blieben im Gepäcknetz in meinem eigenen Abteil.", v: "Sie errötet und versteckt die Hände hinter dem Rücken." },
        tre1: { q: "Fahren Sie schon lange auf dieser Strecke?", a: "Zwanzig Jahre, Miss, von Paddington bis Plymouth. In der Kurve bei Dawlish halte ich mich immer am Griff fest.", v: "Bei dem Gedanken an die Kurve packt er den Griff fester." },
        tre2: { q: "Wie ist die Tür aufgegangen?", a: "Der Riegel wurde durchgefeilt, Miss: Am Boden neben der Tür liegen frische Späne. Diese Tür geht nicht von allein auf, ich prüfe sie auf jeder Fahrt.", v: "Der Riegel ist durchgefeilt. Von allein wäre die Tür nicht aufgegangen.", nt: "Der Schaffner und die Tür", nx: "Der Riegel der Außentür wurde durchgefeilt. Von allein wäre sie nicht aufgegangen." },
        tre3: { q: "Wer war beim Halt in Exeter in Mr Hexleys Abteil?", a: "Mr Dane, Miss. Alle waren auf dem Bahnsteig, und er kniete an der Außentür; sagte, er habe einen Manschettenknopf verloren.", nt: "Der Schaffner in Exeter", nx: "Beim Halt in Exeter kniete Mr Dane an der Außentür von Mr Hexleys Abteil." },
        dan1: { q: "Was haben Sie beim Halt in Exeter getan?", a: "Mir die Beine vertreten, Miss, wie alle. [[Die ganzen zehn Minuten habe ich im Bahnsteigbüfett Tee getrunken.]]" },
        dan2: { q: "Warum fahren Sie nach Plymouth?", a: "Zu meiner Schwester, Miss, sie hat gerade einen Seemann geheiratet. Seit sie zwölf war, bin ich ihr wie ein Vater.", v: "Er spricht von seiner Schwester behutsam, wie von etwas Zerbrechlichem." },
        dan3: { q: "Kannten Sie Mr Hexley?", a: "Vom Sehen, Miss, aus dem Klub. [[Mich und meine Familie kannte er kaum.]]" },
        bli1: { q: "Warum fahren Sie nach Plymouth?", a: "Ich bringe die Scheidungspapiere, Miss: Unterschrieben wird bei Mrs Hexleys Eltern." },
        bli2: { q: "Wo waren Sie beim Halt in Exeter?", a: "Im Bahnsteigbüfett, Miss, mit Mrs Hexley, die ganzen zehn Minuten beim Tee. Mr Dane kam nicht herein.", v: "Exeter: Büfett, Mrs Hexley. Mr Dane war nicht dort.", nt: "Mr Bligh in Exeter", nx: "Beim Halt in Exeter tranken Mr Bligh und Mrs Hexley im Büfett Tee. Mr Dane kam nicht herein." },
        bli3: { q: "War Mr Hexley mit der Scheidung einverstanden?", a: "Ja, Miss, gegen eine Abfindung. Gegen eine Abfindung war er mit allem einverstanden." },
        bli4: { q: "Führen Sie schon lange seine Geschäfte?", a: "Fünfzehn Jahre, Miss, und fünfzehn Jahre wasche ich mir nach jeder Besprechung die Hände.", v: "Er rückt seine Fliege zurecht und blickt ins dunkle Fenster." }
      },
      objections: {
        dan1: { reply: "Ja, ich war dort auf den Knien. Der Manschettenknopf rollte zur Tür, und im Zug muss man eben manchmal herumkriechen.", nt: "Mr Dane hat gelogen", nx: "In Exeter war er nicht im Büfett, sondern an der Außentür von Mr Hexleys Abteil." },
        dan3: { reply: "Flora ist meine Schwester. Sie hat mit neunzehn dumme Briefe geschrieben, und er verkaufte ihr Schweigen zu fünfzig Pfund das Stück. Ihr Seemann hätte sie wegen dieser Briefe verstoßen.", nt: "Die Schwester", nx: "Mr Hexley erpresste Mr Danes Schwester mit ihren alten Briefen. Das ist das Motiv." }
      },
      wrong: {
        rhoda: "Mrs Hexley war auf dem Weg zur Scheidung und betrat das Abteil ihres Mannes nicht. In Exeter trank sie mit Mr Bligh Tee, und ihre Handschuhe blieben in ihrem eigenen Abteil.",
        tremlett: "Der Schaffner hat die Späne an der Tür selbst gefunden und Mr Dane an der Tür gesehen. Zwanzig Jahre auf der Strecke und nie eine offene Tür.",
        bligh: "Fünfzehn Jahre führte Mr Bligh Mr Hexleys Geschäfte mit Widerwillen, aber in Exeter wich er Mrs Hexley nicht von der Seite.",
        proof: "Mr Dane knöpft seinen Mantel zu: „Ich habe Tee getrunken, Miss, wie alle.“ Beweise, dass er an der Außentür war, oder wozu er Mr Hexleys Schweigen brauchte."
      },
      deduce: [
        "Von allein wäre die Tür nicht aufgegangen. Wer war beim Halt an ihr?",
        "Wer hat in Exeter wirklich im Büfett Tee getrunken?",
        "Wessen Briefe trug Mr Hexley mit sich herum?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Mrs Hexley unterschrieb die Papiere schon als Witwe. Die Briefe mit dem blauen Band verbrannte jemand in Plymouth",
        p: [
          "Julius Hexley sammelte fremde Briefe und handelte mit Schweigen. Bis Freitag sollte Conrad Danes Schwester ihm fünfzig Pfund zahlen, sonst würde ihr junger Mann ihre Briefe lesen.",
          "Dane nahm denselben Zug. Beim Halt in Exeter, als alle auf dem Bahnsteig waren, feilte er den Riegel der Außentür in Hexleys Abteil durch: Jede Nacht rauchte Hexley an dieser Tür mit heruntergelassenem Fenster.",
          "Die Späne schüttelte er in Mrs Hexleys Handschuhe und legte sie ins Gepäcknetz im Abteil ihres Mannes. Aber der Schaffner ertappte ihn kniend an der Tür, und im Büfett hatte Dane niemand gesehen."
        ]
      }
    },
    pl: {
      title: "Zakręt pod Dawlish",
      desc: "Co noc pan Hexley palił przy zewnętrznych drzwiach przedziału, z opuszczoną szybą. Na zakręcie nad morzem drzwi się otworzyły.",
      meta: ["Nocny ekspres Londyn — Plymouth", "4 lutego 1933", "≈ 5 minut"],
      introEyebrow: "Ekspres · 23:47",
      introTitle: "Drzwi na zakręcie",
      intro: [
        "Nocny ekspres z Londynu do Plymouth, wagon starego typu: każdy przedział ma własne drzwi prosto na tor. Pan Julius Hexley jechał z żoną do jej rodziców podpisać papiery rozwodowe.",
        "O 23:47, na zakręcie pod Dawlish, zewnętrzne drzwi jego przedziału otworzyły się i pan Hexley wypadł na nasyp.",
        "Jedziesz w sąsiednim przedziale, panno Ado Langton. Kto ruszał te drzwi?"
      ],
      introVoice: "W dole, w ciemności, morze bije o falochron.",
      clues: {
        c1: { title: "Drzwi", text: "Zewnętrzne drzwi przedziału otwarte na oścież! Na tej linii drzwi ciągle odskakują na zakrętach, kochana. Wypadek!", note: "Zewnętrzne drzwi przedziału otworzyły się na zakręcie pod Dawlish o 23:47." },
        c2: { title: "Gazeta", text: "Ogłoszenie drobne obwiedzione ołówkiem. Ktoś żąda pieniędzy za cudze listy. Podpis: „J. H.”", note: "„Kurier Londyński”: pan Hexley żądał od F. Dane 50 funtów za jej listy do piątku. Na marginesie jego ręką: „Niech płaci brat”." },
        c3: { title: "Papierośnica", text: "Papierośnica pana Hexleya otwarta. Nocami palił przy zewnętrznych drzwiach, opuściwszy w nich szybę.", note: "Co noc pan Hexley palił przy zewnętrznych drzwiach przedziału, z opuszczoną szybą." },
        c4: { title: "Rękawiczki", text: "Damskie rękawiczki starannie złożone na półce, w palcach połyskują metalowe opiłki.", note: "Na półce w przedziale pana Hexleya: rękawiczki pani Hexley, a w nich metalowe opiłki." },
        c5: { title: "Walizka", text: "W walizce pana Hexleya plik listów przewiązany niebieską wstążką. Kobiece pismo, podpis „F.”.", note: "Pan Hexley woził ze sobą cudze listy. Podpis: „F.”." }
      },
      letter: [
        "„Kurier Londyński”, ogłoszenia drobne:",
        "„F. Dane (obecnie pani K.). Pani listy",
        "są u mnie. Pięćdziesiąt funtów do piątku,",
        "inaczej przeczyta je pani mąż. J. H.”",
        "Na marginesie ołówkiem: „Niech płaci brat”."
      ],
      decoys: {
        window: "Za oknem noc. W dole, w ciemności, bieleje piana przyboju.",
        lamp: "Lampka nocna świeci na niebiesko.",
        bottle: "Butelka madery prawie pusta! Pił sam, kochana, nikogo nie poczęstował!",
        watch: "Zegarek pana Hexleya na stoliku chodzi. Zdejmował go, kiedy zapalał papierosa."
      },
      suspects: {
        rhoda: { name: "Pani Rhoda Hexley", role: "Żona, 34 lata", intro: "Kapelusz, bordowy płaszcz, pot na skroniach." },
        tremlett: { name: "Sam Tremlett", role: "Konduktor, 52 lata", intro: "Czapka, wąsy, latarka w ręku." },
        dane: { name: "Pan Conrad Dane", role: "Pasażer z sąsiedniego przedziału, 35 lat", intro: "Tweedowy płaszcz, blizna na podbródku." },
        bligh: { name: "Pan Humphrey Bligh", role: "Adwokat pana Hexleya, 58 lat", intro: "Łysina, okulary, muszka, teczka z papierami." }
      },
      qs: {
        rho1: { q: "Czy wchodziła pani do przedziału męża?", a: "Ani razu przez całą drogę, panienko. Jedziemy się rozwieść, a nie godzić." },
        rho2: { q: "Dlaczego się rozwodzicie?", a: "Julius zbierał cudze listy, panienko, tak jak inni zbierają znaczki. Raz znalazłam w jego walizce cały plik.", v: "Cudze listy! Ale hobby jak na dżentelmena!" },
        rho3: { q: "Czy to pani rękawiczki?", a: "Moje, panienko, ale zdjęłam je już w Taunton: w wagonie jest przegrzane. Zostały na półce w moim przedziale.", v: "Rumieni się i chowa ręce za plecy." },
        tre1: { q: "Długo pan jeździ na tej linii?", a: "Dwadzieścia lat, panienko, od Paddington do Plymouth. Na zakręcie pod Dawlish zawsze trzymam się poręczy.", v: "Na wspomnienie zakrętu mocniej ściska poręcz." },
        tre2: { q: "Jak otworzyły się drzwi?", a: "Zasuwkę ktoś przepiłował, panienko: na podłodze przy drzwiach leżą świeże opiłki. Te drzwi same się nie otwierają, sprawdzam je przy każdym kursie.", v: "Zasuwka przepiłowana. Same drzwi by się nie otworzyły.", nt: "Konduktor o drzwiach", nx: "Zasuwkę zewnętrznych drzwi przepiłowano. Same by się nie otworzyły." },
        tre3: { q: "Kto był w przedziale pana Hexleya na postoju w Exeter?", a: "Pan Dane, panienko. Wszyscy wyszli na peron, a on klęczał przy zewnętrznych drzwiach; mówił, że zgubił spinkę do mankietu.", nt: "Konduktor w Exeter", nx: "Na postoju w Exeter pan Dane klęczał przy zewnętrznych drzwiach przedziału pana Hexleya." },
        dan1: { q: "Co pan robił na postoju w Exeter?", a: "Rozprostowałem nogi, panienko, jak wszyscy. [[Przez całe dziesięć minut piłem herbatę w bufecie na peronie.]]" },
        dan2: { q: "Po co jedzie pan do Plymouth?", a: "Do siostry, panienko, niedawno wyszła za marynarza. Od jej dwunastego roku jestem jej jak ojciec.", v: "Mówi o siostrze ostrożnie, jak o czymś kruchym." },
        dan3: { q: "Czy znał pan pana Hexleya?", a: "Z widzenia, panienko, z klubu. [[Ani mnie, ani mojej rodziny właściwie nie znał.]]" },
        bli1: { q: "Po co jedzie pan do Plymouth?", a: "Wiozę papiery rozwodowe, panienko: będą podpisywane u rodziców pani Hexley." },
        bli2: { q: "Gdzie pan był na postoju w Exeter?", a: "W bufecie na peronie, panienko, z panią Hexley, przez całe dziesięć minut piliśmy herbatę. Pan Dane tam nie zaglądał.", v: "Exeter: bufet, pani Hexley. Pana Dane'a tam nie było.", nt: "Pan Bligh w Exeter", nx: "Na postoju w Exeter pan Bligh i pani Hexley pili herbatę w bufecie. Pan Dane tam nie wchodził." },
        bli3: { q: "Czy pan Hexley zgodził się na rozwód?", a: "Zgodził się, panienko, za odstępne. Na wszystko zgadzał się za odstępne." },
        bli4: { q: "Od dawna prowadzi pan jego sprawy?", a: "Piętnaście lat, panienko, i piętnaście lat myję ręce po każdym spotkaniu.", v: "Poprawia muszkę i patrzy w ciemne okno." }
      },
      objections: {
        dan1: { reply: "Tak, klęczałem tam. Spinka potoczyła się pod drzwi, a w pociągu, wie pani, czasem trzeba się poczołgać.", nt: "Pan Dane skłamał", nx: "W Exeter nie był w bufecie, tylko przy zewnętrznych drzwiach przedziału pana Hexleya." },
        dan3: { reply: "Flora to moja siostra. W wieku dziewiętnastu lat pisała głupie listy, a on sprzedawał jej milczenie po pięćdziesiąt funtów. Jej mąż marynarz by ją przez te listy odtrącił.", nt: "Siostra", nx: "Pan Hexley szantażował siostrę pana Dane'a jej starymi listami. Oto motyw." }
      },
      wrong: {
        rhoda: "Pani Hexley jechała się rozwieść i nie wchodziła do przedziału męża. W Exeter piła herbatę z panem Blighem, a rękawiczki zostały w jej przedziale.",
        tremlett: "Konduktor sam znalazł opiłki przy drzwiach i widział pana Dane'a przy drzwiach. Dwadzieścia lat na linii i ani jednych otwartych drzwi.",
        bligh: "Pan Bligh przez piętnaście lat z obrzydzeniem prowadził sprawy pana Hexleya, ale w Exeter nie odstępował pani Hexley.",
        proof: "Pan Dane zapina płaszcz: „Piłem herbatę, panienko, jak wszyscy”. Udowodnij, że był przy zewnętrznych drzwiach, albo po co mu było milczenie pana Hexleya."
      },
      deduce: [
        "Same drzwi by się nie otworzyły. Kto był przy nich na postoju?",
        "Kto naprawdę pił herbatę w bufecie w Exeter?",
        "Czyje listy woził ze sobą pan Hexley?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Pani Hexley podpisała papiery już jako wdowa. Listy z niebieską wstążką ktoś spalił w Plymouth",
        p: [
          "Julius Hexley zbierał cudze listy i handlował milczeniem. Do piątku siostra Conrada Dane'a miała mu zapłacić pięćdziesiąt funtów, inaczej jej młody mąż przeczytałby jej listy.",
          "Dane wsiadł do tego samego pociągu. Na postoju w Exeter, kiedy wszyscy wyszli na peron, przepiłował zasuwkę zewnętrznych drzwi w przedziale Hexleya: co noc Hexley palił przy tych drzwiach z opuszczoną szybą.",
          "Opiłki wsypał do rękawiczek pani Hexley i położył je na półce w przedziale jej męża. Ale konduktor przyłapał go na klęczkach przy drzwiach, a w bufecie nikt Dane'a nie widział."
        ]
      }
    }
  }
});
