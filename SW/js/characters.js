menu.push(
  {
    onclick: renderCharacters,
    menu: 'character',
    breadcrumb: { onclick: () => { renderCharacters() }, title: 'Characters' }
  }
);

// функция для рендера списка персонажей
function renderCharacters(url = 'https://swapi.info/api/people/') {
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
  const container = document.createElement('div');
  container.classList.add('desc');

  const requests = [
    fetch(itemData.homeworld).then(r => r.json()),
    ...(itemData.species ?? []).map(url =>
      fetch(url).then(r => r.json())
    )
  ];

  Promise.all(requests)
    .then(([homeworldData, ...speciesData]) => {

      const homeworld = {
        title: homeworldData?.name || '',
        data: homeworldData || null
      };

      const speciesNames = speciesData.map(sp => ({
        title: sp?.name || '',
        data: sp || null
      }));

      console.log(homeworld, speciesNames);

      var descriptionParams = [
        { name: 'Birth Year: ', value: itemData.birth_year },
        { name: 'Species: ', value: speciesNames },
        { name: 'Height: ', value: itemData.height },
        { name: 'Mass: ', value: itemData.mass },
        { name: 'Gender: ', value: itemData.gender },
        { name: 'Hair Color: ', value: itemData.hair_color },
        { name: 'Skin Color: ', value: itemData.skin_color },
        { name: 'Homeworld: ', value: [homeworld] },
      ];
      container.append(createItemDescriptionText(itemData.name, descriptionParams));

      container.append(renderRelated('Films', itemData.films, 'related-films'));
      container.append(renderRelated('Starships', itemData.starships, 'related-starships'));
      container.append(renderRelated('Vehicles', itemData.vehicles, 'related-vehicles'));

      renderItemDescriptionDataReady(container, {
        homeworld,
        species: speciesNames
      });
    })
    .catch(err => {
      console.error('Ошибка загрузки данных:', err);
    });
}