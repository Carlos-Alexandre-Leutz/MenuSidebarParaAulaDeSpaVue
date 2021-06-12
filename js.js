window.addEventListener('scroll', function() {
    let sidebar = document.getElementById("sidebar");
    if (window.scrollY > 1)
        sidebar.classList.add("sidebar-color");
    else
        sidebar.classList.remove("sidebar-color");
});
document.getElementById("container-hamburguer").addEventListener('click', function() {
    let hamburguer = document.getElementById('hamburguer');
    let hasClass = hamburguer.classList.contains('hamburguer-mover');
    let barra = document.getElementById('barra');
    if (hasClass) {
        hamburguer.classList.remove("hamburguer-mover");
        barra.classList.remove("barra-aberta");
    } else {
        hamburguer.classList.add("hamburguer-mover");
        barra.classList.add("barra-aberta");
    }
});