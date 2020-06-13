/*const s1='Hello';
console.log(typeof s1);

const s2= new String('Hello');
console.log(typeof s2);

console.log(window);
alert(1);*/

//console.log(navigator.appVersion);

/*const book1={
	title: 'book one',
	author: 'Jon Ko',
	year : '2030',
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};
const book2={
	title: 'book two',
	author: 'Koe Ko',
	year : '2029',
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};
console.log(Object.keys(book1));
console.log(Object.values(book2));
console.log(book1.getSummary());*/

//		Constructor

/*function book(title,author,year) {
	this.title=title;
	this.author=author;
	this.year=year;
	getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
	};
}
const book1=new book('Book1','John Doe','2013');
const book2=new book('Book2','Joe Joe','2030');
console.log(book1);*/

//		Prototype

/*function book(title,author,year) {
	this.title=title;
	this.author=author;
	this.year=year;
}
book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};
book.prototype.getAge = function() {
	const years = new Date().getFullYear()-this.year;
	return `${this.title} is ${years} years old`;	
};
book.prototype.revise = function(newYear) {
	this.year=newYear;
	this.revised = true;
};
const book1=new book('Book1','John Doe','2013');
const book2=new book('Book2','Joe Joe','2030');
console.log(book2);
console.log(book1.getAge());
book2.revise('2012');
console.log(book2);
*/

//		Inheritence ( proto & obj & constructor )

/*function book(title,author,year) {
	this.title=title;
	this.author=author;
	this.year=year;
}
book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};
function magazine(title,author,year,month){
	book.call(this, title,author,year);
	this.month= month;
}
magazine.prototype=Object.create(book.prototype );//pro
const mag1=new magazine('Mag 1', 'Heoy Thw','2013','Jan'); //obj
magazine.prototype.constructor=magazine; 	//con
console.log(mag1);*/

//  	Obj_create

/*const bookproto = {
	getSummary : function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
	getAge : function(){
		const years = new Date().getFullYear()-this.year;
		return `${this.title} is ${years} years old`;	
	},
};
// Create Obj
//const b1=Object.create(bookproto);
//b1.title='Book One';
//b1.author='Joe';
//b1.year='300';
const b1=Object.create(bookproto,{
	title: {value:'Book One'},
	author: {value:'Joe'},
	year: {value:'3002'}
});
console.log(b1);
*/

// 		Class

class book{
	constructor(title,author,year){
		this.title = title;
		this.author =author;
		this.year=year;
	}
	getSummary(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
	getAge(){
	const years = new Date().getFullYear()-this.year;
	return `${this.title} is ${years} years old`;	
	}
	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}
	static topbookstore(){
		return 'barnes and novels';
	}
}
const b1=new book('Book one','Joh','2013');
console.log(b1);
b1.revise('2018');
console.log(book.topbookstore());

class magazine extends book{
	constructor (title,author,year, month){
		super(title,author,year);
		this.month=month;
	}
}

const mag1=new magazine('book 4','Joo Joo','2043','June');
console.log(mag1.getSummary());