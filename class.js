class Person {      // Estrutura de uma Class
    constructor(name,age){                   //Construtor inicia todoa vez que miinha class e chamada
        console.log(`I an ${name}`)

        this.name = name  //Referenciando quem  esta sendo chamado 
        this.age = age    // Referenciando quem esta sendo chamado
    }
    
    talk(){ 
        console.log(`Hellow ${this.name} how you are congratulations on your ${this.age} years` )  //Metodo dentro da class
    }

}

const newperson = new Person ("Marcelo",32)  //Instanciando a class 

newperson.talk() //Chamando a função da class