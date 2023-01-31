

projects = [];

class Project{
    constructor(title, content, mediaCover){
        this.title = title;
        this.content = content;
        this.mediaCover = mediaCover;
        projects.push(this);
    }
}

let project1 = new Project(
    `Microservice_vs_Monolith_with_Quarkus_Docker_Podman_and_Linux_Fedora`,
    `This project was developed in a course of the master's module Architectures of Modern 
    Information Systems. Within this group work, the goal was to develop and compare an application 
    as a microservice architecture and as a monolith. The application in this project is a streaming 
    platform for movie trailers, where users can register to watch, rate and comment on trailers. 
    In addition, users have a search function and the ability to manage their own favorites.`,
    `/images/Micro_vs_Mono.gif`
);

//Array has to have same name as Slide Tag
Microservice_vs_Monolith_with_Quarkus_Docker_Podman_and_Linux_Fedora = [1]

class MicroVsMono{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Microservice_vs_Monolith_with_Quarkus_Docker_Podman_and_Linux_Fedora.push(this);
    }

}

let micro1 = new MicroVsMono("/images/MS_Architecture.jpg",

`The microservice architecture consists of the four microservices (MS) Account, Film, Comment and Rating. 
The MS Account contains all the functions for registering and authenticating users. 
The Movie MS contains the files for the movie trailers and provides services to watch them and manage favorites.
 The Comment MS allows adding comments to a movie and the Rating MS handles the ratings of each movie.
The figure shows how the microservices communicate with the front end of the streaming platform. 
The arrows represent different events triggered by the user or when a new HTML page is loaded. 
The legend discribes the individual symbols.
`
                        );


let micro2 = new MicroVsMono("/images/Repo_account_IntelliJ.jpg",

`The Quarkus framework was chosen for the development of the MS architecture and the monolith.
 The frontend was created using HTML, CSS and JavaScript.
  The MS is accessed asynchronously via AJAX requests.
For the development of the backend the programming language Java was chosen. 
This offers a programming interface (API) for the development of RESTful web services, which is called JAX-RS.
 The backend design is based on the Data Access Object (DAO) design pattern, 
 which enables extensibility and easy exchange of data sources. 
 A PostgreSQL database was used to store the data. `
                        );


let micro3 = new MicroVsMono("/images/docker.jpg",

`In this figure you can see the docker application, which is used to test the MS architecture on Windows, but
the technical target environment of the project is a virtual machine with Linux Fedora operating system. 
The deployment and operation of the application took place in Podman containers. 
The architecture of the containers is such that the respective Quarkus web application runs in 
its own container, based on a ubi8-minimal image with OpenJDK 11. 
The databases also run in their own container, based on the latest Postgres image. 
All containers are integrated into a network, so that communication between the MS and the databases is possible.
The deployment in the monolithic system then consists of only one container with the Quarkus
application and one container with the entire PostgreSQL database.
`
                        );

let micro4 = new MicroVsMono("/images/film_view.jpg",

`This picture shows the GUI for the the movie microservice. It provides a REST interface for the details of the respective movies,
 as well as the favorites of a user. Besides the REST interface, 
 the MS also provides the video files and the images for the trailers on the file system of the MS. 
 Furthermore, the frontend in the form of HTML and JavaScript files for the main view, 
 the interface for playing the trailers and the view of the favorites and search results are deployed on this MS.
The process is such that after successfully logging in, 
the user is redirected to the main page of the streaming platform, 
where an overview of all trailers in the system is displayed. 
The user can click on the image of a film to view the trailer for that film or click on the heart
button to add the film to their favorites. On the web page for playing the trailer,
the Comment and Rating MS are also contacted to determine the comments and rating via REST.
Using the navigation bar, users can view their favorites or search for movies using the search box.
The results of the search are also determined by the MS via REST and sent to the frontend in JSON format. `
                        );



//New Project____________________________________________________________________________
let project2 = new Project(
    `Linux_Server_Hosting`,
    `I decided to host my own servers to build, test and deploy scalable applications. 
    Security and scalability were especially important to me. 
    I implemented the database security with basic UFW settings and accesses via RSA, among other security settings. 
    The scalability is given by the cloud architecture. 
    In the future, I would like to work more with micro services to be more flexible and 
    to increase scalability.
    `,
    `/images/Server.gif`
);

//Array has to have same name as Slide Tag
Linux_Server_Hosting = [1]

class Linux{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Linux_Server_Hosting.push(this);
    }

}

let linux1 = new Linux("/images/Server_overview.jpg",

`As you can see from the picture, I have two servers. 
The cloud server I use to host the current website. 
The dedicated cloud server is used to run a development environment via a GUI (xrdp). 
Among other things, I use Android Studio and MySQL to create Android apps.`
                        );


