// console.log("hello lakhan");


// console.log(a);
// var a=10;
// let b=20;
// console.log(b);
// {
//     var c=10;
//     console.log(c);
//     let d=20;
//     console.log(d);

// }


// console.log(c);
// console.log(d);

// const a="10;"
//     const b;  //error
// a=20;//error

// console.log(a);


 

// const myArr={
//     //500
//     name:"akshay"
// };


// //myArr=500


// myArr.name="lakhan";
// // myArr{      //error
// //     name:"Om";

// // };

// console.log(myArr);
// let myString1="abcd@xyz.com"
// let myString2="Abcd@xyz.com"


// console.log(myString1.toUpperCase()=== myString2.toUpperCase());




// //treu
// for( let i=0;i<myString1.length;i++)
// {
//     console.log(myString1[i]);       //each caracter within strinf
// }

// let myString1="abcdafgdbjcj";
// let output="";



// for(let i=0;i<myString1.length;i++)
// {
//     let count=0;

//     for(let j=0;j<myString1.length;j++)
//     {
//         if (myString1[i]===myString1[j] && i<=j) {
//            count++;
//            if(count>1)
//            {
//             output=output+myString1[i];
//             break;
//            }
    
//     }

//     }
  
// }
// console.log(output);


// let myString1="abcdafgdbjcj";
// let output="";



// for(let i=0;i<myString1.length;i++)
// {
    

//     for(let j=0;j<myString1.length;j++)
//     {
//         if (myString1[i]===myString1[j] && i<=j) {
//           console.log(myString1j);
//     }

//     }
  
// }
// console.log(output);


 
// let myArray=[1,2,3,4,5];
// let myArray1=[1,2,3,4,5];


// let isSame=true;
// for (let i = 0; i < myArray.lmyAngth; i++) {
//     if (myArray[i] !==myArray[i]) {
//         isSame =false;
//         break;
//     }
    
// }
// console.log(myArray===myArray);//false
// console.log(isSame);
// //-----------------True-------------


//---------------------------------------------------------------------------

// let input ="India Is my country";
// let output=""




// function reverseString(value){
//     let returnValue="";
//     for (let i = value.length-1; i >-1 ;i--) {
//         returnValue=returnValue+value[i];

        
//     }
//     return returnValue 

// }
// let word="";
// for (let i = 0; i < input.length; i++) {

//     //console.log(input[index]);
//     if (input[i]== " ") {
//         output=output+reverseString(word)+" ";
//         console.log(word);
//         word=" ";
//         continue;

        
//     } else{
//         word=word+input[i];
//         if (i+1===input.length) {
//             output=output+reverseString(word)
//             console.log(word);
//             word="";
                   
//         }

//     }

    
    
// }
// console.log(output);
//---------------------------------------------------------------------------
                //16-11-2021
//---------------------------------------------------------------------------


//console.log(addNumbers(10,20));//will get 30
//console.log(addNumbers);//will get the functiion defination

// function addnumbers(number1,number2) {
//     return number1+number2;

    
// }

// //function expression
// const addnumbers2=function (number1,number2) {
//     return number1+number2;
// };



// console.log(addnumbers2(10,20));//will get the result:30
// console.log(addnumbers2);//willget the function defination

// //Arrow functions
// const addNumbersArrow=(number1,number2)=>{
//     return number1+number2;
// };

// console.log(addNumbersArrow(10,20));///     :30
// console.log(addNumbersArrow);// get the fun def
//------------------------------------------------------
//bind bindig the object

//------------------------------------------------------\\\
//this
// const myObject={
// //1000
// name :"lakhan",
// getName:function () {
//     return this.name;
    
// },
// };

// const myNerwObject={
//     //200
//     name:"lucky",
// };


// //myNerwObject.getName->1000
// //newGetName->2000

// const newGetName =myObject.getName.bind(myNerwObject);
// console.log(myObject.getName());//lakhan
// console.log(newGetName());//lakhan
//------------------------------------------------------\\\
//------------------------------------------------------\\\
//------------------------------------------------------\\\
//------------------------------------------------------\\\
//------------------------------------------------------\\\
//------------------------------------------------------\\\



//constructor function

// function Person(name,age) {
//     //check if called  withh new keyward
//     if (!new.target) {
//         return new Person(name,age)
        
//     }

//     //this ={} //added internally
//     this.name=name;
//     //this.number=1234  
//     this.age=age;
//     //returnP{name};// return{name:name}not allow\
//     //return1234;//not allow
//     //return[1,2,3,4];/allow

//   //  return this;//added internally


    
// }
// const personObject=new Person("ankur",29);

// const personObject1=Person("ankur",29);//same output as above
// console.log(personObject);
// console.log(personObject1);


//------------------------------------------------------\\\
//Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// console.log(a, b, c, d);
// const myObject = {
//   name: "Ankur",
//   age: 29,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important
// console.log(name, age);


//------------------------------------------------------\\\
//                  17/11/2021
//------------------------------------------------------\\\//
//spread operrator
// const myArray=[1,2,3,4,5];//1000
// const myArrayNew=[];//2000//old way

// for (let index = 0; index < myArray.length; index++) {
//     myArrayNew.push(myArray[index]);
    
// }
// console.log(...myArray);//same as writing console.log(1,2,3,4,5)//new way


// console.log(myArray);
// console.log(myArrayNew);
// myArray.push(6);
// console.log(myArray);
// console.log(myArrayNew);

//------------------------------------------------------\\\//

// //new way
// const myArray=[1,2,3,4,5];//1000
// const myArrayNew=[];//2000//old way
// const myArrayNew=[...myArray];//2000
// console.log(...myArray);
//------------------------------------------------------\\\//
//------------------------------------------------------\\\//
// const myObject={
//     name:"lakhan",
//     age: 29,

// };
// const myNewObject={...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name="lucky";
// console.log(myObject);
// console.log(myNewObject);
// //console.log(...myObject);//not valid
//------------------------------------------------------\\\//
//------------------------------------------------------\\\//
//REST parameter
// function addNumbers(...args) {
//     //const args=[10,20,30,40];// internally(array)
//     let result=0;
//     for (let index = 0; index < args.length; index++) {
//         result +=args[index];
        
//     }
//     return result;
    
// }
// console.log(addNumbers(10,20,30,40));
