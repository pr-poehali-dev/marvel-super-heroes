import { Hero } from '@/data/heroes';
import Icon from '@/components/ui/icon';

interface HeroModalProps {
  hero: Hero | null;
  onClose: () => void;
}

const StatRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="hero-stat text-sm">{label}</span>
      <span className="hero-stat text-sm font-black">{value}/100</span>
    </div>
    <div className="w-full border-2 border-black bg-gray-100" style={{ height: '10px' }}>
      <div
        className="h-full"
        style={{ width: `${value}%`, background: color, borderRight: '3px solid black' }}
      />
    </div>
  </div>
);

export default function HeroModal({ hero, onClose }: HeroModalProps) {
  if (!hero) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="comic-border-xl bg-white bounce-in w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: '6px' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative halftone" style={{ background: hero.bgColor, minHeight: '280px' }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white comic-border font-black text-xl hover:bg-yellow-300 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            <Icon name="X" size={18} />
          </button>

          <div
            className="absolute top-4 left-4 z-10 px-3 py-1"
            style={{ background: hero.color, border: '2px solid black', boxShadow: '3px 3px 0 black' }}
          >
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'Oswald', textTransform: 'uppercase' }}>
              {hero.origin}
            </span>
          </div>

          <img
            src={hero.image}
            alt={hero.name}
            className="w-full object-cover object-top"
            style={{ maxHeight: '280px', mixBlendMode: 'multiply' }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: hero.color }}>
            <div className="pop-text-lg text-3xl text-white">{hero.name}</div>
            <div className="text-white/80 text-sm mt-0.5" style={{ fontFamily: 'Oswald' }}>
              Настоящее имя: {hero.alias} · С {hero.firstAppearance} г.
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-5">
            {hero.tags.map(tag => (
              <span key={tag} className="tag-badge" style={{ background: hero.color, color: 'white' }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-6 border-2 border-black" style={{ background: hero.color }} />
              <h3 className="pop-text text-lg">История происхождения</h3>
            </div>
            <div className="speech-bubble p-4 mb-6">
              <p className="text-sm leading-relaxed text-gray-800">{hero.story}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-6 border-2 border-black" style={{ background: hero.color }} />
              <h3 className="pop-text text-lg">Характеристики</h3>
            </div>
            <StatRow label="Сила" value={hero.stats.strength} color={hero.color} />
            <StatRow label="Скорость" value={hero.stats.speed} color={hero.color} />
            <StatRow label="Интеллект" value={hero.stats.intelligence} color={hero.color} />
            <StatRow label="Выносливость" value={hero.stats.durability} color={hero.color} />
          </div>

          <div className="mt-6 p-3 border-2 border-black" style={{ background: '#FFF9C4' }}>
            <div className="flex items-start gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-bold text-sm" style={{ fontFamily: 'Oswald', textTransform: 'uppercase' }}>
                  Суперспособность
                </div>
                <div className="text-sm font-medium">{hero.power}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
