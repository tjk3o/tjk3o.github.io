$(() => {
  console.log('jQuery loaded!');
  const projectShowBtn = $('.project-show-button');

  // Sets scrollTop back to zero just after the page reloads. Fixes bug where page reloaded in incorrect position.
  window.setTimeout(function() {
    $(window).scrollTop(0);
  }, 100);

  // Shrinking Navbar beyond scroll of 525px
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    scroll > 525 ? $('nav').addClass('shrunken-nav') : $('nav').removeClass('shrunken-nav');
  });

  // Smooth scrolling for anchor tags
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    const target = this.hash;
    const $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  // Show seleted project in project container
  const projectTitles = ['Maze Explorer', 'Tomstagram', 'CRAVE', 'c o n t e n t'];
  const projectBlurbs = [
    'In my game the player navigates through a maze, picking up powerups along the way. I used jQuery to speed up the development, allowing me to concentrate on my game logic, adding features, and styling within the tight deadline.',
    'For my second project I decided to make an Instagram clone. The real challenge came in restricting access to certain actions on the site, so that, for example, you could only delete your own photos. I found it immensely satisfying successfully implementing the Filestack API.',
    'CRAVE satisfies your cravings on an A to B route by displaying restaurants, within a set radius, that cater to your particular mood. As we had a tight deadline we worked under an agile methodology. During morning stand ups we would show what we had been working on to ensure we all knew how the app worked. I focused mainly on the AngularJS 1 front end, and I’m particularly proud of the discreet animated navigation menu that I implemented.',
    'For my final project I decided to focus on a mobile first experience, delivering a competitive todo list for different content. I used React on the front end and Node.js on the back end. I integrated the Spotify and TMDB APIs on the back end, to fetch and display relevant imagery and metadata to the user. Insomnia was helpful for checking API calls, and testing was an effective way of ensuring the efficacy of my requests. I used Trello so that I would have an accurate impression of how long I was able to spend on tasks and to prioritise them sensibly.'];
  const projectLinks = ['https://maze-explorer-game.herokuapp.com/', 'https://tomstagram.herokuapp.com/', 'https://app-crave.herokuapp.com/', 'https://wdi-content.herokuapp.com/'];
  const githubLinks = ['https://github.com/TJK3O/WDI_LDN_PROJECT1', 'https://github.com/TJK3O/WDI_LDN_PROJECT2', 'https://github.com/TJK3O/WDI_LDN_PROJECT3', 'https://github.com/TJK3O/WDI_LDN_PROJECT4'];
  const projectDemos = ['maze-explorer.gif', 'tomstagram.gif', 'crave.gif', 'content.gif'];
  const blurbContainer = $('.project-blurb');
  const demoContainer = $('.project-demo-container');

  function selectProject(e){
    blurbContainer.empty();
    demoContainer.empty();
    blurbContainer
      .append( `<h1 class="">${projectTitles[e.target.value]}</h1>` )
      .append( `<p class="">${projectBlurbs[e.target.value]}</p>` )
      .append( `<a class="project-blurb-link" href="${projectLinks[e.target.value]}"><i class="fas fa-link"></i></a>` )
      .append( `<a class="project-blurb-link" href="${githubLinks[e.target.value]}"><i class="fab fa-github-square"></a>` );
    demoContainer
      .append( `<img src="images/${projectDemos[e.target.value]}" alt="website demo" class="demo-image" />` );
  }

  projectShowBtn.on('click', (e) => selectProject(e));
});
