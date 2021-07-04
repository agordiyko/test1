//IIFE function

const counterModule = (function() {
    let counter = 0;

    const increaseCounter = function () {
        counter++;
    }

    const getCounter = function() {
        return counter;
    }

    return {
        getCounter: getCounter,
        increaseCounter: increaseCounter
    }  
}())


//Наследование prototype

const user = new Object ({
    name: 'Andy',
    age: 20,
    pro: 'Architect',
    hello: function(){
        console.log('Hello, fellas!');
    }
});

Object.prototype.sayHello = function (){
    console.log('Hello, bro!');
}

user.sayHello();

const den = Object.create(user);

den.hello();

den.name = 'Den'

console.log(den.name);


//Промисы с использованием .catch

const promise = Promise.resolve();

promise.then(() => {throw new Error('Ошибка')})
    .catch(error => console.log(error.message))
    .then(() => console.log('Вызов обработчика'));
