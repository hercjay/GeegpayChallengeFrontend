const themeStylesheet = document.getElementById('theme-stylesheet');
const categoryIcon = document.getElementById('category-icon');
const themeToggle = document.getElementById('themeToggle');
//for some weird reason, the svg elements are not being HANDLED CORRECTLY when
//selected by the querySelectorAll function using their classnames and a foreach
const themeSvg1 = document.getElementById('theme-svg1');
const themeSvg2 = document.getElementById('theme-svg2');
const themeSvg3 = document.getElementById('theme-svg3');
const themeSvg4 = document.getElementById('theme-svg4');
const themeSvg5 = document.getElementById('theme-svg5');




function setThemeMode() {
    //check if themeMode is set in localStorage, if not, set it to the user's preferred theme mode
    if(localStorage.getItem('geegpayChallenge-themeMode') == null){
        let userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            localStorage.setItem('geegpayChallenge-themeMode', 'dark');
        } else {
            localStorage.setItem('geegpayChallenge-themeMode', 'light');
        }
    }
    
    const themeMode = localStorage.getItem('geegpayChallenge-themeMode') || 'light';

    if (themeMode === 'dark') {
        themeStylesheet.href = 'css/darkTheme.css';
        categoryIcon.src = 'images/menu/category-dark.png';
        themeToggle.src = 'images/menu/theme2-dark.png';
        themeSvg1.classList.add('makeSvgWhite');
        themeSvg2.classList.add('makeSvgWhite');
        themeSvg3.classList.add('makeSvgWhite');
        themeSvg4.classList.add('makeSvgWhite');
        themeSvg5.classList.add('makeSvgWhite');
    } else {
        themeStylesheet.href = 'css/lightTheme.css';
        categoryIcon.src = 'images/menu/category.svg';
        themeToggle.src = 'images/menu/theme2.svg';
        themeSvg1.classList.remove('makeSvgWhite');
        themeSvg2.classList.remove('makeSvgWhite');
        themeSvg3.classList.remove('makeSvgWhite');
        themeSvg4.classList.remove('makeSvgWhite');
        themeSvg5.classList.remove('makeSvgWhite');
    }
}

setThemeMode();

document.addEventListener('DOMContentLoaded', function () {
    let themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', function () {
        if (themeStylesheet.href.endsWith('css/lightTheme.css')) {
            themeStylesheet.href = 'css/darkTheme.css';
            categoryIcon.src = 'images/menu/category-dark.png';
            themeToggle.src = 'images/menu/theme2-dark.png';
            themeSvg1.classList.add('makeSvgWhite');
            themeSvg2.classList.add('makeSvgWhite');
            themeSvg3.classList.add('makeSvgWhite');
            themeSvg4.classList.add('makeSvgWhite');
            themeSvg5.classList.add('makeSvgWhite');
            //save themeMode to localStorage so that it can be used to set the theme mode when the page is reloaded
            localStorage.setItem('geegpayChallenge-themeMode', 'dark');
        } else {
            themeStylesheet.href = 'css/lightTheme.css';
            categoryIcon.src = 'images/menu/category.svg';
            themeToggle.src = 'images/menu/theme2.svg';
            themeSvg1.classList.remove('makeSvgWhite');
            themeSvg2.classList.remove('makeSvgWhite');
            themeSvg3.classList.remove('makeSvgWhite');
            themeSvg4.classList.remove('makeSvgWhite');
            themeSvg5.classList.remove('makeSvgWhite');
            localStorage.setItem('geegpayChallenge-themeMode', 'light');
        }
    });
});


