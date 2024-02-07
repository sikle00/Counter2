let raise = -1;

function raise1(){
    raise++;
    document.getElementById('number').innerHTML = raise;
}
function lower(){
    raise--;
    document.getElementById('number').innerHTML = raise; 
}