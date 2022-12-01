//setTimeout(() => console.log('Minha Resposta'),5000)

/* Promisses */

/*function show(){
    setTimeout(()=>{
        console.log('Oi!')
    }, 2000);
    console.log('Até logo!')
}                                                                                          
//show()
const minhaPromise = new Promise((resolv, reject) => {
    let n = 11
    if(n > 10){
        resolv()
    }else{
        reject()
    }
})*/

/*minhaPromise
.then(result => console.log('Resolveu')).catch(err => console.log('errou')).finally(() => console.log('finally'))*/

import fetch from 'node-fetch';

//fetch()
/*const firstUser = (userId) => {
    let response =  fetch(`https://jsonplaceholder.typecode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
firstUser(2)*/


/*const cep = 01001000;
fetch(` https://viacep.com.br/ws/${cep}/json/`)
.then(r => r.json())
.then (cep =>{
    console.log(`O bairro é ${cep.bairro}e o logradouro é ${cep.logradouro}`)
});*/


//async/await

/*const firstUser = async(userId) => {
    let response = await fetch(`https://jsonplaceholder.typecode.com/todos/${userId}`)
    let resultJSON = await response.json()
    let title = await resultJSON.title  
    console.log(title)    
}
firstUser(1)*/


/* try/catch*/

//https://jsonplaceholder.typecode.com/todos/1

async function user(){
    try{
        let response = await fetch(`https://jsonplaceholder.typecode.com/todos/1`);
        let data = await response.json()
        console.log(data.title)
    } catch (error){
        console.log('Error----->', error)
        throw new Error('Deu algum erro na requisição')
    } finally{
        console.log('Acabou')
    }
}
user()