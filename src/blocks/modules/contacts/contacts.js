const materialInput = document.querySelectorAll('.material-field__input');
const materialArea = document.querySelectorAll('.material-area__input');

toggleInput(materialInput, 'material-field--focus');
toggleInput(materialArea, 'material-area--focus');

function toggleInput (elements, className) {
    if (!!elements) {
        elements.forEach(element => {
            addClassFocus(element, className)
        })
        elements.forEach(element => {
            removeClassBlur(element, className)
        })
    }
}

function addClassFocus (element, className) {
    element.addEventListener('focus', function () {
        element.parentNode.classList.add(className);
    });
}

function removeClassBlur (element, className) {
    element.addEventListener('blur', function (event) {
        const value = event.target.value;
        console.log(value);
        if (value.length === 0) {
            console.log('remove');
            
            element.parentNode.classList.remove(className);
        }
    });
}