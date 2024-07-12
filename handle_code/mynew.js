function mynew(Func,...args){
    const obj ={};
    if(Func.prototype){
        Object.setPrototypeOf(obj,Func.prototype);
    }
    const result = Func.apply(obj, args);
    if(typeof result==="function"||(typeof result==="object"&&result!==null)){
        return result;
    }
    return obj;
}
//测试
function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const p1 = mynew(Person, 'Alice');

p1.sayHello(); // Hello, my name is Alice