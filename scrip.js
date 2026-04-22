document.addEventListener('DOMContentLoaded', function() {
        // Seleccionamos el menú y los enlaces
        const menuColapsable = document.getElementById('navbarNav');
        const links = document.querySelectorAll('.nav-link');
        const navbar = document.getElementById('miMenu');

        // --- FUNCIONALIDAD 1: CERRAR AL HACER CLIC (Para móviles) ---
        // Esto evita que el menú se quede abierto tapando la pantalla al elegir una sección
        links.forEach(link => {
            link.addEventListener('click', () => {
                const bsCollapse = bootstrap.Collapse.getInstance(menuColapsable);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            });
        });

        // --- FUNCIONALIDAD 2: CAMBIO DE COLOR DINÁMICO ---
        // Como tu menú es 'bg-dark', vamos a hacer que brille un poco más al bajar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = '#111111'; // Un negro más profundo
                navbar.classList.add('shadow-lg');
            } else {
                navbar.style.background = '#212529'; // El bg-dark original
                navbar.classList.remove('shadow-lg');
            }
        });

        // --- FUNCIONALIDAD 3: SMOOTH SCROLL ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70, // Espacio para que el menú no tape el título
                        behavior: 'smooth'
                    });
                }
            });
        });

        console.log("Sistemas en línea. ¡Felicidades por ese 50/50, Héctor!");
    });

















document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SMOOTH SCROLL (Desplazamiento Suave) ---
    // Hace que al dar clic en el menú, la página baje con elegancia
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste por el Navbar Sticky
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. EFECTO DE NAVBAR (Cambio de color al bajar) ---
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.classList.remove('shadow-sm');
        }
    };

    // --- 3. VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    const contactForm = document.querySelector('#Contactos form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            // Aquí puedes agregar lógica para enviar el correo
            // Por ahora, lanzaremos una alerta pro de que se envió
            alert('¡Gracias Héctor! Tu mensaje ha sido enviado con éxito. Nuestro equipo técnico te contactará pronto.');
            contactForm.reset();
        });
    }

    // --- 4. ANIMACIÓN DE LAS TARJETAS DE SERVICIO ---
    // Un pequeño efecto de entrada cuando aparecen en pantalla
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card-agency').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // 1. Buscamos los elementos por sus ID
    const formulario = document.querySelector('#contacto form');
    const btnEnviar = document.getElementById('btnEnviar');
    const btnTexto = document.getElementById('btnTexto');
    const btnSpinner = document.getElementById('btnSpinner');

    // 2. Escuchamos cuando se envía el formulario
    if (formulario && btnEnviar) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Iniciar estado de carga
            btnEnviar.disabled = true; // Bloquea el botón para evitar doble clic
            btnTexto.innerText = "Enviando..."; // Cambia el texto
            btnSpinner.classList.remove('d-none'); // MUESTRA el spinner (quita el d-none)

            // Simulación de proceso de red (2.5 segundos)
            setTimeout(() => {
                // Finalizar carga y mostrar éxito
                btnSpinner.classList.add('d-none'); // OCULTA el spinner de nuevo
                btnTexto.innerText = "¡Mensaje Enviado!";
                btnEnviar.classList.replace('btn-primary', 'btn-success'); // Cambia a color verde

                // Resetear el botón a su estado original después de 3 segundos
                setTimeout(() => {
                    formulario.reset(); // Limpia los campos del formulario
                    btnEnviar.disabled = false;
                    btnTexto.innerText = "Enviar Propuesta";
                    btnEnviar.classList.replace('btn-success', 'btn-primary'); // Vuelve al azul
                }, 3000);
                
            }, 2500);
        });
    }
});


  document.getElementById('year').textContent = new Date().getFullYear();
