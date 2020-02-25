/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function() {
        this.a= +prompt('Enter a:', '');
        this.b= +prompt('Enter b:', ''); 
    };
    this.sum = () => this.a + this.b;
    this.mul = () => this.a * this.b;
}

let calculator= new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());