function hidePages(pageClass, showClass) {
  var aPages = document.querySelectorAll('.' + pageClass);
  for (var j = 0; j < aPages.length; j++) {
    // console.log(aPages[j].classList);
    aPages[j].classList.remove(showClass);

  }
}

function hideActiveClass(btnClass, navActiveClass) {
  var theBtnClass = document.querySelectorAll('.' + btnClass);
  for (var i = 0; i < theBtnClass.length; i++) {
    theBtnClass[i].classList.remove(navActiveClass);
  }
}

function createNav(pageClass, showClass, btnClass) {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains(btnClass)) {
      if (btnClass == 'btnCmsNav' || e.target.parentNode.classList.contains('btnCmsNav')) {
        hideActiveClass('btnCmsNav', 'activeSidebar');
        e.target.classList.add('activeSidebar');
      }
      // console.log('p');
      hidePages(pageClass, showClass);

      var pageId = e.target.getAttribute('data-page');
      // console.log(pageId);
      localStorage.pageId = pageId;
      var getPage = document.querySelector('#' + pageId);
      getPage.classList.add(showClass);
      // console.log(pageId);
      if (pageId == 'pageFront') {
        topBar.classList.remove('addShadow');
      } else {
        topBar.classList.add('addShadow');
      }
    }
  });
}

createNav('rootPage', 'showRootPage', 'btnRootNav');
createNav('cmsPage', 'showCmsPage', 'btnCmsNav');
// localStorage.pageId = 'pageFront';

window.onload = function() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.pageId = 'pageFront';
    topBar.classList.remove('addShadow');
    localStorage.setItem("hasCodeRunBefore", true);
  }
};


// if (!localStorage.hasCodeRunBefore) {
//   localStorage.pageId = 'pageFront';
// }
if (localStorage.pageId == 'pageFront' || localStorage.pageId == undefined) {
  topBar.classList.remove('addShadow');
} else {
  topBar.classList.add('addShadow');
}
switch (localStorage.pageId) {
  case 'pageFront':
    topBar.classList.remove('addShadow');
    break;
  case 'pageEvents':
    topBar.classList.add('addShadow');
    break;
  case 'cmsPage':
    topBar.classList.add('addShadow');
    break;
  default:

}

// console.log(localStorage.pageId);

var cmsBurger = $('#cmsBurger');
var cmsSidebar = $('#cmsSidebar');
cmsBurger.click(function() {
  // console.log('x');
  $(this).toggleClass('burgerActive');
  $('#cmsSidebar').toggleClass('sideBarHidden');
  $('.eventsection__right').toggleClass('eventRightAddjust');
});

var aImgList = [
  'opt_img/unprosessed_slider_img/techtornado_pic1.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic2.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic3.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic4.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic5.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic6.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic7.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic8.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic9.jpg',
  'opt_img/unprosessed_slider_img/techtornado_pic10.jpg',
];

function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var randomImgNumber = 0;


function clickedEvent(motherClass, pageId) {
  $('#' + pageId + ' .eventsection__right__event img').attr('src', aImgList[randomNumberFromRange(0, 10)]);
  $('.' + motherClass + ' .eventsection__left__container__list__item').click(function() {
    // console.log('list');
    randomImgNumber = randomNumberFromRange(0, 10);
    $('.' + motherClass + ' .eventsection__left__container__list__item').removeClass('selectedEvent');
    $(this).addClass('selectedEvent');
    var sThisHeading = $(this).children().children('h3').html();
    $('#' + pageId + ' .eventsection__right__event > h2').text(sThisHeading);
    $('#' + pageId + ' .eventsection__right__event img').attr('src', aImgList[randomImgNumber]);
    if (pageId != 'pageEvents' && pageId != 'pagePendingEvents') {
      var views = $('#' + pageId + ' .eventsection__right__stats__item')[0];
      var attending = $('#' + pageId + ' .eventsection__right__stats__item')[1];
      var shares = $('#' + pageId + ' .eventsection__right__stats__item')[2];
      views.children[1].children[0].innerHTML = randomNumberFromRange(0, 1000);
      attending.children[1].children[0].innerHTML = randomNumberFromRange(0, 300);
      shares.children[1].children[0].innerHTML = randomNumberFromRange(0, 300);
      // console.dir(views.children[1].children[0].innerHTML);
    }

  });
}

clickedEvent('fpAllEventsList', 'pageEvents');
clickedEvent('cmsAllEventsList', 'pageAllEvents');
clickedEvent('cmsMyEventsList', 'pageMyEvents');
clickedEvent('cmsPendingList', 'pagePendingEvents');