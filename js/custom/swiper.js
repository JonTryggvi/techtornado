// $(window).resize(function() {
function vwToPixels(winWidth, decimal) {
  return winWidth * decimal;
}

// var windowWidth = $(window).width();
// var eventsectionWidthAfter = $('.eventsection__left__container').width();
// console.log(eventsectionWidthAfter);
// var filterWidth = $('#filterBackground').width();

// $('.rezizeFilter').width(vwToPixels(windowWidth, 0.75));

var isMobile = false;
if ($(window).innerWidth() < 769) {
  isMobile = true;
}
// console.log(isMobile);


if (isMobile) {
  var pageEvents = document.querySelector('#pageEvents');
  if (pageEvents) {
    var hammertime = new Hammer(pageEvents);
    hammertime.on('swipe', function(ev) {
      // console.dir(eventLeftCmsAll);
      eventLeft.classList.toggle('resizeLeft');
      filterBackground.classList.toggle('rezizeFilter');
      eventRight.classList.toggle('swipeRight');

      // console.dir(filterWidth)
    });

  }

  var pageAllEvents = document.querySelector('#pageAllEvents');
  if (pageAllEvents) {
    var hammertimeAll = new Hammer(pageAllEvents);
    hammertimeAll.on('swipe', function(ev) {

      eventLeftCmsAll.classList.toggle('resizeLeft');
      filterBackgroundAll.classList.toggle('rezizeFilter');
      eventRightAll.classList.toggle('swipeRight');

    });

    // hammertimeAll.get('swipe').set({
    //   direction: Hammer.DIRECTION_HORIZONTAL
    // });
  }

  var pagePendingEvents = document.querySelector('#pagePendingEvents');
  if (pagePendingEvents) {
    var hammertimePending = new Hammer(pagePendingEvents);
    hammertimePending.on('pan', function(ev) {
      // console.dir('x');
      eventLeftcmsPending.classList.toggle('resizeLeft');
      filterBackgroundPending.classList.toggle('rezizeFilter');
      eventRightPending.classList.toggle('swipeRight');
    });
  }

  var pageMyEvents = document.querySelector('#pageMyEvents');
  if (pageMyEvents) {
    var hammertimeMyEvents = new Hammer(pageMyEvents);
    hammertimeMyEvents.on('swipe', function(ev) {
      console.dir('x');
      eventLeftcmsMyEvents.classList.toggle('resizeLeft');
      filterBackgroundMyEvents.classList.toggle('rezizeFilter');
      eventRightMyEvents.classList.toggle('swipeRight');
    });
  }



}

// });
// console.log(pagePendingEvents);
