const text = document.getElementById('qr-text');
const size = document.getElementById('size');
const generate = document.getElementById('Generate');
const download = document.getElementById('Download');
const body = document.querySelector('.qr-body');
let qrsize = size.value;

// Adding Event click listeners
generate.addEventListener('click',(e) => {

    e.preventDefault();
    isEmpty();
    
});


size.addEventListener('change',(e)  => {
    qrsize = e.target.value;
    isEmpty();
   
});


download.addEventListener('click',() => {
    let img = document.querySelector('.qr-body img');

    // Check whether image is generated
    if(img !== null){
        let attr = img.getAttribute('src');
        download.setAttribute("href",attr);
    }
    else{
        download.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    }

});

// Check whether the textbox is empty 
function isEmpty(){
    if(text.value.length > 0){
        generateQRCode();
    }
    else{
       alert(" Enter text or URL to Generate QR Code");
    }
   

}

//Function to Generate the QR code 
function generateQRCode(){
    body.innerHTML = "";
    new QRCode(body,{
        text:text.value,
        height:qrsize,
        width:qrsize,
        colorLight:"#fff",
        colorDark:"#000",
    });
}



