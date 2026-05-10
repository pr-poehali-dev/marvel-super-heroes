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
  const isVillain = hero.type === 'villain';

  return (
    <div
      className={`hero-card comic-border-heavy bg-white slide-up ${animDelay}`}
      onClick={() => onClick(hero)}
      style={{
        borderRadius: '4px',
        overflow: 'hidden',
        borderColor: isVillain ? '#991B1B' : 'var(--comic-black)',
        boxShadow: isVillain ? '6px 6px 0px #991B1B' : '6px 6px 0px var(--comic-black)'
      }}
    >
      <div className="relative halftone" style={{ background: hero.bgColor, height: '200px' }}>
        {/* Type badge */}
        <div
          className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center border-2 border-black font-black"
          style={{ background: isVillain ? '#991B1B' : '#1D4ED8', fontSize: '12px', borderRadius: '2px' }}
          title={isVillain ? 'Злодей' : 'Герой'}
        >
          {isVillain ? '💀' : '🛡'}
        </div>

        {/* Threat level */}
        {hero.threatLevel && (
          <div
            className="absolute top-2 left-2 z-10 tag-badge"
            style={{ background: '#000', color: '#FF4444', fontSize: '9px' }}
          >
            ⚠ {hero.threatLevel}
          </div>
        )}

        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover object-top"
          style={{ mixBlendMode: 'multiply' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5" style={{ background: hero.color }}>
          <div className="pop-text text-base text-white leading-tight">{hero.name}</div>
          <div className="text-[10px] text-white/75 font-medium truncate" style={{ fontFamily: 'Oswald' }}>
            {hero.alias}
          </div>
        </div>
      </div>

      <div className="p-2.5 bg-white">
        <div className="flex flex-wrap gap-1 mb-2">
          {hero.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="tag-badge text-[9px]"
              style={{ background: isVillain ? '#1a0000' : 'var(--comic-black)', color: isVillain ? '#FF4444' : 'var(--comic-yellow)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <StatBar value={hero.stats.strength} label="Сила" color={hero.color} />
        <StatBar value={hero.stats.speed} label="Скорость" color={hero.color} />
        <StatBar value={hero.stats.intelligence} label="Интеллект" color={hero.color} />
        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-medium" style={{ fontFamily: 'Oswald' }}>
            {hero.firstAppearance} г.
          </span>
          <button
            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold text-white comic-border transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            style={{ background: hero.color, fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            <Icon name="BookOpen" size={10} />
            Досье
          </button>
        </div>
      </div>
    </div>
  );
}
