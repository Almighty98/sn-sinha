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
};

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
    localStorage.setItem('filecharge', document.getElementById('exampleFormControlInput32').value);
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
    localStorage.setItem('rc', document.getElementById('exampleFormControlInput40').value);
    localStorage.setItem('discount', document.getElementById('exampleFormControlInput41').value);
}
