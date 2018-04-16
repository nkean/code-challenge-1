console.log('Javascript working');

let clickCount = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery working');
    $('#generateButton').click(newDiv);
    $('body').on('click', '.swapButton', swapColors);
    $('body').on('click', '.deleteButton', deleteDiv);
}

function newDiv() {
    console.log('generateButton clicked');
    clickCount ++;
    let div = '<div class="red"><p>' + clickCount + '</p></div>';
    let swapButton = '<button class="swapButton">Swap</button>';
    let deleteButton = '<button class="deleteButton">Delete</button>';
    $('body').append(div);
    $('body div:last').append(swapButton + deleteButton);
}

function deleteDiv() {
    console.log('deleteButton clicked');
    $(this).parent().remove();
}

function swapColors() {
    console.log('swapButton clicked');
}

