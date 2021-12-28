let show_hide = document.getElementsByName('exampleRadios');
let fileCharge = document.getElementsByClassName('fileCharge')[0];
let ac = document.getElementsByClassName('ac');

show_hide[0].onclick = function(){
    fileCharge.classList.remove('d-none');
    for(let i=0; i<ac.length; i++){
        if(!ac[i].classList.contains('d-none')){
            ac[i].classList.add('d-none');
        }
    }
};

show_hide[1].onclick = function(){
    if(!fileCharge.classList.contains('d-none')){
        fileCharge.classList.add('d-none');
    }
    for(let i=0; i<ac.length; i++){
        ac[i].classList.remove('d-none');
    }
    document.getElementById('exampleFormControlInput32').value = 0;
};

let rc_option = document.getElementById('rc_option');
let old_rc = document.getElementById('old_rc');
let driver_rc = document.getElementById('driver_rc');
rc_option.oninput = function(){
    if(rc_option.value == 'old_rc'){
        old_rc.classList.remove('d-none');
        if(!driver_rc.classList.contains('d-none')){
            driver_rc.classList.add('d-none');
        }
        document.getElementById('exampleFormControlInput45').value = 0;
    }else{
        driver_rc.classList.remove('d-none');
        if(!old_rc.classList.contains('d-none')){
            old_rc.classList.add('d-none');
        }
        document.getElementById('exampleFormControlInput40').value = 0;
    }
}

let discount = document.getElementById('exampleFormControlInput41');
discount.onfocus = function(){
    let total = (parseFloat(document.getElementById('exampleFormControlInput30').value)-
                parseFloat(document.getElementById('exampleFormControlInput31').value)-
                parseFloat(document.getElementById('exampleFormControlInput25').value)+
                parseFloat(document.getElementsByName('agreement')[0].value)+
                parseFloat(parseFloat(document.getElementsByName('processing')[0].value)*parseFloat(document.getElementById('exampleFormControlInput25').value)/100)+
                parseFloat(document.getElementsByName('document')[0].value)+
                parseFloat(document.getElementById('exampleFormControlInput32').value)+
                parseFloat(1500)+
                parseFloat(document.getElementById('exampleFormControlInput35').value)+
                parseFloat(document.getElementById('exampleFormControlInput36').value)+
                parseFloat(document.getElementById('exampleFormControlInput37').value)+
                parseFloat(document.getElementsByName('incidental')[0].value)+
                parseFloat(document.getElementsByName('rsa')[0].value)+
                parseFloat(document.getElementsByName('tp')[0].value)+
                parseFloat(1000)+
                parseFloat(document.getElementsByName('antirust')[0].value)+
                parseFloat(document.getElementById('exampleFormControlInput38').value)+
                parseFloat(document.getElementsByName('fasttag')[0].value)+
                parseFloat(document.getElementById('exampleFormControlInput39').value)+
                parseFloat(((parseFloat(document.getElementById('exampleFormControlInput25').value)*parseFloat(document.getElementById('exampleFormControlInput13').value)/100)*parseFloat(document.getElementById('exampleFormControlInput14').value)+parseFloat(document.getElementById('exampleFormControlInput25').value))/parseFloat(document.getElementById('exampleFormControlInput15').value))-
                parseFloat(document.getElementById('exampleFormControlInput40').value)-
                parseFloat(document.getElementById('exampleFormControlInput45').value)).toFixed(2);
    let text = `Total Amount is ₹ ${total}`;
    document.querySelector('.text').innerHTML = `<strong>${text}</strong>`;
}


document.getElementById('main').onclick = function(){
    localStorage.setItem('enquiry', document.getElementById('exampleFormControlInput1').value);
    localStorage.setItem('fsc', document.getElementById('exampleFormControlInput4').value);
    localStorage.setItem('otf', document.getElementById('exampleFormControlInput3').value);
    localStorage.setItem('date', document.getElementById('exampleFormControlInput5').value);
    localStorage.setItem('chassiss', document.getElementById('exampleFormControlInput2').value);
    localStorage.setItem('ifirm', document.getElementById('exampleFormControlInput6').value);
    localStorage.setItem('gst', document.getElementById('exampleFormControlInput7').value);
    localStorage.setItem('custname', document.getElementById('exampleFormControlInput8').value);
    localStorage.setItem('nominee', document.getElementById('exampleFormControlInput9').value);
    localStorage.setItem('address', document.getElementById('exampleFormControlInput10').value);
    localStorage.setItem('relation', document.getElementById('exampleFormControlInput11').value);
    localStorage.setItem('age', document.getElementById('exampleFormControlInput12').value);
    localStorage.setItem('vehicle', document.getElementsByName('vehicle')[0].value);
    localStorage.setItem('loan', document.getElementById('exampleFormControlInput25').value);
    localStorage.setItem('interest', document.getElementById('exampleFormControlInput13').value);
    localStorage.setItem('tenure', document.getElementById('exampleFormControlInput14').value);
    localStorage.setItem('month', document.getElementById('exampleFormControlInput15').value);
    localStorage.setItem('shroom', document.getElementById('exampleFormControlInput30').value);
    localStorage.setItem('scheme', document.getElementById('exampleFormControlInput31').value);
    if(document.getElementById('exampleFormControlInput32').value){
        localStorage.setItem('filecharge', document.getElementById('exampleFormControlInput32').value);
    }else{
        localStorage.setItem('filecharge', 0);
    }
    localStorage.setItem('agreement', document.getElementsByName('agreement')[0].value);
    localStorage.setItem('processing', document.getElementsByName('processing')[0].value);
    localStorage.setItem('document', document.getElementsByName('document')[0].value);
    localStorage.setItem('mls', document.getElementById('exampleFormControlInput35').value);
    localStorage.setItem('insurance', document.getElementById('exampleFormControlInput36').value);
    localStorage.setItem('rto', document.getElementById('exampleFormControlInput37').value);
    localStorage.setItem('incidental', document.getElementsByName('incidental')[0].value);
    localStorage.setItem('rsa', document.getElementsByName('rsa')[0].value);
    localStorage.setItem('accessories', document.getElementById('exampleFormControlInput38').value);
    localStorage.setItem('tp', document.getElementsByName('tp')[0].value);
    localStorage.setItem('antirust', document.getElementsByName('antirust')[0].value);
    localStorage.setItem('fasttag', document.getElementsByName('fasttag')[0].value);
    localStorage.setItem('shield', document.getElementById('exampleFormControlInput39').value);
    localStorage.setItem('old_rc', document.getElementById('exampleFormControlInput40').value);
    localStorage.setItem('driver_rc', document.getElementById('exampleFormControlInput45').value);
    localStorage.setItem('discount', document.getElementById('exampleFormControlInput41').value);
    localStorage.setItem('branch', document.getElementsByName('branch')[0].value);
}

