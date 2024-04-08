// SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//--- FX ---//---------------------------------------------------------------------------------

// effet neige
async function background_animation() {
    let deg=0;
    const background_texture=document.querySelector('#fx_snow');
    while(true) {
        deg+=90;
        if (deg>270) {deg=0};
        background_texture.style.transform='rotate('+deg+'deg)';
        await sleep(100);
    }
}

background_animation();

// effet lignes
async function background_lines() {
    let freq, direction;
    const scanline=document.querySelector('#fx_scanline');
    while(true) {
        direction=Math.round(Math.random());
        if (direction==0) {
            scanline.classList.add('scanline');
            await sleep(1250);
            scanline.classList.remove('scanline');
        } else {
            scanline.classList.add('scanlineReverse');
            await sleep(1250);
            scanline.classList.remove('scanlineReverse');
        }
        freq=1500+Math.floor(Math.random() * 5500);
        await sleep(freq);
    }
}

background_lines();

// effet blur
// async function blur_fx() {
//     let freq;
//     const display=document.querySelector('main');
//     while(true) {
//         display.classList.add('blur');
//         await sleep(2000);
//         display.classList.remove('blur');
//         freq=1500+Math.floor(Math.random() * 6000);
//         await sleep(freq);
//     }
// }

//blur_fx();

// effet skew
// async function skew_fx() {
//     let freq;
//     const display=document.querySelector('#monitor_screen');
//     while(true) {
//         display.classList.add('skew');
//         await sleep(5000);
//         display.classList.remove('skew');
//         freq=1500+Math.floor(Math.random() * 5000);
//         await sleep(freq);
//     }
// }

// skew_fx();

//--- ON / OFF ---//---------------------------------------------------------------------------------
let isOn=true;
const onOff=document.querySelector('#button_on');
onOff.addEventListener("click", function() {
    const led=document.querySelector('#led_on');
    if (isOn) {
        isOn=false;
        //document.querySelector('main').style.display='none';
        document.querySelector('#fx_snow').style.display='none';
        document.querySelector('#fx_scanline').style.display='none';
        document.querySelector('#screen_texture').style.display='block';
        led.style.backgroundColor='black';
        led.style.boxShadow='0px 0px 1px black';
    } else {
        isOn=true;
        //document.querySelector('main').style.display='block';
        document.querySelector('#fx_snow').style.display='block';
        document.querySelector('#fx_scanline').style.display='block';
        led.style.backgroundColor='greenyellow';
        led.style.boxShadow='0px 0px 7px greenyellow;';
    }
});