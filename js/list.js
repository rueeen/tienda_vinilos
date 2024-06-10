console.log('Conectando list.js')
const bodyTabla = document.querySelector('#vinylTable tbody');
function loadVinyls(){
    const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];
    console.log(vinyls);
    vinyls.forEach(function(element) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${element.title}</td>
                        <td>${element.artist}</td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td><img src="${element.image}" style="width:100px; height:auto;"></td>
                        <td>
                            <a href="#">Eliminar</a>
                            <a href="#">Editar</a>
                        </td>`;
        bodyTabla.appendChild(row);
    });
}
window.addEventListener('load', loadVinyls);