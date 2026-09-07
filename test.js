/* Zerdeli — движок диагностических тестов.
   Стили лежат внутри этого же файла — отдельный .css не нужен. */
(function(){var s=document.createElement("style");s.textContent="/* Zerdeli — стили движка тестов. Гамма совпадает с лендингом диагностики. */\n#zd-test{\n  --ground:#FAFAF5;--surface:#FFF;--surface-2:#F1F2E9;--line:#E2E4D6;\n  --ink:#191C12;--ink-2:#4A4D40;--muted:#6C6D6D;\n  --lime:#ACDF08;--lime-deep:#6F8F05;--lime-wash:#F0F8D2;\n  --copper:#B07446;--blue:#8BA5EF;--on-lime:#161A0C;\n  --r:16px;\n  font-family:'Onest','Noto Sans',system-ui,-apple-system,'Segoe UI',sans-serif;\n  color:var(--ink);font-size:17px;line-height:1.55;\n  max-width:720px;margin:0 auto;padding:20px 16px 60px;\n}\n@media (prefers-color-scheme:dark){\n  #zd-test:not([data-theme=light]){\n    --ground:#12140D;--surface:#1B1E14;--surface-2:#22261A;--line:#333929;\n    --ink:#EFF1E6;--ink-2:#C3C7B6;--muted:#9EA096;--lime-deep:#C7EF4E;--lime-wash:#25300A;\n    --copper:#D49A6B;--blue:#A6B9F4;\n  }\n}\n#zd-test *{box-sizing:border-box}\n#zd-test .zd-card{background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:clamp(20px,4vw,32px);box-shadow:0 12px 32px -18px rgba(0,0,0,.35)}\n#zd-test .zd-center{display:grid;place-items:center;min-height:200px}\n#zd-test .zd-h1{font-family:'Unbounded','Onest',sans-serif;font-weight:800;font-size:clamp(22px,4.5vw,30px);line-height:1.15;letter-spacing:-.02em;margin:0 0 6px}\n#zd-test .zd-sub{color:var(--muted);font-size:15px;margin:0}\n#zd-test .zd-head{font-size:13px;color:var(--muted);margin-bottom:14px;display:flex;align-items:center;gap:8px}\n#zd-test .zd-badge{background:var(--lime-wash);color:var(--lime-deep);font-weight:700;font-size:12px;padding:4px 10px;border-radius:999px}\n\n#zd-test .zd-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:52px;margin-top:14px;\n  padding:14px 22px;border:1px solid transparent;border-radius:999px;background:var(--lime);color:var(--on-lime);\n  font:inherit;font-weight:600;cursor:pointer;text-decoration:none;transition:transform .1s ease,background .15s ease}\n#zd-test .zd-btn:active{transform:translateY(1px)}\n#zd-test .zd-btn:hover{background:#BCEE1C}\n#zd-test .zd-ghost{background:transparent;border-color:var(--line);color:var(--ink)}\n#zd-test .zd-ghost:hover{background:var(--surface-2)}\n#zd-test .zd-nav{display:flex;gap:10px}\n#zd-test .zd-nav .zd-btn{flex:1}\n\n#zd-test .zd-field{margin-top:16px;display:flex;flex-direction:column;gap:6px}\n#zd-test .zd-field label{font-size:13px;font-weight:600;color:var(--ink-2)}\n#zd-test .zd-field input{font:inherit;font-size:16px;min-height:50px;padding:12px 15px;border:1px solid var(--line);\n  border-radius:10px;background:var(--surface);color:var(--ink);width:100%}\n#zd-test .zd-field input:focus{outline:none;border-color:var(--lime-deep);box-shadow:0 0 0 3px var(--lime-wash)}\n#zd-test .zd-err{display:none;font-size:12.5px;color:var(--copper)}\n\n#zd-test .zd-list{display:flex;flex-direction:column;gap:10px;margin-top:18px}\n#zd-test .zd-pick{display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;width:100%;\n  padding:16px 18px;border:1px solid var(--line);border-radius:var(--r);background:var(--surface-2);\n  font:inherit;color:inherit;cursor:pointer}\n#zd-test .zd-pick:hover{border-color:var(--lime-deep)}\n#zd-test .zd-pick-name{font-weight:600}\n#zd-test .zd-pick-meta{font-size:13px;color:var(--muted)}\n#zd-test .zd-tag{margin-top:6px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;\n  color:var(--copper);background:rgba(176,116,70,.12);padding:3px 9px;border-radius:999px}\n\n#zd-test .zd-bar{height:5px;border-radius:999px;background:var(--surface-2);overflow:hidden;margin-bottom:18px}\n#zd-test .zd-bar span{display:block;height:100%;background:var(--lime);transition:width .3s ease}\n#zd-test .zd-qmeta{font-size:12.5px;color:var(--muted);display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:10px}\n#zd-test .zd-topic{background:var(--surface-2);padding:4px 10px;border-radius:999px;color:var(--ink-2)}\n#zd-test .zd-passage{background:var(--surface-2);border:1px solid var(--line);border-radius:12px;\n  padding:14px 16px;margin-bottom:16px;font-size:15px;line-height:1.6;color:var(--ink-2);\n  white-space:pre-line;max-height:40vh;overflow-y:auto}\n#zd-test .zd-qtext{font-size:18px;line-height:1.45;font-weight:500;white-space:pre-line}\n#zd-test .zd-img{display:block;max-width:100%;margin:16px 0 0;border-radius:12px;border:1px solid var(--line);background:#fff}\n\n#zd-test .zd-opts{display:flex;flex-direction:column;gap:9px;margin:18px 0 20px}\n#zd-test .zd-opt{display:flex;align-items:center;gap:12px;width:100%;text-align:left;min-height:52px;\n  padding:12px 16px;border:1px solid var(--line);border-radius:12px;background:var(--surface);\n  font:inherit;color:inherit;cursor:pointer;transition:border-color .12s ease,background .12s ease}\n#zd-test .zd-opt:hover{border-color:var(--ink-2)}\n#zd-test .zd-opt i{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;\n  background:var(--surface-2);color:var(--muted);font-style:normal;font-size:13px;font-weight:700}\n#zd-test .zd-opt.on{border-color:var(--lime);background:var(--lime-wash)}\n#zd-test .zd-opt.on i{background:var(--lime);color:var(--on-lime)}\n#zd-test .zd-block{margin:0 0 4px;border:0;background:transparent}\n#zd-test .zd-opts-letters{flex-direction:row;flex-wrap:wrap;gap:10px}\n#zd-test .zd-opts-letters .zd-opt{width:auto;flex:0 0 auto;min-width:0;justify-content:center;padding:10px 14px}\n#zd-test .zd-opts-letters .zd-opt i{width:30px;height:30px;font-size:15px}\n#zd-test .zd-opts-letters .zd-opt span{display:none}\n#zd-test .zd-opts-img{display:grid;grid-template-columns:1fr 1fr;gap:9px}\n#zd-test .zd-opts-img .zd-opt{flex-direction:column;align-items:flex-start;gap:8px;padding:12px}\n#zd-test .zd-opts-img img{width:100%;height:auto;border-radius:8px;background:#fff}\n#zd-test .zd-hint{min-height:20px;margin-top:10px;font-size:13.5px;color:var(--copper);text-align:center}\n\n#zd-test .zd-score{display:flex;align-items:baseline;gap:12px;margin:18px 0 6px}\n#zd-test .zd-score b{font-family:'Unbounded','Onest',sans-serif;font-size:44px;line-height:1;color:var(--lime-deep)}\n#zd-test .zd-score span{font-size:14px;color:var(--muted)}\n#zd-test .zd-sec{margin-top:22px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}\n#zd-test .zd-rows{display:flex;flex-direction:column;gap:13px;margin-top:12px}\n#zd-test .zd-row-h{display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:5px;font-size:14.5px}\n#zd-test .zd-row-h b{font-size:12.5px;color:var(--muted);font-variant-numeric:tabular-nums}\n#zd-test .zd-track{height:9px;border-radius:999px;background:var(--surface-2);overflow:hidden}\n#zd-test .zd-track i{display:block;height:100%;border-radius:999px;transition:width .8s cubic-bezier(.22,.8,.28,1)}\n#zd-test .zd-track i.ok,#zd-test .zd-legend i.ok{background:var(--lime)}\n#zd-test .zd-track i.mid,#zd-test .zd-legend i.mid{background:var(--blue)}\n#zd-test .zd-track i.gap,#zd-test .zd-legend i.gap{background:var(--copper)}\n#zd-test .zd-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}\n#zd-test .zd-chips span{display:inline-flex;align-items:center;justify-content:center;min-width:46px;\n  padding:8px 12px;border-radius:999px;background:rgba(176,116,70,.12);border:1px solid rgba(176,116,70,.3);\n  color:var(--copper);font-weight:600;font-size:14px;font-variant-numeric:tabular-nums}\n#zd-test .zd-legend{display:flex;flex-wrap:wrap;gap:14px;margin-top:18px;padding-top:14px;border-top:1px solid var(--line);font-size:12.5px;color:var(--muted)}\n#zd-test .zd-legend span{display:inline-flex;align-items:center;gap:7px}\n#zd-test .zd-legend i{width:9px;height:9px;border-radius:50%;display:block}\n\n#zd-test .zd-warn{margin:16px 0;padding:14px 16px;border-radius:12px;background:rgba(176,116,70,.1);\n  border:1px solid rgba(176,116,70,.3);font-size:14.5px;color:var(--ink-2)}\n#zd-test .zd-spin{width:34px;height:34px;border-radius:50%;border:3px solid var(--line);border-top-color:var(--lime);animation:zd-spin .8s linear infinite}\n@keyframes zd-spin{to{transform:rotate(360deg)}}\n@media (prefers-reduced-motion:reduce){#zd-test *{animation-duration:.01ms!important;transition-duration:.01ms!important}}\n";document.head.appendChild(s);})();

