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
    ],

    sucursales: ["Centro", "Caballito"],

};

console.log("PRIMER PUNTO")

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


console.log("Segundo PUNTO")

console.log(" ")
console.log("Ejercicio 1")

for (var i = 0; i < local.ventas.length; i++) {
    local.ventas[i].sucursal = "Centro"
}

console.log(local.ventas)

console.log(" ")
console.log("Ejercicio 2")

console.log(local);

console.log(" ")
console.log("Ejercicio 3")

function agregarInfo(anio, mes, dia, vendedora, componentes, sucursal) {
    local.ventas.push({fecha: new Date(anio, mes, dia), nombreVendedora: vendedora, componentes: componentes, sucursal: sucursal})
    return (local.ventas)
}

console.log(agregarInfo(2019, 1, 12, "Hedy", ["Monitor GPRS 3000", "HDD Toyiva"], "Centro"));
console.log(agregarInfo(2019, 1, 24, "Sheryl", ["Motherboard ASUS 1500", "HDD Wezter Dishital"], "Caballito"));
console.log(agregarInfo(2019, 1, 1, "Ada", ["Motherboard MZI", "RAM Quinston Fury"], "Centro"));
console.log(agregarInfo(2019, 1, 11, "Grace", ["Monitor ASC 543", "RAM Quinston"], "Caballito"));
console.log(agregarInfo(2019, 1, 15, "Ada", ["Motherboard ASUS 1200", "RAM Quinston Fury"], "Centro"));
console.log(agregarInfo(2019, 1, 12, "Hedy", ["Motherboard ASUS 1500", "HDD Toyiva"], "Caballito"));
console.log(agregarInfo(2019, 1, 21, "Grace", ["Motherboard MZI", "RAM Quinston"], "Centro"));
console.log(agregarInfo(2019, 1, 8, "Sheryl", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro"));
console.log(agregarInfo(2019, 1, 16, "Sheryl", ["Monitor GPRS 3000", "RAM Quinston Fury"], "Centro"));
console.log(agregarInfo(2019, 1, 27, "Hedy", ["Motherboard ASUS 1200", "HDD Toyiva"], "Caballito"));
console.log(agregarInfo(2019, 1, 22, "Grace", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro"));
console.log(agregarInfo(2019, 1, 5, "Ada", ["Motherboard ASUS 1500", "RAM Quinston"], "Centro"));
console.log(agregarInfo(2019, 1, 1, "Grace", ["Motherboard MZI", "HDD Wezter Dishital"], "Centro"));
console.log(agregarInfo(2019, 1, 7, "Sheryl", ["Monitor GPRS 3000", "RAM Quinston"], "Caballito"));
console.log(agregarInfo(2019, 1, 14, "Ada", ["Motherboard ASUS 1200", "HDD Toyiva"], "Centro"));


console.log(" ")
console.log("Ejercicio 4")



function ventaSucursal(sucursal) {
    var ventastotaless = 0
    for (var i = 0; i < local.ventas.length; i++) {
        if (sucursal == local.ventas[i].sucursal) {
            ventastotaless = (ventastotaless + precioMaquina(local.ventas[i].componentes));
        }
    }
    return ventastotaless
}

console.log("Centro vendió en total: " + ventaSucursal("Centro"));
console.log("Caballito vendió en total: " + ventaSucursal("Caballito"));

console.log(" ")
console.log("Ejercicio 5")

function ventasTotal(dato, parametro) {
    var ventastotal = 0
    for (var i = 0; i < local.ventas.length; i++) {
        console.log(dato, parametro );
        console.log(local.ventas[i].nombreVendedora);
        console.log(dato)
        if (parametro == dato) {
            ventastotal = (ventastotal + precioMaquina(local.ventas[i].componentes));
        }
    }
    return ventastotal
}

console.log("Prueba con Grace (vendedora):" + ventasTotal(local.ventas[i].nombreVendedora, "Grace"))

console.log(" ")
console.log("Funcion 6")

var sucursal1 = "Centro"
var sucursal2 = "Caballito"
var ganador

function sucursalDelMes(mes, anio) {
    var vtassucursal1 = 0;
    var vtassucursal2 = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if ((mes == local.ventas[i].fecha.getMonth() + 1) && (anio == local.ventas[i].fecha.getFullYear()) && (sucursal1 == local.ventas[i].sucursal)) {
            vtassucursal1 = (vtassucursal1 + precioMaquina(local.ventas[i].componentes));
        }
    }
    for (var j = 0; j < local.ventas.length; j++) {
        if ((mes == local.ventas[j].fecha.getMonth() + 1) && (anio == local.ventas[j].fecha.getFullYear()) && (sucursal2 == local.ventas[j].sucursal)) {
            vtassucursal2 = (vtassucursal2 + precioMaquina(local.ventas[j].componentes));
        }
    }
    if (vtassucursal1 > vtassucursal2) {
        ganador = sucursal1;
    } else {
        ganadora = sucursal2;
    }
    return ganador
}



console.log("En Enero el local que más vendió fue: " + sucursalDelMes(1, 2019));
console.log("En Febrero el local que más vendió fue: " + sucursalDelMes(2, 2019))