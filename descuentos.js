const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {        
    const price = Number(inputPrice.value);
    const discunt = Number(inputDiscount.value);   
    
    if(!price || !discunt){
        pResult.innerText = 'CHANFLES tienes que llenar el formulario :)';
        return;
    } 

    if (discunt > 100) {
        pResult.innerText = '¿Apoco vas a darle dinero al CLIENTE?';
        return;
    }

    const newPrice = price * (1 - discunt * 0.01);
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}