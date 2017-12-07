
  <div id="cmsSidebar" class="cms-container__sidebar">
    <ul class="cms-container__sidebar__main-ul">
      <li class="cms-container__sidebar__main-ul__manageContent"><p class="manageP">~ Manage Your Content ~</p></li>
      <li class="cms-container__sidebar__main-ul__li">
        <span class="listText listHeadText">EVENTS</span>
        <ul class="cms-container__sidebar__main-ul__li__events-ul">
          <li class="btnCmsNav" data-page="pageCmsStep1">Create Event</li>
          <li class="btnCmsNav" data-page="pageMyEvents">My Events</li>
          <li class="btnCmsNav" data-page="pagePendingEvents">Pending Events <span class="btnCmsNav pendingIndicator" data-page="pagePendingEvents">3</span></li>
          <li id="btnAllEvents" class="btnCmsNav cms-container__sidebar__main-ul__li__events-ul__accordion activeSidebar" data-page="pageAllEvents">
            <span class="btnCmsNav listText " data-page="pageAllEvents">All Events</span>
            <span class="btnCmsNav listPlus" data-page="pageAllEvents">
              <span></span>
              <span></span>
            </span>
            <ul id="eventFilter" class="cms-container__sidebar__main-ul__li__events-ul__accordion__allEvents">
              <li class="cms-container__sidebar__main-ul__li__events-ul__accordion__allEvents__li checkboxContainer">

                    <input type="checkbox" id="checkbox-6">
                    <label for="checkbox-6"><span class="dropdownItem checkbox">Upcoming</span></label>


              <li class="cms-container__sidebar__main-ul__li__events-ul__accordion__allEvents__li checkboxContainer">
                <input type="checkbox" id="checkbox-7">
                <label for="checkbox-7"><span class="dropdownItem checkbox">Previous</span></label>
            </ul>
          </li>
        </ul>
      </li>
      <li class="cms-container__sidebar__main-ul__li">
        <span class="listText listHeadText">CONFIGURE</span>
        <ul class="cms-container__sidebar__main-ul__li__lists">
          <li class="btnCmsNav" data-page="pageUsers">Users</li>
          <li class="btnCmsNav" data-page="pageSponsors">Sponsors</li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="cms-container__view">
    <?php include_once('partials/cms-pages/cms-step-one.php'); ?>
    <?php include_once('partials/cms-pages/cms-all-events.php'); ?>
    <?php include_once('partials/cms-pages/cms-my-events.php'); ?>
    <?php include_once('partials/cms-pages/cms-pending-events.php'); ?>
    <?php include_once('partials/cms-pages/cms-users.php'); ?>
    <?php include_once('partials/cms-pages/cms-sponsors.php'); ?>

  </div>
  <div class="cmsBurger-container">
    <div id="cmsBurger" class="cmsBurger-container__burger">
      <span></span>
      <span></span>
    </div>
  </div>
