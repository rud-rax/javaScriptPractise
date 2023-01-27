function checkScope() {
    let i = 'function scope';
    // var i = 'function scope';

    if (true) {
       let i = 'block scope';
    //    var i = 'block scope';

      
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

checkScope()

