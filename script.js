const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const links=document.querySelectorAll(".nav-link");
const sections=document.querySelectorAll("main section[id]");
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{if(window.scrollY>=section.offsetTop-180) current=section.id;});
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{const nav=document.querySelector(".navbar-collapse");if(nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();}));
document.getElementById("year").textContent=new Date().getFullYear();
