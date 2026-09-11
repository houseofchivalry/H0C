document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".day,.mini-day").forEach(el=>el.addEventListener("click",()=>{
    const i=el.classList.contains("day") ? Array.from(document.querySelectorAll(".day")).indexOf(el) : Array.from(document.querySelectorAll(".mini-day")).indexOf(el);
    document.querySelectorAll(".day,.mini-day").forEach(x=>x.classList.remove("selected"));
    const d=document.querySelectorAll(".day")[i], m=document.querySelectorAll(".mini-day")[i];
    if(d)d.classList.add("selected"); if(m)m.classList.add("selected");
  }));
  const today=document.querySelector(".today"); if(today) today.addEventListener("click",()=>{ const d=document.querySelector(".day"); if(d)d.click(); });
  const menu=document.querySelector("#menu-toggle"),nav=document.querySelector(".site-nav");
  if(menu&&nav) menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
});
