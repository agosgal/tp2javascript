var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};

console.log("Arrays")

console.log(local)

console.log(" ")
console.log("Funcion 1")

var precio1
var precio2


function precioMaquina(componentes) {
    for (i = 0; i < local.precios.length; i++) {
        if (componentes[0] == local.precios[i].componente) {
            precio1 = local.precios[i].precio
        }
    }
    for (j = 0; j < local.precios.length; j++) {
        if (componentes[1] == local.precios[j].componente) {
            precio2 = local.precios[j].precio
        }
    }
    return precio1 + precio2
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["HDD Toyiva", "RAM Quinston"]))
console.log(precioMaquina(["Motherboard ASUS 1200", "Monitor ASC 543"]))



console.log(" ")
console.log("Funcion 2")


var cantidadvendida = 0

function cantidadVentas(componente) {
    cantidadvendida = 0;
    for (i = 0; i < local.ventas.length; i++) {
        if ((componente == local.ventas[i].componentes[0]) || (componente == local.ventas[i].componentes[1])) {
            cantidadvendida++
        }
    }
    return cantidadvendida
}


console.log(cantidadVentas("Monitor ASC 543"));
console.log(cantidadVentas("Monitor GPRS 3000"));
console.log(cantidadVentas("Motherboard MZI"));
console.log(cantidadVentas("Motherboard ASUS 1500"));
console.log(cantidadVentas("Motherboard ASUS 1200"));
console.log(cantidadVentas("HDD Toyiva"));
console.log(cantidadVentas("HDD Wezter Dishital"));
console.log(cantidadVentas("RAM Quinston"));
console.log(cantidadVentas("RAM Quinston Fury"));


console.log(" ")
console.log("Funcion 4")

function ventasMes(mes, anio) {
    var montovendido = 0;
    for (var i = 0; i < local.ventas.length; i++) {
        if ((mes == (local.ventas[i].fecha.getMonth() + 1)) && (anio == local.ventas[i].fecha.getFullYear())) {
            montovendido = (montovendido + precioMaquina(local.ventas[i].componentes));
        }
    }
    return montovendido
}

console.log(ventasMes(1, 2019));
console.log(ventasMes(2, 2019));

console.log(" ")
console.log("Funcion 3")

var vendedora1 = "Ada"
var vendedora2 = "Grace"
var ganadora

function vendedoraDelMes(mes, anio) {
    var vtasvendedora1 = 0;
    var vtasvendedora2 = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if ((mes == local.ventas[i].fecha.getMonth() + 1) && (anio == local.ventas[i].fecha.getFullYear()) && (vendedora1 == local.ventas[i].nombreVendedora)) {
            vtasvendedora1 = (vtasvendedora1 + precioMaquina(local.ventas[i].componentes));
            console.log("La vendedora 1 vendió: " + vtasvendedora1)
        }
    }
    for (var j = 0; j < local.ventas.length; j++) {
        if ((mes == local.ventas[j].fecha.getMonth() + 1) && (anio == local.ventas[j].fecha.getFullYear()) && (vendedora2 == local.ventas[j].nombreVendedora)) {
            vtasvendedora2 = (vtasvendedora2 + precioMaquina(local.ventas[j].componentes));
            console.log("La vendedora 2 vendió: " + vtasvendedora2)
        }
    }
    if (vtasvendedora1 > vtasvendedora2) {
        ganadora = vendedora1;
    } else {
        ganadora = vendedora2;
    }
    return ganadora
}



console.log("En Enero la ganadora fue: " + vendedoraDelMes(1, 2019));
console.log("En Febrero la ganadora fue: " + vendedoraDelMes(2, 2019))

console.log(" ")
console.log("Funcion 5")

function ventasVendedora(vendedora) {
    var ventastotales = 0
    for (var i = 0; i < local.ventas.length; i++) {
        if (vendedora == local.ventas[i].nombreVendedora) {
            ventastotales = (ventastotales + precioMaquina(local.ventas[i].componentes));
        }
    }
    return ventastotales
}

console.log("Grace vendió en total: " + ventasVendedora("Grace"));
console.log("Ada vendió en total: " + ventasVendedora("Ada"));

console.log(" ")
console.log("Funcion 6")

var arrayprueba = [1, 3, 5, 6]

function componenteMasVendido() {
    var qvendidas = [];
    for (var i = 0; i < local.precios.length; i++) {
        (cantidadVentas(local.precios[i].componente));
        (qvendidas.push(cantidadVentas(local.precios[i].componente)));
       }
    for (var j = 0; j < qvendidas.length; j++) {
        var mayorvalor = 0;
        if (qvendidas[j] > mayorvalor) {
            mayorvalor = qvendidas[j];
        }
    for (var k = 0; k < local.precios.length; k++) {
        var masvendido
        if (mayorvalor == (cantidadVentas(local.precios[k].componente))) {
            masvendido = local.precios[k].componente
            }
        }
        return masvendido
    }
}

console.log(componenteMasVendido());


console.log(" ")
console.log("Funcion 7")

var ventassino
var mesesconvta = []

for (var i = 0; i < local.ventas.length; i++) {
    (mesesconvta.push(local.ventas[i].fecha.getMonth() + 1));
    console.log(mesesconvta)
} 

function huboVentas(mes, anio) {
for (var j = 0; j < mesesconvta.length; j++) {
    if (mesesconvta.includes(mes)) {
        ventassino = "Si"
    } else {
        ventassino = "No"
    }
}
return ventassino
}

console.log(huboVentas(1, 2019));
console.log(huboVentas(2, 2019));
console.log(huboVentas(3, 2019));
console.log(huboVentas(4, 2019));
console.log(huboVentas(5, 2019));
console.log(huboVentas(6, 2019));
console.log(huboVentas(7, 2019));
console.log(huboVentas(8, 2019));
console.log(huboVentas(9, 2019));
console.log(huboVentas(10, 2019));
console.log(huboVentas(11, 2019));
console.log(huboVentas(12, 2019));