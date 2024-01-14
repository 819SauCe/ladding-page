
window.onload = function() {
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btnTopo").style.display = "block";
        } else {
            document.getElementById("btnTopo").style.display = "none";
        }
    };
};

document.getElementById('nav-icon1').addEventListener('click', function() {
    const menu = document.querySelector('.menu-options');
    menu.classList.toggle('active');
});

document.getElementById('nav-icon1').addEventListener('click', function() {
    var menuOptions = document.getElementById('menuOptions');
    if (menuOptions.style.display === 'block') {
        menuOptions.style.display = 'none';
    } else {
        menuOptions.style.display = 'block';
    }
});
$(document).ready(function(){
    $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const closeButton = document.getElementById('closeButton');
const popup = document.getElementById('popup');

setTimeout(function() {
    popup.style.display = 'block';
}, 3000);

document.getElementById('closePopup').addEventListener('click', function() {
    popup.style.display = 'none';
});

function downloadFile() {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1hgr7H0YJLjY0WZYN7v8FRSqghpxZm7Ro';
}

function RedirectToSocial() {
    window.location.href = "SocialMedia.html"
}