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

const link = document.getElementById('link');
link.target = '-blank';
link.href = 'https://github.com/Hardik7219';

const gitLogo = document
	.getElementById('link2')
	.addEventListener('click', () => {
		window.open('https://github.com/Hardik7219', '-blank');
	});
