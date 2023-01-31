
events = []

class MyEvent{
    constructor(name, startDate, endDate, activityType, description){
    if(typeof activityType === "undefined"){activityType = "default";}
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.activityType = activityType;
    this.description = description;
    events.push(this)
};
};

let myEvent1L = new MyEvent("Computer Science", "01.09.2018" , "today","",
`Master in Computer Science at Ostfalia - University of Applied Science, Braunschweig / Wolfenbüttel, Germany<br>
I specialized in the following topics:
<ul>
<li>
Software Architecture
</li>
<li>
Database Technologies
</li>
<li>
Automotive Systems
</li>
<li>
Artificial Intelligence
</li>
<li>
IT Security
</li>
<li>
Image Processing and Augmented Reality
</li>
</ul>
`)

 let myEvent1_bL = new MyEvent("ABAP", "01.05.2018", "01.09.2018","",
 `Consultant Certifications: SAP ABAP OO / ERP S/4HANA at University Duisburg / Essen, Germany<br> 
<ul>
<li>
Duration of 500 hours in addition to a full-time job
</li>
<li>
Developed more than 150 programs
</li>
<li>
Tasks and code were assessed by a tutor and approved on success
</li>
<li>
Tasks regarding the ERP course covered the whole cycle from the creation of customer master data, supply chain, industrial and production activities to financial processing</li>
</ul>
 After successfully completing all the exercises within this period, I received the certifications.
`)

let myEvent2L = new MyEvent("Engineering", "01.09.2014", "01.05.2018","",
`Mechanical Engineering at Ostfalia - University of Applied Science, Braunschweig / Wolfenbüttel, Germany<br>
Major: Production Management<br>
My favorite tasks were to digitize processes and create something that is scalable, durable and reusable.
What I appreciated the most is that I improved my math and programming skills a lot, but also deepen my knowledge in Production Management.
`)

let myEvent3L = new MyEvent("Bachelor Prof. of Metal Production and Management (CCI)", "01.01.2013", "01.02.2014","",
 `Bachelor Professional in Metal Production and Management at IHK Lüneburg-Wolfsburg, Germany <br>
As a mechatronics technician in production, I was responsible for assembling and testing the brake systems and door systems of a rail vehicle.
<ul>
<li>
People Management
</li>
<li>
Production Management
</li>
<li>
Business Law
</li>
<li>
Work Organization
</li>
<li>
Economics
</li>
</ul>
`)

let myEvent4L = new MyEvent("Mechatronic Technician vocational training", "01.09.2009", "01.01.2013","",
 `Vocational training to become a mechatronic technician at Alstom Transport Deutschland GmbH<br>
 During this training, I learned how to process metal and how to design and calculate electronic devices. Especially the automation of whole processes by programming PLC or CNC was my favorite part.`)

let myEvent5L = new MyEvent("Secondary school", "01.09.2007", "01.06.2009","",
 `The starting point was not the highest, but therefore my overall progress is elevated.`)


let myEvent1R = new MyEvent("Digital Tools Development Manager", "01.12.2021" , "today", "work",
`Digital Tools Development Manager Services DACH - Germany / Switzerland / Austria<br>
BID management, project management, sales, engineering, development and rollout of digital tools:
<ul>
<li>
Implement digital solution development strategy based on specific customer needs and requirements
</li>
<li>
Support the Digital Business Lead defining the tactical plan for business development
</li>
<li>
Primary interface to the central platform and to internal and external stakeholders regarding development of digital solutions and tools in DACH Services
</li>
<li>
Support the development of digital solutions in tenders and sales proactively and on demand
</li>
<li>
Project Management for digital solution projects in the DACH region
</li>
<li>
Influencing the product development of digital solutions in collaboration with the product owners and the development teams
</li>
</ul>
`)


let myEvent2R = new MyEvent("Project Manager Maintenance Tools", "01.11.2019" , "01.12.2021", "work",
`Project Manager for Maintenance Tools at Alstom Transport Deutschland GmbH, Braunschweig, Germany<br>

BID management, project management, development and rollout of digital tools
<ul>
<li>
Implementation and development of MES (Manufacture Execution System) with interface to SAP
</li>
<li>
Introduction and development of B2B Salesforce solutions
</li>
<li>
Design of new MES Solution
</li>
<li>
Introduction of a new SAP ERP Instance within the core team</li>
</li>
</ul>

`)

let myEvent3R = new MyEvent("Planning Engineer and Lean Coordinator ", "01.04.2019", "01.11.2019", "work",
`Planning Engineer and Lean Coordinator at Alstom Transport Deutschland GmbH, Braunschweig, Germany<br>
<ul>
<li>
Site lean management (Domains: Industrial, Project Management, Engineering, Quality, Shop Floor, Supply Chain)
</li>
<li>
Extracting and rebuilt databases
</li>
<li>
GUI automation
</li>
<li>
Process Management
</li>
<li>
Administration of MES (Manufacture Execution System)
</li>
</ul>

`)

let myEvent4R = new MyEvent("Planning Engineer", "01.04.2018", "01.04.2019", "work",
 `Planning Engineer at Alstom Transport Deutschland GmbH in the industrial department, Braunschweig, Germany<br>
<ul>
<li>
Introduction and administration of MES (Manufacture Execution System)
</li>
<li>
Optimization of department internal processes
</li>
<li>
Project execution (service order management, shop floor support)
</li>
</ul>
 `)

let myEvent5R = new MyEvent("Scientific Assistant", "01.08.2016", "01.02.2017", "work",
`Scientific Assistant at Ostfalia - University of Applied Science, Braunschweig / Wolfenbüttel, Germany<br>
<ul>
<li>
Designed more than 100 parts with PTC Creo Parametric (CAD)
</li>
<li>
Developed PLC (programmable logic controller) and robotic programs
</li>
<li>
Improved full automated processes
</li>
</ul>
`)

let myEvent6R = new MyEvent("Mechatroniker", "01.02.2013", "01.08.2014", "work",
`Mechatronic Technician at Alstom Transport Deutschland GmbH in the production line, Salzgitter, Germany<br>
As a mechatronic technician in the production I was responsible to assembly and testing of the breaking systems and the door systems of a train vehicle. 
`)


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0'); //January = 0
var yyyy =  today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;