/* ============================================================
   Zerdeli — движок диагностических тестов
   Вставляется одним Embed на страницу Webflow /test
   Контент тестов тянется из GitHub через jsDelivr.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. НАСТРОЙКИ — правьте здесь ---------- */
  var CONFIG = {
    // папка, где лежат manifest.json, tests.json и images.json.
    // задаётся одной строкой в эмбеде Webflow
    base: (window.ZERDELI_TESTS_BASE || './'),
    // веб-приложение Google Apps Script, куда падают результаты
    endpoint: (window.ZERDELI_ENDPOINT || 'https://script.google.com/macros/s/AKfycbz9bLV1C3Pd38h1L24uf0hG9xx_RLyvLfXSmOm8Bz2HWsqgzdfD2_DlS2L5Nf5Q-VTN/exec'),
    whatsapp: '77780403999',
    landingRu: '/diagnostika-znaniy',
    landingKz: '/diagnostika-znaniy-kz'
  };

  /* ---------- 2. ТЕКСТЫ ---------- */
  var T = {
    ru: {
      pickTest: 'Выберите тест', pickHint: 'Тесты вашего класса',
      start: 'Начать тест', name: 'Имя и фамилия ученика', phone: 'Телефон родителя (WhatsApp)',
      namePh: 'Как зовут ребёнка', errName: 'Напишите имя', errPhone: 'Проверьте номер: нужно 11 цифр',
      q: 'Вопрос', of: 'из', next: 'Дальше', prev: 'Назад', finish: 'Завершить',
      pickAnswer: 'Выберите вариант ответа',
      resultTitle: 'Карта пробелов', score: 'Верных ответов',
      byTopic: 'По темам программы',
      missed: 'Где потеряны баллы', noMissed: 'Ошибок нет — все ответы верные',
      missedNote: 'Разбора по темам для этого предмета пока нет: темы к вопросам ещё не проставлены. На разборе педагог пройдёт эти вопросы вместе с ребёнком.',
      ok: 'Тема усвоена', mid: 'Требует повторения', gap: 'Пробел',
      cta: 'Записаться на разбор', ctaNote: 'Педагог объяснит причины пробелов и даст план на 3 месяца.',
      saving: 'Сохраняем результат…', saved: 'Результат сохранён',
      notReady: 'Этот тест ещё готовится', notReadyNote: 'Правильные ответы пока не заполнены — результат посчитать нельзя. Напишите нам, подберём тест вручную.',
      loadErr: 'Не удалось загрузить тест', again: 'Обновить страницу',
      resume: 'Продолжить с вопроса', restart: 'Начать заново',
      back: 'К списку предметов',
      pdf: 'Скачать отчёт (PDF)'
    },
    kz: {
      pickTest: 'Тестті таңдаңыз', pickHint: 'Сыныбыңыздың тестері',
      start: 'Тестті бастау', name: 'Оқушының аты-жөні', phone: 'Ата-ананың телефоны (WhatsApp)',
      namePh: 'Баланың аты', errName: 'Атын жазыңыз', errPhone: 'Нөмірді тексеріңіз: 11 сан болуы керек',
      q: 'Сұрақ', of: '/', next: 'Әрі қарай', prev: 'Артқа', finish: 'Аяқтау',
      pickAnswer: 'Жауап нұсқасын таңдаңыз',
      resultTitle: 'Олқылықтар картасы', score: 'Дұрыс жауаптар',
      byTopic: 'Бағдарлама тақырыптары бойынша',
      missed: 'Ұпай қай жерде жоғалды', noMissed: 'Қате жоқ — барлық жауап дұрыс',
      missedNote: 'Бұл пән бойынша тақырыптық талдау әзірге жоқ: сұрақтарға тақырып қойылмаған. Талдауда мұғалім осы сұрақтарды баламен бірге қарайды.',
      ok: 'Тақырып меңгерілген', mid: 'Қайталауды қажет етеді', gap: 'Олқылық',
      cta: 'Талдауға жазылу', ctaNote: 'Мұғалім олқылықтың себебін түсіндіріп, 3 айға жоспар береді.',
      saving: 'Нәтиже сақталуда…', saved: 'Нәтиже сақталды',
      notReady: 'Бұл тест әзірленуде', notReadyNote: 'Дұрыс жауаптар әлі толтырылмаған — нәтижені санау мүмкін емес. Бізге жазыңыз, тестті қолмен таңдаймыз.',
      loadErr: 'Тестті жүктеу мүмкін болмады', again: 'Бетті жаңарту',
      resume: 'Мына сұрақтан жалғастыру', restart: 'Қайтадан бастау',
      back: 'Пәндер тізіміне',
      pdf: 'Есепті жүктеу (PDF)'
    }
  };

  /* ---------- 3. СЛУЖЕБНОЕ ---------- */
  var qs = new URLSearchParams(location.search);
  var lang = (qs.get('lang') || (/-kz\/?$/.test(location.pathname) ? 'kz' : 'ru')) === 'kz' ? 'kz' : 'ru';
  var t = T[lang];
  var root = document.getElementById('zd-test');
  if (!root) return;
  // когда движок работает внутри лендинга, имя и телефон уже собраны
  // карточкой клиента, а язык переключается кнопкой на странице
  var hooks = {};

  var state = { test: null, answers: {}, i: 0, student: null, res: null, view: null, gated: false, sent: false };
  var KEY = 'zd-test-';

  // короткий код отчёта: по нему потом собирается PDF на стороне Google.
  // Случайный, чтобы чужую ссылку нельзя было подобрать перебором.
  function uid() {
    var s = '';
    for (var i = 0; i < 12; i++) s += 'abcdefghijkmnpqrstuvwxyz23456789'[Math.floor(Math.random() * 32)];
    return s;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(html) { root.innerHTML = html; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function save() {
    try { localStorage.setItem(KEY + state.test.id, JSON.stringify({ a: state.answers, i: state.i, s: state.student })); } catch (e) {}
  }
  function load(id) {
    try { return JSON.parse(localStorage.getItem(KEY + id) || 'null'); } catch (e) { return null; }
  }
  function clear(id) { try { localStorage.removeItem(KEY + id); } catch (e) {} }

  function getJSON(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }

  /* ---------- 4. ВЫБОР ТЕСТА ---------- */
  function screenPick(manifest, grade) {
    var list = manifest.tests.filter(function (x) { return !grade || x.grade === grade; });
    if (!list.length) list = manifest.tests;
    if (list.length === 1) return openTest(list[0].id);

    el('<div class="zd-card">' +
      '<h1 class="zd-h1">' + esc(t.pickTest) + '</h1>' +
      '<p class="zd-sub">' + esc(t.pickHint) + '</p>' +
      '<div class="zd-list">' + list.map(function (x) {
        return '<button class="zd-pick" data-id="' + esc(x.id) + '">' +
          '<span class="zd-pick-name">' + esc(x.subject[lang]) + '</span>' +
          '<span class="zd-pick-meta">' + x.grade + (lang === 'kz' ? '-сынып' : ' класс') +
          ' · ' + x.questions + (lang === 'kz' ? ' сұрақ' : ' вопросов') +
          ' · ~' + x.minutes + ' мин</span>' +
          (x.ready ? '' : '<span class="zd-tag">' + esc(t.notReady) + '</span>') +
          '</button>';
      }).join('') + '</div></div>');

    root.querySelectorAll('.zd-pick').forEach(function (b) {
      b.addEventListener('click', function () { openTest(b.dataset.id); });
    });
  }

  /* Все тесты лежат одним файлом tests.json, картинки — отдельным images.json.
     Так в репозитории не 130 файлов в пяти папках, а несколько штук рядом:
     их проще загрузить и проще править. Картинки тянем только если они нужны
     этому тесту — у языковых их нет вообще. */
  var BANK = null, IMAGES = null;

  function loadBank() {
    if (BANK) return Promise.resolve(BANK);
    return getJSON(CONFIG.base + 'tests.json').then(function (d) { return (BANK = d); });
  }

  function loadImages(test) {
    var need = test.questions.some(function (q) {
      return q.image || q.blockImage || q.optionImages;
    });
    if (!need || IMAGES) return Promise.resolve();
    return getJSON(CONFIG.base + 'images.json')
      .then(function (d) { IMAGES = d; })
      .catch(function () { IMAGES = {}; });
  }

  function imgSrc(name) {
    return (IMAGES && IMAGES[name]) || (CONFIG.base + name);
  }

  function openTest(id) {
    el('<div class="zd-card zd-center"><div class="zd-spin"></div></div>');
    loadBank().then(function (bank) {
      var data = bank.tests && bank.tests[id];
      if (!data) throw new Error('нет теста ' + id);
      data = JSON.parse(JSON.stringify(data));
      // вопросы с пометкой needsReview не показываем: у них потеряна формула,
      // подчёркивание или рисунок — ответить на них честно нельзя
      data.questions = data.questions.filter(function (q) { return !q.needsReview; });
      return loadImages(data).then(function () { return data; });
    }).then(function (data) {
      state.test = data;
      state.res = null; state.view = null;
      state.student = (hooks.student && hooks.student.name) ? hooks.student : null;
      var kept = load(id);
      // недописанный тест: возвращаем на том же вопросе. Контакта в нём может
      // и не быть — его теперь спрашивают в конце, а не в начале
      if (kept && kept.a && Object.keys(kept.a).length) {
        state.answers = kept.a; state.i = kept.i || 0;
        if (kept.s) state.student = kept.s;
        return screenResume();
      }
      // лендинг сам собирает контакт после теста — стартовый экран не нужен
      if (hooks.gate || state.student) {
        state.i = 0; state.answers = {};
        save();
        return screenQuestion();
      }
      screenStart();
    }).catch(function () {
      el('<div class="zd-card"><h1 class="zd-h1">' + esc(t.loadErr) + '</h1>' +
        '<button class="zd-btn" onclick="location.reload()">' + esc(t.again) + '</button></div>');
    });
  }

  /* ---------- 5. СТАРТ ---------- */
  function head() {
    var d = state.test;
    return '<div class="zd-head"><span class="zd-badge">' + d.grade +
      (lang === 'kz' ? '-сынып' : ' класс') + '</span> ' + esc(d.subject[lang]) + '</div>';
  }

  function screenResume() {
    el('<div class="zd-card">' + head() +
      '<h1 class="zd-h1">' + esc(state.student ? state.student.name : state.test.subject[lang]) + '</h1>' +
      '<p class="zd-sub">' + esc(t.resume) + ' ' + (state.i + 1) + '</p>' +
      '<button class="zd-btn" id="go">' + esc(t.next) + '</button>' +
      '<button class="zd-btn zd-ghost" id="re">' + esc(t.restart) + '</button></div>');
    root.querySelector('#go').onclick = screenQuestion;
    root.querySelector('#re').onclick = function () {
      clear(state.test.id); state.answers = {}; state.i = 0; screenStart();
    };
  }

  function screenStart() {
    var d = state.test;
    el('<div class="zd-card">' + head() +
      '<h1 class="zd-h1">' + esc(d.subject[lang]) + '</h1>' +
      '<p class="zd-sub">' + d.questions.length + (lang === 'kz' ? ' сұрақ' : ' вопросов') +
      ' · ~' + d.minutes + ' мин</p>' +
      (d.answersFilled ? '' : '<div class="zd-warn"><b>' + esc(t.notReady) + '</b><br>' + esc(t.notReadyNote) + '</div>') +
      '<div class="zd-field"><label for="zd-name">' + esc(t.name) + '</label>' +
      '<input id="zd-name" autocomplete="name" placeholder="' + esc(t.namePh) + '">' +
      '<span class="zd-err" id="zd-name-e">' + esc(t.errName) + '</span></div>' +
      '<div class="zd-field"><label for="zd-phone">' + esc(t.phone) + '</label>' +
      '<input id="zd-phone" type="tel" inputmode="tel" placeholder="+7 (___) ___-__-__">' +
      '<span class="zd-err" id="zd-phone-e">' + esc(t.errPhone) + '</span></div>' +
      '<button class="zd-btn" id="zd-go">' + esc(t.start) + '</button></div>');

    var ph = root.querySelector('#zd-phone');
    // Маска: поле форматируем сами и всегда рисуем «+7» впереди, поэтому при
    // новом вводе первая цифра — наша семёрка из префикса, её отбрасываем.
    // Если префикса нет (номер вставили целиком) — 8 или лишняя 7 это код страны.
    function fmtKz(d) {
      var o = '+7 (';
      if (d.length) o += d.slice(0, 3);
      if (d.length >= 3) o += ')';
      if (d.length > 3) o += ' ' + d.slice(3, 6);
      if (d.length > 6) o += '-' + d.slice(6, 8);
      if (d.length > 8) o += '-' + d.slice(8, 10);
      return o;
    }
    ph.addEventListener('input', function () {
      var raw = ph.value, d = raw.replace(/\D/g, '');
      if (/^\+7/.test(raw)) d = d.slice(1);              // наша семёрка из префикса
      if (d[0] === '8') d = d.slice(1);                   // человек начал с восьмёрки
      if (d.length > 10 && d[0] === '7') d = d.slice(1);  // номер вставлен с кодом страны
      ph.value = fmtKz(d.slice(0, 10));
    });
    ph.addEventListener('focus', function () { if (!ph.value) ph.value = '+7 ('; });

    root.querySelector('#zd-go').onclick = function () {
      var nm = root.querySelector('#zd-name').value.trim();
      var digits = ph.value.replace(/\D/g, '');
      var ok = true;
      root.querySelector('#zd-name-e').style.display = nm.length < 2 ? 'block' : 'none';
      root.querySelector('#zd-phone-e').style.display = digits.length !== 11 ? 'block' : 'none';
      if (nm.length < 2 || digits.length !== 11) ok = false;
      if (!ok) return;
      state.student = { name: nm, phone: '+' + digits };
      state.i = 0; state.answers = {};
      save(); screenQuestion();
    };
  }

  /* ---------- 6. ВОПРОСЫ ---------- */
  function screenQuestion() {
    var d = state.test, q = d.questions[state.i], total = d.questions.length;
    var picked = state.answers[q.n];
    var pct = Math.round(state.i / total * 100);

    el('<div class="zd-card">' +
      '<div class="zd-bar"><span style="width:' + pct + '%"></span></div>' +
      '<div class="zd-qmeta">' + esc(t.q) + ' ' + (state.i + 1) + ' ' + esc(t.of) + ' ' + total +
      (q.topic ? '<span class="zd-topic">' + esc(q.topic) + '</span>' : '') + '</div>' +
      (q.passage ? '<div class="zd-passage">' + esc(q.passage) + '</div>' : '') +
      // blockImage — вопрос вместе с вариантами снят картинкой из исходника
      // (формулы и дроби, которые нельзя перенести текстом)
      (q.blockImage
        ? [].concat(q.blockImage).map(function (src) {
            return '<img class="zd-img zd-block" src="' + esc(imgSrc(src)) + '" alt="">';
          }).join('')
        : '<div class="zd-qtext">' + esc(q.text) + '</div>' +
          (q.image ? '<img class="zd-img" src="' + esc(imgSrc(q.image)) + '" alt="">' : '')) +
      '<div class="zd-opts' + (q.optionImages ? ' zd-opts-img' : '') +
      (q.blockImage ? ' zd-opts-letters' : '') + '">' +
      (q.optionImages || q.options).map(function (o, k) {
        var body = q.optionImages
          ? '<img src="' + esc(imgSrc(o)) + '" alt="">'
          : '<span>' + esc(o) + '</span>';
        return '<button class="zd-opt' + (picked === k ? ' on' : '') + '" data-k="' + k + '">' +
          '<i>' + String.fromCharCode(65 + k) + '</i>' + body + '</button>';
      }).join('') + '</div>' +
      '<div class="zd-nav">' +
      (state.i > 0 ? '<button class="zd-btn zd-ghost" id="zd-prev">' + esc(t.prev) + '</button>' : '') +
      '<button class="zd-btn" id="zd-next">' +
      esc(state.i === total - 1 ? t.finish : t.next) + '</button></div>' +
      '<div class="zd-hint" id="zd-hint"></div></div>');

    root.querySelectorAll('.zd-opt').forEach(function (b) {
      b.onclick = function () {
        state.answers[q.n] = Number(b.dataset.k);
        root.querySelectorAll('.zd-opt').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        root.querySelector('#zd-hint').textContent = '';
        save();
      };
    });
    var prev = root.querySelector('#zd-prev');
    if (prev) prev.onclick = function () { state.i--; save(); screenQuestion(); };
    root.querySelector('#zd-next').onclick = function () {
      if (state.answers[q.n] === undefined) {
        root.querySelector('#zd-hint').textContent = t.pickAnswer;
        return;
      }
      if (state.i === total - 1) return finish();
      state.i++; save(); screenQuestion();
    };
  }

  /* ---------- 7. РЕЗУЛЬТАТ ---------- */
  function grade(pct) { return pct >= 70 ? 'ok' : pct >= 45 ? 'mid' : 'gap'; }

  function finish() {
    var d = state.test, rows = [], right = 0, scored = 0;
    var byTopic = {}, missed = [];
    // темы проставлены не у всех тестов; без них сорок полосок по одному вопросу —
    // не отчёт, поэтому показываем просто номера, где потеряны баллы
    var hasTopics = d.questions.some(function (q) { return q.topic; });

    d.questions.forEach(function (q) {
      var a = state.answers[q.n];
      if (q.correct === null || q.correct === undefined) return;
      scored++;
      var hit = a === q.correct;
      if (hit) right++; else missed.push(q.n);
      if (!hasTopics) return;
      var key = q.topic || (lang === 'kz' ? 'Басқа' : 'Прочее');
      byTopic[key] = byTopic[key] || { right: 0, total: 0 };
      byTopic[key].total++;
      if (hit) byTopic[key].right++;
    });

    Object.keys(byTopic).forEach(function (k) {
      var v = byTopic[k], pct = Math.round(v.right / v.total * 100);
      rows.push({ name: k, pct: pct, right: v.right, total: v.total, s: grade(pct) });
    });
    rows.sort(function (a, b) { return a.pct - b.pct; });

    var overall = scored ? Math.round(right / scored * 100) : null;

    state.view = { rows: rows, right: right, scored: scored, overall: overall,
                   missed: missed, hasTopics: hasTopics };
    state.res = {
      grade: d.grade,
      subject: d.subject.ru,
      testId: d.id,
      right: right,
      scored: scored,
      percent: overall,
      // объектом, а не строкой: в названиях тем встречаются точки с запятой
      // («There is / There are; some / any / no»), и склеенную строку потом
      // не разобрать обратно на темы
      topics: rows.reduce(function (o, r) { o[r.name] = r.pct; return o; }, {}),
      answers: d.questions.map(function (q) { return q.n + '=' + (state.answers[q.n] === undefined ? '-' : state.answers[q.n]); }).join(','),
      lang: lang,
      page: location.pathname,
      uid: uid()
    };
    // Ответы держим до показа отчёта: если человек обновит страницу на форме,
    // тест не пропадёт — движок вернёт его на последний вопрос
    // Отчёт посчитан, но контакта ещё нет: лендинг показывает форму и вернётся
    // сюда через reveal(). Отправляет в этом случае он же — одной записью,
    // чтобы заявка и результат не разъехались на две.
    if (!state.student && hooks.gate) { state.gated = true; return hooks.gate(state.res); }
    state.gated = false;
    showResult();
  }

  function showResult() {
    var d = state.test, v = state.view;
    clear(d.id);
    var rows = v.rows, right = v.right, scored = v.scored, overall = v.overall;
    var missed = v.missed, hasTopics = v.hasTopics;

    var wa = 'https://wa.me/' + CONFIG.whatsapp + '?text=' +
      encodeURIComponent((lang === 'kz' ? 'Сәлеметсіз бе! ' : 'Здравствуйте! ') +
        state.student.name + ' — ' + d.subject.ru + ', ' + d.grade +
        (lang === 'kz' ? '-сынып' : ' класс') +
        (overall === null ? '' : ', ' + overall + '%'));
    // Отчёт собирается на стороне Google по коду: ссылка обычная, открывается
    // в новой вкладке и работает с телефона без сохранения страницы.
    var pdf = CONFIG.endpoint
      ? CONFIG.endpoint + (CONFIG.endpoint.indexOf('?') < 0 ? '?' : '&') + 'pdf=' + state.res.uid
      : '';

    el('<div class="zd-card">' + head() +
      '<h1 class="zd-h1">' + esc(t.resultTitle) + '</h1>' +
      '<p class="zd-sub">' + esc(state.student.name) + '</p>' +
      (overall === null
        ? '<div class="zd-warn"><b>' + esc(t.notReady) + '</b><br>' + esc(t.notReadyNote) + '</div>'
        : '<div class="zd-score"><b>' + overall + '%</b><span>' + esc(t.score) + ': ' +
          right + ' / ' + scored + '</span></div>' +
          (hasTopics
            ? '<div class="zd-sec">' + esc(t.byTopic) + '</div>' +
              '<div class="zd-rows">' + rows.map(function (r) {
                return '<div class="zd-row"><div class="zd-row-h"><span>' + esc(r.name) + '</span>' +
                  '<b>' + r.pct + '%</b></div><div class="zd-track"><i class="' + r.s +
                  '" style="width:' + r.pct + '%"></i></div></div>';
              }).join('') + '</div>' +
              '<div class="zd-legend">' +
              '<span><i class="ok"></i>' + esc(t.ok) + '</span>' +
              '<span><i class="mid"></i>' + esc(t.mid) + '</span>' +
              '<span><i class="gap"></i>' + esc(t.gap) + '</span></div>'
            : '<div class="zd-sec">' + esc(missed.length ? t.missed : t.noMissed) + '</div>' +
              (missed.length
                ? '<div class="zd-chips">' + missed.map(function (n) {
                    return '<span>№' + n + '</span>';
                  }).join('') + '</div>' +
                  '<p class="zd-sub" style="margin-top:12px">' + esc(t.missedNote) + '</p>'
                : ''))) +
      (pdf ? '<a class="zd-btn zd-ghost" href="' + esc(pdf) + '" target="_blank" rel="noopener">' +
             esc(t.pdf) + '</a>' : '') +
      '<p class="zd-sub" style="margin-top:18px">' + esc(t.ctaNote) + '</p>' +
      '<a class="zd-btn" href="' + wa + '" target="_blank" rel="noopener">' + esc(t.cta) + '</a>' +
      (hooks.onBack ? '<button class="zd-btn zd-ghost" id="zd-back">' + esc(t.back) + '</button>' : '') +
      '<div class="zd-hint" id="zd-save">' + esc(t.saving) + '</div></div>');

    if (hooks.onBack) root.querySelector('#zd-back').onclick = function () { hooks.onBack(); };
    if (hooks.onFinish) hooks.onFinish({ id: d.id, percent: overall, right: right, scored: scored });

    // Через ворота лендинг отправил всё сам — второй записи не нужно.
    // А вот следующий предмет контакта уже не спрашивает, ворот не будет,
    // и его результат отправляем отсюда.
    if (state.gated) {
      // «сохранено» пишем, только если лендинг подтвердил, что запись ушла:
      // обещать сохранность, когда отправка не удалась, — обманывать
      var box = root.querySelector('#zd-save');
      if (box) box.textContent = state.sent ? t.saved : '';
      return;
    }
    send(Object.assign({
      date: new Date().toISOString(),
      name: state.student.name,
      phone: state.student.phone
    }, state.res));
  }

  /* Сначала обычным запросом, с чтением ответа: приёмник отвечает {ok:true},
     и тогда «сохранено» — правда, а не предположение. Если ответ прочитать
     не дали, повторяем «слепо»: до сервера запрос доходит всё равно.
     Итог пишем в консоль — по нему видно, страница виновата или приёмник. */
  function send(payload) {
    var box = root.querySelector('#zd-save');
    function skazat(s) { if (box) box.textContent = s; }
    if (!CONFIG.endpoint) {
      skazat('');
      console.log('Результат (адрес приёмника не задан):', payload);
      return;
    }
    var opts = {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    };
    function slepo(prichina) {
      opts.mode = 'no-cors';
      return fetch(CONFIG.endpoint, opts).then(function () {
        skazat(t.saved);
        console.log('Zerdeli: результат отправлен вслепую —', prichina);
      }).catch(function (e) {
        skazat('');
        console.log('Zerdeli: результат НЕ отправлен —', e.message);
      });
    }
    opts.mode = 'cors';
    fetch(CONFIG.endpoint, opts).then(function (r) {
      return r.json().catch(function () { return null; });
    }).then(function (d) {
      skazat(t.saved);
      console.log('Zerdeli: результат отправлен, ответ приёмника —', d);
    }).catch(function (e) { return slepo(e.message); });
  }

  /* ---------- 8. ВНЕШНИЙ ИНТЕРФЕЙС ----------
     Лендинг вызывает ZerdeliTest.open(id, {gate: ...}) — тест открывается
     прямо на странице и сразу с вопросов. Когда вопросы кончились, движок
     отдаёт посчитанный отчёт в gate и ждёт: контакт собирает лендинг,
     а reveal() показывает результат. Отдельная страница /test при этом
     продолжает работать по-старому, спрашивая имя в начале. */
  window.ZerdeliTest = {
    open: function (id, opts) {
      opts = opts || {};
      hooks = opts;
      if (opts.lang && T[opts.lang]) { lang = opts.lang; t = T[lang]; }
      openTest(id);
    },
    // контакт получен — показываем отчёт
    // second argument — дошла ли отправка: лендинг знает это, а движок нет
    reveal: function (student, sent) {
      if (!state.res || !student) return;
      state.student = student;
      state.sent = !!sent;
      showResult();
    },
    // отчёт посчитан и ждёт контакта
    isWaiting: function () { return !!(state.res && !state.student); },
    setLang: function (code) {
      if (!T[code] || code === lang) return;
      lang = code; t = T[lang];
      if (!state.test) return;
      if (state.res && state.student) showResult();
      else if (!state.res) screenQuestion();
    },
    isOpen: function () { return !!state.test; }
  };

  /* ---------- 9. СТАРТ ПРИЛОЖЕНИЯ ---------- */
  if (window.ZERDELI_TEST_EMBEDDED) return;   // лендинг откроет тест сам
  var wantTest = qs.get('test');
  var wantGrade = parseInt(qs.get('class') || qs.get('grade'), 10) || null;

  el('<div class="zd-card zd-center"><div class="zd-spin"></div></div>');
  if (wantTest) {
    openTest(wantTest);
  } else {
    getJSON(CONFIG.base + 'manifest.json')
      .then(function (m) { screenPick(m, wantGrade); })
      .catch(function () {
        el('<div class="zd-card"><h1 class="zd-h1">' + esc(t.loadErr) + '</h1>' +
          '<button class="zd-btn" onclick="location.reload()">' + esc(t.again) + '</button></div>');
      });
  }
})();
