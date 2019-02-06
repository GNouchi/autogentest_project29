for (let x = 50; x > 0; x--) {
    // 

}



function runtest() {
// test using search box
var  testlimit = document.getElementById('testlimit').value;

// static test
var testlimit = 870
var lowerlimit = 600
// start by logging the limit 
    if (testlimit > 0 ){
        console.log(`testlimit is ${testlimit}`);
    }
    else{
        console.log(`please enter an upper limit for auto generation`);        
    }

// reset testzone
    document.getElementById("testzone").innerHTML =""

// log down to 0
    for (let i = testlimit;  i > lowerlimit ; i--){
        console.log(`run #${testlimit - i + 1} testing rand= ${i}` );
        document.getElementById("testzone").innerHTML += 
        `<a href='https://classic.wowhead.com/item=7423/' 
        rel='rand=${i}'>Testing ${i}</a> <br>`    
    }
    
  }
  runtest();

  