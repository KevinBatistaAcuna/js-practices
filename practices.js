//ARRAY CON LETRAS CONSECUTIVAS (K, KE, KEV, KEVI, KEVIN)//

function progressiveOutput(input) {
    var result = [];
    var j;
    var temporalResult;

    for (var i = 0; i < input.length; i++){
        temporalResult = '';

        j = 0;
        while(j < i) {
    		temporalResult += input[j]);
            j++;
    	}

    	temporalResult += input[i];

        result.push(temporalResult);
  	}

  	return result;
}

////////////////////////////////////////////////////////////////////////

function progressiveOutput (input) {
  return input.split('').map(function (letter, index, original) {
    return original.slice(0, index + 1).join('');
  });
}



function expect (test, valid) {if (!test.length || test.join() !== valid) throw `Expected ${valid} but instead got ${test}`}
expect(progressiveOutput('Diego'), 'D,Di,Die,Dieg,Diego');
expect(progressiveOutput('Charlie isn\'t here'), 'C,Ch,Cha,Char,Charl,Charli,Charlie,Charlie ,Charlie i,Charlie is,Charlie isn,Charlie isn\',Charlie isn\'t,Charlie isn\'t ,Charlie isn\'t h,Charlie isn\'t he,Charlie isn\'t her,Charlie isn\'t here');   


//FORMATEAR NUMEROS CON COMA//


function currency(input){
    var string = input.toString(), 
        index = string.indexOf(',');
    
    return string.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return index<0 || i<index ? ($0+',') : $0;
    });
}

////////////////////////////////////////////////////////////////////////

function currency(input){
    var array = input.toString().split('').reverse();
    var x = [];
    var temporalResult = '';
    var result='';
        
    for (var i = 0; i<=array.length; i+=3) {
        temporalResult += "," + array.slice(i,i+3).join('');

        x = temporalResult.split('').reverse();

        if ( x[0] === ',' ) {
            x.shift();
        }
        x.pop();
        
        result = x.join('');
    }
    return result;
}



//CONSEGUIR EL NUMERO CON EL SEGUNDO VALOR MAS ALTO SIN .SORT()//

function secondHighest(arr) {      
    var x ='';
    var y = arr;
    var result = '';

    for (var i=0; i < y.length; i++){
        if(i==0) {
           x=y[i];
        }
        if (y[i]>x){
            x=y[i];
        }
    }
    y.splice(y.indexOf(x), 1);
    for (var i=0; i < y.length; i++){
        if(i==0) {
           x=y[i];
        }
        if (y[i]>x){
            x=y[i];
        }
    }
    return x;
}


/////////////////////////////////////////////////////////////////

function secondHighest(arr){
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
}

/////////////////////////////////////////////////////////////////

function secondHighest(arr){
    array = [0, 0];

    for (i in arr){
        if(i==0) {
           array[0]=arr[i];
        }
        if (arr[i] > array[0]){
            if (arr[i] > array[1]){
                array[0] = array[1];
                array[1] = arr[i];
            }
            else{
            array[0] = i;
            }
        }
    }
    return array[0];
}

// Construir un numero random, si este numero es divisible entre 3 solamente devuelve Fizz, si es divisible entre 5 solamente 
// devuelve Buzz, si es divisible entre 3 y 5 devuelve FizzBuzz, si no es divisible por 3 ni 5 devuelve el numero random.

var randomNumber = Math.round(Math.random()*5);

if(randomNumber%3 === 0 && randomNumber != 0){
    if(randomNumber%5 === 0){
        console.log("FizzBuzz");
    }
    else {
        console.log("Fizz");
    }
}
else if(randomNumber%5 === 0 && randomNumber != 0){
    console.log("Buzz");
}
else {
    console.log(randomNumber);
}

// Crear numero del 1 al 100 en el que cada numero se evalue, si es divisible por 3 devuelve fizz, si es divisible por 5
// devuelve buzz, si es divisible por 3 y 5 devuelve fizzbuzz y si no es divisible por ninguno devuelve el numero

for(var i=1;i<=100;i++){
    if(i%3 === 0 && i != 0){
        if(i%5 === 0){
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else if(i%5 === 0 && i != 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


var friends = ["Ingrid","Diego","Maria","Luna","Lucas"];

function greet(){
    for(var i=0;i<friends.length;i++){
        console.log("Hi " + friends[i]);
    }
}

greet();


// Objects Methods and Constructors

var mark = {
    name: "Mark",
    tshirtColor: "blue"
}

var lisa = {
    name: "Lisa",
    tshirtColor: "red"
}

function Friend(name, tshirtColor){
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var deny = new Friend("Deny", "green");

console.log(deny.name)

deny.name = "Denny Robson";

console.log(deny.name);

//////////////////////////////////////////////////////////

function animal (name, sound){
    this.name = name;
    this.sound = sound;
}

var dog = new animal("dog", "wouf");
var cat = new animal("cat", "miau");
var bee = new animal("bee", "tzzzzzzzzz");

console.log("The " + dog.name + " sounds like " + dog.sound);
console.log("The " + cat.name + " sounds like " + cat.sound);
console.log("The " + bee.name + " sounds like " + bee.sound);

