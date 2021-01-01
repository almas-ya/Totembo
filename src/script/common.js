//=require script.js
class Human {
    constructor(obj) {
        this.name = obj.name;
        this.gender = obj.gen;
    }
}
const x = new Human({
    name: "Вася",
    gen: "m"
})