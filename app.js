function sumTo(n) {
 let res = n == 1? n: n + sumTo(n-1);
 return res;
}
let averegeSum =sumTo(4);