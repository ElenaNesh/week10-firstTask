const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg'
];
let currentIndex=0;
const photo=document.getElementById('image');
const previewButton=document.getElementById('previous');
const nextButton=document.getElementById('next');

function updateImage() {
    photo.src=images[currentIndex];
}

previewButton.addEventListener('click',()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
// images.length - это реальное количество фоток, а индекс с нуля начинается, поэтому, например
// если индекс 0(у самого первого изображения), а я хочу перейти назад, то получится (0-1+2)%2 = 1%2, результат остаточного деления 1, тогда отобразится последнее изображение (2е)
// а если например изображения 3, то будет(0-1+3)%3=2%3=2(2й индекс - это последнее третье изображение)
    updateImage();
})

nextButton.addEventListener('click', ()=>{
    currentIndex=(currentIndex+1)%images.length;
    updateImage();
})