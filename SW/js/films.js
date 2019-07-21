menu.push(
    {
        onclick: renderFilms,
        menu: 'films',
        breadcrumb: {onclick: () => {renderFilms()}, title: 'Films'}
    }
);

// функция для рендера списка фильмов
function renderFilms(url = 'https://swapi.co/api/films') {
    $('.main-content > div').hide();
    $('.page-content').show().css('display', 'flex');
    $('.breadcrumbs').show().css('display', 'inline');
    $.get(url, {}, (data) => {
        console.log(data);
        data.results = data.results.map(
            item => {
                item.name = 'Episode ' + item.episode_id + ': ' + item.title;
                return item;
            }
        )
        renderList('.page-content', data, renderFilms);
    })
}

function createItemDescriptionFilms(itemData, renderItemDescriptionDataReady) {
    var container = document.createElement('div');
    container.classList.add('desc');
    var descriptionParams = [
        {name: 'Release: ', value: itemData.release_date},
        {name: 'Director: ', value: itemData.director},
        {name: 'Producer: ', value: itemData.producer},
        {name: 'Opening crawl: ', value: itemData.opening_crawl}
    ];
    container.append(createItemDescriptionText(itemData.name, descriptionParams));

    container.append(renderRelated('Characters', itemData.characters, 'related-characters'));
    container.append(renderRelated('Starships', itemData.starships, 'related-starships'));
    container.append(renderRelated('Vehicles', itemData.vehicles, 'related-vehicles'));
    container.append(renderRelated('Planets', itemData.planets, 'related-planets'));
    container.append(renderRelated('Species', itemData.species, 'related-species'));

    renderItemDescriptionDataReady(container);
    $('br').remove();
}
