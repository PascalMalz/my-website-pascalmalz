projects = [];

class Project {
  constructor(title, content, mediaCover) {
    this.title = title;
    this.content = content;
    this.mediaCover = mediaCover;
    projects.push(this);
  }
}

let project1 = new Project(
  `General_Information`,
  `This website represents my digital CV. I developed everything from scratch.
    The website is running on my own server.
    I added some of my projects related to computer science and engeneering, but with a very high level description.
    In the "Summery - Time Line" you can track my career - it's refreshing automatically.
    Also I added a little game to prevent to get too bored :D.
    Feel free to contact me. You can find the dropdown for contact information in the top of this page.
    `,
  `/images/cv.png`
);

let project2 = new Project(
  `Developement_Information`,
  `I only used JavaScript, HTML and CSS. The website is running on my own server. 
    An Appache HTTP server is used on Linux Ubuntu 20.04.
    A SSL certificate is installed and gets updated every 90 days automatically.
    The projects pages are based on classes where each project is one instence and one gallery slide 
    one instence in the project. The images inside of the projects are transformed automatically based on the aspect ratio.
    The Summery - Time Line is based on Canvas - everything is absolute. One day equals one pixel.
    The background is changing with each refresh, because it is based on an algorithm I developed.
    The game is also based on canvas.
    I planned to setup the whole website as an Quarkus application with containers, but at some point I thought it's enough for now.
    `,
  `/images/dev_info.jpg`
);

let project3 = new Project(
  `Sources`,
  `Most of everything is designed by myself. Just these sources were used for two pictures: </br>
    https://tracker.stschnell.de/ 
    https://www.globalrailwayreview.com/wp-content/uploads/ALSTOM-DMP-V13-cl_Sch%C3%A9ma-DEF-003.jpg </br>
    The game is from this tutorial: </br>
    https://www.youtube.com/watch?v=eI9idPTT0c4&t=3913s
    `,
  `/images/clip.png`
);
