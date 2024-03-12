const numeros = [3, 1, 1, 10, 5, 7, 2];
console.log(numeros);

let sumar = 0; 
console.log(sumar); 

for(let i =0; i < numeros.length; i++){
    sumar = sumar + numeros[i]; 

}
console.log(sumar); 

let menor = numeros[0];

for(let i =0; i< numeros.length; i++){
    if(numeros[i]<menor){
        menor=numeros[i];
    }
}
console.log(menor);

let mayor = numeros[0];

for(let i =0; i< numeros.length; i++){
    if(numeros[i]>mayor){
        mayor=numeros[i];
    }
}
console.log(mayor);


const texto =("La suma total es " + sumar + "el número menor es " + menor + "y el número mayor es " + mayor )
console.log(texto)

const parrafo = document.querySelector ("#parrafo"); 
console.log(parrafo);
parrafo.innerHTML = texto;
parrafo.classList.add("parrafo--verde"); 
