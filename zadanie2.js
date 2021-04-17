// Mając talice
let liczby = [4, 5, 6, 7, 9]
// uzywajac metody map lub forEach lub filter
// 1- sumę wszytskich liczb
// 2- liczby wieksze od 5
// 3- wszystkie liczby w tablicy powiekszone o 5
// 4- najwieksza liczbe w tablic
// 1
// var sumaLiczb= 0
// liczby.map(n =>{
//     console.log(n)
//     sumaLiczb= sumaLiczb + n
// })
// console.log('suma elementów wynosi=', sumaLiczb)

//2

// liczby.map(n =>{
//     let tabZad2 = liczby.filter( function(r){
//         return r > 5
//     }) 
//     console.log(tabZad2)
// })

// let tabZad2 = liczby.filter( function(r){
//     return r > 5
// }) 

// console.log(tabZad2)

//3
// liczby.map(n =>{
//     // console.log(n)
// let tabZad3 = n +5
// console.log(tabZad3)
// })

//4
var tabZad4 = liczby.reduce(function(acc, curr) {
    acc[0] = curr > acc[0] ? curr : acc[0];
   
    return acc;
}, [liczby[0]]);
console.log(tabZad4); 