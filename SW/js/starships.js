menu.push(
    {
        onclick: renderStarships,
        menu: 'starships',
        breadcrumb: {onclick: () => {renderStarships()}, title: 'Starships'}
    }
);

// функция для рендера списка фильмов
function renderStarships(url = 'https://swapi.co/api/starships/') {
    $('.main-content > div').hide();
    $('.page-content').show().css('display', 'flex');
    $('.breadcrumbs').show().css('display', 'inline');
    $.get(url, {}, (data) => {
        console.log(data);
        renderList('.page-content', data, renderStarships);
    })
}

function createItemDescriptionStarships(itemData, renderItemDescriptionDataReady) {
    var container = document.createElement('div');
        container.classList.add('desc');
    var descriptionParams = [
        {name: 'Model: ', value: itemData.model},
        {name: 'Manufacturer: ', value: itemData.manufacturer},
        {name: 'Class: ', value: itemData.vehicle_class},
        {name: 'Cost: ', value: itemData.cost_in_credits},
        {name: 'Speed: ', value: itemData.max_atmosphering_speed},
        {name: 'Length: ', value: itemData.length},
        {name: 'Cargo Capacity: ', value: itemData.cargo_capacity},
        {name: 'Hyperdrive Rating: ', value: itemData.hyperdrive_rating},
        {name: 'MGLT: ', value: itemData.MGLT},
        {name: 'Mimimum Crew: ', value: itemData.crew},
        {name: 'Passengers: ', value: itemData.passengers}
    ];

    container.append(createItemDescriptionText(itemData.name, descriptionParams));
    container.append(renderRelated('Residents', itemData.pilots, 'related-characters'));
    container.append(renderRelated('Films', itemData.films, 'related-films'));


    renderItemDescriptionDataReady(container);
}
