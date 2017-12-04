var btnAllEvents = $('#btnAllEvents');
var eventFilter = $('#eventFilter');
var listPlus = $('.listPlus');

btnAllEvents.click(function() {
  // console.log('x');
  $(this).toggleClass('activeSidebar');
  eventFilter.toggleClass('accordActive');
  listPlus.toggleClass('listPlusActive');
});