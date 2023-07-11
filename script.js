// Menu-Mobile

function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML

    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var toPlace = document.querySelector('.off-canvas .thetop-nav');
    toPlace.innerHTML= topNav.innerHTML;
}
copyMenu()
//SHOW MOBILE-MENU
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toogle('showmenu')
})

closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu');
})


//MOBILE SUB-MENU
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle))


function toogle(e) {
    e.preventDefault()
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toogle('expand');
}
