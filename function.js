function randomNumberCreator() {
    let generatedNumber = parseInt(Math.random() * 10000);
    document.getElementById('code-shower').value = generatedNumber;
    generatedNumber = generatedNumber + '';
    if (generatedNumber.length < 4) {
        randomNumberCreator();
    }
}

function showInputNumbers() {
    let number = event.target.innerText;
    let typedNumbers = document.getElementById('typed-numbers').value;
    if (isNaN(number)) {
        document.getElementById('typed-numbers').value = '';
    }
    else {
        typedNumbers = typedNumbers + number;
        document.getElementById('typed-numbers').value = typedNumbers;
    }
}


document.getElementById('generate-btn').addEventListener('click', function () {
    randomNumberCreator();
})

document.getElementById('calculator-buttons').addEventListener('click', function (event) {
    showInputNumbers();
})

document.getElementById('submit-button').addEventListener('click', function () {
    const typedNumbers = document.getElementById('typed-numbers').value;
    const codeGenerated = document.getElementById('code-shower').value;
    if (typedNumbers == codeGenerated) {
        document.getElementById('code-matched').style.display = 'block';
        document.getElementById('did-not-match').style.display = 'none';
    }
    else {
        document.getElementById('code-matched').style.display = 'none';
        document.getElementById('did-not-match').style.display = 'block';
    }
})