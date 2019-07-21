menu.push(
    {
        onclick: renderPlanets,
        menu: 'planets',
        breadcrumb: {onclick: () => {renderPlanets()}, title: 'Planets'}
    }
);

// функция для рендера списка планет
function renderPlanets(url = 'https://swapi.co/api/planets/') {
    $('.main-content > div').hide();
    $('.page-content').show().css('display', 'flex');
    $('.breadcrumbs').show().css('display', 'inline');
    $.get(url, {}, (data) => {
        console.log(data);
        renderList('.page-content', data, renderPlanets);
    })
}

// создание страницы с подробной информацией по планетам
function createItemDescriptionPlanets(itemData, renderItemDescriptionDataReady) {
    var container = document.createElement('div');
    container.classList.add('desc');

    var descriptionParams = [
        {name: 'Population: ', value: itemData.population},
        {name: 'Gravity: ', value: itemData.gravity},
        {name: 'Rotation Period: ', value: itemData.rotation_period},
        {name: 'Orbital Period: ', value: itemData.orbital_period},
        {name: 'Terrain: ', value: itemData.terrain},
        {name: 'Climate', value: itemData.climate},
        {name: 'Surface Water: ', value: itemData.surface_water},
        {name: 'Diameter: ', value: itemData.diameter}
    ];
    container.append(createItemDescriptionText(itemData.name, descriptionParams));
    container.append(renderRelated('Residents', itemData.residents, 'related-residents'));
	container.append(renderRelated('Films', itemData.films, 'related-films'));


    renderItemDescriptionDataReady(container);
}
