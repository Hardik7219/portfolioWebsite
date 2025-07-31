//CREATE A LOGIC FOR NAVIGATION ON SAME PAGE
const menuItems = document.querySelectorAll('.menu-sec'); //get access of all child elemnt of menu class or navbar

menuItems.forEach((item) => {
	//first we access now we get each elemnt one by one in item
	item.addEventListener('click', () => {
		//this function note the event when we click on specific element it call nav function and paramiter that used as id name
		nav(item.id + '1');
	});
});

function nav(a) {
	// get id name in A variabile
	const nav_bar = document.getElementById(a); //get access of specific place of element
	if (nav_bar) {
		nav_bar.scrollIntoView({ behavior: 'smooth' }); //when we click on element page will be scroll to the that specific area
	}
}
//TYPING EFFECT
const typing = document.getElementById('typing');
const text = 'HARDIK7219';

const animation = () => {
	typing.innerText = '';
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typing.innerText += text.charAt(i);
			if (i === text.length - 1) setTimeout(animation, 1000);
		}, 300 * i);
	}
};
animation();

//projects

const link = document.getElementById('link');//accessing the link element
//adding event listener to the link element
link.target = '-blank'; //setting the target attribute to open in a new tab
link.href = 'https://github.com/Hardik7219'; //opening the link to the github profile in new tab

const gitLogo = document
	.getElementById('link2') //accessing the gitLogo element
	.addEventListener('click', () => { //adding event listener to the gitLogo element
	//when the gitLogo element is clicked, it will open the github profile in a new
		window.open('https://github.com/Hardik7219', '-blank');
	});




//contact  

let name1=document.getElementById("name"); //get access of text field
let label1=document.getElementById("label") //get access of text field label
let check= (field,label)=>{ /// make a function to check if text field hade value or not
	if(field.value=="")
	{
		//if text field dont't have value than red border will appear
		field.style.border="1px solid red";
		label.style.visibility="visible";
	}
	else
	{
		//if it hase a value than label will be remove
		label.style.visibility="hidden";
	}
}
name1.addEventListener("blur",()=>{
	check(name1,label1)

}); //addEventLisner on text field

let email=document.getElementById("email");  //get access of email field
let label2=document.getElementById("label2"); //get access of email field label

email.addEventListener("blur",()=>{ //addEventLisner on email field
	check(email,label2)
});

let btn=document.getElementById("btn"); //get access of send button

btn.addEventListener("click",()=>{
