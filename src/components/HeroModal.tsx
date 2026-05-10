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
      <div className="h-full" style={{ width: `${value}%`, background: color, borderRight: '3px solid black' }} />
    </div>
  </div>
);

export default function HeroModal({ hero, onClose }: HeroModalProps) {
  if (!hero) return null;

  const isVillain = hero.type === 'villain';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="bg-white bounce-in w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: '6px', border: `5px solid ${isVillain ? '#991B1B' : 'var(--comic-black)'}`, boxShadow: `10px 10px 0px ${isVillain ? '#991B1B' : 'var(--comic-black)'}` }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative halftone" style={{ background: hero.bgColor, minHeight: '260px' }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white comic-border font-black text-xl hover:bg-yellow-300 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            <Icon name="X" size={18} />
          </button>

          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
            <div className="px-3 py-1" style={{ background: hero.color, border: '2px solid black', boxShadow: '3px 3px 0 black' }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Oswald', textTransform: 'uppercase' }}>
                {hero.origin}
              </span>
            </div>
            <div className="px-2 py-0.5" style={{ background: isVillain ? '#991B1B' : '#1D4ED8', border: '2px solid black' }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Oswald', textTransform: 'uppercase' }}>
                {isVillain ? '💀 Злодей' : '🛡 Герой'}
              </span>
            </div>
            {hero.threatLevel && (
              <div className="px-2 py-0.5" style={{ background: '#000', border: '2px solid #FF4444' }}>
                <span className="font-bold text-xs" style={{ color: '#FF4444', fontFamily: 'Oswald', textTransform: 'uppercase' }}>
                  ⚠ Угроза: {hero.threatLevel}
                </span>
              </div>
            )}
          </div>

          <img src={hero.image} alt={hero.name} className="w-full object-cover object-top" style={{ maxHeight: '260px', mixBlendMode: 'multiply' }} />

          <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: hero.color }}>
            <div className="pop-text-lg text-3xl text-white">{hero.name}</div>
            <div className="text-white/80 text-sm mt-0.5" style={{ fontFamily: 'Oswald' }}>
              {hero.alias} · С {hero.firstAppearance} г.
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-5">
            {hero.tags.map(tag => (
              <span key={tag} className="tag-badge" style={{ background: hero.color, color: 'white' }}>{tag}</span>
            ))}
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-6 border-2 border-black" style={{ background: hero.color }} />
              <h3 className="pop-text text-lg">История происхождения</h3>
            </div>
            <div className="speech-bubble p-4 mb-2">
              <p className="text-sm leading-relaxed text-gray-800">{hero.story}</p>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-6 border-2 border-black" style={{ background: hero.color }} />
              <h3 className="pop-text text-lg">Характеристики</h3>
            </div>
            <StatRow label="Сила" value={hero.stats.strength} color={hero.color} />
            <StatRow label="Скорость" value={hero.stats.speed} color={hero.color} />
            <StatRow label="Интеллект" value={hero.stats.intelligence} color={hero.color} />
            <StatRow label="Выносливость" value={hero.stats.durability} color={hero.color} />
          </div>

          <div className="p-3 border-2 border-black" style={{ background: isVillain ? '#1a0000' : '#FFF9C4' }}>
            <div className="flex items-start gap-2">
              <span className="text-2xl">{isVillain ? '⚡' : '⚡'}</span>
              <div>
                <div className="font-bold text-sm" style={{ fontFamily: 'Oswald', textTransform: 'uppercase', color: isVillain ? '#FF4444' : '#000' }}>
                  {isVillain ? 'Главная угроза' : 'Суперспособность'}
                </div>
                <div className="text-sm font-medium" style={{ color: isVillain ? '#ffaaaa' : '#333' }}>{hero.power}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
