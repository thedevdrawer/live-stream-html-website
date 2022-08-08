import { header, headerHTML } from "./modules/header.js";
import { footer, footerHTML } from "./modules/footer.js";
import { pricingHTML } from "./modules/pricing.js";

const headerLayout = document.querySelector("header");
headerLayout.innerHTML = headerHTML;


const headerDiv = document.querySelectorAll("header nav ul");
header.forEach((item) => {
	headerDiv.forEach((div) => {
		div.innerHTML += item;
	});
});

const footerLayout = document.querySelector("footer");
footerLayout.innerHTML = footerHTML;

const footerDiv = document.querySelectorAll("footer nav ul");

footer.forEach((item) => {
	footerDiv.forEach((div) => {
		div.innerHTML += item;
	});
});

const pricingLayout = document.querySelector(".pricing");
if (pricingLayout) {
	pricingLayout.innerHTML = pricingHTML;
}

const navItems = document.querySelectorAll("header nav li");
navItems.forEach((item) => {
	let submenu = item.querySelector("ul");
	if (submenu) {
		item.addEventListener("mouseenter", function () {
			submenu.classList.add("active");
		});
		item.addEventListener("mouseleave", function () {
			submenu.classList.remove("active");
		});
	}
});

const heroCTAItems = document.querySelectorAll(".herocta");
if (heroCTAItems.length > 0) {
	heroCTAItems.forEach((item) => {
		item.addEventListener("mouseenter", function () {
			item.classList.add("active");
		});
		item.addEventListener("mouseleave", function () {
			item.classList.remove("active");
		});
	});
}

const chooseMeItems = document.querySelectorAll(".chooseme .section");
if (chooseMeItems.length > 0) {
	chooseMeItems.forEach((item) => {
		item.addEventListener("click", function () {
			for (var i = 0; i < chooseMeItems.length; i++) {
				chooseMeItems[i].classList.remove("active");
				let arrows = chooseMeItems[i].querySelector("i");
				arrows.classList.add("bi-arrow-down-circle-fill");
				arrows.classList.remove("bi-arrow-up-circle-fill");
			}
			let arrow = item.querySelector("i");
			arrow.classList.remove("bi-arrow-down-circle-fill");
			arrow.classList.add("bi-arrow-up-circle-fill");
			this.classList.toggle("active");
		});
	});
}

const mobilemenu = document.querySelector(".mobilemenuicon");
mobilemenu.addEventListener("click", function () {
	this.classList.toggle("bi-list");
	this.classList.toggle("bi-x-circle");
	const mobilemenu = document.querySelector(".mobilemenu nav");
	mobilemenu.classList.toggle("active");
});

const imageBlockItems = document.querySelectorAll(".imageblock");
if (imageBlockItems.length > 0) {
	imageBlockItems.forEach((item) => {
		item.addEventListener("mouseenter", function () {
			item.querySelector("span").classList.add("active");
		});
		item.addEventListener("mouseleave", function () {
			item.querySelector("span").classList.remove("active");
		});
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
