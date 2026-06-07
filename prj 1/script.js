const btn_1 = document.querySelector('button:nth-child(9)')

let count = 1;
let val = 100
    

btn_1.addEventListener('click',(event)=>{
     const div_el =  document.createElement('div')
    btn_1.insertAdjacentElement("afterbegin",div_el);
   
    div_el.style.backgroundColor='green'
    div_el.style.borderRadius='50%'
    setTimeout(()=>{
        div_el.style.width=`${0}px`;
    div_el.style.height=`${0}px`;
    },2000);
        let current_val =count*val/2;
    const rect = btn_1.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    div_el.style.top= `${clickY}px`
    div_el.style.left=`${clickX}px`
    div_el.style.width=`${current_val}px`;
    div_el.style.height=`${current_val}px`;
    count++;
})


let btn_2 = document.querySelector('button:nth-child(10)')
btn_2.addEventListener('click',()=>{
    setTimeout(()=>{
        btn_2.disabled=true;
        btn_2.textContent="loading...."
    },0)
     setTimeout(()=>{
        btn_2.disabled=false;
        btn_2.textContent="Fin"
    },2000)

})



