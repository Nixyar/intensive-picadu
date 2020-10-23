"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // HEADER TOGGLE

    let closeBurger = false;

    const burgerBtn = document.querySelector('#hamburger'),
    asideBar = document.querySelector('aside');

    function closeMenu() {
        asideBar.classList.remove('show');
        closeBurger = false;
    }

    burgerBtn.addEventListener('click', () => {
        if (closeBurger === false) {
            asideBar.classList.add('show');
            closeBurger = true;
        } else {
            closeMenu();
        }
    });

    // TABS

    const sideTabs = document.querySelectorAll('.aside-item'),
        sideBlockTabs = document.querySelector('.side-profile--navbar');

    function hideTabs() {
        sideTabs.forEach(item => {
            item.classList.remove('aside-item--active');
        });
    }

    function showTab(i = 0) {
        sideTabs[i].classList.add('aside-item--active');
    }

    showTab();

    sideBlockTabs.addEventListener('click', evt => {
        const target = evt.target;

        if (target && target.classList.contains('aside-item')) {
            sideTabs.forEach((item, i) => {
                if (target === item) {
                    hideTabs();
                    showTab(i);
                }
            });
        }
    });
});
