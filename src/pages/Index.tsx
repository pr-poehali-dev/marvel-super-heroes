import { useState, useMemo } from 'react';
import { heroes, Hero } from '@/data/heroes';
import HeroCard from '@/components/HeroCard';
import HeroModal from '@/components/HeroModal';
import Icon from '@/components/ui/icon';

const SECTIONS = ['главная', 'галерея', 'история'] as const;
type Section = typeof SECTIONS[number];

const POWER_FILTERS = ['Все', 'Электричество', 'Магия', 'Темнота', 'Сила', 'Скорость', 'Полёт'];

export default function Index() {
  const [section, setSection] = useState<Section>('главная');
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const filtered = useMemo(() => {
    return heroes.filter(h => {
      const matchSearch =
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.alias.toLowerCase().includes(search.toLowerCase()) ||
        h.power.toLowerCase().includes(search.toLowerCase()) ||
        h.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchFilter = activeFilter === 'Все' || h.tags.includes(activeFilter);
      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <div className="min-h-screen" style={{ background: 'var(--comic-yellow)', backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)', backgroundSize: '18px 18px' }}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b-4 border-black" style={{ background: 'var(--comic-black)' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSection('главная')}>
            <div className="w-8 h-8 flex items-center justify-center border-2 border-yellow-300 zap" style={{ background: 'var(--comic-red)', borderRadius: '2px' }}>
              <span className="text-white font-black text-sm" style={{ fontFamily: 'Russo One' }}>М</span>
            </div>
            <span className="pop-text text-xl" style={{ color: 'var(--comic-yellow)' }}>МЕГАГЕРОИ</span>
          </div>
          <div className="flex gap-6">
            {SECTIONS.map(s => (
              <button
                key={s}
                className="nav-link text-sm transition-all"
                style={{ color: section === s ? 'var(--comic-yellow)' : 'rgba(255,255,255,0.7)' }}
                onClick={() => setSection(s)}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* === ГЛАВНАЯ === */}
      {section === 'главная' && (
        <div>
          {/* Hero section */}
          <div className="relative overflow-hidden" style={{ minHeight: '90vh', background: 'var(--comic-red)' }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />
            <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 42px)' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[90vh] py-16">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <div className="inline-block mb-4 px-3 py-1 border-2 border-black bg-yellow-400 slide-up" style={{ boxShadow: '3px 3px 0 black' }}>
                  <span className="text-xs font-black" style={{ fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ⚡ Официальная Энциклопедия
                  </span>
                </div>

                <h1 className="pop-text-lg mb-4 slide-up delay-100" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.9', color: 'var(--comic-yellow)' }}>
                  ВСЕЛЕННАЯ<br />МЕГАГЕРОЕВ
                </h1>

                <div className="speech-bubble p-4 mb-6 slide-up delay-200 max-w-md">
                  <p className="text-sm font-medium text-gray-700">
                    Четыре легендарных защитника. Сотни злодеев повержены. Один вопрос: кто следующий?
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap slide-up delay-300">
                  <button
                    className="px-6 py-3 font-black text-sm transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
                    style={{ background: 'var(--comic-yellow)', color: 'var(--comic-black)', fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.08em', border: '3px solid black', boxShadow: '5px 5px 0 black' }}
                    onClick={() => setSection('галерея')}
                  >
                    <span className="flex items-center gap-2"><Icon name="Users" size={16} />Галерея героев</span>
                  </button>
                  <button
                    className="px-6 py-3 font-black text-sm transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
                    style={{ background: 'white', color: 'var(--comic-black)', fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.08em', border: '3px solid black', boxShadow: '5px 5px 0 black' }}
                    onClick={() => setSection('история')}
                  >
                    <span className="flex items-center gap-2"><Icon name="BookOpen" size={16} />Истории</span>
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="grid grid-cols-2 gap-3 slide-up delay-200">
                  {heroes.slice(0, 4).map((hero, i) => (
                    <div
                      key={hero.id}
                      className="hero-card comic-border-heavy overflow-hidden cursor-pointer"
                      style={{ width: '130px', height: '160px', borderRadius: '4px', animationDelay: `${0.1 * i + 0.3}s`, animationFillMode: 'both' }}
                      onClick={() => setSelectedHero(hero)}
                    >
                      <div className="relative w-full h-full halftone" style={{ background: hero.bgColor }}>
                        <img src={hero.image} alt={hero.name} className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'multiply' }} />
                        <div className="absolute bottom-0 left-0 right-0 py-1 px-2 text-center" style={{ background: hero.color }}>
                          <span className="pop-text text-white" style={{ fontSize: '11px' }}>{hero.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 opacity-80 bounce-in delay-500">
              <div className="pop-text-lg text-6xl text-yellow-300" style={{ transform: 'rotate(-8deg)', textShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}>
                КАБ!
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="border-y-4 border-black" style={{ background: 'var(--comic-black)' }}>
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-around items-center">
              {[
                { num: '4', label: 'Героя' },
                { num: '12+', label: 'Злодеев' },
                { num: '3', label: 'Года' },
                { num: '∞', label: 'Побед' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="pop-text text-3xl" style={{ color: 'var(--comic-yellow)' }}>{stat.num}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards preview */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-10 border-2 border-black" style={{ background: 'var(--comic-red)' }} />
              <h2 className="pop-text text-3xl">Топ Герои</h2>
              <div className="flex-1 border-t-2 border-black border-dashed" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroes.map((hero, i) => (
                <HeroCard key={hero.id} hero={hero} onClick={setSelectedHero} animDelay={delays[i]} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === ГАЛЕРЕЯ === */}
      {section === 'галерея' && (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-10 border-2 border-black" style={{ background: 'var(--comic-blue)' }} />
            <h2 className="pop-text text-3xl">Галерея Героев</h2>
          </div>

          <div className="mb-8 p-4 bg-white comic-border-heavy" style={{ borderRadius: '4px' }}>
            <div className="relative mb-4">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Поиск по имени, силе или характеристике..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border-2 border-black bg-yellow-50 text-sm focus:outline-none focus:bg-yellow-100 font-medium"
                style={{ borderRadius: '2px', fontFamily: 'Rubik' }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {POWER_FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="tag-badge transition-all"
                  style={{ background: activeFilter === f ? 'var(--comic-black)' : 'white', color: activeFilter === f ? 'var(--comic-yellow)' : 'var(--comic-black)', cursor: 'pointer' }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 comic-border-heavy bg-white" style={{ borderRadius: '4px' }}>
              <div className="text-5xl mb-4">🦸</div>
              <div className="pop-text text-xl mb-2">Герой не найден!</div>
              <p className="text-gray-500 text-sm">Попробуй другое имя или характеристику</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((hero, i) => (
                <HeroCard key={hero.id} hero={hero} onClick={setSelectedHero} animDelay={delays[i % 4]} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* === ИСТОРИЯ === */}
      {section === 'история' && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-10 border-2 border-black" style={{ background: 'var(--comic-orange)' }} />
            <h2 className="pop-text text-3xl">Истории Происхождения</h2>
          </div>

          <div className="space-y-8">
            {heroes.map((hero, i) => (
              <div key={hero.id} className={`bg-white comic-border-xl slide-up ${delays[i]}`} style={{ borderRadius: '4px', overflow: 'hidden' }}>
                <div className="flex items-center gap-4 p-4 border-b-4 border-black halftone" style={{ background: hero.bgColor }}>
                  <img src={hero.image} alt={hero.name} className="w-20 h-20 object-cover object-top comic-border" style={{ borderRadius: '3px', mixBlendMode: 'multiply', flexShrink: 0 }} />
                  <div>
                    <div className="inline-block tag-badge mb-2" style={{ background: hero.color, color: 'white' }}>{hero.origin}</div>
                    <div className="pop-text text-2xl">{hero.name}</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Oswald' }}>{hero.alias} · С {hero.firstAppearance} г.</div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="speech-bubble p-4 mb-4">
                    <p className="text-sm leading-relaxed text-gray-800">{hero.story}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hero.tags.map(tag => (
                      <span key={tag} className="tag-badge" style={{ background: hero.color, color: 'white' }}>{tag}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(hero.stats).map(([key, val]) => (
                      <div key={key} className="text-center p-2 border-2 border-black" style={{ background: '#F9F9F9' }}>
                        <div className="hero-stat text-lg font-black" style={{ color: hero.color }}>{val}</div>
                        <div className="hero-stat text-[9px] text-gray-500">
                          {key === 'strength' ? 'СИЛА' : key === 'speed' ? 'СКОР.' : key === 'intelligence' ? 'ИНТ.' : 'ВЫНОСЛ.'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full py-3 font-black text-sm border-t-4 border-black transition-all hover:brightness-110"
                  style={{ background: hero.color, color: 'white', fontFamily: 'Oswald', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  onClick={() => setSelectedHero(hero)}
                >
                  Подробнее о {hero.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16 py-6" style={{ background: 'var(--comic-black)' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="pop-text text-lg" style={{ color: 'var(--comic-yellow)' }}>МЕГАГЕРОИ</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Oswald' }}>
            © 2024 МЕГАГЕРОИ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>
        </div>
      </footer>

      <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
    </div>
  );
}
