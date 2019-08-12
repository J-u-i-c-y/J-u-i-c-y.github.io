let newComments = document.createElement("div");
	newComments.setAttribute("class", "newComments");
let coment = document.createElement("div");
	coment.setAttribute("class", "comment");
let textArea = document.createElement("textarea");
let wraper = document.querySelector("div");
	wraper.append(coment);
	wraper.append(newComments);
	coment.append(textArea);
let send = document.createElement("button");
	send.setAttribute("type", "button");
	send.setAttribute("id", "addComent");
	send.innerText = "Add comment";
	coment.append(send);
let sortTagsSelect = document.querySelector("select");
// let sortTagsOption = document.createElement("options");
	wraper.append(sortTagsSelect);
	// sortTagsSelect.append(sortTagsOption);
	send.onclick = function() {
		addComent();
		renderComents(arrComent, newComments);
		textArea.value = "";
	}

if (localStorage.getItem('Comments')!=undefined){
   info = JSON.parse(localStorage.getItem('Comments'));			
}

let arrComent = [];

function renderComents(coments, container) {
	container.innerHTML = "";
	console.log(coments);
	let blocks = coments.map(renderComent);
	console.log(blocks);
	blocks.forEach( i => {
		container.append(i);
	})
	renderTagsFilter();
	// container.append(renderComent(coment));
}

function renderComent(coment, i) {
	let block = document.createElement('div');
	block.setAttribute("class", "newComent");
	block.setAttribute("data-index", i)
	let par = document.createElement('p');
	// document.body.append(block);
	par.innerHTML = coment;
	block.append(par);
	//renderTags(coment);
	block.append(renderTags(coment));
	block.append(addButtonDelete());
	block.append(addButtonChange());

	console.log(block);

	return block;
}

function renderTags(coment) {	
	let tags = parsTags(coment);
	let ul = document.createElement("ul");


	let tagLi = tags.map( value => {
		let li = document.createElement("li");
		li.innerText = value;
		return li;
	})

	for (var i = 0; i < tagLi.length; i++) {
		ul.append(tagLi[i]);
	}
	console.log(ul);
	return ul;

}
renderComents( arrComent, newComments)

function addComent() {
	if (textArea.value !== "") {
		arrComent.push(textArea.value);
	}
}

function parsTags(coment) {
	let	tags = coment.match(/#\S+/gm);

	if (tags == null ) {
		return [];
	}

	tags = tags.filter((value, index, self) => { 
    	return self.indexOf(value) === index;
	})
	return tags;
}

function renderTagsFilter() {
	let allTags = [].concat(...arrComent.map(parsTags)).filter((value, index, self) => { 
    	return self.indexOf(value) === index;
	});
	console.log(allTags);
	allTags.unshift("Все теги");
	sortTagsSelect.innerHTML = "";
	for (let i=0; i < allTags.length; i++) {
		let sortTagsOption = document.createElement("option");
		sortTagsOption.innerText = allTags[i];
		sortTagsOption.value = allTags[i];
		sortTagsSelect.append(sortTagsOption);
	}
		return allTags;
}

function filterTags() {
	var toggle = document.querySelector('[name="sortTags"]');
	// var coment = document.getElementsByClassName('newComent');
	var items = renderTagsFilter();
	toggle.onchange = function() {
		coment = document.getElementsByTagName("li");
		console.log(this.value);
		console.log(items);
		console.log(coment);

	  	for (var i = 0; i < coment.length; i++) {
	  		if (this.value == "Все теги") {
	    		coment[i].parentElement.parentElement.style.display = 'block';
	    		continue
	  		} 

	  		if (coment[i].innerText == this.value) {
	  			console.log(coment[i].parentElement.parentElement);
	    		coment[i].parentElement.parentElement.style.display = 'block';
	    	} else {
	    		coment[i].parentElement.parentElement.style.display = 'none';
	    	}
	  	}
	};

}
filterTags();

// добавление кнопок удаления и изменения коментария

function addButtonDelete() {

    let del = document.createElement("button");
    	del.setAttribute("class", "delete");
    	del.setAttribute("type", "button");
    	del.innerText = "Delete comment";
    	del.onclick = function() {
			console.log(this.parentElement.getAttribute("data-index"));
			// this.parentElement.remove();
			arrComent.splice(this.parentElement.getAttribute("data-index"),1);
			console.log(arrComent);
			renderComents(arrComent, newComments);
		}
    return del;
}

function addButtonChange() {

    let change = document.createElement("button");
    	change.setAttribute("class", "change");
    	change.setAttribute("type", "button");
    	change.innerText = "Change comment";
    	change.onclick = function() {
			console.log(this.parentElement.getAttribute("data-index"));
			textArea.value = this.parentElement.querySelector("p").innerText;

			arrComent.splice(this.parentElement.getAttribute("data-index"),1);

			renderComents(arrComent, newComments);
		}
    return change;
}



