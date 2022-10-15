document.addEventListener('submit', function(e){

    e.preventDefault();
    
    let campoA = document.getElementById('campoA');
    let campoB = document.getElementById('campoB');

    let msgB = document.querySelector('.valida');    
    if(campoA.value < campoB.value){        
        msgB.innerHTML = 'O segundo campo é maior que o primeiro'
    }else 
        msgB.innerHTML = 'O segundo campo deve ser maior que o primeiro'
    
})