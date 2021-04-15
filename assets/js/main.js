// $(document).ready(function(){
// 	$('.header-navbar__btn').click(function(){
// 		$(this).toggleClass('header-navbar__btn--active');
// 		$('.header-navbar__list').toggleClass('header-navbar__list--active');
// 	});
// });

var headerBtn = document.querySelector('.header-navbar__btn');
var headerList = document.querySelector('.header-navbar__list');

headerBtn.addEventListener('click', function(){
  this.classList.toggle('header-navbar__btn--active');
  headerList.classList.toggle('header-navbar__list--active')
})