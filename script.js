function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const modal = document.getElementById(modalId)
const botao1 = document.querySelector("modal1")
const botao2 = document.querySelector("modal2")
const botao3 = document.querySelector("modal3")
const botao4 = document.querySelector("modal4")

function abc(modalId) {
  document.getElementById(modalId).showModal()
}

function closemodal(modalId) {
  document.getElementById(modalId).close();
}

function jdv() {
  location.href = 'https://jogodavelha2.vercel.app'
}

function estrpd() {
  location.href = 'https://estoquerapido.vercel.app'
}

function port() {
  location.href = 'https://oscartaparojunior.vercel.app'
}