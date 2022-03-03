

let display= document.getElementById('display');

let btns= Array.from(document.getElementsByClassName('button'));

btns.map( button => {
   
    button.addEventListener('click', (ch)=> {
       
        // console.log(ch.target.innerText);


        switch(ch.target.innerText)
        {
            

            case 'C':
                display.innerText='';
                // console.log(ch.target.innerText);
                break;
            case 'B':
                display.innerText=display.innerText.slice(0,-1);
                // console.log(ch.target.innerText);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    }
                catch {
                    display.innerText ="Something Wrong";
                    }
                break;
            default:
                 display.innerText += ch.target.innerText;
        }

    });
});