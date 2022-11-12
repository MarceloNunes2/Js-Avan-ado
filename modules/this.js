/* 
    this

    this em inglês significa => este,esta,isto...]

    No JS, this faz referência:
    
    Nodejs => module.export
    web => window

    Escopo:

    => Global --> quando começamos a escreber nossa aplicação No contexto global, o this faz refêrencia ao objeto global 
    que é o objeto window no navegador de internet ou ao objeto global node js
    
    => Local --> Por exemplo, dentro de uma função
*/


// console.log(this === module.exports)

const person = 
    {name:"Marcelo",age:32, 
    city:"São Paulo",
    talk:function(){
        console.log(this.age)
    }
 }

 function myFunction(){
    this.console.log("Agora sou global")
 }

