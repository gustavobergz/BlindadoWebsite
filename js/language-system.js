
// Sistema de Troca de Linguagens
class LanguageSystem {
  constructor() {
    this.currentLanguage = 'pt';
    this.translations = {
      pt: {
        'nav-inicio': 'Início',
        'nav-sobre': 'Sobre mim',
        'nav-tutoriais': 'Tutoriais',
        'nav-redes': 'Redes Sociais',
        'change-language': 'Change Language',
        'index-title': 'Página Inicial',
        'index-hello': 'Olá!',
        'index-question': 'O que você está procurando?',
        'btn-sobre': 'Sobre mim',
        'btn-tutoriais': 'Tutoriais',
        'btn-redes': 'Redes Sociais',
        'tutorial-1': 'Como baixar e configurar o melhor cronômetro para PC',
        'tutorial-2': 'Como ter chaves e moedas infinitas no Subway Surfers',
        'tutorial-3': 'Como jogar Subway Surfers no PC e utilizar o WASD',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia': `<strong>Blindado</strong> é um personagem/apelido criado originalmente por <span class="destaque">Gustavo Berg</span> em meados de 2018,
a época onde Blindado jogava Fortnite regularmente, até 2022. No início de 2022, Blindado descobriu uma tendência crescente:
um desafio em que os jogadores de <span class="destaque">Subway Surfers</span> tentavam jogar o máximo de tempo possível
sem coletar moedas. No começo, ele achou a ideia interessante, mas não se sentiu motivado a tentar de imediato.
<br><br>
Nos dias seguintes, a popularidade do desafio cresceu rapidamente, ganhando repercussão mundial.
Mesmo assim, Blindado continuou ignorando... até que um brasileiro, conhecido como <span class="destaque">bl4ckz_br</span>,
conquistou o recorde mundial pela primeira vez.
<br><br>
Ao descobrir que um conterrâneo havia alcançado o topo, Blindado se sentiu inspirado. No dia 26 de julho de 2022,
ele decidiu tentar o desafio pela primeira vez. Seu primeiro recorde foi de 2 minutos e 7 segundos,
o que já o colocava oficialmente entre os 500 melhores do mundo.
<br><br>
A partir desse momento, Blindado ficou viciado no desafio. Quase toda semana desde então,
ele conseguia superar seu próprio tempo, evoluindo constantemente e se firmando como um dos principais nomes da
comunidade No Coins.`,
        'sobre-experiencias': 'EXPERIÊNCIAS',
        'sobre-recordes': 'RECORDES ATUAIS',
        'sobre-exp-1': '4ª pessoa com +10min no coin',
        'sobre-exp-2': '8ª pessoa com +30min no coin',
        'sobre-exp-3': '2ª pessoa com +1h no coin',
        'sobre-exp-4': '20 partidas com +1h',
        'sobre-exp-5': '1 partida com +2h',
        'sobre-record-1': '2h10min (Web) - Top 3',
        'sobre-record-2': '57min (Emulador) - Top 1',
        'sobre-link-recordes': 'Ver todos os recordes',
        'footer-rights': '© 2025 Todos os Direitos Reservados',
      },
      en: {
        'nav-inicio': 'Home',
        'nav-sobre': 'About me',
        'nav-tutoriais': 'Tutorials',
        'nav-redes': 'Social Media',
        'change-language': 'Change Language',
        'index-title': 'Home Page',
        'index-hello': 'Hello!',
        'index-question': 'What are you looking for?',
        'btn-sobre': 'About me',
        'btn-tutoriais': 'Tutorials',
        'btn-redes': 'Social Media',
        'tutorial-1': 'How to download and configure the best stopwatch for PC',
        'tutorial-2': 'How to get unlimited keys and coins in Subway Surfers',
        'tutorial-3': 'How to play Subway Surfers on PC and use WASD',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia': `<strong>Blindado</strong> is a character/nickname originally created by <span class="destaque">Gustavo Berg</span> around mid-2018,
a time when Blindado played Fortnite regularly until 2022. In early 2022, Blindado discovered a growing trend:
a challenge where <span class="destaque">Subway Surfers</span> players tried to play as long as possible without collecting coins.
At first, he found the idea interesting but wasn’t motivated to try it right away.
<br><br>
In the following days, the challenge quickly grew in popularity, gaining worldwide attention.
Still, Blindado continued to ignore it... until a Brazilian player, known as <span class="destaque">bl4ckz_br</span>,
achieved the world record for the first time.
<br><br>
Upon learning that a fellow countryman had reached the top, Blindado felt inspired. On July 26, 2022,
he decided to attempt the challenge for the first time. His first record was 2 minutes and 7 seconds,
which already placed him officially among the world’s top 500 players.
<br><br>
From that moment on, Blindado became addicted to the challenge. Almost every week since then,
he managed to beat his own time, constantly improving and establishing himself as one of the leading names in the
No Coins community.`,
        'sobre-experiencias': 'EXPERIENCES',
        'sobre-recordes': 'CURRENT RECORDS',
        'sobre-exp-1': '4th person with +10min no coin',
        'sobre-exp-2': '8th person with +30min no coin',
        'sobre-exp-3': '2nd person with +1h no coin',
        'sobre-exp-4': '20 matches with +1h',
        'sobre-exp-5': '1 match with +2h',
        'sobre-record-1': '2h10min (Web) - Top 3',
        'sobre-record-2': '57min (Emulator) - Top 1',
        'sobre-link-recordes': 'View all records',
        'footer-rights': '© 2025 All Rights Reserved',
      },
      es: {
        'nav-inicio': 'Inicio',
        'nav-sobre': 'Sobre mí',
        'nav-tutoriais': 'Tutoriales',
        'nav-redes': 'Redes Sociales',
        'change-language': 'Cambiar Idioma',
        'index-title': 'Página de Inicio',
        'index-hello': '¡Hola!',
        'index-question': '¿Qué estás buscando?',
        'btn-sobre': 'Sobre mí',
        'btn-tutoriais': 'Tutoriales',
        'btn-redes': 'Redes Sociales',
        'tutorial-1': 'Cómo descargar y configurar el mejor cronómetro para PC',
        'tutorial-2': 'Cómo tener llaves y monedas infinitas en Subway Surfers',
        'tutorial-3': 'Cómo jugar Subway Surfers en PC y usar WASD',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia': `<strong>Blindado</strong> es un personaje/apodo creado originalmente por <span class="destaque">Gustavo Berg</span> a mediados de 2018,
cuando jugaba Fortnite regularmente, hasta 2022. A principios de 2022, Blindado descubrió una tendencia creciente:
un desafío donde los jugadores de <span class="destaque">Subway Surfers</span> intentaban jugar el mayor tiempo posible sin recoger monedas.
Al principio le pareció interesante, pero no se sintió motivado a intentarlo de inmediato.
<br><br>
En los días siguientes, el desafío se volvió popular rápidamente, ganando atención mundial.
Aun así, Blindado lo ignoró... hasta que un brasileño conocido como <span class="destaque">bl4ckz_br</span>
alcanzó por primera vez el récord mundial.
<br><br>
Al saber que un compatriota había llegado a la cima, Blindado se sintió inspirado. El 26 de julio de 2022,
decidió intentar el desafío por primera vez. Su primer récord fue de 2 minutos y 7 segundos,
lo que ya lo colocaba oficialmente entre los 500 mejores del mundo.
<br><br>
Desde ese momento, Blindado se volvió adicto al desafío. Casi todas las semanas desde entonces,
logró superar su propio tiempo, mejorando constantemente y consolidándose como uno de los principales nombres de la
comunidad No Coins.`,
        'sobre-experiencias': 'EXPERIENCIAS',
        'sobre-recordes': 'RÉCORDS ACTUALES',
        'sobre-exp-1': '4ª persona con +10min sin moneda',
        'sobre-exp-2': '8ª persona con +30min sin moneda',
        'sobre-exp-3': '2ª persona con +1h sin moneda',
        'sobre-exp-4': '20 partidas con +1h',
        'sobre-exp-5': '1 partida con +2h',
        'sobre-record-1': '2h10min (Web) - Top 3',
        'sobre-record-2': '57min (Emulador) - Top 1',
        'sobre-link-recordes': 'Ver todos los récords',
        'footer-rights': '© 2025 Todos los Derechos Reservados',
      },
      ru: {
        'nav-inicio': 'Главная',
        'nav-sobre': 'Обо мне',
        'nav-tutoriais': 'Уроки',
        'nav-redes': 'Соцсети',
        'change-language': 'Сменить язык',
        'index-title': 'Главная страница',
        'index-hello': 'Привет!',
        'index-question': 'Что вы ищете?',
        'btn-sobre': 'Обо мне',
        'btn-tutoriais': 'Уроки',
        'btn-redes': 'Соцсети',
        'tutorial-1': 'Как скачать и настроить лучший секундомер для ПК',
        'tutorial-2': 'Как получить бесконечные ключи и монеты в Subway Surfers',
        'tutorial-3': 'Как играть в Subway Surfers на ПК и использовать WASD',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia': `<strong>Blindado</strong> — это персонаж/псевдоним, изначально созданный <span class="destaque">Густаво Бергом</span> в середине 2018 года,
в период, когда Blindado регулярно играл в Fortnite до 2022 года. В начале 2022 года он открыл для себя растущий тренд —
вызов, в котором игроки <span class="destaque">Subway Surfers</span> пытались играть как можно дольше, не собирая монеты.
Сначала идея показалась ему интересной, но он не был мотивирован попробовать сразу.
<br><br>
В последующие дни популярность вызова резко возросла, он стал известен по всему миру.
Тем не менее, Blindado продолжал игнорировать его... пока бразилец по имени <span class="destaque">bl4ckz_br</span>
не установил мировой рекорд.
<br><br>
Узнав, что соотечественник достиг вершины, Blindado вдохновился. 26 июля 2022 года
он решил попробовать вызов впервые. Его первый рекорд составил 2 минуты и 7 секунд,
что официально поместило его в топ-500 лучших в мире.
<br><br>
С тех пор Blindado стал зависим от этого вызова. Почти каждую неделю он улучшал своё время,
постоянно развивался и стал одним из ведущих участников сообщества No Coins.`,
        'sobre-experiencias': 'ОПЫТ',
        'sobre-recordes': 'ТЕКУЩИЕ РЕКОРДЫ',
        'sobre-exp-1': '4-й с +10 мин без монет',
        'sobre-exp-2': '8-й с +30 мин без монет',
        'sobre-exp-3': '2-й с +1ч без монет',
        'sobre-exp-4': '20 игр с +1ч',
        'sobre-exp-5': '1 игра с +2ч',
        'sobre-record-1': '2ч10мин (Web) - Топ 3',
        'sobre-record-2': '57мин (Эмулятор) - Топ 1',
        'sobre-link-recordes': 'Смотреть все рекорды',
        'footer-rights': '© 2025 Все права защищены',
      },
      de: {
        'nav-inicio': 'Startseite',
        'nav-sobre': 'Über mich',
        'nav-tutoriais': 'Tutorials',
        'nav-redes': 'Soziale Medien',
        'change-language': 'Sprache ändern',
        'index-title': 'Startseite',
        'index-hello': 'Hallo!',
        'index-question': 'Wonach suchst du?',
        'btn-sobre': 'Über mich',
        'btn-tutoriais': 'Tutorials',
        'btn-redes': 'Soziale Medien',
        'tutorial-1': 'Wie man den besten Timer für den PC herunterlädt und konfiguriert',
        'tutorial-2': 'Wie man unbegrenzt Schlüssel und Münzen in Subway Surfers bekommt',
        'tutorial-3': 'Wie man Subway Surfers auf dem PC mit WASD spielt',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia':  `<strong>Blindado</strong> ist ein Charakter/Spitzname, der ursprünglich um Mitte 2018 von <span class="destaque">Gustavo Berg</span> geschaffen wurde – zu einer Zeit, als Blindado regelmäßig Fortnite spielte, bis 2022. Anfang 2022 entdeckte Blindado einen wachsenden Trend: eine Challenge, bei der Spieler von <span class="destaque">Subway Surfers</span> versuchten, so lange wie möglich zu spielen, ohne Münzen zu sammeln. Zunächst fand er die Idee interessant, war aber nicht sofort motiviert, es auszuprobieren.
<br><br>
In den folgenden Tagen nahm die Popularität der Challenge schnell zu und erlangte weltweite Aufmerksamkeit. Trotzdem ignorierte Blindado sie weiterhin... bis ein Brasilianer namens <span class="destaque">bl4ckz_br</span> erstmals den Weltrekord aufstellte.
<br><br>
Als Blindado erfuhr, dass ein Landsmann an die Spitze gekommen war, fühlte er sich inspiriert. Am 26. Juli 2022 beschloss er, die Challenge zum ersten Mal zu versuchen. Sein erster Rekord lag bei 2 Minuten und 7 Sekunden – was ihn offiziell unter die Top‑500 der Welt brachte.
<br><br>
Von diesem Moment an wurde Blindado süchtig nach der Challenge. Fast jede Woche seitdem übertraf er seine eigene Zeit, verbesserte sich ständig und etablierte sich als einer der führenden Namen in der No‑Coins‑Community.`,
        'sobre-experiencias': 'ERFAHRUNGEN',
        'sobre-recordes': 'AKTUELLE REKORDE',
        'sobre-exp-1': '4. Person mit +10 min ohne Münzen',
        'sobre-exp-2': '8. Person mit +30 min ohne Münzen',
        'sobre-exp-3': '2. Person mit +1 h ohne Münzen',
        'sobre-exp-4': '20 Spiele mit +1 h',
        'sobre-exp-5': '1 Spiel mit +2 h',
        'sobre-record-1': '2h10min (Web) – Top 3',
        'sobre-record-2': '57 min (Emulator) – Platz 1',
        'sobre-link-recordes': 'Alle Rekorde anzeigen',
        'footer-rights': '© 2025 Alle Rechte vorbehalten'
      },
      zh: {
        'nav-inicio': '首页',
        'nav-sobre': '关于我',
        'nav-tutoriais': '教程',
        'nav-redes': '社交媒体',
        'change-language': '更改语言',
        'index-title': '首页',
        'index-hello': '你好！',
        'index-question': '你在寻找什么？',
        'btn-sobre': '关于我',
        'btn-tutoriais': '教程',
        'btn-redes': '社交媒体',
        'tutorial-1': '如何下载和配置最好的电脑计时器',
        'tutorial-2': '如何在Subway Surfers中获得无限钥匙和金币',
        'tutorial-3': '如何在电脑上玩Subway Surfers并使用WASD控制',
        'sobre-title': 'Blindado',
        'sobre-heading': 'BLINDADO',
        'sobre-historia': `<strong>Blindado</strong> 是由 <span class="destaque">Gustavo Berg</span> 于 2018 年中左右 创作的角色/昵称，当时他一直玩 Fortnite，直到 2022 年。2022 年初，Blindado 发现一个日益流行的趋势：一个挑战，<span class="destaque">Subway Surfers</span> 玩家尝试尽可能长时间玩，不收集金币。起初，他觉得这个想法很有趣，但没有立即尝试的动力。
<br><br>
接下来的几天里，这个挑战迅速走红，获得全球关注。尽管如此，Blindado 仍然忽略它……直到一位名叫 <span class="destaque">bl4ckz_br</span> 的巴西选手首次打破世界纪录。
<br><br>
得知一位同胞登顶后，Blindado 深受启发。2022 年 7 月 26 日，他决定首次挑战该记录。他的第一次成绩是 2 分 7 秒，正式跻身全球前 500。
<br><br>
从那一刻起，Blindado 对挑战上瘾。自那以后几乎每周，他都打破自己的记录，不断进步，逐渐成为 No Coins 社区中最重要的名字之一。`,
        'sobre-experiencias': '经验',
        'sobre-recordes': '当前记录',
        'sobre-exp-1': '第4个达到 +10 分钟无金币的人',
        'sobre-exp-2': '第8个达到 +30 分钟无金币的人',
        'sobre-exp-3': '第2个达到 +1 小时无金币的人',
        'sobre-exp-4': '20 场比赛超过 1 小时',
        'sobre-exp-5': '1 场比赛超过 2 小时',
        'sobre-record-1': '2 小时 10 分 (网页) – 前 3 名',
        'sobre-record-2': '57 分 (模拟器) – 第 1 名',
        'sobre-link-recordes': '查看所有记录',
        'footer-rights': '© 2025 版权所有'
      }
    };
    this.init();
  }

  init() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    const sel = document.getElementById('language');
    if (sel) {
      sel.value = this.currentLanguage;
      sel.addEventListener('change', e => this.changeLanguage(e.target.value));
    }
    document.documentElement.lang = this.getLangCode(this.currentLanguage);
    this.applyTranslations();
  }

  changeLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = this.getLangCode(lang);
    this.applyTranslations();
  }

  getLangCode(lang) {
    return { pt: 'pt-BR', en: 'en-US', es: 'es-ES', ru: 'ru-RU', de: 'de-DE', zh: 'zh-CN' }[lang] || 'pt-BR';
  }

  applyTranslations() {
    const trans = this.translations[this.currentLanguage] || {};
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      if (!trans[key]) return;
      if (key === 'sobre-historia') {
        el.innerHTML = trans[key];
      } else if (el.tagName === 'TITLE') {
        el.textContent = trans[key];
      } else {
        el.textContent = trans[key];
      }
    });
  }
}

// Inicialização
new LanguageSystem();
