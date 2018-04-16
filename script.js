console.log('Javascript working');

let clickCount = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery working');
    $('#generateButton').click(newDiv);
}

function newDiv() {
    clickCount ++;
    let div = '<div><p>' + clickCount + '</p></div>';
    let swapButton = '<button class="swapButton">Swap</button>';
    let deleteButton = '<button class="deletButton">Delete</button>';
    $('body').append(div);
    $('body div:last').append(swapButton + deleteButton);
}