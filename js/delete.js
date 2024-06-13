function deleteVinyl(indice) {
    const vinyls = JSON.parse(localStorage.getItem('vinyls')) || [];
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {

        if (result.isConfirmed) {

            vinyls.splice(indice, 1);
            localStorage.setItem('vinyls', JSON.stringify(vinyls));

            Swal.fire({
                title: "Deleted!",
                text: "Se elimino vinilo de listado.",
                icon: "success"
            });

            loadVinyls();
        }
    });


}

