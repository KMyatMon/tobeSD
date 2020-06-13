var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click',removeitem);

filter.addEventListener('keyup',filteritems);
// add items
function addItem(e) {
	e.preventDefault();

	//get input value
	var nitem=document.getElementById('item').value;

	//create new li element
	var li=document.createElement('li');

	//add class
	li.className = 'list-group-item';

	li.appendChild(document.createTextNode(nitem));

	var deletebtn=document.createElement('button');

	deletebtn.className='btn btn-danger btn-sm float-right delete';

	deletebtn.appendChild(document.createTextNode('X'));

	li.appendChild(deletebtn);

	itemList.appendChild(li);

}

function removeitem(e) {
	if(e.target.classList.contains('delete')){
		if(confirm('Are you sure ?')){
			var li=e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function filteritems(e)
{
	var text=e.target.value.toLowerCase();
	var items = itemList.getElementsByTagName('li');
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text)!= -1){
			item.style.display= 'block';
		}else{
			item.style.display='none';
		}
	});
}