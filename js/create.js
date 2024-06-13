console.log("Conectando formulario con js");

const formulario = document.getElementById('vinylForm');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image');

    const reader = new FileReader() // Instancia de un objeto que permite cargar archivos

    reader.onload = function () {
        const newVinyl = {
            title: title,
            artist: artist,
            description: description,
            price: price,
            image: reader.result
        };

        const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];

        vinyls.push(newVinyl);

        localStorage.setItem('vinyls', JSON.stringify(vinyls));

        Swal.fire({
            title: "Agregado!",
            text: `Se agrego vinilo ${title}`,
            icon: "success"
        });

        setTimeout(() => {
            window.location.href = 'list.html';
        }, 3000);

    }

    reader.readAsDataURL(image.files[0]);
});