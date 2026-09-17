//moment
moment.locale("es");
const fecha = moment();

const texto = "Bienvenido a la consola, hoy estamos a " + fecha.format("dddd DD/MM/YYYY");

console.log(texto);;

//axios

const selector = document.getElementById("selectorUsuario");
const usuario = document.getElementById("usuario");

// Obtener usuarios con Axios
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {

        const usuarios = response.data;

        usuarios.forEach(function (persona) {

            const option = document.createElement("option");

            option.value = persona.id;
            option.textContent = persona.name;

            selector.appendChild(option);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });