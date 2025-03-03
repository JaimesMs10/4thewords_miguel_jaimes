let deleteId = null;

function mostrarModal(id) {
    deleteId = id;
    document.getElementById("modalConfirm").classList.remove("hidden");
}

document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("modalConfirm").classList.add("hidden");
});

document.getElementById("confirmDeleteBtn").addEventListener("click", function () {
    if (deleteId) {
        fetch(`/delete/${deleteId}`, { method: "POST" })
            .then(response => {
                if (response.ok) {
                    location.reload();
                } else {
                    alert("Error al eliminar la leyenda.");
                }
            });
    }
});

// Detecta cuando el usuario hace scroll
window.onscroll = function () { changeNavbarColor() };

// Función para cambiar el color del navbar
function changeNavbarColor() {
    var navbar = document.getElementById("navbar");

    // Si el scroll es mayor que 50px, cambia el fondo a blanco
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("bg-white", "shadow-md");
        navbar.classList.remove("bg-transparent");
        // Cambia el color del texto a negro para mejor visibilidad
        var links = navbar.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("text-white");
            links[i].classList.add("text-gray-800");
        }
    } else {
        navbar.classList.remove("bg-white", "shadow-md");
        navbar.classList.add("bg-transparent");
        // Vuelve a poner el texto blanco
        var links = navbar.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("text-gray-800");
            links[i].classList.add("text-white");
        }
    }
}

// Mostrar el modal con la leyenda completa
function mostrarModalLeyenda(legendId) {
    var modal = document.getElementById('modalLeyenda' + legendId);
    modal.classList.remove('hidden');
}

// Cerrar el modal
function cerrarModalLeyenda(legendId) {
    var modal = document.getElementById('modalLeyenda' + legendId);
    modal.classList.add('hidden');
}


