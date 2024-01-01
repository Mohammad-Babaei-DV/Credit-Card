let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
 
let header1  = document.getElementById('header1')
let header2  = document.getElementById('header2')
let header3  = document.getElementById('header3')
let header4 = document.getElementById('header4')
let btn =document.getElementById('btn')
let gif = document.getElementById('gif')


inp1.addEventListener('keyup',(e)=>{
    let valuee = e.target.value
     
    if (e.keyCode != 8) {
        
        if (((valuee.length) < 25) ) {
            if (
                ((valuee.search(/[a-z]/))>=0)||
                ((valuee.search(/[ا-ی]/))>=0)||
                ((valuee.search(/[ِِئ]/))>=0)){
                    valuee = valuee.slice(0,valuee.length-1)
                    
                }
                if (((valuee.length) == 4)||
                ((valuee.length) == 11)||
                ((valuee.length) == 18)){
                    valuee+=' - '
                    
                }
                e.target.value=valuee
            
        }else{
            inp2.focus()
        }
    }else{
        if (((valuee.length) == 7)||
            ((valuee.length) == 14)||
            ((valuee.length) == 21)){
             
             e.target.value=valuee.slice(0,(valuee.length)-3)
        }
    }
    
    header1.innerText= valuee
      
})









inp2.addEventListener('input',(e)=>{
    let valuee = e.target.value   
   
        
        
        if ( ((valuee.length) <5)  ) {
               
            if (
                ((valuee.search(/[a-z]/))>=0)||
                ((valuee.search(/[ا-ی]/))>=0)||
                ((valuee.search(/[ِِئ]/))>=0)||
                ((valuee.search(/[ِ ]/))>=0)){

                    valuee = valuee.slice(0,valuee.length-1)
                            
                }

        }else{
            inp3.focus()
        }

        e.target.value=valuee
        header2.innerText= valuee 
        
})




inp3.addEventListener('input',(e)=>{
    let valuee = e.target.value
    header3.innerText= valuee
})





btn.addEventListener('click',(e)=>{
    let x =Math.floor((Math.random() * 10000) + 100);
    e.target.setAttribute('disabled', true )
    gif.innerHTML='<img src="assests/img/ggggggg.gif" alt="">'
    setTimeout(() => {
        header4.innerText=x
        e.target.removeAttribute('disabled', true )
        gif.innerHTML=''
    }, 3000);
    
})

 