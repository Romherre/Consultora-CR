document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Cierra el menú al hacer clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });

    // Manejo del formulario de suscripción
    const formSuscripcion = document.querySelector('.form-suscripcion');
    if (formSuscripcion) {
        formSuscripcion.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario

            // Muestra el mensaje de agradecimiento
            const mensaje = document.createElement('p');
            mensaje.textContent = 'Gracias por suscribirte';
            mensaje.style.color = '#1973b8';
            mensaje.style.marginTop = '15px';

            // Inserta el mensaje después del botón
            formSuscripcion.appendChild(mensaje);

            // Limpia el campo de correo electrónico
            formSuscripcion.reset();
        });
    }

    // Manejo del formulario de contacto
    const formContacto = document.getElementById('contact-form');
    if (formContacto) {
        const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

        formContacto.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Muestra el mensaje de confirmación
            mensajeConfirmacion.style.display = 'block';

            // Oculta el mensaje después de mostrarlo
            setTimeout(() => {
                mensajeConfirmacion.style.display = 'none';
            }, 5000); // 5 segundos dura

            // Reinicia el formulario
            formContacto.reset();
        });
    }
});
