for (let x = 50; x > 0; x--) {
    // 

}



function runtest() {
// test using search box
var  lowerlimit = document.getElementById('lowerlimit').value;
var  upperlimit = document.getElementById('upperlimit').value;

// start by logging the limits 
    if (lowerlimit > 0 || upperlimit > 0  ){
        console.log(`upperlimit is ${upperlimit} & lowerlimit is ${lowerlimit}`);
    }
    else{
// static test
    let lowerlimit = 600;
    let upperlimit = 800;
    console.log(`please enter an upper limit for auto generation`);        
    }

// reset testzone
    document.getElementById("testzone").innerHTML =""

// log down to 0
    for (let i = upperlimit;  i > lowerlimit ; i--){
        console.log(`run #${upperlimit - i + 1} testing rand= ${i}` );
        document.getElementById("testzone").innerHTML += 
        `<a href='https://classic.wowhead.com/item=7423/' 
        rel='rand=${i}'>Testing ${i}</a> <br>`    
    }
    
  }
  runtest();

  