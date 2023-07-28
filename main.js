import '/public/style.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import TomSelect from 'tom-select';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

let colors = [
  "#1C737F", // Slightly darker shade of "#00AABB"
  "#008B91", // Slightly darker shade of "#00CED1"
  "#2E4C9A", // Slightly darker shade of "#4169E1"
  "#5EAB4E", // Slightly darker shade of "#7CFC00"
  "#6B0000", // Slightly darker shade of "#800000"
  "#704A11", // Slightly darker shade of "#8B4513"
  "#9B2E95", // Slightly darker shade of "#C036BB"
  "#AB861C", // Slightly darker shade of "#DAA520"
  "#B20000", // Slightly darker shade of "#FF0000"
  "#B24300", // Slightly darker shade of "#FF4500"
  "#C71585", // Slightly darker shade of "#FF69B4"
  "#DB7500", // Slightly darker shade of "#FF8C00"
  "#D7AF00", // Slightly darker shade of "#FFD700"
  "#FF1A6B", // Slightly darker shade of "#FF1493"
  "#007B00", // Slightly darker shade of "#00FF00"
  "#00AC74", // Slightly darker shade of "#00FF7F"
  "#70AD00", // Slightly darker shade of "#7FFF00"
  "#D400D4", // Slightly darker shade of "#FF00FF"
  "#DA00DA", // Slightly darker shade of "#FF00FF"
  "#FF502A", // Slightly darker shade of "#FF5733"
]


console.log(colors);


