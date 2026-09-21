/* Собрано из landing/diagnostika-body.html скриптом landing/build.py.
   Правится там, не здесь: этот файл перезаписывается при каждой сборке. */
(function(){var s=document.createElement("style");s.textContent="/* ============================================================\n   ZERDELI · Лендинг «Онлайн-диагностика знаний 1–11 класс»\n   Правки текстов — в объекте T внизу файла.\n   Правки списка предметов — в объекте SUBJECTS внизу файла.\n   ============================================================ */\n\n:root{\n  --ground:#FAFAF5;\n  --surface:#FFFFFF;\n  --surface-2:#F1F2E9;\n  --line:#E2E4D6;\n  --ink:#191C12;\n  --ink-2:#4A4D40;\n  --muted:#6C6D6D;\n  --lime:#ACDF08;\n  --lime-deep:#6F8F05;\n  --lime-wash:#F0F8D2;\n  --copper:#B07446;\n  --copper-wash:#F6EAE0;\n  --blue:#8BA5EF;\n  --blue-wash:#EAEEFC;\n  --on-lime:#161A0C;\n  --shadow:0 1px 2px rgba(25,28,18,.05), 0 12px 32px -18px rgba(25,28,18,.35);\n  --r-s:10px; --r-m:16px; --r-l:24px;\n  --maxw:1120px;\n}\n@media (prefers-color-scheme: dark){\n  :root:not([data-theme=\"light\"]){\n    --ground:#12140D;\n    --surface:#1B1E14;\n    --surface-2:#22261A;\n    --line:#333929;\n    --ink:#EFF1E6;\n    --ink-2:#C3C7B6;\n    --muted:#9EA096;\n    --lime:#ACDF08;\n    --lime-deep:#C7EF4E;\n    --lime-wash:#25300A;\n    --copper:#D49A6B;\n    --copper-wash:#33241A;\n    --blue:#A6B9F4;\n    --blue-wash:#1E2438;\n    --on-lime:#161A0C;\n    --shadow:0 1px 2px rgba(0,0,0,.4), 0 12px 32px -18px rgba(0,0,0,.9);\n  }\n}\n:root[data-theme=\"dark\"]{\n  --ground:#12140D;\n  --surface:#1B1E14;\n  --surface-2:#22261A;\n  --line:#333929;\n  --ink:#EFF1E6;\n  --ink-2:#C3C7B6;\n  --muted:#9EA096;\n  --lime:#ACDF08;\n  --lime-deep:#C7EF4E;\n  --lime-wash:#25300A;\n  --copper:#D49A6B;\n  --copper-wash:#33241A;\n  --blue:#A6B9F4;\n  --blue-wash:#1E2438;\n  --on-lime:#161A0C;\n  --shadow:0 1px 2px rgba(0,0,0,.4), 0 12px 32px -18px rgba(0,0,0,.9);\n}\n\n*,*::before,*::after{box-sizing:border-box}\nbody{\n  margin:0;\n  background:var(--ground);\n  color:var(--ink);\n  font-family:'Onest','Noto Sans',system-ui,-apple-system,'Segoe UI',sans-serif;\n  font-size:17px;\n  line-height:1.55;\n  -webkit-font-smoothing:antialiased;\n  overflow-x:hidden;\n}\nh1,h2,h3,.display{\n  font-family:'Unbounded','Onest','Noto Sans',system-ui,sans-serif;\n  font-weight:700;\n  line-height:1.08;\n  letter-spacing:-.02em;\n  text-wrap:balance;\n  margin:0;\n}\nh1{font-size:clamp(30px,6.2vw,54px);font-weight:900}\nh2{font-size:clamp(24px,4.4vw,40px)}\nh3{font-size:clamp(17px,2.2vw,21px);line-height:1.25}\np{margin:0}\na{color:inherit}\nbutton{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--lime-deep);outline-offset:3px;border-radius:6px}\n\n[id]{scroll-margin-top:78px}\n.wrap{width:100%;max-width:var(--maxw);margin:0 auto;padding:0 20px}\nsection{padding:clamp(52px,8vw,96px) 0}\n.eyebrow{\n  font-family:'Unbounded','Onest',sans-serif;\n  font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;\n  color:var(--muted);\n}\n.lead{font-size:clamp(16px,2.2vw,19px);color:var(--ink-2);max-width:60ch}\n\n/* ---------- header ---------- */\n.hdr{\n  position:sticky;top:0;z-index:60;\n  background:color-mix(in srgb,var(--ground) 88%,transparent);\n  backdrop-filter:blur(12px);\n  border-bottom:1px solid var(--line);\n}\n.hdr-in{display:flex;align-items:center;justify-content:space-between;gap:16px;height:60px}\n.brand{font-family:'Unbounded',sans-serif;font-weight:900;font-size:17px;letter-spacing:.02em;text-decoration:none}\n.brand span{color:var(--lime-deep)}\n.hdr-right{display:flex;align-items:center;gap:10px}\n.langs{display:flex;border:1px solid var(--line);border-radius:999px;overflow:hidden;background:var(--surface)}\n.langs button{\n  border:0;background:transparent;padding:6px 13px;font-size:13px;font-weight:600;\n  cursor:pointer;color:var(--muted);\n}\n.langs button[aria-pressed=\"true\"]{background:var(--lime);color:var(--on-lime)}\n.hdr-phone{font-size:14px;font-weight:600;text-decoration:none;white-space:nowrap}\n@media (max-width:600px){.hdr-phone{display:none}}\n\n/* ---------- buttons ---------- */\n.btn{\n  display:inline-flex;align-items:center;justify-content:center;gap:9px;\n  padding:15px 26px;border-radius:999px;border:1px solid transparent;\n  font-weight:600;font-size:16px;text-decoration:none;cursor:pointer;\n  transition:transform .12s ease, background .15s ease, border-color .15s ease;\n  min-height:52px;\n}\n.btn:active{transform:translateY(1px) scale(.995)}\n.btn-primary{background:var(--lime);color:var(--on-lime);box-shadow:var(--shadow)}\n.btn-primary:hover{background:#BCEE1C}\n.btn-ghost{background:transparent;border-color:var(--line);color:var(--ink)}\n.btn-ghost:hover{border-color:var(--ink-2)}\n.btn-wa{background:var(--surface);border-color:var(--line)}\n.btn-wa:hover{border-color:#25D366}\n.btn-block{width:100%}\n\n/* ---------- hero ---------- */\n.hero{padding-top:clamp(34px,5vw,64px)}\n.hero-grid{display:grid;grid-template-columns:1fr;gap:clamp(30px,4vw,52px);align-items:start}\n@media (min-width:940px){.hero-grid{grid-template-columns:1.02fr .98fr;gap:56px;align-items:center}}\n.hero-copy{display:flex;flex-direction:column;gap:20px}\n.hero-cta{display:flex;flex-wrap:wrap;gap:12px}\n.hero-facts{display:flex;flex-wrap:wrap;gap:8px;margin-top:2px}\n.fact{\n  display:inline-flex;align-items:center;gap:7px;\n  padding:7px 13px;border-radius:999px;border:1px solid var(--line);\n  background:var(--surface);font-size:13.5px;color:var(--ink-2);font-weight:500;\n}\n.fact b{color:var(--ink);font-weight:700}\n\n/* ---------- signature: карта пробелов ---------- */\n.report{\n  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-l);\n  padding:clamp(18px,3vw,26px);box-shadow:var(--shadow);\n}\n.report-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:18px}\n.report-title{font-family:'Unbounded',sans-serif;font-weight:700;font-size:15px;letter-spacing:-.01em}\n.report-sub{font-size:12.5px;color:var(--muted);margin-top:3px}\n.report-tag{\n  font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;\n  padding:5px 10px;border-radius:999px;background:var(--lime-wash);color:var(--lime-deep);white-space:nowrap;\n}\n.rows{display:flex;flex-direction:column;gap:14px}\n.row-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:6px}\n.row-name{font-size:14.5px;font-weight:500}\n.row-val{font-size:12.5px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--muted)}\n.track{height:9px;border-radius:999px;background:var(--surface-2);overflow:hidden}\n.bar{display:block;height:100%;width:0;border-radius:999px;transition:width 1.1s cubic-bezier(.22,.8,.28,1)}\n.bar.ok{background:var(--lime)}\n.bar.mid{background:var(--blue)}\n.bar.gap{background:var(--copper)}\n.report-legend{display:flex;flex-wrap:wrap;gap:14px;margin-top:20px;padding-top:16px;border-top:1px solid var(--line)}\n.lg{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;color:var(--muted)}\n.dot{width:9px;height:9px;border-radius:50%;flex:none}\n.dot.ok{background:var(--lime)}.dot.mid{background:var(--blue)}.dot.gap{background:var(--copper)}\n\n/* ---------- pains ---------- */\n.pains{display:grid;grid-template-columns:1fr;gap:12px;margin-top:28px}\n@media (min-width:700px){.pains{grid-template-columns:1fr 1fr}}\n.pain{\n  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-m);\n  padding:20px 22px;font-size:16px;color:var(--ink-2);\n  display:flex;gap:13px;align-items:flex-start;\n}\n.pain::before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--copper);flex:none;margin-top:11px}\n\n/* ---------- steps ---------- */\n.steps{display:grid;grid-template-columns:1fr;gap:14px;margin-top:32px;counter-reset:s}\n@media (min-width:820px){.steps{grid-template-columns:repeat(3,1fr)}}\n.step{\n  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-l);\n  padding:24px;display:flex;flex-direction:column;gap:11px;position:relative;\n}\n.step-n{\n  font-family:'Unbounded',sans-serif;font-weight:900;font-size:13px;\n  width:34px;height:34px;border-radius:50%;display:grid;place-items:center;\n  background:var(--lime-wash);color:var(--lime-deep);\n}\n.step-when{font-size:12.5px;font-weight:600;color:var(--muted)}\n.step p{font-size:15.5px;color:var(--ink-2)}\n\n/* ---------- получаете ---------- */\n.gets{display:grid;grid-template-columns:1fr;gap:0;margin-top:28px;border-top:1px solid var(--line)}\n@media (min-width:760px){.gets{grid-template-columns:1fr 1fr}}\n.get{padding:22px 0;border-bottom:1px solid var(--line);display:flex;gap:16px;align-items:flex-start}\n@media (min-width:760px){.get:nth-child(odd){padding-right:32px}.get:nth-child(even){padding-left:32px;border-left:1px solid var(--line)}}\n.get-ic{\n  width:38px;height:38px;border-radius:11px;flex:none;display:grid;place-items:center;\n  background:var(--blue-wash);\n}\n.get-ic svg{width:19px;height:19px;stroke:var(--blue);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n.get h3{margin-bottom:5px}\n.get p{font-size:15px;color:var(--ink-2)}\n\n/* ---------- конструктор ---------- */\n.builder-sec{background:var(--surface-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n.builder{\n  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-l);\n  padding:clamp(20px,3.4vw,34px);box-shadow:var(--shadow);margin-top:26px;\n}\n.bstep{padding-bottom:24px;margin-bottom:24px;border-bottom:1px dashed var(--line)}\n.bstep:last-child{padding-bottom:0;margin-bottom:0;border-bottom:0}\n.bstep-h{display:flex;align-items:center;gap:11px;margin-bottom:15px}\n.bstep-n{\n  font-family:'Unbounded',sans-serif;font-size:11px;font-weight:700;\n  width:26px;height:26px;border-radius:50%;display:grid;place-items:center;flex:none;\n  background:var(--ink);color:var(--ground);\n}\n.bstep-t{font-weight:600;font-size:16.5px}\n.bstep.is-off{opacity:.42;pointer-events:none}\n.bstep.is-done .bstep-n{background:var(--lime);color:var(--on-lime)}\n.bstep.is-done .bstep-t{color:var(--muted);font-weight:500}\n/* Пока идёт тест, шаги и заголовок раздела убираем: на экране только вопросы.\n   Класс running ставится на саму секцию #zayavka. */\n.builder-sec.running > .wrap > .eyebrow,\n.builder-sec.running > .wrap > h2,\n.builder-sec.running > .wrap > .lead,\n.builder-sec.running .bstep{display:none}\n.bstep.is-off .bstep-n{background:var(--surface-2);color:var(--muted)}\n\n.grade-group{margin-bottom:16px}\n.grade-group:last-child{margin-bottom:0}\n.grade-label{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:9px}\n.chips{display:flex;flex-wrap:wrap;gap:8px}\n.chip{\n  border:1px solid var(--line);background:var(--surface);border-radius:999px;\n  padding:10px 16px;font-size:15px;font-weight:500;cursor:pointer;min-height:44px;\n  transition:border-color .14s ease,background .14s ease,transform .1s ease;\n}\n.chip:hover{border-color:var(--ink-2)}\n.chip:active{transform:scale(.97)}\n.chip[aria-pressed=\"true\"]{background:var(--lime);border-color:var(--lime);color:var(--on-lime);font-weight:600}\n.chip.grade{min-width:52px;justify-content:center;font-variant-numeric:tabular-nums}\n.subj-hint{font-size:14.5px;color:var(--muted)}\n\n/* состав комплекса */\n.kit{display:flex;flex-direction:column;gap:10px}\n.kit-list{display:grid;grid-template-columns:1fr;gap:9px}\n@media (min-width:640px){.kit-list{grid-template-columns:1fr 1fr}}\n.kit-item{\n  display:flex;align-items:center;gap:11px;\n  padding:12px 15px;border:1px solid var(--line);border-radius:var(--r-s);\n  background:var(--surface-2);font-size:15.5px;font-weight:500;\n}\n.kit-item svg{width:16px;height:16px;flex:none;stroke:var(--lime-deep);fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}\n.kit-meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}\n.kit-note{font-size:13.5px;color:var(--muted);margin-top:6px}\n\n.form-grid{display:grid;grid-template-columns:1fr;gap:13px}\n@media (min-width:640px){.form-grid{grid-template-columns:1fr 1fr}}\n.field{display:flex;flex-direction:column;gap:6px}\n.field label{font-size:13px;font-weight:600;color:var(--ink-2)}\n.field input,.field select{\n  font:inherit;font-size:16px;padding:13px 15px;border-radius:var(--r-s);\n  border:1px solid var(--line);background:var(--surface);color:var(--ink);min-height:50px;width:100%;\n}\n.field input:focus,.field select:focus{border-color:var(--lime-deep);outline:none;box-shadow:0 0 0 3px var(--lime-wash)}\n.field.err input{border-color:var(--copper)}\n.err-msg{font-size:12.5px;color:var(--copper);display:none}\n.field.err .err-msg{display:block}\n.form-foot{display:flex;flex-direction:column;gap:12px;margin-top:16px}\n.summary{\n  display:flex;flex-wrap:wrap;gap:8px;align-items:center;\n  font-size:14px;color:var(--ink-2);\n}\n.summary b{font-weight:600}\n.pill{\n  display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;\n  background:var(--lime-wash);color:var(--lime-deep);font-weight:600;font-size:13.5px;\n}\n.consent{font-size:12.5px;color:var(--muted);max-width:62ch}\n.consent a{color:var(--muted)}\n\n/* Ворота: тест пройден, отчёт посчитан — показываем его за контакт */\n.gate h3{font-size:clamp(21px,4.4vw,27px);line-height:1.18;letter-spacing:-.02em}\n.gate-p{color:var(--ink-2);margin-top:10px;max-width:46ch}\n.tests{display:flex;flex-direction:column;gap:10px;margin:0 auto 20px;max-width:520px;text-align:left}\n.tests a{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid var(--line);\n  border-radius:16px;background:var(--surface-2);color:inherit;text-decoration:none;\n  transition:border-color .14s ease,transform .1s ease}\n.tests a:hover{border-color:var(--lime-deep);transform:translateY(-1px)}\n/* Тест без проставленных ответов: показываем, но не даём открыть */\n.tests a.off{opacity:.6;cursor:default;background:var(--surface);border-style:dashed}\n.tests a.off:hover{border-color:var(--line);transform:none}\n.tests a.off i{background:var(--line);color:var(--muted)}\n.tests a.off .tt b{color:var(--muted);font-weight:500}\n.tests a i{flex:none;width:32px;height:32px;border-radius:50%;background:var(--lime);color:var(--on-lime);\n  display:grid;place-items:center;font-style:normal;font-weight:700;font-size:14px}\n/* название и подпись — колонкой: на телефоне «20 вопросов · ~30 мин» в строку не влезает */\n.tests .tt{display:flex;flex-direction:column;gap:3px;min-width:0}\n.tests .tt b{font-weight:600;line-height:1.25}\n.tests .tt em{font-style:normal;font-size:13px;color:var(--muted)}\n.tests-note{font-size:13.5px;color:var(--muted);margin:0 auto 20px;max-width:44ch}\n\n/* ============ ПРОБНЫЙ УРОК: новые блоки ============ */\n.btn-ghost{background:var(--surface);color:var(--ink);border:1px solid var(--line)}\n.btn-ghost:hover{border-color:var(--lime-deep)}\n.btn-kaspi{background:#F14635;color:#fff;border:0;margin-top:14px}\n.btn-kaspi:hover{filter:brightness(1.07)}\n.hero-note{font-size:13.5px;color:var(--muted);margin:14px 0 0;max-width:52ch}\n\n/* «Почему оценка не отвечает» — колонка текста, читается как мысль, не как список */\n.why{max-width:60ch}\n.why h2{margin-bottom:16px}\n.why p{margin:0 0 14px;font-size:16.5px;line-height:1.6;color:var(--ink-2)}\n.why .why-last{color:var(--ink);font-weight:500}\n.where-note{margin:18px 0 0;font-size:14px;color:var(--muted)}\n\n/* Чемпионы */\n.champs{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:22px}\n@media(min-width:760px){.champs{grid-template-columns:repeat(4,1fr)}}\n.champ{margin:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--r-m);overflow:hidden}\n.champ img{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:cover;background:var(--surface-2)}\n.champ figcaption{padding:12px 13px 14px;display:flex;flex-direction:column;gap:3px}\n.champ-score{font-family:Unbounded,system-ui,sans-serif;font-weight:700;font-size:20px;color:var(--lime-deep);line-height:1.1}\n.champ b{font-size:14.5px;font-weight:600;line-height:1.25}\n.champ em{font-style:normal;font-size:12.5px;color:var(--muted);line-height:1.35}\n.champ-note{margin:18px 0 0;font-size:15px;line-height:1.6;color:var(--ink-2);max-width:60ch}\n\n/* Слоты расписания */\n.slots{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin:0 auto 6px;max-width:520px}\n.slot{display:flex;flex-direction:column;gap:2px;padding:12px 14px;text-align:left;\n  border:1px solid var(--line);border-radius:12px;background:var(--surface);\n  font:inherit;color:inherit;cursor:pointer;transition:border-color .12s ease,background .12s ease}\n.slot:hover{border-color:var(--ink-2)}\n.slot[aria-pressed=\"true\"]{border-color:var(--lime);background:var(--lime-wash)}\n.slot b{font-size:14.5px;font-weight:600}\n.slot span{font-size:13px;color:var(--muted)}\n.chip.faint{opacity:.5}\n\n/* Панель оплаты */\n.paybox{max-width:520px;margin:0 auto;padding:20px 18px 22px;text-align:left;\n  background:var(--surface);border:1px solid var(--lime);border-radius:var(--r-m)}\n.paybox h3{font-size:19px;line-height:1.3}\n.paybox .consent{margin-top:12px}\n\n/* Карточка цены */\n.pricecard{max-width:520px;margin:26px auto 0;scroll-margin-top:80px;padding:20px 18px 22px;text-align:left;\n  background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r-m)}\n.pricecard-top{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}\n.pricecard .price-num{font-family:Unbounded,system-ui,sans-serif;font-weight:800;font-size:30px;line-height:1}\n.pricecard .price-note{font-size:13.5px;color:var(--muted)}\n.incl{list-style:none;margin:16px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}\n.incl li{position:relative;padding-left:24px;font-size:14.5px;line-height:1.45;color:var(--ink-2)}\n.incl li::before{content:\"\";position:absolute;left:0;top:7px;width:13px;height:8px;\n  border-left:2px solid var(--lime-deep);border-bottom:2px solid var(--lime-deep);transform:rotate(-45deg)}\n.pricecard-foot{margin:16px 0 0;font-size:13.5px;line-height:1.55;color:var(--muted)}\n\n/* Кусок для ребёнка — визуально отделён, чтобы его было видно при пролистывании */\n.kid{max-width:60ch;padding:22px 20px;background:var(--lime-wash);\n  border:1px solid var(--lime);border-radius:var(--r-l)}\n.kid h2{font-size:23px;margin:0 0 16px}\n.kid p{margin:0 0 12px;font-size:16px;line-height:1.6;color:var(--ink)}\n.kid p:last-child{margin-bottom:0}\n\n/* ---------- каталог предметов ---------- */\n.catalog{display:grid;grid-template-columns:1fr;gap:14px;margin-top:28px;align-items:start}\n@media (min-width:760px){.catalog{grid-template-columns:1fr 1fr}}\n@media (min-width:1040px){.catalog{grid-template-columns:repeat(4,1fr)}}\n.cat{\n  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-m);\n  padding:20px;display:flex;flex-direction:column;gap:12px;\n}\n.cat-h{font-family:'Unbounded',sans-serif;font-weight:700;font-size:14px}\n.cat-g{font-size:12.5px;color:var(--muted);margin-top:3px}\n.cat ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}\n.cat li{font-size:14.5px;color:var(--ink-2);display:flex;gap:9px;align-items:flex-start}\n.cat li::before{content:\"\";width:5px;height:5px;border-radius:50%;background:var(--lime);flex:none;margin-top:9px}\n\n/* ---------- proof ---------- */\n.proof{background:var(--ink);color:var(--ground)}\n.proof .eyebrow{color:rgba(250,250,245,.55)}\n.proof-grid{display:grid;grid-template-columns:1fr;gap:26px;align-items:center}\n@media (min-width:860px){.proof-grid{grid-template-columns:1fr 1fr;gap:48px}}\n.big{\n  font-family:'Unbounded',sans-serif;font-weight:900;\n  font-size:clamp(56px,12vw,110px);line-height:.92;color:var(--lime);letter-spacing:-.04em;\n  font-variant-numeric:tabular-nums;\n}\n.big small{display:block;font-size:clamp(15px,2vw,19px);font-weight:500;color:var(--ground);letter-spacing:0;margin-top:14px;font-family:'Onest',sans-serif;line-height:1.4}\n.proof p{color:rgba(250,250,245,.78);font-size:16.5px}\n.proof-note{margin-top:16px;font-size:14.5px;color:rgba(250,250,245,.55)}\n\n/* ---------- faq ---------- */\n.faq{margin-top:26px;border-top:1px solid var(--line)}\n.faq details{border-bottom:1px solid var(--line)}\n.faq summary{\n  cursor:pointer;list-style:none;padding:20px 44px 20px 0;position:relative;\n  font-weight:600;font-size:16.5px;\n}\n.faq summary::-webkit-details-marker{display:none}\n.faq summary::after{\n  content:\"\";position:absolute;right:8px;top:50%;width:11px;height:11px;\n  border-right:2px solid var(--muted);border-bottom:2px solid var(--muted);\n  transform:translateY(-70%) rotate(45deg);transition:transform .2s ease;\n}\n.faq details[open] summary::after{transform:translateY(-30%) rotate(225deg)}\n.faq .ans{padding:0 8px 22px 0;color:var(--ink-2);font-size:15.5px;max-width:66ch}\n\n/* ---------- final ---------- */\n.final{background:var(--lime-wash);border-top:1px solid var(--line)}\n.final-in{display:flex;flex-direction:column;gap:20px;align-items:flex-start}\n.price{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}\n.price-num{font-family:'Unbounded',sans-serif;font-weight:900;font-size:clamp(34px,6vw,52px);letter-spacing:-.03em}\n.price-note{font-size:15px;color:var(--ink-2)}\n\n/* ---------- footer ---------- */\n.ftr{background:var(--surface);border-top:1px solid var(--line);padding:44px 0 110px}\n.ftr-grid{display:grid;grid-template-columns:1fr;gap:26px}\n@media (min-width:760px){.ftr-grid{grid-template-columns:1.2fr 1fr 1fr}}\n.ftr h4{font-family:'Unbounded',sans-serif;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0 0 12px;font-weight:700}\n.ftr p,.ftr li{font-size:14.5px;color:var(--ink-2)}\n.ftr ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}\n.ftr a{text-decoration:none}\n.ftr a:hover{text-decoration:underline}\n.ftr-bottom{margin-top:30px;padding-top:20px;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}\n\n/* ---------- sticky ---------- */\n.sticky{\n  position:fixed;left:0;right:0;bottom:0;z-index:70;\n  background:color-mix(in srgb,var(--ground) 92%,transparent);\n  backdrop-filter:blur(12px);border-top:1px solid var(--line);\n  padding:10px 16px calc(10px + env(safe-area-inset-bottom));\n  display:flex;gap:10px;align-items:center;\n  transform:translateY(120%);transition:transform .28s ease;\n}\n.sticky.on{transform:translateY(0)}\n.sticky .btn{flex:1;padding:14px 18px;min-height:50px}\n.sticky .btn-wa{flex:none;width:54px;padding:0}\n.wa-ic{width:22px;height:22px;flex:none}\n\n@media (prefers-reduced-motion:reduce){\n  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}\n}\n.reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s cubic-bezier(.22,.8,.28,1)}\n.reveal.in{opacity:1;transform:none}";document.head.appendChild(s);})();
var ZD_HOST = document.getElementById("zd-landing") || document.body;
ZD_HOST.innerHTML = "<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><symbol id=\"wa-ic\" viewBox=\"0 0 24 24\"><path d=\"M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z\"/></symbol></svg>\n<header class=\"hdr\">\n  <div class=\"wrap hdr-in\">\n    <a class=\"brand\" href=\"#top\">ZERDELI<span>.</span></a>\n    <div class=\"hdr-right\">\n      <a class=\"hdr-phone\" href=\"tel:+77780403999\">+7 778 040 3999</a>\n      <div class=\"langs\" role=\"group\" aria-label=\"Тіл / Язык\">\n        <button type=\"button\" data-lang=\"kz\" aria-pressed=\"false\">KZ</button>\n        <button type=\"button\" data-lang=\"ru\" aria-pressed=\"true\">RU</button>\n      </div>\n    </div>\n  </div>\n</header>\n\n<main id=\"top\">\n\n  <!-- ============ HERO ============ -->\n  <section class=\"hero\">\n    <div class=\"wrap hero-grid\">\n      <div class=\"hero-copy\">\n        <span class=\"eyebrow\" data-t=\"heroEyebrow\"></span>\n        <h1 data-t=\"heroH1\"></h1>\n        <p class=\"lead\" data-t=\"heroLead\"></p>\n        <div class=\"hero-cta\">\n          <a class=\"btn btn-primary\" href=\"#zapis\" data-t=\"ctaUrok\"></a>\n          <a class=\"btn btn-ghost\" href=\"#zayavka\" data-t=\"ctaTest\"></a>\n        </div>\n        <p class=\"hero-note\" data-t=\"heroNote\"></p>\n        <div class=\"hero-facts\">\n          <span class=\"fact\" data-t=\"fact1\"></span>\n          <span class=\"fact\" data-t=\"fact2\"></span>\n          <span class=\"fact\" data-t=\"fact3\"></span>\n        </div>\n      </div>\n\n      <!-- SIGNATURE: карта пробелов -->\n      <div class=\"report\" id=\"report\">\n        <div class=\"report-top\">\n          <div>\n            <div class=\"report-title\" data-t=\"repTitle\"></div>\n            <div class=\"report-sub\" data-t=\"repSub\"></div>\n          </div>\n          <span class=\"report-tag\" data-t=\"repTag\"></span>\n        </div>\n        <div class=\"rows\" id=\"reportRows\"></div>\n        <div class=\"report-legend\">\n          <span class=\"lg\"><i class=\"dot ok\"></i><span data-t=\"legOk\"></span></span>\n          <span class=\"lg\"><i class=\"dot mid\"></i><span data-t=\"legMid\"></span></span>\n          <span class=\"lg\"><i class=\"dot gap\"></i><span data-t=\"legGap\"></span></span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"builder-sec\" id=\"zayavka\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"bldEyebrow\"></span>\n      <h2 data-t=\"bldH2\" style=\"margin-top:12px\"></h2>\n      <p class=\"lead\" data-t=\"bldLead\" style=\"margin-top:12px\"></p>\n\n      <div class=\"builder\">\n        <!-- шаг 1: класс. Начинаем с него: пока человек не увидел вопросы,\n             просить телефон не за что -->\n        <div class=\"bstep\" id=\"s1\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">1</span><span class=\"bstep-t\" data-t=\"s1t\"></span></div>\n          <div id=\"grades\"></div>\n        </div>\n\n        <!-- шаг 2: предмет. Тест открывается прямо здесь, на этой же странице -->\n        <div class=\"bstep is-off\" id=\"s2\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">2</span><span class=\"bstep-t\" data-t=\"s2t\"></span></div>\n          <div class=\"tests\" id=\"subjects\"></div>\n          <p class=\"subj-hint\" id=\"subjHint\" data-t=\"s2hint\"></p>\n        </div>\n\n        <!-- сюда движок рисует сам тест: уходить на другую страницу не нужно -->\n        <div id=\"zd-test\" hidden></div>\n\n        <!-- Ворота: тест пройден, отчёт посчитан, но чтобы его увидеть,\n             нужен контакт. Здесь же и уходит заявка. -->\n        <div class=\"gate\" id=\"gate\" hidden>\n          <form id=\"form\" novalidate>\n            <span class=\"eyebrow\" data-t=\"gateEyebrow\"></span>\n            <h3 data-t=\"gateH\" style=\"margin-top:10px\"></h3>\n            <p class=\"gate-p\" data-t=\"gateP\"></p>\n\n            <div class=\"form-grid\" style=\"margin-top:18px\">\n              <div class=\"field\" id=\"fName\">\n                <label for=\"name\" data-t=\"fldName\"></label>\n                <input id=\"name\" name=\"name\" type=\"text\" autocomplete=\"name\" data-ph=\"phName\">\n                <span class=\"err-msg\" data-t=\"errName\"></span>\n              </div>\n              <div class=\"field\" id=\"fChild\">\n                <label for=\"child\" data-t=\"fldChild\"></label>\n                <input id=\"child\" name=\"child\" type=\"text\" data-ph=\"phChild\">\n                <span class=\"err-msg\" data-t=\"errChild\"></span>\n              </div>\n              <div class=\"field\" id=\"fPhone\">\n                <label for=\"phone\" data-t=\"fldPhone\"></label>\n                <input id=\"phone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+7 (___) ___-__-__\">\n                <span class=\"err-msg\" data-t=\"errPhone\"></span>\n              </div>\n              <div class=\"field\">\n                <label for=\"when\" data-t=\"fldWhen\"></label>\n                <select id=\"when\" name=\"when\">\n                  <option value=\"asap\" data-t=\"optAsap\"></option>\n                  <option value=\"evening\" data-t=\"optEvening\"></option>\n                  <option value=\"weekend\" data-t=\"optWeekend\"></option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-foot\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"submitBtn\" data-t=\"ctaSubmit\"></button>\n              <p class=\"consent\" data-t=\"consent\"></p>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ ЗНАКОМО ============ -->\n  <section class=\"reveal\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"painEyebrow\"></span>\n      <h2 data-t=\"painH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"pains\">\n        <div class=\"pain\" data-t=\"pain1\"></div>\n        <div class=\"pain\" data-t=\"pain2\"></div>\n        <div class=\"pain\" data-t=\"pain3\"></div>\n        <div class=\"pain\" data-t=\"pain4\"></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ ПОЧЕМУ ОЦЕНКА НЕ ОТВЕЧАЕТ ============ -->\n  <section class=\"reveal\" style=\"padding-top:0\">\n    <div class=\"wrap\">\n      <div class=\"why\">\n        <h2 data-t=\"whyH2\"></h2>\n        <p data-t=\"why1\"></p>\n        <p data-t=\"why2\"></p>\n        <p class=\"why-last\" data-t=\"why3\"></p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ КАК ПРОХОДИТ ============ -->\n  <section class=\"reveal\" style=\"padding-top:0\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"howEyebrow\"></span>\n      <h2 data-t=\"howH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"steps\">\n        <div class=\"step\">\n          <div class=\"step-n\">1</div>\n          <span class=\"step-when\" data-t=\"how1when\"></span>\n          <h3 data-t=\"how1h\"></h3>\n          <p data-t=\"how1p\"></p>\n        </div>\n        <div class=\"step\">\n          <div class=\"step-n\">2</div>\n          <span class=\"step-when\" data-t=\"how2when\"></span>\n          <h3 data-t=\"how2h\"></h3>\n          <p data-t=\"how2p\"></p>\n        </div>\n        <div class=\"step\">\n          <div class=\"step-n\">3</div>\n          <span class=\"step-when\" data-t=\"how3when\"></span>\n          <h3 data-t=\"how3h\"></h3>\n          <p data-t=\"how3p\"></p>\n        </div>\n        <div class=\"step\">\n          <div class=\"step-n\">4</div>\n          <span class=\"step-when\" data-t=\"how4when\"></span>\n          <h3 data-t=\"how4h\"></h3>\n          <p data-t=\"how4p\"></p>\n        </div>\n      </div>\n      <p class=\"where-note\" data-t=\"howWhere\"></p>\n    </div>\n  </section>\n\n  <!-- ============ ЧТО ПОЛУЧАЕТЕ ============ -->\n  <section class=\"reveal\" style=\"padding-top:0\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"getEyebrow\"></span>\n      <h2 data-t=\"getH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"gets\">\n        <div class=\"get\">\n          <span class=\"get-ic\"><svg viewBox=\"0 0 24 24\"><path d=\"M3 6h18M3 12h12M3 18h7\"/></svg></span>\n          <div><h3 data-t=\"get1h\"></h3><p data-t=\"get1p\"></p></div>\n        </div>\n        <div class=\"get\">\n          <span class=\"get-ic\"><svg viewBox=\"0 0 24 24\"><path d=\"M4 19V9m5 10V5m5 14v-7m5 7V8\"/></svg></span>\n          <div><h3 data-t=\"get2h\"></h3><p data-t=\"get2p\"></p></div>\n        </div>\n        <div class=\"get\">\n          <span class=\"get-ic\"><svg viewBox=\"0 0 24 24\"><path d=\"M8 3h8a2 2 0 0 1 2 2v14l-6-3-6 3V5a2 2 0 0 1 2-2Z\"/></svg></span>\n          <div><h3 data-t=\"get3h\"></h3><p data-t=\"get3p\"></p></div>\n        </div>\n        <div class=\"get\">\n          <span class=\"get-ic\"><svg viewBox=\"0 0 24 24\"><path d=\"M9 12l2 2 4-4\"/><circle cx=\"12\" cy=\"12\" r=\"9\"/></svg></span>\n          <div><h3 data-t=\"get4h\"></h3><p data-t=\"get4p\"></p></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ ЧЕМПИОНЫ ============ -->\n  <section class=\"reveal\" style=\"padding-top:0\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"champEyebrow\"></span>\n      <h2 data-t=\"champH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"champs\" id=\"champs\"></div>\n      <p class=\"champ-note\" data-t=\"champNote\"></p>\n    </div>\n  </section>\n\n  <!-- ============ ЗАПИСЬ НА УРОК ============ -->\n  <section class=\"builder-sec\" id=\"zapis\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"zapEyebrow\"></span>\n      <h2 data-t=\"zapH2\" style=\"margin-top:12px\"></h2>\n      <p class=\"lead\" data-t=\"zapLead\" style=\"margin-top:12px\"></p>\n\n      <div class=\"builder\" id=\"zapBuilder\">\n        <div class=\"bstep\" id=\"u1\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">1</span><span class=\"bstep-t\" data-t=\"u1t\"></span></div>\n          <div id=\"uGrades\"></div>\n        </div>\n\n        <div class=\"bstep is-off\" id=\"u2\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">2</span><span class=\"bstep-t\" data-t=\"u2t\"></span></div>\n          <div class=\"slots\" id=\"uSlots\"></div>\n          <p class=\"subj-hint\" id=\"uNoSlots\" data-t=\"u2none\" hidden></p>\n        </div>\n\n        <div class=\"bstep is-off\" id=\"u3\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">3</span><span class=\"bstep-t\" data-t=\"u3t\"></span></div>\n          <div class=\"chips\" id=\"uLang\"></div>\n        </div>\n\n        <div class=\"bstep is-off\" id=\"u4\">\n          <div class=\"bstep-h\"><span class=\"bstep-n\">4</span><span class=\"bstep-t\" data-t=\"u4t\"></span></div>\n          <form id=\"uForm\" novalidate>\n            <div class=\"form-grid\">\n              <div class=\"field\" id=\"ufChild\">\n                <label for=\"uChild\" data-t=\"fldChild\"></label>\n                <input id=\"uChild\" type=\"text\" data-ph=\"phChild\">\n                <span class=\"err-msg\" data-t=\"errChild\"></span>\n              </div>\n              <div class=\"field\" id=\"ufName\">\n                <label for=\"uName\" data-t=\"fldName\"></label>\n                <input id=\"uName\" type=\"text\" autocomplete=\"name\" data-ph=\"phName\">\n                <span class=\"err-msg\" data-t=\"errName\"></span>\n              </div>\n              <div class=\"field\" id=\"ufPhone\">\n                <label for=\"uPhone\" data-t=\"fldPhone\"></label>\n                <input id=\"uPhone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+7 (___) ___-__-__\">\n                <span class=\"err-msg\" data-t=\"errPhone\"></span>\n              </div>\n            </div>\n            <div class=\"form-foot\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"uSubmit\"></button>\n              <p class=\"consent\" data-t=\"consent\"></p>\n            </div>\n          </form>\n        </div>\n\n        <!-- После отправки: заявка уже записана, дальше оплата.\n             Порядок именно такой — если человек уйдёт и не заплатит,\n             телефон у нас всё равно останется. -->\n        <div class=\"paybox\" id=\"paybox\" hidden>\n          <span class=\"eyebrow\" data-t=\"payEyebrow\"></span>\n          <h3 data-t=\"payH\" style=\"margin-top:10px\"></h3>\n          <p class=\"gate-p\" id=\"payWhat\"></p>\n          <a class=\"btn btn-kaspi btn-block\" id=\"payBtn\" target=\"_blank\" rel=\"noopener\"></a>\n          <p class=\"consent\" data-t=\"payNote\"></p>\n          <p class=\"consent\" id=\"paySent\"></p>\n        </div>\n      </div>\n\n      <!-- цена и состав: сразу под формой, чтобы не искать -->\n      <div class=\"pricecard\">\n        <div class=\"pricecard-top\">\n          <span class=\"price-num\" id=\"priceNum\"></span>\n          <span class=\"price-note\" data-t=\"priceNote\"></span>\n        </div>\n        <ul class=\"incl\" id=\"incl\"></ul>\n        <p class=\"pricecard-foot\" data-t=\"priceFoot\"></p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ РЕБЁНКУ ============ -->\n  <section class=\"reveal\" style=\"padding-top:0\">\n    <div class=\"wrap\">\n      <div class=\"kid\">\n        <span class=\"eyebrow\" data-t=\"kidEyebrow\"></span>\n        <h2 data-t=\"kidH2\" style=\"margin-top:12px\"></h2>\n        <p data-t=\"kid1\"></p>\n        <p data-t=\"kid2\"></p>\n        <p data-t=\"kid3\"></p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ КАТАЛОГ ПРЕДМЕТОВ ============ -->\n  <section class=\"reveal\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"catEyebrow\"></span>\n      <h2 data-t=\"catH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"catalog\" id=\"catalog\"></div>\n    </div>\n  </section>\n\n  <!-- ============ PROOF ============ -->\n  <section class=\"proof\">\n    <div class=\"wrap proof-grid\">\n      <div class=\"big\">133<small data-t=\"proofBig\"></small></div>\n      <div>\n        <span class=\"eyebrow\" data-t=\"proofEyebrow\"></span>\n        <p style=\"margin-top:12px\" data-t=\"proofP\"></p>\n        <p class=\"proof-note\" data-t=\"proofNote\"></p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ FAQ ============ -->\n  <section class=\"reveal\">\n    <div class=\"wrap\">\n      <span class=\"eyebrow\" data-t=\"faqEyebrow\"></span>\n      <h2 data-t=\"faqH2\" style=\"margin-top:12px\"></h2>\n      <div class=\"faq\" id=\"faq\"></div>\n    </div>\n  </section>\n\n  <!-- ============ FINAL ============ -->\n  <section class=\"final\">\n    <div class=\"wrap final-in\">\n      <h2 data-t=\"finH2\"></h2>\n      <p class=\"lead\" data-t=\"finLead\"></p>\n      <div class=\"hero-cta\" style=\"justify-content:center\">\n        <a class=\"btn btn-primary\" href=\"#zapis\" data-t=\"ctaUrok\"></a>\n        <a class=\"btn btn-ghost\" href=\"#zayavka\" data-t=\"ctaTest\"></a>\n      </div>\n    </div>\n  </section>\n\n  <!-- ============ FOOTER ============ -->\n  <footer class=\"ftr\">\n    <div class=\"wrap\">\n      <div class=\"ftr-grid\">\n        <div>\n          <h4 data-t=\"ftrWhere\"></h4>\n          <p data-t=\"ftrCity\"></p>\n          <p style=\"margin-top:10px\"><a href=\"tel:+77780403999\">+7 778 040 3999</a></p>\n          <p><a href=\"https://wa.me/77780403999\" target=\"_blank\" rel=\"noopener\">WhatsApp</a></p>\n        </div>\n        <div>\n          <h4 data-t=\"ftrBranches\"></h4>\n          <!-- список рисуется скриптом из FILIALY: адреса лежат в одном месте -->\n          <ul id=\"ftrAddr\"></ul>\n        </div>\n        <div>\n          <h4 data-t=\"ftrNav\"></h4>\n          <ul>\n            <li><a href=\"#zapis\" data-t=\"ftrNav1\"></a></li>\n            <li><a href=\"#zayavka\" data-t=\"ftrNav3\"></a></li>\n            <li><a href=\"#top\" data-t=\"ftrNav2\"></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"ftr-bottom\">© <span id=\"yr\"></span> Zerdeli Education · Алматы</div>\n    </div>\n  </footer>\n</main>\n\n<div class=\"sticky\" id=\"sticky\">\n  <a class=\"btn btn-primary\" href=\"#zapis\" data-t=\"ctaSticky\"></a>\n  <a class=\"btn btn-wa\" href=\"https://wa.me/77780403999\" target=\"_blank\" rel=\"noopener\" aria-label=\"WhatsApp\">\n    <svg class=\"wa-ic\" fill=\"#25D366\" aria-hidden=\"true\"><use href=\"#wa-ic\"/></svg>\n  </a>\n</div>";