let linux2 = new Linux("/images/SSH.jpg",

`The login to the cloud server where I host my website is done via a public RSA key.
 I have installed an Apache2 server. 
 The necessary firewall settings were made for the HTTPS connections and corresponding 
 redirects were set in the Apache2 configuration files. Furthermore, the certificate 
 was created via Let's Encrypt, which is renewed every 30 days.
 I mainly use SSH or WinSCP to connect, configure and exchange files.`
                        );


let linux3 = new Linux("/images/Dev_server.jpg",

`The dedicated cloud server is accessed via RDC. 
On this picture you can see the GUI of Linux Ubuntu 20.04.
 The application exemplifies Android Studio as a development environment.`
                        );


//New Project____________________________________________________________________________
let project3 = new Project(
    `Django_Web_App`,
    `This was a small project to setup Django with MySQL and to create an app to create polls and questopns, to find at: <a href="https://docs.djangoproject.com/en/3.2/intro/tutorial01/">Djangoproject</a> `,
    `/images/Django_admin.jpg`
);

//Array has to have same name as Slide Tag
Django_Web_App = [1]

class Django{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Django_Web_App.push(this);
    }

}

let django1 = new Django("/images/Django_poll.jpg",

`The admin view is very useful and easy to setup.
In this picture I changed the question which is stored in the database.
I think Django is a fantastic framework to setup professional web apps.
The reuseable templates and the easy way to use and setup an application is brilliant.
I will use Django for my next project, also because I am a fan of Python`
                        );


//New Project____________________________________________________________________________
/* let project4 = new Project(
    `Spring_UNI_Web_App`,
    `Spring_UNI_Web_App`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Spring_UNI_Web_App = [1]

class Spring{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Spring_UNI_Web_App.push(this);
    }

}

let spring1 = new Spring("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        );


let spring2 = new Spring("/images/Case_adjusted.png",

`Gallery_vortex_sinter 2`
                        );


let spring3 = new Spring("/images/trailerwatch_registration.jpg",

`Gallery_vortex_sinter 3`
                        );

let spring4 = new Spring("/images/AmiS_Mikroservice_Architecture_V2.png",

`Gallery_vortex_sinter 4`
                        );

let spring5 = new Spring("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 5`
                        ); */


//New Project____________________________________________________________________________
let project5 = new Project(
    `SAP_GUI_Automation_with_VBA`,
    `I applied a lot of SAP GUI scripting in combination with VBA to upload and change data in the SAP ERP system in mass.
    GUI scripting is especially usefull in the following cases: <br>
    -Huge amount of data has to be changed / loaded <br>
    -Calculating data from SAP while running the script <br>
    -Handeling of error messages <br>
    -Live status of the modified data <br>
    -No existing LSMW access <br>

    Because I dont want to show sensitive data of my employer I linked this video here:
    <a href="https://www.youtube.com/watch?v=BZeBFqZOKQg">SAP GUI Scripting</a>`,
    `/images/SAP_GUI.gif`
);

//Array has to have same name as Slide Tag
SAP_GUI_Automation_with_VBA = [1]

class SapGui{
    constructor(src, text){
    this.src = src;
    this.text = text;
    SAP_GUI_Automation_with_VBA.push(this);
    }

}

let sapGui1 = new SapGui("/images/Scripting_tracker.jpg",

`To speed up the workflow I recomend to use the SAP GUI Scripting Tracker (https://tracker.stschnell.de/) to figure out the fields / objects I want to fill / modify.
First I did the job for one object manually and recorded the script. Additionally I made a plan to handle errors.
Then I filled the Excel sheet with the requiered data and added the VBA script.
Afterwards I tested the script in the test system. When the script was processed save, I applied it in production.
These were some cases where I applied the task list:
-Extension of material numbers to another plant
-Upload of task lists with (sub)operations, measurement documents, PRT's maintenance packages...
-Upload of maintenance plans
-Updade of functional locations
-Starting of multi caounter maintenance plans
-Deltetion of functional locations
-...`
                        );



//New Project____________________________________________________________________________                        
let project6 = new Project(
    `ABAP_and_ABAP_OO_Certification`,
    `These courses consist of two parts. ABAP Introduction and ABAP for Advanced.
    The workload of each course is 150 - 180 hours and was done in part-time. This
    corresponds to 12 credit points according to the European Credit
    System (ECTS). The proof of achievement for the Certificate from the University of Duisburg-Essen
    consists of the successful completion of all case studies of the course.`,
    `/images/ABAP.gif`
);

