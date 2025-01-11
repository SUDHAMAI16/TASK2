class person{
    constructor(name){
        this.name=name;
    }
    greet(){
    console.log(`Hello, my name is ${this.name}`);
    }
}
class employee extends person{
    constructor(name,position){
        super(name);
        this.position=position;
    }
    describe(){
        console.log(`I work as a ${this.position}`)
    }
}


const emp=new employee('peter','manager');
emp.greet();
emp.describe();
