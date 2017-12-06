console.log(pageAllEvents);

var hammertime = new Hammer(pageAllEvents);
hammertime.on('pan', function(ev) {
  // console.dir(eventLeftCmsAll);
  eventLeftCmsAll.classList.toggle('resizeLeft');
  filterBackgroundAll.classList.toggle('rezizeFilter');
  eventRightAll.classList.toggle('swipeRight');
});