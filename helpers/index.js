export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento

    switch (parseInt(marca)) {
        case 1:
            //Aumento de 30%
            incremento = 1.30;
            break;
        case 2:
            //Aumento de 15%
            incremento = 1.15;
            break;
        case 3:
            //Aumento de 5%
            incremento = 1.5;
            break;
        default:
            break;
    }

    return incremento;
}

export function calcularPlan(plan) {
    return (plan === "1") ? 1.20 : 1.50;
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}