//Array has to have same name as Slide Tag
ABAP_and_ABAP_OO_Certification = [1]

class Abap{
    constructor(src, text){
    this.src = src;
    this.text = text;
    ABAP_and_ABAP_OO_Certification.push(this);
    }

}

let abap1 = new Abap("/images/ABAP_Web_Dynpro.jpg",

`The goal of these courses are to impart
advanced concepts for the deepening of the technical
and methodical qualification of specialists who work in the field of
object-oriented programming in SAP ERP using ABAP.
`
                        );


let abap2 = new Abap("/images/ABAP_report.jpg",

`The picture shows a programm for a report as an example for the basic course. 
Below the content of this first course.
Basic introduction to ABAP, with the main focus on
- Data types, operators and control structures
- Modularization (include files, forms, function modules)
- Working with the development environment
Data Dictionary and databases, with emphasis on
- Domains, data elements, structures and table types
- Database tables and views
- Database accesses, esp. with Open SQL
Design of screen interfaces, with the emphasis on
- List processing and selection screens
- Programming of screens
- Dynamic customizations and subscreens
- Input checks, search helps and locks
Technical background, with emphasis on
- Logical units of work and transactions
- Program calls and memory management
In-depth, multi-part case study on the previously mentioned
Content, supplemented by the creation of simple Business Server Pages
Introduction to object-oriented programming with ABAP, with a focus on
- Objects and classes
- Modeling with UML`
                        );


let abap3 = new Abap(
"/images/ABAP_Web_Dynpro.jpg",

`This image shows a dinamical web program which is developed whith the help of object-orientated programming 
and was coverd in another second course for advanced.
Below the content of this second course.
Object-oriented programming concepts, with emphasis on
- Inheritance
- Abstract classes and interfaces
- Event processing
Tools and special concepts of the object-oriented programming, with the emphasis
- Global classes with the Class Builder
- Patterns and friendship relations
- Shared Objects
- Class-based exceptions
Customization of the SAP system, with a focus on
- Customer exits
- Classic Business Add Ins
- Modifications
- Modifications due to the new enhancement concept
Web Dynpro, with the main focus on
- Controllers, Contexts and Views
- Programming in Components
- Internationalization and messages
Further deepening concepts, with the emphasis on
- ALV Grid Control
- ABAP and Unicode
- Dynamic programming with field symbols and data references`);

let abap4 = new Abap("/images/ABAP_files.jpg",

`After successful completion of the course, over 150 full functional programs were created. 
Those had to work without errors and had to be validated by the person responsible for the course.
In the picture you can see the files with ID = 1497 for the course Introduction to ABAP and
files with ID = 3348 for the course ABAP for Advanced.`
                        );


//New Project____________________________________________________________________________
let project7 = new Project(
    `SAP_ERP_Introduction`,
    `The background of this project was to migrate all SAP ERP instances of the company into a global single instance.
    The main goal of this project was to clean up the data of the Legacy SAP instance and transfer it into the existing global single instance. The challenge was also to adopt the 
    business processes for the target system. This project covered six sites in Germany (Alstom Transport Deutschland GmbH as well as Alstom Lokomotiven Services GmbH).
    Many other sites were already introduced into the system.
    `,
    `/images/SAP_Intro_Project_Plan.jpg`
);

//Array has to have same name as Slide Tag
SAP_ERP_Introduction = [1]

class Sap{
    constructor(src, text){
    this.src = src;
    this.text = text;
    SAP_ERP_Introduction.push(this);
    }

}

let sap1 = new Sap("/images/SAP_Intro_Objects.jpg",

`In this project, I had the role as a key user in addition to my position 
as Project Manager for Maintenance Tools. I was responsible for two sites. The project was divided into different streams
where I was allocated to the Manufacturing (MN) and the Service Stream (SE).
For the first site, I was in charge of the material numbers and the documents and document URL's in the MN stream.
For the BOMs and routings, I was responsible for the second site.
In the Service Stream, I was in charge of all Service Objects for both sites, with the exception of objects related to warranty.
`
                        );



//New Project____________________________________________________________________________
let project8 = new Project(
    `MES_Introduction`,
    `This project was about to introduce a MES but in this case a Service Excecution System, which manages
    the operational activities in the shopfloor. The system has an interface to a SAP ERP system.
    The operations which the operator in the shopfloor has to execute can be allocated by a supervisor or self allocated by the operator himself.
    Additionaly notifications and many more information can be created by the users and will be sent to the ERP system.
    So this system acts as a direct link between blue and white collars.
    `,
    `/images/SES_pyramide.jpg`
);

