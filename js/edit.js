console.log("Conectando edit.js");

function cargarContenidoVinilo() {
    const url = window.location.search;
    const param = new URLSearchParams(url);

    const title = param.get('title');
    console.log(title);

    //Trayendo array
    const arrayVinilos = JSON.parse(localStorage.getItem('vinyls')) || [];

    // Utilizando mentodo find de arrays
    // e es el objeto que esta recorriendo
    const vinilo = arrayVinilos.find(e => e.title === title); // => realizan return automatico
    console.log(vinilo);

    document.querySelector('#title').value = vinilo.title;
    document.querySelector('#artist').value = vinilo.artist;
    document.querySelector('#description').value = vinilo.description;
    document.querySelector('#price').value = vinilo.price;
}

window.addEventListener('load', cargarContenidoVinilo);

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
    
        const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];

        const vinilo = vinyls.find(e => e.title === title);
        
        vinilo.title = title;
        vinilo.description = description;
        vinilo.artist = artist;
        vinilo.price = price;
        vinilo.image = reader.result;

        localStorage.setItem('vinyls', JSON.stringify(vinyls));

        Swal.fire({
            title: "Editado!",
            text: `Se edito vinilo ${title}`,
            icon: "success"
        });
        
        setTimeout(() => {
            window.location.href = 'list.html';
        }, 3000);
        
    }

    reader.readAsDataURL(image.files[0]);
});