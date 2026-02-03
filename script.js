// FADE-UP HERO ANIMATION
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up").forEach(el => el.classList.add("show"));
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }
});

// GSAP subtle floating for hero content
gsap.to(".hero-content", {
  y: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});


// HERO FADE-UP
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up").forEach(el => el.classList.add("show"));
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }
});

// GSAP HERO FLOATING
gsap.to(".hero-content", {
  y: 15,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// SCROLL-TRIGGERED REVEAL FOR SECTIONS
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

reveals.forEach(el => observer.observe(el));

// OPTIONAL: Subtle hero background parallax
window.addEventListener("scroll", ()=>{
  const scrolled = window.scrollY;
  const heroVideo = document.querySelector(".hero-video");
  heroVideo.style.transform = `scale(${1 + scrolled*0.0005}) translateY(${scrolled*0.1}px)`;
});
// Scroll Down smooth scroll
document.querySelector(".scroll-down").addEventListener("click", e => {
  e.preventDefault();
  const target = document.querySelector("#about");
  target.scrollIntoView({behavior:"smooth"});
});
const menuReveals = document.querySelectorAll(".menu .reveal");
const observerMenu = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});
menuReveals.forEach(el=>observerMenu.observe(el));
const animates = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  animates.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('active');
    }
  });
});
document.getElementById('contactFormLuxury').addEventListener('submit', e => {
  e.preventDefault();
  e.target.innerHTML = `
    <h2 style='color:#d4af37;text-align:center'>Message Sent ✨</h2>
    <p style='color:#aaa;text-align:center'>We will contact you shortly.</p>
  `;
});
