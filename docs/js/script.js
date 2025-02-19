let cart = [];

// Agregar una reserva al carrito
function addToCart() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const time = document.getElementById("time").value;

    // Verificar campos completos
    if (name && email && phone && service && time) {
        const reservation = {
            name: name,
            email: email,
            phone: phone,
            service: service,
            time: time
        };

        // Obtener el carrito actual o inicializarlo como un array vacío
        cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Sumar la nueva reserva al carrito
        cart.push(reservation);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Reservaste tu turno, gracias por confiar en nosotros...")

        // Mostrar los turnos en el carrito y actualizar el contador
        displayCart();
        document.getElementById("cart-count").innerText = cart.length;

        // Limpiar el formulario después de agregar
        document.getElementById("reservation-form").reset();
    } else {
        // Si faltan campos, mostrar mensaje error
        alert("Por favor, completa todos los campos.");
    }
}

// Mostrar turnos del carrito
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ''; // Limpiar lista antes de cargar

    // Obtener turnos guardados en el carrito
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Si no hay turnos, mostrar un mensaje
    if (cart.length === 0) {
        cartList.innerHTML = '<li class="list-group-item">No hay turnos reservados.</li>';
    } else {
        cart.forEach((reservation) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = `
                <strong>Nombre:</strong> ${reservation.name}<br>
                <strong>Servicio:</strong> ${reservation.service}<br>
                <strong>Hora:</strong> ${reservation.time}
            `;
            cartList.appendChild(li);
        });
    }
}

// Cambiar la visibilidad del carrito
function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}