//Array has to have same name as Slide Tag
MES_Introduction = [1]

class Ses{
    constructor(src, text){
    this.src = src;
    this.text = text;
    MES_Introduction.push(this);
    }

}

let ses1 = new Ses("/images/DMP_SES.jpg",

`The project is part of the Dynamic Maintenance Planning (DMP) Roadmap.
The goal is to increase the efficiency and quality of maintenance of a fleet of rail vehicles.
I successfully introduced the system in two service sites in Germany.
Image source: https://www.globalrailwayreview.com/wp-content/uploads/ALSTOM-DMP-V13-cl_Sch%C3%A9ma-DEF-003.jpg`
                        );




//New Project____________________________________________________________________________
let project9 = new Project(
    `Digital_Board_Book_for_Fleet_Management_between_Maintainer_and_Customer`,
    `This project is about to replace an existing platform which manages the interface between a customer of 
    a rail vihicle fleet and the maintainer. The goal is to react more efficient on the customers needs 
    by providing a direct interface to the ERP System and the vihicle repoting system (HealthHub). 
    Additionaly the systems brings much more reporting tools.
 `,
    `/images/DBB_B2B.jpg`
);

//Array has to have same name as Slide Tag
Digital_Board_Book_for_Fleet_Management_between_Maintainer_and_Customer = [1]

class Dbb{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Digital_Board_Book_for_Fleet_Management_between_Maintainer_and_Customer.push(this);
    }

}

let dbb1 = new Dbb("/images/DMP_DBB.jpg",

`The tools to be introduced are the Digital Board Book and the Customer Portal.
The Digital Board Book is used to track the activities on the train, which are maintained by the staff on the vehicle.
The Customer Portal is used for the management of the fleet, by the white collar staff on customer side.
The maintainer uses for sure the ERP System and additionally the Customer Portal to exchange the required information.
Image source: https://www.globalrailwayreview.com/wp-content/uploads/ALSTOM-DMP-V13-cl_Sch%C3%A9ma-DEF-003.jpg`
                        );


/* 
//New Project____________________________________________________________________________
let project10 = new Project(
    `Web_Scraping_with_Python`,
    `Web_Scraping_with_Python`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Web_Scraping_with_Python = [1]

class WebScraping{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Web_Scraping_with_Python.push(this);
    }

}

let webScraping1 = new WebScraping("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        );


let webScraping2 = new WebScraping("/images/Case_adjusted.png",

`Gallery_vortex_sinter 2`
                        );


let webScraping3 = new WebScraping("/images/trailerwatch_registration.jpg",

`Gallery_vortex_sinter 3`
                        );

let webScraping4 = new WebScraping("/images/AmiS_Mikroservice_Architecture_V2.png",

`Gallery_vortex_sinter 4`
                        );

let webScraping5 = new WebScraping("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 5`
                        ); */
//New Project____________________________________________________________________________
let project11 = new Project(
    `Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming`,
    `This Video shows a Project about the automated process of pouring wheat beer. The challenge was to program the
    movement of the KUKA robot in parallel to a Beckhoff PLC. In addition, the entire tools for swiveling the
    glass, to operate and open the beer bottle had to be designed and manufactured. 3D printing, machining and
    wiring were also part of this project. In the following slides I will give an overview over the PLC and KUKA development.
    German was the languge to use for the development, to be more easy to be introduced to trainees.
    Thats also the reason why you can find so much comments between the code.
    `,
    `/video/Pascal_Malz_Weizen_Einschenken_SS17_1.MP4`
);

//Array has to have same name as Slide Tag
Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming = [1]

class Kuka{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming.push(this);
    }

}

let kuka1 = new Kuka("/images/KUKA_TWINCAT_Haupt.jpg",

`The function of the PLC is developed with TwinCAT 3 eXtended Automation. 
The figure shows the main function which calls the subfunctions:
-DP_IN_OUT() serves the interface between the KUKA robot and the PLC
-Allgemein() sets CPU depending links
-Winkelberechnung() calculates the angle of the swiveled glas
-Motor_Ausgangsposition() moves the glas to the start angle
-Kuka_Werte_Einlesen initializes the values coming from the robot control
-Fehleigaben() is creating error messages in case of wrong set initial values
-Fahren_in_Schritten() triggers the stepper motor
`
                        );


let kuka2 = new Kuka("/images/KUKA_TWINCAT_conf.jpg",

`This figure shows the configuration of the PLC. 
The functions of the previous slide are bound to individual task times. 
Within these task times a function is processed continuously. 
The task time of the main is set to 6 ms, the visualization to 200 ms and the task time of the 
function that controls the stepper motor is set to 0.2 ms. 
These tasks are linked to the corresponding function. 
This is especially important for the speed of the motor, 
because the difference between the controlled steps cannot be faster than 0.2 ms.
`
                        );


