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
    name: "Молния",
    alias: "Алексей Громов",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/f0fb17ba-5420-4b8f-8d70-d25b8c3649b4.jpg",
    color: "#E8001D",
    bgColor: "#FFE600",
    power: "Управление молнией",
    origin: "Научная авария",
    stats: { strength: 85, speed: 95, intelligence: 70, durability: 80 },
    tags: ["Электричество", "Скорость", "Герой"],
    firstAppearance: "2019",
    story: "Алексей Громов был обычным физиком-ядерщиком, пока эксперимент с шаровой молнией не пошёл катастрофически не так. Взрыв реактора наделил его способностью генерировать и контролировать электрические разряды. Теперь он патрулирует Новосибирск под именем «Молния», защищая город от технократических злодеев и сверхпреступников."
  },
  {
    id: 2,
    name: "Валькирия",
    alias: "Наташа Вершинина",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/48c14e11-6993-4f1e-b728-96dd4d5bba59.jpg",
    color: "#6B21A8",
    bgColor: "#F3E8FF",
    power: "Левитация и телекинез",
    origin: "Древняя реликвия",
    stats: { strength: 78, speed: 82, intelligence: 92, durability: 74 },
    tags: ["Магия", "Полёт", "Телепатия"],
    firstAppearance: "2020",
    story: "Наташа нашла золотой амулет в археологической экспедиции на Алтае. Артефакт оказался реликвией скандинавских воительниц — валькирий. Дух древней воительницы слился с Наташей, даровав ей силу левитации, телекинез и непревзойдённое боевое мастерство. Она хранительница баланса между древним миром и современностью."
  },
  {
    id: 3,
    name: "Тень",
    alias: "Виктор Мрак",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/dc0a1391-583b-4cc3-8c2e-94bf3b3d3886.jpg",
    color: "#064E3B",
    bgColor: "#ECFDF5",
    power: "Контроль теней",
    origin: "Мутация",
    stats: { strength: 70, speed: 88, intelligence: 97, durability: 68 },
    tags: ["Темнота", "Скрытность", "Антигерой"],
    firstAppearance: "2021",
    story: "Виктор был агентом спецслужб, попавшим под воздействие экспериментального излучения при провале секретной операции. Теперь он способен сливаться с тенями, телепортироваться через тёмные пространства и читать воспоминания людей через прикосновение. Работает в серой зоне — ни герой, ни злодей, только справедливость по своим правилам."
  },
  {
    id: 4,
    name: "Колосс",
    alias: "Иван Железнов",
    image: "https://cdn.poehali.dev/projects/2b9d1697-db1e-4aaa-b90a-bd4766ce22a5/files/d01fcd93-92c8-41fa-934a-1b32ae7cf68a.jpg",
    color: "#92400E",
    bgColor: "#FFF7ED",
    power: "Металлическая броня",
    origin: "Генетика",
    stats: { strength: 99, speed: 45, intelligence: 65, durability: 99 },
    tags: ["Сила", "Броня", "Защита"],
    firstAppearance: "2018",
    story: "Иван Железнов — потомственный кузнец из уральского городка. Редкая генетическая мутация проявилась во время обвала на заводе: под угрозой гибели его кожа трансформировалась в непробиваемую металлическую броню. Теперь Иван — живой щит команды. Медленный, но абсолютно неуязвимый. Его бронированный кулак способен остановить грузовой поезд."
  }
];
