let header = [];
let mobileheader = [];

const headerlinks = {
	Home: "/",
    About: "/about.html",
	Services: "/services.html",
	Portfolio: "/portfolio.html",
	Contact: "/contact.html",
};

const headerSubLinks = {
	Services: {
		"Website Development": "/website-development.html",
		"Software Development": "/software-development.html",
		"App Development": "/app-development.html",
	},
};

Object.keys(headerlinks).forEach(function (item) {
	if (headerSubLinks[item]) {
		let subnav = `<li><a href='${headerlinks[item]}'>${item}</a><ul class='submenu'>`;
		Object.keys(headerSubLinks[item]).forEach(
			function (subitem) {
				subnav += `<li><a href='${headerSubLinks[item][subitem]}'>${subitem}</a></li>`;
			}.bind(this)
		);
		subnav += `</ul></li>`;
		header.push(subnav);
	} else {
		header.push(`<li><a href='${headerlinks[item]}'>${item}</a></li>`);
	}
});


const headerHTML = `
<div class="container">
    <div class="logo">
        <a href="/"><img src="/img/logo-header.png" alt="The DevDrawer"></a>
    </div>
    <div class="subheader">
        <ul>
            <li><a href="tel:123-456-7890">123-456-7890</a></li>
            <li><a href="https://www.facebook.com/thedevdrawer" target="_blank"><i class="bi-facebook"></i></a></li>
            <li><a href="https://www.twitter.com/thedevdrawer" target="_blank"><i class="bi-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/thedevdrawer" target="_blank"><i class="bi-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/thedevdrawer" target="_blank"><i class="bi-youtube"></i></a></li>
        </ul>
    </div>
    <nav>
        <ul></ul>
    </nav>
    <div class="mobilemenu">
        <i class="bi-list mobilemenuicon"></i>
        <nav>
            <img src="/img/logo.svg" alt="The DevDrawer Footer logo">
            <ul></ul>
        </nav>
    </div>
</>
`;

export { header, mobileheader, headerHTML };
