// var username = prompt("your name please?");
// console.log (username);
// let fellings = confirm("are you OK!");
// console.log(fellings);
// console.log(typeof(true)) // prints boolean
// console.log(typeof(9000)) // prints number
// console.log(typeof("Übermensch")) // prints string
// console.log(typeof(anUndefinedVar)) // prints undefined
// console.log(typeof(null)) // prints object
// var a = 5;
// var b = 7;
// a += b;
// console.log(a); // prints 12
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(false));

// var NewFruits=new Array(); 
// var Fruits = ["Apple","Banana"];
// var Souk = ["Orange","Apple","Ananas","Grape","Kiwi","Banana"];

//     for(let i = 0; i <= Fruits.length - 1;i++)
//     {
//         for(let j=0;j<=Souk.length-1;j++)
//         {
//             if (Fruits[i]==Souk[j])
//              { 
               
//                 NewFruits.push(Fruits[i]);
//              }
                
                
//         }
     
    
//     }

    
// console.table(Fruits);
// console.table(Souk);
// console.table(NewFruits) ;
arr = [1,2,3,4,5,6];
	for (let i=1;i<=arr.length -1;i++){
		var str= arr[0].toString();
		str = str + arr[i].toString(); 
	
    
}
console.log(str);