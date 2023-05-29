(function() {

	"use strict";

	AOS.init({
		ease: 'slide',
		once: true
	});
	
	const ListHiddenFeatured = document.getElementsByClassName("list-featured-hidde");
	const seeMore = document.getElementsByClassName("see-more-featured");

	const seeMoreHandler = (e) => {
		e.preventDefault();
		console.log('click');
	};
})()

