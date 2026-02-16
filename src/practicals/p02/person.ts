export class Person {
    static COUNTRY : string = "Thailand"
    firstname? : string ;
    lastname? : string ;
    private setAge? : number ;

    setAge(age = number){
        this.age = age;
    }

    getAge(): number {
        return this.age ;
    }

    getFullName() {
        return (this.firstname + " " + this.lastname);
    }
}
