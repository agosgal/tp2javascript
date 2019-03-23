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

console.log(local.sucursales[0])

console.log("PRIMER PUNTO")

console.log(" ")
console.log("Funcion 1")

function precioMaquina(componentes) {
    var precio1 = 0
    for (var i = 0; i < local.precios.length; i++) {
        for (var j = 0; j < componentes.length; j++) {
            if (componentes[j] ==  local.precios[i].componente) {
                precio1 = ((local.precios[i].precio) + precio1)
            }
        }
    }
    return precio1
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log(precioMaquina(["Monitor ASC 543", "RAM Quinston"]));
console.log(precioMaquina(["RAM Quinston Fury", "Motherboard MZI"]));


console.log(" ")
console.log("Funcion 2")

function cantidadVentas(componente2) {
    var cantidadvendida = 0;
    for (var i = 0; i < local.ventas.length; i++) {
        for (var j = 0; j < componente2.length; j++) {
        if (local.ventas[i].componentes.includes(componente2[j])) {
            cantidadvendida++
        }
    }
    }
    return cantidadvendida
}


console.log(cantidadVentas(["Monitor ASC 543"]));
console.log(cantidadVentas(["Monitor GPRS 3000"]));
console.log(cantidadVentas(["Motherboard MZI"]));
console.log(cantidadVentas(["Motherboard ASUS 1500"]));
console.log(cantidadVentas(["Motherboard ASUS 1200"]));
console.log(cantidadVentas(["HDD Toyiva"]));
console.log(cantidadVentas(["HDD Wezter Dishital"]));
console.log(cantidadVentas(["RAM Quinston"]));
console.log(cantidadVentas(["RAM Quinston Fury"]));

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
console.log("Funcion 3 - sin hardcodear")

function vendedoraDelMes2(mes, anio) {
    var arrayVendedoras = []
    for (var j = 0; j<local.vendedoras.length; j++)  {
        var objetoNuevo = [
        { nombre: local.vendedoras[j], ventas: 0}
]
        for (var i = 0; i<local.ventas.length; i++) {
            if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
                if (local.vendedoras[j] === local.ventas[i].nombreVendedora) {
                     {
                    objetoNuevo.ventas = (objetoNuevo.ventas + precioMaquina(local.ventas[i].componentes))
                }
                }
                if (objetoNuevo[i].nombre === local.ventas[i].nombreVendedora)
                console.log(objetoNuevo)
            }

        }

    }
}
console.log(vendedoraDelMes2(2, 2019))

console.log(" ")
console.log(" ")
console.log(" ")


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


