// функция для отображения списков (персонажей, расс, фильмов и т.д.)
function renderList(selector, data, renderFunction) {
    var container = $(selector);
    container.html('');
    breadCrumbs = breadCrumbs.slice(0,2);
    renderBreadCrumbs();
    // var paginationContainer = document.createElement('div');
    // var elementsContainer = document.createElement('div');


    var pagination = createListPagination(data.next, data.previous, data.count, renderFunction);
    container.append(pagination);
    // paginationContainer.append(pagination);
    // container.append(paginationContainer);

    var elements = data.results.map(itemData => createItem(itemData));
    // elementsContainer.append(...elements);
    // container.append(elementsContainer);
    container.append(elements);
}

// Создание элемента списка 
function createItem(itemData) {
    let itemDiv = document.createElement("div");
    let itemNameSpan = document.createElement("span");
        itemDiv.classList.add("name");
        itemDiv.appendChild(itemNameSpan);
        itemNameSpan.innerText = itemData.name;
    itemDiv.onclick = () => {renderItemDescription(itemData)}
        return itemDiv;
}

// создание пагинации и назначение при клике на страницу, функции которая получит данные и отрисует страницу заново
function createListPagination(nextUrl, prevUrl, itemsCount, renderFunction) {
    var element = document.createElement('div');
        element.classList.add('pagination');
    var next = document.createElement('span');
        next.innerText = 'Next ▶';
    if(nextUrl) {
        next.onclick = () => {renderFunction(nextUrl)};
    }
    var prev = document.createElement('span');
        prev.innerText = '◀ Preveous';
    if(prevUrl) {
        prev.onclick = () => {renderFunction(prevUrl)};
    }
    // var count = document.createElement('span');
    // count.innerText = 'Total items: ' + itemsCount;
    element.append(prev);
    element.append(next);
    // element.append(count);
    return element;
}
