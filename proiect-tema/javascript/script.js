slideimg=document.getElementById('slide')
s_index=1

setInterval(slider,5000)

function slider() {
    slideimg.classList.remove('slide')
    if (s_index==0) {
        slide1()
    } else {
        slider2()
    }
}

function slide1() {
    
    slideimg.classList.add('slide')
        s_index=s_index+1;
        slideimg.style.backgroundImage='url("./images/banners/banner03.jpg")'
    slideimg.addEventListener('animationend', function()
    {
        slideimg.classList.remove('slide')
    })
}
    

function slider2(){
    slideimg.classList.add('slide')
        s_index=s_index-1;
        slideimg.style.backgroundImage='url("./images/banners/banner02.jpg")'
        slideimg.addEventListener('animationend', function()
        {
            slideimg.classList.remove('slide')
        })
}