let courses = {"AE103": {"Code": "AE103", "Name": "A historical perspective of Aerospace Engineering", "Venue": "Class : CL 102 ESE\t\t\t\tFullSemester", "Slots": ["11B", "11A"], "Instructors": ["Chandra S. Yerramalli"], "Division": null}, "AE152": {"Code": "AE152", "Name": "Introduction to Aerospace Engg.", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["A.M.Pradeep"], "Division": null}, "AE153-M": {"Code": "AE153-M", "Name": "Introduction to Aerospace Engg.", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["A.M.Pradeep"], "Division": "M"}, "AE223": {"Code": "AE223", "Name": "Thermodynamics and Propulsion", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sudarshan Kumar"], "Division": null}, "AE223-M": {"Code": "AE223-M", "Name": "Thermodynamics and Propulsion", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sudarshan Kumar"], "Division": "M"}, "AE227": {"Code": "AE227", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Krishnendu  Haldar"], "Division": null}, "AE227-M": {"Code": "AE227-M", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Krishnendu  Haldar"], "Division": "M"}, "AE229": {"Code": "AE229", "Name": "Introduction to Aerodynamics and Propulsion Laboratory", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Dhwanil  Shukla", "P. Ramachandran", "Sudarshan Kumar"], "Division": null}, "AE231": {"Code": "AE231", "Name": "Introduction to Aerospace Structures and Control  Laboratory", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Arnab Maity", "Arya Hemendra", "Krishnendu  Haldar"], "Division": null}, "AE234": {"Code": "AE234", "Name": "Aircraft Propulsion", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Hrishikesh Gadgil"], "Division": null}, "AE236": {"Code": "AE236", "Name": "Compressible Fluid Mechanics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Vineeth Nair"], "Division": null}, "AE308-M": {"Code": "AE308-M", "Name": "Control Theory", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Arnab Maity"], "Division": "M"}, "AE308-S1": {"Code": "AE308-S1", "Name": "Control Theory", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Shashi Ranjan Kumar"], "Division": "S1"}, "AE308-S2": {"Code": "AE308-S2", "Name": "Control Theory", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Arnab Maity"], "Division": "S2"}, "AE314": {"Code": "AE314", "Name": "Aircraft Structures Laboratory", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Krishnendu  Haldar"], "Division": null}, "AE326": {"Code": "AE326", "Name": "Vibrations and Structural Dynamics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Abhijit  Gogulapati"], "Division": null}, "AE326-M": {"Code": "AE326-M", "Name": "Vibrations and Structural Dynamics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Abhijit  Gogulapati"], "Division": "M"}, "AE330": {"Code": "AE330", "Name": "Aerospace Propulsion", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Kowsik V R Bodi"], "Division": null}, "AE330-M": {"Code": "AE330-M", "Name": "Aerospace Propulsion", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Kowsik V R Bodi"], "Division": "M"}, "AE333": {"Code": "AE333", "Name": "Aerodynamics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Viren Menezes"], "Division": null}, "AE333-M": {"Code": "AE333-M", "Name": "Aerodynamics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Viren Menezes"], "Division": "M"}, "AE407": {"Code": "AE407", "Name": "Modelling and Simulation", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Arya Hemendra", "Harshad  Khadilkar"], "Division": null}, "AE407-M": {"Code": "AE407-M", "Name": "Modelling and Simulation", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Harshad  Khadilkar", "Arya Hemendra"], "Division": "M"}, "AE410": {"Code": "AE410", "Name": "Navigation and Guidance", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Mangal  Kothari"], "Division": null}, "AE410-M": {"Code": "AE410-M", "Name": "Navigation and Guidance", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Mangal  Kothari"], "Division": "M"}, "AE429": {"Code": "AE429", "Name": "Aircraft Design Project", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Avijit Chatterjee", "Ganapathi  Bhat"], "Division": null}, "AE501": {"Code": "AE501", "Name": "Virtual Instrumentation for Aerospace Engineers", "Venue": "FullSemester", "Slots": ["7B", "L1", "7A"], "Instructors": ["Chandra Sekar  Thyagarajan"], "Division": null}, "AE607": {"Code": "AE607", "Name": "Aerospace Propulsion Laboratory", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Nagendra  Kumar"], "Division": null}, "AE611": {"Code": "AE611", "Name": "Aerodynamics Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Aniruddha Sinha", "Dhwanil  Shukla", "Mandal J.C.", "Viren Menezes", "Vineeth Nair"], "Division": null}, "AE616": {"Code": "AE616", "Name": "Gas Dynamics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Vineeth Nair"], "Division": null}, "AE623": {"Code": "AE623", "Name": "Computing  of Turbulent Flows", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Krishnendu Sinha"], "Division": null}, "AE641": {"Code": "AE641", "Name": "Introduction to Navigation and Guidance", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Mangal  Kothari"], "Division": null}, "AE649": {"Code": "AE649", "Name": "Finite Element Method", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["P J Guruprasad"], "Division": null}, "AE651": {"Code": "AE651", "Name": "Aerodynamics of Compressors and Turbines", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["A.M.Pradeep"], "Division": null}, "AE667": {"Code": "AE667", "Name": "Rotary Wing Aerodynamics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Dhwanil  Shukla"], "Division": null}, "AE681": {"Code": "AE681", "Name": "Combustion of Solid Propellants", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Nagendra  Kumar"], "Division": null}, "AE695": {"Code": "AE695", "Name": "State Space Methods for Flight Vehicles", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Rohit  Gupta"], "Division": null}, "AE699": {"Code": "AE699", "Name": "Control Systems Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Arnab Maity", "Arya Hemendra", "Shashi Ranjan Kumar", "Rohit  Gupta"], "Division": null}, "AE705": {"Code": "AE705", "Name": "Introduction to Flight", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["A.M.Pradeep"], "Division": null}, "AE707": {"Code": "AE707", "Name": "Aerodynamics of Aerospace Vehicles", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Aniruddha Sinha"], "Division": null}, "AE708": {"Code": "AE708", "Name": "Aerospace Propulsion", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Kowsik V R Bodi"], "Division": null}, "AE709": {"Code": "AE709", "Name": "Aerospace Structures", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Mujumdar P. M."], "Division": null}, "AE711": {"Code": "AE711", "Name": "Aircraft Propulsion", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Hrishikesh Gadgil"], "Division": null}, "AE715": {"Code": "AE715", "Name": "Structural Dynamics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Mujumdar P. M."], "Division": null}, "AE720": {"Code": "AE720", "Name": "Advanced Numerical Methods for Compressible Flows", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Mandal J.C."], "Division": null}, "AE725": {"Code": "AE725", "Name": "Air Transportation", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Pant R.K."], "Division": null}, "AE727": {"Code": "AE727", "Name": "Aircraft Structural Mechanics Lab.", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Chandra S. Yerramalli"], "Division": null}, "AE775": {"Code": "AE775", "Name": "System Modelling Dynamics and Control", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Shashi Ranjan Kumar"], "Division": null}, "AE780": {"Code": "AE780", "Name": "Computational Heat Transfer and Fluid Flow", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Ganapathi  Bhat"], "Division": null}, "AE899": {"Code": "AE899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhijit  Gogulapati", "Hrishikesh Gadgil"], "Division": null}, "BB101-D1": {"Code": "BB101-D1", "Name": "Biology", "Venue": "Class Room : LH 101\t\t\t\tFullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ranjith P.", "Patankar Swati"], "Division": "D1"}, "BB101-D2": {"Code": "BB101-D2", "Name": "Biology", "Venue": "Class Room : LC 101\t\t\t\tFullSemester", "Slots": ["10B", "10A"], "Instructors": ["Ranjith P.", "Patankar Swati"], "Division": "D2"}, "BB402": {"Code": "BB402", "Name": "Cell Biology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["S. Ghosh"], "Division": null}, "BB405": {"Code": "BB405", "Name": "Molecular Biology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Sreelaja  Nair"], "Division": null}, "BB405-M": {"Code": "BB405-M", "Name": "Molecular Biology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Sreelaja  Nair"], "Division": "M"}, "BB421": {"Code": "BB421", "Name": "Genetics", "Venue": "FirstHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Sushil  Kumar"], "Division": null}, "BB427": {"Code": "BB427", "Name": "Introduction to Neural Engineering", "Venue": "FullSemester", "Slots": ["11B", "9B"], "Instructors": ["Nivethida  Thirugnanasambandam"], "Division": null}, "BB505": {"Code": "BB505", "Name": "Molecular Immunology", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sushil  Kumar"], "Division": null}, "BB519": {"Code": "BB519", "Name": "Project Proposal Presentation and Dissertation", "Venue": "FullSemester", "Slots": [], "Instructors": ["Swapnil Rohidas Shinde"], "Division": null}, "BB521": {"Code": "BB521", "Name": "Biochemistry and Bioenergetics", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["P.V.Balaji"], "Division": null}, "BB521-M": {"Code": "BB521-M", "Name": "Biochemistry and Bioenergetics", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["P.V.Balaji"], "Division": "M"}, "BB523": {"Code": "BB523", "Name": "Mathematical and Numerical Methods for Biologists", "Venue": "FullSemester", "Slots": ["7B", "7A"], "Instructors": ["Ambarish Kunwar"], "Division": null}, "BB525": {"Code": "BB525", "Name": "Biological Thermodynamics and Kinetics", "Venue": "SecondHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ashutosh Kumar"], "Division": null}, "BB527": {"Code": "BB527", "Name": "Molecular Enzymology", "Venue": "FirstHalf", "Slots": ["14B", "12A"], "Instructors": ["Prasenjit  Bhaumik"], "Division": null}, "BB529": {"Code": "BB529", "Name": "Research Methodology and Scientific Communication Skills", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["Patankar Swati"], "Division": null}, "BB531": {"Code": "BB531", "Name": "Plant Biotechnology", "Venue": "FullSemester", "Slots": ["1C", "1B", "LX"], "Instructors": ["Rajesh  Patkar"], "Division": null}, "BB535": {"Code": "BB535", "Name": "Environmental Biotechnology", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["P. S. Phale"], "Division": null}, "BB539": {"Code": "BB539", "Name": "Applied Microbiology Laboratory", "Venue": "FirstHalf", "Slots": ["L1", "L2"], "Instructors": ["P. S. Phale"], "Division": null}, "BB553": {"Code": "BB553", "Name": "Bioinformatics", "Venue": "FullSemester", "Slots": ["3B", "LX", "XC"], "Instructors": ["Prasenjit  Bhaumik"], "Division": null}, "BB553-M": {"Code": "BB553-M", "Name": "Bioinformatics", "Venue": "FullSemester", "Slots": ["3B", "LX", "XC"], "Instructors": ["Prasenjit  Bhaumik"], "Division": "M"}, "BB601": {"Code": "BB601", "Name": "Introduction to Bio-nanotechnology", "Venue": "SecondHalf", "Slots": ["3A", "3C", "3B"], "Instructors": ["R. Srivastava"], "Division": null}, "BB603": {"Code": "BB603", "Name": "Physiology for Engineers", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Vivek P. Soni", "Nivethida  Thirugnanasambandam"], "Division": null}, "BB603-M": {"Code": "BB603-M", "Name": "Physiology for Engineers", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Vivek P. Soni", "Nivethida  Thirugnanasambandam"], "Division": "M"}, "BB607": {"Code": "BB607", "Name": "Proteomics- Principles and Techniques", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["S. Srivastava"], "Division": null}, "BB617": {"Code": "BB617", "Name": "Biophysical Chemistry", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Ashutosh Kumar", "Samir Maji"], "Division": null}, "BB619": {"Code": "BB619", "Name": "Mathematics for Biologists", "Venue": "FullSemester", "Slots": ["7B", "7A"], "Instructors": ["Sandip Laxman Kaledhonkar"], "Division": null}, "BB627": {"Code": "BB627", "Name": "Medical Imaging Methods", "Venue": "SecondHalf", "Slots": ["8A", "8B"], "Instructors": ["Hari M. Varma"], "Division": null}, "BB627-M": {"Code": "BB627-M", "Name": "Medical Imaging Methods", "Venue": "SecondHalf", "Slots": ["8A", "8B"], "Instructors": ["Hari M. Varma"], "Division": "M"}, "BB633": {"Code": "BB633", "Name": "Movement Neuroscience", "Venue": "FirstHalf", "Slots": ["6B", "6A"], "Instructors": ["Neeta Kanekar"], "Division": null}, "BB633-M": {"Code": "BB633-M", "Name": "Movement Neuroscience", "Venue": "FirstHalf", "Slots": ["6B", "6A"], "Instructors": ["Neeta Kanekar"], "Division": "M"}, "BB638": {"Code": "BB638", "Name": "Topics in Evolution", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Kiran Kondabagilu"], "Division": null}, "BB647": {"Code": "BB647", "Name": "Introduction to Evolutionary Biology", "Venue": "FirstHalf", "Slots": ["5B", "5A"], "Instructors": ["Kiran Kondabagilu"], "Division": null}, "BB653": {"Code": "BB653", "Name": "Experimental Techniques in Biomedical Engineering", "Venue": "FullSemester", "Slots": ["11A", "LX"], "Instructors": ["Ambarish Kunwar", "Debjani  Paul", "Nivethida  Thirugnanasambandam", "Hari M. Varma"], "Division": null}, "BB657": {"Code": "BB657", "Name": "Regulatory Aspects of Drug Development", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["Ashutosh Kumar"], "Division": null}, "BB663": {"Code": "BB663", "Name": "Medical Imaging Physics", "Venue": "FirstHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Debjani  Paul"], "Division": null}, "BB663-M": {"Code": "BB663-M", "Name": "Medical Imaging Physics", "Venue": "FirstHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Debjani  Paul"], "Division": "M"}, "BB665": {"Code": "BB665", "Name": "Biomaterials", "Venue": "FirstHalf", "Slots": ["5B", "5A"], "Instructors": ["Prakriti Tayalia"], "Division": null}, "BB669": {"Code": "BB669", "Name": "Signals &amp; Systems in Biomedical Engineering", "Venue": "FirstHalf", "Slots": ["8A", "8B"], "Instructors": ["Ambarish Kunwar"], "Division": null}, "BB673": {"Code": "BB673", "Name": "Medical Sensors", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["Mukherji Soumyo"], "Division": null}, "BB679": {"Code": "BB679", "Name": "Drug Delivery", "Venue": "SecondHalf", "Slots": ["5B", "5A"], "Instructors": ["Prakriti Tayalia"], "Division": null}, "BB681": {"Code": "BB681", "Name": "Biological Physics at Microscopic Scales", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ambarish Kunwar"], "Division": null}, "BB681-M": {"Code": "BB681-M", "Name": "Biological Physics at Microscopic Scales", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ambarish Kunwar"], "Division": "M"}, "BB701": {"Code": "BB701", "Name": "Research Proposal", "Venue": "FullSemester", "Slots": [], "Instructors": ["Anirban Banerjee"], "Division": null}, "BB705": {"Code": "BB705", "Name": "Fundamental Concepts in Developmental Biology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sreelaja  Nair"], "Division": null}, "BB706": {"Code": "BB706", "Name": "Fundamental and Practical Aspects of Microscopy", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Roop  Mallik"], "Division": null}, "BB797": {"Code": "BB797", "Name": "I Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Hari M. Varma", "Neeta Kanekar"], "Division": null}, "BB899": {"Code": "BB899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Ambarish Kunwar", "Nivethida  Thirugnanasambandam", "Prasenjit  Bhaumik", "P.V.Balaji", "Shamik Sen", "Sreelaja  Nair", "S. Srivastava", "Swapnil Rohidas Shinde", "Rajesh  Patkar"], "Division": null}, "BBS801": {"Code": "BBS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Rajesh  Patkar"], "Division": null}, "CE103": {"Code": "CE103", "Name": "Introduction to Civil Engineering", "Venue": "Class Room : LH 301\t\t\t\tFullSemester", "Slots": ["L4", "L2"], "Instructors": ["Mahesh Kumar Gupta", "Albert  Thomas", "Nagendra Rao Velaga"], "Division": null}, "CE203-S1": {"Code": "CE203-S1", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Jayadipta Ghosh"], "Division": "S1"}, "CE203-S2": {"Code": "CE203-S2", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Najeeb Mohammad Shariff"], "Division": "S2"}, "CE203-S3": {"Code": "CE203-S3", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Arghadeep Laskar"], "Division": "S3"}, "CE207-S1": {"Code": "CE207-S1", "Name": "Hydromechanics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Srineash  V.K."], "Division": "S1"}, "CE207-S2": {"Code": "CE207-S2", "Name": "Hydromechanics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Basudev  Biswal"], "Division": "S2"}, "CE209-S1": {"Code": "CE209-S1", "Name": "Building Materials and Construction", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Muhammad Salman"], "Division": "S1"}, "CE209-S2": {"Code": "CE209-S2", "Name": "Building Materials and Construction", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Prakash Nanthagopalan"], "Division": "S2"}, "CE219-S1": {"Code": "CE219-S1", "Name": "Solid Mechanics Laboratory", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Najeeb Mohammad Shariff"], "Division": "S1"}, "CE219-S2": {"Code": "CE219-S2", "Name": "Solid Mechanics Laboratory", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Amit Kumar Das"], "Division": "S2"}, "CE235-S1": {"Code": "CE235-S1", "Name": "Artificial Intelligence &amp; Data Science", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Arpita Mondal"], "Division": "S1"}, "CE235-S2": {"Code": "CE235-S2", "Name": "Artificial Intelligence &amp; Data Science", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Gopal R. Patil"], "Division": "S2"}, "CE310-S1": {"Code": "CE310-S1", "Name": "Transportation Engg. I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Dharamveer Singh"], "Division": "S1"}, "CE310-S2": {"Code": "CE310-S2", "Name": "Transportation Engg. I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Nagendra Rao Velaga"], "Division": "S2"}, "CE317-S1": {"Code": "CE317-S1", "Name": "Structural Mechanics II", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["N.K.Chandiramani"], "Division": "S1"}, "CE317-S2": {"Code": "CE317-S2", "Name": "Structural Mechanics II", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Jangid R.S."], "Division": "S2"}, "CE317-S3": {"Code": "CE317-S3", "Name": "Structural Mechanics II", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["M.M.Inamdar"], "Division": "S3"}, "CE323-S1": {"Code": "CE323-S1", "Name": "Geotechnical Engineering I", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Viswanadham B.V.S."], "Division": "S1"}, "CE323-S2": {"Code": "CE323-S2", "Name": "Geotechnical Engineering I", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["S. Dasaka Murthy"], "Division": "S2"}, "CE324": {"Code": "CE324", "Name": "Engineering Law", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Milind S. Wankhede", "Sinha Ravi"], "Division": null}, "CE325-S1": {"Code": "CE325-S1", "Name": "Structural Design I", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Manish Kumar"], "Division": "S1"}, "CE325-S2": {"Code": "CE325-S2", "Name": "Structural Design I", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Amit Kumar Das"], "Division": "S2"}, "CE325-S3": {"Code": "CE325-S3", "Name": "Structural Design I", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Meera  Raghunandan"], "Division": "S3"}, "CE328-S1": {"Code": "CE328-S1", "Name": "Transportation Engineering Lab I", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["P.Vedagiri"], "Division": "S1"}, "CE328-S2": {"Code": "CE328-S2", "Name": "Transportation Engineering Lab I", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Solomon  Debbarma"], "Division": "S2"}, "CE329-S1": {"Code": "CE329-S1", "Name": "Geotechnical Engineering Lab I", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["S. Dasaka Murthy"], "Division": "S1"}, "CE329-S2": {"Code": "CE329-S2", "Name": "Geotechnical Engineering Lab I", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["A. Juneja"], "Division": "S2"}, "CE401-S1": {"Code": "CE401-S1", "Name": "Water Resources Engineering", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Jothiprakash V."], "Division": "S1"}, "CE401-S2": {"Code": "CE401-S2", "Name": "Water Resources Engineering", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["M.J.Reddy"], "Division": "S2"}, "CE403": {"Code": "CE403", "Name": "Design of Structures III", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Goyal Alok"], "Division": null}, "CE407-S1": {"Code": "CE407-S1", "Name": "Foundation Engg.", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Prasenjit Basu"], "Division": "S1"}, "CE407-S2": {"Code": "CE407-S2", "Name": "Foundation Engg.", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Santiram Chatterjee"], "Division": "S2"}, "CE410": {"Code": "CE410", "Name": "Introduction to Offshore Engineering", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Manasa R. Behera"], "Division": null}, "CE463-S1": {"Code": "CE463-S1", "Name": "Probabilistic and Statistical Methods in Civil Eng", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Subimal Ghosh"], "Division": "S1"}, "CE463-S2": {"Code": "CE463-S2", "Name": "Probabilistic and Statistical Methods in Civil Eng", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Swagata Basu"], "Division": "S2"}, "CE482": {"Code": "CE482", "Name": "Construction Management", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Venkata S. Delhi"], "Division": null}, "CE494": {"Code": "CE494", "Name": "BTP I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Choudhury Deepankar"], "Division": null}, "CE603": {"Code": "CE603", "Name": "Numerical Methods", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Desai Yogesh M."], "Division": null}, "CE605": {"Code": "CE605", "Name": "Applied Statistics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Bellie  Sivakumar"], "Division": null}, "CE616": {"Code": "CE616", "Name": "Structural Dynamics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Banerji P."], "Division": null}, "CE623": {"Code": "CE623", "Name": "Advanced Solids Mechanics", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Sauvik Banerjee"], "Division": null}, "CE626": {"Code": "CE626", "Name": "Groundwater Systems Planning and Management", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Bellie  Sivakumar"], "Division": null}, "CE627": {"Code": "CE627", "Name": "Structural Design", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Sinha Ravi"], "Division": null}, "CE630": {"Code": "CE630", "Name": "Geographical Information Systems in Civil Engineering", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Raaj Ramsankaran"], "Division": null}, "CE641": {"Code": "CE641", "Name": "Environmental Geomechanics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Singh D.N."], "Division": null}, "CE643": {"Code": "CE643", "Name": "Experimental Geotechnics", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["A. Juneja", "Choudhury Deepankar", "Prasenjit Basu", "Santiram Chatterjee", "S. Dasaka Murthy", "Singh D.N.", "Viswanadham B.V.S."], "Division": null}, "CE647": {"Code": "CE647", "Name": "Soil Dynamics and Machine Foundations", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Choudhury Deepankar"], "Division": null}, "CE653": {"Code": "CE653", "Name": "Structural Reliability and Risk Analysis", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ghosh Siddhartha"], "Division": null}, "CE675": {"Code": "CE675", "Name": "Advanced Experimental Fluid Mechanics", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["M.J.Reddy"], "Division": null}, "CE680": {"Code": "CE680", "Name": "Mechanics of Water Waves", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Deo M.C."], "Division": null}, "CE681": {"Code": "CE681", "Name": "Advance Pavement Engineering Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Dharamveer Singh"], "Division": null}, "CE694": {"Code": "CE694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Choudhury Deepankar"], "Division": null}, "CE695": {"Code": "CE695", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Choudhury Deepankar"], "Division": null}, "CE701": {"Code": "CE701", "Name": "Remote Sensing Technology", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Eswar  Rajasekaran"], "Division": null}, "CE702": {"Code": "CE702", "Name": "Geotechnical Constitutive Models", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["A. Juneja"], "Division": null}, "CE703": {"Code": "CE703", "Name": "Remote Sensing Laboratory", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Eswar  Rajasekaran"], "Division": null}, "CE705": {"Code": "CE705", "Name": "Photogrammetric Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["J. Indu", "Raaj Ramsankaran", "Eswar  Rajasekaran"], "Division": null}, "CE706": {"Code": "CE706", "Name": "Ocean Engineering Laboratory", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["R. Balaji", "Srineash  V.K."], "Division": null}, "CE712": {"Code": "CE712", "Name": "Digital Image Processing of Remotely Sensed Data", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["J. Indu"], "Division": null}, "CE713": {"Code": "CE713", "Name": "Advanced Concrete Technology", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Prakash Nanthagopalan"], "Division": null}, "CE717": {"Code": "CE717", "Name": "Construction Planning and Control", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Albert  Thomas"], "Division": null}, "CE718": {"Code": "CE718", "Name": "Construction Materials Laboratory", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Swathy  Manohar", "Muhammad Salman"], "Division": null}, "CE725": {"Code": "CE725", "Name": "Construction Economics and Finance", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Venkata S. Delhi"], "Division": null}, "CE727": {"Code": "CE727", "Name": "Construction Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Muhammad Salman"], "Division": null}, "CE731": {"Code": "CE731", "Name": "Mechanics of Fluid Flow", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["T I Eldho"], "Division": null}, "CE740": {"Code": "CE740", "Name": "Traffic Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Tom V Mathew"], "Division": null}, "CE742": {"Code": "CE742", "Name": "Pavement Systems Engineering", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Dharamveer Singh"], "Division": null}, "CE751": {"Code": "CE751", "Name": "Urban Transportation Systems Planning", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["K.V.Krishna Rao"], "Division": null}, "CE766": {"Code": "CE766", "Name": "Watershed Management", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Riddhi Singh"], "Division": null}, "CE769": {"Code": "CE769", "Name": "Coastal and Ocean Environment", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["R. Balaji"], "Division": null}, "CE771": {"Code": "CE771", "Name": "Optimization in Civil Engineering", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Avijit Maji"], "Division": null}, "CE781": {"Code": "CE781", "Name": "Advanced Foundation Engineering", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Santiram Chatterjee"], "Division": null}, "CE782": {"Code": "CE782", "Name": "Advanced Soil Mechanics", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Prasenjit Basu"], "Division": null}, "CE899": {"Code": "CE899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Deo M.C.", "Solomon  Debbarma"], "Division": null}, "CES801": {"Code": "CES801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Choudhury Deepankar"], "Division": null}, "CH111-D1": {"Code": "CH111-D1", "Name": "Chemistry", "Venue": "Class Room : LA 201\t\t\t\tFullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Achintya Kumar Dutta", "Chandra M. R. Volla", "G. Naresh Patwari", "Ishita  Sengupta", "Nandita Madhavan", "Rahul  Maitra", "R. B. Sunoj", "R. Murugavel", "Sanjog Sunil Nagarkar", "Srinivasan  Ramakrishnan", "Santosh J. Gharpure"], "Division": "D1"}, "CH111-D2": {"Code": "CH111-D2", "Name": "Chemistry", "Venue": "Class Room : LA 201\t\t\t\tFullSemester", "Slots": ["9A", "9B"], "Instructors": ["Achintya Kumar Dutta", "Chandra M. R. Volla", "G. Naresh Patwari", "Ishita  Sengupta", "Nandita Madhavan", "Rahul  Maitra", "R. B. Sunoj", "R. Murugavel", "Sanjog Sunil Nagarkar", "Srinivasan  Ramakrishnan", "Santosh J. Gharpure"], "Division": "D2"}, "CH111-D3": {"Code": "CH111-D3", "Name": "Chemistry", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Achintya Kumar Dutta", "Arnab  Dutta", "Chandra M. R. Volla", "G. Naresh Patwari", "Ishita  Sengupta", "Nandita Madhavan", "R. B. Sunoj", "R. Murugavel", "Sanjog Sunil Nagarkar", "Srinivasan  Ramakrishnan", "Santosh J. Gharpure"], "Division": "D3"}, "CH111-D4": {"Code": "CH111-D4", "Name": "Chemistry", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["8A", "8B"], "Instructors": ["Achintya Kumar Dutta", "Arnab  Dutta", "Chandra M. R. Volla", "G. Naresh Patwari", "Ishita  Sengupta", "Nandita Madhavan", "R. B. Sunoj", "R. Murugavel", "Sanjog Sunil Nagarkar", "Srinivasan  Ramakrishnan", "Santosh J. Gharpure"], "Division": "D4"}, "CH117-P1": {"Code": "CH117-P1", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P1"}, "CH117-P10": {"Code": "CH117-P10", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["1C", "3C", "4C"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P10"}, "CH117-P2": {"Code": "CH117-P2", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P2"}, "CH117-P3": {"Code": "CH117-P3", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P3"}, "CH117-P4": {"Code": "CH117-P4", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P4"}, "CH117-P7": {"Code": "CH117-P7", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["1B", "2B", "4B"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P7"}, "CH117-P8": {"Code": "CH117-P8", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["5B", "6B"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P8"}, "CH117-P9": {"Code": "CH117-P9", "Name": "Chemistry Lab", "Venue": "FullSemester", "Slots": ["1A", "2A", "3A"], "Instructors": ["A.Chowdhury", "D. Maiti", "Ghosh Prasenjit", "Rajarshi Chakrabarti", "Sandip Kar", "Srinivasan  Ramakrishnan", "Subramaniam Chandramouli", "Sanjog Sunil Nagarkar"], "Division": "P9"}, "CH209": {"Code": "CH209", "Name": "Basic Organic Chemistry", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Venkateswarlu  Yarlagadda"], "Division": null}, "CH209-M": {"Code": "CH209-M", "Name": "Basic Organic Chemistry", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Venkateswarlu  Yarlagadda"], "Division": "M"}, "CH219": {"Code": "CH219", "Name": "Inorganic Chemistry Lab-I", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Ghosh Prasenjit"], "Division": null}, "CH225": {"Code": "CH225", "Name": "Data Analysis for Chemists", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Anil Kumar"], "Division": null}, "CH225-M": {"Code": "CH225-M", "Name": "Data Analysis for Chemists", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Anil Kumar"], "Division": "M"}, "CH231": {"Code": "CH231", "Name": "Organic Chemistry Lab I", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Venkateswarlu  Yarlagadda"], "Division": null}, "CH397": {"Code": "CH397", "Name": "Mini Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chidambar  Kulkarni"], "Division": null}, "CH401": {"Code": "CH401", "Name": "Organic Reactions", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Kaliappan K P"], "Division": null}, "CH401-M": {"Code": "CH401-M", "Name": "Organic Reactions", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Kaliappan K P"], "Division": "M"}, "CH403": {"Code": "CH403", "Name": "Electrochemistry of Solutions and Interfaces", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Subramaniam Chandramouli", "Nand Kishore"], "Division": null}, "CH403-M": {"Code": "CH403-M", "Name": "Electrochemistry of Solutions and Interfaces", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Subramaniam Chandramouli", "Nand Kishore"], "Division": "M"}, "CH405": {"Code": "CH405", "Name": "Advanced Transition Metal Chemistry", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Gopalan Rajaram", "M. S. Balakrishna"], "Division": null}, "CH405-M": {"Code": "CH405-M", "Name": "Advanced Transition Metal Chemistry", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Gopalan Rajaram", "M. S. Balakrishna"], "Division": "M"}, "CH415": {"Code": "CH415", "Name": "Inorganic Chemistry Lab II", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Maheswaran S.", "Gopalan Rajaram"], "Division": null}, "CH417": {"Code": "CH417", "Name": "Organic Chemistry Lab II", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Chidambar  Kulkarni", "Santosh J. Gharpure"], "Division": null}, "CH425": {"Code": "CH425", "Name": "Chemical Bond and Molecular Geometry", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Rajarshi Chakrabarti", "A. Datta"], "Division": null}, "CH425-M": {"Code": "CH425-M", "Name": "Chemical Bond and Molecular Geometry", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Rajarshi Chakrabarti", "A. Datta"], "Division": "M"}, "CH433": {"Code": "CH433", "Name": "Physical Chemistry Lab II", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Amber  Jain", "Nand Kishore"], "Division": null}, "CH481": {"Code": "CH481", "Name": "Chemistry and Computers", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Amber  Jain", "Sandip Kar"], "Division": null}, "CH507": {"Code": "CH507", "Name": "Methods in Organic Synthesis", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Rodney Fernandes"], "Division": null}, "CH514": {"Code": "CH514", "Name": "Applied and Industrial Chemistry", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Kamendra P. Sharma"], "Division": null}, "CH521": {"Code": "CH521", "Name": "Interpretative Molecular Spectroscopy", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Goutam K. Lahiri", "R. Murugavel", "Suvarn Kulkarni"], "Division": null}, "CH521-M": {"Code": "CH521-M", "Name": "Interpretative Molecular Spectroscopy", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Goutam K. Lahiri", "R. Murugavel", "Suvarn Kulkarni"], "Division": "M"}, "CH546": {"Code": "CH546", "Name": "Introduction to Biomolecules", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Pradeep Kumar P.I."], "Division": null}, "CH547": {"Code": "CH547", "Name": "Organometallic Chemistry", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Arnab  Dutta", "D. Maiti"], "Division": null}, "CH547-M": {"Code": "CH547-M", "Name": "Organometallic Chemistry", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Arnab  Dutta", "D. Maiti"], "Division": "M"}, "CH584": {"Code": "CH584", "Name": "Biophysical Chemistry", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Shobhna Kapoor", "Ruchi Anand"], "Division": null}, "CH591": {"Code": "CH591", "Name": "Research Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chidambar  Kulkarni"], "Division": null}, "CH593": {"Code": "CH593", "Name": "Project Stage I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chidambar  Kulkarni"], "Division": null}, "CH595": {"Code": "CH595", "Name": "M.Sc. Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chidambar  Kulkarni"], "Division": null}, "CH801": {"Code": "CH801", "Name": "Symmetry in Chemistry", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Swapan Kumar Pati", "A. Datta"], "Division": null}, "CH812": {"Code": "CH812", "Name": "Funadamentals of  Quantum Chemistry", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Rajarshi Chakrabarti", "A. Datta"], "Division": null}, "CH817": {"Code": "CH817", "Name": "Advanced Co-ordination Chemistry", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Gopalan Rajaram", "M. S. Balakrishna"], "Division": null}, "CH818": {"Code": "CH818", "Name": "Single Molecule Fluorescence Spectroscopy", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["A.Chowdhury"], "Division": null}, "CH827": {"Code": "CH827", "Name": "Inorganic Complexes", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Maheswaran S.", "M. Ravikanth"], "Division": null}, "CH831": {"Code": "CH831", "Name": "Advanced Laboratory Techniques", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["G. Naresh Patwari", "Kaliappan K P", "Kamendra P. Sharma", "Goutam K. Lahiri"], "Division": null}, "CH839": {"Code": "CH839", "Name": "Physical Organic and Stereochemistry", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Chidambar  Kulkarni", "Nandita Madhavan"], "Division": null}, "CH845": {"Code": "CH845", "Name": "Organic Reactions and Synthesis", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["I.N.N. Namboothiri"], "Division": null}, "CH899": {"Code": "CH899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ishita  Sengupta", "R. B. Sunoj", "Ghosh Prasenjit"], "Division": null}, "CHS801": {"Code": "CHS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Achintya Kumar Dutta", "Srinivasan  Ramakrishnan", "Chandra M. R. Volla"], "Division": null}, "CL203-S1": {"Code": "CL203-S1", "Name": "Introduction to Transport Phenomena", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Guruswamy  Kumaraswamy"], "Division": "S1"}, "CL203-S2": {"Code": "CL203-S2", "Name": "Introduction to Transport Phenomena", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Nanavati Hemant"], "Division": "S2"}, "CL205": {"Code": "CL205", "Name": "AI and Data Science", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Manibhushan", "Sarika Mehra"], "Division": null}, "CL207-S1": {"Code": "CL207-S1", "Name": "Chemical Engineering Thermodynamics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Abhijit Chatterjee"], "Division": "S1"}, "CL207-S2": {"Code": "CL207-S2", "Name": "Chemical Engineering Thermodynamics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Mukta Tripathy"], "Division": "S2"}, "CL254-S1": {"Code": "CL254-S1", "Name": "Process Fluid Mechanics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Jason Ryan Picardo"], "Division": "S1"}, "CL254-S2": {"Code": "CL254-S2", "Name": "Process Fluid Mechanics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Amol  Subhedar"], "Division": "S2"}, "CL305-S1": {"Code": "CL305-S1", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Khakhar D.V."], "Division": "S1"}, "CL305-S2": {"Code": "CL305-S2", "Name": "Solid Mechanics", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Arindam Sarkar"], "Division": "S2"}, "CL319-S1": {"Code": "CL319-S1", "Name": "Mass Transfer I", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Vinjamur Madhu"], "Division": "S1"}, "CL319-S2": {"Code": "CL319-S2", "Name": "Mass Transfer I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Venkat Gundabala"], "Division": "S2"}, "CL324-S1": {"Code": "CL324-S1", "Name": "Chemical Reaction Engineering", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Wangikar P."], "Division": "S1"}, "CL324-S2": {"Code": "CL324-S2", "Name": "Chemical Reaction Engineering", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Swati Bhattacharya"], "Division": "S2"}, "CL333-S1": {"Code": "CL333-S1", "Name": "Chemical Engineering Lab. II", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Abhijit Majumder", "P.Sunthar", "Sanjay Mahajani", "Suresh A.K."], "Division": "S1"}, "CL333-S2": {"Code": "CL333-S2", "Name": "Chemical Engineering Lab. II", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Abhijit Majumder", "P.Sunthar", "Sanjay Mahajani", "Suresh A.K."], "Division": "S2"}, "CL336": {"Code": "CL336", "Name": "Advanced Transport Phenomena", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Tirumkudulu Mahesh"], "Division": null}, "CL405": {"Code": "CL405", "Name": "Process Equipment Selection", "Venue": "FirstHalf", "Slots": ["4A", "4C", "4B"], "Instructors": ["Yogendra Shastri"], "Division": null}, "CL409-S1": {"Code": "CL409-S1", "Name": "Material Science", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Rajdip Bandyopadhyaya"], "Division": "S1"}, "CL409-S2": {"Code": "CL409-S2", "Name": "Material Science", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Adhikari J."], "Division": "S2"}, "CL419": {"Code": "CL419", "Name": "Process Economics", "Venue": "SecondHalf", "Slots": ["4A", "4B"], "Instructors": ["Juvekar V.A."], "Division": null}, "CL433-S1": {"Code": "CL433-S1", "Name": "Chemical Engineering Lab IV", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Juvekar V.A.", "Rahul  Nabar", "Venkatesh K.V.", "Sujit S. Jogwar"], "Division": "S1"}, "CL433-S2": {"Code": "CL433-S2", "Name": "Chemical Engineering Lab IV", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Juvekar V.A.", "Rahul  Nabar", "Venkatesh K.V.", "Sujit S. Jogwar"], "Division": "S2"}, "CL443": {"Code": "CL443", "Name": "Supervised learning I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jason Ryan Picardo", "Venkat Gundabala"], "Division": null}, "CL455-S1": {"Code": "CL455-S1", "Name": "Design Lab I", "Venue": "FullSemester", "Slots": ["L1", "L3"], "Instructors": ["Partha  S. Goswami", "Moudgalya Kannan."], "Division": "S1"}, "CL455-S2": {"Code": "CL455-S2", "Name": "Design Lab I", "Venue": "FullSemester", "Slots": ["L1", "L3"], "Instructors": ["Partha  S. Goswami", "Moudgalya Kannan."], "Division": "S2"}, "CL461": {"Code": "CL461", "Name": "Colloid &amp; Interfacial Engineering", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Bellare J."], "Division": null}, "CL464": {"Code": "CL464", "Name": "Process safety and Risk Management", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Roy S."], "Division": null}, "CL491": {"Code": "CL491", "Name": "B.Tech. Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jason Ryan Picardo", "Venkat Gundabala"], "Division": null}, "CL501": {"Code": "CL501", "Name": "Computational Methods in Catalysis", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ojus  Mohan"], "Division": null}, "CL601": {"Code": "CL601", "Name": "Advanced Transport Phenomena", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sameer Ralph Jadhav"], "Division": null}, "CL602": {"Code": "CL602", "Name": "Mathematical and Statistical Methods in Chemical Engineering", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Rochish Thaokar"], "Division": null}, "CL603": {"Code": "CL603", "Name": "Optimization", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Santosh Noronha"], "Division": null}, "CL605": {"Code": "CL605", "Name": "Advanced Reaction Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ganesh Viswanathan"], "Division": null}, "CL607": {"Code": "CL607", "Name": "Advanced Thermodynamics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Jyoti R. Seth"], "Division": null}, "CL611": {"Code": "CL611", "Name": "Electrochemical Reaction Engineering", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Bharatkumar  Suthar"], "Division": null}, "CL618": {"Code": "CL618", "Name": "Catalysis and Surface Chemistry", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Sonali  Das"], "Division": null}, "CL665": {"Code": "CL665", "Name": "Sustainable Engineering Principles", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Yogendra Shastri"], "Division": null}, "CL671": {"Code": "CL671", "Name": "Multiscale Simulations", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Ateeque Malani"], "Division": null}, "CL674": {"Code": "CL674", "Name": "Theoretical Ecology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Supreet Saini"], "Division": null}, "CL675": {"Code": "CL675", "Name": "Analytical and Numerical Techniques in Hydrodynamic Stability", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Ratul Dasgupta"], "Division": null}, "CL684": {"Code": "CL684", "Name": "Advanced Process Synthesis", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sanjay Mahajani"], "Division": null}, "CL688": {"Code": "CL688", "Name": "Artificial Intelligence in Process Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Bhartiya S."], "Division": null}, "CL701": {"Code": "CL701", "Name": "Computational Methods in Chemical Engineering", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sachin Patwardhan"], "Division": null}, "CL702": {"Code": "CL702", "Name": "Lecture Series", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Rochish Thaokar", "Swati Bhattacharya", "Bharatkumar  Suthar"], "Division": null}, "CL710": {"Code": "CL710", "Name": "Aerosol Technology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Chandra V", "Y. S.  Mayya"], "Division": null}, "CL718": {"Code": "CL718", "Name": "Introduction to Cell  Mechanics", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Abhijit Majumder"], "Division": null}, "CL899": {"Code": "CL899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Supreet Saini"], "Division": null}, "CM402": {"Code": "CM402", "Name": "Earth`s Climate: Past Present and Future", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Raghu  Murtugudde"], "Division": null}, "CM505": {"Code": "CM505", "Name": "Atmospheric Radiative Transfer and Climate", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Angshuman  Modak"], "Division": null}, "CM612": {"Code": "CM612", "Name": "Climate systems and Climate Modeling", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Vishal  Dixit"], "Division": null}, "CM613": {"Code": "CM613", "Name": "Waves and Instabilities in Geophysical Fluid Dynamics", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["S. Ravichandran"], "Division": null}, "CM803": {"Code": "CM803", "Name": "Introduction to Climate Change", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Pradip P. Kalbar", "Trupti Mishra", "Angshuman  Modak"], "Division": null}, "CM899": {"Code": "CM899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["XC"], "Instructors": ["Harish C. Phuleria"], "Division": null}, "CMS801": {"Code": "CMS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vishal  Dixit"], "Division": null}, "CMS802": {"Code": "CMS802", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vishal  Dixit"], "Division": null}, "CS101-D3": {"Code": "CS101-D3", "Name": "Computer Programming and Utilization", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["6B", "6A"], "Instructors": ["Suyash P. Awate"], "Division": "D3"}, "CS101-D4": {"Code": "CS101-D4", "Name": "Computer Programming and Utilization", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["10B", "10A"], "Instructors": ["Suyash P. Awate"], "Division": "D4"}, "CS105": {"Code": "CS105", "Name": "Discrete Structures", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["S. Akshay"], "Division": null}, "CS152": {"Code": "CS152", "Name": "Abstractions and Paradigms for Programming", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Manas  Thakur"], "Division": null}, "CS154": {"Code": "CS154", "Name": "Programming Paradigms Laboratory", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Manas  Thakur"], "Division": null}, "CS207": {"Code": "CS207", "Name": "Discrete Structures", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Diwan A.A."], "Division": null}, "CS213": {"Code": "CS213", "Name": "Data Structures and Algorithms", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Ashutosh Kumar Gupta"], "Division": null}, "CS215": {"Code": "CS215", "Name": "Data Analysis and Interpretation", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Ajit V. Rajwade"], "Division": null}, "CS218": {"Code": "CS218", "Name": "Design and Analysis of Algorithms", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ranade A."], "Division": null}, "CS218-M": {"Code": "CS218-M", "Name": "Design and Analysis of Algorithms", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ranade A."], "Division": "M"}, "CS224": {"Code": "CS224", "Name": "Computer Networks", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Vinay J. Ribeiro"], "Division": null}, "CS224-M": {"Code": "CS224-M", "Name": "Computer Networks", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Vinay J. Ribeiro"], "Division": "M"}, "CS228": {"Code": "CS228", "Name": "Logic for Computer Science", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Krishna Shankara Narayanan"], "Division": null}, "CS228-M": {"Code": "CS228-M", "Name": "Logic for Computer Science", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Krishna Shankara Narayanan"], "Division": "M"}, "CS230": {"Code": "CS230", "Name": "Digital Logic Design and Computer Architecture", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Biswabandan  Panda"], "Division": null}, "CS232": {"Code": "CS232", "Name": "Digital Logic Design and Computer Architecture Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Biswabandan  Panda"], "Division": null}, "CS293": {"Code": "CS293", "Name": "Data Structures and Algorithms Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Ashutosh Kumar Gupta"], "Division": null}, "CS310": {"Code": "CS310", "Name": "Automata Theory", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Paritosh K. Pandya"], "Division": null}, "CS333": {"Code": "CS333", "Name": "Operating Systems Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Purushottam Kulkarni"], "Division": null}, "CS335": {"Code": "CS335", "Name": "Artificial Intelligence and Machine Learning (Lab)", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Preethi Jyothi"], "Division": null}, "CS337": {"Code": "CS337", "Name": "Artificial Intelligence and Machine Learning", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Preethi Jyothi"], "Division": null}, "CS347": {"Code": "CS347", "Name": "Operating Systems", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Purushottam Kulkarni"], "Division": null}, "CS396": {"Code": "CS396", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Uday Khedkar"], "Division": null}, "CS475": {"Code": "CS475", "Name": "Computer Graphics", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Parag Chaudhuri"], "Division": null}, "CS485": {"Code": "CS485", "Name": "R &amp; D Project II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Uday Khedkar"], "Division": null}, "CS490": {"Code": "CS490", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Uday Khedkar"], "Division": null}, "CS492": {"Code": "CS492", "Name": "BTP I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Uday Khedkar"], "Division": null}, "CS496": {"Code": "CS496", "Name": "BTP II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Uday Khedkar"], "Division": null}, "CS6001": {"Code": "CS6001", "Name": "Game Theory and Algorithmic Mechanism Design", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Swaprava  Nath"], "Division": null}, "CS601": {"Code": "CS601", "Name": "Algorithms and Complexity", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Sujoy  Bhore"], "Division": null}, "CS602": {"Code": "CS602", "Name": "Applied Algorithms", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Rohit Gurjar"], "Division": null}, "CS604": {"Code": "CS604", "Name": "Combinatorics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Vishwanathan Sundar"], "Division": null}, "CS614": {"Code": "CS614", "Name": "Advanced Compilers", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Manas  Thakur"], "Division": null}, "CS618": {"Code": "CS618", "Name": "Program Analysis", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Uday Khedkar"], "Division": null}, "CS626": {"Code": "CS626", "Name": "Speech and Natural Language Processing and the Web", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Bhattacharya P."], "Division": null}, "CS631": {"Code": "CS631", "Name": "Implementation Techniques for Relational Database Systems", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Sudarshan S."], "Division": null}, "CS635": {"Code": "CS635", "Name": "Information Retrieval &amp; Mining for Hypertext &amp; the Web", "Venue": "FullSemester", "Slots": ["10B", "11A"], "Instructors": ["Chakrabarti Soumen"], "Division": null}, "CS663": {"Code": "CS663", "Name": "Fundamentals of Digital Image Processing", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Ajit V. Rajwade"], "Division": null}, "CS675": {"Code": "CS675", "Name": "Computer Graphics", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Parag Chaudhuri"], "Division": null}, "CS683": {"Code": "CS683", "Name": "Advanced Computer Architecture", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Biswabandan  Panda"], "Division": null}, "CS691": {"Code": "CS691", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bhaskar Raman", "Preethi Jyothi"], "Division": null}, "CS692": {"Code": "CS692", "Name": "R &amp; D Project II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bhaskar Raman", "Preethi Jyothi"], "Division": null}, "CS694": {"Code": "CS694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bhaskar Raman", "Preethi Jyothi"], "Division": null}, "CS699": {"Code": "CS699", "Name": "Software Lab.", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Bhaskar Raman"], "Division": null}, "CS725": {"Code": "CS725", "Name": "Foundations of Machine Learning", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["S. Sarawagi"], "Division": null}, "CS741": {"Code": "CS741", "Name": "Advanced Network Security and Cryptography", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Virendra Singh"], "Division": null}, "CS742": {"Code": "CS742", "Name": "Foundations of Network Security and Cryptography", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Kameswari Chebrolu"], "Division": null}, "CS744": {"Code": "CS744", "Name": "Design and Engineering of Computing Systems", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Varsha Apte"], "Division": null}, "CS747": {"Code": "CS747", "Name": "Foundations of Intelligent  and Learning Agents", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Shivaram Kalyanakrishnan"], "Division": null}, "CS768": {"Code": "CS768", "Name": "Learning with Graphs", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Abir  De"], "Division": null}, "CS770": {"Code": "CS770", "Name": "Process Engineering", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Joshi Rushikesh K."], "Division": null}, "CS771": {"Code": "CS771", "Name": "Foundations of verification and automated reasoning", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Bharat Adsul"], "Division": null}, "CS774": {"Code": "CS774", "Name": "Spectral Graph Theory", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Akash  Kumar"], "Division": null}, "CS777": {"Code": "CS777", "Name": "M.S. R&amp;D 1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Preethi Jyothi", "Bhaskar Raman"], "Division": null}, "CS778": {"Code": "CS778", "Name": "M.S. R&amp;D 2", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bhaskar Raman", "Preethi Jyothi"], "Division": null}, "CS781": {"Code": "CS781", "Name": "Formal Methods in Machine Learning", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Supratik Chakraborty"], "Division": null}, "CS782": {"Code": "CS782", "Name": "Algebra and Computation", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sohoni Milind"], "Division": null}, "CSS801": {"Code": "CSS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abir  De"], "Division": null}, "CSS802": {"Code": "CSS802", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abir  De"], "Division": null}, "DE101": {"Code": "DE101", "Name": "Art and Design Fundamental 2D", "Venue": "FullSemester", "Slots": [], "Instructors": ["K. B. Jinan", "Mohanty Raja"], "Division": null}, "DE109-S1": {"Code": "DE109-S1", "Name": "Introduction to Design", "Venue": "Class Room : LC 102\t\t\t\tFullSemester", "Slots": ["3B", "5A"], "Instructors": ["Prasad  Bokil"], "Division": "S1"}, "DE109-S2": {"Code": "DE109-S2", "Name": "Introduction to Design", "Venue": "Class Room : LC 102\t\t\t\tFullSemester", "Slots": ["3C", "X3"], "Instructors": ["Unni Mohan  Mohanan"], "Division": "S2"}, "DE111": {"Code": "DE111", "Name": "Communication through Sculptural Forms", "Venue": "FullSemester", "Slots": [], "Instructors": ["Arun Mascarenhas"], "Division": null}, "DE113": {"Code": "DE113", "Name": "Introduction to Film Making", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bharat Chhitubhai Parmar"], "Division": null}, "DE115": {"Code": "DE115", "Name": "Drawing Tools Lines and Forms", "Venue": "FullSemester", "Slots": [], "Instructors": ["Amitesh Sant Shrivastava"], "Division": null}, "DE117": {"Code": "DE117", "Name": "Introduction to Writing", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sampurna  Chattarji"], "Division": null}, "DE119": {"Code": "DE119", "Name": "Material Exploration", "Venue": "FullSemester", "Slots": [], "Instructors": ["Arun Mascarenhas", "Avinash Shende", "Latha  Tummuru", "Mohanty Raja"], "Division": null}, "DE121": {"Code": "DE121", "Name": "Design Studio I - Problem Identification", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende", "Mohanty Raja"], "Division": null}, "DE135": {"Code": "DE135", "Name": "Design Studio Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Arun Mascarenhas", "Mohanty Raja"], "Division": null}, "DE201": {"Code": "DE201", "Name": "2D Visual Studies I - Word and Image", "Venue": "FullSemester", "Slots": [], "Instructors": ["Shilpa Ranade"], "Division": null}, "DE203": {"Code": "DE203", "Name": "3D Form Studies I - Aesthetics  Identity and Expressions", "Venue": "FullSemester", "Slots": [], "Instructors": ["Dinesh Korjan"], "Division": null}, "DE205": {"Code": "DE205", "Name": "Creative Thinking Process and Methods", "Venue": "FullSemester", "Slots": [], "Instructors": ["Shilpa Ranade"], "Division": null}, "DE207": {"Code": "DE207", "Name": "Understanding Space and Perspective", "Venue": "FullSemester", "Slots": [], "Instructors": ["Amitesh Sant Shrivastava"], "Division": null}, "DE209": {"Code": "DE209", "Name": "Sculptural Ceramics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Arun Mascarenhas", "Mohanty Raja"], "Division": null}, "DE215": {"Code": "DE215", "Name": "Reading the World through Many Lenses", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sampurna  Chattarji"], "Division": null}, "DE221": {"Code": "DE221", "Name": "Design Studio III - Creative Explorations", "Venue": "FullSemester", "Slots": [], "Instructors": ["Shilpa Ranade", "Mohanty Raja"], "Division": null}, "DE224": {"Code": "DE224", "Name": "Natural Dyeing Techniques", "Venue": "FullSemester", "Slots": [], "Instructors": ["Latha  Tummuru"], "Division": null}, "DE231": {"Code": "DE231", "Name": "Design Society Culture and Environment", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mohanty Raja"], "Division": null}, "DE302": {"Code": "DE302", "Name": "Animation Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Shilpa Ranade"], "Division": null}, "DE303": {"Code": "DE303", "Name": "Information Graphics and Visualisation", "Venue": "FullSemester", "Slots": [], "Instructors": ["Venkatesh Rajamanickam"], "Division": null}, "DE304": {"Code": "DE304", "Name": "Communication Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prasad  Bokil"], "Division": null}, "DE305": {"Code": "DE305", "Name": "Moving Image Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mazhar Kamran"], "Division": null}, "DE307": {"Code": "DE307", "Name": "Product Design - I", "Venue": "FullSemester", "Slots": [], "Instructors": ["B.K.Chakravarthy"], "Division": null}, "DE311": {"Code": "DE311", "Name": "Mobility and Vehicle Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Kanika  Jolly", "Sugandh Malhotra"], "Division": null}, "DE315": {"Code": "DE315", "Name": "Applied Ergonomics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Joshi Anirudha"], "Division": null}, "DE319": {"Code": "DE319", "Name": "Interaction Design Process and Methods", "Venue": "FullSemester", "Slots": [], "Instructors": ["Joshi Anirudha"], "Division": null}, "DE320": {"Code": "DE320", "Name": "Designing Books for children", "Venue": "FullSemester", "Slots": [], "Instructors": ["Deepa  Balsavar", "Mandar S.Rane"], "Division": null}, "DE331": {"Code": "DE331", "Name": "Design Technology and Innovation", "Venue": "FullSemester", "Slots": [], "Instructors": ["B.K.Chakravarthy"], "Division": null}, "DE403-M": {"Code": "DE403-M", "Name": "Studio Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mohanty Raja"], "Division": "M"}, "DE405-M": {"Code": "DE405-M", "Name": "Studio Project II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mohanty Raja"], "Division": "M"}, "DE431": {"Code": "DE431", "Name": "Global Design Thoughts and Discourse", "Venue": "FullSemester", "Slots": [], "Instructors": ["Kanika  Jolly"], "Division": null}, "DE601": {"Code": "DE601", "Name": "Introduction to Studio Photography", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sudesh Balan"], "Division": null}, "DE603": {"Code": "DE603", "Name": "Presentation and Communication Skills", "Venue": "FullSemester", "Slots": [], "Instructors": ["G.V.Sreekumar"], "Division": null}, "DE605": {"Code": "DE605", "Name": "Workshop Skills", "Venue": "FullSemester", "Slots": [], "Instructors": ["Nishant  Kamboj"], "Division": null}, "DE607": {"Code": "DE607", "Name": "Studies in Form-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende"], "Division": null}, "DE609": {"Code": "DE609", "Name": "Product Design-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bapat V.P."], "Division": null}, "DE610": {"Code": "DE610", "Name": "Nature of Materials and Processes", "Venue": "FullSemester", "Slots": [], "Instructors": ["Purba Joshi"], "Division": null}, "DE611": {"Code": "DE611", "Name": "Elements of Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende", "Poovaiah Ravi"], "Division": null}, "DE613": {"Code": "DE613", "Name": "Visual Language Syntactics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Poovaiah Ravi"], "Division": null}, "DE615": {"Code": "DE615", "Name": "Studies in Typography", "Venue": "FullSemester", "Slots": [], "Instructors": ["G.V.Sreekumar"], "Division": null}, "DE617": {"Code": "DE617", "Name": "Introduction to Advanced Photography", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sudesh Balan"], "Division": null}, "DE619": {"Code": "DE619", "Name": "The Speaking Image", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mohanty Raja"], "Division": null}, "DE621": {"Code": "DE621", "Name": "Media Technology", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prasad  Bokil", "Jayesh S. Pillai"], "Division": null}, "DE623": {"Code": "DE623", "Name": "Visual Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mandar S.Rane"], "Division": null}, "DE625": {"Code": "DE625", "Name": "Introduction to Filmmaking", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bharat Chhitubhai Parmar"], "Division": null}, "DE626": {"Code": "DE626", "Name": "Human Factors in Interaction Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Swati  Pal"], "Division": null}, "DE627": {"Code": "DE627", "Name": "Indian Thought and Tradition", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sumant Rao"], "Division": null}, "DE629": {"Code": "DE629", "Name": "Introduction to Photography", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mazhar Kamran"], "Division": null}, "DE630": {"Code": "DE630", "Name": "Trends in Interactive Technologies", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jayesh S. Pillai"], "Division": null}, "DE631": {"Code": "DE631", "Name": "Introduction to Typography", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sumant Rao"], "Division": null}, "DE637": {"Code": "DE637", "Name": "User Studies", "Venue": "FullSemester", "Slots": [], "Instructors": ["Joshi Anirudha"], "Division": null}, "DE641": {"Code": "DE641", "Name": "Interactions Media Senses", "Venue": "FullSemester", "Slots": [], "Instructors": ["Poovaiah Ravi"], "Division": null}, "DE643": {"Code": "DE643", "Name": "Digital Animation-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prosenjit  Ganguly", "Sumant Rao"], "Division": null}, "DE645": {"Code": "DE645", "Name": "Animation Theory-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhishek  Verma"], "Division": null}, "DE647": {"Code": "DE647", "Name": "Animation Principles-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sumant Rao"], "Division": null}, "DE649": {"Code": "DE649", "Name": "Animation Design-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhishek  Verma", "Swati  Agarwal", "Prosenjit  Ganguly"], "Division": null}, "DE651": {"Code": "DE651", "Name": "Sketching and Anatomy-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sumant Rao"], "Division": null}, "DE653": {"Code": "DE653", "Name": "Material and Manufacturing", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sugandh Malhotra"], "Division": null}, "DE655": {"Code": "DE655", "Name": "Automobile Engineering and Technology", "Venue": "FullSemester", "Slots": [], "Instructors": ["Unni Mohan  Mohanan", "Sugandh Malhotra"], "Division": null}, "DE657": {"Code": "DE657", "Name": "Vehicle Ergonomics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Swati  Pal"], "Division": null}, "DE659": {"Code": "DE659", "Name": "Forms Space and Order", "Venue": "FullSemester", "Slots": [], "Instructors": ["Unni Mohan  Mohanan", "Nishant Sharma"], "Division": null}, "DE661": {"Code": "DE661", "Name": "Mobility Design-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Nishant Sharma", "Sugandh Malhotra"], "Division": null}, "DE663": {"Code": "DE663", "Name": "Sketching-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vinayak  Nabar"], "Division": null}, "DE665": {"Code": "DE665", "Name": "Model Making-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Unni Mohan  Mohanan", "Sugandh Malhotra"], "Division": null}, "DE669": {"Code": "DE669", "Name": "Packaging and Label Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mandar S.Rane", "Purba Joshi"], "Division": null}, "DE675": {"Code": "DE675", "Name": "Sketchning for Mobilty and Vehicle Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Kanika  Jolly", "Sugandh Malhotra"], "Division": null}, "DE677": {"Code": "DE677", "Name": "Design for Virtual Reality - Basic", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jayesh S. Pillai"], "Division": null}, "DE679": {"Code": "DE679", "Name": "Experimental Animation", "Venue": "FullSemester", "Slots": [], "Instructors": ["Aditi  Chitre"], "Division": null}, "DE688": {"Code": "DE688", "Name": "Sketching for Communication Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Aditi  Chitre"], "Division": null}, "DE689": {"Code": "DE689", "Name": "Theoretical Perspectives in Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Girish V. Dalvi"], "Division": null}, "DE692": {"Code": "DE692", "Name": "Advanced Topics in Service Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Pramod Khambete"], "Division": null}, "DE693": {"Code": "DE693", "Name": "Experimental Film", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bharat Chhitubhai Parmar"], "Division": null}, "DE698": {"Code": "DE698", "Name": "Introduction to Pottery", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mohanty Raja"], "Division": null}, "DE701": {"Code": "DE701", "Name": "Visual Ergonomics &amp; Human Perception", "Venue": "FullSemester", "Slots": [], "Instructors": ["Swati  Pal"], "Division": null}, "DE702": {"Code": "DE702", "Name": "Arts Design and Society-1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mazhar Kamran", "Mohanty Raja"], "Division": null}, "DE705": {"Code": "DE705", "Name": "Interactive Data Visualization", "Venue": "FullSemester", "Slots": [], "Instructors": ["Pratap  Vardhan", "Rasagy  Sharma"], "Division": null}, "DE708": {"Code": "DE708", "Name": "Introduction to Interface Design", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sudhir Ram Bhatia", "Jayesh S. Pillai"], "Division": null}, "DE709": {"Code": "DE709", "Name": "Sound and Camera", "Venue": "FullSemester", "Slots": [], "Instructors": ["P M Satheesh", "Mazhar Kamran"], "Division": null}, "DE710": {"Code": "DE710", "Name": "Design Evaluation", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vidhya  Appu"], "Division": null}, "DE711": {"Code": "DE711", "Name": "Animation Production", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhishek  Verma", "Prosenjit  Ganguly"], "Division": null}, "DE713": {"Code": "DE713", "Name": "Seminar and Critical Writing", "Venue": "FullSemester", "Slots": [], "Instructors": ["Lalit Kumar Das", "Sugandh Malhotra"], "Division": null}, "DE721": {"Code": "DE721", "Name": "Representation Techniques for Animation", "Venue": "FullSemester", "Slots": [], "Instructors": ["Aditi  Chitre"], "Division": null}, "DE801": {"Code": "DE801", "Name": "Mini Project-I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prasad  Bokil"], "Division": null}, "DE802": {"Code": "DE802", "Name": "Mini Project-II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prasad  Bokil"], "Division": null}, "DE803": {"Code": "DE803", "Name": "Quantitative Design Research Methods", "Venue": "FullSemester", "Slots": [], "Instructors": ["Girish V. Dalvi", "Joshi Anirudha"], "Division": null}, "DE804": {"Code": "DE804", "Name": "Qualitative Design Research Menthods", "Venue": "FullSemester", "Slots": [], "Instructors": ["Girish V. Dalvi"], "Division": null}, "DE899": {"Code": "DE899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prasad  Bokil"], "Division": null}, "DEP102": {"Code": "DEP102", "Name": "Self-Initiated Summer Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Shilpa Ranade"], "Division": null}, "DEP301": {"Code": "DEP301", "Name": "Collaborative Design Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vinayak  Nabar", "Poovaiah Ravi"], "Division": null}, "DEP405": {"Code": "DEP405", "Name": "BDes Design Project - 1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende", "Bharat Chhitubhai Parmar"], "Division": null}, "DEP501": {"Code": "DEP501", "Name": "Design Research Project-Part I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende", "Girish V. Dalvi", "G.V.Sreekumar"], "Division": null}, "DEP702": {"Code": "DEP702", "Name": "M.Des. Project- 2", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avinash Shende", "Girish V. Dalvi", "G.V.Sreekumar", "Sugandh Malhotra", "Sumant Rao"], "Division": null}, "DH301": {"Code": "DH301", "Name": "Basic Epidemiology", "Venue": "FullSemester", "Slots": ["X1", "X2", "X3"], "Instructors": ["G.Ramakrishnan"], "Division": null}, "DH301-M": {"Code": "DH301-M", "Name": "Basic Epidemiology", "Venue": "FullSemester", "Slots": ["X1", "X2", "X3"], "Instructors": ["G.Ramakrishnan"], "Division": "M"}, "DH302": {"Code": "DH302", "Name": "Introduction to Public Health Informatics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Kshitij  Jadhav"], "Division": null}, "DH302-M": {"Code": "DH302-M", "Name": "Introduction to Public Health Informatics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Kshitij  Jadhav"], "Division": "M"}, "DH307": {"Code": "DH307", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["G.Ramakrishnan"], "Division": null}, "DH307-M": {"Code": "DH307-M", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["G.Ramakrishnan"], "Division": "M"}, "DH803": {"Code": "DH803", "Name": "Wearable Health Technologies", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Nirmal S. Punjabi"], "Division": null}, "DH803-M": {"Code": "DH803-M", "Name": "Wearable Health Technologies", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Nirmal S. Punjabi"], "Division": "M"}, "DHS801": {"Code": "DHS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Ashutosh Kumar"], "Division": null}, "DS203": {"Code": "DS203", "Name": "Programming for Data Science", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Manjunath D."], "Division": null}, "DS203-M": {"Code": "DS203-M", "Name": "Programming for Data Science", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Manjunath D."], "Division": "M"}, "DS593": {"Code": "DS593", "Name": "Dual Degree Project 1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Manjunath D."], "Division": null}, "EC101-D1": {"Code": "EC101-D1", "Name": "Economics", "Venue": "Class Room : LA 001\t\t\t\tFullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Saptarshi Prosonno Ghosh", "Aditi Balkrishna Chaubal"], "Division": "D1"}, "EC101-D2": {"Code": "EC101-D2", "Name": "Economics", "Venue": "Class Room : LA 002\t\t\t\tFullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Radeef  Chundakkadan", "Pooja Padhi"], "Division": "D2"}, "EC101-D3": {"Code": "EC101-D3", "Name": "Economics", "Venue": "Class Room : LA 001\t\t\t\tFullSemester", "Slots": ["9A", "9B"], "Instructors": ["Rama Pal", "Neha Gupta"], "Division": "D3"}, "EC101-D4": {"Code": "EC101-D4", "Name": "Economics", "Venue": "Class Room : LA 002\t\t\t\tFullSemester", "Slots": ["9A", "9B"], "Instructors": ["Narayanan K.", "Surajit Bhattacharya"], "Division": "D4"}, "EC221": {"Code": "EC221", "Name": "Intermediate Microeconomics I", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Narayanan K.", "Subrato  Banerjee"], "Division": null}, "EC223": {"Code": "EC223", "Name": "Intermediate Macroeconomics-I", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Surajit Bhattacharya"], "Division": null}, "EC225": {"Code": "EC225", "Name": "Mathematics for Economics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Aditi Balkrishna Chaubal"], "Division": null}, "EC227": {"Code": "EC227", "Name": "Statistics I", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Neha Gupta"], "Division": null}, "EC306": {"Code": "EC306", "Name": "Econometrics I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Souvik  Banerjee"], "Division": null}, "EC308": {"Code": "EC308", "Name": "Econometrics I Lab", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Souvik  Banerjee"], "Division": null}, "EC311": {"Code": "EC311", "Name": "International Economics I", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Radeef  Chundakkadan"], "Division": null}, "EC313": {"Code": "EC313", "Name": "Development Economics I", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Haripriya Gundimeda"], "Division": null}, "EC315": {"Code": "EC315", "Name": "Public Finance", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Rama Pal"], "Division": null}, "EC401": {"Code": "EC401", "Name": "Behavioral Foundations of Decision Making", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Subrato  Banerjee"], "Division": null}, "EC402": {"Code": "EC402", "Name": "Game Theory and Economic Analysis", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Saptarshi Prosonno Ghosh"], "Division": null}, "EC638": {"Code": "EC638", "Name": "Financial Econometrics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Pooja Padhi"], "Division": null}, "EC707": {"Code": "EC707", "Name": "Empirical Analysis of Corporate Governance", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Tara S. Shaw"], "Division": null}, "EC802": {"Code": "EC802", "Name": "Advanced Economic Theory", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Haripriya Gundimeda", "Narayanan K.", "Tara S. Shaw"], "Division": null}, "EE101": {"Code": "EE101", "Name": "Introduction to Electrical and Electronics Circuits", "Venue": "Class Room : LC 101\t\t\t\tFullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Narendra Shiradkar"], "Division": null}, "EE101-M": {"Code": "EE101-M", "Name": "Introduction to Electrical and Electronics Circuits", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Chatterjee Kishore"], "Division": "M"}, "EE103": {"Code": "EE103", "Name": "Introduction to Electrical Engineering", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["11B", "11A"], "Instructors": ["Fernandes B.G.", "J.John", "Sibi Raj B. Pillai", "M Belur"], "Division": null}, "EE114": {"Code": "EE114", "Name": "Power Engineering - I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Soman S.A."], "Division": null}, "EE204-S1": {"Code": "EE204-S1", "Name": "Analog Circuits", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["M.Shojaei Baghini"], "Division": "S1"}, "EE204-S2": {"Code": "EE204-S2", "Name": "Analog Circuits", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sandip  Mondal"], "Division": "S2"}, "EE207": {"Code": "EE207", "Name": "Electronic Devices &amp; Circuits", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Debanjan  Bhowmik"], "Division": null}, "EE207-M": {"Code": "EE207-M", "Name": "Electronic Devices &amp; Circuits", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Debanjan  Bhowmik"], "Division": "M"}, "EE214": {"Code": "EE214", "Name": "Digital Circuits Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Siddharth Tallur"], "Division": null}, "EE224": {"Code": "EE224", "Name": "Digital Systems", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Virendra Singh"], "Division": null}, "EE229-S1": {"Code": "EE229-S1", "Name": "Signal Processing \u2013 I", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Gadre V.M."], "Division": "S1"}, "EE229-S2": {"Code": "EE229-S2", "Name": "Signal Processing \u2013 I", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Jayakrishnan Nair"], "Division": "S2"}, "EE236": {"Code": "EE236", "Name": "Electronic Devices Lab", "Venue": "FullSemester", "Slots": ["L1", "L2"], "Instructors": ["Apurba Laha", "Saurabh Lodha"], "Division": null}, "EE301-S1": {"Code": "EE301-S1", "Name": "Electromagnetic Waves", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Bhaskaran Muralidharan"], "Division": "S1"}, "EE301-S2": {"Code": "EE301-S2", "Name": "Electromagnetic Waves", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Shevgaonkar R.K."], "Division": "S2"}, "EE324": {"Code": "EE324", "Name": "Control Systems Lab", "Venue": "FullSemester", "Slots": [], "Instructors": ["Debasattam Pal", "Debraj Chakraborty"], "Division": null}, "EE325-S1": {"Code": "EE325-S1", "Name": "Probability and Random Processes", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Manjunath D."], "Division": "S1"}, "EE325-S2": {"Code": "EE325-S2", "Name": "Probability and Random Processes", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Sharayu Moharir"], "Division": "S2"}, "EE340": {"Code": "EE340", "Name": "Communications Lab", "Venue": "FullSemester", "Slots": ["L4", "L3"], "Instructors": ["Jayakrishnan Nair"], "Division": null}, "EE341-S1": {"Code": "EE341-S1", "Name": "Communication Systems - I", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["B.K.Dey"], "Division": "S1"}, "EE341-S2": {"Code": "EE341-S2", "Name": "Communication Systems - I", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Gaurav S. Kasbekar"], "Division": "S2"}, "EE451": {"Code": "EE451", "Name": "Supervised Research Exposition", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chatterjee Kishore"], "Division": null}, "EE457": {"Code": "EE457", "Name": "Compound Semiconductor Material and Devices", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Dipankar Saha"], "Division": null}, "EE491": {"Code": "EE491", "Name": "BTP I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chatterjee Kishore"], "Division": null}, "EE501": {"Code": "EE501", "Name": "Spin-Based Computing", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Debanjan  Bhowmik"], "Division": null}, "EE601": {"Code": "EE601", "Name": "Statistical Signal Analysis", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["P.Chaporkar"], "Division": null}, "EE603": {"Code": "EE603", "Name": "Digital Signal Processing and its Applications", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Satish  Mulleti"], "Division": null}, "EE605": {"Code": "EE605", "Name": "Error Correcting Codes", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Nikhil Karamchandani"], "Division": null}, "EE609": {"Code": "EE609", "Name": "Radiating Systems", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["J.Mukherjee", "Kushal R. Tuckley"], "Division": null}, "EE610": {"Code": "EE610", "Name": "Image Processing", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["V Raj Babu"], "Division": null}, "EE6101": {"Code": "EE6101", "Name": "Nonlinear Fiber Optics and Devices", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Arun  Surendran"], "Division": null}, "EE6102": {"Code": "EE6102", "Name": "High-Frequency Magnetics for Power Electronics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Shiladri  Chakraborty"], "Division": null}, "EE6105": {"Code": "EE6105", "Name": "Power System Modeling and Control", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Anupama Kowli"], "Division": null}, "EE611": {"Code": "EE611", "Name": "Microwave Integrated Circuits", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["J.Mukherjee"], "Division": null}, "EE613": {"Code": "EE613", "Name": "Nonlinear Dynamical Systems", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Debasattam Pal"], "Division": null}, "EE616": {"Code": "EE616", "Name": "Electronic Systems Design", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Pandey P.C."], "Division": null}, "EE617": {"Code": "EE617", "Name": "Sensors in Instrumentation", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Siddharth Tallur"], "Division": null}, "EE618": {"Code": "EE618", "Name": "CMOS Analog VLSI Design", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Rajesh H. Zele"], "Division": null}, "EE635": {"Code": "EE635", "Name": "Applied Linear Algebra", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Dwaipayan  Mukherjee"], "Division": null}, "EE638": {"Code": "EE638", "Name": "Estimation and Identification", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Debraj Chakraborty"], "Division": null}, "EE640": {"Code": "EE640", "Name": "Multivariable Control Systems", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["M Belur"], "Division": null}, "EE653": {"Code": "EE653", "Name": "Power Electronics -I", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["M. Chandorkar"], "Division": null}, "EE657": {"Code": "EE657", "Name": "Electric Drives", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Chatterjee Kishore"], "Division": null}, "EE658": {"Code": "EE658", "Name": "Power System Dynamics and Control", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Kulkarni A.M."], "Division": null}, "EE659": {"Code": "EE659", "Name": "A First Course in Optimization", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Pillai Harish"], "Division": null}, "EE660": {"Code": "EE660", "Name": "Application of Power Electronics to Power Systems", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Anshuman Shukla"], "Division": null}, "EE669": {"Code": "EE669", "Name": "VLSI Technology", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Anil K.G."], "Division": null}, "EE671": {"Code": "EE671", "Name": "VLSI Design", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Sharma Dinesh"], "Division": null}, "EE673": {"Code": "EE673", "Name": "Power Systems &amp; Power Electronics Laboratory", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Prashant Navalkar", "Sandeep  Anand"], "Division": null}, "EE675": {"Code": "EE675", "Name": "Microprocessor Applications in Power Electronics", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Himanshu J. Bahirat"], "Division": null}, "EE678": {"Code": "EE678", "Name": "Wavelets", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Gadre V.M."], "Division": null}, "EE679": {"Code": "EE679", "Name": "Speech Processing", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Preeti Rao"], "Division": null}, "EE691": {"Code": "EE691", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chatterjee Kishore"], "Division": null}, "EE694": {"Code": "EE694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chatterjee Kishore"], "Division": null}, "EE703": {"Code": "EE703", "Name": "Digital Message Transmission", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Sibi Raj B. Pillai"], "Division": null}, "EE720": {"Code": "EE720", "Name": "An Introduction to Number Theory and Cryptography", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["S. Vijayakumaran"], "Division": null}, "EE721": {"Code": "EE721", "Name": "Hardware Description", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Patkar Sachin"], "Division": null}, "EE723": {"Code": "EE723", "Name": "Physics of Nanoelectronic Devices - I", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Kasturi Saha"], "Division": null}, "EE733": {"Code": "EE733", "Name": "Solid State Devices", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Pradeep R. Nair"], "Division": null}, "EE735": {"Code": "EE735", "Name": "Microelectronics Simulations Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Saurabh Lodha"], "Division": null}, "EE739": {"Code": "EE739", "Name": "Processor Design", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Virendra Singh"], "Division": null}, "EE746": {"Code": "EE746", "Name": "Neuromorphic Engineering", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Udayan Ganguli"], "Division": null}, "EE748": {"Code": "EE748", "Name": "Advanced Topics in Computer Architecture", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Virendra Singh"], "Division": null}, "EE781": {"Code": "EE781", "Name": "Integrated Circuit  Design for Sensor Systems", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Laxmeesha  Somappa"], "Division": null}, "EE782": {"Code": "EE782", "Name": "Advanced Topics in Machine Learning", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Amit Sethi"], "Division": null}, "EE788": {"Code": "EE788", "Name": "Advanced CMOS Logic and Flash Memory  Devices", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Souvik Mahapatra", "Sandip  Mondal"], "Division": null}, "EE789": {"Code": "EE789", "Name": "Algorithmic Design of Digital Systems", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Desai Madhav"], "Division": null}, "EE899": {"Code": "EE899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Prashant Navalkar", "Swaroop Ganguly"], "Division": null}, "EN110": {"Code": "EN110", "Name": "Energy Engineering Fundamentals", "Venue": "Class Room : LT 106\t\t\t\tFullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Kedare S B", "Suneet Singh"], "Division": null}, "EN203": {"Code": "EN203", "Name": "Thermodynamics and Energy Conversion", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Asish  Sarangi"], "Division": null}, "EN204": {"Code": "EN204", "Name": "Material Science for Energy Applications", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["K.R. Balasubramaniam"], "Division": null}, "EN213": {"Code": "EN213", "Name": "Electrical Networks and Machines", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["D. Suryanarayana", "Venkatramanan  D."], "Division": null}, "EN309": {"Code": "EN309", "Name": "Thermal &amp; Fluid Engineering Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Manaswita Bose"], "Division": null}, "EN313": {"Code": "EN313", "Name": "Power Electronics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ravi Prakash Reddy  Siddavatam"], "Division": null}, "EN315": {"Code": "EN315", "Name": "Reaction Engineering &amp; Combustion", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Seethamraju Srinivas"], "Division": null}, "EN317": {"Code": "EN317", "Name": "Thermo-Fluid Devices", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Anish Modi"], "Division": null}, "EN319": {"Code": "EN319", "Name": "Electrical Machines &amp; Power Electronics Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Ravi Prakash Reddy  Siddavatam", "V.S.S. Pavan Kumar Hari"], "Division": null}, "EN401": {"Code": "EN401", "Name": "Energy Systems modelling and analysis", "Venue": "FullSemester", "Slots": ["1C", "2C", "1B", "2B"], "Instructors": ["Venkatasailanathan Ramadesigan"], "Division": null}, "EN405": {"Code": "EN405", "Name": "Energy Innovation Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Sandeep Kumar"], "Division": null}, "EN407": {"Code": "EN407", "Name": "Chemistry for Energy Science", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["M.Neergat"], "Division": null}, "EN409": {"Code": "EN409", "Name": "Mathematical Foundation for Energy Science", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Lalit Kumar"], "Division": null}, "EN411": {"Code": "EN411", "Name": "Physics for Energy Science", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Karthik  Sasihithlu"], "Division": null}, "EN413": {"Code": "EN413", "Name": "Materials Science for Energy", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Shaibal Sarkar"], "Division": null}, "EN415": {"Code": "EN415", "Name": "Energy Laboratory I", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Lalit Kumar"], "Division": null}, "EN417": {"Code": "EN417", "Name": "Computer Programming", "Venue": "FullSemester", "Slots": ["3A", "4A", "3C", "4C"], "Instructors": ["V.S.S. Pavan Kumar Hari"], "Division": null}, "EN601": {"Code": "EN601", "Name": "Nonconventional Energy Sources", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Kedare S B"], "Division": null}, "EN602": {"Code": "EN602", "Name": "Foundation for Energy Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Manaswita Bose", "Zakir H. Rather"], "Division": null}, "EN606": {"Code": "EN606", "Name": "Energy Resources Economics and Environment", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Bandyopadhyay Santanu"], "Division": null}, "EN609": {"Code": "EN609", "Name": "Energy Systems Laboratory", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Anish Modi"], "Division": null}, "EN618": {"Code": "EN618", "Name": "Energy Systems Modelling &amp; Analysis", "Venue": "FullSemester", "Slots": ["1C", "2C", "1B", "2B"], "Instructors": ["Venkatasailanathan Ramadesigan"], "Division": null}, "EN624": {"Code": "EN624", "Name": "Conservation of Energy in Buildings", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Gurubalan  Annadurai"], "Division": null}, "EN632": {"Code": "EN632", "Name": "Waste to Energy", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sandeep Kumar"], "Division": null}, "EN637": {"Code": "EN637", "Name": "Principles and Applications of Hydrogen storage", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Sankara Sarma V. Tatiparti"], "Division": null}, "EN649": {"Code": "EN649", "Name": "Introduction to Particulate Flow", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Manaswita Bose"], "Division": null}, "EN655": {"Code": "EN655", "Name": "Energy Laboratory III", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Pratibha  Sharma"], "Division": null}, "EN658": {"Code": "EN658", "Name": "Electrochemical Energy Storage", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Sagar Mitra"], "Division": null}, "EN663": {"Code": "EN663", "Name": "Electric Vehicle Grid Integration", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Zakir H. Rather"], "Division": null}, "EN703": {"Code": "EN703", "Name": "Advanced Concepts in Solar Cell Technologies", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Rajesh Gupta"], "Division": null}, "EN899": {"Code": "EN899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["P.C.Ghosh"], "Division": null}, "ENT101": {"Code": "ENT101", "Name": "Introduction to Innovation &amp; Entrepreneurship", "Venue": "Class Room : LH 301\t\t\t\tFullSemester", "Slots": ["3B", "5A"], "Instructors": ["P Kumaresan", "Ramesh  Mangaleswaran", "Anuradha  Narasimhan"], "Division": null}, "ENT602": {"Code": "ENT602", "Name": "Technology Venture Creation", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Milind  Kopikare", "Nishant  Tikekar", "Sankalp  Pratap"], "Division": null}, "ENT602-M": {"Code": "ENT602-M", "Name": "Technology Venture Creation", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Milind  Kopikare", "Nishant  Tikekar", "Sankalp  Pratap"], "Division": "M"}, "ENT603": {"Code": "ENT603", "Name": "Introduction to Entrepreneurship", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Nishant  Tikekar", "Rajen Jaswa", "Rajkumar R. Hirwani", "Anuradha  Narasimhan"], "Division": null}, "ENT603-M": {"Code": "ENT603-M", "Name": "Introduction to Entrepreneurship", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Nishant  Tikekar", "Rajen Jaswa", "Rajkumar R. Hirwani", "Anuradha  Narasimhan"], "Division": "M"}, "ENT606": {"Code": "ENT606", "Name": "Developing a Proof of Concept- Basic", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Sankalp  Pratap", "P Kumaresan"], "Division": null}, "ENT606-M": {"Code": "ENT606-M", "Name": "Developing a Proof of Concept- Basic", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Sankalp  Pratap", "P Kumaresan"], "Division": "M"}, "ENT609": {"Code": "ENT609", "Name": "Marketing &amp; Finance for Entrepreneurs", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Umakant  Jayaram", "Devdip Purkayastha"], "Division": null}, "ENT609-M": {"Code": "ENT609-M", "Name": "Marketing &amp; Finance for Entrepreneurs", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Umakant  Jayaram", "Devdip Purkayastha"], "Division": "M"}, "ES101": {"Code": "ES101", "Name": "Introduction to Environmental Science &amp; Engineering", "Venue": "Class Room : LT 105\t\t\t\tFullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["S.R.Asolekar"], "Division": null}, "ES200-S1": {"Code": "ES200-S1", "Name": "Environmental Studies: Science and Engineering", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Srinidhi  Balasubramanian", "Swatantra Pratap  Singh", "Virendra Sethi"], "Division": "S1"}, "ES200-S2": {"Code": "ES200-S2", "Name": "Environmental Studies: Science and Engineering", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Anurag Garg", "Tabish  Nawaz", "Manoranjan  Sahu"], "Division": "S2"}, "ES201": {"Code": "ES201", "Name": "Applied Environmental Microbiology and Ecology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Indrajit  Chakraborty", "Suparna Mukherji"], "Division": null}, "ES203-M": {"Code": "ES203-M", "Name": "Water and Wastewater Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Venkata Sai Vamsi  Botlaguduru"], "Division": "M"}, "ES250": {"Code": "ES250", "Name": "Environmental Studies : Science and Engineering", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Srinidhi  Balasubramanian", "Swatantra Pratap  Singh", "Tabish  Nawaz", "Virendra Sethi"], "Division": null}, "ES253": {"Code": "ES253", "Name": "Environmental Microbiology Laboratory", "Venue": "FirstHalf", "Slots": ["L1", "L2"], "Instructors": ["Suparna Mukherji"], "Division": null}, "ES296": {"Code": "ES296", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhishek  Chakraborty", "Swatantra Pratap  Singh"], "Division": null}, "ES301": {"Code": "ES301", "Name": "Introduction to Fluid Mechanics", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Venkata Sai Vamsi  Botlaguduru", "Subhankar Karmakar"], "Division": null}, "ES303-M": {"Code": "ES303-M", "Name": "Municipal waste and biomedical waste management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Munish Kumar Chandel"], "Division": "M"}, "ES307": {"Code": "ES307", "Name": "Wastewater Engineering", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Indrajit  Chakraborty", "Abhishek  Chakraborty"], "Division": null}, "ES315": {"Code": "ES315", "Name": "Solid Waste Management - Basic Principles and Technical Aspects", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Anurag Garg"], "Division": null}, "ES317": {"Code": "ES317", "Name": "Fundamentals of Air Pollution Science and Engineering", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Virendra Sethi", "Srinidhi  Balasubramanian"], "Division": null}, "ES319": {"Code": "ES319", "Name": "Computational Laboratory for Environmental Engineering", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Tabish  Nawaz"], "Division": null}, "ES321": {"Code": "ES321", "Name": "Energy and Environmental Sustainability", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Munish Kumar Chandel"], "Division": null}, "ES351-S1": {"Code": "ES351-S1", "Name": "Air Pollution Monitoring Laboratory", "Venue": "FirstHalf", "Slots": ["L4", "L2"], "Instructors": ["Harish C. Phuleria", "Abhishek  Chakraborty"], "Division": "S1"}, "ES351-S2": {"Code": "ES351-S2", "Name": "Air Pollution Monitoring Laboratory", "Venue": "SecondHalf", "Slots": ["L1", "L2"], "Instructors": ["Harish C. Phuleria", "Abhishek  Chakraborty"], "Division": "S2"}, "ES401-M": {"Code": "ES401-M", "Name": "Environmental management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Srinidhi  Balasubramanian", "Amritanshu Shriwastav"], "Division": "M"}, "ES404": {"Code": "ES404", "Name": "Planning and Design of Environmental Engineering Facilities", "Venue": "FullSemester", "Slots": ["1B", "L2"], "Instructors": ["Sanjeev Chaudhari"], "Division": null}, "ES407": {"Code": "ES407", "Name": "Simulation &amp; Optimization Techniques in Environmental Systems", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Subhankar Karmakar", "Tabish  Nawaz"], "Division": null}, "ES451": {"Code": "ES451", "Name": "Field Studies", "Venue": "SecondHalf", "Slots": ["L4"], "Instructors": ["Swatantra Pratap  Singh", "Amritanshu Shriwastav"], "Division": null}, "ES494": {"Code": "ES494", "Name": "MSc-PhD Project II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Abhishek  Chakraborty", "Swatantra Pratap  Singh"], "Division": null}, "ES593": {"Code": "ES593", "Name": "Dual Degree Project Stage  I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Tabish  Nawaz"], "Division": null}, "ES601": {"Code": "ES601", "Name": "Environmental Health and Safety", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Harish C. Phuleria"], "Division": null}, "ES631": {"Code": "ES631", "Name": "Environmental Chemistry", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Harish C. Phuleria", "Tabish  Nawaz"], "Division": null}, "ES633": {"Code": "ES633", "Name": "Enviornmental Microbiology and Ecology", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Swatantra Pratap  Singh"], "Division": null}, "ES635": {"Code": "ES635", "Name": "Air Pollution Science and Engineering", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Manoranjan  Sahu", "Abhishek  Chakraborty"], "Division": null}, "ES637": {"Code": "ES637", "Name": "Municipal Water and Wastewater Systems", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sanjeev Chaudhari"], "Division": null}, "ES639": {"Code": "ES639", "Name": "Physico-Chemical Treatment Technologies", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["", "Suparna Mukherji"], "Division": null}, "ES645": {"Code": "ES645", "Name": "Environmental Law and Policy", "Venue": "FullSemester", "Slots": ["7B", "7A"], "Instructors": ["S.R.Asolekar"], "Division": null}, "ES647": {"Code": "ES647", "Name": "Municipal Solid and Biomedical Waste Management", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Munish Kumar Chandel", "A.K.Dikshit"], "Division": null}, "ES649": {"Code": "ES649", "Name": "Atmospheric Processes and Climate Change", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Abhishek  Chakraborty"], "Division": null}, "ES651": {"Code": "ES651", "Name": "Environmental Monitoring Laboratory", "Venue": "FullSemester", "Slots": ["L4", "LX"], "Instructors": ["Amritanshu Shriwastav", "Manoranjan  Sahu", "Swatantra Pratap  Singh"], "Division": null}, "ES653": {"Code": "ES653", "Name": "Environmental Impact Assessment", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["A.K.Dikshit"], "Division": null}, "ES655": {"Code": "ES655", "Name": "Environmental Management", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Srinidhi  Balasubramanian", "Amritanshu Shriwastav"], "Division": null}, "ES657": {"Code": "ES657", "Name": "Water Resources and Environmental Hydraulics\u201d", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Venkata Sai Vamsi  Botlaguduru", "Subhankar Karmakar"], "Division": null}, "ES659": {"Code": "ES659", "Name": "Mathematics and Statistics for Environmental Engineering\u201d", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Manoranjan  Sahu", "Amritanshu Shriwastav"], "Division": null}, "ES691": {"Code": "ES691", "Name": "R &amp; D Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Venkata Sai Vamsi  Botlaguduru", "Tabish  Nawaz"], "Division": null}, "ES694": {"Code": "ES694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Manoranjan  Sahu", "Munish Kumar Chandel"], "Division": null}, "ES797": {"Code": "ES797", "Name": "I Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Manoranjan  Sahu", "Munish Kumar Chandel"], "Division": null}, "ES899": {"Code": "ES899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["XC"], "Instructors": ["Harish C. Phuleria", "Virendra Sethi"], "Division": null}, "ESS801": {"Code": "ESS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Tabish  Nawaz", "Swatantra Pratap  Singh"], "Division": null}, "ET601": {"Code": "ET601", "Name": "Introduction to Educational Technology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ramkumar  Rajendran"], "Division": null}, "ET606": {"Code": "ET606", "Name": "Educational Technology -Tools Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Syaamantak  Das"], "Division": null}, "ET610": {"Code": "ET610", "Name": "Learning Analytics and Educational Data Mining", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Ramkumar  Rajendran"], "Division": null}, "ET612": {"Code": "ET612", "Name": "Statistical Methods for Educational Research", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Ritayan Mitra"], "Division": null}, "ET613": {"Code": "ET613", "Name": "Human-Computer Interaction for Educational Technology", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["S. R. Iyer"], "Division": null}, "ET619": {"Code": "ET619", "Name": "Field Work in Educational Technology", "Venue": "FullSemester", "Slots": [], "Instructors": ["Ramkumar  Rajendran"], "Division": null}, "ET621": {"Code": "ET621", "Name": "Basics of Educational Technology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sahana Murthy"], "Division": null}, "ET622": {"Code": "ET622", "Name": "Educational Text Data Analysis", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Syaamantak  Das"], "Division": null}, "ET899": {"Code": "ET899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["10A"], "Instructors": ["S. R. Iyer"], "Division": null}, "GNR401-M": {"Code": "GNR401-M", "Name": "Remote sensing and Image Processing", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Biplab  Banerjee", "Gulab Singh", "Avik Bhattacharya"], "Division": "M"}, "GNR403": {"Code": "GNR403", "Name": "Geoinformatics Lab", "Venue": "FullSemester", "Slots": ["XD"], "Instructors": ["Mohan B.Krishna"], "Division": null}, "GNR405-M": {"Code": "GNR405-M", "Name": "Mini Project", "Venue": "FullSemester", "Slots": ["XD"], "Instructors": ["Mohan B.Krishna"], "Division": "M"}, "GNR407-M": {"Code": "GNR407-M", "Name": "Natural Hazards and Disaster Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Gulab Singh", "Alok Porwal"], "Division": "M"}, "GNR409-M": {"Code": "GNR409-M", "Name": "Terrain Evaluation and Landuse Planning", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Adinarayana J.", "Gedam S.S."], "Division": "M"}, "GNR603": {"Code": "GNR603", "Name": "Principles of Remote Sensing", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Avik Bhattacharya", "Alok Porwal"], "Division": null}, "GNR605": {"Code": "GNR605", "Name": "Principles of Geographic Information Systems", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Surya Durbha"], "Division": null}, "GNR607": {"Code": "GNR607", "Name": "Principles of Satellite Image Processing", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Mohan B.Krishna"], "Division": null}, "GNR615": {"Code": "GNR615", "Name": "GIS Laboratory", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Surya Durbha"], "Division": null}, "GNR617": {"Code": "GNR617", "Name": "Image Interpretation Laboratory", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Rao Y.S.", "Adinarayana J."], "Division": null}, "GNR619": {"Code": "GNR619", "Name": "Natural Resources : Lithosphere and Biosphere", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Alok Porwal", "Adinarayana J."], "Division": null}, "GNR621": {"Code": "GNR621", "Name": "Natural Resources: Hydroshpere Cryosphere and Atmosphere", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Deepak  Singh", "Karthikeyan  Lanka", "Gulab Singh"], "Division": null}, "GNR623": {"Code": "GNR623", "Name": "GPS : Principles and Applications", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Gedam S.S."], "Division": null}, "GNR627": {"Code": "GNR627", "Name": "Geospatial Predictive Modelling", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Alok Porwal"], "Division": null}, "GNR642": {"Code": "GNR642", "Name": "Scattering Models in Microwave Remote Sensing", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Gulab Singh"], "Division": null}, "GNR650": {"Code": "GNR650", "Name": "Advanced topics in deep learning for image analysis", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Biplab  Banerjee"], "Division": null}, "GNR653": {"Code": "GNR653", "Name": "Data Analysis Methods for Geospatial Applications", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Avik Bhattacharya", "Deepak  Singh", "Mohan B.Krishna", "Karthikeyan  Lanka"], "Division": null}, "GNR798": {"Code": "GNR798", "Name": "II Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avik Bhattacharya"], "Division": null}, "GNR805": {"Code": "GNR805", "Name": "Advanced Concepts in Polarimetric SAR Image Analysis", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Rao Y.S.", "Avik Bhattacharya"], "Division": null}, "GNR899": {"Code": "GNR899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Deepak  Singh", "Avik Bhattacharya"], "Division": null}, "GNRS01": {"Code": "GNRS01", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Karthikeyan  Lanka"], "Division": null}, "GP401": {"Code": "GP401", "Name": "Global Geophysics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Kumar Hemant Singh"], "Division": null}, "GP403": {"Code": "GP403", "Name": "Earthquake and Engineering Seismology", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Satish Maurya"], "Division": null}, "GP407": {"Code": "GP407", "Name": "Seismology Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Satish Maurya"], "Division": null}, "GP413": {"Code": "GP413", "Name": "Mineralogy &amp; Petrology", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Prabhakar Naraga"], "Division": null}, "GP415": {"Code": "GP415", "Name": "Mineralogy &amp; Petrology Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Patel S.C."], "Division": null}, "GP503": {"Code": "GP503", "Name": "Geophysical Signal Processing", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["E. Chandrasekhar"], "Division": null}, "GP505": {"Code": "GP505", "Name": "Electromagnetic Methods", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["E. Chandrasekhar"], "Division": null}, "GP517": {"Code": "GP517", "Name": "Exploration Seismology II", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Bharath C. Shekar"], "Division": null}, "GP519": {"Code": "GP519", "Name": "Engineering &amp; Ground Water Geology Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Vikram Vishal", "D. Ramakrishnan"], "Division": null}, "GP521": {"Code": "GP521", "Name": "Electromagnetic Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Anand  Singh"], "Division": null}, "GP523": {"Code": "GP523", "Name": "Industrial Training", "Venue": "FullSemester", "Slots": [], "Instructors": ["Bharath C. Shekar"], "Division": null}, "GP525": {"Code": "GP525", "Name": "Computational Geophysics", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Anand  Singh"], "Division": null}, "GS407": {"Code": "GS407", "Name": "Strucural Geology", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Malay Mukul"], "Division": null}, "GS413": {"Code": "GS413", "Name": "Structural Geology Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Malay Mukul"], "Division": null}, "GS415": {"Code": "GS415", "Name": "Applied Mineralogy and X-Ray Crystallography", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Mathew George"], "Division": null}, "GS421": {"Code": "GS421", "Name": "Palaeontology", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Nibedita  Rakshit", "Jahnavi Punekar"], "Division": null}, "GS433": {"Code": "GS433", "Name": "Palaeontology Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Jahnavi Punekar", "Nibedita  Rakshit"], "Division": null}, "GS435": {"Code": "GS435", "Name": "Mineralogy Crystallography and Optics Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Mathew George"], "Division": null}, "GS507": {"Code": "GS507", "Name": "Engineering &amp; Ground Water Geology", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Vikram Vishal", "D. Ramakrishnan"], "Division": null}, "GS517": {"Code": "GS517", "Name": "Solid Earth and Exploration Geophysics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["M. Radhakrishna", "Mohan G."], "Division": null}, "GS519": {"Code": "GS519", "Name": "Ore Petrography Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Sakthi Saravanan Chinnasamy"], "Division": null}, "GS527": {"Code": "GS527", "Name": "Ore Petrology", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Sakthi Saravanan Chinnasamy"], "Division": null}, "GS535": {"Code": "GS535", "Name": "Statistical Methods in Geosciences", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Kumar Hemant Singh"], "Division": null}, "GS537": {"Code": "GS537", "Name": "Geochemistry and Geochemical Thermodynamics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Prabhakar Naraga", "Sheth C Hetu"], "Division": null}, "GS539": {"Code": "GS539", "Name": "Engineering Geology and Groundwater Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Vikram Vishal", "D. Ramakrishnan"], "Division": null}, "GS541": {"Code": "GS541", "Name": "Analytical Geochemistry Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Patel S.C."], "Division": null}, "GS543": {"Code": "GS543", "Name": "Computer Programming for Geosciences", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Anand  Singh"], "Division": null}, "GS551": {"Code": "GS551", "Name": "Industrial Training", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prabhakar Naraga"], "Division": null}, "GS647": {"Code": "GS647", "Name": "Principles and Applications in Isotope Geology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Bivin Geo George", "Sameer  Ranjan"], "Division": null}, "GS649": {"Code": "GS649", "Name": "Tectonics and Mechanism of Mobile Belts", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Patel S.C."], "Division": null}, "GS663": {"Code": "GS663", "Name": "Exploration Geophysics", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["M. Radhakrishna"], "Division": null}, "GS666": {"Code": "GS666", "Name": "Applied Ichnology", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Sudipta Dasgupta"], "Division": null}, "GS671": {"Code": "GS671", "Name": "Groundwater Exploration", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["D. Ramakrishnan"], "Division": null}, "GS673": {"Code": "GS673", "Name": "Mineral Exploration", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sameer  Ranjan", "Sakthi Saravanan Chinnasamy"], "Division": null}, "GS675": {"Code": "GS675", "Name": "Petroleum Exploration", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sudipta Dasgupta", "Banerjee Santanu"], "Division": null}, "GS679": {"Code": "GS679", "Name": "Basin Analysis and Applied Micropalaeontology", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Jahnavi Punekar", "Banerjee Santanu"], "Division": null}, "GS687": {"Code": "GS687", "Name": "Methods in Structural Geology", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Soumyajit Mukherjee"], "Division": null}, "GS688": {"Code": "GS688", "Name": "Petroleum Geochemistry", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Suryendu Dutta"], "Division": null}, "GS691": {"Code": "GS691", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Satish Maurya"], "Division": null}, "GS694": {"Code": "GS694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vikram Vishal", "Kumar Hemant Singh"], "Division": null}, "GS701": {"Code": "GS701", "Name": "Seismic Data Processing and Seismic Stratigraphy", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Bharath C. Shekar"], "Division": null}, "GS703": {"Code": "GS703", "Name": "Structural Geology and Subsurface Geological Mapping", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Soumyajit Mukherjee"], "Division": null}, "GS709": {"Code": "GS709", "Name": "Reservoir Geomechanics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Vikram Vishal"], "Division": null}, "GS813": {"Code": "GS813", "Name": "Topics in Igneous Petrology and Volcanology", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Sheth C Hetu"], "Division": null}, "GS827": {"Code": "GS827", "Name": "Seismology and Earth Structure", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Satish Maurya", "Mohan G."], "Division": null}, "GS831": {"Code": "GS831", "Name": "Global Tectonics", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["M. Radhakrishna"], "Division": null}, "GS833": {"Code": "GS833", "Name": "Advanced Ichnology in Palaeoenvironmental Characterization", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Sudipta Dasgupta"], "Division": null}, "GS899": {"Code": "GS899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Kumar Hemant Singh", "Banerjee Santanu"], "Division": null}, "GSS801": {"Code": "GSS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jahnavi Punekar"], "Division": null}, "HS108-S1": {"Code": "HS108-S1", "Name": "Doing Sociology", "Venue": "Class Room : LC 001\t\t\t\tFullSemester", "Slots": ["3B", "5A"], "Instructors": ["Ramesh Bairy"], "Division": "S1"}, "HS108-S2": {"Code": "HS108-S2", "Name": "Doing Sociology", "Venue": "Class Room : LC 001\t\t\t\tFullSemester", "Slots": ["3C", "X3"], "Instructors": ["Ilito H. Achumi"], "Division": "S2"}, "HS109-S1": {"Code": "HS109-S1", "Name": "Introduction to Philosophy", "Venue": "Class Room : LC 002\t\t\t\tFullSemester", "Slots": ["3B", "5A"], "Instructors": ["Amrita Banerjee"], "Division": "S1"}, "HS109-S2": {"Code": "HS109-S2", "Name": "Introduction to Philosophy", "Venue": "Class Room : LC 002\t\t\t\tFullSemester", "Slots": ["3C", "X3"], "Instructors": ["Rajkishore Nath"], "Division": "S2"}, "HS200-S1": {"Code": "HS200-S1", "Name": "Environmental Studies", "Venue": "SecondHalf", "Slots": ["1A", "1C", "1B"], "Instructors": ["Haripriya Gundimeda", "Mahendra Dindayal Shahare", "Vikram Singh Sirola"], "Division": "S1"}, "HS200-S2": {"Code": "HS200-S2", "Name": "Environmental Studies", "Venue": "FirstHalf", "Slots": ["4A", "4C", "4B"], "Instructors": ["Haripriya Gundimeda", "Mahendra Dindayal Shahare", "Vikram Singh Sirola"], "Division": "S2"}, "HS207-M": {"Code": "HS207-M", "Name": "Social Psychology", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Mrinmoyi Kulkarni"], "Division": "M"}, "HS250": {"Code": "HS250", "Name": "Environmental Studies", "Venue": "SecondHalf", "Slots": ["4A", "4C", "4B"], "Instructors": ["Haripriya Gundimeda", "Mahendra Dindayal Shahare", "Vikram Singh Sirola"], "Division": null}, "HS301": {"Code": "HS301", "Name": "Philosophy", "Venue": "Class Room : LA 001\t\t\t\tFullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["C.D. Sebastian"], "Division": null}, "HS303": {"Code": "HS303", "Name": "Psychology", "Venue": "Class Room : LA 002\t\t\t\tFullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["A. Khan"], "Division": null}, "HS305": {"Code": "HS305", "Name": "Reading Literature", "Venue": "Class Room : LH 302\t\t\t\tFullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Sharmistha Saha", "Sharmila"], "Division": null}, "HS307-S1": {"Code": "HS307-S1", "Name": "Sociology", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Suryakant Waghmore"], "Division": "S1"}, "HS307-S2": {"Code": "HS307-S2", "Name": "Sociology", "Venue": "Class Room : LH 102\t\t\t\tFullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Raile Rocky Ziipao"], "Division": "S2"}, "HS412": {"Code": "HS412", "Name": "Social Movement and Social Change: Contemporary Reflections", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Sarmistha Pattanaik"], "Division": null}, "HS436": {"Code": "HS436", "Name": "Indian Culture and Tradition", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Kulkarni A Malhar"], "Division": null}, "HS443": {"Code": "HS443", "Name": "Philosophy and History of Science", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Vikram Singh Sirola"], "Division": null}, "HS467": {"Code": "HS467", "Name": "Indian Philosophy", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ratikanta Panda"], "Division": null}, "HS501": {"Code": "HS501", "Name": "Vedanta Philosophy in the Vedic Tradition", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Mrinal  Kaul"], "Division": null}, "HS503": {"Code": "HS503", "Name": "Philosophy in the Age of the Greeks", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Pravesh Jung Golay"], "Division": null}, "HS505": {"Code": "HS505", "Name": "Western Philosophy and the Advent of Modern Science", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["R.K. Panda"], "Division": null}, "HS558": {"Code": "HS558", "Name": "Introduction to Philosophical Hermeneutics", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Arun A. Iyer"], "Division": null}, "HS597": {"Code": "HS597", "Name": "Project Stage I", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Pravesh Jung Golay"], "Division": null}, "HS599": {"Code": "HS599", "Name": "Project Stage III", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Amrita Banerjee"], "Division": null}, "HS626": {"Code": "HS626", "Name": "Framing Caste", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ramesh Bairy"], "Division": null}, "HS635": {"Code": "HS635", "Name": "Managerial Psychology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Pooja Purang"], "Division": null}, "HS636": {"Code": "HS636", "Name": "Development of Mathematics in India", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["K. Ramasubramanian"], "Division": null}, "HS637": {"Code": "HS637", "Name": "Anthropology  and  Disaster", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Mahendra Dindayal Shahare"], "Division": null}, "HS642": {"Code": "HS642", "Name": "Notation and Musical Analysis", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Suddhaseel Sen"], "Division": null}, "HS647": {"Code": "HS647", "Name": "Social Theory - I", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Anush Kapadia", "Robinson Rowena"], "Division": null}, "HS650": {"Code": "HS650", "Name": "Research Methods: Expository Writing &amp; Analysis", "Venue": "FullSemester", "Slots": ["10B"], "Instructors": ["Sarma Vaijayanthi"], "Division": null}, "HS651": {"Code": "HS651", "Name": "Research Methods: Critical Reading", "Venue": "FullSemester", "Slots": ["11B"], "Instructors": ["Sharmila"], "Division": null}, "HS652": {"Code": "HS652", "Name": "Research Methods: Qualitative Methods", "Venue": "FullSemester", "Slots": ["X1"], "Instructors": ["Robinson Rowena"], "Division": null}, "HS653": {"Code": "HS653", "Name": "Research Methods : Sources and Methods and the Past", "Venue": "FullSemester", "Slots": ["X3"], "Instructors": ["Naina  Manjrekar", "Smriti  Haricharan"], "Division": null}, "HS659": {"Code": "HS659", "Name": "Shakespeare`s Plays and their Afterlives", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Shastri Sudha"], "Division": null}, "HS668": {"Code": "HS668", "Name": "Studying Literature", "Venue": "SecondHalf", "Slots": ["5B", "5A"], "Instructors": ["Sharmila"], "Division": null}, "HS669": {"Code": "HS669", "Name": "Studying Performance", "Venue": "FirstHalf", "Slots": ["6B", "6A"], "Instructors": ["A.P. Rajaram"], "Division": null}, "HS670": {"Code": "HS670", "Name": "Studying Media", "Venue": "SecondHalf", "Slots": ["6B", "6A"], "Instructors": ["A.P. Rajaram"], "Division": null}, "HS671": {"Code": "HS671", "Name": "Historicising Society State and Culture", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["Naina  Manjrekar"], "Division": null}, "HS672": {"Code": "HS672", "Name": "From the ground up: Basics of History and Archaeology", "Venue": "FirstHalf", "Slots": ["9A", "9B"], "Instructors": ["Smriti  Haricharan"], "Division": null}, "HS673": {"Code": "HS673", "Name": "Affective Neuroscience", "Venue": "FirstHalf", "Slots": ["6B", "6A"], "Instructors": ["Rashmi Gupta"], "Division": null}, "HS674": {"Code": "HS674", "Name": "Fundamentals of Language Science", "Venue": "FirstHalf", "Slots": ["5B", "5A"], "Instructors": ["Sarma Vaijayanthi"], "Division": null}, "HS711": {"Code": "HS711", "Name": "Philosophy of Janasabdavada", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Kulkarni A Malhar"], "Division": null}, "HS800": {"Code": "HS800", "Name": "Research Methods in Social Sciences", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Ahonaa Roy"], "Division": null}, "HS809": {"Code": "HS809", "Name": "Practice and Theory of  Literary Research", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Vibhushan  Subba", "A.P. Rajaram"], "Division": null}, "HS835": {"Code": "HS835", "Name": "Performance Theory and Praxis", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Sharmistha Saha"], "Division": null}, "HS851": {"Code": "HS851", "Name": "Topics in Phonology and Morphology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sarma Vaijayanthi"], "Division": null}, "HS861": {"Code": "HS861", "Name": "Advanced Course on Historiography", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Naina  Manjrekar"], "Division": null}, "HS862": {"Code": "HS862", "Name": "Archaeological methods and theory", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Smriti  Haricharan"], "Division": null}, "HS863": {"Code": "HS863", "Name": "Philosophy of Indian Aesthetics", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Mrinal  Kaul"], "Division": null}, "HS899": {"Code": "HS899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["A.P. Rajaram", "Arun A. Iyer", "K. Ramasubramanian", "Smriti  Haricharan", "Robinson Rowena"], "Division": null}, "HSS801": {"Code": "HSS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Rajkishore Nath"], "Division": null}, "IE501": {"Code": "IE501", "Name": "Optimization Models", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Avinash  Bhardwaj"], "Division": null}, "IE501-M": {"Code": "IE501-M", "Name": "Optimization Models", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Avinash  Bhardwaj"], "Division": "M"}, "IE503": {"Code": "IE503", "Name": "Operations Analysis", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Ashutosh  Mahajan"], "Division": null}, "IE503-M": {"Code": "IE503-M", "Name": "Operations Analysis", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Ashutosh  Mahajan"], "Division": "M"}, "IE507": {"Code": "IE507", "Name": "Modeling &amp; Computation Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["N. Hemachandra", "J. Venkateswaran"], "Division": null}, "IE509": {"Code": "IE509", "Name": "Computer Programming Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Rangaraj Narayan"], "Division": null}, "IE605": {"Code": "IE605", "Name": "Engineering Statistics", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Manjesh K. Hanawal"], "Division": null}, "IE609": {"Code": "IE609", "Name": "Mathematical Optimisation Techniques", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["V. Narayanan"], "Division": null}, "IE609-M": {"Code": "IE609-M", "Name": "Mathematical Optimisation Techniques", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["V. Narayanan"], "Division": "M"}, "IE619": {"Code": "IE619", "Name": "Combinatorial Game Theory", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Urban  Larsson"], "Division": null}, "IE619-M": {"Code": "IE619-M", "Name": "Combinatorial Game Theory", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Urban  Larsson"], "Division": "M"}, "IE621": {"Code": "IE621", "Name": "Probability and Stochastic Processes I", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["K.S.Mallikarjuna Rao"], "Division": null}, "IE621-M": {"Code": "IE621-M", "Name": "Probability and Stochastic Processes I", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["K.S.Mallikarjuna Rao"], "Division": "M"}, "IE643": {"Code": "IE643", "Name": "Deep Learning - Theory and Practice", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["P. Balamurugan"], "Division": null}, "IE685": {"Code": "IE685", "Name": "MSc.Phd. Research Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Manjesh K. Hanawal"], "Division": null}, "IE688": {"Code": "IE688", "Name": "R &amp; D Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["P. Balamurugan"], "Division": null}, "IE708": {"Code": "IE708", "Name": "Markov Decision Processes", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["N. Hemachandra"], "Division": null}, "IE708-M": {"Code": "IE708-M", "Name": "Markov Decision Processes", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["N. Hemachandra"], "Division": "M"}, "IE714": {"Code": "IE714", "Name": "Quantitative Models for Supply Chain Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Rangaraj Narayan", "J. Venkateswaran"], "Division": null}, "IE714-M": {"Code": "IE714-M", "Name": "Quantitative Models for Supply Chain Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Rangaraj Narayan", "J. Venkateswaran"], "Division": "M"}, "IE797": {"Code": "IE797", "Name": "I Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["K.S.Mallikarjuna Rao"], "Division": null}, "IE899": {"Code": "IE899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ashutosh  Mahajan"], "Division": null}, "IES801": {"Code": "IES801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Ashutosh  Mahajan"], "Division": null}, "MA105-D1": {"Code": "MA105-D1", "Name": "Calculus", "Venue": "Class Room : LA 201\t\t\t\tFullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Mayukh  Mukherjee", "Sandip Singh"], "Division": "D1"}, "MA105-D2": {"Code": "MA105-D2", "Name": "Calculus", "Venue": "Class Room : LA 201\t\t\t\tFullSemester", "Slots": ["8A", "8B"], "Instructors": ["Bata K. Das", "Ravi Raghunathan"], "Division": "D2"}, "MA105-D3": {"Code": "MA105-D3", "Name": "Calculus", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Mayukh  Mukherjee", "Ravi Raghunathan"], "Division": "D3"}, "MA105-D4": {"Code": "MA105-D4", "Name": "Calculus", "Venue": "Class Room : LA 202\t\t\t\tFullSemester", "Slots": ["9A", "9B"], "Instructors": ["Bata K. Das", "Sandip Singh"], "Division": "D4"}, "MA113": {"Code": "MA113", "Name": "Mathematics and Its History", "Venue": "Class Room : LT 105\t\t\t\tFullSemester", "Slots": ["11B", "11A"], "Instructors": ["Madhusudan Manjunath"], "Division": null}, "MA114": {"Code": "MA114", "Name": "An Introduction to Mathematical Concepts", "Venue": "Class Room : LT 105\t\t\t\tFullSemester", "Slots": ["6B", "6A"], "Instructors": ["Ghorpade S.R."], "Division": null}, "MA401": {"Code": "MA401", "Name": "Linear Algebra", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Sivaji Ganesh S."], "Division": null}, "MA403": {"Code": "MA403", "Name": "Real Analysis", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Sudarshan Gurjar"], "Division": null}, "MA403-M": {"Code": "MA403-M", "Name": "Real Analysis", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["G. K. Srinivasan"], "Division": "M"}, "MA417": {"Code": "MA417", "Name": "Ordinary Differential Equations", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Saikat  Mazumdar"], "Division": null}, "MA419": {"Code": "MA419", "Name": "Basic Algebra", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Puthenpurakal J Tony"], "Division": null}, "MA419-M": {"Code": "MA419-M", "Name": "Basic Algebra", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Preeti Raman"], "Division": "M"}, "MA503": {"Code": "MA503", "Name": "Functional Analysis", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Mallesham  Kummari"], "Division": null}, "MA5101": {"Code": "MA5101", "Name": "Algebra II", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Saurav Bhaumik"], "Division": null}, "MA5102": {"Code": "MA5102", "Name": "Basic Algebraic Topology", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Rekha Santhanam"], "Division": null}, "MA5109": {"Code": "MA5109", "Name": "Graph Theory", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Niranjan  Balachandran"], "Division": null}, "MA5112": {"Code": "MA5112", "Name": "Introduction to Mathematical Methods", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Sanjoy Pusti"], "Division": null}, "MA5115": {"Code": "MA5115", "Name": "Hopf Algebras", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Swapneel A. Mahajan"], "Division": null}, "MA515": {"Code": "MA515", "Name": "Partial Differential Equations", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Harsha  Hutridurga Ramaiah"], "Division": null}, "MA521": {"Code": "MA521", "Name": "Theory of Analytic Functions", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Sourav Pal"], "Division": null}, "MA538": {"Code": "MA538", "Name": "Representation Theory of Finite Groups", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["K. Sivasubramanian"], "Division": null}, "MA811": {"Code": "MA811", "Name": "Algebra I", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Verma J.K."], "Division": null}, "MA813": {"Code": "MA813", "Name": "Measure Theory", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Dipendra  Prasad"], "Division": null}, "MA815": {"Code": "MA815", "Name": "Differential Topology", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Manoj Kumar keshari"], "Division": null}, "MA817": {"Code": "MA817", "Name": "Partial Differential Equations I", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Debanjana  Mitra"], "Division": null}, "MA841": {"Code": "MA841", "Name": "Topics in Algebra I", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Swapneel A. Mahajan"], "Division": null}, "MA855": {"Code": "MA855", "Name": "Topics in Numerical Analysis I", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Nataraj Neela"], "Division": null}, "MA861": {"Code": "MA861", "Name": "Combinatorics I", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["K. Sivasubramanian"], "Division": null}, "MA863": {"Code": "MA863", "Name": "Theoretical Statistics I", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Vellaisamy P."], "Division": null}, "MA899": {"Code": "MA899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Ronnie M. Sebastain"], "Division": null}, "SI419": {"Code": "SI419", "Name": "Combinatorics", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Srinivasan M.K."], "Division": null}, "SI423": {"Code": "SI423", "Name": "Linear Algebra and its Applications", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Ananthnarayan Hariharan"], "Division": null}, "SI424-M": {"Code": "SI424-M", "Name": "Statistical Inference I", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Debraj  Das"], "Division": "M"}, "SI427-M": {"Code": "SI427-M", "Name": "Probability I", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Koushik Saha"], "Division": "M"}, "SI427-S1": {"Code": "SI427-S1", "Name": "Probability I", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Koushik Saha"], "Division": "S1"}, "SI427-S2": {"Code": "SI427-S2", "Name": "Probability I", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["S.Baskar"], "Division": "S2"}, "SI429": {"Code": "SI429", "Name": "Real analysis", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Prachi Mahajan"], "Division": null}, "SI431": {"Code": "SI431", "Name": "Introduction to Data Analysis using R", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Sabnis S.V."], "Division": null}, "SI503": {"Code": "SI503", "Name": "Categorical Data Analysis", "Venue": "FullSemester", "Slots": ["13A", "13B"], "Instructors": ["Ashish Das"], "Division": null}, "SI505": {"Code": "SI505", "Name": "Multivariate Analysis", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["S. Mukhopadhyay"], "Division": null}, "SI515": {"Code": "SI515", "Name": "Statistical Techniques in Data Mining", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Radhendushka Srivastava"], "Division": null}, "SI537": {"Code": "SI537", "Name": "Probability II", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Ayan  Bhattacharya"], "Division": null}, "SI543": {"Code": "SI543", "Name": "Asymptotic Statistics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Monika  Bhattacharjee"], "Division": null}, "ME103": {"Code": "ME103", "Name": "Mechanical Department Introductory Course I", "Venue": "Class Room : LA 201\t\t\t\tFullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Neeraj Kumbhakarna", "Date P.P."], "Division": null}, "ME209-S1": {"Code": "ME209-S1", "Name": "Thermodynamics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Abhijeet  Kumar"], "Division": "S1"}, "ME209-S2": {"Code": "ME209-S2", "Name": "Thermodynamics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Sandip  Kumar Saha"], "Division": "S2"}, "ME209-S3": {"Code": "ME209-S3", "Name": "Thermodynamics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Upendra Bhandarkar"], "Division": "S3"}, "ME218-S1": {"Code": "ME218-S1", "Name": "Solid Mechanics Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["V. Kartik"], "Division": "S1"}, "ME218-S2": {"Code": "ME218-S2", "Name": "Solid Mechanics Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Nitesh  Yelve"], "Division": "S2"}, "ME221-S1": {"Code": "ME221-S1", "Name": "Structural Materials", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Pradeep Dixit"], "Division": "S1"}, "ME221-S2": {"Code": "ME221-S2", "Name": "Structural Materials", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Date P.P."], "Division": "S2"}, "ME221-S3": {"Code": "ME221-S3", "Name": "Structural Materials", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Soham Mujumdar"], "Division": "S3"}, "ME223-M": {"Code": "ME223-M", "Name": "Solid Mechanics and Strength of Materials", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["R. Ganesh"], "Division": "M"}, "ME223-S1": {"Code": "ME223-S1", "Name": "Solid Mechanics and Strength of Materials", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["R. Ganesh"], "Division": "S1"}, "ME223-S2": {"Code": "ME223-S2", "Name": "Solid Mechanics and Strength of Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Darshan Sunil Shah"], "Division": "S2"}, "ME223-S3": {"Code": "ME223-S3", "Name": "Solid Mechanics and Strength of Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["D.N. Pawaskar"], "Division": "S3"}, "ME307-S1": {"Code": "ME307-S1", "Name": "Mechanical Measurements Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Ankit  Jain", "Dipanshu  Bansal", "Neeraj Kumbhakarna", "Prabhu S V"], "Division": "S1"}, "ME307-S2": {"Code": "ME307-S2", "Name": "Mechanical Measurements Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Ankit  Jain", "Dipanshu  Bansal", "Neeraj Kumbhakarna", "Prabhu S V"], "Division": "S2"}, "ME311-S1": {"Code": "ME311-S1", "Name": "Microprocessors and Automatic Control", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Vivek Sangwan"], "Division": "S1"}, "ME311-S2": {"Code": "ME311-S2", "Name": "Microprocessors and Automatic Control", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Abhishek  Gupta"], "Division": "S2"}, "ME338-M": {"Code": "ME338-M", "Name": "Manufacturing Processes II", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Deepak Marla"], "Division": "M"}, "ME338-S1": {"Code": "ME338-S1", "Name": "Manufacturing Processes II", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Gurminder  Singh"], "Division": "S1"}, "ME338-S2": {"Code": "ME338-S2", "Name": "Manufacturing Processes II", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Pande S.S."], "Division": "S2"}, "ME338-S3": {"Code": "ME338-S3", "Name": "Manufacturing Processes II", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Deepak Marla"], "Division": "S3"}, "ME346-S1": {"Code": "ME346-S1", "Name": "Heat Transfer", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Shankar Krishnan"], "Division": "S1"}, "ME346-S2": {"Code": "ME346-S2", "Name": "Heat Transfer", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Prabhu S V"], "Division": "S2"}, "ME346-S3": {"Code": "ME346-S3", "Name": "Heat Transfer", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ankit  Jain"], "Division": "S3"}, "ME350": {"Code": "ME350", "Name": "Refrigeration and Airconditioning", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["M.D.Atrey"], "Division": null}, "ME374-S1": {"Code": "ME374-S1", "Name": "Manufacturing Processes Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Amol A. Gokhale", "Asim Tewari", "Date P.P.", "De Amitava", "Gurminder  Singh", "Pradeep Dixit", "Sushil Mishra", "Shyamprasad Karagadde"], "Division": "S1"}, "ME374-S2": {"Code": "ME374-S2", "Name": "Manufacturing Processes Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Amol A. Gokhale", "Asim Tewari", "Date P.P.", "De Amitava", "Gurminder  Singh", "Pradeep Dixit", "Sushil Mishra", "Shyamprasad Karagadde"], "Division": "S2"}, "ME409": {"Code": "ME409", "Name": "Intelligent Manufacturing Systems Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Asim Tewari", "Deepak Marla", "Makarand S. Kulkarni", "Shyamprasad Karagadde", "Sushil Mishra", "Soham Mujumdar"], "Division": null}, "ME423": {"Code": "ME423", "Name": "Machine Design", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["R.K.Singh"], "Division": null}, "ME438": {"Code": "ME438", "Name": "Introduction to modeling of materials from atomistics to continuum", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Amit  Singh"], "Division": null}, "ME441-S1": {"Code": "ME441-S1", "Name": "Applied Thermodynamics Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Abhijeet  Kumar", "Janani S. Murallidharan", "Sreedhara Sheshadri", "Rane Milind"], "Division": "S1"}, "ME441-S2": {"Code": "ME441-S2", "Name": "Applied Thermodynamics Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Abhijeet  Kumar", "Janani S. Murallidharan", "Sreedhara Sheshadri", "Rane Milind"], "Division": "S2"}, "ME460": {"Code": "ME460", "Name": "Solid State Joining", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Amber Shrivastava"], "Division": null}, "ME601": {"Code": "ME601", "Name": "Stress Analysis", "Venue": "FullSemester", "Slots": ["7B", "7A"], "Instructors": ["Salil Kulkarni"], "Division": null}, "ME603": {"Code": "ME603", "Name": "Kinematics and Dynamics of Machinery", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Sripriya Ramamoorthy", "Guha Anirban"], "Division": null}, "ME6101": {"Code": "ME6101", "Name": "Lattice Dynamics and Thermal Energy Transport", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Dipanshu  Bansal"], "Division": null}, "ME6110": {"Code": "ME6110", "Name": "Nanomanufacturing Processes", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Rakesh G. Mote"], "Division": null}, "ME6116": {"Code": "ME6116", "Name": "Design of Fiber-Reinforced Composites", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Nitesh  Yelve"], "Division": null}, "ME613": {"Code": "ME613", "Name": "Finite Element and Boundary Element Methods", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Seshu P."], "Division": null}, "ME617": {"Code": "ME617", "Name": "Rapid Product Development", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Karunakaran K.P."], "Division": null}, "ME618": {"Code": "ME618", "Name": "Pressure Vessel Design", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["De Amitava"], "Division": null}, "ME621": {"Code": "ME621", "Name": "Mathematical Methods for Mechanics and Dynamics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["D.N. Pawaskar"], "Division": null}, "ME651": {"Code": "ME651", "Name": "Fluid Dynamics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Rajneesh Bhardwaj"], "Division": null}, "ME661": {"Code": "ME661", "Name": "Advanced Thermodynamics &amp; Combustion", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Sreedhara Sheshadri"], "Division": null}, "ME662": {"Code": "ME662", "Name": "Convective Heat and Mass Transfer", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Avishek  Ranjan"], "Division": null}, "ME663": {"Code": "ME663", "Name": "Advanced Heat Transfer", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Atul Srivastava"], "Division": null}, "ME669": {"Code": "ME669", "Name": "Design for Manufacturing", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["De Amitava"], "Division": null}, "ME673-S1": {"Code": "ME673-S1", "Name": "Mathematical Methods in Engineering", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Vedula R.P."], "Division": "S1"}, "ME673-S2": {"Code": "ME673-S2", "Name": "Mathematical Methods in Engineering", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Alankar Alankar"], "Division": "S2"}, "ME681": {"Code": "ME681", "Name": "Thermal Environmental Engg", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Rane Milind"], "Division": null}, "ME704": {"Code": "ME704", "Name": "Computational Methods in Thermal &amp; Fluid Engg", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Sharma Atul"], "Division": null}, "ME710": {"Code": "ME710", "Name": "Vibration Engg.", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["V. Kartik"], "Division": null}, "ME721": {"Code": "ME721", "Name": "Design Engg. Lab", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Sripriya Ramamoorthy"], "Division": null}, "ME724": {"Code": "ME724", "Name": "Essentials of Turbulence", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Abhilash Chandy"], "Division": null}, "ME751": {"Code": "ME751", "Name": "Mechanics of Deformable Bodies", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Tanmay  K. Bhandakkar"], "Division": null}, "ME758": {"Code": "ME758", "Name": "Microfluidics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Amit Agrawal"], "Division": null}, "ME773": {"Code": "ME773", "Name": "Reliability Modelling and Analysis for Engineering Systems", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Makarand S. Kulkarni"], "Division": null}, "ME774": {"Code": "ME774", "Name": "Processing of Aerospace Materials-II", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Amol A. Gokhale"], "Division": null}, "ME781": {"Code": "ME781", "Name": "Statistical Machine Learning and Data Mining", "Venue": "FullSemester", "Slots": ["15B", "15A"], "Instructors": ["Asim Tewari"], "Division": null}, "ME782": {"Code": "ME782", "Name": "Design Optimization", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Manik Dhanesh"], "Division": null}, "ME785": {"Code": "ME785", "Name": "Machining Processes", "Venue": "FirstHalf", "Slots": ["8A", "8B"], "Instructors": ["Rakesh G. Mote"], "Division": null}, "ME786": {"Code": "ME786", "Name": "Welding Processes", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["De Amitava"], "Division": null}, "ME787": {"Code": "ME787", "Name": "Deformation Processes", "Venue": "SecondHalf", "Slots": ["8A", "8B"], "Instructors": ["Sushil Mishra"], "Division": null}, "ME788": {"Code": "ME788", "Name": "Liquid Material Processing", "Venue": "FirstHalf", "Slots": ["9A", "9B"], "Instructors": ["Shyamprasad Karagadde"], "Division": null}, "ME899-S1": {"Code": "ME899-S1", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Parag Tandaiya"], "Division": "S1"}, "ME899-S2": {"Code": "ME899-S2", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Alankar Alankar", "Amber Shrivastava", "Makarand S. Kulkarni", "Shyamprasad Karagadde", "Sushil Mishra"], "Division": "S2"}, "MES801": {"Code": "MES801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sharma Atul"], "Division": null}, "MS101-P1": {"Code": "MS101-P1", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["L1", "L3", "3A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Krishna Jonnalagadda", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John"], "Division": "P1"}, "MS101-P10": {"Code": "MS101-P10", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["5B", "6B", "1B", "2B", "4B", "6A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P10"}, "MS101-P2": {"Code": "MS101-P2", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["L1", "L3", "3A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P2"}, "MS101-P3": {"Code": "MS101-P3", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["L4", "L2", "3A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P3"}, "MS101-P4": {"Code": "MS101-P4", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["L4", "L2", "3A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P4"}, "MS101-P7": {"Code": "MS101-P7", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["1A", "2A", "3A", "1C", "3C", "4C", "6A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P7"}, "MS101-P8": {"Code": "MS101-P8", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["1A", "2A", "3A", "1C", "3C", "4C", "6A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John", "Krishna Jonnalagadda"], "Division": "P8"}, "MS101-P9": {"Code": "MS101-P9", "Name": "Makerspace", "Venue": "FullSemester", "Slots": ["5B", "6B", "1B", "2B", "4B", "6A"], "Instructors": ["Avinash  Bhardwaj", "Janani S. Murallidharan", "Krishna Jonnalagadda", "Kushal R. Tuckley", "Pandey P.C.", "Sharma Dinesh", "Arunkumar Sridharan", "J.John"], "Division": "P9"}, "IWE706": {"Code": "IWE706", "Name": "Managerial Economics", "Venue": "FullSemester", "Slots": [], "Instructors": ["S.V.D.Nageswara Rao"], "Division": null}, "IWE708": {"Code": "IWE708", "Name": "Operations and Manufacturing Management", "Venue": "FullSemester", "Slots": [], "Instructors": ["Indrajit Mukherjee"], "Division": null}, "IWE709": {"Code": "IWE709", "Name": "Strategic Cost Analysis", "Venue": "FullSemester", "Slots": [], "Instructors": ["S.V.D.Nageswara Rao"], "Division": null}, "IWE713": {"Code": "IWE713", "Name": "Managing Power and Influence in Organizations", "Venue": "FullSemester", "Slots": [], "Instructors": ["S.V.D.Nageswara Rao"], "Division": null}, "IWE716": {"Code": "IWE716", "Name": "Macroeconomics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Vinish Kathuria"], "Division": null}, "MG401": {"Code": "MG401", "Name": "Marketing Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Dinesh Sharma", "Arti D Kalro"], "Division": null}, "MG401-M": {"Code": "MG401-M", "Name": "Marketing Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Dinesh Sharma", "Arti D Kalro"], "Division": "M"}, "MG403": {"Code": "MG403", "Name": "Accounting and Finance", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Rohan  Chinchwadkar", "Varadraj B. Bapat"], "Division": null}, "MG403-M": {"Code": "MG403-M", "Name": "Accounting and Finance", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Rohan  Chinchwadkar", "Bapat V.P."], "Division": "M"}, "MGT801": {"Code": "MGT801", "Name": "Introduction to Research Methods", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Ashish Singh"], "Division": null}, "MGT805": {"Code": "MGT805", "Name": "Survey Research &amp; Experimentation", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Arti D Kalro"], "Division": null}, "MGT806": {"Code": "MGT806", "Name": "Behavioral Operations Management", "Venue": "FirstHalf", "Slots": [], "Instructors": ["T.T. Niranjan"], "Division": null}, "MNG802": {"Code": "MNG802", "Name": "Statistics for Management Research", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Indrajit Mukherjee"], "Division": null}, "MNG803": {"Code": "MNG803", "Name": "Economics", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sarthak Gaurav"], "Division": null}, "SOM101-S1": {"Code": "SOM101-S1", "Name": "Introduction to Management", "Venue": "Class Room : LC 101\t\t\t\tFullSemester", "Slots": ["3B", "5A"], "Instructors": ["Ashish Pandey"], "Division": "S1"}, "SOM101-S2": {"Code": "SOM101-S2", "Name": "Introduction to Management", "Venue": "Class Room : LC 101\t\t\t\tFullSemester", "Slots": ["3C", "X3"], "Instructors": ["Mayank  Pareek"], "Division": "S2"}, "SOM601": {"Code": "SOM601", "Name": "Communication and Interpersonal Skill", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Ashish Pandey"], "Division": null}, "SOM602": {"Code": "SOM602", "Name": "Microeconomics", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Trupti Mishra"], "Division": null}, "SOM603": {"Code": "SOM603", "Name": "Fundamentals of Financial and Managerial Accounting", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Varadraj B. Bapat"], "Division": null}, "SOM604": {"Code": "SOM604", "Name": "Marketing Management - I", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Arti D Kalro"], "Division": null}, "SOM605": {"Code": "SOM605", "Name": "Statistical Methods", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Usha Ananthakumar"], "Division": null}, "SOM606": {"Code": "SOM606", "Name": "Corporate Finance - I", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Piyush  Pandey"], "Division": null}, "SOM607": {"Code": "SOM607", "Name": "Macroeconomics", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Vinish Kathuria"], "Division": null}, "SOM608": {"Code": "SOM608", "Name": "Decision Models in Management", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Pankaj Dutta"], "Division": null}, "SOM609": {"Code": "SOM609", "Name": "Information Systems", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Sonar M Rajendra"], "Division": null}, "SOM610": {"Code": "SOM610", "Name": "Marketing Management - II", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Dinesh Sharma"], "Division": null}, "SOM611": {"Code": "SOM611", "Name": "Operations Management \u2013 I", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Gajendra Adil", "Indrajit Mukherjee"], "Division": null}, "SOM620": {"Code": "SOM620", "Name": "Business and Sustainable Development", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Trupti Mishra"], "Division": null}, "SOM622": {"Code": "SOM622", "Name": "Strategic Marketing", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Mayank  Pareek"], "Division": null}, "SOM624": {"Code": "SOM624", "Name": "Warehouse Operations", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Gajendra Adil"], "Division": null}, "SOM625": {"Code": "SOM625", "Name": "Summer Project Work", "Venue": "FullSemester", "Slots": [], "Instructors": ["Varadraj B. Bapat"], "Division": null}, "SOM634": {"Code": "SOM634", "Name": "Purchasing and Supply Management", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Atul Kanyalkar"], "Division": null}, "SOM635": {"Code": "SOM635", "Name": "Operations Strategy", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Gajendra Adil"], "Division": null}, "SOM636": {"Code": "SOM636", "Name": "Innovation Management", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Karuna Jain"], "Division": null}, "SOM637": {"Code": "SOM637", "Name": "Project Management", "Venue": "FullSemester", "Slots": [], "Instructors": ["Karuna Jain"], "Division": null}, "SOM642": {"Code": "SOM642", "Name": "Business Forecasting", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Pankaj Dutta"], "Division": null}, "SOM650": {"Code": "SOM650", "Name": "Mergers Acquisitions and Business Valuation", "Venue": "FirstHalf", "Slots": [], "Instructors": ["S.N.Rao"], "Division": null}, "SOM651": {"Code": "SOM651", "Name": "International Finance", "Venue": "SecondHalf", "Slots": [], "Instructors": ["S.V.D.Nageswara Rao"], "Division": null}, "SOM653": {"Code": "SOM653", "Name": "Security Analysis and Portfolio Management", "Venue": "SecondHalf", "Slots": [], "Instructors": ["S.N.Rao"], "Division": null}, "SOM654": {"Code": "SOM654", "Name": "Fixed Income Securities", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Piyush  Pandey"], "Division": null}, "SOM655": {"Code": "SOM655", "Name": "Derivatives and Risk Management", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Piyush  Pandey"], "Division": null}, "SOM661": {"Code": "SOM661", "Name": "Advertising and Media Management", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Arti D Kalro"], "Division": null}, "SOM663": {"Code": "SOM663", "Name": "Brand Management", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Dinesh Sharma"], "Division": null}, "SOM671": {"Code": "SOM671", "Name": "International Competitiveness", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Kiran Kumar Momaya"], "Division": null}, "SOM690": {"Code": "SOM690", "Name": "Software Project Management", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Sonar M Rajendra"], "Division": null}, "SOM697": {"Code": "SOM697", "Name": "Electronic Business Strategies and Implementation", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Sonar M Rajendra"], "Division": null}, "SOM698": {"Code": "SOM698", "Name": "Management of Banking and Financial Services", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Piyush  Pandey"], "Division": null}, "SOM703": {"Code": "SOM703", "Name": "Sales and Distribution Management", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Mayank  Pareek"], "Division": null}, "SOM704": {"Code": "SOM704", "Name": "Foundations of Private Equity and Venture Capital", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Rohan  Chinchwadkar"], "Division": null}, "SOM705": {"Code": "SOM705", "Name": "Supply Chain Optimization", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Rahul Patil"], "Division": null}, "SOM709": {"Code": "SOM709", "Name": "International Business", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Snehal  Awate"], "Division": null}, "SOM710": {"Code": "SOM710", "Name": "Economics of Development in India", "Venue": "FirstHalf", "Slots": [], "Instructors": ["Ashish Singh"], "Division": null}, "SOM793": {"Code": "SOM793", "Name": "Compulsory IDDDP Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Piyush  Pandey", "Indrajit Mukherjee"], "Division": null}, "SOM794": {"Code": "SOM794", "Name": "Optional IDDDP Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Piyush  Pandey", "Indrajit Mukherjee"], "Division": null}, "SOM801": {"Code": "SOM801", "Name": "Core Topics in Strategic Management", "Venue": "FullSemester", "Slots": [], "Instructors": ["Snehal  Awate"], "Division": null}, "SOM899": {"Code": "SOM899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sarthak Gaurav"], "Division": null}, "MM201-M": {"Code": "MM201-M", "Name": "Structure of Materials", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Avradeep  Pal", "Abhijeet  Sangle"], "Division": "M"}, "MM202-M": {"Code": "MM202-M", "Name": "Thermodynamics of Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["N.N.Viswanathan", "Aswani Yella"], "Division": "M"}, "MM219-S1": {"Code": "MM219-S1", "Name": "Structure of Materials", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Avradeep  Pal"], "Division": "S1"}, "MM219-S2": {"Code": "MM219-S2", "Name": "Structure of Materials", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Abhijeet  Sangle"], "Division": "S2"}, "MM221": {"Code": "MM221", "Name": "Sensors and Measurements Lab", "Venue": "FullSemester", "Slots": ["L4", "LX"], "Instructors": ["Khosla N.K.", "Tanushree H. Choudhury", "Titas Dasgupta"], "Division": null}, "MM223": {"Code": "MM223", "Name": "Thermodynamics of Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Aswani Yella", "N.N.Viswanathan"], "Division": null}, "MM225": {"Code": "MM225", "Name": "AI and Data Science", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Hina Amol Gokhale", "M.P. Gururajan"], "Division": null}, "MM301": {"Code": "MM301", "Name": "Phase Transformations", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Prabhu N."], "Division": null}, "MM305-S1": {"Code": "MM305-S1", "Name": "Kinetics of Processes", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Ajay Singh Panwar"], "Division": "S1"}, "MM305-S2": {"Code": "MM305-S2", "Name": "Kinetics of Processes", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Triratna  Muneshwar"], "Division": "S2"}, "MM319-S1": {"Code": "MM319-S1", "Name": "Mechanical Behaviour of Materials", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Anirban Patra"], "Division": "S1"}, "MM319-S2": {"Code": "MM319-S2", "Name": "Mechanical Behaviour of Materials", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Nagamani J. Balila"], "Division": "S2"}, "MM362-S1": {"Code": "MM362-S1", "Name": "Mech. Testing Lab.", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Prita Pant", "Sanjay  Chandra"], "Division": "S1"}, "MM362-S2": {"Code": "MM362-S2", "Name": "Mech. Testing Lab.", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Prita Pant", "Sanjay  Chandra"], "Division": "S2"}, "MM396": {"Code": "MM396", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Mural S Prasanna Kumar", "Aswani Yella"], "Division": null}, "MM409": {"Code": "MM409", "Name": "Colloidal &amp; Interfacial Science", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Parag Bhargava", "Mithun  Chowdhury"], "Division": null}, "MM433": {"Code": "MM433", "Name": "Manufacturing Process Seminar", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Mithun  Chowdhury", "Amrita  Bhattacharya"], "Division": null}, "MM435-S1": {"Code": "MM435-S1", "Name": "Instrumentation and controls laboratory", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Khosla N.K."], "Division": "S1"}, "MM435-S2": {"Code": "MM435-S2", "Name": "Instrumentation and controls laboratory", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Khosla N.K."], "Division": "S2"}, "MM439-S1": {"Code": "MM439-S1", "Name": "Iron and Steelmaking", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Manish M. Pande"], "Division": "S1"}, "MM439-S2": {"Code": "MM439-S2", "Name": "Iron and Steelmaking", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Somnath Basu"], "Division": "S2"}, "MM451": {"Code": "MM451", "Name": "Instrumentation and Process Control Theory", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Khosla N.K."], "Division": null}, "MM452": {"Code": "MM452", "Name": "Plant Engineering", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Sanjay  Chandra"], "Division": null}, "MM453": {"Code": "MM453", "Name": "Engineering Polymers &amp; Composites", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Arup R. Bhattacharyya", "Mural S Prasanna Kumar"], "Division": null}, "MM474": {"Code": "MM474", "Name": "Science and Technology of Thin Films", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Dusane Rajiv O."], "Division": null}, "MM477": {"Code": "MM477", "Name": "Ceramic Processing Techniques", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Sudhanshu Mallick"], "Division": null}, "MM492": {"Code": "MM492", "Name": "B.Tech Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avradeep  Pal"], "Division": null}, "MM494": {"Code": "MM494", "Name": "B.Tech Project II", "Venue": "FullSemester", "Slots": [], "Instructors": ["Avradeep  Pal"], "Division": null}, "MM611": {"Code": "MM611", "Name": "Processing and Characterization of Steel (Lab.)", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Manish M. Pande", "Samajdar I."], "Division": null}, "MM621": {"Code": "MM621", "Name": "Advanced Physical and Mechanical Metallurgy", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Samajdar I."], "Division": null}, "MM651": {"Code": "MM651", "Name": "Thermodynamics of Materials", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Prasanna T.R.S."], "Division": null}, "MM654": {"Code": "MM654", "Name": "Advanced Composites", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Amartya Mukhopadhyay", "Mithun  Chowdhury"], "Division": null}, "MM659": {"Code": "MM659", "Name": "Transport Phenomena", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Deepoo  Kumar"], "Division": null}, "MM680": {"Code": "MM680", "Name": "Welding Science and Technology", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["K. Bhanumurthy"], "Division": null}, "MM681": {"Code": "MM681", "Name": "Plastic Deformation and Microstructure Evolution", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["MJNV Prasad"], "Division": null}, "MM694": {"Code": "MM694", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Triratna  Muneshwar"], "Division": null}, "MM695": {"Code": "MM695", "Name": "High Temperature Corrosion", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Vijayshankar  Dandapani"], "Division": null}, "MM699": {"Code": "MM699", "Name": "Corrosion Laboratory", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Smrutiranjan Parida", "Vijayshankar  Dandapani"], "Division": null}, "MM713": {"Code": "MM713", "Name": "Aqueous Corrosion and its Control", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Smrutiranjan Parida"], "Division": null}, "MM717": {"Code": "MM717", "Name": "Electrochemical Materials Science", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Raja V. S."], "Division": null}, "MM719": {"Code": "MM719", "Name": "Inttroduction to Ab-initio Methods in Materials Modelling", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Sumit Saxena"], "Division": null}, "MM723": {"Code": "MM723", "Name": "Thermoelectric Materials", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Titas Dasgupta"], "Division": null}, "MM724": {"Code": "MM724", "Name": "Plasma Processing of Materials", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Dinkar S. Patil"], "Division": null}, "MM729": {"Code": "MM729", "Name": "Characterization of Materials for Corrosion Control", "Venue": "SecondHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Raja V. S."], "Division": null}, "MM730": {"Code": "MM730", "Name": "Topics in Mechanical Behaviour of Materials", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Prita Pant"], "Division": null}, "MM731": {"Code": "MM731", "Name": "Experiments in Advanced Materials Processing (Lab)", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Dinkar S. Patil", "Triratna  Muneshwar"], "Division": null}, "MM732": {"Code": "MM732", "Name": "Structural Characterization of Materials", "Venue": "FirstHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Amartya Mukhopadhyay"], "Division": null}, "MM733": {"Code": "MM733", "Name": "Mechanical Characterization of Materials", "Venue": "SecondHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["MJNV Prasad"], "Division": null}, "MM734": {"Code": "MM734", "Name": "Electrical Characterization of Materials", "Venue": "SecondHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Shobha Shukla"], "Division": null}, "MM735": {"Code": "MM735", "Name": "Material Chracterization at High Temperatures", "Venue": "SecondHalf", "Slots": ["2A", "2C", "2B"], "Instructors": ["Somnath Basu"], "Division": null}, "MM737": {"Code": "MM737", "Name": "Physical Metallurgy", "Venue": "SecondHalf", "Slots": ["4A", "4C", "4B"], "Instructors": ["Ashutosh Gandhi"], "Division": null}, "MM738": {"Code": "MM738", "Name": "Physics of Materials", "Venue": "FirstHalf", "Slots": ["4A", "4C", "4B"], "Instructors": ["Kulkarni Ajit R."], "Division": null}, "MM747": {"Code": "MM747", "Name": "First Principles Approach to Materials Science", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Amrita  Bhattacharya"], "Division": null}, "MM748": {"Code": "MM748", "Name": "Fatigue of Materials", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Aparna Singh"], "Division": null}, "MM751": {"Code": "MM751", "Name": "Engineering Aspects of Desalination", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["V. K. Srivastava"], "Division": null}, "MM755": {"Code": "MM755", "Name": "Kinetics of High Temperature processes", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Deepoo  Kumar"], "Division": null}, "MM899": {"Code": "MM899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Shobha Shukla", "V. K. Srivastava"], "Division": null}, "MMS801": {"Code": "MMS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Dipti Gupta"], "Division": null}, "PH109": {"Code": "PH109", "Name": "Fundamental Themes in Physics", "Venue": "Class : CL 103 ESE\t\t\t\tFullSemester", "Slots": ["11B", "11A"], "Instructors": ["Aftab Alam"], "Division": null}, "PH117-P13": {"Code": "PH117-P13", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Mohamad  Aslam"], "Division": "P13"}, "PH117-P14": {"Code": "PH117-P14", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["L2"], "Instructors": ["Mohamad  Aslam"], "Division": "P14"}, "PH117-P15": {"Code": "PH117-P15", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["L3"], "Instructors": ["Mohamad  Aslam"], "Division": "P15"}, "PH117-P16": {"Code": "PH117-P16", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Mohamad  Aslam"], "Division": "P16"}, "PH117-P19": {"Code": "PH117-P19", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["1A", "2A", "3A"], "Instructors": ["Mohamad  Aslam"], "Division": "P19"}, "PH117-P20": {"Code": "PH117-P20", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["1B", "2B", "4B"], "Instructors": ["Mohamad  Aslam"], "Division": "P20"}, "PH117-P21": {"Code": "PH117-P21", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["1C", "2C", "4C"], "Instructors": ["Mohamad  Aslam"], "Division": "P21"}, "PH117-P22": {"Code": "PH117-P22", "Name": "Physics Lab", "Venue": "FullSemester", "Slots": ["5B", "6B"], "Instructors": ["Mohamad  Aslam"], "Division": "P22"}, "PH217": {"Code": "PH217", "Name": "Classical Mechanics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Nitin  Kumar"], "Division": null}, "PH221": {"Code": "PH221", "Name": "Analog Electronics", "Venue": "FullSemester", "Slots": ["L2", "LX"], "Instructors": ["Pradeep Sarin"], "Division": null}, "PH223": {"Code": "PH223", "Name": "Complex Analysis and Integral Transforms", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Dibyendu Das"], "Division": null}, "PH225": {"Code": "PH225", "Name": "Quantum Mechanics I", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["P. Ramadevi"], "Division": null}, "PH251-M": {"Code": "PH251-M", "Name": "Classical Mechanics", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Sumiran Pujari"], "Division": "M"}, "PH253-M": {"Code": "PH253-M", "Name": "Thermal and Statistical Physics", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Raghunath Chelakkot"], "Division": "M"}, "PH303": {"Code": "PH303", "Name": "Supervised Learning", "Venue": "FullSemester", "Slots": [], "Instructors": ["Himadri Shekhar Dhar"], "Division": null}, "PH401": {"Code": "PH401", "Name": "Classical Mechanics", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Anirban Sain"], "Division": null}, "PH403": {"Code": "PH403", "Name": "Quantum Mechanics I", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Shankaranarayanan Subramaniam"], "Division": null}, "PH405": {"Code": "PH405", "Name": "Electronics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Kundu Tapanendu"], "Division": null}, "PH407": {"Code": "PH407", "Name": "Mathematical Physics I", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Siddhartha  Santra"], "Division": null}, "PH421": {"Code": "PH421", "Name": "Photonics", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Anshuman Kumar"], "Division": null}, "PH423": {"Code": "PH423", "Name": "Quantum Mechanics II", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Asmita Mukherjee"], "Division": null}, "PH434": {"Code": "PH434", "Name": "Programming Lab", "Venue": "FullSemester", "Slots": ["L4", "L2"], "Instructors": ["Himadri Shekhar Dhar"], "Division": null}, "PH435": {"Code": "PH435", "Name": "Electronics Lab  IV (Microprocessors)", "Venue": "FullSemester", "Slots": ["L4", "L2"], "Instructors": ["Pramod Kumar"], "Division": null}, "PH443": {"Code": "PH443", "Name": "Electronics Laboratory", "Venue": "FullSemester", "Slots": ["L1"], "Instructors": ["Maniraj  Mahalingam"], "Division": null}, "PH447": {"Code": "PH447", "Name": "Physics Lab (Optics and Spectroscopy)", "Venue": "FullSemester", "Slots": ["L4"], "Instructors": ["Dinesh Kabra"], "Division": null}, "PH505-S1": {"Code": "PH505-S1", "Name": "Introduction to Nuclear  &amp; Particle Physics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["B Nandi"], "Division": "S1"}, "PH505-S2": {"Code": "PH505-S2", "Name": "Introduction to Nuclear  &amp; Particle Physics", "Venue": "FullSemester", "Slots": ["3A", "3C", "3B"], "Instructors": ["Das Pragya"], "Division": "S2"}, "PH515-S1": {"Code": "PH515-S1", "Name": "Introduction  to Atomic and Molecular Physics", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Gopal Dixit"], "Division": "S1"}, "PH515-S2": {"Code": "PH515-S2", "Name": "Introduction  to Atomic and Molecular Physics", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Suresh K.G."], "Division": "S2"}, "PH517": {"Code": "PH517", "Name": "Methods in Analytical Techniques", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Mohamad  Aslam"], "Division": null}, "PH523": {"Code": "PH523", "Name": "Quantum Mechanics III", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Kumar Rao"], "Division": null}, "PH527": {"Code": "PH527", "Name": "Physics Lab (Solid State and Nuclear Physics)", "Venue": "FullSemester", "Slots": ["LX"], "Instructors": ["Sunita Srivastava", "Das Pragya"], "Division": null}, "PH543": {"Code": "PH543", "Name": "Advanced Statistical Mechanics", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Amitabha Nandi"], "Division": null}, "PH549": {"Code": "PH549", "Name": "Physics of Biological Systems", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Mithun  K. Mitra"], "Division": null}, "PH557": {"Code": "PH557", "Name": "Theoretical Condensed Matter Physics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Singh P.P."], "Division": null}, "PH561": {"Code": "PH561", "Name": "Ultrafast Sciences", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["P Vasa"], "Division": null}, "PH565": {"Code": "PH565", "Name": "Semiconductor Physics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["S. Dhar"], "Division": null}, "PH567": {"Code": "PH567", "Name": "Non-linear Dynamics", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Punit Parmanand"], "Division": null}, "PH569": {"Code": "PH569", "Name": "Applied Solid State Physics", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Suddhasatta Mahapatra"], "Division": null}, "PH575": {"Code": "PH575", "Name": "Nanoscience: Fundamentals to Fabrication", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Senthilkumar M."], "Division": null}, "PH587": {"Code": "PH587", "Name": "B.Tech Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Himadri Shekhar Dhar"], "Division": null}, "PH595": {"Code": "PH595", "Name": "M.Sc. project stage 1", "Venue": "FullSemester", "Slots": [], "Instructors": ["Himadri Shekhar Dhar"], "Division": null}, "PH807": {"Code": "PH807", "Name": "Current Trends in Physics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Vikram Rentala"], "Division": null}, "PH819": {"Code": "PH819", "Name": "Advanced Astrophysics", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Archana Pai"], "Division": null}, "PHS801": {"Code": "PHS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Himadri Shekhar Dhar"], "Division": null}, "PS601": {"Code": "PS601", "Name": "Public Policy Theory I", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Prabhir Vishnu  Poruthiyil"], "Division": null}, "PS605": {"Code": "PS605", "Name": "Social Science Perspective in Public Policy", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["N.C.Narayanan", "Rahul Suresh Sapkal"], "Division": null}, "PS606": {"Code": "PS606", "Name": "Public Policy in India: History Institutions and Practice", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Jha Shishir Kumar", "Naveen  Bharathi"], "Division": null}, "PS609": {"Code": "PS609", "Name": "Research Methodology and Design", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Anjali  Sharma", "Anupam  Guha"], "Division": null}, "PS621": {"Code": "PS621", "Name": "Internship", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jha Shishir Kumar"], "Division": null}, "PS625": {"Code": "PS625", "Name": "Environmental Governance and Development", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["N.C.Narayanan", "Ajay A Deshpande"], "Division": null}, "PS632": {"Code": "PS632", "Name": "Contemporary Issues in Data Policy and Management", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Anupam  Guha", "Sundeep  Oberoi"], "Division": null}, "PS635": {"Code": "PS635", "Name": "Economic Analysis for Public Policy", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Rahul Suresh Sapkal"], "Division": null}, "PS643": {"Code": "PS643", "Name": "Introduction to AI Data and Policy", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Anupam  Guha"], "Division": null}, "PS645": {"Code": "PS645", "Name": "Affirmative Action in India: A Brief Constitutional History", "Venue": "SecondHalf", "Slots": [], "Instructors": ["Naveen  Bharathi", "Uday U.  Lalit"], "Division": null}, "PS797": {"Code": "PS797", "Name": "MPP Dissertaion -I Stage", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jha Shishir Kumar"], "Division": null}, "PSS801": {"Code": "PSS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Prabhir Vishnu  Poruthiyil"], "Division": null}, "PSS803": {"Code": "PSS803", "Name": "Internship/Experience Based Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Jha Shishir Kumar", "N.C.Narayanan", "Prabhir Vishnu  Poruthiyil"], "Division": null}, "SC301-M": {"Code": "SC301-M", "Name": "Linear and Nonlinear Systems", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Arpita Sinha"], "Division": "M"}, "SC593": {"Code": "SC593", "Name": "Dual Degree Project I", "Venue": "FullSemester", "Slots": [], "Instructors": ["Debasish Chatterjee"], "Division": null}, "SC618": {"Code": "SC618", "Name": "Analytical and Geometric Dynamics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Sukumar Srikant"], "Division": null}, "SC618-M": {"Code": "SC618-M", "Name": "Analytical and Geometric Dynamics", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Sukumar Srikant"], "Division": "M"}, "SC625": {"Code": "SC625", "Name": "Systems Theory", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Vivek Natarajan"], "Division": null}, "SC625-M": {"Code": "SC625-M", "Name": "Systems Theory", "Venue": "FullSemester", "Slots": ["12A", "12B"], "Instructors": ["Vivek Natarajan"], "Division": "M"}, "SC629": {"Code": "SC629", "Name": "Introduction to Probability and Random Processes", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Debasish Chatterjee"], "Division": null}, "SC629-M": {"Code": "SC629-M", "Name": "Introduction to Probability and Random Processes", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Debasish Chatterjee"], "Division": "M"}, "SC631": {"Code": "SC631", "Name": "Games and Information", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Ankur Kulkarni"], "Division": null}, "SC631-M": {"Code": "SC631-M", "Name": "Games and Information", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Ankur Kulkarni"], "Division": "M"}, "SC639": {"Code": "SC639", "Name": "Mathematical Structures for Control", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Banavar R.N."], "Division": null}, "SC639-M": {"Code": "SC639-M", "Name": "Mathematical Structures for Control", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Banavar R.N."], "Division": "M"}, "SC649": {"Code": "SC649", "Name": "Embedded Control &amp; Robotics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Leena Vachhani"], "Division": null}, "SC649-M": {"Code": "SC649-M", "Name": "Embedded Control &amp; Robotics", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Leena Vachhani"], "Division": "M"}, "SC650": {"Code": "SC650", "Name": "High Energy Physics and Systems", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Navin Khaneja"], "Division": null}, "SC650-M": {"Code": "SC650-M", "Name": "High Energy Physics and Systems", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Navin Khaneja"], "Division": "M"}, "SC653": {"Code": "SC653", "Name": "Optimisation for Large Scale Machine Learning", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Avishek  Ghosh"], "Division": null}, "SC653-M": {"Code": "SC653-M", "Name": "Optimisation for Large Scale Machine Learning", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Avishek  Ghosh"], "Division": "M"}, "SC797": {"Code": "SC797", "Name": "I Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Sukumar Srikant"], "Division": null}, "SC899": {"Code": "SC899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B", "LX"], "Instructors": ["Ankur Kulkarni", "Arpita Sinha", "Avishek  Ghosh", "Banavar R.N.", "Debasish Chatterjee", "Leena Vachhani", "Navin Khaneja", "Sukumar Srikant", "Vivek Natarajan"], "Division": null}, "SCS801": {"Code": "SCS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Debasish Chatterjee"], "Division": null}, "TD602": {"Code": "TD602", "Name": "Soil Land Use GIS and Agriculture", "Venue": "FullSemester", "Slots": ["11B", "11A"], "Instructors": ["Parmeshwar Digamber Udmale", "Amit  Y. Arora"], "Division": null}, "TD603": {"Code": "TD603", "Name": "Water Resources Management", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Parmeshwar Digamber Udmale"], "Division": null}, "TD607": {"Code": "TD607", "Name": "Energy Sources and their Utilization", "Venue": "FullSemester", "Slots": ["8A", "8B"], "Instructors": ["Vishal R. Sardeshpande", "Priyadarshani Jadhav"], "Division": null}, "TD608": {"Code": "TD608", "Name": "Project Management and Project Analysis", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Chaaruchandra  Korde"], "Division": null}, "TD609": {"Code": "TD609", "Name": "Field Work", "Venue": "FullSemester", "Slots": [], "Instructors": ["Anand B. Rao", "Pankajkumar Sekhsaria"], "Division": null}, "TD613": {"Code": "TD613", "Name": "Ecology and Environment", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Bakul Rao", "Anand B. Rao"], "Division": null}, "TD621": {"Code": "TD621", "Name": "Food Processing and Nutrition Delivery", "Venue": "FullSemester", "Slots": ["10B", "10A"], "Instructors": ["Amit  Y. Arora", "Rupal M Dalal", "Satish B. Agnihotri"], "Division": null}, "TD626": {"Code": "TD626", "Name": "Technology Society and Development", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Vishal R. Sardeshpande", "Pankajkumar Sekhsaria"], "Division": null}, "TD628": {"Code": "TD628", "Name": "Applied Statistical Methods and Data Analysis", "Venue": "FirstHalf", "Slots": ["9A", "9B"], "Instructors": ["Amit  Y. Arora"], "Division": null}, "TD630": {"Code": "TD630", "Name": "Public Policy: Theory and Practice", "Venue": "FullSemester", "Slots": ["4A", "4C", "4B"], "Instructors": ["Satish B. Agnihotri"], "Division": null}, "TD631": {"Code": "TD631", "Name": "Qualitative Data Collection and Analysis Methods", "Venue": "SecondHalf", "Slots": ["11B", "11A"], "Instructors": ["Pankajkumar Sekhsaria"], "Division": null}, "TD642": {"Code": "TD642", "Name": "Data for Development", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Pennan  Chinnasamy"], "Division": null}, "TD651": {"Code": "TD651", "Name": "Technology in Practice", "Venue": "SecondHalf", "Slots": ["9A", "9B"], "Instructors": ["Amit  Y. Arora"], "Division": null}, "TD695": {"Code": "TD695", "Name": "I Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Chaaruchandra  Korde"], "Division": null}, "TD696": {"Code": "TD696", "Name": "II Stage Project", "Venue": "FullSemester", "Slots": [], "Instructors": ["Pankajkumar Sekhsaria"], "Division": null}, "TD899": {"Code": "TD899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["1A", "1C", "1B"], "Instructors": ["Pankajkumar Sekhsaria", "Pennan  Chinnasamy"], "Division": null}, "US602": {"Code": "US602", "Name": "Fundamentals of Urban Science &amp; Engineering", "Venue": "FullSemester", "Slots": ["2A", "2C", "2B"], "Instructors": ["Arnab  Jana"], "Division": null}, "US607": {"Code": "US607", "Name": "Sustainability Assessment of Urban Systems", "Venue": "FullSemester", "Slots": ["5B", "5A"], "Instructors": ["Pradip P. Kalbar"], "Division": null}, "US609": {"Code": "US609", "Name": "Introduction to Urban Design", "Venue": "FullSemester", "Slots": ["9A", "9B"], "Instructors": ["Himanshu  Burte"], "Division": null}, "US611": {"Code": "US611", "Name": "Urban Design and Engineering Laboratory", "Venue": "FullSemester", "Slots": ["L4", "L2"], "Instructors": ["Himanshu  Burte", "Malini  Krishnankutty", "Pradip P. Kalbar", "Arnab  Jana"], "Division": null}, "US613": {"Code": "US613", "Name": "Urban Planning in India: Theory Challenges and Approaches", "Venue": "FullSemester", "Slots": ["6B", "6A"], "Instructors": ["Pradip P. Kalbar", "Malini  Krishnankutty"], "Division": null}, "US899": {"Code": "US899", "Name": "Communication Skills", "Venue": "FullSemester", "Slots": ["14B", "14A"], "Instructors": ["Arnab  Jana", "Pradip P. Kalbar", "Virendra Sethi", "Himanshu  Burte"], "Division": null}, "USS801": {"Code": "USS801", "Name": "Seminar", "Venue": "FullSemester", "Slots": [], "Instructors": ["Pradip P. Kalbar"], "Division": null}}

