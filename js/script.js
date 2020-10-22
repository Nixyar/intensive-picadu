"use strict";

document.addEventListener('DOMContentLoaded', () => {
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

    hideTabs();
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
