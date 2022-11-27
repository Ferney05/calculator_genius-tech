
const dataTitle = document.querySelector('[dataTitle]');

export function translateTitleCalc(){
    setInterval(() => {
        dataTitle.style = 'transform: translateX(5px)';
    }, 1000);

    setInterval(() => {
        dataTitle.style = 'transform: translateX(-5px)';
    }, 2000);
}