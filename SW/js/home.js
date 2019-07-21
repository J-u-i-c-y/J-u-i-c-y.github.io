
var breadCrumbs = [
    {onclick: renderMenu, title: 'Home'}
];
var item = {onclick: () => {}, title: 'Item'};

if ($('.main-content').show()) {
    $('.breadcrumbs').hide();
}

var menu = [];

function renderBreadCrumbs() {
    var bcContainer = $('.breadcrumbs');
        bcContainer.html('');
        breadCrumbs.forEach(
            (item) => {
                el = document.createElement('span');
                el.classList.add('crumbs');
                el.innerText = item.title;
                el.onclick = item.onclick;
                bcContainer.append(el);
            }
        )
}

function hideBreadcrumbs() {
    if ($('.main-content').show()) {
        $('.breadcrumbs').hide()
    }
}

function renderMenu() {
    $('.main-content > div').hide();
    $('.main-page').show().css('display', 'flex');
    $('.page-content').html('');
    breadCrumbs = [breadCrumbs[0]];
    renderBreadCrumbs();
    hideBreadcrumbs();
}

$('.main-page > div').click((e) => {
    var toMenu = $(e.currentTarget).data('route');
    console.log(e);
    var menuItem = menu.find((item) => item.menu === toMenu);
    // console.log(menu);
        menuItem.onclick();
        breadCrumbs.push(menuItem.breadcrumb);
    renderBreadCrumbs();
})





