class product {
    constructor (name, price) {
    this.name = name;
    this.price = price;
    }
}
class transaction extends product{
    constructor (name, price, total, product) {
    super(name, price)
    this.total = total;
    this.product = product;
    }
}
cabe = new transaction ('cabe', 5000, 5, 'carolina')
sepatu = new transaction ('sepatu', 50000, 2, 'nike')
kursi = new transaction ('kursi', 20000, 2, 'ikea')
console.log(cabe);
// add to cart



