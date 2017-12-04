<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Events</title>
    <link rel="stylesheet" href="css/styles.css">

  </head>
  <body>
    <?php include_once("partials/svg.php") ?>
  <section class="eventsection">
    <div class="eventsection__left">
      <div class="eventsection__left__container">

        <div class="eventsection__left__container__filter">
          <div class="eventsection__left__container__filter__background">
            <label>
              <input class="searchInput" type="text" name="" value="" placeholder="Search">
              <svg class="searchInput__icon">
                <use href="#spyglass"></use>
              </svg>
            </label>

            <div class="filterGenre" id="filterDropdown">

              <span>Genre
                  <div class="filterGenre__dropdown">
                    <div class="filterGenre__dropdown__item">
                      <div class="filterGenre__dropdown__item__checkboxContainer">
                          <input type="checkbox" id="checkbox-1">
                          <label for="checkbox-1"><span class="dropdownItem checkbox">Backend</span></label>
                      </div>
                    </div>
                    <div class="filterGenre__dropdown__item">
                      <div class="filterGenre__dropdown__item__checkboxContainer">
                          <input type="checkbox" id="checkbox-2">
                          <label for="checkbox-2"><span class="dropdownItem checkbox">Frontend</span></label>
                      </div>
                    </div>
                    <div class="filterGenre__dropdown__item">
                      <div class="filterGenre__dropdown__item__checkboxContainer">
                          <input type="checkbox" id="checkbox-3">
                          <label for="checkbox-3"><span class="dropdownItem checkbox">UX Design</span></label>
                      </div>
                    </div>
                    <div class="filterGenre__dropdown__item">
                      <div class="filterGenre__dropdown__item__checkboxContainer">
                          <input type="checkbox" id="checkbox-4">
                          <label for="checkbox-4"><span class="dropdownItem checkbox">UI Design</span></label>
                      </div>
                    </div>
                  </div>
              </span>
              <div class="filterGenre__icon">
                <span></span>
                <span></span>
              </div>

            </div>
          </div>



        </div>
        <div class="eventsection__left__container__list">
          <div class="eventsection__left__container__list__item selectedEvent">
            <div class="eventsection__left__container__list__item__leftText">
              <span>18. Dec 2017</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Morning Booster: Happiness at Work with Alexander Kjerulf</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>12. Jan 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>ColdFront</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>28. Jan 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Coworking & Coliving Summit</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>6. Feb 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Trust Summit</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>5. Mar 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Future of Urban Mobility Meetup</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>5. Mar 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Future of Urban Mobility Meetup</h3>
            </div>
          </div>
          <div class="eventsection__left__container__list__item">
            <div class="eventsection__left__container__list__item__leftText">
              <span>5. Mar 2018</span>
            </div>
            <div class="eventsection__left__container__list__item__rightText">
              <h3>Future of Urban Mobility Meetup</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="eventsection__right">
      <div class="eventsection__right__event">
        <h2>Morning Booster: Happiness at Work with Alexander Kjerulf</h2>
        <img src="img/unprosessed_slider_img/techtornado_pic9.jpg" alt="">
        <h3>Tuesday, Sep 5</h3>
        <h3>  08:30 — 09:30</h3>
        <h3>KLUB, COPENHAGEN</h3>
        <div class="eventsection__right__event__buttons">
          <div class="linkMap"><a href="#">Map</a></div>
          <div class="linkShare"><a href="#">Share</a></div>
          <div class="linkGetTicket">
            <a href="#">
              <span>Get Ticket</span>
              <svg class="svggaur"></svg>
            </a>
          </div>
        </div>
        <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
      </div>

    </div>
  </section>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/scripts.js"></script>
  </body>
</html>
