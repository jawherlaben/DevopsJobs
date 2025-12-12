export class Personne{
    age:number;
    cin:number;
    firstname : string;
    id:number;
    job:string;
    name:string;
    path:string;
    constructor(name: string,firstname: string,job: string,path: string,id: number,age: number,cin: number)
    {
        this.age=age;
        this.cin=cin;
        this.id=id;
        this.name=name;
        this.firstname=firstname;
        this.job=job;
        this.path=path;
    }
}