new TomSelect("#select-tags",{
  plugins: ['remove_button'],
  create: false,
  valueField: 'Code',
	labelField: 'Name',
  searchField: ['Code', 'Name', 'Instructors'],
	options: Object.values(courses),
  onItemAdd:function(){
    this.setTextboxValue('');
    this.refreshOptions();
  },
  
  render:{
    option:function(data,escape){
      console.log(data)
      // const courseName= courses[data.value]['Name']
      // const courseCode = data.text.split(' ')[0].split('-')[0]
      // const courseSlot = "Ok";
      // const courseSlot = courses[ data.text.split(' ')[0]]['Slots']
      // console.log(`code ${courseCode} slot: ${courseSlot}`);
      // return '<div class="d-flex"><span class="ms-auto text-muted">' + escape(data.text) + '</span></div>';
      return '<div class="flex-container"><span class="flex-item">' + escape( `${data.Code}: ${data.Name}`) + '</span><span class="flex-item text-muted">' + escape(`${data.Slots}`) + '</span></div>';
      // return '<div>' + escape(`${data.id}: ${data.title}`) + '</div>';

    },
    item:function(data,escape){
      // const courseName= courses[data.value]['Name']
      // const courseCode = data.text.split(' ')[0].split('-')[0]
      // const courseSlot = courses[data.text.split(' ')[0]]['Slot']
  
      return '<div>' + escape(`${data.Code}: ${data.Name}`) + '</div>';
    }
  }
  });
  