/* ============================================================
   1. НАСТРОЙКИ — правьте здесь
   ============================================================ */
const CONFIG = {
  // язык определяется по адресу страницы: .../diagnostika-znaniy-kz → казахский
  // язык: сначала выбор человека, потом адрес страницы
  lang: (function(){
    try{ var v = localStorage.getItem('zd-lang'); if(v === 'kz' || v === 'ru') return v; }catch(e){}
    return (typeof location !== 'undefined' && /-kz\/?$/.test(location.pathname)) ? 'kz' : 'ru';
  })(),
  urlRu: '/diagnostika-znaniy',      // адрес русской версии
  urlKz: '/diagnostika-znaniy-kz',   // адрес казахской версии
  price: 2490,                // цена пробного урока, ₸
  // Ссылка «Оплата по ссылке» из приложения Kaspi Pay. Не эквайринг и не API:
  // к домену не привязана, работает с любой страницы. Сумма в ней фиксированная.
  kaspi: 'https://pay.kaspi.kz/pay/1gmqs5uj',
  // Классы, для которых сейчас есть пробный урок. Тест при этом есть для 2–9:
  // родителю седьмого класса нельзя обещать урок, которого нет.
  urokGrades: [3, 4, 5, 6],
  whatsapp: '77780403999',
  // Единственный адрес, куда уходит всё: и заявка, и результат каждого теста.
  // Это веб-приложение Google Apps Script (_src/priyomnik.gs): оно кладёт строку
  // в таблицу и оттуда же пишет в телеграм-бот. Токен бота живёт там, не здесь.
  // Меняется только эта строка, между кавычками — заканчивается на /exec
  endpoint: 'https://script.google.com/macros/s/AKfycbz9bLV1C3Pd38h1L24uf0hG9xx_RLyvLfXSmOm8Bz2HWsqgzdfD2_DlS2L5Nf5Q-VTN/exec',
  testRu: '/test',            // страница прохождения теста
  testKz: '/test-kz',
  // манифест тестов из репозитория. Из него берутся классы и предметы:
  // так лендинг не расходится с тем, что на самом деле лежит в тестах.
  manifest: 'https://nursultannewvibe.github.io/zerdeli-diagnostika-2-9/manifest.json'
};

