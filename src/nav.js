const navbar = document.querySelector(".navbar");
const hamburger_parent = document.getElementById('mobile-hamburger-parent');
const hamburger = document.querySelector('.mobile-hamburger');
const navbar_middle = document.querySelector(".navbar-middle");
const navbar_middle_left = -475;
const navbar_middle_right = 1000;
const navbar_middle_width = 0;

function changeNav(state) {
	let is_open = state === "true";
	
	hamburger.setAttribute('data-state', is_open ? "open" : "closed");
	navbar.setAttribute('data-navlist', is_open ? "true" : "false");
}

function set_navbar_middle(left, width) {
	navbar_middle.style.setProperty("--_left", left + "px");
	navbar_middle.style.setProperty("--_width", width);
}

function switchTab(event) {
	let newTab = event.target;
	newTab.tagName != "A" ? newTab = newTab.parentElement : null;
	document.querySelectorAll(".navbar-link").forEach((tab) => tab.removeAttribute("data-toggled", "true"));

	if (newTab.id === "mobile-hamburger-parent") {
		newTab.removeAttribute("data-toggled", "true");
	} else {
		newTab.setAttribute("data-toggled", "true");
		let newTabWidth = newTab.offsetWidth / navbar_middle.offsetWidth;
		set_navbar_middle(newTab.offsetLeft, newTabWidth);
	}
}

window.addEventListener('resize', () => {
	if (document.querySelector(".navbar-link[data-toggled='true']")) {
		switchTab({target: document.querySelector(".navbar-link[data-toggled='true']")})
	}
});

if (hamburger_parent) {
	hamburger_parent.addEventListener('click', () => hamburger.getAttribute('data-state') === "closed" ? changeNav("true") : changeNav("false"));
	hamburger_parent.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			hamburger.getAttribute("data-state") === "closed" ? changeNav("true") : changeNav("false");
		}
	});
}

document.addEventListener('astro:page-load', () => {
	set_navbar_middle(navbar_middle_left, navbar_middle_width);
	let paths = ["/about", "/projects", "/blogs"];
	let toggled_tab = document.querySelector(".navbar-link[data-toggled='true']");

	if ((location.pathname === "/" || location.pathname === "/contact")) {
		toggled_tab ? toggled_tab.removeAttribute("data-toggled", "true") : null;
		if (location.pathname === "/contact") {
			set_navbar_middle(navbar_middle_right, navbar_middle_width);
		} else {
			set_navbar_middle(navbar_middle_left, navbar_middle_width);
		}
	} else if (paths.includes(location.pathname)) {
		switchTab({target: document.querySelector(`.navbar-link[href='${location.pathname}']`)});
	}

	navbar.setAttribute('data-navlist', "false");
	hamburger_parent.setAttribute('data-state', "closed");
	hamburger.setAttribute('data-state', "closed");

}, { once: false });