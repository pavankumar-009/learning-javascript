//console.log("hello");
//console.log(-2);
//var n=10;
//console.log(n);
//console.log(typeof n);
// var n1=890;
// var n2=780;
// if(n1>n2){
//     console.log(1)
// }
// else{
//     console.log(0)
// }
// if(10 == '10')//checks content only
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// if(10 === '10') //checks value and content
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// console.log(2*3);//mul
// console.log(2**3)//exponent

// var r=30
// var b=true;
// for(var i=2;i<=r;i++)
// {
//     b=true;
//     for(var j=2;j<=i/2;j++)
//     {
//         if(i%j==0)
//         {
//             b=false;
//             break;
//         }
//     }
//     if(b) console.log(i);
// }
// var a=10;
// var a=20;
// console.log(a);

// const c=30;
// console.log(c);

// let d=90;
//  d=2;
// console.log(d**3)

// let userData=[10,"pavan",false,9,null,'bye']
// //console.log(userData);
// for(let i=0;i<userData.length;i++)
// {
//     //console.log(userData[i])
//     console.log(typeof userData[i])
// }
// var ar=[12,"pavan",false,89]
// ar[0]=90;
// console.log(ar)


// const ar1=[12,"mahesh",80,true]
// ar1[1]="sai";
// console.log(ar1);
//let ar2=["pavan","mahesh","mahendra","santosh"]
//console.log(ar2)
//ar2.push(10)//add element at last
//ar2.unshift(237)//add element at first
//console.log(ar2)
//ar2.pop()//rempves last
//ar2.shift()//removes first element
//console.log(ar2)


// const obj = {
//     id:1,
//     name: "guest"
// }
// console.log(obj.loc)
// obj.loc ="hyd"//to define an another variable in the object

// obj.array=[1,"pavan",true]
// console.log(obj)

// const obj={
//     id: 2 ,
//     name: "pavan",
//     myData:[2,"pavan",true]
// }
// const user=[
//     {
//         id : 1,
//         name: "pavan",
//         city: "hyd"     
//     },
//     {
//         id :2,
//         name: "kaushik",
//         city: "krn"
//     }
// ]
// console.log(user[0])
// console.log(user[0].name)

// function MyFun(){
//     console.log(-1)
//     return -2
// }
//MyFun()
//console.log(MyFun())

// function add(n1,n2){
//     return n1+n2
// }

// //console.log(add(2,3))

// const myFun =function (n1,n2){//annonymus function
//     return n1+n2
// }
// //console.log(myFun(8,9))
// function sub(n1,n2){
//      return n1-n2
// }
// function mul(n1,n2){
//     return n1*n2
// }
// function div(n1,n2)
// {
//     return n1/n2
// }

// function doMath(n1,n2,key){
//     console.log(`numbers are ${n1} and ${n2}`)
//     switch (key) {
//         case 1:
//             console.log("Addition of"+n1+"&"+n2+" is "+add(n1,n2))
//             break;
//         case 2:
//             console.log("subration of "+n1+" & "+n2+" is "+sub(n1,n2))
//             break;
//         case 3:
//             console.log("multiplication of "+n1+" & "+n2+" is "+mul(n1,n2))
//             break;
//         case 4:
//             console.log("division of"+n1+" & "+n2+" is "+div(n1,n2))
//             break;
//         default:
//             break;
//     }
// }
function doMath(n1,n2,key){
    switch (key) {
        case 1:
            console.log(`addition of two numbers ${n1} and ${n2} is ${n1+n2}`)
            break;
        case 2:
            console.log(`subtraction of two numbers  ${n1} and ${n2} is ${n1-n2}`);
            break;
        case 3:
            console.log(`multiplication of two numbers  ${n1} and ${n2} is ${n1*n2}`);
            break;
        case 4:
            console.log(`division of two numbers  ${n1} and ${n2} is ${n1/n2}`);
            break;
    
        default:
            break;
    }
}
doMath(20,2,4)



