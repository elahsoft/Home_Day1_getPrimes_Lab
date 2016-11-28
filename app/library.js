module.exports = {
 getPrimes: function(number){
  var array = new Array();

  var isPrime = false;

  if(typeof(number) == typeof(2)){
    var k = 0;

    for(var i = 2; i <= number; i++){
      for(var j=2; j<=i;j++){
        var ans = i%j;
        if(ans == 0 && j != i){
          isPrime = false;
          break; // that is ignore the extreme end of the loop since at least we have found one factor other than itself and 1
        }
        else{
          isPrime = true;
        }

      }

      //add the number to the array if it's prime
      if(isPrime){
        array[k] = i;
        k = k+1;
      }

    }
    return array;
  }
  else{
    return "Parameter supplied must be an integer!";
  }
  					
  	}				
  									
  	}
  

