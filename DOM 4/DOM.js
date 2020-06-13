// 	examining the document obj

//console.dir(document);
//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all[10]);
//document.all[10].textContent="Hello";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//	Get Element by Id

//console.log(document.getElementById('header-title'));
//var header_title=document.getElementById('header-title');
//console.log(header_title); 
//var header = document.getElementById('main-header');

// Text Content and InnerText and innerHTML

//header_title.textContent='Hello';
//header_title.innerText ="goodbye";
//console.log(header_title.textContent);// attention to style
//header_title.innerHTML ='<h3>hello</h3>';
//header_title.Text='<h3>hello</h3>

//	Get element by class name

//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent= 'jllo';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';
//items.style.backgroundColor = '#f4f4f4';
//for(var i=0;i<items.length;i++){
//	items[i].style.backgroundColor='violet';
//}

//	Get elements by Tagname

//var li= document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='Hello 3';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow';
//for(var i=0;i<li.length;i++){
//	li[i].style.backgroundColor="#f4f4f4";
//}

// 	Query Selector

//var header=document.querySelector('#main-header');
//header.style.borderBottom = 'solid 10px #ccc';
//var input=document.querySelector('input');
//input.value = 'hello world';
//var submit = document.querySelector('input[type="submit"]');
//submit.value="Send";
//var item = document.querySelector('.list-group-item');
//item.style.color='red';
//var lastitem=document.querySelector('.list-group-item:last-child');
//lastitem.style.color='blue';
//var secitem = document.querySelector('.list-group-item:nth-child(2)');
//secitem.style.color="coral";

// 	Query SelectAll

/*var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="hello";
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
	odd[i].style.backgroundColor="#f44444";
}*/


//  Transverse DOM

//var itemlist = document.querySelector('#items');
// 		Parent Nodes
/*console.log(itemlist.parentNode); 		//parent Node
itemlist.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);*/

// 	Parent Element
/*console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);*/
//		Child Nodes
//console.log(itemlist.childNodes);
/*console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';*/
//		FirstChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='hello 1';
//		NextSibling
//console.log(itemlist.nextSibling);
//		nextElementSibling
//console.log(itemlist.nextElementSibling);
// 		previousSibling
//console.log(itemlist.previousSibling);
//itemlist.previousSibling.textContent='yellow';
//		previousElementSibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color='green';

//		create element

/*var ndiv= document.createElement('div'); // div
ndiv.className='hello'; 	//class name
ndiv.id='hello1';	// id
ndiv.setAttribute('title','Hello Div'); // attribute
var ndivtext = document.createTextNode('Hello world');
var ndivtext1=document.createTextNode('Hello');
ndiv.appendChild(ndivtext1); 	// text Node
ndiv.appendChild(ndivtext); // text to div
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(ndiv);	
container.insertBefore(ndiv, h1); // what inserting , where
*/

//		 Adding events 

/*var button = document.getElementById('button').addEventListener('click', buttonclick);
function buttonclick(e){
	//console.log('Button clicked !');
	//document.getElementById('header-title').textContent="changed ! ";
	//document.querySelector('#main').style.backgroundColor="#f4f4f4";
	
	//console.log(e);
	//console.log(e.target);
	//console.log(e.target.id);
	//console.log(e.target.className);
	//console.log(e.target.classList);

	//var output = document.getElementById('output');
	//output.innerHTML='<h1>'+e.target.id+'</h1>';
	//console.log(e.type);

	//console.log(e.clientX);
	//console.log(e.clientY);

	//console.log(e.offsetX);
	//console.log(e.offsetY);

	//console.log(e.altKey);
	console.log(e.shiftKey);
	console.log(e.ctrlKey);
}*/

// 		Mouse events 

//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);
//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent);
/*var iteminput=document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
//iteminput.addEventListener('keydown',runEvent);
//iteminput.addEventListener('keyup',runEvent);
//iteminput.addEventListener('keypress',runEvent);
//iteminput.addEventListener('focus',runEvent);
//iteminput.addEventListener('cut',runEvent);
//iteminput.addEventListener('paste',runEvent);
//iteminput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);

function runEvent(e)
{
	console.log("Event type : "+ e.type);
	//output.innerHTML = '<h3> Mouse X : '+e.offsetX+'</h3><h3> Mouse Y : '+e.offsetY+'</h3>';
	//document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',50)';
	console.log(e.target.value);
	//document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}*/
 


