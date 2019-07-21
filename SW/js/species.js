menu.push(
    {
        onclick: renderSpecies,
        menu: 'species',
        breadcrumb: {onclick: () => {renderSpecies()}, title: 'Species'}
    }
);

// функция для рендера списка фильмов
function renderSpecies(url = 'https://swapi.co/api/species') {
    $('.main-content > div').hide();
    $('.page-content').show().css('display', 'flex');
    $('.breadcrumbs').show().css('display', 'inline');
    $.get(url, {}, (data) => {
        console.log(data);

        renderList('.page-content', data, renderSpecies);
    })
}

function createItemDescriptionSpecies(itemData, renderItemDescriptionDataReady) {
    var container = document.createElement('div');
    container.classList.add('desc');
    var descriptionParams = [
        {name: 'Classification: ', value: itemData.classification},
        {name: 'Designation: ', value: itemData.designation},
        {name: 'Language: ', value: itemData.language},
        {name: 'Avg Lifespan: ', value: itemData.average_lifespan},
        {name: 'Avg Height: ', value: itemData.average_height},
        {name: 'Hair Color(s): ', value: itemData.hair_colors},
        {name: 'Skin Color(s): ', value: itemData.skin_colors},
        {name: 'Eye Color(s): ', value: itemData.eye_colors}
    ];

    container.append(createItemDescriptionText(itemData.name, descriptionParams));
    container.append(renderRelated('Residents', itemData.people, 'related-characters'));
    container.append(renderRelated('Films', itemData.films, 'related-films'));

    renderItemDescriptionDataReady(container);
}
