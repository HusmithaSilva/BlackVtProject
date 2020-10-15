

//Q1
for(let i=0; i<=100; i++){
    if(i % 3 == 0 ){
        console.log("Fizz");
    }
    if( i % 5 == 0 ){
        console.log("Buzz");
    }
    if(i % 3 ==0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
}


// Q3
let fs = require('fs');
 
fs.readFile('myfile.txt', 'utf8', function(err, contents) {
    if(err){
        throw err;
    }
    console.log(contents);
});


// Q2
function foo(n){

    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }
    
    return foo(n-1) + foo(n-2);
   
}
