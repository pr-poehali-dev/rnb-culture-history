import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/20/201127-916008066_large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight animate-fade-in text-white drop-shadow-2xl">
            Исторический контекст<br />культуры R&B
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90 mb-12 animate-fade-in drop-shadow-lg">
            От блюзовых корней 1940-х до цифровой эры The Weeknd
          </p>
          
          <button
            onClick={toggleMute}
            className="absolute top-8 right-8 p-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all"
            aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
          >
            <Icon name={isMuted ? 'VolumeX' : 'Volume2'} size={24} className="text-white" />
          </button>

          {showContent && (
            <button
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="absolute bottom-12 animate-bounce"
              aria-label="Прокрутить вниз"
            >
              <Icon name="ChevronDown" size={48} className="text-white drop-shadow-lg" />
            </button>
          )}
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="mb-20 opacity-0"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Термин "ритм-н-блюз" (R&B) прошел удивительный путь развития. Зародившись в 1940-х, он существует и поныне, но сегодня под ним понимают совершенно разную музыку. Уже в самом начале его существования проявилась двойственность названия.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              В узком смысле он обозначал более энергичный и современный блюз, однако некоторые критики использовали его для обозначения всей музыки, созданной афроамериканцами. В результате, значение термина неоднократно трансформировалось: от гитарного блюза до лирических композиций с оркестровым сопровождением.
            </p>

            <div className="my-12 border-l-2 border-primary pl-6 py-2">
              <p className="text-xl italic font-display text-primary-foreground">
                Одним понятием объединяли музыкантов, охватывающих огромный диапазон: от раннего рок-н-ролла до The Weeknd, от блюзовых гитаристов до Джанет Джексон.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Поэтому говорить о ритм-н-блюзе как о едином жанре не имеет смысла. Вместо этого, давайте проследим, как менялось его значение с момента появления.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
            Истоки: урбанизация блюза
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Ритм-н-блюз возник как логичное продолжение эволюции и урбанизации блюза. Его традиционная форма исполнялась одиночками-бедняками с акустическими гитарами, которые либо вели бродячий образ жизни, либо жили в сельской местности.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              К середине XX века афроамериканцы стали чаще переезжать в города в поисках работы, где требовались другие формы развлечений. Городская публика, привыкшая к джазу и свингу, любила танцевать, а для этого меланхоличный, минималистичный блюз подходил не очень хорошо.
            </p>

            <Card className="bg-muted border-primary/20 p-6 my-8">
              <h3 className="font-display text-2xl font-bold mb-4">Джамп-блюз</h3>
              <p className="text-base leading-relaxed">
                Основным предшественником ритм-н-блюза был джамп-блюз – жанр на стыке джаза, блюза и буги-вуги. Его отличал яркий, динамичный и танцевальный звук, напористые партии саксофона и энергичные гитарные риффы.
              </p>
              <p className="text-sm text-muted-foreground mt-4 font-sans">
                Ключевые исполнители: Луи Джордан, Рой Браун, Лайонел Хэмптон
              </p>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
            Классический R&B: предвестник рок-н-ролла
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Самыми яркими особенностями R&B были акцентированные бэкбиты (удары барабанов на вторую и четвертую доли), мелодии в мажоре, простые аккордовые структуры и повторяющиеся инструментальные пассажи.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Типичный состав группы включал солиста (или ведущий инструмент) в сопровождении ритм-секции, духовых инструментов и бэк-вокалисток. Инструментарий был почти идентичен джаз-бэндам эпохи свинга: бас, барабаны, фортепиано, гитара, саксофон и труба.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <Card className="bg-muted/50 border-primary/10 p-5">
                <h4 className="font-display text-lg font-bold mb-2">1949</h4>
                <p className="text-sm">Billboard переименовывает "Harlem Hit Parade" в "Billboard Rhythm & Blues"</p>
              </Card>
              <Card className="bg-muted/50 border-primary/10 p-5">
                <h4 className="font-display text-lg font-bold mb-2">Night Train</h4>
                <p className="text-sm">Джимми Форрест создает хит, объединивший джаз и R&B</p>
              </Card>
              <Card className="bg-muted/50 border-primary/10 p-5">
                <h4 className="font-display text-lg font-bold mb-2">The Huckle-Buck</h4>
                <p className="text-sm">Пол Уильямс задает стандарт энергичных выступлений</p>
              </Card>
              <Card className="bg-muted/50 border-primary/10 p-5">
                <h4 className="font-display text-lg font-bold mb-2">Rocket 88</h4>
                <p className="text-sm">Айк Тёрнер, 1951 – агрессивный R&B с искаженной гитарой</p>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
            Британский ритм-н-блюз
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              В конце 1950-х годов американский блюз завоевал невероятную популярность в Великобритании, оказав огромное влияние практически на всех молодых музыкантов. Ситуация изменилась благодаря группе Blues Incorporated, созданной Алексисом Корнером.
            </p>

            <div className="my-12 border-l-2 border-primary pl-6 py-2">
              <p className="text-xl italic font-display text-primary-foreground">
                Из Blues Incorporated вышли участники The Rolling Stones, The Yardbirds, The Kinks и Manfred Mann. Корнер также был наставником Джимми Пейджа из Led Zeppelin.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Британский ритм-н-блюз был более гитарным и энергичным, чем американский, а риффы часто упрощались. Многие R&B-музыканты начинали с игры скиффла – жанра, отличавшегося нарочитой любительщиной и дешевыми инструментами. В скиффле ценилась прежде всего энергия.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
            1960-е: от R&B к соулу
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              К 1960-м годам гитарный подвид R&B трансформировался в рок, а его менее энергичный собрат развивался отдельно. В это десятилетие появился соул – жанр, произошедший от R&B, но лишь частично. На него оказал влияние госпел, особенно в вокальной манере.
            </p>

            <Card className="bg-primary/10 border-primary/30 p-6 my-8">
              <h3 className="font-display text-2xl font-bold mb-4">Техника Call-and-Response</h3>
              <p className="text-base leading-relaxed">
                В "Bring It On Home to Me" Сэма Кука используется техника "вопрос-ответ", заимствованная из религиозных песнопений, куда она пришла из африканской народной музыки. Кук как бы ведет диалог с подпевкой.
              </p>
            </Card>

            <p className="text-lg leading-relaxed mb-6">
              "Stand by Me" Бена Кинга подчеркивает, как в R&B акцент сместился в сторону вокала. Скрипки и виолончели стали визитной карточкой соула, а вокал звучал сдержанно, но передавал целую гамму чувств.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
            1980-е и далее: электронная революция
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Появление хип-хопа и новых технологий звукозаписи радикально изменили R&B. Продюсеры осознали, что для создания трека больше не нужен оркестр; достаточно одного-двух умелых специалистов, работающих с синтезаторами, драм-машинами и семплерами.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              R&B стали называть любую афроамериканскую поп-музыку, которая практически утратила связь с джазовыми и блюзовыми корнями. Одной из самых ярких звезд 1980-х была Джанет Джексон, чьи продюсеры переосмыслили старые жанры в полностью электронном формате.
            </p>

            <div className="my-12 border-l-2 border-primary pl-6 py-2">
              <p className="text-xl italic font-display text-primary-foreground">
                R&B и хип-хоп тесно переплелись. R&B-певцы исполняли вокал в рэп-композициях, сами читали рэп, а рэперы экспериментировали с пением.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        <section
          ref={(el) => (sectionsRef.current[6] = el)}
          className="mb-20 opacity-0"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-primary">
            Яркие представители современного R&B
          </h2>

          <div className="space-y-12">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-bold mb-2">Cassie</h3>
                  <p className="font-sans text-sm text-primary mb-4">Me&U (2006)</p>
                  <p className="text-base leading-relaxed mb-4">
                    Очень минималистичная и суперпопулярная песня. То самое rich&beautiful, которое все так ненавидели в те годы. Кэсси совершенно не умеет петь, но она фантастически красива, а автор трека, музыкальный продюсер Райан Лесли — фантастически талантлив.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Холодный и нежный бит очень идёт Кэсси, голос обработан так, что звучит почти как стеклянная гармоника. Отсутствие голоса здесь вообще не важно, всё скрадывается звуком.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 p-8">
              <h3 className="font-display text-3xl font-bold mb-2">Райан Лесли</h3>
              <p className="font-sans text-sm text-primary mb-4">Продюсер, красавец, джентльмен</p>
              <p className="text-base leading-relaxed mb-4">
                Райан называет себя "чёрным Моцартом" — неплохие амбиции, не правда ли? В 14 лет ему удалось сдать выпускные экзамены в школе на высший балл, а уже в 15 он поступил в один из университетов Лиги Плюща.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Музыка Райана очень элегантна, красива и звучит по-джентльменски. Это не игра в джентльмена, как у Ne-Yo. Это что-то очень естественное: нео-джазовые сочетания аккордов пианино, воодушевлённое отношение к женщине, никакой грязи.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-display font-bold mb-2">Diamond Girl (2008)</h4>
                  <p className="text-sm">Свежий бит и энергичная подача — почти как у чёрного проповедника</p>
                </div>
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-display font-bold mb-2">Irina</h4>
                  <p className="text-sm">Песня посвящена русской девушке, языка которой Райан не знает</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 p-8">
              <h3 className="font-display text-3xl font-bold mb-2">The Weeknd</h3>
              <p className="font-sans text-sm text-primary mb-4">Альтернативный R&B</p>
              <p className="text-base leading-relaxed mb-4">
                Один из самых популярных представителей альтернативного R&B. "The Hills" был типичным представителем этого направления: "трещотка" драм-машины Roland TR-808, как в хип-хопе, готическая и сексуальная атмосфера, высокий голос, индустриальные эффекты.
              </p>
              <p className="text-base leading-relaxed">
                Еще более мрачными были ранние работы Викенда, например, "House of Balloons / Glass Table Girls", где электронный дисторшн накладывался на семпл из готик-рок-песни группы Siouxsie and the Banshees.
              </p>
            </Card>
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-primary/20 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            История R&B продолжается
          </p>
        </footer>
      </article>
    </div>
  );
};

export default Index;