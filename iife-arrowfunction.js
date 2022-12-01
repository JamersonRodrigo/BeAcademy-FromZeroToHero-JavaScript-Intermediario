/* imediately invoked function expression ou IIFE*/
/*
 (
    function helloWord(){
        alert ('Hello, world!');
    }
 )()
 ( function (message)){
    alert (message);
 }('Hello, world!')*/


 /* Arrow functions */

 /* function sum (a){
    return a + 10;
 };*/

 // const sum = a => a + 100;

 // console.log(sum(3))

 // exemplo com mapa ()

 const materials = [
    'Hidrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

 /*const newArray = material.map(
   function showLegnth(materials){
    return materials.length
   }
);*/

const newArray = materials.map(material => material.length)
console.log(newArray)