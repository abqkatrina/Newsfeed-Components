/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 
/*
XStep 1: Write a function that will create a menu component as seen below:
<div class="menu">
  <ul>
    {each menu item as a list item}
  </ul>
</div>

The function takes an array as its only argument.

XStep 2: Inside this function, iterate over the array
creating a list item <li> element for each item in the array. 
XAdd those items to the <ul>

XStep 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

XStep 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
   
XStep 5: return the menu component.

XStep 6: add the menu component to the DOM.
*/







function createMenu(menuItems){
  const wholeMenu = document.createElement('div');
  const list = document.createElement('ul');
  // const link1 =document.createElement('li');
  // const link2 =document.createElement('li');
  // const link3 =document.createElement('li');
  // const link4 =document.createElement('li');
  // const link5 =document.createElement('li');
  // const link6 =document.createElement('li');
  const burger = document.querySelector('img');
  menuItems.forEach(function(i) {
    let link = document.createElement('li');
    link.textContent = i;
    link.classList.add('li');
    list.append(link);
  });

  wholeMenu.classList.add('menu');
  // link1.classList.add('li');
  // link2.classList.add('li');
  // link3.classList.add('li');
  // link4.classList.add('li');
  // link5.classList.add('li');
  // link6.classList.add('li');

  // link1.textContent = menuItems[0];
  // link2.textContent = menuItems[1];
  // link3.textContent = menuItems[2];
  // link4.textContent = menuItems[3];
  // link5.textContent = menuItems[4];
  // link6.textContent = menuItems[5];
 

  wholeMenu.appendChild(list);
  // list.appendChild(link1);
  // list.appendChild(link2);
  // list.appendChild(link3);
  // list.appendChild(link4);
  // list.appendChild(link5);
  // list.appendChild(link6);
  
burger.addEventListener('click', event => {
    console.log("clicked", event.target);
      wholeMenu.classList.toggle('menu--open');
    });
return wholeMenu;
};

console.log(createMenu(menuItems));

const parent = document.querySelector('.header');
parent.append(createMenu(menuItems));
