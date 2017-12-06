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

console.log(localStorage.pageId);