class Greeter{
    private _name:string="";
    constructor(name: string) {
        this._name=name;
    }

    public toString = () : string => {
        return `Hi! (${this._name}), greets from Hello-World`;
    }

}

let helloWorld = new Greeter("Milco");
console.log(helloWorld);