//generate random colour

const randomColour = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let changeinterval ;
const startChange= function () {
    function startbg() {
        document.body.style.backgroundColor=randomColour()
    }
    if (!changeinterval) {
        changeinterval =setInterval(startbg,1000);
    }
}
document.querySelector('#start').
    addEventListener('click', startChange);

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(changeinterval );
    changeinterval=null;
})