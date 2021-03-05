let currentTheme = "light"
const checkboxTheme = document.querySelector('#checkboxTheme')
const infoThemeActive = document.querySelector('.info')
const body = document.querySelector('body')

function changeTheme () {
    currentTheme = checkboxTheme.checked ? "dark" : "light"
    infoThemeActive.innerHTML = `${currentTheme} theme`
    body.dataset.theme = currentTheme
}