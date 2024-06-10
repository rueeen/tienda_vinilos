console.log('Conectando cargarVinilos.js')
const bodyAlbums = document.querySelector('#albums');
bodyAlbums.innerHTML = '';
function loadContent() {
    const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];
    vinyls.forEach(function (element) {
        bodyAlbums.innerHTML += `<div class="card">
                                    <div class="card-img">
                                        <img src="${element.image}" alt="">
                                    </div>
                                    <div class="card-body">
                                        <div class="body-title">
                                            <h4>${element.title}</h4>
                                        </div>
                                        <div class="body-description">
                                            <p class="artist">${element.artist}</p>
                                            <p>Vinyl</p>
                                            <p class="prize">$${element.price}</p>
                                        </div>
                                        <a href="#" class="btn btn-red">Add cart</a>
                                    </div>
                                </div>`;
    });
}
window.addEventListener('load', loadContent);