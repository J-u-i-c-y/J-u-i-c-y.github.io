
if (localStorage.getItem('Phones')!=undefined){
    get = JSON.parse(localStorage.getItem('Phones'));			
}

/////   ЗАПОЛНЕНИЕ ТАБЛИЦЫ

document.getElementById('addItem').onclick = function() {
    localStorage.setItem('Phones', JSON.stringify(DATA));     
	location.reload();
}
	

///// ОЧИСТКА ТАБЛИЦЫ

document.getElementById('del').onclick = function(){
    localStorage.clear();
    location.reload();
}


// ДОБАВЛЯЕМ СТРОКУ

let objectToTableRow = {
		image: 'img-phones',
		name: 'name-phones',
		country: 'country-phones',
		year: 'made-date',
		memory: 'memory-phone',
		camera: 'camera-phone',
		price: 'price-phone',
		button: 'change-phone'
	}

let tbl = document.getElementsByTagName('tbody')[0];
	
let obj = {};

let changePhone = document.getElementsByClassName("change-phone");


for (let i = 0; i < get.length; i++) {
		let newRow = document.createElement('tr');
		newRow.setAttribute("data-index", i);

		let changeBtn = document.createElement("input");
		    changeBtn.setAttribute("onclick", "ServiceCall3(id)");
		    changeBtn.setAttribute("type", "button");
   			changeBtn.setAttribute("value", "Change");

		for (let prop in get[i]) {
			let td = document.createElement('td');
			td.setAttribute("data-td", prop);
			td.className = objectToTableRow[prop];
			newRow.appendChild(td);

			switch (prop){

				case 'image': 
					let img = td.appendChild(document.createElement("img"));

					img.setAttribute("src", get[i].image);
					img.setAttribute("alt", "Еще не научился вставлять картинку(");
				break;

				case 'button': 
					td.innerHTML = `<button class="idTable">Удалить</button>`
				break;

				default:
					td.innerText = get[i][prop];
			}

		}
		tbl.appendChild(newRow);

	};


//// УДАЛЯЕМ СТРОКУ

[].forEach.call(document.querySelectorAll('button.idTable'), function(el){			//при удалении после сортировки ссылаеться на id строк 
    el.addEventListener('click', function () {
        let tr = this.parentNode.parentNode;
        let index = tr.rowIndex - 1;
        tbody.deleteRow(index);
        get.splice(index, 1);
        localStorage.setItem('Phones', JSON.stringify(get));     
    })
});



////// ИЗМЕНЕНИЕ ДАННЫХ 

let tds = document.querySelectorAll("td");

for (i = 0; i < tds.length; i++) {
	tds[i].addEventListener('click', function func(e) {
		let input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML= "";
		this.appendChild(input);
		const rowNumber = e.target.parentElement.getAttribute("data-index");
		const tdNumber = e.target.getAttribute("data-td");
		console.log(tdNumber);
		console.log(get[rowNumber]);
		console.log(rowNumber);
		let td = this;
		input.addEventListener('blur', function() {
			td.innerHTML = this.value;   
			get[rowNumber][tdNumber] = this.value;
			// console.log(get[rowNumber][tdNumber]);
        localStorage.setItem('Phones', JSON.stringify(get));     

		// for (let prop in get[i]) {
		// 	get[i].prop = this.value;
		// }  
			td.addEventListener('click', func);
		});

		this.removeEventListener('click', func);
	});  
}


//// МОДАЛЬНОЕ ОКНО


let modal = document.getElementById('myModal');
let btn = document.getElementById("modal");
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (e) {
	if (e.target == modal) {
		modal.style.display = "none";
	} 
}


///// ДОБАВЛЕНИЕ ТЕЛЕФОНА


document.getElementById('setValue').onclick = function(){
    var temp = {};
    var image = document.getElementById('setImage').value;
    var country = document.getElementById('setCountry').value;
    var name = document.getElementById('setName').value;
    var year = document.getElementById('setYear').value;
    var memory = document.getElementById('setMemory').value;
    var camera = document.getElementById('setCamera').value;
    var price = document.getElementById('setPrice').value;
    var button = document.getElementById('setButton').value;

    if(country != '' && name != '' &&
    	  year != '' && memory != '' && 
    	  camera != '' && price != '') {
        temp.image = image;
        temp.name = name;
        temp.country = country;
        temp.year = year;
        temp.memory = memory;
        temp.camera = camera;
        temp.price = price;
        temp.button = button;

        var i = get.length;
        get[i] = temp;
        localStorage.setItem('Phones', JSON.stringify(get)); 
        modal.style.display = "none";        
        location.reload();
    } else {
        alert('Заполните все поля');
    }
}


///// СОРТИРОВКА 


document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('#list thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});


function deleteItem() {
	localStorage.clear();
}



