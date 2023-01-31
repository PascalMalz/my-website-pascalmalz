

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
    `Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming`,
    `This Video shows a Project about the automated process of pouring wheat beer. The challenge was to program the
    movement of the KUKA robot in parallel to a Beckhoff PLC. In addition, the entire tool for swiveling the
    glass, operating/opening the beer bottle had to be designed and manufactured. 3D printing, machining and
    wiring were also part of this project.
    In this section I just discripe the engineering part of the project.
    The interface and the programms are discribed in the computer science section of this website.`,
    `/video/Pascal_Malz_Weizen_Einschenken_SS17_1.MP4`
);

//Array has to have same name as Slide Tag
Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming = [1]

class Beer{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Wheat_Beer_Process_Automation_with_KUKA_and_PLC_Interface_Programming.push(this);
    }

}

let beer1 = new Beer("/images/wheat_beer_0.jpg",



`This student research project describes the optimization of a wheat dispensing 
system consisting of an industrial robot in combination with a swivel table. It was written in the 
course of a practical semester at the Institute of Production Engineering at the Ostfalia University 
of Applied Sciences in Wolfenbüttel.`
                        );


let beer2 = new Beer("/images/start_state.jpg",

`On these images you can see the initial situation. The table in the top left corner will swiveling the glas.
It includes a customized controller (image bottom left) which controlls a stepper motor that allowes the mechanik to swiveling the glas.
In the top right corner you can see the KUKA robot. The initial beer cap opener you can find in the bottom right picture.
`
                        );

let beer3 = new Beer("/images/gripper.jpg",

`The existing gripper (see image bottom left) was changes to be adaptive.
Now you can easily change the shape of the gripper by a 3D printed elements. I also desinged one gripper to
force the bottle to stay always in the same height, which is importent to ensure a stable process, because its based on the position of the bottle.`
                        );

let beer4 = new Beer("/images/opener.jpg",

`I designed the opener of the bottle process-safe with an vertical cap opener system, but also to collect all the beer caps.
A rubber plate with a small recess was glued to the entrance, so that the caps
 do not fall down, but through the ramp into the container.`
                        );
 let beer5 = new Beer("/images/PLC.jpg",

`I replaced the customized controll by a PLC.
This PLC reads the value of the angle sensor and controlls the stepper motor, which swivls the construction.
Additionally the PLC can also be used to controll other systems.
Therefore I soldered four round standard plugs to connect with the PLC, to be prepared to connect with other systems. 
`
                        );
//New Project____________________________________________________________________________
let project2 = new Project(
    `SAP_ERP_Introduction`,
    `The background of this project was to migrate all SAP ERP instances of the company into a global single instance.
    The main goal of this project was to clean up the data of the Legacy SAP instance and transfer it into the existing global single instance. The challenge was also to adopt the 
    business processes for the target system. This project covered six sites in Germany (Alstom Transport Deutschland GmbH as well as Alstom Lokomotiven Services GmbH).
    Many other sites were already introduced into the system.`,
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
let project3 = new Project(
    `MES_Introduction`,
    `This project was about to introduce a MES but in this case a Service Excecution System, which manages
    the operational activities in the shopfloor. The system has an interface to a SAP ERP system.
    The operations which the operator in the shopfloor has to execute can be allocated by a supervisor or self allocated by the operator himself.
    Additionaly notifications and many more information can be created by the users and will be sent to the ERP system.
    So this system acts as a direct link between blue and white collars.`,
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
let project4 = new Project(
    `Digital_Board_Book_Maintainer_and_Customer_Fleet_Management`,
    `This project is about to replace an existing platform which manages the interface between a customer of 
    a rail vihicle fleet and the maintainer. The goal is to react more efficient on the customers needs 
    by providing a direct interface to the ERP System and the vihicle repoting system (HealthHub). 
    Additionaly the systems brings much more reporting tools.`,
    `/images/DBB_B2B.jpg`
);

//Array has to have same name as Slide Tag
Digital_Board_Book_Maintainer_and_Customer_Fleet_Management = [1]

class DBB{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Digital_Board_Book_Maintainer_and_Customer_Fleet_Management.push(this);
    }

}

let DBB1 = new DBB("/images/DMP_DBB.jpg",
`The tools to be introduced are the Digital Board Book and the Customer Portal.
The Digital Board Book is used to track the activities on the train, which are maintained by the staff on the vehicle.
The Customer Portal is used for the management of the fleet, by the white collar staff on customer side.
The maintainer uses for sure the ERP System and additionally the Customer Portal to exchange the required information.
Image source: https://www.globalrailwayreview.com/wp-content/uploads/ALSTOM-DMP-V13-cl_Sch%C3%A9ma-DEF-003.jpg`
                        );


//New Project____________________________________________________________________________

let project5  = new Project(
    `Introduction_Production_Feedback_System`,
    `The system which was to introduce can be categorized in the MES level.
    The feedback system was already developed and applied on other sites.
    My job was to introduce the application to one service site in Germany and to adopt the processes.
    `,
    `/images/SES_pyramide.jpg`
);

//Array has to have same name as Slide Tag
Introduction_Production_Feedback_System = [1]

class Vortex{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Introduction_Production_Feedback_System.push(this);
    }

}

