const navbar = document.getElementById('navbar')
const hamburguer = document.getElementById('hamburguer');

hamburguer.addEventListener('click', () =>{
    navbar.classList.toggle("show")
})