function mynew(Func,...args){
    const obj ={};//1.新建一个对象
    if(Func.prototype){
        Object.setPrototypeOf(obj,Func.prototype);//2.将新建对象的原型设置为Func.prototype
    }
    const result = Func.apply(obj, args);//3.修改this指向，指向obj
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