// Agos, en general el trabajo esta muy bien y tenes unas muy merecidas felicitaciones. 

// Como observacion general y para ir pensando en mejorar tu codigo a partir de ahora:
// 1. Estaria bueno ir aplicando mas prolijidad a tu codigo: prestarle atencion siempre al tabulado
// 2. Ir pensando en nombres de variables mas descriptivos, que pueda entender cualquiera apenas ve tu codigo
// 3. Si bien no esta mal usar parentesis para separar los elementos de una operacion matematica, 
// lo cierto es que no es estandar usarlos cuando no son necesarios (y puede confundir a quien lo lee rapidamente). 
// Por ejemplo cuando escribis " precio1 = ((local.precios[i].precio) + precio1) "
// Es mas comun escribirlo asi: "precio1 = local.precios[i].precio + precio1 "
// Entiendo que por ahora te resulte mas comodo ir separandolos asi, pero seria buena practica que 
// de ahora en mas trates de no hacerlo. 

// Deje salpicados a lo largo de tu codigo algunos comentarios o maneras alternativas de resolver las funciones
// Cualquier cosa escribime. 

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
            if (componentes[j] == local.precios[i].componente) {
                precio1 = ((local.precios[i].precio) + precio1) 
                // Tambien, para abreviar, podriamos decir 
                // precio1 += local.precios[i].precio
            }
        }
    }
    return precio1
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log(precioMaquina(["Monitor ASC 543", "RAM Quinston"]));
console.log(precioMaquina(["RAM Quinston Fury", "Motherboard MZI"]));

// Muy bien! 

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

// No esta mal esta solucion, pero estas forzando un poco la consigna. 
// La idea es que el componente reciba un string, y tu codigo no funciona
// a menos que le pasemos cada componente como si fuese el unico elemento 
// dentro de un array. 
// Una manera de resolverlo sin tener que pasar por ese paso es usando IndexOf
// 
// function cantidadVentas(componente) {
//   var cantidadvendida = 0;
//   for (var i = 0; i < local.ventas.length; i++) {
//     if (local.ventas[i].componentes.indexOf(componente) >= 0) {
//       cantidadvendida++;
//     }
//   }
//   return cantidadvendida;
// }


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
function vendedoraDelMes(mes, anio) {
    var arraynuevov = []
    for (var i = 0; i < local.vendedoras.length; i++) {
        var arrayvend = // esto es un detalle, pero el nombre de este objeto es confuso. 
                        // en general queremos que sean nombres lo mas descriptivos posibles.
                        // Si yo leo "arrayvend" pienso que es un array de vendedoras, 
                        // no un objeto con cada vendedora. 
                        // (un desarrollador muy famoso, Phil Karlton, dijo que la parte mas
                        // dificil de la computacion era ponerle nombre a las cosas, y tenia razon!)
            { vendedora: local.vendedoras[i], ventas: 0 }
        arraynuevov.push(arrayvend)
    }
    for (var j = 0; j < arraynuevov.length; j++) {
        for (var k = 0; k < local.ventas.length; k++) {
            if (arraynuevov[j].vendedora == local.ventas[k].nombreVendedora) {
                arraynuevov[j].ventas = ((arraynuevov[j].ventas) + precioMaquina(local.ventas[k].componentes));
            }
        }
    }
    var ganadora = ""
    var valormax = 0
    for (var n = 0; n < arraynuevov.length; n++) {
        if (valormax < arraynuevov[n].ventas) {
            valormax = arraynuevov[n].ventas;
            ganadora = arraynuevov[n].vendedora
        }
    }
    return ganadora
}

// Muy bien!

console.log(vendedoraDelMes(1, 2019))

 
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

// Excelente

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

// Excelente

console.log("Grace vendió en total: " + ventasVendedora("Grace"));
console.log("Ada vendió en total: " + ventasVendedora("Ada"));

console.log(" ")
console.log("Funcion 6")

