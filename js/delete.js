function deleteVinyl(indice) {
    const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];

    vinyls.splice(indice, 1);

    localStorage.setItem('vinyls', JSON.stringify(vinyls));

    loadVinyls();
}

