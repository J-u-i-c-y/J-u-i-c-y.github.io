// создание страницы с подробной информацией
function renderItemDescription(itemData) {
    console.log('create item description', itemData, itemData.url.indexOf('people'));
    breadCrumbs = breadCrumbs.slice(0,2);
    breadCrumbs.push(
        {onclick: () => {}, title: (itemData.name ? itemData.name : itemData.title)}
    );
    renderBreadCrumbs();
    if (itemData.url.indexOf('people') !== -1) {
        createItemDescriptionPeople(itemData, renderItemDescriptionDataReady);
    } else if (itemData.url.indexOf('planets') !== -1) {
        createItemDescriptionPlanets(itemData, renderItemDescriptionDataReady);
    } else if (itemData.url.indexOf('films') !== -1) {
        createItemDescriptionFilms(itemData, renderItemDescriptionDataReady);
    } else if (itemData.url.indexOf('species') !== -1) {
        createItemDescriptionSpecies(itemData, renderItemDescriptionDataReady);
    } else if (itemData.url.indexOf('vehicles') !== -1) {
        createItemDescriptionVehicles(itemData, renderItemDescriptionDataReady);
    } else if (itemData.url.indexOf('starships') !== -1) {
        createItemDescriptionStarships(itemData, renderItemDescriptionDataReady);
    } else {
        console.log(itemData);
    }
}

function renderItemDescriptionDataReady(content) {
    $('.page-content').html('');
    $('.page-content').append(content);
}

// создание блока описания
function createItemDescriptionText(title, paramsArray) {
    var image = document.createElement('img');
    // image.src = "https://upload.wikimedia.org/wikipedia/ru/thumb/4/43/Luke_skywalker.jpg/250px-Luke_skywalker.jpg";
        image.classList.add('image');   ////  див с фото
        image.id = "img";
    var container = document.createElement('div');
        container.classList.add('second');   //// второй див в описании
    var titleEl = document.createElement('h2');
        titleEl.innerText = title;
        container.append(image);
        container.append(titleEl);

    paramsArray.forEach(
        (item) => {
            var el = document.createElement('span');
            if ($.isArray(item.value)) {
                var n = document.createElement('span')
                n.innerText = item.name;
                el.append(n);
                item.value.forEach(
                    i => {
                        var v = document.createElement('span');
                        v.innerText = i.title;
                        v.onclick = () => {
                            renderItemDescription(i.data)
                        };
                        el.append(v);
                    }
                );
            } else {
                el.innerText = item.name + ' ' + item.value;
            }
            container.append(el);
        }
    );
    return container;
}

function renderRelated(relatedTitle, urls, relatedId) {
    var container = document.createElement('div');
        container.classList.add('related-container');
        container.setAttribute('id', relatedId);

    var title = document.createElement('div');
        title.innerText = 'Related ' + relatedTitle;
    var itemsContainer = document.createElement('div');
        itemsContainer.classList.add('related-items');
    var paginationContainer = document.createElement('div');
        paginationContainer.classList.add('related-pagintaion');

    container.append(title);

    var relatedObject = {
        currentUrl: 0,
        urls: urls
    };

    container.setAttribute('data-related-object', JSON.stringify(relatedObject));
    container.append(itemsContainer);
    container.append(paginationContainer);
    renderRelatedItem(container);
    //renderRelatedPagination(container);
    return container;
}

function renderRelatedItem(container) {
    var relatedObject = JSON.parse(container.getAttribute('data-related-object'));
    console.log(relatedObject);
        var url = relatedObject.urls[relatedObject.currentUrl];
        $.get(url, {}, data => {
            $(container).find('.related-items').html('<span>' +(data.name ? data.name : data.title) + '</span>');
        })
    // var url = relatedObject.urls;
    // console.log(url);
    //     info = $('.related-items'); 
    //         url.forEach( el => {
    //             console.log(el);
    //             // var sp = document.createElement('span');
    //             //     sp.innerText = el;
                
    //         // $.get(el, {}, data => {
    //         //     $('.related-items').append(sp);
    //         //     // $('.related-items').html('<span>' +(data.name ? data.name : data.title) + '</span>');
    //         // })
    // })
        renderRelatedPagination(container);
}

function renderRelatedPagination(container) {
    var relatedObject = JSON.parse(container.getAttribute('data-related-object'));
    var currentUrl = relatedObject.currentUrl;
    var prevElement = document.createElement('span');
        prevElement.innerText = '◀ Preveous ';
    prevElement.onclick = () => {relatedPaginationPrev(container)};
    var nextElement = document.createElement('span');
        nextElement.innerText = ' Next ▶';
    nextElement.onclick = () => {relatedPaginationNext(container)};
    var pagContainer = $(container).find('.related-pagintaion');
        pagContainer.html('');
    if (relatedObject.urls[currentUrl-1]) {
        pagContainer.append(prevElement);
    }
    if (relatedObject.urls[currentUrl+1]) {
        pagContainer.append(nextElement);
    }
}

function relatedPaginationNext(container) {
    var relatedObject = JSON.parse(container.getAttribute('data-related-object'));
        relatedObject.currentUrl += 1;
    container.setAttribute('data-related-object', JSON.stringify(relatedObject));
    renderRelatedItem(container);
}

function relatedPaginationPrev(container) {
    var relatedObject = JSON.parse(container.getAttribute('data-related-object'));
        relatedObject.currentUrl -= 1;
    container.setAttribute('data-related-object', JSON.stringify(relatedObject));
    renderRelatedItem(container);
}
