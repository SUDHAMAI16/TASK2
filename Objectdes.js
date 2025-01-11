class person{
    constructor(name){
        this.name=name; 
    }
    greet(){
        console.log(`hi everybody my name ${this.name}`);
    }
}
class employee extends person{
    constructor(name,position){
        super(name);
        this.position=position;
    }
    describe(){
        console.log(`and I work as ${this.position}`);
    }
}
function showemployeedetails({name,position}){
    console.log(`employee name ,${name}`);
    console.log(`employee position ,${position}`);
}
const emp=new employee('John','Secretery')
showemployeedetails(emp);
