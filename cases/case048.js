window.DELO_CASES = window.DELO_CASES || [];
window.DELO_CASES.push({
  id: "048", n: 48, scene: "parlour", searchTime: 85, culprit: "thurstone",
  clues: {
    c1: { prop: "clock", voice: "logic" },
    c2: { prop: "newspaper", voice: "gossip", puzzle: true },
    c3: { prop: "window", voice: "intuition" },
    c4: { prop: "painting", voice: "logic" },
    c5: { prop: "cushion", voice: "gossip" },
  },
  decoys: { bottle: "logic", vase: "intuition", lamp: "intuition", pipe: "logic" },
  suspects: [
    { id: "tom", color: "#e0956a", look: { hair: "curly", hairColor: "#c08040", outfit: "vest", outfitColor: "#5a4a3a", extras: ["cap"] }, qs: [
        { id: "tom1", voice: "gossip" },
        { id: "tom2", needs: "c3", voice: "logic" },
        { id: "tom3" },
    ] },
    { id: "thurstone", color: "#c7c7c7", look: { hair: "grey-short", hairColor: "#b8b8b8", outfit: "coat", outfitColor: "#3a3a2a", extras: ["hat"], female: true }, qs: [
        { id: "thu1", voice: "logic" },
        { id: "thu2", needs: "c1" },
        { id: "thu3", needs: "c4" },
    ] },
    { id: "cynthia", color: "#e7a2b9", look: { hair: "bob", hairColor: "#2a1a10", outfit: "dress", outfitColor: "#7a2a3a", extras: ["earrings"], female: true, lips: "#b03040" }, qs: [
        { id: "cyn1", voice: "gossip" },
        { id: "cyn2", needs: "c1", voice: "logic" },
        { id: "cyn3", needs: "c3", voice: "intuition" },
    ] },
    { id: "fawley", color: "#86b8dc", look: { hair: "slick", hairColor: "#5a4030", outfit: "suit", outfitColor: "#2a3040", extras: ["glasses", "sweat"] }, qs: [
        { id: "faw1" },
        { id: "faw2", voice: "logic" },
        { id: "faw3" },
        { id: "faw4", voice: "intuition" },
    ] },
  ],
  objections: { thu2: { evidence: "cyn2" }, thu3: { evidence: "c4" } },
  proof: ["cyn2", "c2", "obj:thu2", "obj:thu3"],
  text: {
    ru: {
      title: "Долина под луной",
      desc: "Хозяин дома собирался затопить долину ради водохранилища. В субботу он объявил об этом гостям, а к половине одиннадцатого был мёртв.",
      meta: ["Брэкенфорд-холл, Дербишир", "8 октября 1932", "≈ 5 минут"],
      introEyebrow: "Гостиная · 22:30",
      introTitle: "Часы бьют половину",
      intro: [
        "Сэр Монтегю Радд, председатель водной компании, купил старый дом в долине Лоумир. На субботнем приёме он объявил: к 1935 году долина уйдёт под воду.",
        "Гости разъехались в девять. В 22:30, когда часы пробили половину, сэра Монтегю нашли у журнального столика с ударом по затылку.",
        "Вы ночуете в доме, мисс Ада Лэнгтон. Кто остался с ним в гостиной?"
      ],
      introVoice: "Маятник качается, будто ничего не случилось.",
      clues: {
        c1: { title: "Часы", text: "В футляре часов одна латунная гиря блестит, будто её только что отмыли, вторая в пыли. Тяжёлая, фунтов десять.", note: "Одну гирю часов вынимали и отмыли. Это оружие." },
        c2: { title: "Газета", text: "Газета на диване, вся в пометках! Сэр Монтегю что-то писал на полях про какую-то вдову!", note: "«Дербиширский курьер»: долину Лоумир затопят к 1935 году. На полях рукой сэра Монтегю: «Вдова Тёрнстон не берёт денег. Упрямая старуха»." },
        c3: { title: "Окно", text: "Окно закрыто, но шпингалет поднят. На подоконнике комок мокрой глины, будто кто-то пришёл из сада.", note: "Шпингалет окна поднят. На подоконнике мокрая глина." },
        c4: { title: "Картина", text: "Пейзаж над буфетом: долина и холмы под луной. В углу подпись: «Дж. Тёрнстон. Лоумир, 1911».", note: "Картину над буфетом написал Дж. Тёрнстон в Лоумире в 1911 году. Сэр Монтегю купил её вместе с домом." },
        c5: { title: "Подушка", text: "Подушка на диване влажная с одного бока! Ею что-то вытирали, дорогуша!", note: "Вышитой подушкой вытирали что-то мокрое." }
      },
      letter: [
        "«Дербиширский курьер», 6 октября:",
        "«К 1935 году долина Лоумир",
        "уйдёт под воду водохранилища.",
        "Фермы выкупает компания сэра М. Радда».",
        "На полях: «Вдова Тёрнстон не берёт денег. Упрямая старуха»."
      ],
      decoys: {
        bottle: "Графин на буфете, портвейн не тронут.",
        vase: "Осенние астры в вазе. Пахнут сыростью и садом.",
        lamp: "Торшер горит у окна. Его свет падает на диван, а часы стоят в тени.",
        pipe: "Трубка в пепельнице давно остыла: сэр Монтегю курил её ещё до приёма."
      },
      suspects: {
        tom: { name: "Том Хогг", role: "Работник с фермы в Лоумире, 20 лет", intro: "Кепка, рыжие кудри, кулаки в карманах." },
        thurstone: { name: "Миссис Марта Тёрнстон", role: "Вдова фермера из Лоумира, 62 года", intro: "Шляпка, старое пальто, натруженные руки." },
        cynthia: { name: "Мисс Синтия Радд", role: "Дочь сэра Монтегю, 24 года", intro: "Тёмное каре, серьги, гранатовое платье." },
        fawley: { name: "Мистер Гилберт Фоули", role: "Инженер компании, 35 лет", intro: "Очки, гладкий пробор, испарина на лбу." }
      },
      qs: {
        tom1: { q: "Где вы были вечером?", a: "С четверти одиннадцатого в «Плуге», мисс, до самого закрытия, весь трактир видел. В этот дом я ногой не ступал.", v: "Грозился на приёме утопить сэра Монтегю в его же водохранилище! При всех!" },
        tom2: { q: "Это глина с ваших сапог?", a: "Глина, мисс? Неделю ни капли дождя, в саду земля как камень. Мокрую глину тут возьмёшь разве что из кадки с пальмой в холле.", v: "Неделя без дождя. Глина на подоконнике мокрая.", nt: "Глина", nx: "Неделю не было дождя, земля в саду сухая. Мокрая глина на подоконнике не из сада." },
        tom3: { q: "Что вы сказали сэру Монтегю на приёме?", a: "Что моя мать родилась в Лоумире и умрёт там же, а его плотина пусть катится к чёрту." },
        thu1: { q: "Почему вы остались ночевать?", a: "Кобыла охромела на обратной дороге, мисс, а до фермы шесть миль. Сэр Монтегю любезно велел постелить мне наверху.", v: "Ночует в доме из-за хромой лошади." },
        thu2: { q: "Кто подходил к часам?", a: "Часы в этом доме вечно отстают, мисс. [[Около десяти футляр открывал мистер Фоули, я сама видела.]]" },
        thu3: { q: "Вы знаете эту картину?", a: "Красивая. [[Только мой муж был фермер и кисти в руках не держал.]]" },
        cyn1: { q: "Как вы относились к планам отца?", a: "Ненавидела их, мисс. Я выросла в этой долине, а папа видит в ней только кубические футы воды.", v: "Дочь против отца! А ещё к ней, говорят, из деревни парень бегает!" },
        cyn2: { q: "Кто подходил к часам?", a: "В десять минут одиннадцатого я шла через гостиную: миссис Тёрнстон стояла у часов, футляр открыт. Сказала, часы отстают и она их подведёт.", v: "22:10, часы, футляр открыт.", nt: "Мисс Радд в 22:10", nx: "В 22:10 миссис Тёрнстон стояла у открытого футляра часов." },
        cyn3: { q: "Кто мог влезть в окно?", a: "Том был в саду в десять, мисс, мы… разговаривали в беседке. Но в дом он не лез, а в десять минут одиннадцатого ушёл в «Плуг».", v: "Она краснеет и не поднимает глаз." },
        faw1: { q: "Где вы были после приёма?", a: "У телефона в кабинете, мисс, с 21:50 до 22:25 диктовал Лондону цифры для правления. Барышня на станции подтвердит." },
        faw2: { q: "Кто нашёл сэра Монтегю?", a: "Я, мисс, в половине одиннадцатого: пришёл с бумагами, а он лежит у журнального столика. Часы как раз били половину.", v: "22:30, у журнального столика.", nt: "Мистер Фоули в 22:30", nx: "В 22:30 мистер Фоули нашёл сэра Монтегю у журнального столика." },
        faw3: { q: "Вы ладили с сэром Монтегю?", a: "Терпимо, мисс. Он платил мне за плотину, а я по вечерам продавал копии чертежей его конкурентам, так что мы были квиты." },
        faw4: { q: "Плотина правда нужна?", a: "Манчестеру нужна вода, мисс, а Лоумиру — его триста лет. Кто-то должен проиграть.", v: "Он трёт очки и долго их не надевает." }
      },
      objections: {
        thu2: { reply: "Ну, я открывала футляр! Часы отставали, а я сорок лет заводила такие же у себя на ферме. Не выношу, когда время врёт.", nt: "Миссис Тёрнстон солгала", nx: "В 22:10 у открытого футляра часов стояла она сама, а не мистер Фоули." },
        thu3: { reply: "Джордж писал её в год нашей свадьбы, с нашего крыльца. А этот человек повесил её над буфетом и собрался утопить всё, что на ней нарисовано.", nt: "Долина", nx: "Картину написал покойный муж миссис Тёрнстон. Её ферму затопит плотина сэра Монтегю. Вот мотив." }
      },
      wrong: {
        tom: "Том с 22:15 сидел в «Плуге». А мокрой глины в сухом саду не найти: её взяли из кадки в холле.",
        cynthia: "Мисс Радд ненавидела отцовскую плотину, но это она видела миссис Тёрнстон у часов. А до десяти минут одиннадцатого была в беседке с Томом.",
        fawley: "Мистер Фоули с 21:50 до 22:25 диктовал цифры Лондону, телефонистка подтвердит. Продавал он чертежи, а не гири.",
        proof: "Миссис Тёрнстон складывает руки на коленях: «Я старая женщина, мисс, мне гирю не поднять». Докажите, что она была у часов, или за что ей было ненавидеть сэра Монтегю."
      },
      deduce: [
        "Неделю не было дождя. Откуда на подоконнике мокрая глина?",
        "Кто стоял у открытого футляра часов в 22:10?",
        "Чья ферма уходит под воду и кто написал картину над буфетом?"
      ],
      solution: {
        winTitle: "Как всё было",
        loseTitle: "Плотину достроили в 1936 году. Миссис Тёрнстон ушла с фермы последней, когда вода подошла к крыльцу",
        p: [
          "Сэр Монтегю Радд купил старый дом в долине Лоумир и объявил, что к 1935 году долина уйдёт под воду. Ферма Тёрнстонов стояла там триста лет, и вдова отказалась от денег компании.",
          "На приёме она увидела над буфетом картину покойного мужа: их долину в лунную ночь. В 22:10 она сняла с часов латунную гирю, а когда сэр Монтегю остался в гостиной один, ударила его.",
          "Гирю она отмыла, вытерла подушкой и повесила обратно. На подоконник она положила мокрую глину из кадки в холле и подняла шпингалет, чтобы подумали на Тома из деревни."
        ]
      }
    },
    en: {
      title: "The Valley by Moonlight",
      desc: "The master of the house meant to drown a valley for a reservoir. On Saturday he told his guests, and by half past ten he was dead.",
      meta: ["Brackenford Hall, Derbyshire", "8 October 1932", "≈ 5 minutes"],
      introEyebrow: "Parlour · 10:30 pm",
      introTitle: "The clock strikes the half",
      intro: [
        "Sir Montague Rudd, chairman of the water company, had bought the old house in the Lowmere valley. At his Saturday reception he announced that by 1935 the valley would be under water.",
        "The guests left at nine. At 10:30, as the clock struck the half, Sir Montague was found by the coffee table, struck on the back of the head.",
        "You're staying the night, Miss Ada Langton. Who was left in the parlour with him?"
      ],
      introVoice: "The pendulum swings as if nothing had happened.",
      clues: {
        c1: { title: "Clock", text: "Inside the clock case one brass weight gleams as if it had just been washed; the other is dusty. Heavy, ten pounds or so.", note: "One of the clock weights was taken out and washed. That's the weapon." },
        c2: { title: "Newspaper", text: "A newspaper on the sofa, covered in markings! Sir Montague wrote something in the margin about some widow!", note: "The Derbyshire Courier: the Lowmere valley will be flooded by 1935. In the margin, in Sir Montague's hand: “The widow Thurstone won't take money. Stubborn old woman.”" },
        c3: { title: "Window", text: "The window is shut, but the latch is up. On the sill, a lump of wet clay, as if someone had come in from the garden.", note: "The window latch is up. Wet clay on the sill." },
        c4: { title: "Painting", text: "A landscape over the sideboard: a valley and hills under the moon. Signed in the corner: “G. Thurstone. Lowmere, 1911”.", note: "The painting over the sideboard was done by G. Thurstone at Lowmere in 1911. Sir Montague bought it with the house." },
        c5: { title: "Cushion", text: "The sofa cushion is damp on one side! Someone used it to wipe something, my dear!", note: "The embroidered cushion was used to wipe something wet." }
      },
      letter: [
        "The Derbyshire Courier, 6 October:",
        "“By 1935 the Lowmere valley",
        "will lie under the reservoir.",
        "Farms are being bought up by Sir M. Rudd's company.”",
        "In the margin: “The widow Thurstone won't take money. Stubborn old woman.”"
      ],
      decoys: {
        bottle: "A decanter on the sideboard; the port hasn't been touched.",
        vase: "Autumn asters in the vase. They smell of damp and garden.",
        lamp: "The standard lamp burns by the window. Its light falls on the sofa; the clock stands in shadow.",
        pipe: "The pipe in the ashtray went cold long ago: Sir Montague smoked it before the reception."
      },
      suspects: {
        tom: { name: "Tom Hogg", role: "Farmhand from Lowmere, 20", intro: "Cap, ginger curls, fists in his pockets." },
        thurstone: { name: "Mrs Martha Thurstone", role: "Farmer's widow from Lowmere, 62", intro: "A hat, an old coat, work-worn hands." },
        cynthia: { name: "Miss Cynthia Rudd", role: "Sir Montague's daughter, 24", intro: "Dark bob, earrings, a garnet dress." },
        fawley: { name: "Mr Gilbert Fawley", role: "Company engineer, 35", intro: "Spectacles, a sleek parting, sweat on his brow." }
      },
      qs: {
        tom1: { q: "Where were you this evening?", a: "In the Plough from a quarter past ten, miss, right till closing, the whole pub saw me. I never set foot in this house.", v: "At the reception he threatened to drown Sir Montague in his own reservoir! In front of everyone!" },
        tom2: { q: "Is this clay off your boots?", a: "Clay, miss? There's not been a drop of rain all week; the garden's hard as rock. The only wet clay round here is in the palm tub in the hall.", v: "A week without rain. The clay on the sill is wet.", nt: "The clay", nx: "There's been no rain for a week and the garden is dry. The wet clay on the sill didn't come from the garden." },
        tom3: { q: "What did you say to Sir Montague at the reception?", a: "That my mother was born in Lowmere and she'll die there too, and his dam can go to the devil." },
        thu1: { q: "Why did you stay the night?", a: "My mare went lame on the way home, miss, and it's six miles to the farm. Sir Montague kindly had a bed made up for me upstairs.", v: "Staying the night because of a lame horse." },
        thu2: { q: "Who went near the clock?", a: "The clocks in this house are always slow, miss. [[Round about ten Mr Fawley had the case open, I saw him myself.]]" },
        thu3: { q: "Do you know this painting?", a: "Lovely. [[Only my husband was a farmer and never held a brush in his life.]]" },
        cyn1: { q: "How did you feel about your father's plans?", a: "I hated them, miss. I grew up in this valley, and Papa sees nothing in it but cubic feet of water.", v: "The daughter against the father! And they say a lad from the village comes courting!" },
        cyn2: { q: "Who went near the clock?", a: "At ten past ten I was crossing the parlour: Mrs Thurstone was standing at the clock with the case open. She said it was slow and she'd set it right.", v: "10:10, the clock, the case open.", nt: "Miss Rudd at 10:10", nx: "At 10:10 Mrs Thurstone was standing at the open clock case." },
        cyn3: { q: "Who could have come in through the window?", a: "Tom was in the garden at ten, miss, we were… talking in the summerhouse. But he never came into the house, and at ten past ten he went off to the Plough.", v: "She blushes and won't look up." },
        faw1: { q: "Where were you after the reception?", a: "On the telephone in the study, miss, from 9:50 to 10:25, dictating figures to London for the board. The girl at the exchange will tell you." },
        faw2: { q: "Who found Sir Montague?", a: "I did, miss, at half past ten: I came in with some papers and there he was by the coffee table. The clock was just striking the half.", v: "10:30, by the coffee table.", nt: "Mr Fawley at 10:30", nx: "At 10:30 Mr Fawley found Sir Montague by the coffee table." },
        faw3: { q: "Did you get on with Sir Montague?", a: "Well enough, miss. He paid me for the dam, and in the evenings I sold copies of the plans to his rivals, so we were quits." },
        faw4: { q: "Is the dam really needed?", a: "Manchester needs water, miss, and Lowmere needs its three hundred years. Someone has to lose.", v: "He rubs his spectacles and takes a long time putting them back on." }
      },
      objections: {
        thu2: { reply: "Well, I opened the case! The clock was slow, and for forty years I wound one just like it at the farm. I can't abide a clock that tells lies.", nt: "Mrs Thurstone lied", nx: "At 10:10 it was she who stood at the open clock case, not Mr Fawley." },
        thu3: { reply: "George painted it the year we were married, from our own doorstep. And that man hung it over his sideboard and meant to drown everything in it.", nt: "The valley", nx: "The painting is by Mrs Thurstone's late husband. Sir Montague's dam will drown her farm. There's the motive." }
      },
      wrong: {
        tom: "From 10:15 Tom was sitting in the Plough. And there's no wet clay in a dry garden: it came from the tub in the hall.",
        cynthia: "Miss Rudd hated her father's dam, but she's the one who saw Mrs Thurstone at the clock. And until ten past ten she was in the summerhouse with Tom.",
        fawley: "From 9:50 to 10:25 Mr Fawley was dictating figures to London; the exchange will confirm it. He sold plans, not clock weights.",
        proof: "Mrs Thurstone folds her hands in her lap: “I'm an old woman, miss, I couldn't lift a weight like that.” Prove she was at the clock, or why she had cause to hate Sir Montague."
      },
      deduce: [
        "There's been no rain for a week. So where did the wet clay on the sill come from?",
        "Who was standing at the open clock case at 10:10?",
        "Whose farm is going under water, and who painted the picture over the sideboard?"
      ],
      solution: {
        winTitle: "What really happened",
        loseTitle: "The dam was finished in 1936. Mrs Thurstone was the last to leave her farm, when the water reached the doorstep",
        p: [
          "Sir Montague Rudd bought the old house in the Lowmere valley and announced that by 1935 the valley would be under water. The Thurstones had farmed there for three hundred years, and the widow refused the company's money.",
          "At the reception she saw her late husband's painting over the sideboard: their valley on a moonlit night. At 10:10 she took a brass weight from the clock, and when Sir Montague was alone in the parlour, she struck him.",
          "She washed the weight, wiped it on the cushion and hung it back. Then she put wet clay from the tub in the hall on the windowsill and lifted the latch, so that suspicion would fall on Tom from the village."
        ]
      }
    },
    es: {
      title: "El valle bajo la luna",
      desc: "El señor de la casa pensaba anegar un valle para hacer un embalse. El sábado se lo anunció a sus invitados, y a las diez y media estaba muerto.",
      meta: ["Brackenford Hall, Derbyshire", "8 de octubre de 1932", "≈ 5 minutos"],
      introEyebrow: "Salón · 22:30",
      introTitle: "El reloj da la media",
      intro: [
        "Sir Montague Rudd, presidente de la compañía de aguas, había comprado la vieja casa del valle de Lowmere. En la recepción del sábado anunció que en 1935 el valle quedaría bajo el agua.",
        "Los invitados se fueron a las nueve. A las 22:30, cuando el reloj dio la media, encontraron a sir Montague junto a la mesita, con un golpe en la nuca.",
        "Pasas la noche en la casa, señorita Ada Langton. ¿Quién se quedó con él en el salón?"
      ],
      introVoice: "El péndulo oscila como si nada hubiera pasado.",
      clues: {
        c1: { title: "Reloj", text: "Dentro de la caja del reloj, una pesa de latón reluce como recién lavada; la otra tiene polvo. Pesada, unos cinco kilos.", note: "Sacaron una de las pesas del reloj y la lavaron. Es el arma." },
        c2: { title: "Periódico", text: "¡Un periódico en el sofá, lleno de marcas! ¡Sir Montague escribió algo en el margen sobre una viuda!", note: "El Correo de Derbyshire: el valle de Lowmere quedará anegado en 1935. En el margen, de puño de sir Montague: «La viuda Thurstone no acepta dinero. Vieja testaruda»." },
        c3: { title: "Ventana", text: "La ventana está cerrada, pero el pestillo está levantado. En el alféizar, un terrón de arcilla húmeda, como si alguien hubiera entrado del jardín.", note: "El pestillo de la ventana está levantado. Arcilla húmeda en el alféizar." },
        c4: { title: "Cuadro", text: "Un paisaje sobre el aparador: un valle y colinas bajo la luna. Firmado en la esquina: «G. Thurstone. Lowmere, 1911».", note: "El cuadro del aparador lo pintó G. Thurstone en Lowmere en 1911. Sir Montague lo compró con la casa." },
        c5: { title: "Cojín", text: "¡El cojín del sofá está húmedo por un lado! ¡Alguien secó algo con él, querida!", note: "Con el cojín bordado secaron algo mojado." }
      },
      letter: [
        "El Correo de Derbyshire, 6 de octubre:",
        "«En 1935 el valle de Lowmere",
        "quedará bajo las aguas del embalse.",
        "La compañía de sir M. Rudd compra las granjas».",
        "En el margen: «La viuda Thurstone no acepta dinero. Vieja testaruda»."
      ],
      decoys: {
        bottle: "Una licorera en el aparador; el oporto está sin tocar.",
        vase: "Ásteres de otoño en el jarrón. Huelen a humedad y a jardín.",
        lamp: "La lámpara de pie arde junto a la ventana. Su luz cae sobre el sofá; el reloj queda en sombra.",
        pipe: "La pipa del cenicero se enfrió hace rato: sir Montague la fumó antes de la recepción."
      },
      suspects: {
        tom: { name: "Tom Hogg", role: "Mozo de granja de Lowmere, 20 años", intro: "Gorra, rizos pelirrojos, los puños en los bolsillos." },
        thurstone: { name: "Señora Martha Thurstone", role: "Viuda de un granjero de Lowmere, 62 años", intro: "Sombrero, abrigo viejo, manos curtidas." },
        cynthia: { name: "Señorita Cynthia Rudd", role: "Hija de sir Montague, 24 años", intro: "Melena oscura, pendientes, vestido granate." },
        fawley: { name: "Señor Gilbert Fawley", role: "Ingeniero de la compañía, 35 años", intro: "Gafas, raya impecable, sudor en la frente." }
      },
      qs: {
        tom1: { q: "¿Dónde estuvo esta noche?", a: "En El Arado desde las diez y cuarto, señorita, hasta el cierre, me vio toda la taberna. En esta casa no he puesto un pie.", v: "¡En la recepción amenazó con ahogar a sir Montague en su propio embalse! ¡Delante de todos!" },
        tom2: { q: "¿Es de sus botas esta arcilla?", a: "¿Arcilla, señorita? En toda la semana no ha caído una gota, el jardín está duro como una piedra. Arcilla húmeda aquí solo la hay en la maceta de la palmera del vestíbulo.", v: "Una semana sin lluvia. La arcilla del alféizar está húmeda.", nt: "La arcilla", nx: "Hace una semana que no llueve y el jardín está seco. La arcilla húmeda del alféizar no viene del jardín." },
        tom3: { q: "¿Qué le dijo a sir Montague en la recepción?", a: "Que mi madre nació en Lowmere y allí morirá, y que su presa se puede ir al diablo." },
        thu1: { q: "¿Por qué se quedó a dormir?", a: "La yegua se me quedó coja de vuelta, señorita, y hay seis millas hasta la granja. Sir Montague tuvo la amabilidad de mandar que me prepararan una cama arriba.", v: "Pasa la noche en la casa por una yegua coja." },
        thu2: { q: "¿Quién se acercó al reloj?", a: "Los relojes de esta casa siempre atrasan, señorita. [[Hacia las diez el señor Fawley tenía la caja abierta, lo vi yo misma.]]" },
        thu3: { q: "¿Conoce este cuadro?", a: "Precioso. [[Pero mi marido era granjero y no cogió un pincel en su vida.]]" },
        cyn1: { q: "¿Qué pensaba de los planes de su padre?", a: "Los odiaba, señorita. Me crie en este valle, y papá no ve en él más que metros cúbicos de agua.", v: "¡La hija contra el padre! ¡Y dicen que un mozo del pueblo la ronda!" },
        cyn2: { q: "¿Quién se acercó al reloj?", a: "A las diez y diez crucé el salón: la señora Thurstone estaba junto al reloj, con la caja abierta. Dijo que atrasaba y que lo iba a poner en hora.", v: "22:10, el reloj, la caja abierta.", nt: "La señorita Rudd a las 22:10", nx: "A las 22:10 la señora Thurstone estaba junto a la caja abierta del reloj." },
        cyn3: { q: "¿Quién pudo entrar por la ventana?", a: "Tom estaba en el jardín a las diez, señorita, estábamos… hablando en el cenador. Pero no entró en la casa, y a las diez y diez se fue a El Arado.", v: "Se ruboriza y no levanta la vista." },
        faw1: { q: "¿Dónde estuvo después de la recepción?", a: "Al teléfono en el despacho, señorita, de 21:50 a 22:25, dictándole cifras a Londres para el consejo. La operadora de la centralita lo confirmará." },
        faw2: { q: "¿Quién encontró a sir Montague?", a: "Yo, señorita, a las diez y media: entré con unos papeles y estaba junto a la mesita. El reloj justo daba la media.", v: "22:30, junto a la mesita.", nt: "El señor Fawley a las 22:30", nx: "A las 22:30 el señor Fawley encontró a sir Montague junto a la mesita." },
        faw3: { q: "¿Se llevaba bien con sir Montague?", a: "Pasablemente, señorita. Él me pagaba por la presa, y por las noches yo vendía copias de los planos a sus competidores, así que estábamos en paz." },
        faw4: { q: "¿De verdad hace falta la presa?", a: "Manchester necesita agua, señorita, y Lowmere sus trescientos años. Alguien tiene que perder.", v: "Se frota las gafas y tarda en volver a ponérselas." }
      },
      objections: {
        thu2: { reply: "¡Pues sí, abrí la caja! El reloj atrasaba, y cuarenta años le di cuerda a uno igual en la granja. No soporto un reloj que miente.", nt: "La señora Thurstone mintió", nx: "A las 22:10 era ella quien estaba junto a la caja abierta del reloj, no el señor Fawley." },
        thu3: { reply: "George lo pintó el año que nos casamos, desde nuestro porche. Y ese hombre lo colgó sobre su aparador y pensaba ahogar todo lo que sale en él.", nt: "El valle", nx: "El cuadro es del difunto marido de la señora Thurstone. La presa de sir Montague anegará su granja. Ese es el móvil." }
      },
      wrong: {
        tom: "Desde las 22:15 Tom estaba en El Arado. Y en un jardín seco no hay arcilla húmeda: salió de la maceta del vestíbulo.",
        cynthia: "La señorita Rudd odiaba la presa de su padre, pero fue ella quien vio a la señora Thurstone junto al reloj. Y hasta las diez y diez estuvo en el cenador con Tom.",
        fawley: "De 21:50 a 22:25 el señor Fawley dictaba cifras a Londres; la centralita lo confirmará. Vendía planos, no pesas de reloj.",
        proof: "La señora Thurstone cruza las manos en el regazo: «Soy una anciana, señorita, no podría levantar esa pesa». Demuestra que estuvo junto al reloj, o por qué tenía motivos para odiar a sir Montague."
      },
      deduce: [
        "No llueve desde hace una semana. ¿De dónde salió la arcilla húmeda del alféizar?",
        "¿Quién estaba junto a la caja abierta del reloj a las 22:10?",
        "¿De quién es la granja que quedará bajo el agua, y quién pintó el cuadro del aparador?"
      ],
      solution: {
        winTitle: "Lo que pasó",
        loseTitle: "La presa se terminó en 1936. La señora Thurstone fue la última en dejar su granja, cuando el agua llegó al porche",
        p: [
          "Sir Montague Rudd compró la vieja casa del valle de Lowmere y anunció que en 1935 el valle quedaría bajo el agua. Los Thurstone llevaban trescientos años en su granja, y la viuda rechazó el dinero de la compañía.",
          "En la recepción vio sobre el aparador el cuadro de su difunto marido: su valle en una noche de luna. A las 22:10 sacó una pesa de latón del reloj, y cuando sir Montague se quedó solo en el salón, lo golpeó.",
          "Lavó la pesa, la secó con el cojín y la volvió a colgar. Luego puso en el alféizar arcilla húmeda de la maceta del vestíbulo y levantó el pestillo, para que sospecharan de Tom, el del pueblo."
        ]
      }
    },
    de: {
      title: "Das Tal im Mondlicht",
      desc: "Der Hausherr wollte ein Tal für einen Stausee fluten. Am Samstag verkündete er es seinen Gästen, und um halb elf war er tot.",
      meta: ["Brackenford Hall, Derbyshire", "8. Oktober 1932", "≈ 5 Minuten"],
      introEyebrow: "Salon · 22:30",
      introTitle: "Die Uhr schlägt halb",
      intro: [
        "Sir Montague Rudd, Vorsitzender der Wassergesellschaft, hatte das alte Haus im Tal von Lowmere gekauft. Beim Empfang am Samstag verkündete er: Bis 1935 wird das Tal unter Wasser stehen.",
        "Die Gäste fuhren um neun. Um 22:30, als die Uhr halb schlug, fand man Sir Montague am Couchtisch, mit einem Schlag auf den Hinterkopf.",
        "Du übernachtest im Haus, Miss Ada Langton. Wer blieb mit ihm im Salon?"
      ],
      introVoice: "Das Pendel schwingt, als wäre nichts geschehen.",
      clues: {
        c1: { title: "Uhr", text: "Im Uhrgehäuse glänzt ein Messinggewicht, als wäre es gerade abgewaschen worden, das andere ist verstaubt. Schwer, gut fünf Kilo.", note: "Eines der Uhrgewichte wurde herausgenommen und abgewaschen. Das ist die Waffe." },
        c2: { title: "Zeitung", text: "Eine Zeitung auf dem Sofa, voller Anstreichungen! Sir Montague hat am Rand etwas über irgendeine Witwe geschrieben!", note: "Derbyshire-Kurier: Das Tal von Lowmere wird bis 1935 geflutet. Am Rand, in Sir Montagues Hand: „Die Witwe Thurstone nimmt kein Geld. Sture Alte.“" },
        c3: { title: "Fenster", text: "Das Fenster ist zu, aber der Riegel ist hochgeschoben. Auf dem Fensterbrett ein Klumpen nasser Lehm, als wäre jemand aus dem Garten gekommen.", note: "Der Fensterriegel ist hochgeschoben. Nasser Lehm auf dem Fensterbrett." },
        c4: { title: "Gemälde", text: "Eine Landschaft über der Anrichte: ein Tal und Hügel unter dem Mond. In der Ecke signiert: „G. Thurstone. Lowmere, 1911“.", note: "Das Gemälde über der Anrichte malte G. Thurstone 1911 in Lowmere. Sir Montague kaufte es mit dem Haus." },
        c5: { title: "Kissen", text: "Das Sofakissen ist auf einer Seite feucht! Damit hat jemand etwas abgewischt, Schätzchen!", note: "Mit dem bestickten Kissen wurde etwas Nasses abgewischt." }
      },
      letter: [
        "Derbyshire-Kurier, 6. Oktober:",
        "„Bis 1935 wird das Tal von Lowmere",
        "im Stausee versinken.",
        "Die Höfe kauft die Gesellschaft von Sir M. Rudd.“",
        "Am Rand: „Die Witwe Thurstone nimmt kein Geld. Sture Alte.“"
      ],
      decoys: {
        bottle: "Eine Karaffe auf der Anrichte; der Portwein ist unberührt.",
        vase: "Herbstastern in der Vase. Sie riechen nach Feuchtigkeit und Garten.",
        lamp: "Die Stehlampe brennt am Fenster. Ihr Licht fällt aufs Sofa, die Uhr steht im Schatten.",
        pipe: "Die Pfeife im Aschenbecher ist längst kalt: Sir Montague hat sie vor dem Empfang geraucht."
      },
      suspects: {
        tom: { name: "Tom Hogg", role: "Knecht aus Lowmere, 20", intro: "Schiebermütze, rote Locken, die Fäuste in den Taschen." },
        thurstone: { name: "Mrs Martha Thurstone", role: "Bauernwitwe aus Lowmere, 62", intro: "Hut, alter Mantel, abgearbeitete Hände." },
        cynthia: { name: "Miss Cynthia Rudd", role: "Sir Montagues Tochter, 24", intro: "Dunkler Bubikopf, Ohrringe, granatrotes Kleid." },
        fawley: { name: "Mr Gilbert Fawley", role: "Ingenieur der Gesellschaft, 35", intro: "Brille, glatter Scheitel, Schweiß auf der Stirn." }
      },
      qs: {
        tom1: { q: "Wo waren Sie heute Abend?", a: "Ab Viertel nach zehn im Pflug, Miss, bis zur Sperrstunde, das ganze Wirtshaus hat mich gesehen. In dieses Haus habe ich keinen Fuß gesetzt.", v: "Beim Empfang drohte er, Sir Montague in seinem eigenen Stausee zu ersäufen! Vor allen Leuten!" },
        tom2: { q: "Ist das Lehm von Ihren Stiefeln?", a: "Lehm, Miss? Die ganze Woche kein Tropfen Regen, der Garten ist hart wie Stein. Nassen Lehm gibt's hier höchstens im Palmenkübel in der Halle.", v: "Eine Woche ohne Regen. Der Lehm auf dem Fensterbrett ist nass.", nt: "Der Lehm", nx: "Seit einer Woche hat es nicht geregnet, der Garten ist trocken. Der nasse Lehm auf dem Fensterbrett stammt nicht aus dem Garten." },
        tom3: { q: "Was haben Sie Sir Montague beim Empfang gesagt?", a: "Dass meine Mutter in Lowmere geboren ist und dort auch sterben wird, und sein Damm soll sich zum Teufel scheren." },
        thu1: { q: "Warum sind Sie über Nacht geblieben?", a: "Meine Stute ging auf dem Heimweg lahm, Miss, und bis zum Hof sind es sechs Meilen. Sir Montague ließ mir freundlicherweise oben ein Bett richten.", v: "Übernachtet wegen einer lahmen Stute im Haus." },
        thu2: { q: "Wer war an der Uhr?", a: "Die Uhren in diesem Haus gehen ständig nach, Miss. [[Gegen zehn hatte Mr Fawley das Gehäuse offen, ich habe es selbst gesehen.]]" },
        thu3: { q: "Kennen Sie dieses Gemälde?", a: "Schön. [[Nur war mein Mann Bauer und hat nie im Leben einen Pinsel gehalten.]]" },
        cyn1: { q: "Was hielten Sie von den Plänen Ihres Vaters?", a: "Ich habe sie gehasst, Miss. Ich bin in diesem Tal aufgewachsen, und Papa sieht darin nur Kubikfuß Wasser.", v: "Die Tochter gegen den Vater! Und angeblich kommt ein Bursche aus dem Dorf zu ihr!" },
        cyn2: { q: "Wer war an der Uhr?", a: "Um zehn nach zehn ging ich durch den Salon: Mrs Thurstone stand an der Uhr, das Gehäuse offen. Sie sagte, die Uhr gehe nach und sie stelle sie richtig.", v: "22:10, die Uhr, das Gehäuse offen.", nt: "Miss Rudd um 22:10", nx: "Um 22:10 stand Mrs Thurstone am offenen Uhrgehäuse." },
        cyn3: { q: "Wer könnte durchs Fenster gekommen sein?", a: "Tom war um zehn im Garten, Miss, wir haben … uns im Gartenhaus unterhalten. Aber ins Haus ist er nicht gestiegen, und um zehn nach zehn ging er in den Pflug.", v: "Sie errötet und hebt den Blick nicht." },
        faw1: { q: "Wo waren Sie nach dem Empfang?", a: "Am Telefon im Arbeitszimmer, Miss, von 21:50 bis 22:25 habe ich London Zahlen für den Vorstand diktiert. Das Fräulein vom Amt wird es bestätigen." },
        faw2: { q: "Wer hat Sir Montague gefunden?", a: "Ich, Miss, um halb elf: Ich kam mit Papieren herein, und da lag er am Couchtisch. Die Uhr schlug gerade halb.", v: "22:30, am Couchtisch.", nt: "Mr Fawley um 22:30", nx: "Um 22:30 fand Mr Fawley Sir Montague am Couchtisch." },
        faw3: { q: "Kamen Sie mit Sir Montague aus?", a: "Leidlich, Miss. Er bezahlte mich für den Damm, und abends verkaufte ich Kopien der Pläne an seine Konkurrenz, also waren wir quitt." },
        faw4: { q: "Braucht man den Damm wirklich?", a: "Manchester braucht Wasser, Miss, und Lowmere seine dreihundert Jahre. Einer muss verlieren.", v: "Er reibt seine Brille und setzt sie lange nicht wieder auf." }
      },
      objections: {
        thu2: { reply: "Na schön, ich habe das Gehäuse aufgemacht! Die Uhr ging nach, und vierzig Jahre habe ich so eine auf dem Hof aufgezogen. Ich kann keine Uhr ausstehen, die lügt.", nt: "Mrs Thurstone hat gelogen", nx: "Um 22:10 stand sie selbst am offenen Uhrgehäuse, nicht Mr Fawley." },
        thu3: { reply: "George hat es im Jahr unserer Hochzeit gemalt, von unserer eigenen Schwelle aus. Und dieser Mann hängte es über seine Anrichte und wollte alles ertränken, was darauf zu sehen ist.", nt: "Das Tal", nx: "Das Gemälde stammt von Mrs Thurstones verstorbenem Mann. Sir Montagues Damm wird ihren Hof fluten. Das ist das Motiv." }
      },
      wrong: {
        tom: "Ab 22:15 saß Tom im Pflug. Und in einem trockenen Garten gibt es keinen nassen Lehm: Er stammt aus dem Kübel in der Halle.",
        cynthia: "Miss Rudd hasste den Damm ihres Vaters, aber sie hat Mrs Thurstone an der Uhr gesehen. Und bis zehn nach zehn war sie mit Tom im Gartenhaus.",
        fawley: "Von 21:50 bis 22:25 diktierte Mr Fawley Zahlen nach London; das Amt wird es bestätigen. Er verkaufte Pläne, keine Uhrgewichte.",
        proof: "Mrs Thurstone faltet die Hände im Schoß: „Ich bin eine alte Frau, Miss, so ein Gewicht kann ich nicht heben.“ Beweise, dass sie an der Uhr war, oder warum sie Sir Montague hassen sollte."
      },
      deduce: [
        "Seit einer Woche hat es nicht geregnet. Woher kommt der nasse Lehm auf dem Fensterbrett?",
        "Wer stand um 22:10 am offenen Uhrgehäuse?",
        "Wessen Hof versinkt im Wasser, und wer hat das Bild über der Anrichte gemalt?"
      ],
      solution: {
        winTitle: "Was wirklich geschah",
        loseTitle: "Der Damm wurde 1936 fertig. Mrs Thurstone verließ ihren Hof als Letzte, als das Wasser an die Schwelle reichte",
        p: [
          "Sir Montague Rudd kaufte das alte Haus im Tal von Lowmere und verkündete, bis 1935 werde das Tal unter Wasser stehen. Die Thurstones bewirtschafteten ihren Hof seit dreihundert Jahren, und die Witwe lehnte das Geld der Gesellschaft ab.",
          "Beim Empfang sah sie über der Anrichte das Bild ihres verstorbenen Mannes: ihr Tal in einer Mondnacht. Um 22:10 nahm sie ein Messinggewicht aus der Uhr, und als Sir Montague allein im Salon war, schlug sie zu.",
          "Das Gewicht wusch sie ab, wischte es am Kissen trocken und hängte es zurück. Dann legte sie nassen Lehm aus dem Kübel in der Halle aufs Fensterbrett und schob den Riegel hoch, damit der Verdacht auf Tom aus dem Dorf fiel."
        ]
      }
    },
    pl: {
      title: "Dolina w świetle księżyca",
      desc: "Pan domu zamierzał zalać dolinę pod zbiornik wodny. W sobotę ogłosił to gościom, a o wpół do jedenastej już nie żył.",
      meta: ["Brackenford Hall, Derbyshire", "8 października 1932", "≈ 5 minut"],
      introEyebrow: "Salon · 22:30",
      introTitle: "Zegar bije wpół",
      intro: [
        "Sir Montague Rudd, prezes spółki wodnej, kupił stary dom w dolinie Lowmere. Na sobotnim przyjęciu ogłosił, że do 1935 roku dolina znajdzie się pod wodą.",
        "Goście rozjechali się o dziewiątej. O 22:30, kiedy zegar wybił wpół, sir Montague'a znaleziono przy stoliku, z raną z tyłu głowy.",
        "Nocujesz w tym domu, panno Ado Langton. Kto został z nim w salonie?"
      ],
      introVoice: "Wahadło kołysze się, jakby nic się nie stało.",
      clues: {
        c1: { title: "Zegar", text: "W skrzyni zegara jeden mosiężny ciężarek lśni, jakby go dopiero umyto, drugi jest zakurzony. Ciężki, dobre pięć kilo.", note: "Jeden ciężarek zegara wyjęto i umyto. To narzędzie zbrodni." },
        c2: { title: "Gazeta", text: "Gazeta na kanapie, cała w znaczkach! Sir Montague pisał coś na marginesie o jakiejś wdowie!", note: "„Kurier Derbyshire”: dolina Lowmere zostanie zalana do 1935 roku. Na marginesie ręką sir Montague'a: „Wdowa Thurstone nie bierze pieniędzy. Uparta stara”." },
        c3: { title: "Okno", text: "Okno zamknięte, ale zasuwka podniesiona. Na parapecie grudka mokrej gliny, jakby ktoś przyszedł z ogrodu.", note: "Zasuwka okna podniesiona. Na parapecie mokra glina." },
        c4: { title: "Obraz", text: "Pejzaż nad kredensem: dolina i wzgórza pod księżycem. W rogu podpis: „G. Thurstone. Lowmere, 1911”.", note: "Obraz nad kredensem namalował G. Thurstone w Lowmere w 1911 roku. Sir Montague kupił go razem z domem." },
        c5: { title: "Poduszka", text: "Poduszka na kanapie wilgotna z jednej strony! Ktoś czymś ją wycierał, kochana!", note: "Haftowaną poduszką wycierano coś mokrego." }
      },
      letter: [
        "„Kurier Derbyshire”, 6 października:",
        "„Do 1935 roku dolina Lowmere",
        "zniknie pod wodą zbiornika.",
        "Gospodarstwa wykupuje spółka sir M. Rudda”.",
        "Na marginesie: „Wdowa Thurstone nie bierze pieniędzy. Uparta stara”."
      ],
      decoys: {
        bottle: "Karafka na kredensie, porto nietknięte.",
        vase: "Jesienne astry w wazonie. Pachną wilgocią i ogrodem.",
        lamp: "Lampa stojąca świeci przy oknie. Jej światło pada na kanapę, zegar stoi w cieniu.",
        pipe: "Fajka w popielniczce dawno wystygła: sir Montague palił ją jeszcze przed przyjęciem."
      },
      suspects: {
        tom: { name: "Tom Hogg", role: "Parobek z Lowmere, 20 lat", intro: "Kaszkiet, rude loki, pięści w kieszeniach." },
        thurstone: { name: "Pani Martha Thurstone", role: "Wdowa po farmerze z Lowmere, 62 lata", intro: "Kapelusz, stary płaszcz, spracowane ręce." },
        cynthia: { name: "Panna Cynthia Rudd", role: "Córka sir Montague'a, 24 lata", intro: "Ciemne krótkie włosy, kolczyki, suknia w kolorze granatu." },
        fawley: { name: "Pan Gilbert Fawley", role: "Inżynier spółki, 35 lat", intro: "Okulary, gładki przedziałek, pot na czole." }
      },
      qs: {
        tom1: { q: "Gdzie pan był wieczorem?", a: "Od 22:15 w „Pługu”, panienko, aż do zamknięcia, cała gospoda mnie widziała. W tym domu nogi nie postawiłem.", v: "Na przyjęciu groził, że utopi sir Montague'a w jego własnym zbiorniku! Przy wszystkich!" },
        tom2: { q: "Czy to glina z pańskich butów?", a: "Glina, panienko? Cały tydzień ani kropli deszczu, ziemia w ogrodzie twarda jak kamień. Mokrą glinę można tu wziąć chyba tylko z donicy z palmą w holu.", v: "Tydzień bez deszczu. Glina na parapecie jest mokra.", nt: "Glina", nx: "Od tygodnia nie padało, ogród jest suchy. Mokra glina na parapecie nie pochodzi z ogrodu." },
        tom3: { q: "Co pan powiedział sir Montague'owi na przyjęciu?", a: "Że moja matka urodziła się w Lowmere i tam umrze, a jego tama niech idzie do diabła." },
        thu1: { q: "Dlaczego została pani na noc?", a: "Klacz okulała w drodze powrotnej, panienko, a do farmy jest sześć mil. Sir Montague łaskawie kazał mi posłać łóżko na górze.", v: "Nocuje w domu z powodu kulawej klaczy." },
        thu2: { q: "Kto podchodził do zegara?", a: "Zegary w tym domu ciągle się spóźniają, panienko. [[Koło dziesiątej skrzynię otwierał pan Fawley, sama widziałam.]]" },
        thu3: { q: "Czy zna pani ten obraz?", a: "Piękny. [[Tylko mój mąż był farmerem i pędzla w życiu nie trzymał.]]" },
        cyn1: { q: "Co pani sądziła o planach ojca?", a: "Nienawidziłam ich, panienko. Wychowałam się w tej dolinie, a tata widzi w niej tylko metry sześcienne wody.", v: "Córka przeciw ojcu! A podobno przychodzi do niej chłopak ze wsi!" },
        cyn2: { q: "Kto podchodził do zegara?", a: "O 22:10 przechodziłam przez salon: pani Thurstone stała przy zegarze, skrzynia otwarta. Powiedziała, że zegar się spóźnia i że go przestawi.", v: "22:10, zegar, otwarta skrzynia.", nt: "Panna Rudd o 22:10", nx: "O 22:10 pani Thurstone stała przy otwartej skrzyni zegara." },
        cyn3: { q: "Kto mógł wejść przez okno?", a: "Tom był w ogrodzie o dziesiątej, panienko, rozmawialiśmy… w altanie. Ale do domu nie wchodził, a o 22:10 poszedł do „Pługa”.", v: "Rumieni się i nie podnosi oczu." },
        faw1: { q: "Gdzie pan był po przyjęciu?", a: "Przy telefonie w gabinecie, panienko, od 21:50 do 22:25 dyktowałem Londynowi liczby dla zarządu. Telefonistka z centrali potwierdzi." },
        faw2: { q: "Kto znalazł sir Montague'a?", a: "Ja, panienko, o 22:30: przyszedłem z papierami, a on leży przy stoliku. Zegar akurat bił wpół.", v: "22:30, przy stoliku.", nt: "Pan Fawley o 22:30", nx: "O 22:30 pan Fawley znalazł sir Montague'a przy stoliku." },
        faw3: { q: "Czy dobrze się pan układał z sir Montague'em?", a: "Znośnie, panienko. On płacił mi za tamę, a ja wieczorami sprzedawałem kopie planów jego konkurentom, więc byliśmy kwita." },
        faw4: { q: "Czy ta tama naprawdę jest potrzebna?", a: "Manchester potrzebuje wody, panienko, a Lowmere swoich trzystu lat. Ktoś musi przegrać.", v: "Przeciera okulary i długo ich nie zakłada." }
      },
      objections: {
        thu2: { reply: "No dobrze, otwierałam skrzynię! Zegar się spóźniał, a ja czterdzieści lat nakręcałam taki sam na farmie. Nie znoszę, kiedy zegar kłamie.", nt: "Pani Thurstone skłamała", nx: "O 22:10 przy otwartej skrzyni zegara stała ona sama, a nie pan Fawley." },
        thu3: { reply: "George namalował go w roku naszego ślubu, z naszego ganku. A ten człowiek powiesił go nad kredensem i chciał zatopić wszystko, co na nim widać.", nt: "Dolina", nx: "Obraz namalował nieżyjący mąż pani Thurstone. Tama sir Montague'a zaleje jej farmę. Oto motyw." }
      },
      wrong: {
        tom: "Od 22:15 Tom siedział w „Pługu”. A w suchym ogrodzie nie ma mokrej gliny: wzięto ją z donicy w holu.",
        cynthia: "Panna Rudd nienawidziła tamy ojca, ale to ona widziała panią Thurstone przy zegarze. A do 22:10 była z Tomem w altanie.",
        fawley: "Od 21:50 do 22:25 pan Fawley dyktował liczby do Londynu, centrala to potwierdzi. Sprzedawał plany, nie ciężarki od zegara.",
        proof: "Pani Thurstone składa ręce na kolanach: „Jestem starą kobietą, panienko, nie podniosłabym takiego ciężarka”. Udowodnij, że była przy zegarze, albo za co miała nienawidzić sir Montague'a."
      },
      deduce: [
        "Od tygodnia nie padało. Skąd na parapecie mokra glina?",
        "Kto o 22:10 stał przy otwartej skrzyni zegara?",
        "Czyja farma pójdzie pod wodę i kto namalował obraz nad kredensem?"
      ],
      solution: {
        winTitle: "Jak było naprawdę",
        loseTitle: "Tamę ukończono w 1936 roku. Pani Thurstone opuściła farmę ostatnia, kiedy woda podeszła pod ganek",
        p: [
          "Sir Montague Rudd kupił stary dom w dolinie Lowmere i ogłosił, że do 1935 roku dolina znajdzie się pod wodą. Thurstone'owie gospodarowali tam od trzystu lat, a wdowa odrzuciła pieniądze spółki.",
          "Na przyjęciu zobaczyła nad kredensem obraz zmarłego męża: ich dolinę w księżycową noc. O 22:10 wyjęła z zegara mosiężny ciężarek, a kiedy sir Montague został w salonie sam, uderzyła go.",
          "Ciężarek umyła, wytarła poduszką i zawiesiła z powrotem. Potem położyła na parapecie mokrą glinę z donicy w holu i podniosła zasuwkę, żeby podejrzenie padło na Toma ze wsi."
        ]
      }
    }
  }
});
