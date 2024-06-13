console.log('Conectando list.js')
const bodyTabla = document.querySelector('#vinylTable tbody');

function loadVinyls() {
    bodyTabla.innerHTML = '';
    const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];
    if (vinyls.length === 0) {
        bodyTabla.innerHTML = 'No hay vinilos aun';
    }
    else {
        vinyls.forEach(function (element, indice) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${element.title}</td>
                        <td>${element.artist}</td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td><img src="${element.image}" style="width:100px; height:auto;"></td>
                        <td>
                            <a class="btn btn-danger" onclick="deleteVinyl(${indice})"><i class="bi bi-trash3"></i></a>
                            <a class="btn btn-warning" href="editForm.html?title=${element.title}"><i class="bi bi-pencil-square"></i></a>
                        </td>`;
            bodyTabla.appendChild(row);
        });
    }
}
window.addEventListener('load', loadVinyls);