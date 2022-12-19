function szinkeveres(szinek) {
    let osszeg = 0;
    if (szinek.length < 2) {
        return 0;
    }
    for (let i = 2; i < szinek.length; i++) {
        osszeg += ismetlesNelkuliKombinacio(szinek.length, i);
    }
    return osszeg + 1;
}

function faktorialis(n) {
    let szorzat = 1;

    for (let i = n; i > 0; i--) {
        szorzat = szorzat * i;
    }
    return szorzat;
}

function ismetlesNelkuliKombinacio(n, k) {
    return faktorialis(n) / (faktorialis(k) * faktorialis(n - k))
}

export default szinkeveres;
