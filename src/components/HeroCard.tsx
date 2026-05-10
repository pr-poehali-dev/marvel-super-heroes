import { Hero } from '@/data/heroes';
import Icon from '@/components/ui/icon';

interface HeroCardProps {
  hero: Hero;
  onClick: (hero: Hero) => void;
  animDelay?: string;
}

const StatBar = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div className="mb-1">
    <div className="flex justify-between items-center mb-0.5">
      <span className="hero-stat text-xs" style={{ color: 'var(--comic-black)' }}>{label}</span>
      <span className="hero-stat text-xs font-black">{value}</span>
    </div>
    <div className="w-full bg-gray-200 border border-black" style={{ height: '6px' }}>
      <div
        className="h-full transition-all duration-500"
        style={{ width: `${value}%`, background: color, borderRight: '2px solid black' }}
      />
    </div>
  </div>
);

export default function HeroCard({ hero, onClick, animDelay = '' }: HeroCardProps) {
  return (
    <div
      className={`hero-card comic-border-heavy bg-white slide-up ${animDelay}`}
      onClick={() => onClick(hero)}
      style={{ borderRadius: '4px', overflow: 'hidden' }}
    >
      <div className="relative halftone" style={{ background: hero.bgColor, height: '220px' }}>
        <div
          className="absolute top-3 left-3 z-10 tag-badge"
          style={{ background: hero.color, color: 'white' }}
        >
          {hero.power}
        </div>
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover object-top"
          style={{ mixBlendMode: 'multiply' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-2"
          style={{ background: hero.color }}
        >
          <div className="pop-text text-xl text-white">{hero.name}</div>
          <div className="text-xs text-white/80 font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {hero.alias}
          </div>
        </div>
      </div>

      <div className="p-3 bg-white">
        <div className="flex flex-wrap gap-1 mb-3">
          {hero.tags.map(tag => (
            <span key={tag} className="tag-badge bg-yellow-300 text-black text-[10px]">{tag}</span>
          ))}
        </div>
        <StatBar value={hero.stats.strength} label="Сила" color={hero.color} />
        <StatBar value={hero.stats.speed} label="Скорость" color={hero.color} />
        <StatBar value={hero.stats.intelligence} label="Интеллект" color={hero.color} />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Oswald' }}>
            С {hero.firstAppearance} г.
          </span>
          <button
            className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-white comic-border transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            style={{ background: hero.color, fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            <Icon name="BookOpen" size={12} />
            История
          </button>
        </div>
      </div>
    </div>
  );
}
