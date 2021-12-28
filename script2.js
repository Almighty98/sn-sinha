document.getElementById('enquiry').innerText = localStorage.getItem('enquiry');
document.getElementById('fsc').innerText = localStorage.getItem('fsc');
document.getElementById('otf').innerText = localStorage.getItem('otf');
document.getElementById('date').innerText = localStorage.getItem('date');
document.getElementById('chassiss').innerText = localStorage.getItem('chassiss');
document.getElementById('ifirm').innerText = localStorage.getItem('ifirm');
document.getElementById('gst').innerText = localStorage.getItem('gst');
document.getElementById('custname').innerText = localStorage.getItem('custname');
document.getElementById('nominee').innerText = localStorage.getItem('nominee');
document.getElementById('address').innerText = localStorage.getItem('address');
document.getElementById('relation').innerText = localStorage.getItem('relation');
document.getElementById('age').innerText = localStorage.getItem('age');
document.getElementById('vehicle').innerText = localStorage.getItem('vehicle');
document.getElementById('loan').innerText = localStorage.getItem('loan');
document.getElementById('interest').innerText = localStorage.getItem('interest')+'%';
document.getElementById('tenure').innerText = localStorage.getItem('tenure');
document.getElementById('month').innerText = localStorage.getItem('month');
document.getElementById('shroom').innerText = localStorage.getItem('shroom');
document.getElementById('scheme').innerText = localStorage.getItem('scheme');
document.getElementById('filecharge').innerText = localStorage.getItem('filecharge');
document.getElementById('agreement').innerText = localStorage.getItem('agreement');
document.getElementById('processing').innerText = (parseFloat(localStorage.getItem('processing'))/100)*parseFloat(localStorage.getItem('loan'));
document.getElementById('document').innerText = localStorage.getItem('document');
document.getElementById('mls').innerText = localStorage.getItem('mls');
document.getElementById('insurance').innerText = localStorage.getItem('insurance');
document.getElementById('rto').innerText = localStorage.getItem('rto');
document.getElementById('incidental').innerText = localStorage.getItem('incidental');
document.getElementById('rsa').innerText = localStorage.getItem('rsa');
document.getElementById('tp').innerText = localStorage.getItem('tp');
document.getElementById('antirust').innerText = localStorage.getItem('antirust');
document.getElementById('accessories').innerText = localStorage.getItem('accessories');
document.getElementById('fasttag').innerText = localStorage.getItem('fasttag');
document.getElementById('shield').innerText = localStorage.getItem('shield');
document.getElementById('rc').innerText = localStorage.getItem('old_rc');
document.getElementById('driver_rc').innerText = localStorage.getItem('driver_rc');
document.getElementById('discount').innerText = localStorage.getItem('discount');
document.getElementById('branch').innerText += ' '+localStorage.getItem('branch');

document.getElementById('actual').innerText = parseFloat(localStorage.getItem('shroom'))-parseFloat(localStorage.getItem('scheme'));
document.getElementById('vehicle_amt').innerText = document.getElementById('actual').innerText;
document.getElementById('loan_amt').innerText = localStorage.getItem('loan');
document.getElementById('total_interest').innerText = (parseFloat(localStorage.getItem('loan'))*(parseFloat(localStorage.getItem('interest'))/100)*parseFloat(localStorage.getItem('tenure'))).toFixed(2);
document.getElementById('emi').innerText = ((parseFloat(localStorage.getItem('loan'))+parseFloat(document.getElementById('total_interest').innerText))/parseFloat(localStorage.getItem('month'))).toFixed(2);
document.getElementById('margin').innerText = parseFloat(document.getElementById('actual').innerText)-parseFloat(localStorage.getItem('loan'));
document.getElementById('ad_emi').innerText = parseFloat(document.getElementById('emi').innerText).toFixed(2);
document.getElementById('total').innerText += (parseFloat(document.getElementById('margin').innerText)+
                                            parseFloat(document.getElementById('agreement').innerText)+
                                            parseFloat(document.getElementById('processing').innerText)+
                                            parseFloat(document.getElementById('document').innerText)+
                                            parseFloat(document.getElementById('filecharge').innerText)+1500+
                                            parseFloat(document.getElementById('mls').innerText)+
                                            parseFloat(document.getElementById('insurance').innerText)+
                                            parseFloat(document.getElementById('rto').innerText)+
                                            parseFloat(document.getElementById('incidental').innerText)+
                                            parseFloat(document.getElementById('rsa').innerText)+
                                            parseFloat(document.getElementById('tp').innerText)+1000+
                                            parseFloat(document.getElementById('antirust').innerText)+
                                            parseFloat(document.getElementById('accessories').innerText)+
                                            parseFloat(document.getElementById('fasttag').innerText)+
                                            parseFloat(document.getElementById('shield').innerText)+
                                            parseFloat(document.getElementById('ad_emi').innerText)).toFixed(2);
document.getElementById('rs_total').innerText += (parseFloat(document.getElementById('total').innerText)-parseFloat(localStorage.getItem('old_rc'))-parseFloat(localStorage.getItem('driver_rc'))).toFixed(2);
document.getElementById('down_pmt').innerText += (parseFloat(document.getElementById('rs_total').innerText)-parseFloat(document.getElementById('discount').innerText)).toFixed(2);


localStorage.removeItem('enquiry');
localStorage.removeItem('fsc');
localStorage.removeItem('otf');
localStorage.removeItem('date');
localStorage.removeItem('chassiss');
localStorage.removeItem('ifirm');
localStorage.removeItem('gst');
localStorage.removeItem('custname');
localStorage.removeItem('nominee');
localStorage.removeItem('address');
localStorage.removeItem('relation');
localStorage.removeItem('age');
localStorage.removeItem('vehicle');
localStorage.removeItem('loan');
localStorage.removeItem('interest');
localStorage.removeItem('tenure');
localStorage.removeItem('month');
localStorage.removeItem('shroom');
localStorage.removeItem('scheme');
localStorage.removeItem('filecharge');
localStorage.removeItem('agreement');
localStorage.removeItem('processing');
localStorage.removeItem('document');
localStorage.removeItem('mls');
localStorage.removeItem('insurance');
localStorage.removeItem('rto');
localStorage.removeItem('incidental');
localStorage.removeItem('rsa');
localStorage.removeItem('tp');
localStorage.removeItem('antirust');
localStorage.removeItem('accessories');
localStorage.removeItem('fasttag');
localStorage.removeItem('shield');
localStorage.removeItem('rc');
localStorage.removeItem('discount');

$("body").on("click", "#download", function () {
    $(window).scrollTop(0);
    html2canvas($('#container')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("myFile.pdf");
        }
    });
});