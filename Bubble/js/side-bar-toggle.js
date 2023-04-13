let toggle  = document.querySelector('.toggle');
    let navigation  = document.querySelector('.side-nav');
    let mainAdmin  = document.querySelector('.main')

    toggle.onclick = function(){
        navigation.classList.toggle('active')
        mainAdmin.classList.toggle('active')
}