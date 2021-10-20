const s1_Blocks = document.querySelectorAll('.s-1__white-block');

function displayImges(el) {
    el.target.closest('.s-1__wrapper').querySelector('.img-hover').classList.add('displaying');
}

function hideImges(el) {
    console.log(el.target)
    console.log(el.target.closest('.s-1__wrapper').querySelector('.img-hover'))

    el.target.closest('.s-1__wrapper').querySelector('.img-hover').classList.remove('displaying');
}

for (let i = 0; i < s1_Blocks.length; i++) {
    s1_Blocks[i].onmouseenter = displayImges;
    s1_Blocks[i].onmouseleave = hideImges;
}