/* Филиалы — одним списком: адреса встречаются в подвале, в ответах на вопросы
   и в PDF-отчёте, и переезжать они будут ещё не раз. Правится здесь.
   head — головной; с сентября 2026 это Гагарина 93, угол Құрманғазы. */
const FILIALY = [
  {ru:'Гагарина 93, угол Құрманғазы', kz:'Гагарин 93, Құрманғазы қиылысы', head:true},
  {ru:'Бухар Жырау 66',         kz:'Бұхар Жырау 66'},
  {ru:'Сейфуллина 458',         kz:'Сейфуллин 458'},
  {ru:'Наурызбай батыра 99/1',  kz:'Наурызбай батыр 99/1'},
  {ru:'Розыбакиева 247',        kz:'Розыбакиев 247'},
  {ru:'Ақсай-4, 83',            kz:'Ақсай-4, 83'},
  {ru:'мкр Шұғыла 340/4 к9',    kz:'Шұғыла ы/а, 340/4 к9'}
];
/* Расписание пробных уроков. Одна площадка — головной филиал.
   Правится здесь; страница и телеграм берут слоты отсюда.
   d — день недели, t — время. Порядок слотов такой же, как показываем. */
const RASPISANIE = {
  3: [{d:1, t:'10:30–11:30'}, {d:3, t:'15:30–16:30'}, {d:5, t:'10:30–11:30'}, {d:6, t:'14:30–15:30'}],
  4: [{d:2, t:'10:30–11:30'}, {d:4, t:'15:30–16:30'}, {d:6, t:'10:30–11:30'}, {d:6, t:'16:30–17:30'}],
  5: [{d:1, t:'15:30–16:30'}, {d:3, t:'10:30–11:30'}, {d:5, t:'15:30–16:30'}, {d:6, t:'12:30–13:30'}],
  6: [{d:2, t:'15:30–16:30'}, {d:4, t:'10:30–11:30'}, {d:6, t:'11:30–12:30'}, {d:6, t:'15:30–16:30'}]
};
const DNI = {
  ru: {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота'},
  kz: {1:'Дүйсенбі', 2:'Сейсенбі', 3:'Сәрсенбі', 4:'Бейсенбі', 5:'Жұма', 6:'Сенбі'}
};

/* Чемпионы. Имена, баллы и фото уже опубликованы на сайте (zd-champions.js),
   договор с родителями есть. Баллы — из 1500, у РФМШ своя шкала. */
const CHEMPIONY = [
  {n:'Шалқар Манар',     s:'1465', ru:'Третье место по стране · IB',
   img:'https://s3.amazonaws.com/webflow-prod-assets/6a847f917c9f2e7b1cb57da6/6a92a3ce1a528791e96bcc41_shalkar-manar.jpg',
   kz:'Ел бойынша үшінші орын · IB'},
  {n:'Сләмхақ Аят',      s:'1450', ru:'Абсолютный чемпион Алматы · ФМН',
   img:'https://s3.amazonaws.com/webflow-prod-assets/6a847f917c9f2e7b1cb57da6/6a92a3ce5162f1b7d9e6cc3d_slyamkak-ayat.jpg',
   kz:'Алматы қаласының абсолют чемпионы · ФМН'},
  {n:'Жанәбіл Еркебұлан', s:'1431', ru:'Абсолютный чемпион Алматы · ХБН',
   img:'https://s3.amazonaws.com/webflow-prod-assets/6a847f917c9f2e7b1cb57da6/6a92a3cea878118b825a8c68_zhanabil-erkebulan.jpg',
   kz:'Алматы қаласының абсолют чемпионы · ХБН'},
  {n:'Ажигулов Алихан',  s:'150/150', ru:'Абсолютный чемпион республики · РФМШ',
   img:'https://s3.amazonaws.com/webflow-prod-assets/6a847f917c9f2e7b1cb57da6/6a92a3cd756efc2f1f931d5f_azhigulov-alikhan.jpg',
   kz:'Республика бойынша абсолют чемпион · РФММ'}
];

// язык передаём аргументом: сам список объявлен выше того места,
// где определяется lang
function filialyStroka(l){ return FILIALY.map(f=> f[l]).join('; '); }

// Движок теста берёт адрес приёмника из window. Ставим его отсюда, чтобы
// правился он в одном месте — в CONFIG выше, а не в двух файлах сразу.
// Лендинг подключается раньше движка, так что тот увидит уже готовое значение.
if (typeof window !== 'undefined') {
  if (!window.ZERDELI_ENDPOINT) window.ZERDELI_ENDPOINT = CONFIG.endpoint;
  // Где движку искать tests.json и images.json. Тот же репозиторий, что и манифест.
  if (!window.ZERDELI_TESTS_BASE) {
    window.ZERDELI_TESTS_BASE = CONFIG.manifest.replace(/manifest\.json$/, '');
  }
  // Движок сам ничего не открывает: тест запускает лендинг по клику на предмет.
  window.ZERDELI_TEST_EMBEDDED = true;
}

/* ============================================================
   2. ПРОГРАММА ДИАГНОСТИКИ — правьте здесь
   Ключ — класс. subjects — что реально входит в комплекс.
   minutes — примерное время на весь комплекс.
   Источник: папка «Сынақ тесті Примеры» на Google Диске.
   ⚠ 9 класс — состав по аналогии с 7–8, папка была недоступна: сверить.
   ============================================================ */
const PROGRAM = {
  2: {minutes:30, subjects:[{ru:'Математика',            kz:'Математика'}]},
  3: {minutes:35, subjects:[{ru:'Математика',            kz:'Математика'}]},
  4: {minutes:45, subjects:[{ru:'Математика',            kz:'Математика'},
                            {ru:'Английский язык',       kz:'Ағылшын тілі'}]},
  5: {minutes:90, subjects:[{ru:'Математика',            kz:'Математика'},
                            {ru:'Естествознание',        kz:'Жаратылыстану'},
                            {ru:'Количественные характеристики', kz:'Сандық сипаттама'},
                            {ru:'Казахский язык',        kz:'Қазақ тілі'},
                            {ru:'Русский язык',          kz:'Орыс тілі'},
                            {ru:'Английский язык',       kz:'Ағылшын тілі'}]},
  6: {minutes:35, subjects:[{ru:'Математика',            kz:'Математика'}]},
  7: {minutes:70, subjects:[{ru:'Алгебра и геометрия',   kz:'Алгебра-геометрия'},
                            {ru:'Физика',                kz:'Физика'},
                            {ru:'Химия',                 kz:'Химия'},
                            {ru:'Английский язык',       kz:'Ағылшын тілі'}]},
  8: {minutes:70, subjects:[{ru:'Алгебра и геометрия',   kz:'Алгебра-геометрия'},
                            {ru:'Физика',                kz:'Физика'},
                            {ru:'Химия',                 kz:'Химия'},
                            {ru:'Английский язык',       kz:'Ағылшын тілі'}]},
  9: {minutes:70, subjects:[{ru:'Алгебра и геометрия',   kz:'Алгебра-геометрия'},
                            {ru:'Физика',                kz:'Физика'},
                            {ru:'Химия',                 kz:'Химия'},
                            {ru:'Английский язык',       kz:'Ағылшын тілі'}]}
};

const STAGES = [
  {id:'primary', from:2, to:4, ru:'Начальная школа', kz:'Бастауыш сынып'},
  {id:'middle',  from:5, to:6, ru:'5–6 класс',       kz:'5–6 сынып'},
  {id:'senior',  from:7, to:9, ru:'7–9 класс',       kz:'7–9 сынып'}
];

/* ============================================================
   3. ТЕКСТЫ — правьте здесь
   ============================================================ */
const T = {ru:{
  title:'Пробный урок · 3–6 класс · Zerdeli',
  heroEyebrow:'Пробный урок · 3–6 класс · Алматы',
  heroH1:'Дневник показывает оценку. Мы показываем причину',
  heroLead:'Пробный урок 60 минут: тест — занятие — снова тест. Вы уходите с картой пробелов по темам и листом «было — стало». Не с впечатлением, а с бумагой в руках.',
  ctaUrok:'Записаться на урок — __PRICE__ ₸',
  ctaTest:'Сначала пройти тест бесплатно',
  ctaSticky:'Записаться — __PRICE__ ₸',
  heroNote:'Тест дома с телефона, 20 минут, бесплатно, для 2–9 класса. Отчёт придёт сразу.',
  fact1:'27 учеников в НИШ и РФМШ',
  fact2:'Лучший результат 1465 из 1500',
  fact3:'7 филиалов в Алматы',

  repTitle:'Карта пробелов · Математика',
  repSub:'Так выглядит отчёт, который вы получаете',
  repTag:'Пример',
  legOk:'Тема усвоена',
  legMid:'Требует повторения',
  legGap:'Пробел',
  rows:[
    {n:'Числа и действия над ними',   v:85, s:'ok'},
    {n:'Периметр, площадь, объём',    v:38, s:'gap'},
    {n:'Пространственные фигуры',     v:72, s:'ok'},
    {n:'Текстовые задачи',            v:30, s:'gap'},
    {n:'Доли и дроби',                v:56, s:'mid'}
  ],

  painEyebrow:'Знакомо?',
  painH2:'Оценки есть, а понимания нет',
  pain1:'В дневнике четвёрки, а базовых тем прошлого года ребёнок не помнит.',
  pain2:'Репетитор начинает с нуля — он тоже не знает, где именно пробел.',
  pain3:'Ребёнок говорит «всё понятно», а на контрольной результат другой.',
  pain4:'Непонятно, что подтягивать в первую очередь и сколько это займёт.',

  whyH2:'Почему оценка не отвечает на вопрос',
  why1:'Школьная оценка измеряет не уровень, а соответствие требованиям конкретного учителя. В одной школе это «5», в соседней — «3». Ребёнок тот же.',
  why2:'На отборе в НИШ и РФМШ до проходного балла чаще всего не хватает одного-двух заданий. Не года подготовки. Одной темы, которую вовремя не заметили.',
  why3:'Поэтому мы не ставим оценку. Мы измеряем: что ребёнок знает сейчас и как быстро схватывает новое.',

  howEyebrow:'Как проходит урок',
  howH2:'60 минут, четыре шага',
  how1when:'10 минут',
  how1h:'Тест',
  how1p:'Что ребёнок знает по теме прямо сейчас.',
  how2when:'40 минут',
  how2h:'Занятие',
  how2p:'Тема программы своего класса, педагог ведёт группу.',
  how3when:'10 минут',
  how3h:'Снова тест',
  how3p:'Тот же уровень, другие задачи. Замер в начале показывает уровень, замер в конце — как ребёнок учится. Разница и есть ответ.',
  how4when:'После урока',
  how4h:'Результат',
  how4p:'Лист «было — стало» с разбором ошибок и сборник задач домой. Дальше звонит менеджер и разбирает результат.',
  howWhere:'Уроки идут на Гагарина 93, угол Құрманғазы. Расписание — ниже, при записи.',

  getEyebrow:'Что остаётся у вас',
  getH2:'Вы уходите с документом, а не с впечатлением',
  get1h:'Лист «было — стало»',
  get1p:'Два замера за один час, с разбором каждой ошибки.',
  get2h:'Карта пробелов по темам',
  get2p:'Полный список тем программы класса с отметкой уровня по каждой.',
  get3h:'Сборник задач домой',
  get3p:'По тем темам, где у ребёнка провал. К нему есть видеоразбор на YouTube — можно пересмотреть дома столько раз, сколько нужно.',
  get4h:'Звонок менеджера',
  get4p:'Разбираем результат и говорим, с чего начинать.',

  champEyebrow:'Так это работает',
  champH2:'Они тоже начинали с пробного урока',
  champNote:'Большинство из них пришли к нам обычным пробным уроком. Никто из них в тот день не знал, что через два года будет в этом списке.',

  zapEyebrow:'Запись',
  zapH2:'Выберите класс и удобное время',
  zapLead:'Уроки идут на Гагарина 93, угол Құрманғазы, по расписанию класса. Оплата закрепляет место, подтверждение придёт в WhatsApp.',
  u1t:'Класс ребёнка',
  u2t:'День и время',
  u2none:'Пробный урок сейчас идёт для 3–6 класса. По вашему классу группа набирается — оставьте контакт, менеджер напишет, как только откроется время. Бесплатный тест доступен уже сейчас.',
  u3t:'Язык группы',
  u4t:'Ваши контакты',
  uLangKz:'Қазақша',
  uLangRu:'Русский',
  uPay:'Записаться — __PRICE__ ₸',
  uLead:'Оставить заявку',

  payEyebrow:'Заявка принята',
  payH:'Остался последний шаг — оплата',
  payBtn:'Оплатить __PRICE__ ₸ в Kaspi',
  payNote:'Место закрепляется после оплаты. Подтверждение придёт в WhatsApp. Если оплатить сейчас не получается — ничего страшного, менеджер свяжется и поможет.',
  paySentOk:'Заявку мы получили.',
  paySentFail:'Заявка не ушла — напишите нам в WhatsApp, запишем вручную.',
  leadDone:'Заявка принята. Менеджер напишет вам в WhatsApp, как только откроется группа по вашему классу.',

  priceNote:'60 минут · в группе 15 мест · Гагарина 93',
  incl1:'Урок 60 минут в группе до 15 человек',
  incl2:'Замер в начале и замер в конце',
  incl3:'Лист «было — стало» на руках',
  incl4:'Карта пробелов по темам программы',
  incl5:'Сборник задач домой + видеоразбор',
  incl6:'Звонок менеджера с планом',
  priceFoot:'Не готовы платить, не увидев результата — пройдите бесплатный тест. Карта пробелов по вашему ребёнку придёт сегодня, ничего платить не нужно.',

  kidEyebrow:'Для ребёнка',
  kidH2:'Покажите этот кусок ребёнку',
  kid1:'Это не экзамен. Оценок мы не ставим и в школу ничего не передаём.',
  kid2:'Час в группе, где никто никого не знает. В начале решишь несколько задач — просто чтобы понять, с чего начинать. Потом занятие. В конце ещё несколько задач, и ты сам увидишь, что за час стало получаться лучше.',
  kid3:'Домой заберёшь сборник задач. К нему есть видео, где всё разбирают. Всё.',

  bldEyebrow:'Бесплатно',
  bldH2:'Не готовы записываться — начните с теста',
  bldLead:'Он бесплатный и занимает 20 минут, есть для 2–9 класса. Ребёнок проходит дома с телефона, вопросы на казахском и русском — отвечает на удобном языке. Отчёт по темам придёт сразу после теста.',
  s1t:'Класс ребёнка',
  s2t:'Выберите предмет',
  s2hint:'Тест откроется прямо здесь. Пройти можно все предметы по очереди — результат по каждому сохранится.',
  gateEyebrow:'Тест пройден',
  gateH:'Отчёт готов — куда его прислать',
  gateP:'Мы посчитали результат по каждой теме программы. Оставьте контакт: покажем карту пробелов на экране и пришлём её файлом.',
  sumLabel:'Вы выбрали:',
  kitTime:'Примерно __MIN__ минут на всё',
  kitNote:'Тесты можно проходить не подряд — ребёнок делает их в удобное время в течение недели.',
  subjOne:'предмет', subjFew:'предмета', subjMany:'предметов',
  fldName:'Ваше имя',
  phName:'Как к вам обращаться',
  fldChild:'Имя ребёнка',
  phChild:'Чей это результат',
  fldPhone:'Телефон (WhatsApp)',
  fldWhen:'Когда удобно созвониться',
  optAsap:'Как можно скорее',
  optEvening:'В будни после 18:00',
  optWeekend:'В выходные',
  ctaSubmit:'Показать результат',
  errName:'Напишите имя',
  errChild:'Напишите имя ребёнка',
  errPhone:'Проверьте номер: нужно 11 цифр',
  consent:'Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы звоним только по этой заявке.',
  testsOne:'Открыть тест', testsSoon:'Тест готовится',
  testsNone:'Тесты для этого класса ещё готовятся — менеджер пришлёт ссылку в WhatsApp.',
  engineErr:'Тест не загрузился. Обновите страницу, а если не поможет — напишите нам в WhatsApp.',
  testDone:'пройден',

  catEyebrow:'Что входит в бесплатный тест',
  catH2:'Предметы по классам',

  proofEyebrow:'Про отбор',
  proofBig:' балла',
  proofP:'В 2024 году в НИШ и РФМШ до проходного балла абитуриентам чаще всего не хватало одного-двух заданий.',
  proofNote:'Именно поэтому важно знать, каких тем не хватает, а не общую оценку.',

  faqEyebrow:'Вопросы',
  faqH2:'Что обычно спрашивают',
  faq:[
    {q:'Ребёнок не хочет никуда идти.', a:'Это нормально — он слышит «проверка». Скажите, что оценок не ставят и в школу ничего не передают. Час, группа сверстников, сборник задач домой. Выше на этой странице есть кусок, написанный специально для него — покажите.'},
    {q:'Нам будут продавать абонемент?', a:'После урока вам позвонит менеджер — да, это в том числе предложение продолжить. Мы не прячем этот шаг. Но лист с результатом, карта пробелов и сборник задач остаются у вас в любом случае, покупать вы ничего не обязаны.'},
    {q:'А если жалко __PRICE__ ₸, не зная, что получим?', a:'Тогда начните с бесплатного теста. Он покажет карту пробелов по вашему ребёнку сегодня и не стоит ничего. Решите платить — уже зная, за что.'},
    {q:'У нас четвёрки, зачем нам это?', a:'Четвёрка в одной школе и четвёрка в соседней — разные вещи. Урок показывает не оценку, а конкретные темы: эту знает, эту нет.'},
    {q:'Где проходит урок?', a:'Гагарина 93, угол Құрманғазы. Пока только там — расписание собрано на одной площадке, чтобы в каждой группе был сильный педагог.'},
    {q:'На каком языке идёт урок?', a:'Есть группы на казахском и на русском. Язык выбираете при записи.'},
    {q:'Сколько детей в группе?', a:'До 15. Педагог успевает увидеть каждого — на этом и держится результат.'},
    {q:'Нужно ли что-то готовить заранее?', a:'Нет. Ничего не учить, ничего не приносить. Если успеете — пройдите бесплатный онлайн-тест, тогда педагог придёт на урок уже подготовленным.'},
    {q:'Родителю можно присутствовать?', a:'На самом уроке лучше не надо — дети при родителях зажимаются. Результат ребёнок выносит вам на руках, а разбор будет по телефону с менеджером.'},
    {q:'Что если ребёнок заболел?', a:'Напишите нам — подберём другой день по расписанию класса.'}
  ],

  finH2:'Один час вместо трёх месяцев вслепую',
  finLead:'Запишитесь на урок или начните с бесплатного теста — как удобнее.',

  ftrWhere:'Урок проходит здесь',
  ftrHead:'головной филиал',
  ftrCity:'Алматы',
  ftrBranches:'Филиалы в Алматы',
  ftrNav:'Навигация',
  ftrNav1:'Записаться на урок',
  ftrNav3:'Пройти тест бесплатно',
  ftrNav2:'В начало страницы'
},
kz:{
  title:'Сынақ сабақ · 3–6 сынып · Zerdeli',
  heroEyebrow:'Сынақ сабақ · 3–6 сынып · Алматы',
  heroH1:'Күнделік баға көрсетеді. Біз себебін көрсетеміз',
  heroLead:'Сынақ сабақ 60 минут: тест — сабақ — тағы тест. Қолыңызға тақырып бойынша олқылықтар картасы және «болды — болды» парағы тиеді. Әсер емес, қағаз.',
  ctaUrok:'Сабаққа жазылу — __PRICE__ ₸',
  ctaTest:'Алдымен тесттен өту, тегін',
  ctaSticky:'Жазылу — __PRICE__ ₸',
  heroNote:'Тест үйде, телефоннан, 20 минут, тегін, 2–9 сыныпқа. Есеп бірден келеді.',
  fact1:'НИШ пен РФММ-да 27 оқушы',
  fact2:'Ең жоғары нәтиже 1500-ден 1465',
  fact3:'Алматыда 7 филиал',

  repTitle:'Олқылықтар картасы · Математика',
  repSub:'Сізге келетін есеп осылай көрінеді',
  repTag:'Мысал',
  legOk:'Тақырып меңгерілген',
  legMid:'Қайталау керек',
  legGap:'Олқылық',
  rows:[
    {n:'Сандар және олармен амалдар',  v:85, s:'ok'},
    {n:'Периметр, аудан, көлем',       v:38, s:'gap'},
    {n:'Кеңістік фигуралары',          v:72, s:'ok'},
    {n:'Мәтінді есептер',              v:30, s:'gap'},
    {n:'Үлестер мен бөлшектер',        v:56, s:'mid'}
  ],

  painEyebrow:'Таныс па?',
  painH2:'Баға бар, түсінік жоқ',
  pain1:'Күнделікте төрттік, ал өткен жылдың негізгі тақырыптарын бала білмейді.',
  pain2:'Репетитор нөлден бастайды — олқылық қайда екенін ол да білмейді.',
  pain3:'Бала «бәрі түсінікті» дейді, ал бақылау жұмысында нәтиже басқа.',
  pain4:'Алдымен нені түзеу керегі және оған қанша уақыт кететіні белгісіз.',

  whyH2:'Неге баға жауап бермейді',
  why1:'Мектеп бағасы деңгейді емес, нақты мұғалімнің талабына сәйкестікті өлшейді. Бір мектепте «5», көршісінде «3». Бала сол бала.',
  why2:'НИШ пен РФММ іріктеуінде өту ұпайына көбіне бір-екі тапсырма жетпейді. Бір жылдық дайындық емес. Уақытында байқалмаған бір тақырып.',
  why3:'Сондықтан біз баға қоймаймыз. Өлшейміз: бала қазір нені біледі және жаңаны қаншалықты тез ұғады.',

  howEyebrow:'Сабақ қалай өтеді',
  howH2:'60 минут, төрт қадам',
  how1when:'10 минут',
  how1h:'Тест',
  how1p:'Бала тақырып бойынша дәл қазір нені біледі.',
  how2when:'40 минут',
  how2h:'Сабақ',
  how2p:'Өз сыныбының бағдарлама тақырыбы, мұғалім топпен жұмыс істейді.',
  how3when:'10 минут',
  how3h:'Тағы тест',
  how3p:'Дәл сол деңгей, басқа есептер. Басындағы өлшем деңгейді, соңындағысы баланың қалай үйренетінін көрсетеді. Айырма — міне, жауап.',
  how4when:'Сабақтан кейін',
  how4h:'Нәтиже',
  how4p:'Қателері талданған «болды — болды» парағы және үйге есептер жинағы. Кейін менеджер хабарласып, нәтижені талдайды.',
  howWhere:'Сабақтар Гагарин 93, Құрманғазы қиылысында өтеді. Кесте — төменде, жазылу кезінде.',

  getEyebrow:'Қолыңызда не қалады',
  getH2:'Әсермен емес, қағазбен шығасыз',
  get1h:'«Болды — болды» парағы',
  get1p:'Бір сағатта екі өлшем, әр қате талданған.',
  get2h:'Тақырып бойынша олқылықтар картасы',
  get2p:'Сынып бағдарламасының толық тізімі, әрқайсысында деңгей белгісі.',
  get3h:'Үйге есептер жинағы',
  get3p:'Дәл сол олқы тақырыптар бойынша. Оған YouTube-та видеоталдау бар — үйде қанша рет қажет болса, сонша қарауға болады.',
  get4h:'Менеджердің қоңырауы',
  get4p:'Нәтижені талдаймыз және неден бастау керегін айтамыз.',

  champEyebrow:'Бұл осылай жұмыс істейді',
  champH2:'Олар да сынақ сабақтан бастаған',
  champNote:'Көбі бізге қарапайым сынақ сабақпен келген. Сол күні олардың ешқайсысы екі жылдан кейін осы тізімде тұратынын білген жоқ.',

  zapEyebrow:'Жазылу',
  zapH2:'Сыныбыңызды және ыңғайлы уақытты таңдаңыз',
  zapLead:'Сабақтар Гагарин 93, Құрманғазы қиылысында, сынып кестесі бойынша өтеді. Төлем орынды бекітеді, растау WhatsApp-қа келеді.',
  u1t:'Баланың сыныбы',
  u2t:'Күн мен уақыт',
  u2none:'Сынақ сабақ қазір 3–6 сыныпқа өтіп жатыр. Сіздің сыныбыңыз бойынша топ жиналуда — байланысыңызды қалдырыңыз, уақыт ашылысымен менеджер хабарласады. Тегін тест қазір де қолжетімді.',
  u3t:'Топ тілі',
  u4t:'Байланысыңыз',
  uLangKz:'Қазақша',
  uLangRu:'Орысша',
  uPay:'Жазылу — __PRICE__ ₸',
  uLead:'Өтінім қалдыру',

  payEyebrow:'Өтінім қабылданды',
  payH:'Соңғы қадам — төлем',
  payBtn:'Kaspi арқылы __PRICE__ ₸ төлеу',
  payNote:'Орын төлемнен кейін бекітіледі. Растау WhatsApp-қа келеді. Қазір төлей алмасаңыз — ештеңе етпейді, менеджер хабарласып көмектеседі.',
  paySentOk:'Өтінімді алдық.',
  paySentFail:'Өтінім жіберілмеді — WhatsApp-қа жазыңыз, қолмен жазып қоямыз.',
  leadDone:'Өтінім қабылданды. Сыныбыңыз бойынша топ ашылысымен менеджер WhatsApp-қа жазады.',

  priceNote:'60 минут · топта 15 орын · Гагарин 93',
  incl1:'15 адамға дейінгі топта 60 минут сабақ',
  incl2:'Басында бір өлшем, соңында бір өлшем',
  incl3:'Қолға тиетін «болды — болды» парағы',
  incl4:'Бағдарлама тақырыптары бойынша олқылықтар картасы',
  incl5:'Үйге есептер жинағы + видеоталдау',
  incl6:'Жоспарымен менеджер қоңырауы',
  priceFoot:'Нәтижені көрмей төлегіңіз келмесе — тегін тесттен өтіңіз. Балаңыз бойынша олқылықтар картасы бүгін келеді, төлейтін ештеңе жоқ.',

  kidEyebrow:'Балаға',
  kidH2:'Мына бөлікті балаңызға көрсетіңіз',
  kid1:'Бұл емтихан емес. Баға қоймаймыз, мектепке ештеңе жібермейміз.',
  kid2:'Бір сағат, ешкім ешкімді танымайтын топта. Басында бірнеше есеп шығарасың — неден бастау керегін білу үшін ғана. Содан кейін сабақ. Соңында тағы бірнеше есеп, бір сағатта нені жақсы шығара бастағаныңды өз көзіңмен көресің.',
  kid3:'Үйге есептер жинағын аласың. Оған бәрін талдайтын видео бар. Болды.',

  bldEyebrow:'Тегін',
  bldH2:'Жазылуға әзір болмасаңыз — тесттен бастаңыз',
  bldLead:'Ол тегін, 20 минут алады, 2–9 сыныпқа бар. Бала үйде телефоннан өтеді, сұрақтар қазақша және орысша — ыңғайлы тілде жауап береді. Тақырып бойынша есеп тесттен кейін бірден келеді.',
  s1t:'Баланың сыныбы',
  s2t:'Пәнді таңдаңыз',
  s2hint:'Тест осы жерде ашылады. Пәндерді кезекпен өтуге болады — әрқайсысының нәтижесі сақталады.',
  gateEyebrow:'Тест тапсырылды',
  gateH:'Есеп дайын — қайда жіберейік',
  gateP:'Бағдарламаның әр тақырыбы бойынша нәтижені санап шықтық. Байланысыңызды қалдырыңыз: олқылықтар картасын экраннан көрсетіп, файлмен жібереміз.',
  sumLabel:'Сіз таңдадыңыз:',
  kitTime:'Барлығына шамамен __MIN__ минут',
  kitNote:'Тестерді қатарынан тапсыру міндетті емес — бала оларды апта ішінде ыңғайлы уақытта орындайды.',
  subjOne:'пән', subjFew:'пән', subjMany:'пән',
  fldName:'Атыңыз',
  phName:'Сізге қалай жүгінейік',
  fldChild:'Баланың аты',
  phChild:'Бұл кімнің нәтижесі',
  fldPhone:'Телефон (WhatsApp)',
  fldWhen:'Қашан хабарласқан ыңғайлы',
  optAsap:'Мүмкіндігінше тез',
  optEvening:'Жұмыс күндері 18:00-ден кейін',
  optWeekend:'Демалыс күндері',
  ctaSubmit:'Нәтижені көрсету',
  errName:'Атыңызды жазыңыз',
  errChild:'Баланың атын жазыңыз',
  errPhone:'Нөмірді тексеріңіз: 11 сан керек',
  consent:'Түймені басу арқылы дербес деректерді өңдеуге келісім бересіз. Біз тек осы өтінім бойынша хабарласамыз.',
  testsOne:'Тестті ашу', testsSoon:'Тест әзірленуде',
  testsNone:'Бұл сыныпқа тестер әзірленуде — менеджер WhatsApp-қа сілтеме жібереді.',
  engineErr:'Тест жүктелмеді. Бетті жаңартып көріңіз, көмектеспесе — WhatsApp-қа жазыңыз.',
  testDone:'тапсырылды',

  catEyebrow:'Тегін тестке не кіреді',
  catH2:'Сыныптар бойынша пәндер',

  proofEyebrow:'Іріктеу туралы',
  proofBig:' ұпай',
  proofP:'2024 жылы НИШ пен РФММ-ға түсушілерге өту ұпайына көбіне бір-екі тапсырма жетпеді.',
  proofNote:'Сондықтан жалпы бағаны емес, қай тақырып жетіспейтінін білу маңызды.',

  faqEyebrow:'Сұрақтар',
  faqH2:'Жиі қойылатын сұрақтар',
  faq:[
    {q:'Бала ешқайда барғысы келмейді.', a:'Бұл қалыпты — ол «тексеру» дегенді естиді. Баға қойылмайтынын, мектепке ештеңе жіберілмейтінін айтыңыз. Бір сағат, құрдастар тобы, үйге есептер жинағы. Жоғарыда арнайы ол үшін жазылған бөлік бар — көрсетіңіз.'},
    {q:'Бізге абонемент сатады ма?', a:'Сабақтан кейін менеджер хабарласады — иә, бұл жалғастыру туралы ұсыныс та. Біз бұл қадамды жасырмаймыз. Бірақ нәтиже парағы, олқылықтар картасы және есептер жинағы қалай болса да сізде қалады, ештеңе сатып алуға міндетті емессіз.'},
    {q:'__PRICE__ ₸-ні не алатынымызды білмей төлеу қиын.', a:'Онда тегін тесттен бастаңыз. Ол балаңыз бойынша олқылықтар картасын бүгін көрсетеді және ештеңе тұрмайды. Төлеу-төлемеуді содан кейін шешесіз.'},
    {q:'Бізде төрттік, бұл не үшін керек?', a:'Бір мектептегі төрттік пен көршідегі төрттік — екі бөлек нәрсе. Сабақ бағаны емес, нақты тақырыптарды көрсетеді: мынаны біледі, мынаны білмейді.'},
    {q:'Сабақ қайда өтеді?', a:'Гагарин 93, Құрманғазы қиылысы. Әзірге тек сонда — кесте бір алаңға жиналған, әр топта күшті мұғалім болуы үшін.'},
    {q:'Сабақ қай тілде өтеді?', a:'Қазақша және орысша топтар бар. Тілді жазылу кезінде таңдайсыз.'},
    {q:'Топта қанша бала?', a:'15-ке дейін. Мұғалім әрқайсысын көріп үлгереді — нәтиже осыған сүйенеді.'},
    {q:'Алдын ала дайындалу керек пе?', a:'Жоқ. Ештеңе оқудың, ештеңе әкелудің қажеті жоқ. Үлгерсеңіз — тегін онлайн тесттен өтіңіз, сонда мұғалім сабаққа дайын келеді.'},
    {q:'Ата-ана қатыса ала ма?', a:'Сабақтың өзінде болмағаныңыз жөн — балалар ата-анасының көзінше қысылады. Нәтижені бала өзі қолыңызға шығарады, ал талдау менеджермен телефон арқылы болады.'},
    {q:'Бала ауырып қалса ше?', a:'Бізге жазыңыз — сынып кестесі бойынша басқа күн таңдаймыз.'}
  ],

  finH2:'Үш ай соқыр дайындықтың орнына бір сағат',
  finLead:'Сабаққа жазылыңыз немесе тегін тесттен бастаңыз — қалай ыңғайлы болса.',

  ftrWhere:'Сабақ осында өтеді',
  ftrHead:'бас филиал',
  ftrCity:'Алматы',
  ftrBranches:'Алматыдағы филиалдар',
  ftrNav:'Навигация',
  ftrNav1:'Сабаққа жазылу',
  ftrNav3:'Тесттен тегін өту',
  ftrNav2:'Беттің басына'
}
};

/* ============================================================
   4. ЛОГИКА
   ============================================================ */
(function(){
  const $  = (s,r)=> (r||document).querySelector(s);
  const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
  let lang = CONFIG.lang === 'kz' ? 'kz' : 'ru';
  const state = {grade:null, student:null, done:(function(){try{return JSON.parse(localStorage.getItem('zd-done')||'{}')}catch(e){return {}}})()};
  // отдельное состояние записи на урок: оно живёт независимо от теста
  const zap = {grade:null, slot:null, glang:null};
  const GRADES = Object.keys(PROGRAM).map(Number).sort((a,b)=> a-b);

  const track = (name, params) => {
    try{ if(window.fbq) window.fbq('trackCustom', name, params||{}); }catch(e){}
  };

  function nf(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '); }

  function render(){
    const t = T[lang];
    document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
    document.title = t.title;

    $$('[data-t]').forEach(el=>{
      const v = t[el.dataset.t];
      if(typeof v === 'string') el.textContent = v.replace('__PRICE__', nf(CONFIG.price));
    });
    $$('[data-ph]').forEach(el=>{ el.placeholder = t[el.dataset.ph] || ''; });

    // адреса филиалов в подвале, головной подписан
    $('#ftrAddr').innerHTML = FILIALY.map(f=>
      `<li>${esc(f[lang])}${f.head ? ' — ' + esc(t.ftrHead) : ''}</li>`).join('');
    $$('.langs button').forEach(b=> b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $('#priceNum').textContent = nf(CONFIG.price) + ' ₸';

    // чемпионы: имена и баллы настоящие, фото с сайта
    $('#champs').innerHTML = CHEMPIONY.map(c=>`
      <figure class="champ">
        <img src="${esc(c.img)}" alt="${esc(c.n)}" loading="lazy" width="200" height="200">
        <figcaption>
          <span class="champ-score">${esc(c.s)}</span>
          <b>${esc(c.n)}</b>
          <em>${esc(c[lang])}</em>
        </figcaption>
      </figure>`).join('');

    // что входит в цену
    $('#incl').innerHTML = [1,2,3,4,5,6].map(i=> `<li>${esc(t['incl'+i])}</li>`).join('');

    renderZapis();

    // отчёт-подпись
    $('#reportRows').innerHTML = t.rows.map(r=>`
      <div>
        <div class="row-head"><span class="row-name">${r.n}</span><span class="row-val">${r.v}%</span></div>
        <div class="track"><span class="bar ${r.s}" data-w="${r.v}"></span></div>
      </div>`).join('');
    requestAnimationFrame(()=> setTimeout(()=> $$('#reportRows .bar').forEach(b=> b.style.width = b.dataset.w + '%'), 120));

    // классы
    $('#grades').innerHTML = STAGES.map(st=>{
      const gs = GRADES.filter(g=> g >= st.from && g <= st.to);
      if(!gs.length) return '';
      return `<div class="grade-group">
        <div class="grade-label">${st[lang]}</div>
        <div class="chips">${gs.map(g=>`<button type="button" class="chip grade" data-grade="${g}" aria-pressed="${state.grade===g}">${g}</button>`).join('')}</div>
      </div>`;
    }).join('');


    // каталог: карточка на каждый класс
    $('#catalog').innerHTML = GRADES.map(g=>{
      const p = PROGRAM[g];
      return `<div class="cat">
        <div><div class="cat-h">${gradeLabel(g)}</div>
        <div class="cat-g">${p.subjects.length} ${plural(p.subjects.length)} · ${vremyaNaPredmet(p)}</div></div>
        <ul>${p.subjects.map(s=>`<li>${s[lang]}</li>`).join('')}</ul>
      </div>`;
    }).join('');

    // faq
    $('#faq').innerHTML = t.faq.map((f,i)=>`
      <details${i===0?' open':''}>
        <summary>${f.q}</summary>
        <div class="ans">${f.a.replace('__PRICE__', nf(CONFIG.price)).replace('__FILIALY__', filialyStroka(lang))}</div>
      </details>`).join('');

    updateSummary();
  }


  /* ============ ЗАПИСЬ НА ПРОБНЫЙ УРОК ============
     Шаги открываются по очереди: класс → слот → язык → контакты.
     Для классов вне расписания (2, 7, 8, 9) слотов нет: там форма
     превращается в обычную заявку без оплаты — обещать урок, которого
     сейчас нет, нельзя. */

  function estSlot(g){ return !!(RASPISANIE[g] && RASPISANIE[g].length); }

  function slotText(sl, l){ return DNI[l][sl.d] + ', ' + sl.t; }

  function renderZapis(){
    const t = T[lang];

    // классы: те, что в расписании, плюс «другой»
    const vse = GRADES.slice();
    $('#uGrades').innerHTML =
      `<div class="chips">${vse.map(g=>
        `<button type="button" class="chip ugrade${estSlot(g)?'':' faint'}" data-ugrade="${g}" aria-pressed="${zap.grade===g}">${g}</button>`
      ).join('')}</div>`;

    // слоты выбранного класса
    const slots = zap.grade ? (RASPISANIE[zap.grade] || []) : [];
    $('#uSlots').innerHTML = slots.map((sl,i)=>
      `<button type="button" class="slot" data-slot="${i}" aria-pressed="${zap.slot===i}">
         <b>${esc(DNI[lang][sl.d])}</b><span>${esc(sl.t)}</span>
       </button>`).join('');
    $('#uSlots').hidden = !slots.length;
    $('#uNoSlots').hidden = !(zap.grade && !slots.length);

    // язык группы
    $('#uLang').innerHTML = [['kz', t.uLangKz], ['ru', t.uLangRu]].map(([code, name])=>
      `<button type="button" class="chip ulang" data-ulang="${code}" aria-pressed="${zap.glang===code}">${esc(name)}</button>`
    ).join('');

    shagiZapisi();
  }

  function shagiZapisi(){
    const t = T[lang];
    const slots = zap.grade ? (RASPISANIE[zap.grade] || []) : [];
    const bezUroka = !!zap.grade && !slots.length;
    // без слотов третий шаг пропускаем: язык группы спрашивать не о чем
    $('#u2').classList.toggle('is-off', !zap.grade);
    $('#u3').classList.toggle('is-off', !(zap.slot !== null && !bezUroka));
    $('#u4').classList.toggle('is-off', !(bezUroka || (zap.slot !== null && zap.glang)));
    const btn = $('#uSubmit');
    btn.textContent = (bezUroka ? t.uLead : t.uPay).replace('__PRICE__', nf(CONFIG.price));
  }

  document.addEventListener('click', e=>{
    const g = e.target.closest('.chip.ugrade');
    if(g){
      zap.grade = Number(g.dataset.ugrade);
      zap.slot = null; zap.glang = null;
      renderZapis();
      setTimeout(()=> $('#u2').scrollIntoView({behavior:'smooth', block:'center'}), 80);
      return;
    }
    const sl = e.target.closest('.slot');
    if(sl){
      zap.slot = Number(sl.dataset.slot);
      renderZapis();
      setTimeout(()=> $('#u3').scrollIntoView({behavior:'smooth', block:'center'}), 80);
      return;
    }
    const lg = e.target.closest('.chip.ulang');
    if(lg){
      zap.glang = lg.dataset.ulang;
      renderZapis();
      setTimeout(()=> $('#u4').scrollIntoView({behavior:'smooth', block:'center'}), 80);
    }
  });

  document.addEventListener('submit', async e=>{
    if(e.target.id !== 'uForm') return;
    e.preventDefault();
    const t = T[lang];
    const child = $('#uChild').value.trim();
    const name  = $('#uName').value.trim();
    const digits = $('#uPhone').value.replace(/\D/g,'');

    let ok = true;
    $('#ufChild').classList.toggle('err', child.length < 2); if(child.length < 2) ok = false;
    $('#ufName').classList.toggle('err', name.length < 2);   if(name.length < 2) ok = false;
    $('#ufPhone').classList.toggle('err', digits.length !== 11); if(digits.length !== 11) ok = false;
    if(!ok) return;

    const slots = RASPISANIE[zap.grade] || [];
    const bezUroka = !slots.length;
    const sl = (zap.slot !== null && slots[zap.slot]) ? slots[zap.slot] : null;
    const filial = FILIALY.find(f=> f.head);

    // «Когда удобно» в таблице и телеграме — это слот. Приёмник печатает
    // значение как есть, поэтому отдельной колонки заводить не пришлось.
    const kogda = sl
      ? slotText(sl, 'ru') + ' · ' + (zap.glang === 'kz' ? 'каз. группа' : 'рус. группа')
      : 'класс вне расписания, ждёт группу';

    const payload = {
      date: new Date().toISOString(),
      name: child,
      parent: name,
      phone: '+' + digits,
      grade: zap.grade || '',
      when: kogda,
      pageLang: lang,
      page: location.pathname || 'diagnostika-znaniy',
      source: bezUroka ? 'probny-urok-ozhidanie' : 'probny-urok',
      product: bezUroka ? '' : 'probny-urok',
      price: bezUroka ? '' : CONFIG.price,
      filial: filial ? filial.ru : '',
      groupLang: zap.glang || ''
    };

    const btn = $('#uSubmit');
    btn.disabled = true; btn.style.opacity = '.6';

    // Панель показываем сразу, не дожидаясь ответа: так кнопка оплаты
    // открывается по живому касанию, а не после паузы, и браузер её не режет.
    const box = $('#paybox');
    $('#payWhat').textContent = bezUroka ? t.leadDone
      : gradeLabel(zap.grade) + ' · ' + slotText(sl, lang) + ' · ' +
        (zap.glang === 'kz' ? t.uLangKz : t.uLangRu);
    const pay = $('#payBtn');
    pay.hidden = bezUroka;
    pay.href = CONFIG.kaspi;
    pay.textContent = t.payBtn.replace('__PRICE__', nf(CONFIG.price));
    $$('#paybox [data-t="payNote"]').forEach(el=> el.hidden = bezUroka);
    $('#paySent').textContent = '';
    box.hidden = false;
    // заголовок четвёртого шага тоже убираем: пустой шаг с номером
    // выглядит так, будто что-то не дозагрузилось
    $('#u4').hidden = true;
    box.scrollIntoView({behavior:'smooth', block:'center'});

    track(bezUroka ? 'UrokWait' : 'UrokZapis', {grade: zap.grade});
    if(window.fbq) window.fbq('track', 'Lead');

    const itog = await otpravit(payload);
    console.log('Zerdeli: заявка на урок →', itog.note);
    $('#paySent').textContent = itog.sent ? t.paySentOk : t.paySentFail;
    btn.disabled = false; btn.style.opacity = '';
  });

  function gradeLabel(g){ return lang === 'kz' ? g + '-сынып' : g + ' класс'; }

  /* Время на карточке класса — на один предмет, а не сумма по всем.
     Сумму никто не проходит за один присест: тесты берут в разные дни,
     а «~170 мин» на карточке только пугает и ничего не объясняет. */
  function vremyaNaPredmet(p){
    const min = lang === 'kz' ? 'минут' : 'мин';
    if(!p.each || !p.each.length) return '~' + p.minutes + ' ' + min;
    const lo = Math.min(...p.each), hi = Math.max(...p.each);
    if(lo === hi) return '~' + lo + ' ' + min;
    return (lang === 'kz' ? 'әрқайсысы ' : 'по ') + lo + '–' + hi + ' ' + min;
  }

  function plural(n){
    const t = T[lang];
    if(lang === 'kz') return t.subjMany;
    const d10 = n % 10, d100 = n % 100;
    if(d10 === 1 && d100 !== 11) return t.subjOne;
    if(d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return t.subjFew;
    return t.subjMany;
  }


  /* Шаги открываются по очереди: класс → предмет → тест.
     Контакт спрашиваем после теста, у готового отчёта: до вопросов
     человеку ещё не за что оставлять телефон. */
  function updateSummary(){
    $('#s2').classList.toggle('is-off', !state.grade);
    if(state.grade) renderSubjects();
  }

  function esc(v){
    return String(v == null ? '' : v).replace(/[&<>"]/g, c =>
      ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  // выбор класса
  document.addEventListener('click', e=>{
    const g = e.target.closest('.chip.grade');
    if(!g) return;
    state.grade = Number(g.dataset.grade);
    $$('.chip.grade').forEach(c=> c.setAttribute('aria-pressed', String(Number(c.dataset.grade) === state.grade)));
    updateSummary();
    track('DiagGradePick', {grade: state.grade});
    setTimeout(()=> $('#s2').scrollIntoView({behavior:'smooth', block:'center'}), 80);
  });

  // переключение языка
  $$('.langs button').forEach(b=>{
    b.addEventListener('click', ()=>{
      const next = b.dataset.lang;
      if(next === lang) return;
      // Страница одна на оба языка: переключаем на месте, никуда не уходим.
      // Так у воронки один адрес и не теряется заполненная карточка.
      lang = next;
      try{ localStorage.setItem('zd-lang', lang); }catch(e){}
      document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
      render();
      if(state.grade) renderSubjects();
      if(window.ZerdeliTest && window.ZerdeliTest.isOpen()) window.ZerdeliTest.setLang(lang);
    });
  });

  // телефон
  const phone = $('#phone');
  /* Маска телефона.
     Тонкость: поле мы форматируем сами и всегда рисуем «+7» впереди. Значит при
     каждом новом вводе первая цифра — это НАША семёрка из префикса, а не цифра
     человека, и её надо отбросить. Если же префикса ещё нет (человек вставил
     номер целиком), разбираем как есть: 8 или лишняя 7 впереди — код страны.
     Прежняя версия этого не различала, и «87051234567» превращалось
     в «+7 (870) 512-34-56» — номер уезжал в заявку неверным. */
  function fmtKz(d){
    let out = '+7 (';
    if(d.length) out += d.slice(0,3);
    if(d.length >= 3) out += ')';
    if(d.length > 3) out += ' ' + d.slice(3,6);
    if(d.length > 6) out += '-' + d.slice(6,8);
    if(d.length > 8) out += '-' + d.slice(8,10);
    return out;
  }

  phone.addEventListener('input', ()=>{
    const raw = phone.value;
    let d = raw.replace(/\D/g,'');
    if(/^\+7/.test(raw)) d = d.slice(1);          // наша семёрка из префикса
    if(d[0] === '8') d = d.slice(1);              // человек начал с восьмёрки
    if(d.length > 10 && d[0] === '7') d = d.slice(1);  // вставил номер с кодом страны
    phone.value = fmtKz(d.slice(0,10));
  });
  phone.addEventListener('focus', ()=>{ if(!phone.value) phone.value = '+7 ('; });

  let started = false;
  $('#form').addEventListener('input', ()=>{
    if(!started){ started = true; track('DiagFormStart', {}); }
  });

  // отправка
  /* Манифест тестов — единственный источник правды о том, какие тесты есть.
     Пока он не загрузился, работает список PROGRAM, вписанный руками.
     Как только загрузился — классы и предметы берутся из него, и лендинг
     перестаёт расходиться с содержимым репозитория. */
  let MANIFEST = null;

  async function loadManifest(){
    if(!CONFIG.manifest) return;
    try{
      const r = await fetch(CONFIG.manifest, {cache:'no-cache'});
      if(!r.ok) throw new Error(r.status);
      MANIFEST = await r.json();
    }catch(err){ console.warn('манифест тестов не загрузился, работаем по списку в коде', err); return; }

    const byGrade = {};
    MANIFEST.tests.forEach(t=>{
      (byGrade[t.grade] = byGrade[t.grade] || []).push(t);
    });
    Object.keys(byGrade).forEach(g=>{
      const list = byGrade[g];
      PROGRAM[g] = {
        minutes: list.reduce((a,t)=> a + (t.minutes || 0), 0),
        each: list.map(t=> t.minutes || 0).filter(Boolean),
        subjects: list.map(t=> ({ru: t.subject.ru, kz: t.subject.kz}))
      };
    });
    GRADES.length = 0;
    Object.keys(byGrade).map(Number).sort((a,b)=> a-b).forEach(g=> GRADES.push(g));
    if(state.grade && !GRADES.includes(state.grade)) state.grade = null;
    render();
  }

  function testsFor(grade){
    if(!MANIFEST) return null;
    return MANIFEST.tests.filter(t=> t.grade === grade);
  }

  function qPlural(n){
    const t = T[lang];
    if(lang === 'kz') return t.qMany;
    const d10 = n % 10, d100 = n % 100;
    if(d10 === 1 && d100 !== 11) return t.qOne;
    if(d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return t.qFew;
    return t.qMany;
  }

  /* Предметы выбранного класса. Клик — тест открывается прямо здесь,
     на этой же странице: уходить никуда не нужно. */
  function renderSubjects(){
    const t = T[lang], box = $('#subjects');
    const list = testsFor(state.grade);
    if(!list || !list.length){
      box.innerHTML = `<p class="tests-note">${t.testsNone}</p>`;
      return;
    }
    // ready:false означает, что в тесте ещё не проставлены правильные ответы.
    // Открывать его нельзя: ребёнок получит 0% независимо от того, как ответил,
    // и этот ноль уйдёт в отчёт, в таблицу и в телеграм как настоящий результат.
    box.innerHTML = list.map((x,i)=>`
      <a href="#" data-test="${x.id}"${x.ready?'':' class="off" aria-disabled="true"'}>
        <i>${i+1}</i>
        <span class="tt">
          <b>${x.subject[lang]}</b>
          <em>${x.ready
              ? `${x.questions} ${qPlural(x.questions)} · ~${x.minutes} мин${state.done[x.id]?' · '+t.testDone:''}`
              : t.testsSoon}</em>
        </span>
      </a>`).join('');
    box.querySelectorAll('a[data-test]').forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        if(a.classList.contains('off')) return;
        openTest(a.dataset.test);
      });
    });
  }

  function openTest(id){
    // Молчать здесь нельзя: если движок не загрузился, клик по предмету
    // просто ничего не делает, и понять почему — невозможно.
    if(!window.ZerdeliTest){
      const box = $('#subjects');
      if(box) box.innerHTML = `<p class="tests-note">${T[lang].engineErr}</p>`;
      console.error('Zerdeli: test.js не загрузился — window.ZerdeliTest отсутствует');
      return;
    }
    $('#zayavka').classList.add('running');
    $('#gate').hidden = true;
    $('#zd-test').hidden = false;
    track('DiagTestOpen', {test: id, grade: state.grade});
    window.ZerdeliTest.open(id, {
      lang: lang,
      student: state.student,   // второй и следующий тесты — контакт уже есть
      // Тест дошёл до конца, отчёт посчитан, но контакта ещё нет:
      // движок ждёт, а мы показываем форму. Дальше — reveal().
      gate: function(res){
        state.result = res;
        $('#zd-test').hidden = true;
        $('#gate').hidden = false;
        track('DiagGate', {test: id, grade: state.grade});
        $('#gate').scrollIntoView({behavior:'smooth', block:'start'});
      },
      onFinish: function(res){
        state.done[id] = true;
        try{ localStorage.setItem('zd-done', JSON.stringify(state.done)); }catch(e){}
      },
      onBack: backToSubjects
    });
    $('#zd-test').scrollIntoView({behavior:'smooth', block:'start'});
  }

  /* Отправка заявки.

     Сначала пробуем обычным запросом и читаем ответ: приёмник отвечает
     {ok:true}, и тогда мы точно знаем, что запись легла. Если ответ прочитать
     не удалось (браузер не пустил из-за политики домена), повторяем «слепо» —
     до сервера запрос при этом всё равно доходит, просто мы не видим ответа.

     Что вернулось, пишем в консоль: когда заявки не приходят, это первое,
     на что надо смотреть, — иначе непонятно, страница виновата или приёмник. */
  async function otpravit(payload){
    if(!CONFIG.endpoint){
      console.log('Заявка (адрес приёмника не задан):', payload);
      return {sent:false, note:'адрес приёмника не задан'};
    }
    const opts = {
      method: 'POST',
      headers: {'Content-Type':'text/plain;charset=utf-8'},
      body: JSON.stringify(payload)
    };
    try{
      const r = await fetch(CONFIG.endpoint, Object.assign({mode:'cors'}, opts));
      const d = await r.json().catch(()=>null);
      // Приёмник собирает PDF сразу и возвращает ссылку на него. Отдать её
      // движку напрямую надёжнее, чем вести человека через страницу-прослойку
      // Apps Script: та живёт в песочнице, и файл из неё открывается не всегда.
      if(d && d.ok)    return {sent:true,  note:'принято приёмником', pdf: d.pdf || ''};
      if(d && d.error) return {sent:true,  note:'приёмник ответил ошибкой: ' + d.error};
      return {sent:true, note:'запрос дошёл, ответ непонятный, код ' + r.status};
    }catch(err){
      try{
        await fetch(CONFIG.endpoint, Object.assign({mode:'no-cors'}, opts));
        // запрос ушёл, но ответ нам читать не дали — считаем отправленным
        return {sent:true, note:'отправлено вслепую: ' + err.message};
      }catch(err2){
        return {sent:false, note:'НЕ ОТПРАВЛЕНО: ' + err2.message};
      }
    }
  }

  function backToSubjects(){
    $('#zd-test').hidden = true;
    $('#gate').hidden = true;
    $('#zayavka').classList.remove('running');
    renderSubjects();
    $('#s2').scrollIntoView({behavior:'smooth', block:'center'});
  }

  $('#form').addEventListener('submit', async e=>{
    e.preventDefault();
    const t = T[lang];
    const name = $('#name').value.trim();
    const child = $('#child').value.trim();
    const digits = phone.value.replace(/\D/g,'');
    let ok = true;
    $('#fName').classList.toggle('err', name.length < 2); if(name.length < 2) ok = false;
    $('#fChild').classList.toggle('err', child.length < 2); if(child.length < 2) ok = false;
    $('#fPhone').classList.toggle('err', digits.length !== 11); if(digits.length !== 11) ok = false;
    if(!ok) return;

    // Отчёт — про ребёнка, поэтому в движок как имя идёт он: так подписан
    // и экран результата, и PDF. Родитель едет отдельным полем — в таблице
    // под него своя колонка, и звонить менеджер будет ему.
    state.student = {name: child, parent: name, phone: '+' + digits};

    // Заявка и результат уходят одной записью: к этому моменту известно всё —
    // и контакт, и класс, и предмет, и что ребёнок ответил.
    const payload = Object.assign({
      date: new Date().toISOString(),
      name: child,
      parent: name,
      phone: '+' + digits,
      grade: state.grade || '',
      when: $('#when').value,
      pageLang: lang,
      page: location.pathname || 'diagnostika',
      source: 'landing-diagnostika'
    }, state.result || {});

    const btn = $('#submitBtn');
    btn.disabled = true; btn.style.opacity = '.6';

    const itog = await otpravit(payload);
    console.log('Zerdeli: отправка заявки →', itog.note);

    track('DiagLead', {grade: payload.grade});
    if(window.fbq) window.fbq('track','Lead');

    // Контакт есть — показываем отчёт. Дальше движок рисует его сам.
    $('#gate').hidden = true;
    $('#zd-test').hidden = false;
    btn.disabled = false; btn.style.opacity = '';
    if(window.ZerdeliTest && window.ZerdeliTest.reveal){
      window.ZerdeliTest.reveal(state.student, itog.sent, itog.pdf);
    }
    $('#zd-test').scrollIntoView({behavior:'smooth', block:'start'});
  });

  // липкая кнопка
  const sticky = $('#sticky'), zone = $('#zayavka');
  const io = new IntersectionObserver(es=>{
    es.forEach(en=>{
      if(en.target.id === 'zayavka') sticky.classList.toggle('on', !en.isIntersecting && window.scrollY > 400);
    });
  }, {threshold:0});
  io.observe(zone);
  window.addEventListener('scroll', ()=>{
    if(window.scrollY < 400) sticky.classList.remove('on');
  }, {passive:true});

  // reveal + скролл 50%
  const rio = new IntersectionObserver(es=>{
    es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); rio.unobserve(en.target); } });
  }, {threshold:.12});
  $$('.reveal').forEach(el=> rio.observe(el));

  let half = false;
  window.addEventListener('scroll', ()=>{
    if(half) return;
    const p = (window.scrollY + innerHeight) / document.body.scrollHeight;
    if(p > .5){ half = true; track('Scroll50', {}); }
  }, {passive:true});

  $('#yr').textContent = new Date().getFullYear();
  render();
  loadManifest();               // подтянет реальный состав тестов и перерисует
  track('DiagPageView', {lang: lang});
})();
