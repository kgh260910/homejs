document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    var inputEle = document.querySelector('#colorPicker');
    var inputEleValue = inputEle.value;

    var colorTextEle = document.querySelector('#colorText');
    var colorTextEleText = colorTextEle.textContent;

    colorTextEle.textContent = `${colorTextEleText}: ${inputEleValue}`;

    document.addEventListener('input', (e) => {
        
        var colorPickerEle = document.querySelector('#colorPicker');
        if(e.target === colorPickerEle) {

            var changedColorValue = e.target.value;
            colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

            var bodyEle = document.querySelector('body');
            bodyEle.style.backgroundColor = changedColorValue;
        }
    })

});