function componenteMasVendido() {
    var arrayporcomponente = []
    for (var i = 0; i < local.precios.length; i++) {
        var paraarraycomp =
            { componente: local.precios[i].componente, ventas: 0 }
            arrayporcomponente.push(paraarraycomp);
}
for (j = 0; j < arrayporcomponente.length; j++) {
    arrayporcomponente[j].ventas = cantidadVentas([arrayporcomponente[j].componente]);
}
valormax = 0
masvendido = ""
for (k = 0; k < arrayporcomponente.length; k++) {
    if (valormax < arrayporcomponente[k].ventas) {
        valormax = arrayporcomponente[k].ventas;
        masvendido = arrayporcomponente[k].componente
    }
    
}
return masvendido
}


// Prestale atencion en esta funcion al tabulado
// Es un detalle, pero ayuda muchisimo a la legibilidad de tu codigo
// (En Visual Studio, clic derecho, "format document" te corrige el tabulado automaticamente)

// Una manera alternativa de resolverlo que reduce mucho el codigo seria
// usando la misma logica con la que encontramos la variable "valormax" en vendedora del mes: 

// function componenteMasVendido () {
//   var componente = local.precios[0].componente;
//   for (var i = 0; i < local.precios.length; i++) {
//     if (cantidadVentasComponente(local.precios[i].componente) > cantidadVentasComponente(componente)) {
//       componente = precios[i].componente;
//     }
//   }
//   return componente;
// }


console.log(componenteMasVendido())

console.log(" ")
console.log("Funcion 7")




