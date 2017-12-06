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
    theBtnClass[i].classList.remove(navActiveClass);;
  }
}

function createNav(pageClass, showClass, btnClass) {
  document.addEventListener('click', function(e) {

    if (e.target.classList.contains(btnClass) ) {
      console.log("x");
      if (btnClass == 'btnCmsNav') {
        hideActiveClass('btnCmsNav', 'activeSidebar');
        e.target.classList.add('activeSidebar');
      }
      // console.log('p');
      hidePages(pageClass, showClass);

      var pageId = e.target.getAttribute('data-page');
      var getPage = document.querySelector('#' + pageId);
      getPage.classList.add(showClass);
      // console.log(pageId);
    }
  });
}

createNav('rootPage', 'showRootPage', 'btnRootNav');
createNav('cmsPage', 'showCmsPage', 'btnCmsNav');
