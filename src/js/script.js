function obtenerFechaActual() {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const fecha = new Date();
  const diaSemana = dias[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
}
function actualizarFechaActual() {
  const elementoFecha = document.getElementById("fecha-actual");
  elementoFecha.textContent = obtenerFechaActual();
}
actualizarFechaActual();
setInterval(actualizarFechaActual, 1000);

var datosTabla = [
  { numero: 1, nombre: "VIVERO CHILLAN", ubicacion: "CHILLAN" },
  { numero: 2, nombre: "PUPILA NATIVA", ubicacion: "ON LINE" },
  { numero: 3, nombre: "JARDIN NATIVO", ubicacion: "CAMINO CABRERO KM41.2" },
  { numero: 4, nombre: "CAMELIA Y LAVANDA", ubicacion: "ON LINE" },
  { numero: 5, nombre: "MERCADO LIBRE", ubicacion: "VENDEDOR DE OSORNO (BARA 592135)" },
  { numero: 6, nombre: "VIVERO MAHUIDA", ubicacion: "ON LINE (MERCADO LIBRE)" },
  { numero: 7, nombre: "VIVERO ECORES", ubicacion: "ON LINE (LONGAVÍ)" },
  { numero: 8, nombre: "VIVERO NATIVOS CORDILLERA", ubicacion: "PINTO-BULNES +56958429809" },
  { numero: 9, nombre: "VIVERO BOSQUE VIVO", ubicacion: "ON LINE (VICHUQUEN)" },
  { numero: 10, nombre: "LAHUEN VIVERO", ubicacion: "PURRANQUE, LOS LAGOS,  +56932681828" },
  { numero: 11, nombre: "INVERNADERO JULAY", ubicacion: "FACEBOOK (MARCIA ANDREA CATALAN)" },
];
// Obtener la tabla 1
var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

// Iterar a través de los datosTabla
for (var i = 0; i < datosTabla.length; i++) {
  // Crear una nueva fila y las celdas
  var fila = tabla.insertRow();
  var celdaNumero = fila.insertCell(0);
  var celdaNombre = fila.insertCell(1);
  var celdaUbicacion = fila.insertCell(2);

  // Asignar los valores del JSON a las celdas
  celdaNumero.innerHTML = datosTabla[i].numero;
  celdaNombre.innerHTML = datosTabla[i].nombre;
  celdaUbicacion.innerHTML = datosTabla[i].ubicacion;
}

var datosTabla2 = [
  { numero: 1, nombre: "JUAN PABLO SALGADO BAHAMONDES", ubicacion: "FACEBOOK" },
  { numero: 2, nombre: "VIVERO FLOARB", ubicacion: "ON LINE, +56996400374" },
  { numero: 3, nombre: "CHILESEED", ubicacion: "ON LINE" },
  { numero: 4, nombre: "CHILEFLORA", ubicacion: "ON LINE" },
  { numero: 5, nombre: "DECORGREEN CHILE", ubicacion: "ON LINE" },
  { numero: 6, nombre: "POLIFEN", ubicacion: "ON LINE" },
  { numero: 7, nombre: "CHILE HUERTA", ubicacion: "ON LINE" },
  { numero: 8, nombre: "SEMILLA AUSTRAL", ubicacion: "ON LINE" },
  ];

// Obtener la segunda tabla
var tabla2 = document.getElementById("tabla2").getElementsByTagName('tbody')[0];

// Iterar a través de los datosTabla2 JSON
for (var i = 0; i < datosTabla2.length; i++) {
  // Crear una nueva fila y las celdas
  var fila = tabla2.insertRow();
  var celdaNumero = fila.insertCell(0);
  var celdaNombre = fila.insertCell(1);
  var celdaUbicacion = fila.insertCell(2);

  // Asignar los valores del JSON a las celdas
  celdaNumero.innerHTML = datosTabla2[i].numero;
  celdaNombre.innerHTML = datosTabla2[i].nombre;
  celdaUbicacion.innerHTML = datosTabla2[i].ubicacion;
}