// let courses =
// {
//   "AE234-M": {
//       "Name": "Aircraft Propulsion", 
//       "Venue": "LC 202", 
//       "Slots": ["1A", "15A", "L1"],
//       "Instructors": ["Ajoy", "Sujoy", "Ghosh"],
//       "Division": "M"
//   }, 
//   "AE236": {
//       "Name": "Compressible Fluid Mechanics", 
//       "Venue": "CL 103 ESE", 
//       "Slots": ["2B", "13B", "L2", "X1"],
//       "Instructors": ["Ajoy", "Sujoy", "Ghosh"],
//       "Division": null
//   }
// }


console.log(courses);
function getNumBlocks(start, end) {
  return Math.ceil((new Date("01/01/2007 " + end) - new Date("01/01/2007 " + start))/(30*60000));
}

let slots = {
  '1A': {
      days: [{
          index: 0,
          start: '08:30',
          end: '09:25',
          start_block: 8.5,
          num_blocks: getNumBlocks('08:30', '09:25')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '1B': {
      days: [{
          index: 1,
          start: '09:30',
          end: '10:25',
          start_block: 9.5,
          num_blocks: getNumBlocks('09:30', '10:25')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '1C': {
      days: [{
          index: 3,
          start: '10:35',
          end: '11:30',
          start_block: 10.5,
          num_blocks: getNumBlocks('10:35', '11:30')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '1': {
      days: [
          {
              index: 0,
              start: '08:30',
              end: '09:25',
              start_block: 8.5,
              num_blocks: getNumBlocks('08:30', '09:25')
          },
          {
              index: 1,
              start: '09:30',
              end: '10:25',
              start_block: 9.5,
              num_blocks: getNumBlocks('09:30', '10:25')
          },
          {
              index: 3,
              start: '10:35',
              end: '11:30',
              start_block: 10.5,
              num_blocks: getNumBlocks('10:35', '11:30')
          }
      ],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '2A': {
      days: [{
          index: 0,
          start: '09:30',
          end: '10:25',
          start_block: 9.5,
          num_blocks: getNumBlocks('09:30', '10:25')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '2B': {
      days: [{
          index: 1,
          start: '10:35',
          end: '11:30',
          start_block: 10.5,
          num_blocks: getNumBlocks('10:35', '11:30')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '2C': {
      days: [{
          index: 3,
          start: '11:35',
          end: '12:30',
          start_block: 11.5,
          num_blocks: getNumBlocks('11:35', '12:30')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '2': {
      days: [
          {
              index: 0,
              start: '09:30',
              end: '10:25',
              start_block: 9.5,
              num_blocks: getNumBlocks('09:30', '10:25')
          },
          {
              index: 1,
              start: '10:35',
              end: '11:30',
              start_block: 10.5,
              num_blocks: getNumBlocks('10:35', '11:30')
          },
          {
              index: 3,
              start: '11:35',
              end: '12:30',
              start_block: 11.5,
              num_blocks: getNumBlocks('11:35', '12:30')
          }
      ],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '3A': {
      days: [{
          index: 0,
          start: '10:35',
          end: '11:30',
          start_block: 10.5,
          num_blocks: getNumBlocks('10:35', '11:30')
      }],
      color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '3B': {
    days: [{
        index: 1,
        start: '11:35',
        end: '12:30',
        start_block: 11.5,
        num_blocks: getNumBlocks('11:35', '12:30')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'3C': {
    days: [{
        index: 3,
        start: '08:30',
        end: '09:25',
        start_block: 8.5,
        num_blocks: getNumBlocks('08:30', '09:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'3': {
    days: [
        {
            index: 0,
            start: '10:35',
            end: '11:30',
            start_block: 10.5,
            num_blocks: getNumBlocks('10:35', '11:30')
        },
        {
            index: 1,
            start: '11:35',
            end: '12:30',
            start_block: 11.5,
            num_blocks: getNumBlocks('11:35', '12:30')
        },
        {
            index: 3,
            start: '08:30',
            end: '09:25',
            start_block: 8.5,
            num_blocks: getNumBlocks('08:30', '09:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'4A': {
    days: [{
        index: 0,
        start: '11:35',
        end: '12:30',
        start_block: 11.5,
        num_blocks: getNumBlocks('11:35', '12:30')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'4B': {
    days: [{
        index: 1,
        start: '08:30',
        end: '09:25',
        start_block: 8.5,
        num_blocks: getNumBlocks('08:30', '09:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'4C': {
    days: [{
        index: 3,
        start: '09:30',
        end: '10:25',
        start_block: 9.5,
        num_blocks: getNumBlocks('09:30', '10:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
},
'4': {
    days: [
        {
            index: 0,
            start: '11:35',
            end: '12:30',
            start_block: 11.5,
            num_blocks: getNumBlocks('11:35', '12:30')
        },
        {
            index: 1,
            start: '08:30',
            end: '09:25',
            start_block: 8.5,
            num_blocks: getNumBlocks('08:30', '09:25')
        },
        {
            index: 3,
            start: '09:30',
            end: '10:25',
            start_block: 9.5,
            num_blocks: getNumBlocks('09:30', '10:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '5A': {
    days: [{
        index: 2,
        start: '09:30',
        end: '10:55',
        start_block: 9.5,
        num_blocks: getNumBlocks('09:30', '10:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '5B': {
    days: [{
        index: 4,
        start: '09:30',
        end: '10:55',
        start_block: 9.5,
        num_blocks: getNumBlocks('09:30', '10:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '5': {
    days: [
        {
            index: 2,
            start: '09:30',
            end: '10:55',
            start_block: 9.5,
            num_blocks: getNumBlocks('09:30', '10:55')
        },
        {
            index: 4,
            start: '09:30',
            end: '10:55',
            start_block: 9.5,
            num_blocks: getNumBlocks('09:30', '10:55')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '6A': {
    days: [{
        index: 2,
        start: '11:05',
        end: '12:30',
        start_block: 11.0,
        num_blocks: getNumBlocks('11:05', '12:30')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '6B': {
    days: [{
        index: 4,
        start: '11:05',
        end: '12:30',
        start_block: 11.0,
        num_blocks: getNumBlocks('11:05', '12:30')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '6': {
    days: [
        {
            index: 2,
            start: '11:05',
            end: '12:30',
            start_block: 11.0,
            num_blocks: getNumBlocks('11:05', '12:30')
        },
        {
            index: 4,
            start: '11:05',
            end: '12:30',
            start_block: 11.0,
            num_blocks: getNumBlocks('11:05', '12:30')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L5': {
    days: [{
        index: 2,
        start: '09:30',
        end: '10:25',
        start_block: 9.5,
        num_blocks: getNumBlocks('09:30', '10:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L6': {
    days: [{
        index: 4,
        start: '09:30',
        end: '12:30',
        start_block: 9.5,
        num_blocks: getNumBlocks('09:30', '12:30')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '8A': {
    days: [{
        index: 0,
        start: '14:00',
        end: '15:25',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '15:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '8B': {
    days: [{
        index: 3,
        start: '14:00',
        end: '15:25',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '15:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '9A': {
    days: [{
        index: 0,
        start: '15:30',
        end: '16:55',
        start_block: 15.5,
        num_blocks: getNumBlocks('15:30', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '9B': {
    days: [{
        index: 3,
        start: '15:30',
        end: '16:55',
        start_block: 15.5,
        num_blocks: getNumBlocks('15:30', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '10A': {
    days: [{
        index: 1,
        start: '14:00',
        end: '15:25',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '15:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '10B': {
    days: [{
        index: 4,
        start: '14:00',
        end: '15:25',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '15:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '11A': {
    days: [{
        index: 1,
        start: '15:30',
        end: '16:55',
        start_block: 15.5,
        num_blocks: getNumBlocks('15:30', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '11B': {
    days: [{
        index: 4,
        start: '15:30',
        end: '16:55',
        start_block: 15.5,
        num_blocks: getNumBlocks('15:30', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L1': {
    days: [{
        index: 0,
        start: '14:00',
        end: '16:55',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L2': {
    days: [{
        index: 1,
        start: '14:00',
        end: '16:55',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'LX': {
    days: [{
        index: 2,
        start: '14:00',
        end: '16:55',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L3': {
    days: [{
        index: 3,
        start: '14:00',
        end: '16:55',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'L4': {
    days: [{
        index: 4,
        start: '14:00',
        end: '16:55',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '16:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '12A': {
    days: [{
        index: 0,
        start: '17:30',
        end: '18:55',
        start_block: 17.5,
        num_blocks: getNumBlocks('17:30', '18:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '12B': {
    days: [{
        index: 3,
        start: '17:30',
        end: '18:55',
        start_block: 17.5,
        num_blocks: getNumBlocks('17:30', '18:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '13A': {
    days: [{
        index: 0,
        start: '19:00',
        end: '20:25',
        start_block: 19,
        num_blocks: getNumBlocks('19:00', '20:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '13B': {
    days: [{
        index: 3,
        start: '19:00',
        end: '20:25',
        start_block: 19,
        num_blocks: getNumBlocks('19:00', '20:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '14A': {
    days: [{
        index: 1,
        start: '17:30',
        end: '18:55',
        start_block: 17.5,
        num_blocks: getNumBlocks('17:30', '18:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '14B': {
    days: [{
        index: 4,
        start: '17:30',
        end: '18:55',
        start_block: 17.5,
        num_blocks: getNumBlocks('17:30', '18:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '15A': {
    days: [{
        index: 1,
        start: '19:00',
        end: '20:25',
        start_block: 19,
        num_blocks: getNumBlocks('19:00', '20:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '15B': {
    days: [{
        index: 4,
        start: '19:00',
        end: '20:25',
        start_block: 19,
        num_blocks: getNumBlocks('19:00', '20:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'XC': {
    days: [{
        index: 2,
        start: '17:30',
        end: '18:55',
        start_block: 17.5,
        num_blocks: getNumBlocks('17:30', '18:55')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'XD': {
    days: [{
        index: 2,
        start: '19:00',
        end: '20:25',
        start_block: 19,
        num_blocks: getNumBlocks('19:00', '20:25')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'X1': {
    days: [{
        index: 2,
        start: '14:00',
        end: '15:00',
        start_block: 14,
        num_blocks: getNumBlocks('14:00', '15:00')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'X2': {
    days: [{
        index: 2,
        start: '15:00',
        end: '16:00',
        start_block: 14,
        num_blocks: getNumBlocks('15:00', '16:00')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'X3': {
    days: [{
        index: 2,
        start: '16:00',
        end: '17:00',
        start_block: 14,
        num_blocks: getNumBlocks('16:00', '17:00')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '8': {
    days: [
        {
            index: 0,
            start: '14:00',
            end: '15:25',
            start_block: 14,
            num_blocks: getNumBlocks('14:00', '15:25')
        },
        {
            index: 3,
            start: '14:00',
            end: '15:25',
            start_block: 14,
            num_blocks: getNumBlocks('14:00', '15:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '9': {
    days: [
        {
            index: 0,
            start: '15:30',
            end: '16:55',
            start_block: 15.5,
            num_blocks: getNumBlocks('15:30', '16:55')
        },
        {
            index: 3,
            start: '15:30',
            end: '16:55',
            start_block: 15.5,
            num_blocks: getNumBlocks('15:30', '16:55')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '10': {
    days: [
        {
            index: 1,
            start: '14:00',
            end: '15:25',
            start_block: 14,
            num_blocks: getNumBlocks('14:00', '15:25')
        },
        {
            index: 4,
            start: '14:00',
            end: '15:25',
            start_block: 14,
            num_blocks: getNumBlocks('14:00', '15:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '11': {
    days: [
        {
            index: 1,
            start: '15:30',
            end: '16:55',
            start_block: 15.5,
            num_blocks: getNumBlocks('15:30', '16:55')
        },
        {
            index: 4,
            start: '15:30',
            end: '16:55',
            start_block: 15.5,
            num_blocks: getNumBlocks('15:30', '16:55')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '12': {
    days: [
        {
            index: 0,
            start: '17:30',
            end: '18:55',
            start_block: 17.5,
            num_blocks: getNumBlocks('17:30', '18:55')
        },
        {
            index: 3,
            start: '17:30',
            end: '18:55',
            start_block: 17.5,
            num_blocks: getNumBlocks('17:30', '18:55')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '13': {
    days: [
        {
            index: 0,
            start: '19:00',
            end: '20:25',
            start_block: 19,
            num_blocks: getNumBlocks('19:00', '20:25')
        },
        {
            index: 3,
            start: '19:00',
            end: '20:25',
            start_block: 19,
            num_blocks: getNumBlocks('19:00', '20:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '14': {
    days: [
        {
            index: 1,
            start: '17:30',
            end: '18:55',
            start_block: 17.5,
            num_blocks: getNumBlocks('17:30', '18:55')
        },
        {
            index: 4,
            start: '17:30',
            end: '18:55',
            start_block: 17.5,
            num_blocks: getNumBlocks('17:30', '18:55')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  '15': {
    days: [
        {
            index: 1,
            start: '19:00',
            end: '20:25',
            start_block: 19,
            num_blocks: getNumBlocks('19:00', '20:25')
        },
        {
            index: 4,
            start: '19:00',
            end: '20:25',
            start_block: 19,
            num_blocks: getNumBlocks('19:00', '20:25')
        }
    ],
    color: colors[(Math.floor(Math.random() * colors.length))]
  }
}
// let slots = {
//     '1': {
//       days: [
//         {
//           index: 0, 
//           start: '8:30',
//           end: '9:25',
//           start_block: 8.5,
//           num_blocks: 2

//         },
//         {
//             index: 1,
//           start: '9:30',
//           end: '10:25',
//           start_block: 9.5,
//           num_blocks: 2
//         },
//         {
//             index: 3,
//           start: '10:35',
//           end: '11:30',
//           start_block: 10.5,
//           num_blocks: 2
//         }
  
//       ]
//       ,color: colors[0]
//     },
//     '2': {
//       days: [
//         {
//           index: 0, 
//           start: '9:30',
//           end: '10:25',
//           start_block: 9.5,
//           num_blocks: 2
//         },
//         {
//             index: 1,
//           start: '10:35',
//           end: '11:30',
//           start_block: 10.5,
//           num_blocks: 2
//         },
//         {
//           index: 3,
//           start: '11:35',
//           end: '12:30',
//           start_block: 11.5,
//           num_blocks: 2
//         }
  
//       ]
//       ,color: colors[1]
  
//     }
// }

function getNextDay(dayOfWeek) {
  let currentDate = new Date();
  let futureDate = new Date();

  // Correcting the calculation for day difference
  let daysUntilNext = (dayOfWeek - currentDate.getDay() + 7) % 7;
  futureDate.setDate(currentDate.getDate() + daysUntilNext);

  // Returning in MM/DD/YYYY format
  return `${('0' + (futureDate.getMonth() + 1)).slice(-2)}/${('0' + futureDate.getDate()).slice(-2)}/${futureDate.getFullYear()}`;
}



function formatTime(tstring){
  console.log(`formatting: ${tstring}`);
  let hours = parseInt(tstring.split(':')[0])
  let mins = parseInt(tstring.split(':')[1])
  if(hours>11){
    return `${hours-12}:${mins} pm`
  }
  else{
    return tstring+ ' am';
  }
}

let cal;
function createCalEvent(cal, course){
  let cslots = courses[course]['Slots']
  for(let slot of cslots){
    console.log(`Slot: XX${slot}XX`)

    if(slot=='N/A'){
      return
    }
    // this will break on compound slots
    slots[slot].days.forEach(day => {
  
  
  
      let start = day.start
      let end = day.end
  
      let startDT = getNextDay(day.index)+ ' ' + formatTime(start)
  
      let endDT = getNextDay(day.index)+ ' ' + formatTime(end)
  
      let description = `${courses[course]['Name']} ${courses[course]['Venue']}  ${courses[course]['Instructors']}`;

      cal.addEvent(courses[course]['Code'], description, courses[course]['Venue'], startDT, endDT, {freq: 'WEEKLY'});
      console.log(`Created cal event for ${courses[course]['Code']}-${slot} start: ${startDT} end: ${endDT}`);
  
    })
  }

}

const ttbtn = document.getElementById('create');
ttbtn.onclick = function(){
  clean_timetable();
  // timetable = new Timetable();
  // timetable.setScope(8, 21); // optional, only whole hours between 0 and 23
  // timetable.useTwelveHour(); //optional, displays hours in 12 hour format (1:00PM)
  
  // timetable.addLocations(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  console.log(`Today is ${formattedDate}`)

  cal = ics();
  
  let selected_courses_collection  = document.getElementById('select-tags').selectedOptions;
  var selected_courses_list = Array.from(selected_courses_collection).map(({ value }) => value);
  console.log(selected_courses_list)
  selected_courses_list.forEach((course)=>{
    createCalEvent(cal, course);
  })

  // console.log(selected_courses_list)
  render_courses(selected_courses_list)

}

function clean_timetable(){
  for(let i=8; i<=20; i+=0.5){
    for(let j=0; j<5; j++){
      let slot = document.getElementById(`${j}-${i}`);
      slot.innerHTML = null;
      slot.style = null;
    }
  }
}

for(let i = 8; i <= 20; i += 0.5) {
    let timeLabel = document.createElement('div');
    timeLabel.classList.add('time-label');
    let hour = Math.floor(i);
    let minute = (i % 1 > 0) ? '30' : '00';
    let next_hour = (minute=='30') ? hour+1 : hour;
    let next_min = (minute=='30') ? '00' : '30';
    timeLabel.innerHTML = `${hour}:${minute} - ${next_hour}:${next_min}`;
    document.getElementById('timetable2').appendChild(timeLabel);

    for(let j = 0; j < 5; j++) {
        let slot = document.createElement('div');
        slot.classList.add('slot');
        slot.id = `${j}-${i}`
        // let course = courses2.find(c => c.day === j && i >= c.start && i < c.end);
        // if(course) {
        //     slot.style.backgroundColor = course.color;
        //     slot.innerHTML = course.name;
        // }
        
        document.getElementById('timetable2').appendChild(slot);    
    }
}

function render_courses(selected_courses){

    for(let key of selected_courses){
        let course_code = key;
        let color = colors[Math.floor(Math.random()*10)]
        let course_venue = courses[key]['Venue'];
        let course_slots = courses[key]['Slots'];
        for(let course_slot of course_slots){
          for(let day of slots[course_slot].days){
            for(let i=0; i < day.num_blocks; i++){
                let slot_id = `${day.index}-${day.start_block+0.5*i}`;
                let slot = document.getElementById(slot_id);
                if(slot.style.backgroundColor!==""){
                  // console.log(slot.style.backgroundColor);
                  console.log("slot clash");
                  Toastify({
                    text: "Slot Clash!",
                    duration: 2000,
                    // close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    // stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "red",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                  clean_timetable()
                  return;
                  
                }
                slot.style.backgroundColor = color;
                slot.innerHTML= `${course_code.split('-')[0]}`;
            }
          }
        }
    }
}

// render_courses(courses)


function generatetimetable2Image(courses2) {
    var hours = 12;
    var days = 5;
    var offsetX = 100;  //space for time labels
    var offsetY = 50;  //space for day labels
    var rectHeight = 50; // 50 pixels per hour
    var rectWidth = 100;
    var totalWidth = offsetX + (days * rectWidth);
    var totalHeight = offsetY + (hours * rectHeight);
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    
    svg.setAttribute('width', totalWidth);
    svg.setAttribute('height', totalHeight);
    svg.setAttribute('style', 'font: 15px sans-serif; background-color: #252525;'); // Dark mode background

    courses2.forEach(function(course, index) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        var text = document.createElementNS('http://www.w3.org/2000/svg','text');

        var x = offsetX + ((course.day - 1) * rectWidth);  //x-position;
        var y = offsetY + ((course.start - 8) * rectHeight);  //y-position;

        var height = (course.end - course.start) * rectHeight;

        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', rectWidth);
        rect.setAttribute('height', height);
        rect.setAttribute('style', `fill: ${course.color}; stroke: #333333`); // Dark mode

        text.textContent = course.name;
        text.setAttribute('x', x + 5 );  //x-position;
        text.setAttribute('y', y + 20);  //y-position;
        text.setAttribute('style', 'fill: #ffffff'); // text color to white

        svg.appendChild(rect);
        svg.appendChild(text);
    });

    // To add day labels
    var dayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    dayLabels.forEach(function(day, i) {
        var text = document.createElementNS('http://www.w3.org/2000/svg','text');
        text.textContent = day;
        text.setAttribute('x', offsetX + i * rectWidth + 15);
        text.setAttribute('y', 35);
        text.setAttribute('style', 'fill: #ffffff'); // text color to white

        svg.appendChild(text);
    });

    // To add time
    for(let i = 0; i < hours; i++) {
        var text = document.createElementNS('http://www.w3.org/2000/svg','text');
        text.textContent = (8 + i) + ":00";
        text.setAttribute('x', 40); // ~Middle of left offset area
        text.setAttribute('y', offsetY + i * rectHeight + 30);
        text.setAttribute('style', 'fill: #ffffff'); // text color to white

        svg.appendChild(text);
    }

    var serializer = new XMLSerializer();
    var svgString = serializer.serializeToString(svg);

    return svgString;
}

function downloadSVG(svgString, name) {
    var data = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'});
    var url = window.URL.createObjectURL(data);

    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('download').addEventListener('click', function() {
    // let svgString = generatetimetable2Image(courses2);
    // downloadSVG(svgString, 'timetable2.svg');
    htmlToImage.toBlob(document.getElementById('timetable2'))
    .then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'my-node.png');
      } else {
       FileSaver.saveAs(blob, 'my-node.png');
     }
    });
    

});

let add_to_cal_button = document.getElementById('add_to_cal')

add_to_cal_button.onclick = ()=>{
  console.log(cal.events())
  cal.download('ics')
}