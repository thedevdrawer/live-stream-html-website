let footer = [];

const footerlinks = {
	Home: "/",
    About: "/about.html",
	Services: "/services.html",
	Portfolio: "/portfolio.html",
	Contact: "/contact.html",
};

Object.keys(footerlinks).forEach(function (item) {
	footer.push(`<li><a href='${footerlinks[item]}'>${item}</a></li>`);
});

const footerHTML = `
<section class="footer-top">
<div class="content">
    <h2>Let's Get Started Now!</h2>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
    <a href="/contact.html" class="btn btn-secondary">Start Now<i class="bi-arrow-right-circle-fill"></i></a>
</div>
</section>
<div class="container">
<img src="/img/logo.svg" alt="The DevDrawer Footer logo" class="footerlogo">
<div class="row footerinfo">
    <div class="col-12 col-lg-4">
        <i class="bi-geo-alt-fill"></i>
        <h3>1234 Street Name, City ST</h3>
        <h4><a href="#">Get Directions</a></h4>
    </div>
    <div class="col-12 col-lg-4">
        <i class="bi-envelope-heart-fill"></i>
        <h3>test@example.com</h3>
        <h4><a href="#">Send Email</a></h4>
    </div>
    <div class="col-12 col-lg-4">
        <i class="bi-telephone-forward-fill"></i>
        <h3>123-456-7890</h3>
        <h4><a href="#">Call Me</a></h4>
    </div>
</div>
</div>
<nav class="hidden-md-down">
<ul></ul>
</nav>
<p class="copyright">Copyright 2022 &copy; Your Agency Name Here by The DevDrawer. All Rights Reserved.</p>
<ul class="footer-social">
<li><a href="https://www.facebook.com/thedevdrawer" target="_blank"><i class="bi-facebook"></i></a></li>
<li><a href="https://www.twitter.com/thedevdrawer" target="_blank"><i class="bi-twitter"></i></a></li>
<li><a href="https://www.instagram.com/thedevdrawer" target="_blank"><i class="bi-instagram"></i></a></li>
<li><a href="https://www.facebook.com/thedevdrawer" target="_blank"><i class="bi-youtube"></i></a></li>
</ul>
`;

export { footer, footerHTML };