let kuka3 = new Kuka("/images/KUKA_TWINCAT_TAKT.jpg",

`This figure shows the program for the realization of the motor clock. 
Here a case function is used, which determines after how many program runs the motor clock is to be set. 
Thus the clock speed is realized via the variable 
gvl_weizen.geschwindigkeit (value=4 highest speed to value=44 lowest speed). `
                        );

let kuka4 = new Kuka("/images/KUKA_Winkel.jpg",

`This figure shows the function which converts the voltage read of the sensor into the corresponding angle. 
First, the current analog value, i.e. the integer value of the terminal, is read into the variable calculation 
memory. This converts the integer value into a real value. With this it is possible to calculate in the decimal 
range, whereby the accuracy of the calculation is increased. 
Then this value is divided by the maximum integer value of the terminal. 
Here the factor is formed, which multiplied by the maximum voltage resolution (10 V)
 corresponds to the currently applied voltage. Subsequently, 0.5 V 
 (offset according to the diagram in the lower figure) is subtracted from this voltage. 
 This value multiplied by 360 °/4 V (corresponding to 90 °/1 V) minus the angle offset 
 (depending on how the magnet is mounted offset to the sensor side) results in the current 
 angle of the rotary table.
`
                        );

let kuka5 = new Kuka("/images/KUKA_TWINCAT_Kollisionsfunktion.jpg",

`The figure shows the collision function, which is located in the function Motor_Control. 
This causes an abort of the clock control of the motor, if an expected angle range is not reached in given steps. 
The function Fahren_in_Schritten is used for this purpose. Hereby the angle per step is determined. 
This is thus the expected angle range. In the collision function, after 500 steps (drive compensation), 
it is compared whether the desired angle range is reached after 200 steps. 
The value 0.002°/step has proven to be process-safe.`
                        );

let kuka6 = new Kuka("/images/KUKA_TWINCAT_INTERFACE_KUKA.jpg",

`This figure shows the function Kuka_Werte_Einlesen. 
In this function the digital output and input values between PLC and robot are stored in variables. 
Since the outputs are not sufficient, Inputvar[1] and Inputvar[4] are rounded. 
This means a division of 16 bits to 2x8 bits. 
The first and the last 8 bits are filtered out and stored individually on two different variables.`
                        );

let kuka7 = new Kuka("/images/KUKA_Haupt.jpg",

`First, the left main was created to move the individual points independently of the PLC. 
This was the basis to determine the positions for the main function on the right side, 
which serves as communication between PLC and KUKA to wait for the continuation --> Handshake. 
The program Haupt_Handshake thus calls the subprograms of the handshake mode. 
The program Alles_Rücksetzen() resets the digital outputs of the robot controller. 
It also moves to the initial position of the wheat beer table and resets any variables of the PLC except
 for the collision variables. 
Left_Hanshake() moves the table to the pouring position. 
Greifen() moves the robot to the bottle and performs the grasping motion. 
Oeffnen() is used to remove the capsule from the bottle. 
Einschenken_Handshake() performs the pouring motion in position coordination with the PLC. 
Hefe() performs the movement to swing the remaining yeast out of the bottle and pour it in. 
Abstellen() returns the bottle to the starting position.
For the KUKA robotic development I used the OrangeEditor from OrangeApps GmbH.`
                        );

let kuka8 = new Kuka("/images/Kuka_Handshake.jpg",

`The subroutine Einschenken_Handshake(), as can be seen in the figure, is used for synchronous 
position attainment of the table (via PLC) and the robot. If the robot operator stops the program 
execution, the table waits for the signal to continue. This is a further safeguard to avoid a collision. 
As soon as the three seconds (line 17) have elapsed, the signal to move to home position is given by 
the binary combination. As soon as the robot reaches position 21 (line 42), it waits until the table 
reaches the required angle (line 42). The process is repeated until the beer is poured.`
                        );
//New Project____________________________________________________________________________
/*let project12 = new Project(
    `Export_IBM_Lotus_Notes_Database_with_VBA`,
    `Export_IBM_Lotus_Notes_Database_with_VBA`,
    `/images/20161018_125654.jpg`
);

 //Array has to have same name as Slide Tag
Export_IBM_Lotus_Notes_Database_with_VBA = [1]

class Lotus{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Export_IBM_Lotus_Notes_Database_with_VBA.push(this);
    }

}

let lotus1 = new Lotus("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        ); */


