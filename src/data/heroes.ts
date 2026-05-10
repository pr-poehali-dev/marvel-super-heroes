export interface Hero {
  id: number;
  name: string;
  alias: string;
  image: string;
  color: string;
  bgColor: string;
  power: string;
  origin: string;
  stats: {
    strength: number;
    speed: number;
    intelligence: number;
    durability: number;
  };
  tags: string[];
  story: string;
  firstAppearance: string;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Железный человек",
    alias: "Тони Старк",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/cd0e6b2e-e02a-4ee6-9f34-c1070e187c67.jpg",
    color: "#B91C1C",
    bgColor: "#FEF2F2",
    power: "Силовая броня",
    origin: "Технологии",
    stats: { strength: 85, speed: 78, intelligence: 100, durability: 88 },
    tags: ["Технологии", "Броня", "Гений"],
    firstAppearance: "2008",
    story: "Тони Старк — гений, миллиардер, плейбой и филантроп. Попав в плен к террористам, он создал первый костюм Железного человека прямо в пещере, используя подручные материалы. Вернувшись домой, Тони усовершенствовал броню и стал защитником мира. Его интеллект и технологии — самое мощное оружие против любой угрозы вселенной."
  },
  {
    id: 2,
    name: "Капитан Америка",
    alias: "Стив Роджерс",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/6d154931-3e7a-4821-b3e3-8a163e60fd90.jpg",
    color: "#1D4ED8",
    bgColor: "#EFF6FF",
    power: "Суперсолдат",
    origin: "Сыворотка",
    stats: { strength: 90, speed: 85, intelligence: 80, durability: 92 },
    tags: ["Суперсила", "Щит", "Лидер"],
    firstAppearance: "2011",
    story: "Тощий парень из Бруклина Стив Роджерс мечтал защищать родину. Получив сыворотку суперсолдата от доктора Эрскина, он стал воплощением физического совершенства. Заморозив себя во льдах в 1945 году после победы над Красным Черепом, Стив проснулся в XXI веке — человек из другой эпохи с несгибаемым моральным стержнем."
  },
  {
    id: 3,
    name: "Тор",
    alias: "Тор Одинсон",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/b011c7df-3566-4b2e-b33d-07c697791850.jpg",
    color: "#1E40AF",
    bgColor: "#EFF6FF",
    power: "Бог грома",
    origin: "Асгард",
    stats: { strength: 99, speed: 80, intelligence: 72, durability: 97 },
    tags: ["Молния", "Бог", "Полёт"],
    firstAppearance: "2011",
    story: "Тор — асгардский бог грома, сын Одина и наследник трона Асгарда. Изгнанный на Землю за высокомерие, он должен был заново обрести достоинство и стать достойным своего молота Мьёльнира. Пройдя путь от заносчивого принца до мудрого защитника девяти миров, Тор стал одним из самых мощных Мстителей."
  },
  {
    id: 4,
    name: "Чёрная вдова",
    alias: "Наташа Романофф",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/fec3ff28-c060-492e-846a-716cfbcf1a97.jpg",
    color: "#991B1B",
    bgColor: "#FFF1F2",
    power: "Мастер боя",
    origin: "КГБ",
    stats: { strength: 72, speed: 90, intelligence: 95, durability: 70 },
    tags: ["Шпион", "Рукопашный бой", "Агент"],
    firstAppearance: "2010",
    story: "Наташа Романофф прошла жесточайшую подготовку в советской программе «Красная комната», превратившей её в идеального агента и убийцу. Завербованная Ником Фьюри, она перешла на сторону ЩИТА и стала одним из основателей команды Мстителей. Без суперсил, но с несравненным мастерством — она доказала, что воля и интеллект сильнее любой технологии."
  },
  {
    id: 5,
    name: "Халк",
    alias: "Брюс Баннер",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/869a2644-dde5-42c4-874c-f479bf1f1ca5.jpg",
    color: "#15803D",
    bgColor: "#F0FDF4",
    power: "Безграничная сила",
    origin: "Гамма-излучение",
    stats: { strength: 100, speed: 65, intelligence: 95, durability: 100 },
    tags: ["Суперсила", "Трансформация", "Учёный"],
    firstAppearance: "2008",
    story: "Доктор Брюс Баннер — один из величайших умов планеты, специалист по гамма-излучению. Случайная доза смертельной радиации навсегда изменила его ДНК: теперь в моменты гнева или стресса он превращается в огромное зелёное существо невероятной силы — Халка. Чем сильнее злость Баннера, тем мощнее становится Халк."
  },
  {
    id: 6,
    name: "Человек-паук",
    alias: "Питер Паркер",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/95996823-d6f9-4411-bd3f-57f2d618af04.jpg",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    power: "Паучьи способности",
    origin: "Укус паука",
    stats: { strength: 80, speed: 92, intelligence: 90, durability: 75 },
    tags: ["Ловкость", "Паутина", "Подросток"],
    firstAppearance: "2016",
    story: "Обычный старшеклассник из Куинса Питер Паркер получил суперспособности после укуса радиоактивного паука. Потеряв дядю Бена из-за собственной бездействия, он усвоил главный урок: великая сила требует великой ответственности. Самостоятельно создав костюм и паутинострелы, Питер стал защитником Нью-Йорка и одним из самых любимых Мстителей."
  }
];