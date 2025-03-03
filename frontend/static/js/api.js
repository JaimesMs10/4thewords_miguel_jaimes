document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/legends")  // Llama a la API Flask para obtener las leyendas
        .then(response => response.json())  // Convierte la respuesta en JSON
        .then(data => {
            let container = document.getElementById("leyendas-container");
            container.innerHTML = "";  // Limpiar el contenedor antes de cargar nuevas leyendas

            if (data.length === 0) {
                container.innerHTML = "<p class='text-center col-span-full text-gray-600'>No hay leyendas disponibles.</p>";
                return;
            }

            // Crear un "card" para cada leyenda
            data.forEach(legend => {
                // Comprobar que creation_date existe
                let formattedDate = legend.creation_date;
                if (formattedDate) {
                    const creationDate = new Date(legend.creation_date);
                    if (!isNaN(creationDate)) {
                        // Formatear como "día-mes-año"
                        const day = creationDate.getDate().toString().padStart(2, '0');  // Día con 2 dígitos
                        const month = (creationDate.getMonth() + 1).toString().padStart(2, '0');  // Mes con 2 dígitos (recordar que getMonth() comienza desde 0)
                        const year = creationDate.getFullYear();
                        formattedDate = `${day}-${month}-${year}`;  // Formato "día-mes-año"
                    } else {
                        console.error("Fecha no válida:", legend.creation_date);
                    }
                } else {
                    console.error("No hay fecha en la leyenda:", legend);
                }

                let card = document.createElement("div");
                card.className = "bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300";
                
                card.innerHTML = `
                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-gray-800">${legend.name}</h3>
                        <p class="text-gray-600 mt-2"><strong>Categoría:</strong> ${legend.category}</p>
                        <p class="text-gray-600 mt-2">${legend.description}</p>
                    </div>

                    ${legend.image_url ? `<img src="${legend.image_url}" alt="Imagen de la leyenda" class="w-full h-80 object-cover rounded-lg mb-4">` : ""}

                    <p class="text-gray-500 text-sm"><strong>Fecha de creación:</strong> ${formattedDate}</p>
                    <p class="text-gray-500 text-sm"><strong>Ubicación:</strong> ${legend.province}, ${legend.canton}, ${legend.district}</p>

                    <div class="mt-4 flex justify-between">
                        <a href="/edit/${legend.id}" class="text-blue-500 hover:underline">Editar</a>
                        <button class="text-red-500 hover:underline" onclick="mostrarModal(${legend.id})">Eliminar</button>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error al cargar las leyendas:", error));
});
