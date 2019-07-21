menu.push(
    {
        onclick: renderCharacters,
        menu: 'character',
        breadcrumb: {onclick: () => {renderCharacters()}, title: 'Characters'}
    }
);

// функция для рендера списка персонажей
function renderCharacters(url = 'https://swapi.co/api/people/') {
    $('.main-content > div').hide();
    $('.page-content').show().css('display', 'flex');
    $('.breadcrumbs').show().css('display', 'inline');
    $.get(url, {}, (data) => {
        console.log(data);
        renderList('.page-content', data, renderCharacters);
    })
}

// создание страницы с подробной информацией по персонажам
function createItemDescriptionPeople(itemData, renderItemDescriptionDataReady) {
    var container = document.createElement('div');
    container.classList.add('desc');  /// первый див в page-cpntent
    var requests = [
        $.get(itemData.homeworld),
        ...itemData.species.map(species => $.get(species))
    ];

    var speciesNames = [];
    var homeworld = {title: '', data: ''};

    $.when(...requests).then(
        (homeworldResponse, ...speciesResponses) => {
            console.log(homeworldResponse, speciesResponses);
            homeworld = {title: homeworldResponse[0].name, data: homeworldResponse[0]};
            speciesNames = speciesResponses.map(
                ([response, state], index) => {
                    return {title: response.name, data: response};
                }
            )
            console.log(homeworld, speciesNames);

            var descriptionParams = [
                {name: 'Birth Year: ', value: itemData.birth_year},
                {name: 'Species: ', value: speciesNames},
                {name: 'Height: ', value: itemData.height},
                {name: 'Mass: ', value: itemData.mass},
                {name: 'Gender: ', value: itemData.gender},
                {name: 'Hair Color: ', value: itemData.hair_color},
                {name: 'Skin Color: ', value: itemData.skin_color},
                {name: 'Homeworld: ', value: [homeworld]},
            ];
            container.append(createItemDescriptionText(itemData.name, descriptionParams));

            container.append(renderRelated('Films', itemData.films, 'related-films'));
            container.append(renderRelated('Starships', itemData.starships, 'related-starships'));
            container.append(renderRelated('Vehicles', itemData.vehicles, 'related-vehicles'));

            renderItemDescriptionDataReady(container);
        }
    )
}


