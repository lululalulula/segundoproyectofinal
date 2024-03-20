import './style.css'
import casasrurales from "./casasrurales.js";
import casasadaptadas from "./casasadaptadas.js";
import hotelesaccesibles from "./hotelesaccesibles.js";
//Recuperamos el botón y lo almacenamos en una constante
const dianoche = document.querySelector("#tema");
//Le vamos a añadir un evento click que le añada y le quite una clase al body llamda dark
dianoche.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//creamos contact donde meteremos el evento lik
const hotelesaccesibleslink = document.querySelector("#hotelesaccesibleslink");
const casasadaptadaslink = document.querySelector("#casasadaptadaslink");
const casasruraleslink = document.querySelector("#casasruraleslink");


//funcion pintar home
const main = document.querySelector("main");

const pintarHome = () => {
  // constante main
  const main = document.querySelector("main");
  //Por seguridad, lo vaciamos
  main.innerHTML = "";
  //Pintamos HTML mediante innerHTML
  main.innerHTML = `
  <h3>Somos una empresa de gestion de viviendas accesibles de la Sierra Norte de Madrid, especializada en las necesidades de accesibilidad de personas con distintas discapacidades que ofrece:</h3>
  <p> Especialización en encontrar y ofrecer propiedades que cumplan con estándares de accesibilidad.
  <p> Ofrecemos asesoramientoindividualizado para adaptar propiedades a las necesidadesespecíficas de las personas con discapacidad.</p>
  <p> Conocimiento en regulaciones y ayudas financieras. Estamos al tanto de las regulaciones y programas de apoyo para laaccesibilidad, y guiar a los clientes en el proceso.</p>
  <p>Red de contactos con profesionales de accesibilidad. Tenemos conexiones con expertos en adaptaciones y accesibilidad parafacilitar mejoras en las propiedades.</p></h6>
   `;
};



//funcion de pintar hoteles
const pintarhotelesaccesibles = () => {
  //vaciamos
  const main = document.querySelector("main"); 
  //llenamos con innerhtml
  main.innerHTML = `
  <section id = "hotelesaccesibles"></section>
 `;
  const section = document.querySelector("#hotelesaccesibles");

//buble
for (const hotel of hotelesaccesibles) {
  //Creamos un article vacio en JS
  const article = document.createElement("article");
  //Le rellenamos el HTML al article con innerHTML
  article.innerHTML = `

    <p>Nombre: ${hotel.nombre}</p>
    <img src="${hotel.imagen}"/>
    <p>Carpintería sin barreras: ${hotel.carpinteriasinbarreras ? 'Sí' : 'No'}</p>
    <p>Cocina accesible: ${hotel.cocinaaccesible ? 'Sí' : 'No'}</p>
    <p>Baño adaptado: ${hotel.banoadaptado ? 'Sí' : 'No'}</p>
    <p>Ducha accesible: ${hotel.duchaaccesible ? 'Sí' : 'No'}</p>
    <p>Piscina accesible: ${hotel.piscinaaccesible ? 'Sí' : 'No'}</p>
    <p>Situación: ${hotel.situacion}</p>
  `;
  section.appendChild(article);
}
}


//funcion pintar casasadaptadas
const pintarcasasadaptadas = () => {
  //vaciamos
  const main = document.querySelector("main");
    //Le rellenamos el HTML al article con innerHTML
  main.innerHTML = `
    <section id = "casasadaptadas"></section>
 `;
  const section = document.querySelector("#casasadaptadas");
//buble casasadaptadas
for (const casa of casasadaptadas) {
  //vaciamos main
 
  const article = document.createElement("article");
  article.innerHTML = `
  <p>Precio: ${casa.precio}"</p>
  <img src="${casa.imagen}"/>
  <p>Metros cuadrados: ${casa.metroscuadrados}</p>
  <p>Orientación: ${casa.orientacion}</p>
  <p>Dormitorios: ${casa.dormitorios}</p>
  <p>Baños: ${casa.banos}</p>
  <p>Calefación: ${casa.calefaccion}</p>
  <p>Planta: ${casa.planta}</p>
  <p>Estado: ${casa.estado}</p>
  <p>Adaptada: ${casa.adaptada ? 'Sí' : 'No'}</p>
  <p>Tipo de adaptación: ${casa.tipoadaptacion}</p>
   `;

  section.appendChild(article);
}
}

//creamos funcion pintar casarurales
const pintarcasasrurales = () => {
  const main = document.querySelector("main");
  //Recuperamos main
  main.innerHTML = `
   <h4>Casa rurales adaptadas de la sierra de Madrid</h4>  
  <section id = "casasrurales"></section>
 `;
  const section = document.querySelector("#casasrurales");
//buble
for (const rural of casasrurales) {
  const article = document.createElement("article");
  article.innerHTML = `
  <p>Tipo: ${rural.tipo}</p>
  <img src="${rural.imagen}"/>
  <p>Plazas: ${rural.plazas}</p>
  <p>Admite animales: ${rural.admiteanimales ? 'Sí' : 'No'}</p>
  <p>Interior: ${rural.interior}</p>
  <p>Exterior: ${rural.exterior}</p>
  <p>Situación: ${rural.situacion}</p>
  `;

  section.appendChild(article);

}
}
pintarHome();

hotelesaccesibleslink.addEventListener("click", () => {
  pintarhotelesaccesibles();
});

casasruraleslink.addEventListener("click", () => {
  pintarcasasrurales();
});

casasadaptadaslink.addEventListener("click", () => {
  pintarcasasadaptadas();
});




