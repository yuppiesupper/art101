for (var index=1;index<=120;index++){
    str = "";
    if (index % 15 == 0){
      console.log("fizzbuzz")
    }
    else if (index % 3 == 0){
      console.log("fizz");
    }
    else if (index % 5 == 0){
      console.log("buzz");
    }
    else{
      console.log(index);
    }
  }
  