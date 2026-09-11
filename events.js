const DATA={
pl:{code:'pl',home:'O H0C',rules:'REGULAMIN',ranks:'RANGI',events:'WYDARZENIA',principles:'ZASADY',team:'JEDNA DRUŻYNA',materials:'MATERIAŁY',hero:'WYDARZENIA H0C',heroText:'Kalendarz wydarzeń sojuszu i gry.\nPlanuj, bądź aktywny i wspieraj swoje królestwo.',calendar:'KALENDARZ WYDARZEŃ',daily:'KALENDARZ DZIENNY',today:'DZIŚ',game:'Wydarzenia gry',hoc:'Wydarzenia H0C',alliance:'Wydarzenia sojuszu',other:'Inne',upcoming:'NAJBLIŻSZE WYDARZENIA',full:'ZOBACZ PEŁNY KALENDARZ',range:'31 SIERPNIA – 5 WRZEŚNIA 2026',days:['PON 31.08','WT 01.09','ŚR 02.09','CZW 03.09','PT 04.09','SOB 05.09'],mini:['PON','WT','ŚR','CZW','PT','SOB','NIEDZ.'],dates:['31.08','01.09','02.09','03.09','04.09','05.09','06.09'],allDay:'CAŁY DZIEŃ',how:'JAK TO DZIAŁA?',howText:'Dowiedz się więcej o wydarzeniach i zasadach ich rozgrywania.',info:[['WSPÓŁPRACA','Działajcie razem, komunikujcie się i wspierajcie swoje królestwo.'],['AKTYWNOŚĆ','Bierz udział w wydarzeniach i zdobywaj cenne nagrody.'],['STRATEGIA','Dobre planowanie to klucz do zwycięstwa.'],['CHWAŁA','Walczcie o honor, chwałę i potęgę swojego sojuszu.']]},
en:{code:'en',home:'ABOUT H0C',rules:'RULES',ranks:'RANKS',events:'EVENTS',principles:'PRINCIPLES',team:'ONE TEAM',materials:'MATERIALS',hero:'HOC EVENTS',heroText:'Alliance and game events calendar.\nPlan ahead, stay active and support your kingdom.',calendar:'EVENTS CALENDAR',daily:'DAILY CALENDAR',today:'TODAY',game:'Game events',hoc:'H0C events',alliance:'Alliance events',other:'Other',upcoming:'UPCOMING EVENTS',full:'VIEW FULL CALENDAR',range:'31 AUGUST – 5 SEPTEMBER 2026',days:['MON 31.08','TUE 01.09','WED 02.09','THU 03.09','FRI 04.09','SAT 05.09'],mini:['MON','TUE','WED','THU','FRI','SAT','SUN'],dates:['31.08','01.09','02.09','03.09','04.09','05.09','06.09'],allDay:'ALL DAY',how:'HOW IT WORKS?',howText:'Learn more about events and how they are played.',info:[['COOPERATION','Work together, communicate and support your kingdom.'],['ACTIVITY','Take part in events and earn valuable rewards.'],['STRATEGY','Good planning is the key to victory.'],['GLORY','Fight for the honor, glory and power of your alliance.']]},
de:{code:'de',home:'ÜBER H0C',rules:'REGELN',ranks:'RÄNGE',events:'EREIGNISSE',principles:'PRINZIPIEN',team:'EIN TEAM',materials:'MATERIALIEN',hero:'HOC EREIGNISSE',heroText:'Kalender der Bündnis- und Spielereignisse.\nPlane voraus, bleib aktiv und unterstütze dein Königreich.',calendar:'EREIGNISKALENDER',daily:'TAGESKALENDER',today:'HEUTE',game:'Spielereignisse',hoc:'H0C-Ereignisse',alliance:'Bündnisereignisse',other:'Andere',upcoming:'BEVORSTEHENDE EREIGNISSE',full:'VOLLSTÄNDIGEN KALENDER ANZEIGEN',range:'31. AUGUST – 5. SEPTEMBER 2026',days:['MO 31.08','DI 01.09','MI 02.09','DO 03.09','FR 04.09','SA 05.09'],mini:['MO','DI','MI','DO','FR','SA','SO'],dates:['31.08','01.09','02.09','03.09','04.09','05.09','06.09'],allDay:'GANZTÄGIG',how:'WIE FUNKTIONIERT ES?',howText:'Erfahre mehr über die Ereignisse und ihre Regeln.',info:[['ZUSAMMENARBEIT','Arbeitet zusammen, kommuniziert und unterstützt euer Königreich.'],['AKTIVITÄT','Nehmt an Ereignissen teil und verdient wertvolle Belohnungen.'],['STRATEGIE','Gute Planung ist der Schlüssel zum Sieg.'],['RUHM','Kämpft für Ehre, Ruhm und die Macht eures Bündnisses.']]},
ru:{code:'ru',home:'О H0C',rules:'ПРАВИЛА',ranks:'РАНГИ',events:'СОБЫТИЯ',principles:'ПРИНЦИПЫ',team:'ОДНА КОМАНДА',materials:'МАТЕРИАЛЫ',hero:'СОБЫТИЯ H0C',heroText:'Календарь событий альянса и игры.\nПланируй заранее, будь активен и поддерживай своё королевство.',calendar:'КАЛЕНДАРЬ СОБЫТИЙ',daily:'ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ',today:'СЕГОДНЯ',game:'События игры',hoc:'События H0C',alliance:'События альянса',other:'Другие',upcoming:'БЛИЖАЙШИЕ СОБЫТИЯ',full:'ПОКАЗАТЬ ПОЛНЫЙ КАЛЕНДАРЬ',range:'31 АВГУСТА – 5 СЕНТЯБРЯ 2026',days:['ПН 31.08','ВТ 01.09','СР 02.09','ЧТ 03.09','ПТ 04.09','СБ 05.09'],mini:['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'],dates:['31.08','01.09','02.09','03.09','04.09','05.09','06.09'],allDay:'ВЕСЬ ДЕНЬ',how:'КАК ЭТО РАБОТАЕТ?',howText:'Узнай больше о событиях и правилах их проведения.',info:[['СОТРУДНИЧЕСТВО','Действуйте вместе, общайтесь и поддерживайте своё королевство.'],['АКТИВНОСТЬ','Участвуйте в событиях и получайте ценные награды.'],['СТРАТЕГИЯ','Хорошее планирование — ключ к победе.'],['СЛАВА','Сражайтесь за честь, славу и силу вашего альянса.']]}}
const E=[
{id:'amber',s:0,e:5,kind:'red',icon:'amber',name:{pl:'Święto Bursztynowej Jesieni',en:'Amber Autumn Feast',de:'Bernstein-Herbstfest',ru:'Праздник янтарной осени'},time:null},
{id:'return',s:0,e:5,kind:'game',icon:'return',name:{pl:'Powrót do Westeros',en:'Return to Westeros',de:'Rückkehr nach Westeros',ru:'Возвращение в Вестерос'},time:null},
{id:'army',s:0,e:0,kind:'army',icon:'army',name:{pl:'Zbieranie armii',en:'Army Gathering',de:'Armee sammeln',ru:'Сбор армии'},time:null},
{id:'trade',s:0,e:4,kind:'trade',icon:'trade',name:{pl:'Dzień handlowy',en:'Trade Day',de:'Handelstag',ru:'Торговый день'},time:'10:00'},
{id:'mobil',s:0,e:4,kind:'mobil',icon:'mobil',name:{pl:'Mobilizacja Przymierza',en:'Alliance Mobilization',de:'Bündnismobilisierung',ru:'Мобилизация альянса'},time:'20:00'},
{id:'fireworks',s:2,e:3,kind:'fire',icon:'fireworks',name:{pl:'Spadające fajerwerki',en:'Falling Fireworks',de:'Fallende Feuerwerke',ru:'Падающие фейерверки'},time:'18:00'},
{id:'winter',s:2,e:4,kind:'winter',icon:'winter',name:{pl:'Próba Winterfell',en:'Winterfell Trial',de:'Winterfell-Prüfung',ru:'Испытание Винтерфелла'},time:'20:00'},
{id:'battle',s:2,e:3,kind:'battle',icon:'battle',name:{pl:'Pole bitwy',en:'Battlefield',de:'Schlachtfeld',ru:'Поле битвы'},time:null},
{id:'navigator',s:2,e:4,kind:'nav',icon:'navigator',name:{pl:'Nawigator',en:'Navigator',de:'Navigator',ru:'Навигатор'},time:null},
{id:'smoke',s:3,e:5,kind:'smoke',icon:'smoke',name:{pl:'Zagubieni w dymie',en:'Lost in the Smoke',de:'Im Rauch verloren',ru:'Затерянные в дыму'},time:'18:00'},
{id:'night',s:3,e:5,kind:'night',icon:'night',name:{pl:'Najazd Króla Nocy',en:'Night King Invasion',de:'Invasion des Nachtkönigs',ru:'Вторжение Короля Ночи'},time:'20:00'},
{id:'advisor',s:2,e:5,kind:'advisor',icon:'advisor',name:{pl:'Ograniczony czas – Pula Kart',en:'Limited Time – Advisor Card Pool',de:'Zeitlich begrenzter Beraterkarten-Pool',ru:'Ограниченный набор карт советников'},time:null}
]
const ICONS={
amber:`<circle cx="32" cy="32" r="18" fill="#e49b2f"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8M16 16l6 6M42 42l6 6M48 16l-6 6M22 42l-6 6" stroke="#ffe1a1" stroke-width="3" stroke-linecap="round"/><path d="M32 19c-7 7-10 11-10 16a10 10 0 0 0 20 0c0-5-3-9-10-16z" fill="#8f2f2b"/>`,
return:`<path d="M17 51V25l15-10 15 10v26H17z" fill="#9daabd" stroke="#f1e4c9" stroke-width="2"/><path d="M25 51V34h14v17M21 29h4M39 29h4" stroke="#27394d" stroke-width="3"/><path d="M27 21h10" stroke="#fff" stroke-width="2"/>`,
army:`<path d="M16 49V23h32v26z" fill="#8d7658" stroke="#ead9b5" stroke-width="2"/><path d="M22 23v-8h20v8M24 31h6v7h-6zM34 31h6v7h-6zM29 49V40h6v9" fill="#cdb98e" stroke="#33271b" stroke-width="2"/><path d="M32 9v10M27 14h10" stroke="#e8c96f" stroke-width="3"/>`,
trade:`<path d="M13 20h24M27 14l10 6-10 6M51 44H27M37 38l-10 6 10 6" stroke="#e6d2a6" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 12l-5 16h18l-5-16zM39 36l-5 16h18l-5-16z" fill="none" stroke="#d5a33d" stroke-width="2"/>`,
mobil:`<path d="M32 10l17 7v13c0 12-8 19-17 24-9-5-17-12-17-24V17z" fill="#76518e" stroke="#ead9b5" stroke-width="2"/><path d="M25 33l5 5 10-12" fill="none" stroke="#f5d47d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
fireworks:`<circle cx="32" cy="34" r="4" fill="#e6a33b"/><path d="M32 30V9M32 38v17M28 34H9M36 34h19M29 31L15 17M35 37l14 14M35 31l14-14M29 37L15 51" stroke="#efc86b" stroke-width="2.5" stroke-linecap="round"/><circle cx="15" cy="17" r="3" fill="#8f2f2b"/><circle cx="49" cy="17" r="3" fill="#76518e"/><circle cx="15" cy="51" r="3" fill="#197875"/>`,
winter:`<path d="M16 49V28l16-13 16 13v21z" fill="#d7d2c2" stroke="#fff" stroke-width="2"/><path d="M22 49V35h20v14M28 35v14M36 35v14" stroke="#49647d" stroke-width="2"/><path d="M16 28h32M32 9v9M26 14h12" stroke="#b7d0e0" stroke-width="3"/>`,
battle:`<path d="M14 50l10-22M40 50L30 28" stroke="#ead9b5" stroke-width="4" stroke-linecap="round"/><path d="M10 23l12-8 6 6-12 8zM38 17l12 8-6 7-12-8z" fill="#66543f" stroke="#d5a33d" stroke-width="2"/><path d="M19 30l13-13M45 30L32 17" stroke="#fff" stroke-width="2"/>`,
navigator:`<circle cx="32" cy="32" r="20" fill="#415b3d" stroke="#e6c96f" stroke-width="2"/><path d="M38 20l-5 15-15 5 5-15z" fill="#d5a33d" stroke="#f7ead0" stroke-width="2"/><circle cx="32" cy="32" r="3" fill="#fff"/>`,
smoke:`<path d="M20 49c-7-5-4-13 2-15-5-8 5-15 11-10 3-9 16-6 16 3 8 1 8 13 1 16 1 5-5 8-10 6-5 5-14 4-20 0z" fill="#8fbfbc" stroke="#e6f0e8" stroke-width="2"/><path d="M26 24c-2-5 1-8 5-9M36 25c-1-5 2-8 5-9" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`,
night:`<path d="M21 15c7-6 18-5 24 1-7 0-13 5-13 12 0 7 5 12 12 13-6 6-17 7-24 1-8-7-8-20 1-27z" fill="#1f4e7d" stroke="#cbd8e5" stroke-width="2"/><circle cx="40" cy="22" r="2" fill="#d5a33d"/><circle cx="46" cy="31" r="1.7" fill="#d5a33d"/>`,
advisor:`<path d="M17 15h30v34H17z" fill="#92560d" stroke="#e6c96f" stroke-width="2"/><path d="M24 23h16M24 30h16M24 37h10" stroke="#f7e1a1" stroke-width="3" stroke-linecap="round"/><path d="M40 44l4-4 4 4" stroke="#fff" stroke-width="2" fill="none"/>`,
cooperation:`<circle cx="32" cy="20" r="7" fill="#d9a13d"/><circle cx="18" cy="29" r="6" fill="#d9a13d"/><circle cx="46" cy="29" r="6" fill="#d9a13d"/><path d="M7 49c1-9 7-13 11-13s10 4 11 13M35 49c1-9 7-13 11-13s10 4 11 13M24 49c1-8 4-12 8-12s7 4 8 12" fill="none" stroke="#d9a13d" stroke-width="4" stroke-linecap="round"/>`,
activity:`<path d="M12 46V25h40v21z" fill="none" stroke="#d9a13d" stroke-width="3"/><path d="M20 39l6-7 5 4 10-12 7 7" fill="none" stroke="#d9a13d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
strategy:`<path d="M32 11l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z" fill="none" stroke="#d9a13d" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="30" r="4" fill="#d9a13d"/>`,
glory:`<path d="M18 16h28v20H18z" fill="none" stroke="#d9a13d" stroke-width="3"/><path d="M24 36v10M40 36v10M20 49h24" stroke="#d9a13d" stroke-width="3" stroke-linecap="round"/><path d="M24 23l8 8 8-8" fill="none" stroke="#d9a13d" stroke-width="3"/>`
}
function svgIcon(key){
 const body=ICONS[key]||`<path d="M32 10l6 16 16 6-16 6-6 16-6-16-16-6 16-6z" fill="none" stroke="#d5a33d" stroke-width="3"/>`;
 return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="rgba(0,0,0,.14)" stroke="#d5a33d" stroke-width="1.5"/>${body}</svg>`;
}
const icon=e=>svgIcon(e.icon);
const txt=(e,l)=>e.name[l];
function nav(t,l){
 const homeFile=l==='pl'?'index.html':l+'.html';
 return `<a href="${homeFile}">${t.home}</a><a href="${homeFile}#rules">${t.rules}</a><a href="${homeFile}#ranks">${t.ranks}</a><a href="events${l==='pl'?'':'-'+l}.html" class="active">${t.events}</a><a href="${homeFile}#rules">${t.principles}</a><a href="${homeFile}#team">${t.team}</a><a href="materialy.html">${t.materials}</a>`
}
function flag(code){
 const f={pl:['#fff','#dc143c'],de:['#000','#dd0000','#ffce00'],ru:['#fff','#0039a6','#d52b1e']};
 if(code==='en')return `<svg class="flag" viewBox="0 0 60 40"><rect width="60" height="40" fill="#012169"/><path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="9"/><path d="M0 0L60 40M60 0L0 40" stroke="#c8102e" stroke-width="5"/><path d="M30 0V40M0 20H60" stroke="#fff" stroke-width="15"/><path d="M30 0V40M0 20H60" stroke="#c8102e" stroke-width="9"/></svg>`;
 return `<svg class="flag" viewBox="0 0 60 40">${f[code].map((c,i)=>`<rect y="${i*40/f[code].length}" width="60" height="${40/f[code].length}" fill="${c}"/>`).join('')}</svg>`
}
function render(){
 const l=document.body.dataset.lang||'pl',t=DATA[l];
 document.documentElement.lang=l;
 document.querySelector('.brand').href=l==='pl'?'index.html':l+'.html';
 document.title=`${t.events} H0C | H0C`;
 document.querySelector('.site-nav').innerHTML=nav(t,l);
 document.querySelector('.flags').innerHTML=['pl','en','de','ru'].map(c=>`<a href="events${c==='pl'?'':'-'+c}.html" aria-label="${c}">${flag(c)}</a>`).join('');
 document.querySelector('.hero h1').textContent=t.hero;
 document.querySelector('.hero p:last-child').textContent=t.heroText;
 document.querySelectorAll('[data-text]').forEach(x=>x.textContent=t[x.dataset.text]);
 document.querySelector('#range').textContent=t.range;
 document.querySelector('.week').innerHTML=t.days.map((d,i)=>`<button class="day ${i===0?'selected':''}" data-day="${i}">${d}</button>`).join('');
 document.querySelector('.daily-date').innerHTML=`${flag(l)}<span>${t.days[0]}</span>`;
 document.querySelector('.daily-week').innerHTML=t.mini.map((d,i)=>`<div class="mini-day ${i===0?'selected':''}">${d}<strong>${t.dates[i]}</strong></div>`).join('');
 const tl=document.querySelector('.timeline');
 tl.innerHTML=E.map((e,i)=>{const left=e.s/6*100,width=(e.e-e.s+1)/6*100;return `<div class="event ${e.kind}" style="top:${i*42+8}px;left:${left}%;width:calc(${width}% - 8px)"><span class="icon">${icon(e)}</span><span class="name">${txt(e,l)}</span><span class="time">${e.time||t.allDay}</span></div>`}).join('');
 tl.style.height=`${E.length*42+16}px`;
 document.querySelector('.daily-list').innerHTML=E.map(e=>`<div class="daily-item ${e.kind}"><span class="icon">${icon(e)}</span><strong>${txt(e,l)}</strong><small>${e.time||t.allDay}</small></div>`).join('');
 const up=['amber','fireworks','winter','night'];
 document.querySelector('.up-grid').innerHTML=up.map(id=>{const e=E.find(x=>x.id===id);return `<article class="up-item"><span class="icon">${icon(e)}</span><div><h4>${txt(e,l)}</h4><strong>${e.time||t.allDay}</strong><p>${t.dates[e.s]} – ${t.dates[e.e]}</p></div></article>`}).join('');
 document.querySelector('.info-grid').innerHTML=t.info.map((x,i)=>{const k=['cooperation','activity','strategy','glory'][i];return `<article class="info"><span class="info-icon">${svgIcon(k)}</span><div><h4>${x[0]}</h4><p>${x[1]}</p></div></article>`}).join('');
}
function wire(){
 document.addEventListener('click',e=>{
   const b=e.target.closest('.day,.mini-day');
   if(b){
     const i=Number(b.dataset.day);
     document.querySelectorAll('.day,.mini-day').forEach(x=>x.classList.remove('selected'));
     document.querySelectorAll(`.day[data-day="${i}"],.mini-day:nth-child(${i+1})`).forEach(x=>x.classList.add('selected'));
   }
   if(e.target.closest('.today'))document.querySelector('.day').click();
   const m=e.target.closest('#menu-toggle');
   if(m){
     const open=document.querySelector('.site-nav').classList.toggle('open');
     m.setAttribute('aria-expanded',String(open));
   }
 });
}
document.addEventListener('DOMContentLoaded',()=>{render();wire()});
