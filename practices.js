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

