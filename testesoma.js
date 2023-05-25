function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
             return total;
               }
   console.log(sum([8,9,190]));

   const assert = require('assert');

const input = [8, 9, 190];
const expectedOutput = 207;

const result = sum(input);

assert.strictEqual(result, expectedOutput);
console.log("Teste 1 passou com sucesso!");

