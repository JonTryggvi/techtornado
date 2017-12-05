function hidePages(pageClass, showClass) {
  var aPages = document.querySelectorAll('.' + pageClass);
  for (var j = 0; j < aPages.length; j++) {
    // console.log(aPages[j].classList);
    aPages[j].classList.remove(showClass);
  }
}

function createNav(pageClass, showClass, btnClass) {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains(btnClass)) {
      hidePages(pageClass, showClass);
      var pageId = e.target.getAttribute('data-page');
      var getPage = document.querySelector('#' + pageId);
      getPage.classList.add(showClass);
      // console.log(pageId);
    }

    switch (btnClass) {
      case 'btnCmsNav':

        var activeSidebar = 'activeSidebar';
        var btnCmsNav = document.querySelectorAll('.btnCmsNav');
        for (var i = 0; i < btnCmsNav.length; i++) {
          // console.log(aPages[i].classList);
          btnCmsNav[i].classList.remove(activeSidebar);
        }
        e.target.classList.add(activeSidebar);
        e.target.parentNode.classList.add(activeSidebar);
        break;
      default:

    }

  });
}

createNav('rootPage', 'showRootPage', 'btnRootNav');
createNav('cmsPage', 'showCmsPage', 'btnCmsNav');