function huboVentas(mes, anio) {
    var ventassino
    var mesesconvta = []
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


// El segundo for parece innecesario: el codigo funciona igual sin el. 
// De esta manera:

// function huboVentas(mes, anio) {
//     var ventassino
//     var mesesconvta = []
//     for (var i = 0; i < local.ventas.length; i++) {
//         (mesesconvta.push(local.ventas[i].fecha.getMonth() + 1));
//         if (mesesconvta.includes(mes)) {
//             ventassino = "Si"
//         } else {
//             ventassino = "No"
//         }
//     }
//     return ventassino
// }



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

// se podia agregar al objeto directamente como lo hiciste, 
// o tambien con un comando en este punto, asi:
// local.ventas.sucursales = ["Centro", "Caballito"]
// Como los objetos son dinamicos, podemos agregarles propiedades despues de enunciarlos

console.log(" ")
console.log("Ejercicio 3")

function agregarInfo(anio, mes, dia, vendedora, componentes, sucursal) {
    local.ventas.push({ fecha: new Date(anio, mes, dia), nombreVendedora: vendedora, componentes: componentes, sucursal: sucursal })
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

// excelente, me encanta que lo hayas hecho con una funcion. 

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

// Bien

local.ventas
local[variable]
var variable = "componentes"

// Esto es un detalle, pero no esta bueno dejar codigo colgado como el de arriba
// A veces no hace nada, como en este caso
// Pero en otras ocasiones puede arruinarnos los resultados

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

// Bien! Otra manera, para no pasar dos parametros,  es asi:
// function ventasTotal(dato) {
//     var total = 0;
//     for (var i = 0; i < local.ventas.length; i++) {
//         if (local.ventas[i].sucursal === dato || local.ventas[i].nombreVendedora === dato) {
//             total += precioMaquina(local.ventas[i].componentes);
//         }
//     }
//     return total;
// }
// y a la hora de llamar a la funcion, lo hacemos asi:
// console.log(ventasTotal("Grace"));
// console.log(ventasTotal("Caballito));

console.log(ventasTotal("nombreVendedora", "Grace"));
console.log(ventasTotal("nombreVendedora", "Ada"));
console.log(ventasTotal("sucursal", "Centro"));
console.log(ventasTotal("sucursal", "Caballito"))

console.log(" ")
console.log("Funcion 6")


function sucursalDelMes(mes, anio) {
    var arraynuevo = []
    for (var i = 0; i < local.sucursales.length; i++) {
        var arraysuc =
            { sucursal: local.sucursales[i], ventas: 0 }
        arraynuevo.push(arraysuc)
    }
    for (var j = 0; j < arraynuevo.length; j++) {
        for (var k = 0; k < local.ventas.length; k++) {
            if (arraynuevo[j].sucursal == local.ventas[k].sucursal) {
                arraynuevo[j].ventas = ((arraynuevo[j].ventas) + precioMaquina(local.ventas[k].componentes));
            }
        }
    }
    var ganador = ""
    var valormax = 0
    for (var n = 0; n < arraynuevo.length; n++) {
        if (valormax < arraynuevo[n].ventas) {
            valormax = arraynuevo[n].ventas;
            ganador = arraynuevo[n].sucursal
        }
    }
    return ganador
}

// Bien 
console.log(sucursalDelMes(1, 2019))


console.log(" ")
console.log("TERCER PUNTO")

console.log(" ")
console.log("Ejercicio 1")


function renderPorMes() {
    var meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var mespalabra = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (var i = 0; i < local.ventas.length; i++) {
        for (var j = 0; j < meses.length; j++) {
            var totalmes = 0
            if (meses[j] == (local.ventas[i].fecha.getMonth() + 1)) {
                totalmes = ((totalmes) + (ventasMes(meses[j], 2019)));
            }

        }
        if ((ventasMes(meses[i], 2019)) > 0) {
            console.log("Total de", mespalabra[i], "2019: ", (ventasMes(meses[i], 2019)))

        }
    }

    return " "

}
// bien!
console.log(renderPorMes())


console.log(" ")
console.log("Ejercicio 2")

function renderPorSucursal() {

    for (var i = 0; i < local.sucursales.length; i++) {
        var totalsucursal = 0
        if (local.ventas[i].sucursales == (local.ventas[i].sucursales)) {
            totalsucursal = ((totalsucursal) + (ventaSucursal(local.sucursales[i])));
            console.log("Total de " + local.sucursales[i] + ": " + (ventaSucursal(local.sucursales[i])))
        }

    }
    return " "
}

console.log(renderPorSucursal());

console.log(" ")
console.log("Ejercicio 3")

function render() {
    var meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var mespalabra = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var arraymeses = []
    for (var n = 0; n < meses.length; n++) {
        var paraarray =
            { mes: meses[n], ventas: 0 }
            arraymeses.push(paraarray)
    }
    for (var i = 0; i < local.ventas.length; i++) {
        
        for (var j = 0; j < arraymeses.length; j++) {
           
                if (arraymeses[j].mes == local.ventas[i].fecha.getMonth() + 1) {
                    arraymeses[j].ventas = ventasMes(local.ventas[i].fecha.getMonth() + 1, 2019);
            }
            }
            }
            console.log("Ventas por mes:")
            for (var k = 0; k < meses.length; k++)
            if (arraymeses[k].ventas > 0) {
                console.log("Total mes de ", mespalabra[k], " : ", arraymeses[k].ventas)
            }
    var arraylocales = []
    for (var n = 0; n < local.sucursales.length; n++) {
        var paraarray2 =
            { sucursal: local.sucursales[n], ventas: 0 }
            arraylocales.push(paraarray2);
    }
    for (var i = 0; i < local.ventas.length; i++) {
        
        for (var j = 0; j < arraylocales.length; j++) {
           
                if (arraylocales[j].sucursal == local.ventas[i].sucursal) {
                    arraylocales[j].ventas = ventaSucursal(arraylocales[j].sucursal);
            }
            }
            }
            console.log("Ventas por sucursal:")
            for (var k = 0; k < local.sucursales.length; k++)
            if (arraylocales[k].ventas > 0) {
                console.log("Total mes de ", arraylocales[k].sucursal, " : ", arraylocales[k].ventas)
            }
            console.log("Producto estrella:", componenteMasVendido());
            console.log("Vendedora que más ingresos generó: " , vendedoraDelMes())
return " "
}
        
console.log(render())

// Excelente trabajo!
