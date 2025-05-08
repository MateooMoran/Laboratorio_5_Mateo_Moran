
let url = 'https://dummyjson.com/products';

async function conectarAPI() {
    const mensaje = document.getElementById('mensaje');
    const contenedor = document.getElementById('productos');

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        const productos = data.products.slice(0, 5);
        console.log(data)
        mensaje.textContent = ''; 

        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');

            div.innerHTML = `
                <h2>${producto.title}</h2>
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <p>${producto.description}</p>
                <strong>Precio: $${producto.price}</strong>
            `;

            contenedor.appendChild(div);
        });
    } catch (error) {
        mensaje.textContent = 'Error al cargar los productos.';
        console.error(error);
    }
}

conectarAPI();
