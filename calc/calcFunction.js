function calcFunction(array) {

    for (let i = 0; i < array.length; i++) {

        let operations=array[i];
        switch (operations) {
            case "+":
                let sum=add(array[i-1],array[i+1]);
                array[i+1]=sum +"";
                break;
            case "-":
                let subtract=sub(array[i-1],array[i+1]);
                array[i+1]=subtract +"";
                break;
            case "x":
                let multiply=mul(array[i-1],array[i+1]);
                array[i+1]=multiply +"";
                break;
            case "/":
                let divide=div(array[i-1],array[i+1]);
                array[i+1]=divide +"";
                break;
            default:
                console.log("Default case");
                break;
        }
        
    }
    console.log("array after opern: ", array);
    let val=array[array.length-1]
    // document.querySelector('#display').value=val;
    array=[]  
    array.push(val)
    console.log(array);
    return array;
}
function add(a,b)
{
    console.log(a+b);
    return a+b;
}

function sub(a,b)
{
    
   return a-b;
}
function mul(a,b)
{
   
   return a*b;
}
function div(a,b)
{
    
   return a/b;
}