let vortex1 = new Vortex("/images/RMS_iw41.jpg",

`The functions consist of (partial-)confirmation of operations with direct 
interface to SAP ERP and to record indirect hours in a separate database.
The confirmation logic is the same as in iw41, but the application is deticated developed for the operator in the shopfloor.
A part of this system was already in place to collect the attendance time of the operators per group.
Now that the system was introduced, a KPI could be created by calculating the difference of attendence time and confirmed time per group.`
                        );



//New Project____________________________________________________________________________
let project6 = new Project(
    `Vortex_Sinter_Process_Optimization`,
    `The goal of this project was to optimize a vortex sinter process which was applied at the Ostfalia University of Applied Science (including engineering).
    The existing table which was used to sinter the logo of the university. In cooperation with a kuka robot the process was fully automated.
    But some functions were not process save. The main issue was that the opener (pneumatic cylinder) of the oven was wrong adapted to the oven.
    It almost distroyed the construction, because of a very low angle, so almost the whole force was on the jont of the oven door. So I decided to engineer a new way to open the system which ended in a lot of interesting calculation.`,
    `/images/vortex.gif`
);

//Array has to have same name as Slide Tag
Vortex_Sinter_Process_Optimization = [1]

class SapGui{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Vortex_Sinter_Process_Optimization.push(this);
    }

}

let sapGui1 = new SapGui("/images/vortex_eng_opener_final.jpg",

`For the oven I decided to choose the construction as shown in the picture.
I created the whole oven in CAD and checked the possibilities.
I made a choice based on relaiability, availability, maintainability and safety.
But now I had to calculate the feasibility and the dimensions.`
                        );


let sapGui2 = new SapGui("/images/vortex_calc1.jpg",

`First I made a cut to calculate all the static values for each angle. This picture just shows one of them.
I worked myself like this through the whole construction and calculated the whole dependencies.`
                        );


let sapGui3 = new SapGui("/images/vortex_calc5.jpg",

`At the end of the calculation, where I assumed that the system is blocked I plotted the forces from each angle for 
each part of the construction. From this plot I could find out what the highest force on the system will be.
With a safety factor I could calculate which dimension / kind of material each single parts has to be.
So I had finally my proof of strength.
`
                        );

let sapGui4 = new SapGui("/images/vortex_eng_table.jpg",

`This picture shows the final version of the vortex synther system. 
The height that the robot has to cover is reduced, due to the fact, that the devices are now almost on one level.
All the weaknesses have been removed - now the process is stable. 
Additionally I made a power box prepared to connect to PLC.

`
                        );

//New Project____________________________________________________________________________                        
let project7 = new Project(
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

class Abap{
    constructor(src, text){
    this.src = src;
    this.text = text;
    SAP_GUI_Automation_with_VBA.push(this);
    }

}

let abap1 = new Abap("/images/Scripting_tracker.jpg",

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
-...
`
                        );



/* 
//New Project____________________________________________________________________________
let project8 = new Project(
    `Scissor_Lift_Table`,
    `Scissor_Lift_Table`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Scissor_Lift_Table = [1]

class Slf{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Scissor_Lift_Table.push(this);
    }

}

let slf1 = new Slf("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        );


let slf2 = new Slf("/images/Case_adjusted.png",

`Gallery_vortex_sinter 2`
                        );


let slf3 = new Slf("/images/trailerwatch_registration.jpg",

`Gallery_vortex_sinter 3`
                        );

let slf4 = new Slf("/images/AmiS_Mikroservice_Architecture_V2.png",

`Gallery_vortex_sinter 4`
                        );

let slf5 = new Slf("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 5`
                        );

//New Project____________________________________________________________________________
let project9 = new Project(
    `Hydraulic_Power_Unit`,
    `Hydraulic_Power_Unit`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Hydraulic_Power_Unit = [1]

class HPU{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Hydraulic_Power_Unit.push(this);
    }

}

let hpu1 = new HPU("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        );


let hpu2 = new HPU("/images/Case_adjusted.png",

`Gallery_vortex_sinter 2`
                        );


let hpu3 = new HPU("/images/trailerwatch_registration.jpg",

`Gallery_vortex_sinter 3`
                        );

let hpu4 = new HPU("/images/AmiS_Mikroservice_Architecture_V2.png",

`Gallery_vortex_sinter 4`
                        );

let hpu5 = new HPU("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 5`
                        );
//New Project____________________________________________________________________________
let project10 = new Project(
    `Gearbox`,
    `Gearbox`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Gearbox = [1]

class WebScraping{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Gearbox.push(this);
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
                        );
//New Project____________________________________________________________________________
let project11 = new Project(
    `Siemens_PLC_Automation`,
    `Siemens_PLC_Automation`,
    `/images/20161018_125654.jpg`
);

//Array has to have same name as Slide Tag
Siemens_PLC_Automation = [1]

class Kuka{
    constructor(src, text){
    this.src = src;
    this.text = text;
    Siemens_PLC_Automation.push(this);
    }

}

let kuka1 = new Kuka("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 1`
                        );


let kuka2 = new Kuka("/images/Case_adjusted.png",

`Gallery_vortex_sinter 2`
                        );


let kuka3 = new Kuka("/images/trailerwatch_registration.jpg",

`Gallery_vortex_sinter 3`
                        );

let kuka4 = new Kuka("/images/AmiS_Mikroservice_Architecture_V2.png",

`Gallery_vortex_sinter 4`
                        );

let kuka5 = new Kuka("/images/20161018_125654.jpg",

`Gallery_vortex_sinter 5`
                        ); */
