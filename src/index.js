// ============ DOM Manipulation (Part One) ============

// Part 1: Getting Started

const mainEl = document.getElementsByTagName('main');
mainEl[0].style.backgroundColor = 'var(--main-bg)';

const h1Main = document.createElement("h1");
h1Main.textContent = `DOM Manipulation`;
mainEl[0].appendChild(h1Main);

mainEl[0].classList.add("flex-ctr");

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

menuLinks.forEach(ele => {
    const navEl = document.createElement("a");
    navEl.setAttribute("href", ele.href);
    navEl.textContent = ele.text;
    topMenuEl.appendChild(navEl);
});

// ============ DOM Manipulation (Part Two) ============

// Part 4: Adding Interactivity