function huboVentas(mes, anio) {
for (var i = 0; i < local.ventas.length; i++) {

    for (var i = 0; i < local.ventas.length; i++) {
        (mesesconvta.push(local.ventas[i].fecha.getMonth() + 1));
    } 

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

console.log(" ")
console.log(" ")
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

local.ventas
local[variable]
var variable = "componentes"

console.log("Centro vendió en total: " + ventaSucursal("Centro"));
console.log("Caballito vendió en total: " + ventaSucursal("Caballito"));

console.log(" ")
console.log("Ejercicio 5")



function ventasTotal(dato, parametro) {
    var ventastotal = 0
    for (var i = 0; i < local.ventas.length; i++) {
        if (parametro == local.ventas[i][dato]) {
            ventastotal = (ventastotal + precioMaquina(local.ventas[i].componentes));
        }
    }
    return ventastotal
}

console.log(ventasTotal("nombreVendedora", "Grace"));
console.log(ventasTotal("nombreVendedora", "Ada"));
console.log(ventasTotal("sucursal", "Centro"));
console.log(ventasTotal("sucursal", "Caballito"))

console.log(" ")
console.log("Funcion 6")

// var sucursal1 = "Centro"
// var sucursal2 = "Caballito"
// var ganador

// function sucursalDelMes(mes, anio) {
//     var vtassucursal1 = 0;
//     var vtassucursal2 = 0;

//     for (var i = 0; i < local.ventas.length; i++) {
//         if ((mes == local.ventas[i].fecha.getMonth() + 1) && (anio == local.ventas[i].fecha.getFullYear()) && (sucursal1 == local.ventas[i].sucursal)) {
//             vtassucursal1 = (vtassucursal1 + precioMaquina(local.ventas[i].componentes));
//         }
//     }
//     for (var j = 0; j < local.ventas.length; j++) {
//         if ((mes == local.ventas[j].fecha.getMonth() + 1) && (anio == local.ventas[j].fecha.getFullYear()) && (sucursal2 == local.ventas[j].sucursal)) {
//             vtassucursal2 = (vtassucursal2 + precioMaquina(local.ventas[j].componentes));
//         }
//     }
//     if (vtassucursal1 > vtassucursal2) {
//         ganador = sucursal1;
//     } else {
//         ganadora = sucursal2;
//     }
//     return ganador
// }



// console.log("En Enero el local que más vendió fue: " + sucursalDelMes(1, 2019));
// console.log("En Febrero el local que más vendió fue: " + sucursalDelMes(2, 2019))

function sucursalDelMes(mes, anio) {
    for ( var i = 0; i<local.sucursales.length; i++) {
        var arraysuc = {
            sucursal: local.sucursales[i], ventas: 0}
        console.log(arraysuc)
    }

    for (var j = 0; j < local.ventas.length; j++) {
        console.log(local.ventas[j].sucursal)
        for (var k= 0; k < arraysuc.length; k++) {
            console.log(local.ventas[j].sucursal)
        if ((mes == (local.ventas[j].fecha.getMonth() + 1)) && (anio == local.ventas[i].fecha.getFullYear())) {
            if (arraysuc[k].sucursal === local.ventas[j].sucursal) {
            arraysuc[k].ventas = arraysuc[i].ventas + precioMaquina(local.ventas[j].componentes)
            }
        }
        }
    }
}


console.log(sucursalDelMes(1,2019))


console.log(" ")
console.log("TERCER PUNTO")

console.log(" ")
console.log("Ejercicio 1")


// function renderPorMes() {
//     var meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//     var mespalabra = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
       
//     for (var i = 0; i < local.ventas.length; i++) {
//             for (var j = 0; j < meses.length; j++) {  
//                 var totalmes=0
//                 if(meses[j] == (local.ventas[i].fecha.getMonth() + 1)) {        
//                     totalmes = ((totalmes) + (ventasMes(meses[j], 2019)));
//                     console.log("En el mes de " + mespalabra[j] + " se facturaron $" + (ventasMes(meses[j], 2019)))
//             }
//             }
//         }   
//         return " "

//         }
        
    
//     console.log(renderPorMes()) 

    function renderPorMes() {
        var meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        var mespalabra = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        for (var i = 0; i < local.ventas.length; i++) {
                for (var j = 0; j < meses.length; j++) {  
                    var totalmes=0
                    if(meses[j] == (local.ventas[i].fecha.getMonth() + 1)) {        
                        totalmes = ((totalmes) + (ventasMes(meses[j], 2019)));
                        console.log("En el mes de " + mespalabra[j] + " se facturaron $" + (ventasMes(meses[j], 2019)))
                }
                }
            }   
            return " "
    
            }
            
        
        console.log(renderPorMes()) 

console.log(" ")
console.log("Ejercicio 2")

function renderPorSucursal() {
       
    for (var i = 0; i < local.sucursales.length; i++) {  
                var totalsucursal=0
                if(local.ventas[i].sucursales == (local.ventas[i].sucursales)) {
                    totalsucursal = ((totalsucursal) + (ventaSucursal(local.sucursales[i])));
                    console.log("En la sucursal " + local.sucursales[i] + " se facturaron $" + (ventaSucursal(local.sucursales[i])))
            }
            
            }
            return " "
        }   
        

console.log(renderPorSucursal())