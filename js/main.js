// const f = [1,2,3,4,5,6,7,8]
// let d = Array.from('hello for all' , char => char.toUpperCase())
// console.log(d)
// f.forEach(item => {
// 	console.log(item)
// })
let str = 'Hello Morld';
let arr = Array.from(str);
let indexOfM =  arr.indexOf('M');
arr.fill('W', indexOfM , indexOfM+1);
console.log(arr)

