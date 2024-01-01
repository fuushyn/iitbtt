import './style.css'
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


// console.log(colors);


let courses = {
  "AE152-D2": {
      "Code": "AE152-D2",
      "Name": "Introduction to Aerospace Engg.",
      "Venue": "Class Room : LC 202",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Kowsik V R Bodi"
      ],
      "Division": "D2"
  },
  "AE153-M": {
      "Code": "AE153-M",
      "Name": "Introduction to Aerospace Engg.",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Kowsik V R Bodi"
      ],
      "Division": "M"
  },
  "AE233": {
      "Code": "AE233",
      "Name": "Control Systems Laboratory",
      "Venue": "Dynamics & Control lab",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Arya Hemendra",
          " Rohit Gupta",
          " Shashi Ranjan Kumar",
          " Arnab Maity"
      ],
      "Division": ""
  },
  "AE238": {
      "Code": "AE238",
      "Name": "Aerospace Structural Mechanics",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " P J Guruprasad"
      ],
      "Division": ""
  },
  "AE238-M": {
      "Code": "AE238-M",
      "Name": "Aerospace Structural Mechanics",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " P J Guruprasad"
      ],
      "Division": "M"
  },
  "AE244": {
      "Code": "AE244",
      "Name": "Low Speed Aerodynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Dhwanil Shukla"
      ],
      "Division": ""
  },
  "AE244-M": {
      "Code": "AE244-M",
      "Name": "Low Speed Aerodynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Dhwanil Shukla"
      ],
      "Division": "M"
  },
  "AE246": {
      "Code": "AE246",
      "Name": "Aircraft Structures Laboratory",
      "Venue": "A/C Structure Lab",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Chandra S. Yerramalli",
          " Krishnendu Haldar"
      ],
      "Division": ""
  },
  "AE248": {
      "Code": "AE248",
      "Name": "AI and Data Science",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " P. Ramachandran"
      ],
      "Division": ""
  },
  "AE305": {
      "Code": "AE305",
      "Name": "Flight Mechanics II",
      "Venue": "Class Room : LC 202",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Arnab Maity"
      ],
      "Division": ""
  },
  "AE305-M": {
      "Code": "AE305-M",
      "Name": "Flight Mechanics II",
      "Venue": "Class Room : LC 202",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Arnab Maity"
      ],
      "Division": "M"
  },
  "AE312": {
      "Code": "AE312",
      "Name": "Aerodynamics Laboratory",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Aniruddha Sinha",
          " Dhwanil Shukla",
          " Mandal J.C.",
          " Viren Menezes",
          " Vineeth Nair"
      ],
      "Division": ""
  },
  "AE316": {
      "Code": "AE316",
      "Name": "Aircraft Propulsion Laboratory",
      "Venue": "propulsion Lab - 103",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Nagendra Kumar"
      ],
      "Division": ""
  },
  "AE330": {
      "Code": "AE330",
      "Name": "Aerospace Propulsion",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Nagendra Kumar"
      ],
      "Division": ""
  },
  "AE332": {
      "Code": "AE332",
      "Name": "Aircraft Design",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Avijit Chatterjee"
      ],
      "Division": ""
  },
  "BB101-D3": {
      "Code": "BB101-D3",
      "Name": "Biology",
      "Venue": "Class Room : LH 301",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ranjith P.",
          " S. Srivastava"
      ],
      "Division": "D3"
  },
  "AE332-M": {
      "Code": "AE332-M",
      "Name": "Aircraft Design",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Avijit Chatterjee"
      ],
      "Division": "M"
  },
  "AE427": {
      "Code": "AE427",
      "Name": "Control Systems Laboratory",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Arya Hemendra",
          " Rohit Gupta",
          " Shashi Ranjan Kumar",
          " Arnab Maity"
      ],
      "Division": ""
  },
  "AE607": {
      "Code": "AE607",
      "Name": "Aerospace Propulsion Laboratory",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Nagendra Kumar"
      ],
      "Division": ""
  },
  "AE622": {
      "Code": "AE622",
      "Name": "Computing of High Speed Flows",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Krishnendu Sinha"
      ],
      "Division": ""
  },
  "AE624": {
      "Code": "AE624",
      "Name": "Hypersonic Flow Theory",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Viren Menezes"
      ],
      "Division": ""
  },
  "AE656": {
      "Code": "AE656",
      "Name": "Aviation Fuels and their Combustion",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Sudarshan Kumar"
      ],
      "Division": ""
  },
  "BB411": {
      "Code": "BB411",
      "Name": "Molecular Cell Biology",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Swapnil Rohidas Shinde"
      ],
      "Division": ""
  },
  "AE658": {
      "Code": "AE658",
      "Name": "Design of Powerplants for Aircraft",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Chandra Sekar Thyagarajan"
      ],
      "Division": ""
  },
  "BB411-M": {
      "Code": "BB411-M",
      "Name": "Molecular Cell Biology",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Swapnil Rohidas Shinde"
      ],
      "Division": "M"
  },
  "AE670": {
      "Code": "AE670",
      "Name": "Liquid Propellant Rocket Engines",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Hrishikesh Gadgil"
      ],
      "Division": ""
  },
  "BB412": {
      "Code": "BB412",
      "Name": "Genomics and Proteomics",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kiran Kondabagilu"
      ],
      "Division": ""
  },
  "AE673": {
      "Code": "AE673",
      "Name": "Fiber Reinforced Composites",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Chandra S. Yerramalli"
      ],
      "Division": ""
  },
  "CE102-S1": {
      "Code": "CE102-S1",
      "Name": "Engineering Mechanics",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "6A"
      ],
      "Instructors": [
          "  ",
          " Jayadipta  GhoshI ",
          "  ",
          " Manish  Kumar"
      ],
      "Division": "S1"
  },
  "BB503": {
      "Code": "BB503",
      "Name": "Genetic Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sushil Kumar"
      ],
      "Division": ""
  },
  "AE678": {
      "Code": "AE678",
      "Name": "Aeroelasticity",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Abhijit Gogulapati"
      ],
      "Division": ""
  },
  "BB503-M": {
      "Code": "BB503-M",
      "Name": "Genetic Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sushil Kumar"
      ],
      "Division": "M"
  },
  "AE682": {
      "Code": "AE682",
      "Name": "Introduction to Thermoacoustics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Vineeth Nair"
      ],
      "Division": ""
  },
  "CE102-S2": {
      "Code": "CE102-S2",
      "Name": "Engineering Mechanics",
      "Venue": "Class Room : LT 002",
      "Slots": [
          "6A"
      ],
      "Instructors": [
          " ",
          " Najeeb Mohammad Shariff"
      ],
      "Division": "S2"
  },
  "BB520": {
      "Code": "BB520",
      "Name": "Analytical Biochemistry",
      "Venue": "Class Room : LT 003",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " P. S. Phale"
      ],
      "Division": ""
  },
  "AE700": {
      "Code": "AE700",
      "Name": "Guidance & Control of Unmanned Autonomous Vehicles",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Shashi Ranjan Kumar"
      ],
      "Division": ""
  },
  "BB522": {
      "Code": "BB522",
      "Name": "Microbiology",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Rajesh Patkar"
      ],
      "Division": ""
  },
  "AE705": {
      "Code": "AE705",
      "Name": "Introduction to Flight",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Kowsik V R Bodi"
      ],
      "Division": ""
  },
  "CE102-S3": {
      "Code": "CE102-S3",
      "Name": "Engineering Mechanics",
      "Venue": "Class Room : LT 003",
      "Slots": [
          "6A"
      ],
      "Instructors": [
          "  ",
          " Meera  Raghunandan"
      ],
      "Division": "S3"
  },
  "BB524": {
      "Code": "BB524",
      "Name": "Genetic Engineering",
      "Venue": "Class Room : LT 004",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Anirban Banerjee"
      ],
      "Division": ""
  },
  "AE706": {
      "Code": "AE706",
      "Name": "Computational Fluid Dynamics",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Mandal J.C."
      ],
      "Division": ""
  },
  "BB526": {
      "Code": "BB526",
      "Name": "Biomolecular Spectroscopy",
      "Venue": "",
      "Slots": [
          "7B",
          "7A"
      ],
      "Instructors": [
          " Ashutosh Kumar"
      ],
      "Division": ""
  },
  "AE708": {
      "Code": "AE708",
      "Name": "Aerospace Propulsion",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Nagendra Kumar"
      ],
      "Division": ""
  },
  "BB528": {
      "Code": "BB528",
      "Name": "Integrated Biology Lab",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Ashutosh Kumar",
          " P. S. Phale",
          " Anirban Banerjee"
      ],
      "Division": ""
  },
  "AE710": {
      "Code": "AE710",
      "Name": "Aeroacoustics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Aniruddha Sinha"
      ],
      "Division": ""
  },
  "CE234-S1": {
      "Code": "CE234-S1",
      "Name": "Structural Mechanics",
      "Venue": "Class Room - 228",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " N.K.Chandiramani"
      ],
      "Division": "S1"
  },
  "AE713": {
      "Code": "AE713",
      "Name": "Space Flight Dynamics",
      "Venue": "Class Room : LC 001",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Rohit Gupta"
      ],
      "Division": ""
  },
  "BB536": {
      "Code": "BB536",
      "Name": "Cryo-Electron Microscopy",
      "Venue": "",
      "Slots": [
          "7B",
          "7A"
      ],
      "Instructors": [
          " Sandip Laxman Kaledhonkar"
      ],
      "Division": ""
  },
  "AE714": {
      "Code": "AE714",
      "Name": "Aircraft Design",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Avijit Chatterjee"
      ],
      "Division": ""
  },
  "BB592": {
      "Code": "BB592",
      "Name": "Project Stage II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Swapnil Rohidas Shinde"
      ],
      "Division": ""
  },
  "CE234-S2": {
      "Code": "CE234-S2",
      "Name": "Structural Mechanics",
      "Venue": "Class Room - 233",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Jangid R.S."
      ],
      "Division": "S2"
  },
  "BB602": {
      "Code": "BB602",
      "Name": "Research philosophy",
      "Venue": "Class Room : LT 002",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Patankar Swati"
      ],
      "Division": ""
  },
  "AE717": {
      "Code": "AE717",
      "Name": "Aircraft Flight Dynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Arya Hemendra"
      ],
      "Division": ""
  },
  "BB606": {
      "Code": "BB606",
      "Name": "Cellular Electricity: Physics & Modeling ",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Manchanda Rohit"
      ],
      "Division": ""
  },
  "AE738": {
      "Code": "AE738",
      "Name": "Tensors for Engineers",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Krishnendu Haldar"
      ],
      "Division": ""
  },
  "CE234-S3": {
      "Code": "CE234-S3",
      "Name": "Structural Mechanics",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " M.M.Inamdar"
      ],
      "Division": "S3"
  },
  "BB610": {
      "Code": "BB610",
      "Name": "Biomedical Microsystems",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " R. Srivastava"
      ],
      "Division": ""
  },
  "AE780": {
      "Code": "AE780",
      "Name": "Computational Heat Transfer and Fluid Flow",
      "Venue": "Seminar Hall",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Ganapathi Bhat"
      ],
      "Division": ""
  },
  "AE899": {
      "Code": "AE899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abhijit Gogulapati",
          " Hrishikesh Gadgil"
      ],
      "Division": ""
  },
  "BB610-M": {
      "Code": "BB610-M",
      "Name": "Biomedical Microsystems",
      "Venue": "Class Room : LA 002",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " R. Srivastava"
      ],
      "Division": "M"
  },
  "CE236": {
      "Code": "CE236",
      "Name": "Soil Mechanics",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Singh D.N."
      ],
      "Division": ""
  },
  "BB612": {
      "Code": "BB612",
      "Name": "Cell Mechanics and Mechanobiology",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Shamik Sen"
      ],
      "Division": ""
  },
  "CE238": {
      "Code": "CE238",
      "Name": "Land Surveying: Theory and Practice",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Eswar Rajasekaran",
          " J. Indu",
          " Raaj Ramsankaran"
      ],
      "Division": ""
  },
  "BB612-M": {
      "Code": "BB612-M",
      "Name": "Cell Mechanics and Mechanobiology",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Shamik Sen"
      ],
      "Division": "M"
  },
  "CE238-S1": {
      "Code": "CE238-S1",
      "Name": "Land Surveying: Theory and Practice",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Eswar Rajasekaran",
          " J. Indu",
          " Raaj Ramsankaran"
      ],
      "Division": "S1"
  },
  "BB615": {
      "Code": "BB615",
      "Name": "General Virology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Kiran Kondabagilu"
      ],
      "Division": ""
  },
  "CE238-S2": {
      "Code": "CE238-S2",
      "Name": "Land Surveying: Theory and Practice",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Eswar Rajasekaran",
          " J. Indu",
          " Raaj Ramsankaran"
      ],
      "Division": "S2"
  },
  "BB616": {
      "Code": "BB616",
      "Name": "Cellular and Tissue Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Prakriti Tayalia"
      ],
      "Division": ""
  },
  "CE242-S1": {
      "Code": "CE242-S1",
      "Name": "Hydromechanics Laboratory",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Srineash V.K."
      ],
      "Division": "S1"
  },
  "BB616-M": {
      "Code": "BB616-M",
      "Name": "Cellular and Tissue Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Prakriti Tayalia"
      ],
      "Division": "M"
  },
  "CE242-S2": {
      "Code": "CE242-S2",
      "Name": "Hydromechanics Laboratory",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Riddhi Singh"
      ],
      "Division": "S2"
  },
  "BB621": {
      "Code": "BB621",
      "Name": "Biostatistics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Shamik Sen"
      ],
      "Division": ""
  },
  "BB623": {
      "Code": "BB623",
      "Name": "Mechanisms of Bacterial Pathogenesis",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Anirban Banerjee"
      ],
      "Division": ""
  },
  "CE244-S1": {
      "Code": "CE244-S1",
      "Name": "Transportation Engineering",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Avijit Maji"
      ],
      "Division": "S1"
  },
  "BB625": {
      "Code": "BB625",
      "Name": "Motor Control in Health and Disease ",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Neeta Kanekar"
      ],
      "Division": ""
  },
  "CE244-S2": {
      "Code": "CE244-S2",
      "Name": "Transportation Engineering",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Solomon Debbarma"
      ],
      "Division": "S2"
  },
  "BB625-M": {
      "Code": "BB625-M",
      "Name": "Motor Control in Health and Disease ",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Neeta Kanekar"
      ],
      "Division": "M"
  },
  "CE324": {
      "Code": "CE324",
      "Name": "Engineering Law",
      "Venue": "Class Room -209",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Milind S. Wankhede",
          " Sinha Ravi"
      ],
      "Division": ""
  },
  "BB628": {
      "Code": "BB628",
      "Name": "Molecular Cell Signaling",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Swapnil Rohidas Shinde"
      ],
      "Division": ""
  },
  "CE330-S1": {
      "Code": "CE330-S1",
      "Name": "Geotechnical Engineering II",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " S. Dasaka Murthy"
      ],
      "Division": "S1"
  },
  "CE330-S2": {
      "Code": "CE330-S2",
      "Name": "Geotechnical Engineering II",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Pinom Ering"
      ],
      "Division": "S2"
  },
  "BB642": {
      "Code": "BB642",
      "Name": "Protein Crystallography",
      "Venue": "",
      "Slots": [
          "3B",
          "LX"
      ],
      "Instructors": [
          " Prasenjit Bhaumik"
      ],
      "Division": ""
  },
  "CE332-S1": {
      "Code": "CE332-S1",
      "Name": "Structural Design II",
      "Venue": "",
      "Slots": [
          "X2",
          "X3"
      ],
      "Instructors": [
          " Amit Kumar Das"
      ],
      "Division": "S1"
  },
  "BB648": {
      "Code": "BB648",
      "Name": "Protein Engineering",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Samir Maji"
      ],
      "Division": ""
  },
  "BB655": {
      "Code": "BB655",
      "Name": "Introduction to Biomedical Optics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Hari M. Varma"
      ],
      "Division": ""
  },
  "CE332-S2": {
      "Code": "CE332-S2",
      "Name": "Structural Design II",
      "Venue": "",
      "Slots": [
          "X2",
          "X3"
      ],
      "Instructors": [
          " Ghosh Siddhartha"
      ],
      "Division": "S2"
  },
  "BB655-M": {
      "Code": "BB655-M",
      "Name": "Introduction to Biomedical Optics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Hari M. Varma"
      ],
      "Division": "M"
  },
  "BB657": {
      "Code": "BB657",
      "Name": "Regulatory Aspects of Drug Development",
      "Venue": "",
      "Slots": [
          "11B",
          "X3"
      ],
      "Instructors": [
          " Ashutosh Kumar"
      ],
      "Division": ""
  },
  "CE334-S1": {
      "Code": "CE334-S1",
      "Name": "Transportation Engineering II",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " P.Vedagiri"
      ],
      "Division": "S1"
  },
  "BB658": {
      "Code": "BB658",
      "Name": "Principles of Tissue Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Prakriti Tayalia"
      ],
      "Division": ""
  },
  "CE334-S2": {
      "Code": "CE334-S2",
      "Name": "Transportation Engineering II",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Nagendra Rao Velaga"
      ],
      "Division": "S2"
  },
  "BB668": {
      "Code": "BB668",
      "Name": "Engineering Principles in Surgical Reconstruction",
      "Venue": "",
      "Slots": [
          "L4",
          "10A"
      ],
      "Instructors": [
          " Vivek P. Soni"
      ],
      "Division": ""
  },
  "CE336-S1": {
      "Code": "CE336-S1",
      "Name": "Geotechnical Engineering Lab II",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " S. Dasaka Murthy"
      ],
      "Division": "S1"
  },
  "BB694": {
      "Code": "BB694",
      "Name": "Seminar ",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Hari M. Varma",
          " Neeta Kanekar"
      ],
      "Division": ""
  },
  "CE336-S2": {
      "Code": "CE336-S2",
      "Name": "Geotechnical Engineering Lab II",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Pinom Ering"
      ],
      "Division": "S2"
  },
  "BB701": {
      "Code": "BB701",
      "Name": "Research Proposal",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Anirban Banerjee"
      ],
      "Division": ""
  },
  "CE338-S1": {
      "Code": "CE338-S1",
      "Name": "Estimation and Materials Testing Laboratory",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Prakash Nanthagopalan"
      ],
      "Division": "S1"
  },
  "BB798": {
      "Code": "BB798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Hari M. Varma",
          " Neeta Kanekar"
      ],
      "Division": ""
  },
  "BBS802": {
      "Code": "BBS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Rajesh Patkar"
      ],
      "Division": ""
  },
  "CE338-S2": {
      "Code": "CE338-S2",
      "Name": "Estimation and Materials Testing Laboratory",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Venkata S. Delhi"
      ],
      "Division": "S2"
  },
  "CE448": {
      "Code": "CE448",
      "Name": "Prestressed Concrete Design",
      "Venue": "Class Room - 208",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Arghadeep Laskar"
      ],
      "Division": ""
  },
  "CE462": {
      "Code": "CE462",
      "Name": "Elements of Structural Dynamics",
      "Venue": "Class Room - 208",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Swagata Basu"
      ],
      "Division": ""
  },
  "CE465": {
      "Code": "CE465",
      "Name": "Numerical Methods in Civil Engineering",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Banerji P."
      ],
      "Division": ""
  },
  "CE484": {
      "Code": "CE484",
      "Name": "Concrete Technology",
      "Venue": "Class Room - 233",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Prakash Nanthagopalan",
          " Swathy Manohar"
      ],
      "Division": ""
  },
  "CE495": {
      "Code": "CE495",
      "Name": "BTP II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amit Kumar Das"
      ],
      "Division": ""
  },
  "CE607": {
      "Code": "CE607",
      "Name": "Numerical Techniques in Hydraulic Engg",
      "Venue": "Class room 212",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " T I Eldho"
      ],
      "Division": ""
  },
  "CE608": {
      "Code": "CE608",
      "Name": "Eco-hydro-Climatology",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Subimal Ghosh"
      ],
      "Division": ""
  },
  "CE610": {
      "Code": "CE610",
      "Name": "Introduction to Earthquake Engineering",
      "Venue": "Class room 212",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Sinha Ravi"
      ],
      "Division": ""
  },
  "CE620": {
      "Code": "CE620",
      "Name": "Finite Element Methods",
      "Venue": "Class Room -209",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Desai Yogesh M."
      ],
      "Division": ""
  },
  "CE629": {
      "Code": "CE629",
      "Name": "Elastic Waves in Solids",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sauvik Banerjee"
      ],
      "Division": ""
  },
  "CE632": {
      "Code": "CE632",
      "Name": "Ground Improvement",
      "Venue": "Class room 212",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " A. Juneja"
      ],
      "Division": ""
  },
  "CE645": {
      "Code": "CE645",
      "Name": "Geotechnical Centrifuge Modelling",
      "Venue": "Class Room - 208",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Viswanadham B.V.S."
      ],
      "Division": ""
  },
  "CE651": {
      "Code": "CE651",
      "Name": "Bridge Engineering",
      "Venue": "Class Room -209",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Goyal Alok"
      ],
      "Division": ""
  },
  "CE652": {
      "Code": "CE652",
      "Name": "Foundations of Offshore Structures",
      "Venue": "Class Room - 233",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Santiram Chatterjee"
      ],
      "Division": ""
  },
  "CE654": {
      "Code": "CE654",
      "Name": "Advanced Hydrological Analysis and Design",
      "Venue": "Class Room - 208",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Jothiprakash V."
      ],
      "Division": ""
  },
  "CE658": {
      "Code": "CE658",
      "Name": "Hydrogeomorphology",
      "Venue": "Class Room - 208",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Basudev Biswal"
      ],
      "Division": ""
  },
  "CE659": {
      "Code": "CE659",
      "Name": "Advanced Surveying",
      "Venue": "Class Room - 228",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Eswar Rajasekaran",
          " Raaj Ramsankaran"
      ],
      "Division": ""
  },
  "CE660": {
      "Code": "CE660",
      "Name": "Conservation of Heritage Structures",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Swathy Manohar"
      ],
      "Division": ""
  },
  "CE676": {
      "Code": "CE676",
      "Name": "Water Resources Systems",
      "Venue": "Class room 212",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " M.J.Reddy"
      ],
      "Division": ""
  },
  "CE677": {
      "Code": "CE677",
      "Name": "Design and Testing of Pile Foundations",
      "Venue": "Class Room - 233",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Prasenjit Basu"
      ],
      "Division": ""
  },
  "CE684": {
      "Code": "CE684",
      "Name": "Advanced Geotechnical Earthquake Engineering",
      "Venue": "Class Room - 233",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Choudhury Deepankar"
      ],
      "Division": ""
  },
  "CE687": {
      "Code": "CE687",
      "Name": "Offshore Construction",
      "Venue": "Class Room - 228",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " R. Balaji"
      ],
      "Division": ""
  },
  "CE694": {
      "Code": "CE694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Choudhury Deepankar"
      ],
      "Division": ""
  },
  "CE695": {
      "Code": "CE695",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Choudhury Deepankar"
      ],
      "Division": ""
  },
  "CE699": {
      "Code": "CE699",
      "Name": " Transportation Systems Studio",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " K.V.Krishna Rao",
          " Tom V Mathew"
      ],
      "Division": ""
  },
  "CE707": {
      "Code": "CE707",
      "Name": "Coastal, Port and Harbor Engineering",
      "Venue": "Class Room - 233",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Srineash V.K."
      ],
      "Division": ""
  },
  "CE708": {
      "Code": "CE708",
      "Name": "Offshore Engineering",
      "Venue": "Class Room -209",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Manasa R. Behera"
      ],
      "Division": ""
  },
  "CE719": {
      "Code": "CE719",
      "Name": "Construction Contracts",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Venkata S. Delhi"
      ],
      "Division": ""
  },
  "CE722": {
      "Code": "CE722",
      "Name": "Construction Management Studio",
      "Venue": "Class Room - 233",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Albert Thomas",
          " Venkata S. Delhi"
      ],
      "Division": ""
  },
  "CE729": {
      "Code": "CE729",
      "Name": "Quality and Safety in Construction",
      "Venue": "Class Room - 228",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Albert Thomas"
      ],
      "Division": ""
  },
  "CE743": {
      "Code": "CE743",
      "Name": "Condition Assessment and Rehabilitation of Structures",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Muhammad Salman"
      ],
      "Division": ""
  },
  "CE745": {
      "Code": "CE745",
      "Name": "Sustainable Buildings",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Albert Thomas"
      ],
      "Division": ""
  },
  "CE749": {
      "Code": "CE749",
      "Name": "Freight transportation Planning and Logistics",
      "Venue": "Class Room - 208",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Gopal R. Patil"
      ],
      "Division": ""
  },
  "CE757": {
      "Code": "CE757",
      "Name": "Remote Sensing of Thermal Radiation",
      "Venue": "Class Room -209",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Eswar Rajasekaran"
      ],
      "Division": ""
  },
  "CE761": {
      "Code": "CE761",
      "Name": "Blast Resistant Structures",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Manish Kumar"
      ],
      "Division": ""
  },
  "CE764": {
      "Code": "CE764",
      "Name": "Hydroinformatics",
      "Venue": "Class Room -209",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Arpita Mondal"
      ],
      "Division": ""
  },
  "CE770": {
      "Code": "CE770",
      "Name": "Ocean Renewable Energy",
      "Venue": "Class room 212",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Manasa R. Behera"
      ],
      "Division": ""
  },
  "CE772": {
      "Code": "CE772",
      "Name": "Pavement Materials",
      "Venue": "Class Room - 208",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Solomon Debbarma"
      ],
      "Division": ""
  },
  "CE773": {
      "Code": "CE773",
      "Name": "Geometric Design and Analysis of High-Speed Roadways",
      "Venue": "Class Room - 228",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Avijit Maji"
      ],
      "Division": ""
  },
  "CE774": {
      "Code": "CE774",
      "Name": "Traffic Management and Design",
      "Venue": "Class Room - 208",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Tom V Mathew"
      ],
      "Division": ""
  },
  "CE778": {
      "Code": "CE778",
      "Name": "Microwave Remote Sensing: Principles and Applications in Civil Engineering",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " J. Indu"
      ],
      "Division": ""
  },
  "CE780": {
      "Code": "CE780",
      "Name": "Behavioural Travel Modelling",
      "Venue": "Class Room - 228",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " K.V.Krishna Rao"
      ],
      "Division": ""
  },
  "CE899": {
      "Code": "CE899",
      "Name": "Communication Skills",
      "Venue": "P. G. Lecture Room - 238",
      "Slots": [
          "XC",
          "XD"
      ],
      "Instructors": [
          " Bellie Sivakumar"
      ],
      "Division": ""
  },
  "CES801": {
      "Code": "CES801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Choudhury Deepankar"
      ],
      "Division": ""
  },
  "CH110": {
      "Code": "CH110",
      "Name": "Interpretative Spectroscopy",
      "Venue": "Class Room : LT 304",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Chandra M. R. Volla",
          " M. S. Balakrishna"
      ],
      "Division": ""
  },
  "CH117-P13": {
      "Code": "CH117-P13",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P13"
  },
  "CH117-P14": {
      "Code": "CH117-P14",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P14"
  },
  "CH117-P15": {
      "Code": "CH117-P15",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P15"
  },
  "CH117-P16": {
      "Code": "CH117-P16",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P16"
  },
  "CH117-P19": {
      "Code": "CH117-P19",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "1B",
          "2B",
          "4B"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P19"
  },
  "CH117-P20": {
      "Code": "CH117-P20",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "5B",
          "6B"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P20"
  },
  "CH117-P21": {
      "Code": "CH117-P21",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "2A",
          "3A",
          "4A"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P21"
  },
  "CH117-P22": {
      "Code": "CH117-P22",
      "Name": "Chemistry Lab",
      "Venue": "",
      "Slots": [
          "1C",
          "2C",
          "4C"
      ],
      "Instructors": [
          " A.Chowdhury",
          " Chidambar Kulkarni",
          " Gopalan Rajaram",
          " Maheswaran S.",
          " Rahul Maitra",
          " R. Murugavel",
          " Rodney Fernandes",
          " Sandip Kar",
          " Rajarshi Chakrabarti"
      ],
      "Division": "P22"
  },
  "CH202": {
      "Code": "CH202",
      "Name": "Transition Metal Chemistry",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Gopalan Rajaram",
          " Goutam K. Lahiri"
      ],
      "Division": ""
  },
  "CH202-M": {
      "Code": "CH202-M",
      "Name": "Transition Metal Chemistry",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Gopalan Rajaram",
          " Goutam K. Lahiri"
      ],
      "Division": "M"
  },
  "CH216": {
      "Code": "CH216",
      "Name": "Thermodynamics and Chemical Kinetics",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " G. Naresh Patwari",
          " Shobhna Kapoor"
      ],
      "Division": ""
  },
  "CH216-M": {
      "Code": "CH216-M",
      "Name": "Thermodynamics and Chemical Kinetics",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " G. Naresh Patwari",
          " Shobhna Kapoor"
      ],
      "Division": "M"
  },
  "CH226": {
      "Code": "CH226",
      "Name": "Inorganic Chemistry Lab-II",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Srinivasan Ramakrishnan",
          " Sanjog Sunil Nagarkar"
      ],
      "Division": ""
  },
  "CH228": {
      "Code": "CH228",
      "Name": "Organic Chemistry Lab II",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Venkateswarlu Yarlagadda",
          " Nandita Madhavan"
      ],
      "Division": ""
  },
  "CH230": {
      "Code": "CH230",
      "Name": "Physical Chemistry Lab I",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Ishita Sengupta",
          " A. Datta"
      ],
      "Division": ""
  },
  "CH398": {
      "Code": "CH398",
      "Name": "Mini Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chidambar Kulkarni",
          " Sanjog Sunil Nagarkar"
      ],
      "Division": ""
  },
  "CH404": {
      "Code": "CH404",
      "Name": "Physical Organic Chemistry",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Chidambar Kulkarni"
      ],
      "Division": ""
  },
  "CH404-M": {
      "Code": "CH404-M",
      "Name": "Physical Organic Chemistry",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Chidambar Kulkarni"
      ],
      "Division": "M"
  },
  "CH406": {
      "Code": "CH406",
      "Name": "Thermal and Photochemical Reactions",
      "Venue": "Class : CL 106 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Nandita Madhavan"
      ],
      "Division": ""
  },
  "CH406-M": {
      "Code": "CH406-M",
      "Name": "Thermal and Photochemical Reactions",
      "Venue": "Class : CL 106 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Nandita Madhavan"
      ],
      "Division": "M"
  },
  "CH408": {
      "Code": "CH408",
      "Name": "Molecular Energetics and Dynamics",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Nand Kishore",
          " Sandip Kar"
      ],
      "Division": ""
  },
  "CH408-M": {
      "Code": "CH408-M",
      "Name": "Molecular Energetics and Dynamics",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Nand Kishore",
          " Sandip Kar"
      ],
      "Division": "M"
  },
  "CH410": {
      "Code": "CH410",
      "Name": "Bio-Inorganic Chemistry",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Arnab Dutta",
          " D. Maiti"
      ],
      "Division": ""
  },
  "CH418": {
      "Code": "CH418",
      "Name": "Organic Chemistry Lab. III",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Pradeep Kumar P.I.",
          " Chandra M. R. Volla"
      ],
      "Division": ""
  },
  "CH432": {
      "Code": "CH432",
      "Name": "Inorganic Chemistry Lab III",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " M. Ravikanth"
      ],
      "Division": ""
  },
  "CH434": {
      "Code": "CH434",
      "Name": "Physical Chemistry Lab III",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Achintya Kumar Dutta",
          " G. Naresh Patwari"
      ],
      "Division": ""
  },
  "CH438": {
      "Code": "CH438",
      "Name": "Chemistry of Main Group Elements",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sanjog Sunil Nagarkar",
          " R. Murugavel"
      ],
      "Division": ""
  },
  "CH438-M": {
      "Code": "CH438-M",
      "Name": "Chemistry of Main Group Elements",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sanjog Sunil Nagarkar",
          " R. Murugavel"
      ],
      "Division": "M"
  },
  "CH442": {
      "Code": "CH442",
      "Name": "Molecular Spectroscopy",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " A. Datta",
          " A.Chowdhury"
      ],
      "Division": ""
  },
  "CH442-M": {
      "Code": "CH442-M",
      "Name": "Molecular Spectroscopy",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " A. Datta",
          " A.Chowdhury"
      ],
      "Division": "M"
  },
  "CH540": {
      "Code": "CH540",
      "Name": "Drugs and Biologically Active Compounds",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Pradeep Kumar P.I.",
          " Venkateswarlu Yarlagadda"
      ],
      "Division": ""
  },
  "CH560": {
      "Code": "CH560",
      "Name": "Quantum Chemistry",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Achintya Kumar Dutta"
      ],
      "Division": ""
  },
  "CH576": {
      "Code": "CH576",
      "Name": "Statistical Mechanics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Rahul Maitra",
          " Rajarshi Chakrabarti"
      ],
      "Division": ""
  },
  "CH578": {
      "Code": "CH578",
      "Name": "Topics in Inorganic Chemistry II",
      "Venue": "Class : CL 112 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Maheswaran S.",
          " Ghosh Prasenjit"
      ],
      "Division": ""
  },
  "CH588": {
      "Code": "CH588",
      "Name": "Organic Synthesis",
      "Venue": "Class Room : LT 004",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Santosh J. Gharpure",
          " Kaliappan K P"
      ],
      "Division": ""
  },
  "CH592": {
      "Code": "CH592",
      "Name": "Research Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chidambar Kulkarni",
          " Sanjog Sunil Nagarkar"
      ],
      "Division": ""
  },
  "CH594": {
      "Code": "CH594",
      "Name": "Project Stage II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chidambar Kulkarni",
          " Sanjog Sunil Nagarkar"
      ],
      "Division": ""
  },
  "CH596": {
      "Code": "CH596",
      "Name": "M.Sc. Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chidambar Kulkarni",
          " Sanjog Sunil Nagarkar"
      ],
      "Division": ""
  },
  "CH604": {
      "Code": "CH604",
      "Name": "Introduction to NMR Spectroscopy",
      "Venue": "Class Room : LT 004",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Ishita Sengupta"
      ],
      "Division": ""
  },
  "CL102": {
      "Code": "CL102",
      "Name": "Material and Energy Balances",
      "Venue": "Class Room : LH 301",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Bellare J.",
          " Bhartiya S."
      ],
      "Division": ""
  },
  "CH605": {
      "Code": "CH605",
      "Name": "Chemical dynamics: quantum, classical and semiclassical methods",
      "Venue": "Class Room : LT 003",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Amber Jain"
      ],
      "Division": ""
  },
  "CL208-S1": {
      "Code": "CL208-S1",
      "Name": "Chemical Reaction Engineering",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Sonali Das"
      ],
      "Division": "S1"
  },
  "CH806": {
      "Code": "CH806",
      "Name": "Molecular Photochemistry",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " M. Ravikanth",
          " Rodney Fernandes",
          " A. Datta"
      ],
      "Division": ""
  },
  "CL208-S2": {
      "Code": "CL208-S2",
      "Name": "Chemical Reaction Engineering",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Sanjay Mahajani"
      ],
      "Division": "S2"
  },
  "CH824": {
      "Code": "CH824",
      "Name": "Organotransition Metal and Acceptor Ligand Complex",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Srinivasan Ramakrishnan",
          " M. S. Balakrishna"
      ],
      "Division": ""
  },
  "CL210": {
      "Code": "CL210",
      "Name": "Separation Processes",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Supreet Saini",
          " Venkatesh K.V."
      ],
      "Division": ""
  },
  "CM503": {
      "Code": "CM503",
      "Name": "Atmospheric Thermodynamics",
      "Venue": "Class Room : LT 005",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Angshuman Modak"
      ],
      "Division": ""
  },
  "CH831": {
      "Code": "CH831",
      "Name": "Advanced Laboratory Techniques",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Kaliappan K P",
          " Kamendra P. Sharma",
          " Ruchi Anand",
          " Goutam K. Lahiri"
      ],
      "Division": ""
  },
  "CL232": {
      "Code": "CL232",
      "Name": "Chemical Engineering Lab. I",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Khakhar D.V.",
          " Swati Bhattacharya",
          " Amol Subhedar"
      ],
      "Division": ""
  },
  "CM504": {
      "Code": "CM504",
      "Name": "Monsoons and Tropical Climate",
      "Venue": "Class Room : LT 006",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Vishal Dixit"
      ],
      "Division": ""
  },
  "CH848": {
      "Code": "CH848",
      "Name": "Advanced Molecular Energetics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Sandip Kar",
          " Nand Kishore"
      ],
      "Division": ""
  },
  "CL242": {
      "Code": "CL242",
      "Name": "Fundamentals of Heat and Mass Transfer",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ojus Mohan",
          " P.Sunthar"
      ],
      "Division": ""
  },
  "CM611": {
      "Code": "CM611",
      "Name": "Introduction to Ocean Atmosphere Dynamics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Raghu Murtugudde"
      ],
      "Division": ""
  },
  "CH849": {
      "Code": "CH849",
      "Name": "Organic Spectroscopy",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " I.N.N. Namboothiri"
      ],
      "Division": ""
  },
  "CL244-S1": {
      "Code": "CL244-S1",
      "Name": "Introduction to Numerical Analysis",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Santosh Noronha"
      ],
      "Division": "S1"
  },
  "CM613": {
      "Code": "CM613",
      "Name": "Waves and Instabilities in Geophysical Fluid Dynamics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " S. Ravichandran  "
      ],
      "Division": ""
  },
  "CL244-S2": {
      "Code": "CL244-S2",
      "Name": "Introduction to Numerical Analysis",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Ratul Dasgupta"
      ],
      "Division": "S2"
  },
  "CH864": {
      "Code": "CH864",
      "Name": "Biopolymers",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Ruchi Anand",
          " Kamendra P. Sharma"
      ],
      "Division": ""
  },
  "CM801": {
      "Code": "CM801",
      "Name": "Introduction to Risk Analysis",
      "Venue": "Class Room : LT 005",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Subhankar Karmakar"
      ],
      "Division": ""
  },
  "CL260": {
      "Code": "CL260",
      "Name": "Molecular and Statistical Thermodynamics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Adhikari J."
      ],
      "Division": ""
  },
  "CH899": {
      "Code": "CH899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " R. B. Sunoj",
          " Shobhna Kapoor",
          " Ghosh Prasenjit"
      ],
      "Division": ""
  },
  "CHS802": {
      "Code": "CHS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " A.Chowdhury",
          " D. Maiti",
          " R. B. Sunoj"
      ],
      "Division": ""
  },
  "CMS801": {
      "Code": "CMS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Vishal Dixit"
      ],
      "Division": ""
  },
  "CL302-S1": {
      "Code": "CL302-S1",
      "Name": "Process Control",
      "Venue": "",
      "Slots": [
          "7A"
      ],
      "Instructors": [
          " Bharatkumar Suthar"
      ],
      "Division": "S1"
  },
  "CMS802": {
      "Code": "CMS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Vishal Dixit"
      ],
      "Division": ""
  },
  "CL302-S2": {
      "Code": "CL302-S2",
      "Name": "Process Control",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Ravindra D. Gudi"
      ],
      "Division": "S2"
  },
  "CL306": {
      "Code": "CL306",
      "Name": "Chemical Processes",
      "Venue": "Class Room : LH 101",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Vinjamur Madhu",
          " Rahul Nabar"
      ],
      "Division": ""
  },
  "CL310-S1": {
      "Code": "CL310-S1",
      "Name": "Mass Transfer II",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Abhijit Majumder"
      ],
      "Division": "S1"
  },
  "CL310-S2": {
      "Code": "CL310-S2",
      "Name": "Mass Transfer II",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Ateeque Malani"
      ],
      "Division": "S2"
  },
  "CL325": {
      "Code": "CL325",
      "Name": "Chemical Reaction Engineering II",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Suresh A.K."
      ],
      "Division": ""
  },
  "CL335": {
      "Code": "CL335",
      "Name": "Chemical Engineering Lab. III",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Mehra A.",
          " Wangikar P.",
          " Sameer Ralph Jadhav"
      ],
      "Division": ""
  },
  "CL407": {
      "Code": "CL407",
      "Name": "Process Equipment Design",
      "Venue": "",
      "Slots": [
          "7A"
      ],
      "Instructors": [
          " Yogendra Shastri"
      ],
      "Division": ""
  },
  "CL429": {
      "Code": "CL429",
      "Name": "Polymer Science and Engineering",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Nanavati Hemant"
      ],
      "Division": ""
  },
  "CL445": {
      "Code": "CL445",
      "Name": "Supervised learning II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Venkat Gundabala",
          " Jason Ryan Picardo"
      ],
      "Division": ""
  },
  "CL451": {
      "Code": "CL451",
      "Name": "Chemical Process Design",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Sujit S. Jogwar"
      ],
      "Division": ""
  },
  "CL452": {
      "Code": "CL452",
      "Name": "Process Design Project",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Guruswamy Kumaraswamy",
          " Moudgalya Kannan.",
          " Rajdip Bandyopadhyaya",
          " Roy S.",
          " Venkat Gundabala",
          " Moudgalya Kannan.",
          " Rochish Thaokar"
      ],
      "Division": ""
  },
  "CL494": {
      "Code": "CL494",
      "Name": "B.Tech. Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Venkat Gundabala",
          " Jason Ryan Picardo"
      ],
      "Division": ""
  },
  "CL610": {
      "Code": "CL610",
      "Name": "Experimental Methods",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Arindam Sarkar",
          " Jyoti R. Seth",
          " Partha S. Goswami"
      ],
      "Division": ""
  },
  "CL657": {
      "Code": "CL657",
      "Name": "Computational Flow Modelling",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Partha S. Goswami"
      ],
      "Division": ""
  },
  "CL677": {
      "Code": "CL677",
      "Name": "Modelling Stochastic and Turbulent Transport",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Jason Ryan Picardo"
      ],
      "Division": ""
  },
  "CL678": {
      "Code": "CL678",
      "Name": "Techno-Commerical Aspects of Fine Chemicals",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Rahul Nabar",
          " Sanjay Mahajani"
      ],
      "Division": ""
  },
  "CL686": {
      "Code": "CL686",
      "Name": "Advanced Process Control",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Manibhushan"
      ],
      "Division": ""
  },
  "CL694": {
      "Code": "CL694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ratul Dasgupta",
          " Abhijit Majumder"
      ],
      "Division": ""
  },
  "CL704": {
      "Code": "CL704",
      "Name": "Lecture Series",
      "Venue": "Class Room : LT 003",
      "Slots": [
          "X1",
          "X2"
      ],
      "Instructors": [
          " Rochish Thaokar",
          " Swati Bhattacharya",
          " Bharatkumar Suthar"
      ],
      "Division": ""
  },
  "CL717": {
      "Code": "CL717",
      "Name": "Evolutionary Dynamics",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Supreet Saini"
      ],
      "Division": ""
  },
  "CL726": {
      "Code": "CL726",
      "Name": "Introduction to Genomics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sarika Mehra"
      ],
      "Division": ""
  },
  "CL899": {
      "Code": "CL899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Mukta Tripathy"
      ],
      "Division": ""
  },
  "CLS802": {
      "Code": "CLS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Partha S. Goswami"
      ],
      "Division": ""
  },
  "DH301": {
      "Code": "DH301",
      "Name": "Basic Epidemiology",
      "Venue": "",
      "Slots": [
          "X1",
          "X2",
          "X3"
      ],
      "Instructors": [
          " G.Ramakrishnan"
      ],
      "Division": ""
  },
  "DH301-M": {
      "Code": "DH301-M",
      "Name": "Basic Epidemiology",
      "Venue": "",
      "Slots": [
          "X1",
          "X2",
          "X3"
      ],
      "Instructors": [
          " G.Ramakrishnan"
      ],
      "Division": "M"
  },
  "DH304": {
      "Code": "DH304",
      "Name": "Economics of Health Care",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Souvik Banerjee"
      ],
      "Division": ""
  },
  "DH304-M": {
      "Code": "DH304-M",
      "Name": "Economics of Health Care",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Souvik Banerjee"
      ],
      "Division": "M"
  },
  "DH307": {
      "Code": "DH307",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " G.Ramakrishnan"
      ],
      "Division": ""
  },
  "DH307-M": {
      "Code": "DH307-M",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " G.Ramakrishnan"
      ],
      "Division": "M"
  },
  "DH602": {
      "Code": "DH602",
      "Name": "Machine Learning and Statistical Methods in Healthcare",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kshitij Jadhav"
      ],
      "Division": ""
  },
  "DH602-M": {
      "Code": "DH602-M",
      "Name": "Machine Learning and Statistical Methods in Healthcare",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kshitij Jadhav"
      ],
      "Division": "M"
  },
  "DH804": {
      "Code": "DH804",
      "Name": "Magnetic Resonance Imaging: From Physics to Physiology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Ashutosh Kumar"
      ],
      "Division": ""
  },
  "DH804-M": {
      "Code": "DH804-M",
      "Name": "Magnetic Resonance Imaging: From Physics to Physiology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Ashutosh Kumar"
      ],
      "Division": "M"
  },
  "DH805": {
      "Code": "DH805",
      "Name": "X-ray based Imaging in Healthcare",
      "Venue": "",
      "Slots": [
          "10B",
          "10A",
          "XC",
          "XD"
      ],
      "Instructors": [
          " Bharat Aggarwal",
          " Hari M. Varma"
      ],
      "Division": ""
  },
  "DH805-M": {
      "Code": "DH805-M",
      "Name": "X-ray based Imaging in Healthcare",
      "Venue": "",
      "Slots": [
          "10B",
          "10A",
          "XC",
          "XD"
      ],
      "Instructors": [
          " Bharat Aggarwal",
          " Hari M. Varma"
      ],
      "Division": "M"
  },
  "DH899": {
      "Code": "DH899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Ambarish Kunwar"
      ],
      "Division": ""
  },
  "CS101-D1": {
      "Code": "CS101-D1",
      "Name": "Computer Programming and Utilization",
      "Venue": "Class Room : LA 201",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Shivaram Kalyanakrishnan"
      ],
      "Division": "D1"
  },
  "DH899-M": {
      "Code": "DH899-M",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Ambarish Kunwar"
      ],
      "Division": "M"
  },
  "CS101-D2": {
      "Code": "CS101-D2",
      "Name": "Computer Programming and Utilization",
      "Venue": "Class Room : LA 201",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Shivaram Kalyanakrishnan"
      ],
      "Division": "D2"
  },
  "DHS801": {
      "Code": "DHS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ashutosh Kumar"
      ],
      "Division": ""
  },
  "CS104": {
      "Code": "CS104",
      "Name": "Software Systems Lab",
      "Venue": "Class Room : LH 301",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Kameswari Chebrolu"
      ],
      "Division": ""
  },
  "CS207": {
      "Code": "CS207",
      "Name": "Discrete Structures",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bharat Adsul"
      ],
      "Division": ""
  },
  "DS203-M": {
      "Code": "DS203-M",
      "Name": "Programming for Data Science",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Vinay Kulkarni"
      ],
      "Division": "M"
  },
  "CS207-M": {
      "Code": "CS207-M",
      "Name": "Discrete Structures",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bharat Adsul"
      ],
      "Division": "M"
  },
  "DS303-M": {
      "Code": "DS303-M",
      "Name": "Introduction to Machine Learning",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Manjesh K. Hanawal"
      ],
      "Division": "M"
  },
  "DS899": {
      "Code": "DS899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "XC"
      ],
      "Instructors": [
          " Ankur Kulkarni"
      ],
      "Division": ""
  },
  "CS208": {
      "Code": "CS208",
      "Name": "Automata Theory and Logic",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Supratik Chakraborty"
      ],
      "Division": ""
  },
  "CS213": {
      "Code": "CS213",
      "Name": "Data Structures and Algorithms",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sohoni Milind"
      ],
      "Division": ""
  },
  "CS213-M": {
      "Code": "CS213-M",
      "Name": "Data Structures and Algorithms",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sohoni Milind"
      ],
      "Division": "M"
  },
  "CS217": {
      "Code": "CS217",
      "Name": "Artificial Intelligence and Machine Learning",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Swaprava Nath"
      ],
      "Division": ""
  },
  "CS218": {
      "Code": "CS218",
      "Name": "Design and Analysis of Algorithms",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Rohit Gurjar"
      ],
      "Division": ""
  },
  "CS219": {
      "Code": "CS219",
      "Name": "Operating Systems",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Mythili Vutukuru"
      ],
      "Division": ""
  },
  "CS236": {
      "Code": "CS236",
      "Name": "Operating Systems Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Mythili Vutukuru"
      ],
      "Division": ""
  },
  "CS240": {
      "Code": "CS240",
      "Name": "Artificial Intelligence and Machine Learning (Lab)",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Swaprava Nath"
      ],
      "Division": ""
  },
  "CS302": {
      "Code": "CS302",
      "Name": "Implementation of Programming Languages",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Uday Khedkar"
      ],
      "Division": ""
  },
  "CS310": {
      "Code": "CS310",
      "Name": "Automata Theory",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sivakumar G."
      ],
      "Division": ""
  },
  "CS310-M": {
      "Code": "CS310-M",
      "Name": "Automata Theory",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sivakumar G."
      ],
      "Division": "M"
  },
  "CS316": {
      "Code": "CS316",
      "Name": "Implementation of Programming Languages Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Uday Khedkar"
      ],
      "Division": ""
  },
  "CS317": {
      "Code": "CS317",
      "Name": "Database and Information Systems",
      "Venue": "Class Room : LH 102",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " B. L. Menezes"
      ],
      "Division": ""
  },
  "CS387": {
      "Code": "CS387",
      "Name": "Database and Information Systems Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Bhaskar Raman"
      ],
      "Division": ""
  },
  "CS396": {
      "Code": "CS396",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Uday Khedkar",
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS406": {
      "Code": "CS406",
      "Name": "Cryptography and Network Security",
      "Venue": "CC 101 : Class Room",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Manoj Prabhakaran"
      ],
      "Division": ""
  },
  "CS419": {
      "Code": "CS419",
      "Name": "Introducing to Machine Learning",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Abir De"
      ],
      "Division": ""
  },
  "CS419-M": {
      "Code": "CS419-M",
      "Name": "Introducing to Machine Learning",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Abir De"
      ],
      "Division": "M"
  },
  "CS433": {
      "Code": "CS433",
      "Name": "Automated Reasoning",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS485": {
      "Code": "CS485",
      "Name": "R & D Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Uday Khedkar",
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS490": {
      "Code": "CS490",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Uday Khedkar",
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS492": {
      "Code": "CS492",
      "Name": "BTP I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Uday Khedkar",
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS496": {
      "Code": "CS496",
      "Name": "BTP II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Uday Khedkar",
          " Ashutosh Kumar Gupta"
      ],
      "Division": ""
  },
  "CS6004": {
      "Code": "CS6004",
      "Name": "Code Optimization for Object-Oriented Languages",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Manas Thakur"
      ],
      "Division": ""
  },
  "CS603": {
      "Code": "CS603",
      "Name": "Geometric Algorithms",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sujoy Bhore"
      ],
      "Division": ""
  },
  "CS608": {
      "Code": "CS608",
      "Name": "Approximation Algorithms",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Diwan A.A."
      ],
      "Division": ""
  },
  "CS613": {
      "Code": "CS613",
      "Name": "Design & Implementation of Functional Programming Languages",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sivakumar G."
      ],
      "Division": ""
  },
  "CS684": {
      "Code": "CS684",
      "Name": "Embedded Systems",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " K. Arya",
          " Paritosh K. Pandya"
      ],
      "Division": ""
  },
  "CS691": {
      "Code": "CS691",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bhaskar Raman",
          " Preethi Jyothi"
      ],
      "Division": ""
  },
  "CS692": {
      "Code": "CS692",
      "Name": "R & D Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bhaskar Raman",
          " Preethi Jyothi"
      ],
      "Division": ""
  },
  "CS694": {
      "Code": "CS694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bhaskar Raman",
          " Preethi Jyothi"
      ],
      "Division": ""
  },
  "CS695": {
      "Code": "CS695",
      "Name": "Topics in Virtualization and Cloud Computing",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Purushottam Kulkarni"
      ],
      "Division": ""
  },
  "CS726": {
      "Code": "CS726",
      "Name": "Advanced Machine Learning",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " S. Sarawagi"
      ],
      "Division": ""
  },
  "CS728": {
      "Code": "CS728",
      "Name": "Organization of Web Information",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Chakrabarti Soumen"
      ],
      "Division": ""
  },
  "CS735": {
      "Code": "CS735",
      "Name": "Formal Models for Concurrent and Asynchronous Systems",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " S. Akshay"
      ],
      "Division": ""
  },
  "CS736": {
      "Code": "CS736",
      "Name": "Medical Image Computing ",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Suyash P. Awate"
      ],
      "Division": ""
  },
  "CS738": {
      "Code": "CS738",
      "Name": "Concepts, Algorithms and Tools for Model Checking",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Paritosh K. Pandya"
      ],
      "Division": ""
  },
  "CS745": {
      "Code": "CS745",
      "Name": "Principles of Data and System Security",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Virendra Singh"
      ],
      "Division": ""
  },
  "CS753": {
      "Code": "CS753",
      "Name": "Automatic Speech Recognition",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Preethi Jyothi"
      ],
      "Division": ""
  },
  "CS754": {
      "Code": "CS754",
      "Name": "Advanced Image Processing",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Ajit V. Rajwade"
      ],
      "Division": ""
  },
  "CS757": {
      "Code": "CS757",
      "Name": "Design and Re-engineering of Object Oriented Programs",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Joshi Rushikesh K."
      ],
      "Division": ""
  },
  "CS765": {
      "Code": "CS765",
      "Name": "Introduction to Blockchains, Cryptocurrencies and Smart Contracts",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Vinay J. Ribeiro"
      ],
      "Division": ""
  },
  "CS767": {
      "Code": "CS767",
      "Name": "Theoretical Machine Learning",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Ranade A."
      ],
      "Division": ""
  },
  "CS769": {
      "Code": "CS769",
      "Name": "Optimization in Machine Learning",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " G.Ramakrishnan"
      ],
      "Division": ""
  },
  "CS772": {
      "Code": "CS772",
      "Name": "Deep Learning for Natural Language Processing",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Bhattacharya P."
      ],
      "Division": ""
  },
  "CS778": {
      "Code": "CS778",
      "Name": "M.S. R&D 2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bhaskar Raman",
          " Preethi Jyothi"
      ],
      "Division": ""
  },
  "CS779": {
      "Code": "CS779",
      "Name": "Extremal Combinatorics",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Vishwanathan Sundar"
      ],
      "Division": ""
  },
  "CS784": {
      "Code": "CS784",
      "Name": "Image Synthesis",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Parag Chaudhuri"
      ],
      "Division": ""
  },
  "CS786": {
      "Code": "CS786",
      "Name": "Randomized Algorithms",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Akash Kumar"
      ],
      "Division": ""
  },
  "CS899": {
      "Code": "CS899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "XC",
          "XD"
      ],
      "Instructors": [
          " K. Arya"
      ],
      "Division": ""
  },
  "CSS801": {
      "Code": "CSS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abir De"
      ],
      "Division": ""
  },
  "CSS802": {
      "Code": "CSS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abir De"
      ],
      "Division": ""
  },
  "EC101": {
      "Code": "EC101",
      "Name": "Economics",
      "Venue": "Class Room : LT 305",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Haripriya Gundimeda",
          " Neha Gupta"
      ],
      "Division": ""
  },
  "EC210": {
      "Code": "EC210",
      "Name": "Intermediate Microeconomics II",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Neha Gupta",
          " Saptarshi Prosonno Ghosh"
      ],
      "Division": ""
  },
  "EC212": {
      "Code": "EC212",
      "Name": "Intermediate Macroeconomics II",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Surajit Bhattacharya"
      ],
      "Division": ""
  },
  "EC214": {
      "Code": "EC214",
      "Name": "Statistics II",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Aditi Balkrishna Chaubal"
      ],
      "Division": ""
  },
  "EC302": {
      "Code": "EC302",
      "Name": "International  Economics II",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Radeef Chundakkadan"
      ],
      "Division": ""
  },
  "EC304": {
      "Code": "EC304",
      "Name": "Development Economics II",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Subrato Banerjee",
          " Saptarshi Prosonno Ghosh"
      ],
      "Division": ""
  },
  "EC405": {
      "Code": "EC405",
      "Name": "Econometrics II",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Tara S. Shaw"
      ],
      "Division": ""
  },
  "EC407": {
      "Code": "EC407",
      "Name": "Econometrics II Lab",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Tara S. Shaw"
      ],
      "Division": ""
  },
  "EC411": {
      "Code": "EC411",
      "Name": "Indian Economy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Narayanan K."
      ],
      "Division": ""
  },
  "EC440": {
      "Code": "EC440",
      "Name": "Industrial Economics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Subrato Banerjee"
      ],
      "Division": ""
  },
  "EC631": {
      "Code": "EC631",
      "Name": "Financial Economics",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Pooja Padhi"
      ],
      "Division": ""
  },
  "EC633": {
      "Code": "EC633",
      "Name": "Economtrics of Programme Evaluation",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Rama Pal"
      ],
      "Division": ""
  },
  "EC821": {
      "Code": "EC821",
      "Name": "Applied Econometrics",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Narayanan K.",
          " Souvik Banerjee",
          " Surajit Bhattacharya",
          " Pooja Padhi"
      ],
      "Division": ""
  },
  "EE114-S1": {
      "Code": "EE114-S1",
      "Name": "Power Engineering - I",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " M. Chandorkar"
      ],
      "Division": "S1"
  },
  "EE114-S2": {
      "Code": "EE114-S2",
      "Name": "Power Engineering - I",
      "Venue": "Class Room : LC 302",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sandeep Anand"
      ],
      "Division": "S2"
  },
  "EE204": {
      "Code": "EE204",
      "Name": "Analog Circuits",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " M. B. Patil"
      ],
      "Division": ""
  },
  "EE204-M": {
      "Code": "EE204-M",
      "Name": "Analog Circuits",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " M. B. Patil"
      ],
      "Division": "M"
  },
  "EE207-S1": {
      "Code": "EE207-S1",
      "Name": "Electronic Devices & Circuits",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Ashwin Tulapurkar"
      ],
      "Division": "S1"
  },
  "EE207-S2": {
      "Code": "EE207-S2",
      "Name": "Electronic Devices & Circuits",
      "Venue": "Class Room : LC 201",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Dipankar Saha"
      ],
      "Division": "S2"
  },
  "EE229": {
      "Code": "EE229",
      "Name": "Signal Processing \u2013 I",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Kumar Appaiah"
      ],
      "Division": ""
  },
  "EE229-M": {
      "Code": "EE229-M",
      "Name": "Signal Processing \u2013 I",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Kumar Appaiah"
      ],
      "Division": "M"
  },
  "EE230": {
      "Code": "EE230",
      "Name": "Analog Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sandip Mondal",
          " Anil K.G."
      ],
      "Division": ""
  },
  "EE238-S1": {
      "Code": "EE238-S1",
      "Name": "Power Engineering - II",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Fernandes B.G."
      ],
      "Division": "S1"
  },
  "EE238-S2": {
      "Code": "EE238-S2",
      "Name": "Power Engineering - II",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Chatterjee Kishore"
      ],
      "Division": "S2"
  },
  "EE240": {
      "Code": "EE240",
      "Name": "Power Engineering Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Agarwal Vivek",
          " Fernandes B.G.",
          " Kulkarni A.M.",
          " Shiladri Chakraborty",
          " Soman S.A.",
          " Sandeep Anand"
      ],
      "Division": ""
  },
  "EE302-S1": {
      "Code": "EE302-S1",
      "Name": "Control Systems",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Pillai Harish"
      ],
      "Division": "S1"
  },
  "EE302-S2": {
      "Code": "EE302-S2",
      "Name": "Control Systems",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " M Belur"
      ],
      "Division": "S2"
  },
  "EE309": {
      "Code": "EE309",
      "Name": "Microprocessors",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Virendra Singh"
      ],
      "Division": ""
  },
  "EE325": {
      "Code": "EE325",
      "Name": "Probability and Random Processes",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Nikhil Karamchandani"
      ],
      "Division": ""
  },
  "EE325-M": {
      "Code": "EE325-M",
      "Name": "Probability and Random Processes",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Nikhil Karamchandani"
      ],
      "Division": "M"
  },
  "EE337": {
      "Code": "EE337",
      "Name": "Microprocessors Laboratory",
      "Venue": "",
      "Slots": [
          "L1",
          "L2"
      ],
      "Instructors": [
          " Nikhil Karamchandani",
          " Patkar Sachin"
      ],
      "Division": ""
  },
  "EE338": {
      "Code": "EE338",
      "Name": "Digital Signal Processing",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Gadre V.M."
      ],
      "Division": ""
  },
  "EE344": {
      "Code": "EE344",
      "Name": "Electronic Design Lab",
      "Venue": "",
      "Slots": [
          "L1",
          "L2"
      ],
      "Instructors": [
          " Anil K.G.",
          " Anupama Kowli",
          " M. Chandorkar",
          " Pandey P.C.",
          " Sandeep Anand",
          " S. Vijayakumaran",
          " Veeresh Vidyadhar Deshpande",
          " V Raj Babu",
          " J.John",
          " Siddharth Tallur"
      ],
      "Division": ""
  },
  "EE350-S1": {
      "Code": "EE350-S1",
      "Name": "Technical Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Debanjan Bhowmik"
      ],
      "Division": "S1"
  },
  "EE350-S2": {
      "Code": "EE350-S2",
      "Name": "Technical Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Satish Mulleti"
      ],
      "Division": "S2"
  },
  "EE350-S3": {
      "Code": "EE350-S3",
      "Name": "Technical Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Shiladri Chakraborty"
      ],
      "Division": "S3"
  },
  "EE350-S4": {
      "Code": "EE350-S4",
      "Name": "Technical Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Arun Surendran"
      ],
      "Division": "S4"
  },
  "EE350-S5": {
      "Code": "EE350-S5",
      "Name": "Technical Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Kulkarni S V"
      ],
      "Division": "S5"
  },
  "EE462": {
      "Code": "EE462",
      "Name": "Digital Signal Processing Software and Hardware Lab",
      "Venue": "",
      "Slots": [
          "L4",
          "LX"
      ],
      "Instructors": [
          " V Raj Babu",
          " Preeti Rao"
      ],
      "Division": ""
  },
  "EE465": {
      "Code": "EE465",
      "Name": "Cryptocurrency and Blockchain Technologies",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " S. Vijayakumaran"
      ],
      "Division": ""
  },
  "EE606": {
      "Code": "EE606",
      "Name": "Fibre Optic Communications",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Shevgaonkar R.K."
      ],
      "Division": ""
  },
  "EE6104": {
      "Code": "EE6104",
      "Name": "Internet of Things",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " V Raj Babu"
      ],
      "Division": ""
  },
  "EE6106": {
      "Code": "EE6106",
      "Name": "Online Learning and Optimisation",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Manjunath D.",
          " Jayakrishnan Nair"
      ],
      "Division": ""
  },
  "EE615": {
      "Code": "EE615",
      "Name": "Control and Computational Laboratory",
      "Venue": "",
      "Slots": [
          "L4",
          "L6",
          "L1",
          "LM",
          "L3",
          "LH",
          "L2",
          "LT",
          "L5",
          "LX"
      ],
      "Instructors": [
          " Dwaipayan Mukherjee"
      ],
      "Division": ""
  },
  "EE619": {
      "Code": "EE619",
      "Name": "Radio Frequency Microelectronics Chip Design",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Rajesh H. Zele"
      ],
      "Division": ""
  },
  "EE620": {
      "Code": "EE620",
      "Name": "Physics of Transistors",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sandip Mondal",
          " Souvik Mahapatra"
      ],
      "Division": ""
  },
  "EE621": {
      "Code": "EE621",
      "Name": "Markov Chains and Queuing Systems",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " P.Chaporkar"
      ],
      "Division": ""
  },
  "EE622": {
      "Code": "EE622",
      "Name": "Optimal Control Systems",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Dwaipayan Mukherjee"
      ],
      "Division": ""
  },
  "EE636": {
      "Code": "EE636",
      "Name": "Matrix Computations",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Debraj Chakraborty"
      ],
      "Division": ""
  },
  "EE651": {
      "Code": "EE651",
      "Name": "Digital Protection of Power Systems",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Prashant Navalkar"
      ],
      "Division": ""
  },
  "EE654": {
      "Code": "EE654",
      "Name": "Power Electronics - II",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Anshuman Shukla"
      ],
      "Division": ""
  },
  "EE655": {
      "Code": "EE655",
      "Name": "Computer Aided Power System Analysis",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Anupama Kowli"
      ],
      "Division": ""
  },
  "EE656": {
      "Code": "EE656",
      "Name": "Electrical Machine Analysis and Control",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Fernandes B.G."
      ],
      "Division": ""
  },
  "EE672": {
      "Code": "EE672",
      "Name": "Microelectronics Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Swaroop Ganguly",
          " Apurba Laha"
      ],
      "Division": ""
  },
  "EE686": {
      "Code": "EE686",
      "Name": "H V D C Transmission",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Himanshu J. Bahirat"
      ],
      "Division": ""
  },
  "EE699": {
      "Code": "EE699",
      "Name": "Delta Sigma Data Converters and their Applications",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Laxmeesha Somappa"
      ],
      "Division": ""
  },
  "EE701": {
      "Code": "EE701",
      "Name": "Introduction to MEMS",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " S. Duttagupta"
      ],
      "Division": ""
  },
  "EE705": {
      "Code": "EE705",
      "Name": "V L S I Design Lab",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Patkar Sachin"
      ],
      "Division": ""
  },
  "EE706": {
      "Code": "EE706",
      "Name": "Communication Networks",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Gaurav S. Kasbekar"
      ],
      "Division": ""
  },
  "EE708": {
      "Code": "EE708",
      "Name": "Information Theory  & Coding",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " B.K.Dey"
      ],
      "Division": ""
  },
  "EE709": {
      "Code": "EE709",
      "Name": "Testing and Verification of VLSI Circuits",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Desai Madhav"
      ],
      "Division": ""
  },
  "EE712": {
      "Code": "EE712",
      "Name": "Embedded Systems Design",
      "Venue": "",
      "Slots": [
          "12A",
          "12B",
          "L3"
      ],
      "Instructors": [
          " Sharma Dinesh",
          " Laxmeesha Somappa"
      ],
      "Division": ""
  },
  "EN220": {
      "Code": "EN220",
      "Name": "Reactions for Energy",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Asish Sarangi",
          " M.Neergat"
      ],
      "Division": ""
  },
  "EE719": {
      "Code": "EE719",
      "Name": "Mixed-Signal VLSI Design",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " M.Shojaei Baghini"
      ],
      "Division": ""
  },
  "EN222": {
      "Code": "EN222",
      "Name": "Fluid Mechanics and Heat Transfer",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Manaswita Bose"
      ],
      "Division": ""
  },
  "EE722": {
      "Code": "EE722",
      "Name": "Restructured Power Systems",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Soman S.A."
      ],
      "Division": ""
  },
  "EN224": {
      "Code": "EN224",
      "Name": "Electrical Networks and Machines Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Ravi Prakash Reddy Siddavatam",
          " Venkatramanan D."
      ],
      "Division": ""
  },
  "EE724": {
      "Code": "EE724",
      "Name": "Nanoelectronics",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Udayan Ganguli"
      ],
      "Division": ""
  },
  "EN226": {
      "Code": "EN226",
      "Name": "Energy Conversion Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Sandeep Kumar"
      ],
      "Division": ""
  },
  "EE728": {
      "Code": "EE728",
      "Name": "Growth and Characterization of Nano-electronic Materials",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Apurba Laha"
      ],
      "Division": ""
  },
  "EN301": {
      "Code": "EN301",
      "Name": "Introduction to Renewable Energy Technologies",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " K.R. Balasubramaniam"
      ],
      "Division": ""
  },
  "EN302": {
      "Code": "EN302",
      "Name": "Power Generation and System Planning",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Seethamraju Srinivas"
      ],
      "Division": ""
  },
  "EE734": {
      "Code": "EE734",
      "Name": "Advanced Probability and Random Processes for Engineers",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Vivek S. Borkar"
      ],
      "Division": ""
  },
  "EN304": {
      "Code": "EN304",
      "Name": "Electrical Energy Systems",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Zakir H. Rather"
      ],
      "Division": ""
  },
  "EE739": {
      "Code": "EE739",
      "Name": "Processor Design",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Virendra Singh"
      ],
      "Division": ""
  },
  "EN308": {
      "Code": "EN308",
      "Name": "Solar Energy Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Anish Modi"
      ],
      "Division": ""
  },
  "EE747": {
      "Code": "EE747",
      "Name": "Simulation of Power System Transients",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Kulkarni A.M."
      ],
      "Division": ""
  },
  "EN310": {
      "Code": "EN310",
      "Name": "IC Engine and Combustion Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Asish Sarangi"
      ],
      "Division": ""
  },
  "EE755": {
      "Code": "EE755",
      "Name": "Quantum Transport in Nanoscale Devices",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Bhaskaran Muralidharan"
      ],
      "Division": ""
  },
  "EN312": {
      "Code": "EN312",
      "Name": "Control & Instrumentation",
      "Venue": "",
      "Slots": [
          "7A"
      ],
      "Instructors": [
          " D. Suryanarayana",
          " Venkatramanan D."
      ],
      "Division": ""
  },
  "EE761": {
      "Code": "EE761",
      "Name": "Advanced Concentration Inequalities",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Sharayu Moharir"
      ],
      "Division": ""
  },
  "EE764": {
      "Code": "EE764",
      "Name": "Wireless & Mobile Communication",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Sibi Raj B. Pillai"
      ],
      "Division": ""
  },
  "EN313": {
      "Code": "EN313",
      "Name": "Power Electronics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Ravi Prakash Reddy Siddavatam"
      ],
      "Division": ""
  },
  "EE767": {
      "Code": "EE767",
      "Name": "Photonics System Engineering",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Arun Surendran"
      ],
      "Division": ""
  },
  "EN314": {
      "Code": "EN314",
      "Name": "Electrochemistry",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Sagar Mitra"
      ],
      "Division": ""
  },
  "EE769": {
      "Code": "EE769",
      "Name": "Introduction to Machine Learning",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Amit Sethi"
      ],
      "Division": ""
  },
  "EN408": {
      "Code": "EN408",
      "Name": "Energy design project",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Rajesh Gupta"
      ],
      "Division": ""
  },
  "EE770": {
      "Code": "EE770",
      "Name": "Design and Evaluation of Photovoltaic Power Plants",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Narendra Shiradkar"
      ],
      "Division": ""
  },
  "EN410": {
      "Code": "EN410",
      "Name": "Energy Management",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Gurubalan Annadurai"
      ],
      "Division": ""
  },
  "EN412": {
      "Code": "EN412",
      "Name": "Thermodynamics and Statistical Mechanics",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Lalit Kumar"
      ],
      "Division": ""
  },
  "EE774": {
      "Code": "EE774",
      "Name": "Computational Techniques in Electrical Engineering",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Kumar Appaiah"
      ],
      "Division": ""
  },
  "EN414": {
      "Code": "EN414",
      "Name": "Methods in Analytical Techniques",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Sankara Sarma V. Tatiparti"
      ],
      "Division": ""
  },
  "EE779": {
      "Code": "EE779",
      "Name": "Advanced Topics in Signal Processing",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Satish Mulleti"
      ],
      "Division": ""
  },
  "EN418": {
      "Code": "EN418",
      "Name": "Introduction to Transport Phenomena",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Venkatasailanathan Ramadesigan"
      ],
      "Division": ""
  },
  "EE780": {
      "Code": "EE780",
      "Name": "Terahertz : Technology & Applications",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Kushal R. Tuckley"
      ],
      "Division": ""
  },
  "EN422": {
      "Code": "EN422",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Karthik Sasihithlu"
      ],
      "Division": ""
  },
  "EE790": {
      "Code": "EE790",
      "Name": "Solar Photovoltaics: Photons to Farms",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Pradeep R. Nair"
      ],
      "Division": ""
  },
  "EN594": {
      "Code": "EN594",
      "Name": "Dual Degree Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Asish Sarangi",
          " Kedare S B"
      ],
      "Division": ""
  },
  "EE791": {
      "Code": "EE791",
      "Name": "Power Electronic Converters for Renewable Energy",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Agarwal Vivek"
      ],
      "Division": ""
  },
  "EN604": {
      "Code": "EN604",
      "Name": "Fuel Cells",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Dayadeep S. Monder"
      ],
      "Division": ""
  },
  "EE793": {
      "Code": "EE793",
      "Name": "Topics in Cryptology",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Virendra Singh"
      ],
      "Division": ""
  },
  "EN607": {
      "Code": "EN607",
      "Name": "Energy Management",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Gurubalan Annadurai"
      ],
      "Division": ""
  },
  "EN610": {
      "Code": "EN610",
      "Name": "Hydrogen Energy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Pratibha Sharma"
      ],
      "Division": ""
  },
  "EE799": {
      "Code": "EE799",
      "Name": "Advanced Antennas",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " J.Mukherjee"
      ],
      "Division": ""
  },
  "EE801": {
      "Code": "EE801",
      "Name": "Introduction to Quantum Engineering",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Kasturi Saha"
      ],
      "Division": ""
  },
  "EN612": {
      "Code": "EN612",
      "Name": "Non-conventional Energy Systems Lab.",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Rajesh Gupta"
      ],
      "Division": ""
  },
  "EN613": {
      "Code": "EN613",
      "Name": "Nuclear Reactor Theory",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Suneet Singh"
      ],
      "Division": ""
  },
  "EN615": {
      "Code": "EN615",
      "Name": "Wind Energy Conversion Systems",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Kedare S B"
      ],
      "Division": ""
  },
  "EN630": {
      "Code": "EN630",
      "Name": "Utilisation of Solar Thermal Energy",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Anish Modi"
      ],
      "Division": ""
  },
  "EN640": {
      "Code": "EN640",
      "Name": "Solar Photovoltaic, Fundamentals, Technologies and Applications",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Shaibal Sarkar"
      ],
      "Division": ""
  },
  "EN642": {
      "Code": "EN642",
      "Name": "Power Generation and Systems Planning",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Seethamraju Srinivas"
      ],
      "Division": ""
  },
  "EN645": {
      "Code": "EN645",
      "Name": "Process Integration",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bandyopadhyay Santanu"
      ],
      "Division": ""
  },
  "EN659": {
      "Code": "EN659",
      "Name": "Energy Efficient Industrial Drives",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " V.S.S. Pavan Kumar Hari"
      ],
      "Division": ""
  },
  "EN661": {
      "Code": "EN661",
      "Name": "Micro and Nanoscale Energy Transport",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Karthik Sasihithlu"
      ],
      "Division": ""
  },
  "EN692": {
      "Code": "EN692",
      "Name": "M.Sc.-Ph.D. Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sagar Mitra"
      ],
      "Division": ""
  },
  "EN798": {
      "Code": "EN798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Lalit Kumar"
      ],
      "Division": ""
  },
  "EN899": {
      "Code": "EN899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " P.C.Ghosh"
      ],
      "Division": ""
  },
  "ENT101": {
      "Code": "ENT101",
      "Name": "Introduction to Innovation & Entrepreneurship",
      "Venue": "Class Room : LA 202",
      "Slots": [
          "3B",
          "5A"
      ],
      "Instructors": [
          " B.K.Chakravarthy",
          " Ramesh Mangaleswaran",
          " Anuradha Narasimhan"
      ],
      "Division": ""
  },
  "ENT602": {
      "Code": "ENT602",
      "Name": "Technology Venture Creation",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Milind Kopikare",
          " Sankalp Pratap"
      ],
      "Division": ""
  },
  "ENT602-M": {
      "Code": "ENT602-M",
      "Name": "Technology Venture Creation",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Milind Kopikare",
          " Sankalp Pratap"
      ],
      "Division": "M"
  },
  "ENT605": {
      "Code": "ENT605",
      "Name": "Business Fundamentals for Technopreneurs",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Devdip Purkayastha"
      ],
      "Division": ""
  },
  "ENT605-M": {
      "Code": "ENT605-M",
      "Name": "Business Fundamentals for Technopreneurs",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Devdip Purkayastha"
      ],
      "Division": "M"
  },
  "ENT610": {
      "Code": "ENT610",
      "Name": "Managing Innovation and IP for Entrepreneurs",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Anuradha Narasimhan",
          " Rajkumar R. Hirwani",
          " Vinay Dabholkar"
      ],
      "Division": ""
  },
  "ENT610-M": {
      "Code": "ENT610-M",
      "Name": "Managing Innovation and IP for Entrepreneurs",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Anuradha Narasimhan",
          " Rajkumar R. Hirwani",
          " Vinay Dabholkar"
      ],
      "Division": "M"
  },
  "ENT612": {
      "Code": "ENT612",
      "Name": "Field Immersion for Researchers and Entrepreneurs",
      "Venue": "",
      "Slots": [
          "X1",
          "X2",
          "X3"
      ],
      "Instructors": [
          " Sankalp Pratap"
      ],
      "Division": ""
  },
  "ENT612-M": {
      "Code": "ENT612-M",
      "Name": "Field Immersion for Researchers and Entrepreneurs",
      "Venue": "",
      "Slots": [
          "X1",
          "X2",
          "X3"
      ],
      "Instructors": [
          " Sankalp Pratap"
      ],
      "Division": "M"
  },
  "ENT613": {
      "Code": "ENT613",
      "Name": "Social Enterprises & Inclusive Business",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Devdip Purkayastha",
          " Ramesh Mangaleswaran"
      ],
      "Division": ""
  },
  "ENT613-M": {
      "Code": "ENT613-M",
      "Name": "Social Enterprises & Inclusive Business",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Devdip Purkayastha",
          " Ramesh Mangaleswaran"
      ],
      "Division": "M"
  },
  "ES200": {
      "Code": "ES200",
      "Name": "Environmental Studies: Science and Engineering",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amritanshu Shriwastav",
          " Venkata Sai Vamsi Botlaguduru",
          " Virendra Sethi"
      ],
      "Division": ""
  },
  "ES203": {
      "Code": "ES203",
      "Name": "Water and Wastewater Engineering",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Abhishek Chakraborty",
          " Anurag Garg"
      ],
      "Division": ""
  },
  "ES204": {
      "Code": "ES204",
      "Name": "Environmental Chemistry",
      "Venue": "Class Room : LT 306",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Harish C. Phuleria"
      ],
      "Division": ""
  },
  "ES204-M": {
      "Code": "ES204-M",
      "Name": "Environmental Chemistry",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Tabish Nawaz"
      ],
      "Division": "M"
  },
  "ES208": {
      "Code": "ES208",
      "Name": "Mass Transfer Process in Environmental Systems",
      "Venue": "",
      "Slots": [
          "9B",
          "2B",
          "3B"
      ],
      "Instructors": [
          " Suparna Mukherji"
      ],
      "Division": ""
  },
  "ES250": {
      "Code": "ES250",
      "Name": "Environmental Studies : Science and Engineering",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amritanshu Shriwastav",
          " Venkata Sai Vamsi Botlaguduru",
          " Virendra Sethi"
      ],
      "Division": ""
  },
  "ES252": {
      "Code": "ES252",
      "Name": "Environmental Chemistry Lab ",
      "Venue": "Chemistry Lab",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Amritanshu Shriwastav"
      ],
      "Division": ""
  },
  "ES302": {
      "Code": "ES302",
      "Name": "Environmental Biotechnology",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Indrajit Chakraborty",
          " Swatantra Pratap Singh"
      ],
      "Division": ""
  },
  "ES306-M": {
      "Code": "ES306-M",
      "Name": "Environment Systems Modeling",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " A.K.Dikshit"
      ],
      "Division": "M"
  },
  "ES308": {
      "Code": "ES308",
      "Name": "Solid and Hazardous Waste Laboratory",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Munish Kumar Chandel"
      ],
      "Division": ""
  },
  "ES312": {
      "Code": "ES312",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Manoranjan Sahu"
      ],
      "Division": ""
  },
  "ES319": {
      "Code": "ES319",
      "Name": "Computational Laboratory for Environmental Engineering",
      "Venue": "CESE Computer Lab",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Indrajit Chakraborty"
      ],
      "Division": ""
  },
  "ES404": {
      "Code": "ES404",
      "Name": "Planning and Design of Environmental Engineering Facilities",
      "Venue": "",
      "Slots": [
          "L4",
          "2A",
          "2B"
      ],
      "Instructors": [
          " Sanjeev Chaudhari"
      ],
      "Division": ""
  },
  "ES458-M": {
      "Code": "ES458-M",
      "Name": "Environmental Change and Sustainable Development",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Indrajit Chakraborty",
          " S.R.Asolekar",
          " Abhishek Chakraborty"
      ],
      "Division": "M"
  },
  "ES493": {
      "Code": "ES493",
      "Name": "MSc-PhD Project I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abhishek Chakraborty",
          " Swatantra Pratap Singh"
      ],
      "Division": ""
  },
  "ES495": {
      "Code": "ES495",
      "Name": "MSc-PhD Project III",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abhishek Chakraborty",
          " Swatantra Pratap Singh"
      ],
      "Division": ""
  },
  "ES600": {
      "Code": "ES600",
      "Name": "Environmental Science and Engineering",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Subhankar Karmakar",
          " Abhishek Chakraborty"
      ],
      "Division": ""
  },
  "ES616": {
      "Code": "ES616",
      "Name": "Energy Conversion and Environment",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Munish Kumar Chandel",
          " Virendra Sethi"
      ],
      "Division": ""
  },
  "ES624": {
      "Code": "ES624",
      "Name": "Hazardous Waste Management",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Renuka Verma",
          " Munish Kumar Chandel"
      ],
      "Division": ""
  },
  "ES642": {
      "Code": "ES642",
      "Name": "Industrial Wastewater Management and Reuse",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Renuka Verma",
          " Anurag Garg"
      ],
      "Division": ""
  },
  "ES654": {
      "Code": "ES654",
      "Name": "Groundwater Flow & Contaminant Transport through Porous Media",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Venkata Sai Vamsi Botlaguduru"
      ],
      "Division": ""
  },
  "ES658": {
      "Code": "ES658",
      "Name": "Environmental Change and Sustainable Development",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Abhishek Chakraborty",
          " Indrajit Chakraborty",
          " S.R.Asolekar"
      ],
      "Division": ""
  },
  "ES664": {
      "Code": "ES664",
      "Name": "Environmental Systems Modelling",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " A.K.Dikshit"
      ],
      "Division": ""
  },
  "ES666": {
      "Code": "ES666",
      "Name": "Biological Treatment Technologies",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Amritanshu Shriwastav",
          " Suparna Mukherji"
      ],
      "Division": ""
  },
  "ES668": {
      "Code": "ES668",
      "Name": "Environmental Computation Laboratory",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Venkata Sai Vamsi Botlaguduru"
      ],
      "Division": ""
  },
  "ES670": {
      "Code": "ES670",
      "Name": "Environmental Statistics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Harish C. Phuleria",
          " Manoranjan Sahu"
      ],
      "Division": ""
  },
  "ES672": {
      "Code": "ES672",
      "Name": "Air Pollution Control Technologies",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "7A"
      ],
      "Instructors": [
          " Manoranjan Sahu"
      ],
      "Division": ""
  },
  "ES674": {
      "Code": "ES674",
      "Name": "Aerosol Science and Engineering",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Abhishek Chakraborty",
          " Srinidhi Balasubramanian"
      ],
      "Division": ""
  },
  "ES676": {
      "Code": "ES676",
      "Name": "Membrane Processes",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Swatantra Pratap Singh"
      ],
      "Division": ""
  },
  "ES680": {
      "Code": "ES680",
      "Name": "GIS for Environmental Planning and Management",
      "Venue": "",
      "Slots": [
          "4A",
          "9A",
          "9B"
      ],
      "Instructors": [
          " A.K.Dikshit",
          " Srinidhi Balasubramanian"
      ],
      "Division": ""
  },
  "ES682": {
      "Code": "ES682",
      "Name": "Numerical Methods for Environmental Systems",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Amritanshu Shriwastav",
          " Tabish Nawaz"
      ],
      "Division": ""
  },
  "ES684": {
      "Code": "ES684",
      "Name": "Design of Water and Wastewater Systems",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Sanjeev Chaudhari"
      ],
      "Division": ""
  },
  "ES798": {
      "Code": "ES798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Manoranjan Sahu",
          " Munish Kumar Chandel"
      ],
      "Division": ""
  },
  "ESS801": {
      "Code": "ESS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Tabish Nawaz",
          " Swatantra Pratap Singh"
      ],
      "Division": ""
  },
  "ET604": {
      "Code": "ET604",
      "Name": "Research Methods in Educational Technology",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " S. R. Iyer"
      ],
      "Division": ""
  },
  "ET605": {
      "Code": "ET605",
      "Name": "Adaptive Tutoring Systems",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " S. R. Iyer",
          " Ramkumar Rajendran"
      ],
      "Division": ""
  },
  "ET611": {
      "Code": "ET611",
      "Name": "Learning Sciences",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sahana Murthy"
      ],
      "Division": ""
  },
  "ET614": {
      "Code": "ET614",
      "Name": "Instructional Systems Design",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Syaamantak Das"
      ],
      "Division": ""
  },
  "ET616": {
      "Code": "ET616",
      "Name": "Multimodal Data Analysis",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Ritayan Mitra"
      ],
      "Division": ""
  },
  "ET623": {
      "Code": "ET623",
      "Name": "Learning Analytics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ramkumar Rajendran"
      ],
      "Division": ""
  },
  "ET694": {
      "Code": "ET694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ramkumar Rajendran"
      ],
      "Division": ""
  },
  "ET798": {
      "Code": "ET798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ramkumar Rajendran"
      ],
      "Division": ""
  },
  "ETS801": {
      "Code": "ETS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ramkumar Rajendran"
      ],
      "Division": ""
  },
  "GNR402": {
      "Code": "GNR402",
      "Name": "Introduction to Geographic Information Systems",
      "Venue": "Class Room : LT 201",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Surya Durbha"
      ],
      "Division": ""
  },
  "GNR402-M": {
      "Code": "GNR402-M",
      "Name": "Introduction to Geographic Information Systems",
      "Venue": "Class Room : LT 201",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Surya Durbha"
      ],
      "Division": "M"
  },
  "GNR406-M": {
      "Code": "GNR406-M",
      "Name": "Geoinformatics Lab",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Mohan B.Krishna"
      ],
      "Division": "M"
  },
  "GNR408-M": {
      "Code": "GNR408-M",
      "Name": "Mini Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mohan B.Krishna"
      ],
      "Division": "M"
  },
  "GNR410-M": {
      "Code": "GNR410-M",
      "Name": "Digital Photogrammetry and GPS",
      "Venue": "Class Room : LC 201",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Gedam S.S."
      ],
      "Division": "M"
  },
  "GNR602": {
      "Code": "GNR602",
      "Name": "Advanced Methods in Satellite Image Processing",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Mohan B.Krishna"
      ],
      "Division": ""
  },
  "GNR618": {
      "Code": "GNR618",
      "Name": "Remote Sensing and GIS Applications to Cryosphere",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Gulab Singh"
      ],
      "Division": ""
  },
  "GNR628": {
      "Code": "GNR628",
      "Name": "Planetary Spectroscopy and Remote Sensing",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Alok Porwal"
      ],
      "Division": ""
  },
  "GNR629": {
      "Code": "GNR629",
      "Name": "Advances in Geospatial Standards, Interoperability and Knowledge Discovery",
      "Venue": "Class Room : LT 102",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Surya Durbha"
      ],
      "Division": ""
  },
  "GNR630": {
      "Code": "GNR630",
      "Name": "Introduction to Geospatial Technologies",
      "Venue": "Class Room : LT 104",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Gedam S.S.",
          " Mohan B.Krishna"
      ],
      "Division": ""
  },
  "GNR631": {
      "Code": "GNR631",
      "Name": "Rural Informatics",
      "Venue": "Class Room : LT 105",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Adinarayana J."
      ],
      "Division": ""
  },
  "GNR633": {
      "Code": "GNR633",
      "Name": "Remote Sensing and GIS Applications to Mineral and Hydrocarbon Exploration",
      "Venue": "Class Room : LT 101",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Alok Porwal"
      ],
      "Division": ""
  },
  "GNR638": {
      "Code": "GNR638",
      "Name": "Machine Learning for Remote Sensing - II",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Biplab Banerjee"
      ],
      "Division": ""
  },
  "GNR640": {
      "Code": "GNR640",
      "Name": "Geospatial Statistics",
      "Venue": "Class Room : LT 102",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Karthikeyan Lanka"
      ],
      "Division": ""
  },
  "GNR644": {
      "Code": "GNR644",
      "Name": "Remote Sensing of Surface Water Resources",
      "Venue": "Class Room : LT 103",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Karthikeyan Lanka"
      ],
      "Division": ""
  },
  "GNR647": {
      "Code": "GNR647",
      "Name": "Microwave Remote Sensing",
      "Venue": "Class Room : LT 101",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Avik Bhattacharya",
          " Rao Y.S."
      ],
      "Division": ""
  },
  "GNR649": {
      "Code": "GNR649",
      "Name": "Planetary Sciences: Earth and Beyond",
      "Venue": "Class Room : LA 002",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Deepak Singh"
      ],
      "Division": ""
  },
  "GNR651": {
      "Code": "GNR651",
      "Name": "Digital Photogrammetry and Cartography",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Gedam S.S."
      ],
      "Division": ""
  },
  "GNR694": {
      "Code": "GNR694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Deepak Singh"
      ],
      "Division": ""
  },
  "GNR697": {
      "Code": "GNR697",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Alok Porwal"
      ],
      "Division": ""
  },
  "GNR798": {
      "Code": "GNR798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Avik Bhattacharya"
      ],
      "Division": ""
  },
  "GNR899": {
      "Code": "GNR899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Avik Bhattacharya",
          " Deepak Singh",
          " Mohan B.Krishna"
      ],
      "Division": ""
  },
  "GNRS02": {
      "Code": "GNRS02",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Karthikeyan Lanka"
      ],
      "Division": ""
  },
  "GP402": {
      "Code": "GP402",
      "Name": "Gravity and Magnetic Methods",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Srinivasa Rao Gangumalla"
      ],
      "Division": ""
  },
  "GP408": {
      "Code": "GP408",
      "Name": "Gravity and Magnetic Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " M. Radhakrishna"
      ],
      "Division": ""
  },
  "GP414": {
      "Code": "GP414",
      "Name": "Electrical Methods",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Anand Singh"
      ],
      "Division": ""
  },
  "GP416": {
      "Code": "GP416",
      "Name": "Structural Geology & Stratigraphy",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Nibedita Rakshit",
          " Soumyajit Mukherjee"
      ],
      "Division": ""
  },
  "GP418": {
      "Code": "GP418",
      "Name": "Exploration Seismology I",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Bharath C. Shekar"
      ],
      "Division": ""
  },
  "GP420": {
      "Code": "GP420",
      "Name": "Structural Geology & Stratigraphy Lab",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Nibedita Rakshit",
          " Soumyajit Mukherjee"
      ],
      "Division": ""
  },
  "GP422": {
      "Code": "GP422",
      "Name": "Geological Field Work",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Bivin Geo George",
          " Prabhakar Naraga"
      ],
      "Division": ""
  },
  "GP502": {
      "Code": "GP502",
      "Name": "Well Logging",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Mohan G."
      ],
      "Division": ""
  },
  "GP506": {
      "Code": "GP506",
      "Name": "Geophysical Inverse Theory",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Satish Maurya"
      ],
      "Division": ""
  },
  "GP516": {
      "Code": "GP516",
      "Name": "Petroleum Geology and Petrophysics",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Kumar Hemant Singh"
      ],
      "Division": ""
  },
  "GP518": {
      "Code": "GP518",
      "Name": "Process Geomorphology, Remote Sensing and GIS",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " D. Ramakrishnan"
      ],
      "Division": ""
  },
  "GP520": {
      "Code": "GP520",
      "Name": "Project Work",
      "Venue": "",
      "Slots": [
          "7B",
          "8A",
          "8B"
      ],
      "Instructors": [
          " Bharath C. Shekar"
      ],
      "Division": ""
  },
  "GS318-S1": {
      "Code": "GS318-S1",
      "Name": "Applied Geology for Civil Engineers",
      "Venue": "",
      "Slots": [
          "L1",
          "XC"
      ],
      "Instructors": [
          " Sameer Ranjan",
          " Vikram Vishal"
      ],
      "Division": "S1"
  },
  "GS318-S2": {
      "Code": "GS318-S2",
      "Name": "Applied Geology for Civil Engineers",
      "Venue": "",
      "Slots": [
          "L3",
          "XC"
      ],
      "Instructors": [
          " Sameer Ranjan",
          " Vikram Vishal"
      ],
      "Division": "S2"
  },
  "GS416": {
      "Code": "GS416",
      "Name": "Petrology Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Banerjee Santanu",
          " Prabhakar Naraga",
          " Sheth C Hetu"
      ],
      "Division": ""
  },
  "GS422": {
      "Code": "GS422",
      "Name": "Geomorphology, Remote Sensing & GIS",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " D. Ramakrishnan"
      ],
      "Division": ""
  },
  "GS430": {
      "Code": "GS430",
      "Name": "Metamorphic Petrology",
      "Venue": "",
      "Slots": [
          "1C",
          "1B"
      ],
      "Instructors": [
          " Prabhakar Naraga"
      ],
      "Division": ""
  },
  "GS434": {
      "Code": "GS434",
      "Name": "Igneous Petrology and Volcanology",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Sheth C Hetu"
      ],
      "Division": ""
  },
  "GS436": {
      "Code": "GS436",
      "Name": "Sedimentlogy ",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Sudipta Dasgupta",
          " Banerjee Santanu"
      ],
      "Division": ""
  },
  "GS438": {
      "Code": "GS438",
      "Name": "Economic and Mining Geology",
      "Venue": "",
      "Slots": [
          "5B",
          "2C",
          "5A"
      ],
      "Instructors": [
          " Sakthi Saravanan Chinnasamy"
      ],
      "Division": ""
  },
  "GS440": {
      "Code": "GS440",
      "Name": "Geomorphology, Remote Sensing and GIS lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " D. Ramakrishnan"
      ],
      "Division": ""
  },
  "GS450": {
      "Code": "GS450",
      "Name": "Geological field work",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Sudipta Dasgupta",
          " Malay Mukul"
      ],
      "Division": ""
  },
  "GS530": {
      "Code": "GS530",
      "Name": "Micropalaeontology",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Jahnavi Punekar"
      ],
      "Division": ""
  },
  "GS534": {
      "Code": "GS534",
      "Name": "Tectonics and Crustal Evolution",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Malay Mukul"
      ],
      "Division": ""
  },
  "GS536": {
      "Code": "GS536",
      "Name": "Nuclear Geology and Geochemical Prospecting",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Sameer Ranjan",
          " Mathew George"
      ],
      "Division": ""
  },
  "GS538": {
      "Code": "GS538",
      "Name": "Petroleum and Coal Geology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Suryendu Dutta"
      ],
      "Division": ""
  },
  "GS540": {
      "Code": "GS540",
      "Name": "Climate Geology",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Bivin Geo George"
      ],
      "Division": ""
  },
  "GS542": {
      "Code": "GS542",
      "Name": "Isotope Geology",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bivin Geo George",
          " Sameer Ranjan"
      ],
      "Division": ""
  },
  "GS545": {
      "Code": "GS545",
      "Name": "Elements of Vertebrate Palaeontology",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Nibedita Rakshit"
      ],
      "Division": ""
  },
  "GS552": {
      "Code": "GS552",
      "Name": "Geological Project",
      "Venue": "",
      "Slots": [
          "14B",
          "14A",
          "7A"
      ],
      "Instructors": [
          " Prabhakar Naraga"
      ],
      "Division": ""
  },
  "GS662": {
      "Code": "GS662",
      "Name": "Petroliferous basins of India",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Nibedita Rakshit",
          " Sudipta Dasgupta"
      ],
      "Division": ""
  },
  "GS668": {
      "Code": "GS668",
      "Name": "Nonlinear and Adaptive Data Analysis Techniques",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " E. Chandrasekhar"
      ],
      "Division": ""
  },
  "GS672": {
      "Code": "GS672",
      "Name": "Reservoir Sedimentology",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Sudipta Dasgupta",
          " Banerjee Santanu"
      ],
      "Division": ""
  },
  "GS676": {
      "Code": "GS676",
      "Name": "Well Logging",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Mohan G."
      ],
      "Division": ""
  },
  "GS682": {
      "Code": "GS682",
      "Name": "Industrial Mineralogy",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Mathew George"
      ],
      "Division": ""
  },
  "GS706": {
      "Code": "GS706",
      "Name": "Petrophysics ",
      "Venue": "",
      "Slots": [
          "7B",
          "7A",
          "X1"
      ],
      "Instructors": [
          " Kumar Hemant Singh"
      ],
      "Division": ""
  },
  "GS707": {
      "Code": "GS707",
      "Name": "Ore Fluid Geochemistry",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Patel S.C."
      ],
      "Division": ""
  },
  "GS710": {
      "Code": "GS710",
      "Name": "Geochemical Analysis and Instrumentation",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Patel S.C."
      ],
      "Division": ""
  },
  "GS814": {
      "Code": "GS814",
      "Name": "Topics in Isotope Geology",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bivin Geo George",
          " Sameer Ranjan"
      ],
      "Division": ""
  },
  "GS816": {
      "Code": "GS816",
      "Name": "Spectroscopic Methods in Earth Sciences",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Mathew George"
      ],
      "Division": ""
  },
  "GSS802": {
      "Code": "GSS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jahnavi Punekar"
      ],
      "Division": ""
  },
  "HS110-S1": {
      "Code": "HS110-S1",
      "Name": "Introduction to Psychology",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "3B",
          "5A"
      ],
      "Instructors": [
          " Pooja Purang"
      ],
      "Division": "S1"
  },
  "HS110-S2": {
      "Code": "HS110-S2",
      "Name": "Introduction to Psychology",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "3C",
          "X3"
      ],
      "Instructors": [
          " Rashmi Gupta"
      ],
      "Division": "S2"
  },
  "HS112-S1": {
      "Code": "HS112-S1",
      "Name": "Introduction to the Arts",
      "Venue": "Class Room : LC 302",
      "Slots": [
          "3B",
          "5A"
      ],
      "Instructors": [
          " A.P. Rajaram  "
      ],
      "Division": "S1"
  },
  "HS112-S2": {
      "Code": "HS112-S2",
      "Name": "Introduction to the Arts",
      "Venue": "Class Room : LC 302",
      "Slots": [
          "3C",
          "X3"
      ],
      "Instructors": [
          " Sharmistha Saha"
      ],
      "Division": "S2"
  },
  "HS200": {
      "Code": "HS200",
      "Name": "Environmental Studies",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Rajkishore Nath",
          " Suryakant Waghmore"
      ],
      "Division": ""
  },
  "HS250": {
      "Code": "HS250",
      "Name": "Environmental Studies",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Haripriya Gundimeda"
      ],
      "Division": ""
  },
  "HS401": {
      "Code": "HS401",
      "Name": "Introduction to Paninian Grammar",
      "Venue": "Class Room : LT 102",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Kulkarni A Malhar"
      ],
      "Division": ""
  },
  "HS4110": {
      "Code": "HS4110",
      "Name": "Experimental Archaeology: An Introduction",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Smriti Haricharan"
      ],
      "Division": ""
  },
  "HS431": {
      "Code": "HS431",
      "Name": "Reading Fiction",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Suddhaseel Sen",
          " Shastri Sudha"
      ],
      "Division": ""
  },
  "HS465": {
      "Code": "HS465",
      "Name": "Moral and Political Philosophy",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Siby K.George"
      ],
      "Division": ""
  },
  "HS474-M": {
      "Code": "HS474-M",
      "Name": "Postmodernism and Philosophy",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pravesh Jung Golay"
      ],
      "Division": "M"
  },
  "HS502": {
      "Code": "HS502",
      "Name": "Madhyamika Philosophy in the Buddhist Tradition",
      "Venue": "Class Room : LT 202",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " C.D. Sebastian"
      ],
      "Division": ""
  },
  "HS504": {
      "Code": "HS504",
      "Name": "Western Philosophy in the Time of Crisis",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Arun A. Iyer"
      ],
      "Division": ""
  },
  "HS506": {
      "Code": "HS506",
      "Name": "Writing and Research in Philosophy",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Mrinal Kaul"
      ],
      "Division": ""
  },
  "HS551": {
      "Code": "HS551",
      "Name": "Introduction to Feminist Philosophy",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Amrita Banerjee"
      ],
      "Division": ""
  },
  "HS554": {
      "Code": "HS554",
      "Name": "Language, Mind and the World",
      "Venue": "Class Room : LT 105",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " R.K. Panda"
      ],
      "Division": ""
  },
  "HS598": {
      "Code": "HS598",
      "Name": "Project Stage II",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Pravesh Jung Golay"
      ],
      "Division": ""
  },
  "HS618": {
      "Code": "HS618",
      "Name": "Introduction to Indian Astronomy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " K. Ramasubramanian"
      ],
      "Division": ""
  },
  "HS621": {
      "Code": "HS621",
      "Name": "Contemporary Indian Philosophy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ratikanta Panda"
      ],
      "Division": ""
  },
  "HS624": {
      "Code": "HS624",
      "Name": "Contemporary Issues in Philosophy of Mind",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Rajkishore Nath"
      ],
      "Division": ""
  },
  "HS629": {
      "Code": "HS629",
      "Name": "Ecology and Society",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sarmistha Pattanaik"
      ],
      "Division": ""
  },
  "HS634": {
      "Code": "HS634",
      "Name": "Theories of Verbal Congnition (Shaabdabodha)",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kulkarni A Malhar"
      ],
      "Division": ""
  },
  "HS640": {
      "Code": "HS640",
      "Name": "Civil Society: Its Foundations and Future",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Suryakant Waghmore"
      ],
      "Division": ""
  },
  "HS643": {
      "Code": "HS643",
      "Name": "Sociology of Infrastructure",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Raile Rocky Ziipao"
      ],
      "Division": ""
  },
  "HS654": {
      "Code": "HS654",
      "Name": "Performance Historiography and Documentation",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Sharmistha Saha",
          " A.P. Rajaram"
      ],
      "Division": ""
  },
  "HS660": {
      "Code": "HS660",
      "Name": "Author, Authorship and Authority",
      "Venue": "",
      "Slots": [
          "7B",
          "7A"
      ],
      "Instructors": [
          " Suddhaseel Sen",
          " Shastri Sudha"
      ],
      "Division": ""
  },
  "HS661": {
      "Code": "HS661",
      "Name": "Social Theory - II",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Anush Kapadia"
      ],
      "Division": ""
  },
  "HS662": {
      "Code": "HS662",
      "Name": "Indian Society",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Ramesh Bairy"
      ],
      "Division": ""
  },
  "HS666": {
      "Code": "HS666",
      "Name": "Quantitative Methods in Social Sciences",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Mahendra Dindayal Shahare"
      ],
      "Division": ""
  },
  "HS710": {
      "Code": "HS710",
      "Name": "Consumer Psychology",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " A. Khan"
      ],
      "Division": ""
  },
  "HS804": {
      "Code": "HS804",
      "Name": "Advanced Theory of Society",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Robinson Rowena",
          " Ahonaa Roy"
      ],
      "Division": ""
  },
  "HS805": {
      "Code": "HS805",
      "Name": "Theory of Knowledge",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vikram Singh Sirola"
      ],
      "Division": ""
  },
  "HS811": {
      "Code": "HS811",
      "Name": "Literary Theory",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sharmila"
      ],
      "Division": ""
  },
  "HS818": {
      "Code": "HS818",
      "Name": "Sociology of Social Stratification in India",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Ilito H. Achumi"
      ],
      "Division": ""
  },
  "HS828": {
      "Code": "HS828",
      "Name": "Phillosophical Points of View & Major Thinkers",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Pravesh Jung Golay"
      ],
      "Division": ""
  },
  "HS840": {
      "Code": "HS840",
      "Name": "Paninian Grammar",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Kulkarni A Malhar"
      ],
      "Division": ""
  },
  "HS845": {
      "Code": "HS845",
      "Name": "Indian Logic",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " K. Ramasubramanian"
      ],
      "Division": ""
  },
  "HS852": {
      "Code": "HS852",
      "Name": "Topics in Syntax and Semantics",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Sarma Vaijayanthi"
      ],
      "Division": ""
  },
  "HS856": {
      "Code": "HS856",
      "Name": "Critical Social Philosophy",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Siby K.George"
      ],
      "Division": ""
  },
  "HS861": {
      "Code": "HS861",
      "Name": "Advanced Course on Historiography",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Naina Manjrekar"
      ],
      "Division": ""
  },
  "HS864": {
      "Code": "HS864",
      "Name": "Advanced Topics in Science and Technology Studies",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Mahendra Dindayal Shahare"
      ],
      "Division": ""
  },
  "HS899": {
      "Code": "HS899",
      "Name": "Communication Skills",
      "Venue": "Class Room : LT 205",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " K. Ramasubramanian",
          " Mrinmoyi Kulkarni",
          " Naina Manjrekar",
          " Pooja Purang",
          " Ramesh Bairy",
          " Smriti Haricharan",
          " Suryakant Waghmore",
          " Vibhushan Subba",
          " Amrita Banerjee"
      ],
      "Division": ""
  },
  "HSS802": {
      "Code": "HSS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Rajkishore Nath"
      ],
      "Division": ""
  },
  "DE102": {
      "Code": "DE102",
      "Name": "Art and Design Fundamentals 3D",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Parag Vyas",
          " G.V.Sreekumar"
      ],
      "Division": ""
  },
  "DE106": {
      "Code": "DE106",
      "Name": "Typography Fundamentals and Exploratory Printing",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " G.V.Sreekumar"
      ],
      "Division": ""
  },
  "DE107": {
      "Code": "DE107",
      "Name": "A Study of the Power of Words",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sampurna Chattarji"
      ],
      "Division": ""
  },
  "DE108": {
      "Code": "DE108",
      "Name": "Exploration in Drawing, Tonalities",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amitesh Sant Shrivastava"
      ],
      "Division": ""
  },
  "DE109-S1": {
      "Code": "DE109-S1",
      "Name": "Introduction to Design",
      "Venue": "Class Room : LH 301",
      "Slots": [
          "3B",
          "5A"
      ],
      "Instructors": [
          " Swati Agarwal"
      ],
      "Division": "S1"
  },
  "DE109-S2": {
      "Code": "DE109-S2",
      "Name": "Introduction to Design",
      "Venue": "Class Room : LH 301",
      "Slots": [
          "3C",
          "X3"
      ],
      "Instructors": [
          " Bapat V.P."
      ],
      "Division": "S2"
  },
  "DE110": {
      "Code": "DE110",
      "Name": "Form Exploration in Pottery",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mohanty Raja"
      ],
      "Division": ""
  },
  "DE112": {
      "Code": "DE112",
      "Name": "Communication Through Illustrations",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Arun Mascarenhas"
      ],
      "Division": ""
  },
  "DE114": {
      "Code": "DE114",
      "Name": "Basics of Film Editing",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bharat Chhitubhai Parmar"
      ],
      "Division": ""
  },
  "DE116": {
      "Code": "DE116",
      "Name": "Exploration in Drawing, Tonalities and Textures",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amitesh Sant Shrivastava"
      ],
      "Division": ""
  },
  "DE122": {
      "Code": "DE122",
      "Name": "Design Studio II - Problem Analysis",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dhimant Vyas",
          " Avinash Shende"
      ],
      "Division": ""
  },
  "DE129": {
      "Code": "DE129",
      "Name": "Introduction to Weaving",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Latha Tummuru"
      ],
      "Division": ""
  },
  "DE134": {
      "Code": "DE134",
      "Name": "Knowledge Organisation and Communication",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prasad Bokil",
          " Poovaiah Ravi"
      ],
      "Division": ""
  },
  "DE136": {
      "Code": "DE136",
      "Name": "Design Studio Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dhimant Vyas",
          " Avinash Shende"
      ],
      "Division": ""
  },
  "DE202": {
      "Code": "DE202",
      "Name": "2D Visual Studies II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prasad Bokil",
          " Girish V. Dalvi",
          " G.V.Sreekumar"
      ],
      "Division": ""
  },
  "DE204": {
      "Code": "DE204",
      "Name": "3D Form Studies II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Korjan"
      ],
      "Division": ""
  },
  "DE206": {
      "Code": "DE206",
      "Name": "Communication Theories, Visual Perception and Semiotics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DE208": {
      "Code": "DE208",
      "Name": "Design, Storytelling and Narratives",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Aditi Chitre"
      ],
      "Division": ""
  },
  "DE210": {
      "Code": "DE210",
      "Name": "Understanding Human Anatomy",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Amitesh Sant Shrivastava"
      ],
      "Division": ""
  },
  "DE212": {
      "Code": "DE212",
      "Name": "Ceramic Glazes and Colour Development",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mohanty Raja"
      ],
      "Division": ""
  },
  "DE214": {
      "Code": "DE214",
      "Name": "Writing by Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sampurna Chattarji"
      ],
      "Division": ""
  },
  "DE216": {
      "Code": "DE216",
      "Name": "Classics of  Popular Indian Cinema",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Mazhar Kamran"
      ],
      "Division": ""
  },
  "DE216-M": {
      "Code": "DE216-M",
      "Name": "Classics of  Popular Indian Cinema",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Mazhar Kamran"
      ],
      "Division": "M"
  },
  "DE222": {
      "Code": "DE222",
      "Name": "Design Studio IV - Prototyping",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " B.K.Chakravarthy",
          " Shilpa Ranade"
      ],
      "Division": ""
  },
  "DE232": {
      "Code": "DE232",
      "Name": "Design, Media and Technology",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Rasagy Sharma",
          " Vidhya Appu"
      ],
      "Division": ""
  },
  "DE250-S1": {
      "Code": "DE250-S1",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S1"
  },
  "DE250-S2": {
      "Code": "DE250-S2",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "12A",
          "13A"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S2"
  },
  "DE250-S3": {
      "Code": "DE250-S3",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S3"
  },
  "DE250-S4": {
      "Code": "DE250-S4",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "14A",
          "15A"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S4"
  },
  "DE250-S5": {
      "Code": "DE250-S5",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S5"
  },
  "DE250-S6": {
      "Code": "DE250-S6",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "12B",
          "13B"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S6"
  },
  "DE250-S7": {
      "Code": "DE250-S7",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S7"
  },
  "DE250-S8": {
      "Code": "DE250-S8",
      "Name": "Design Thinking for Innovation",
      "Venue": "",
      "Slots": [
          "14B",
          "15B"
      ],
      "Instructors": [
          " Nishant Sharma"
      ],
      "Division": "S8"
  },
  "DE308": {
      "Code": "DE308",
      "Name": "Product Design II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Purba Joshi"
      ],
      "Division": ""
  },
  "DE312": {
      "Code": "DE312",
      "Name": "Transportation Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Unni Mohan Mohanan",
          " Sugandh Malhotra"
      ],
      "Division": ""
  },
  "DE313": {
      "Code": "DE313",
      "Name": "3D Modeling and Prototyping",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Shilpa Ranade"
      ],
      "Division": ""
  },
  "DE314": {
      "Code": "DE314",
      "Name": "Game Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prasad Bokil"
      ],
      "Division": ""
  },
  "DE318": {
      "Code": "DE318",
      "Name": "Interaction Techniques",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Joshi Anirudha"
      ],
      "Division": ""
  },
  "DE321": {
      "Code": "DE321",
      "Name": "Service Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pramod Khambete"
      ],
      "Division": ""
  },
  "DE322": {
      "Code": "DE322",
      "Name": "Materials and Processes",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Purba Joshi"
      ],
      "Division": ""
  },
  "DE323": {
      "Code": "DE323",
      "Name": "Stopmotion Animation",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Swati Agarwal"
      ],
      "Division": ""
  },
  "DE324": {
      "Code": "DE324",
      "Name": "Digital Media Technologies",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai"
      ],
      "Division": ""
  },
  "IE504": {
      "Code": "IE504",
      "Name": "Service and Infrastructure Systems",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Rangaraj Narayan"
      ],
      "Division": ""
  },
  "DE332": {
      "Code": "DE332",
      "Name": "Design Management, Planning and Professional Practice",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Peer Mohideen Sathikh",
          " Abhishek Verma"
      ],
      "Division": ""
  },
  "IE504-M": {
      "Code": "IE504-M",
      "Name": "Service and Infrastructure Systems",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Rangaraj Narayan"
      ],
      "Division": "M"
  },
  "IE506": {
      "Code": "IE506",
      "Name": "Machine Learning: Principles and Techniques",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " P. Balamurugan"
      ],
      "Division": ""
  },
  "DE602": {
      "Code": "DE602",
      "Name": "Product Interface Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " P Kumaresan"
      ],
      "Division": ""
  },
  "IE607": {
      "Code": "IE607",
      "Name": "Polyhedra and Combinatorial Optimization",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " V. Narayanan"
      ],
      "Division": ""
  },
  "DE604": {
      "Code": "DE604",
      "Name": "Introduction to Product Ergonomics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Wricha Mishra",
          " Swati Pal"
      ],
      "Division": ""
  },
  "IE612": {
      "Code": "IE612",
      "Name": "Introduction to Financial Engineering",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " K.S.Mallikarjuna Rao"
      ],
      "Division": ""
  },
  "DE606": {
      "Code": "DE606",
      "Name": "Studies in Form II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " P Kumaresan"
      ],
      "Division": ""
  },
  "IE614": {
      "Code": "IE614",
      "Name": "Linear Systems",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Veeraruna Kavitha"
      ],
      "Division": ""
  },
  "DE608": {
      "Code": "DE608",
      "Name": "Product Design -2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " R. Sandesh"
      ],
      "Division": ""
  },
  "IE616": {
      "Code": "IE616",
      "Name": "Decision Analysis and Game Theory",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Veeraruna Kavitha",
          " Urban Larsson"
      ],
      "Division": ""
  },
  "DE612": {
      "Code": "DE612",
      "Name": "Design Issues",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Poovaiah Ravi"
      ],
      "Division": ""
  },
  "IE616-M": {
      "Code": "IE616-M",
      "Name": "Decision Analysis and Game Theory",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Veeraruna Kavitha",
          " Urban Larsson"
      ],
      "Division": "M"
  },
  "IE620": {
      "Code": "IE620",
      "Name": "Reinforcement Learning Algorithms",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " N. Hemachandra"
      ],
      "Division": ""
  },
  "DE614": {
      "Code": "DE614",
      "Name": "Design Workshop",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " G.V.Sreekumar"
      ],
      "Division": ""
  },
  "IE620-M": {
      "Code": "IE620-M",
      "Name": "Reinforcement Learning Algorithms",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " N. Hemachandra"
      ],
      "Division": "M"
  },
  "DE616": {
      "Code": "DE616",
      "Name": "Introduction to User Studies",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Girish V. Dalvi"
      ],
      "Division": ""
  },
  "IE622": {
      "Code": "IE622",
      "Name": "Probability and Stochastic Processes II",
      "Venue": "Class : IEOR011",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " N. Hemachandra"
      ],
      "Division": ""
  },
  "DE618": {
      "Code": "DE618",
      "Name": "Semantics and Communication Theory",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "IE622-M": {
      "Code": "IE622-M",
      "Name": "Probability and Stochastic Processes II",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " N. Hemachandra"
      ],
      "Division": "M"
  },
  "IE630": {
      "Code": "IE630",
      "Name": "Simulation Modeling and Analysis",
      "Venue": "Class Room A1 - A2",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " J. Venkateswaran"
      ],
      "Division": ""
  },
  "DE624": {
      "Code": "DE624",
      "Name": "Introduction to Film Making",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sudesh Balan"
      ],
      "Division": ""
  },
  "IE630-M": {
      "Code": "IE630-M",
      "Name": "Simulation Modeling and Analysis",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " J. Venkateswaran"
      ],
      "Division": "M"
  },
  "DE626": {
      "Code": "DE626",
      "Name": "Human Factors in Interaction Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Wricha Mishra",
          " Swati Pal"
      ],
      "Division": ""
  },
  "IE684": {
      "Code": "IE684",
      "Name": "IEOR Lab",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Manjesh K. Hanawal"
      ],
      "Division": ""
  },
  "DE628": {
      "Code": "DE628",
      "Name": "Interaction Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sudhir Ram Bhatia",
          " Jayesh S. Pillai"
      ],
      "Division": ""
  },
  "IE686": {
      "Code": "IE686",
      "Name": "MSc.Phd. Research Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Manjesh K. Hanawal"
      ],
      "Division": ""
  },
  "IE688": {
      "Code": "IE688",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " P. Balamurugan"
      ],
      "Division": ""
  },
  "DE632": {
      "Code": "DE632",
      "Name": "Acting and Staging",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sumant Rao"
      ],
      "Division": ""
  },
  "IE694": {
      "Code": "IE694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " P. Balamurugan"
      ],
      "Division": ""
  },
  "DE634": {
      "Code": "DE634",
      "Name": "Digital Animation 2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sumant Rao"
      ],
      "Division": ""
  },
  "IE709": {
      "Code": "IE709",
      "Name": "IEOR for Health Care",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Ashutosh Mahajan"
      ],
      "Division": ""
  },
  "DE636": {
      "Code": "DE636",
      "Name": "Animation Theory-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abhishek Verma"
      ],
      "Division": ""
  },
  "IE709-M": {
      "Code": "IE709-M",
      "Name": "IEOR for Health Care",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Ashutosh Mahajan"
      ],
      "Division": "M"
  },
  "DE638": {
      "Code": "DE638",
      "Name": "Animation Principles-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prosenjit Ganguly",
          " Swati Agarwal"
      ],
      "Division": ""
  },
  "IE710": {
      "Code": "IE710",
      "Name": "OR Applications in Infrastructural and Service Sectors",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Rangaraj Narayan"
      ],
      "Division": ""
  },
  "IE798": {
      "Code": "IE798",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " K.S.Mallikarjuna Rao"
      ],
      "Division": ""
  },
  "DE640": {
      "Code": "DE640",
      "Name": "Animation Design-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Abhishek Verma",
          " Swati Agarwal"
      ],
      "Division": ""
  },
  "IE899": {
      "Code": "IE899",
      "Name": "Communication Skills",
      "Venue": "Class : IEOR011",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " P. Balamurugan"
      ],
      "Division": ""
  },
  "DE642": {
      "Code": "DE642",
      "Name": "Sketching and Anatomy-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Somnath Pal",
          " Shyam Subhashrao Wanare"
      ],
      "Division": ""
  },
  "IES601": {
      "Code": "IES601",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " V. Narayanan"
      ],
      "Division": ""
  },
  "IES802": {
      "Code": "IES802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ashutosh Mahajan"
      ],
      "Division": ""
  },
  "DE644": {
      "Code": "DE644",
      "Name": "Exposure to Grid System in Visual Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DE646": {
      "Code": "DE646",
      "Name": "CAID Modeling for Automotive Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sugandh Malhotra"
      ],
      "Division": ""
  },
  "DE648": {
      "Code": "DE648",
      "Name": "Historyof Transportation and Automobile Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Unni Mohan Mohanan",
          " Sugandh Malhotra"
      ],
      "Division": ""
  },
  "DE650": {
      "Code": "DE650",
      "Name": "Studies in 3D Form",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Unni Mohan Mohanan"
      ],
      "Division": ""
  },
  "DE652": {
      "Code": "DE652",
      "Name": "Mobility Design-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sridhar Mahadevan",
          " Sugandh Malhotra"
      ],
      "Division": ""
  },
  "DE654": {
      "Code": "DE654",
      "Name": "Sketching-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " P Kumaresan"
      ],
      "Division": ""
  },
  "DE656": {
      "Code": "DE656",
      "Name": "Model Making-2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Unni Mohan Mohanan"
      ],
      "Division": ""
  },
  "DE660": {
      "Code": "DE660",
      "Name": "Graphic Narratives",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Aditi Chitre"
      ],
      "Division": ""
  },
  "DE666": {
      "Code": "DE666",
      "Name": "Craft Creativity and Post Modernism",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " R. Sandesh"
      ],
      "Division": ""
  },
  "DE676": {
      "Code": "DE676",
      "Name": "Rendering for Mobility Design ",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sugandh Malhotra"
      ],
      "Division": ""
  },
  "DE680": {
      "Code": "DE680",
      "Name": "Product Detailing",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Avinash Shende"
      ],
      "Division": ""
  },
  "DE683": {
      "Code": "DE683",
      "Name": "Sustainable Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sugandh Malhotra",
          " Lalit Kumar Das"
      ],
      "Division": ""
  },
  "DE686": {
      "Code": "DE686",
      "Name": "Handmade Character Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Arun Mascarenhas"
      ],
      "Division": ""
  },
  "DE687": {
      "Code": "DE687",
      "Name": "Design Exploration Seminar I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai",
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DE712": {
      "Code": "DE712",
      "Name": "Immersive Media Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai"
      ],
      "Division": ""
  },
  "DE717": {
      "Code": "DE717",
      "Name": "Service Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pramod Khambete"
      ],
      "Division": ""
  },
  "DE725": {
      "Code": "DE725",
      "Name": "Designing Games for Children",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prasad Bokil"
      ],
      "Division": ""
  },
  "DE803": {
      "Code": "DE803",
      "Name": "Quantitative Design Research Methods",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Joshi Anirudha",
          " Girish V. Dalvi"
      ],
      "Division": ""
  },
  "DEP302": {
      "Code": "DEP302",
      "Name": "System Design Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Poovaiah Ravi",
          " Dinesh Korjan"
      ],
      "Division": ""
  },
  "DEP403": {
      "Code": "DEP403",
      "Name": "Design Research Seminar I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai",
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DEP406": {
      "Code": "DEP406",
      "Name": "BDes Design Project - 2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bharat Chhitubhai Parmar",
          " Avinash Shende"
      ],
      "Division": ""
  },
  "DEP408": {
      "Code": "DEP408",
      "Name": "Design Research Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai",
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DEP410": {
      "Code": "DEP410",
      "Name": "B. Des. Design Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Avinash Shende",
          " Bharat Chhitubhai Parmar"
      ],
      "Division": ""
  },
  "DEP502": {
      "Code": "DEP502",
      "Name": "Design Research Seminar II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai",
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "DEP504": {
      "Code": "DEP504",
      "Name": "Design Research Project-Part II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " B.K.Chakravarthy",
          " Girish V. Dalvi",
          " Sugandh Malhotra",
          " Sumant Rao",
          " G.V.Sreekumar"
      ],
      "Division": ""
  },
  "DEP602": {
      "Code": "DEP602",
      "Name": "Communication Design Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Mazhar Kamran"
      ],
      "Division": ""
  },
  "DEP703": {
      "Code": "DEP703",
      "Name": "M.Des. Project- 3",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Girish V. Dalvi",
          " G.V.Sreekumar",
          " Sugandh Malhotra",
          " Sumant Rao",
          " B.K.Chakravarthy"
      ],
      "Division": ""
  },
  "DEP706": {
      "Code": "DEP706",
      "Name": "Design Research Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jayesh S. Pillai",
          " Mandar S.Rane"
      ],
      "Division": ""
  },
  "MA110-D1": {
      "Code": "MA110-D1",
      "Name": "Linear Algebra and Differential Equations",
      "Venue": "Class Room : LA 201",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Rekha Santhanam",
          " Santanu Dey",
          " Ananthnarayan Hariharan",
          " K. Sureshkumar"
      ],
      "Division": "D1"
  },
  "MA110-D2": {
      "Code": "MA110-D2",
      "Name": "Linear Algebra and Differential Equations",
      "Venue": "Class Room : LT 004",
      "Slots": [
          "X1"
      ],
      "Instructors": [
          "  ",
          " Rekha  SanthanamA ",
          "  ",
          " Santanu Mukti DeyI ",
          "  ",
          " Ananthnarayan  HariharanI ",
          "  ",
          " K.  Sureshkumar"
      ],
      "Division": "D2"
  },
  "MA110-D3": {
      "Code": "MA110-D3",
      "Name": "Linear Algebra and Differential Equations",
      "Venue": "Class Room : LA 202",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Rekha Santhanam",
          " Santanu Dey",
          " Ananthnarayan Hariharan",
          " K. Sureshkumar"
      ],
      "Division": "D3"
  },
  "MA110-D4": {
      "Code": "MA110-D4",
      "Name": "Linear Algebra and Differential Equations",
      "Venue": "Class Room : LT 202",
      "Slots": [
          "X3"
      ],
      "Instructors": [
          "  ",
          " Rekha  SanthanamA ",
          "  ",
          " Santanu Mukti DeyI ",
          "  ",
          " Ananthnarayan  HariharanI ",
          "  ",
          " K.  Sureshkumar"
      ],
      "Division": "D4"
  },
  "MA214": {
      "Code": "MA214",
      "Name": "Introduction to Numerical Analysis",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "XC"
      ],
      "Instructors": [
          " ",
          " Sudarshan Rajendra Gurjar"
      ],
      "Division": ""
  },
  "MA406": {
      "Code": "MA406",
      "Name": "General Topology",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Chandan Biswas"
      ],
      "Division": ""
  },
  "MA408": {
      "Code": "MA408",
      "Name": "Measure Theory",
      "Venue": "",
      "Slots": [
          "XC"
      ],
      "Instructors": [
          " Mallesham Kummari"
      ],
      "Division": ""
  },
  "MA410": {
      "Code": "MA410",
      "Name": "Multivariable Calculus",
      "Venue": "Class Room - 216",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Preeti Raman"
      ],
      "Division": ""
  },
  "MA412": {
      "Code": "MA412",
      "Name": "Complex Analysis",
      "Venue": "Class Room - 114",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Garge Shripad M."
      ],
      "Division": ""
  },
  "MA412-M": {
      "Code": "MA412-M",
      "Name": "Complex Analysis",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Sandip Singh"
      ],
      "Division": "M"
  },
  "MA414": {
      "Code": "MA414",
      "Name": "Algebra I",
      "Venue": "Class Room - 216",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Saurav Bhaumik"
      ],
      "Division": ""
  },
  "MA504": {
      "Code": "MA504",
      "Name": "Operators on Hilbert Spaces",
      "Venue": "Class Room - 105",
      "Slots": [
          "11A"
      ],
      "Instructors": [
          " Bata K. Das"
      ],
      "Division": ""
  },
  "MA510": {
      "Code": "MA510",
      "Name": "Introduction to Algebraic Geometry",
      "Venue": "Class Room - 113",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Manoj Kumar keshari"
      ],
      "Division": ""
  },
  "MA5104": {
      "Code": "MA5104",
      "Name": "Hyperbolic Conservation Laws",
      "Venue": "Class Room - 113",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Sivaji Ganesh S."
      ],
      "Division": ""
  },
  "MA5106": {
      "Code": "MA5106",
      "Name": "Introduction to Fourier Analysis",
      "Venue": "Class Room - 113",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Saikat Mazumdar"
      ],
      "Division": ""
  },
  "MA5106-M": {
      "Code": "MA5106-M",
      "Name": "Introduction to Fourier Analysis",
      "Venue": "Class Room - 113",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Saikat Mazumdar"
      ],
      "Division": "M"
  },
  "MA5108": {
      "Code": "MA5108",
      "Name": "Lie Groups & Lie Algebras",
      "Venue": "Class Room - 105",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " G. K. Srinivasan"
      ],
      "Division": ""
  },
  "MA5110": {
      "Code": "MA5110",
      "Name": "Non-commutative Algebra",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Garge Shripad M."
      ],
      "Division": ""
  },
  "MA5116": {
      "Code": "MA5116",
      "Name": "Species and Operads",
      "Venue": "Class Room - 114",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Swapneel A. Mahajan"
      ],
      "Division": ""
  },
  "MA526": {
      "Code": "MA526",
      "Name": "Commutative Algebra",
      "Venue": "Class Room - 105",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Verma J.K."
      ],
      "Division": ""
  },
  "MA534": {
      "Code": "MA534",
      "Name": "Modern Theory of PDE",
      "Venue": "Class Room - 105",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Debanjana Mitra"
      ],
      "Division": ""
  },
  "MA562": {
      "Code": "MA562",
      "Name": "Mathematical Theory of Finite Elements",
      "Venue": "Class Room - 114",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Nataraj Neela"
      ],
      "Division": ""
  },
  "MA812": {
      "Code": "MA812",
      "Name": "Algebra II",
      "Venue": "Class Room - 105",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Ronnie M. Sebastain"
      ],
      "Division": ""
  },
  "MA814": {
      "Code": "MA814",
      "Name": "Complex Analysis",
      "Venue": "Class Room - 113",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Prachi Mahajan"
      ],
      "Division": ""
  },
  "MA816": {
      "Code": "MA816",
      "Name": "Algebraic Topology",
      "Venue": "Class Room - 105",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Dipendra Prasad"
      ],
      "Division": ""
  },
  "MA818": {
      "Code": "MA818",
      "Name": "Partial Differential Equations II",
      "Venue": "Class Room - 105",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Mayukh Mukherjee"
      ],
      "Division": ""
  },
  "MA824": {
      "Code": "MA824",
      "Name": "Functional Analysis",
      "Venue": "Class Room - 105",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Sanjoy Pusti"
      ],
      "Division": ""
  },
  "MA842": {
      "Code": "MA842",
      "Name": "Topics in Algebra II",
      "Venue": "Class Room - 113",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Ananthnarayan Hariharan"
      ],
      "Division": ""
  },
  "MA846": {
      "Code": "MA846",
      "Name": "Topics in Combinatories II",
      "Venue": "Class Room - 105",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Srinivasan M.K."
      ],
      "Division": ""
  },
  "MA852": {
      "Code": "MA852",
      "Name": "Topics in Number Theory II",
      "Venue": "Class Room - 114",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ravi Raghunathan"
      ],
      "Division": ""
  },
  "MA862": {
      "Code": "MA862",
      "Name": "Combinatorics II",
      "Venue": "Class Room - 113",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Niranjan Balachandran"
      ],
      "Division": ""
  },
  "MA867": {
      "Code": "MA867",
      "Name": "Statistical Modelling- I",
      "Venue": "Class Room - 113",
      "Slots": [
          "6A"
      ],
      "Instructors": [
          " Radhendushka Srivastava"
      ],
      "Division": ""
  },
  "SI404": {
      "Code": "SI404",
      "Name": "Applied Stochastic Processes",
      "Venue": "Class Room - 114",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Koushik Saha"
      ],
      "Division": ""
  },
  "SI416": {
      "Code": "SI416",
      "Name": "Optimization",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Harsha Hutridurga Ramaiah"
      ],
      "Division": ""
  },
  "SI422": {
      "Code": "SI422",
      "Name": "Regression Analysis",
      "Venue": "Class Room - 216",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " S. Mukhopadhyay"
      ],
      "Division": ""
  },
  "SI422-M": {
      "Code": "SI422-M",
      "Name": "Regression Analysis",
      "Venue": "Class Room - 216",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " S. Mukhopadhyay"
      ],
      "Division": "M"
  },
  "SI424": {
      "Code": "SI424",
      "Name": "Statistical Inference I",
      "Venue": "Class Room - 114",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vellaisamy P."
      ],
      "Division": ""
  },
  "SI426": {
      "Code": "SI426",
      "Name": "Algorithms",
      "Venue": "",
      "Slots": [
          "X3"
      ],
      "Instructors": [
          " Madhusudan Manjunath"
      ],
      "Division": ""
  },
  "SI509": {
      "Code": "SI509",
      "Name": "Time Series Analysis",
      "Venue": "",
      "Slots": [
          "7B"
      ],
      "Instructors": [
          " "
      ],
      "Division": ""
  },
  "SI526": {
      "Code": "SI526",
      "Name": "Experimental Designs",
      "Venue": "",
      "Slots": [
          "2A"
      ],
      "Instructors": [
          " Ashish Das"
      ],
      "Division": ""
  },
  "SI527": {
      "Code": "SI527",
      "Name": "Introduction to Derivative Pricing",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " S.Baskar"
      ],
      "Division": ""
  },
  "SI527-M": {
      "Code": "SI527-M",
      "Name": "Introduction to Derivative Pricing",
      "Venue": "Class Room - 114",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " S.Baskar"
      ],
      "Division": "M"
  },
  "SI534": {
      "Code": "SI534",
      "Name": "Nonparametric Statistics",
      "Venue": "Class Room - 114",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Ayan Bhattacharya"
      ],
      "Division": ""
  },
  "SI539": {
      "Code": "SI539",
      "Name": "Random Graphs",
      "Venue": "Class Room - 114",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Debraj Das",
          " Koushik Saha"
      ],
      "Division": ""
  },
  "SI541": {
      "Code": "SI541",
      "Name": "Statistical Epidemiology ",
      "Venue": "Class Room - 216",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " S. Mukhopadhyay",
          " Sabnis S.V."
      ],
      "Division": ""
  },
  "SI546": {
      "Code": "SI546",
      "Name": "Statistical Inference II",
      "Venue": "Class Room - 216",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Debraj Das"
      ],
      "Division": ""
  },
  "IWE701": {
      "Code": "IWE701",
      "Name": "Strategic Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Snehal Awate"
      ],
      "Division": ""
  },
  "IWE702": {
      "Code": "IWE702",
      "Name": "Organizational Behavior and Design",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE703": {
      "Code": "IWE703",
      "Name": "Data Modeling and Decisions",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Usha Ananthakumar"
      ],
      "Division": ""
  },
  "IWE704": {
      "Code": "IWE704",
      "Name": "Introduction to Financial Accounting",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE705": {
      "Code": "IWE705",
      "Name": "Marketing Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Sharma"
      ],
      "Division": ""
  },
  "IWE706": {
      "Code": "IWE706",
      "Name": "Managerial Economics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE710": {
      "Code": "IWE710",
      "Name": "Corporate Finance",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE711": {
      "Code": "IWE711",
      "Name": "Leadership",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE712": {
      "Code": "IWE712",
      "Name": "Growth, Valuations, and Sustainability",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE714": {
      "Code": "IWE714",
      "Name": "Global Supply Chain Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " T.T. Niranjan"
      ],
      "Division": ""
  },
  "IWE715": {
      "Code": "IWE715",
      "Name": "Competitive Strategy & Industry Analysis",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE719": {
      "Code": "IWE719",
      "Name": "Strategic Management of Innovation",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE720": {
      "Code": "IWE720",
      "Name": "Business Start-up Consulting Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE721": {
      "Code": "IWE721",
      "Name": "Washington D C Residency",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE722": {
      "Code": "IWE722",
      "Name": "Data-Driven Decision Making: Analysis to Action",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "IWE723": {
      "Code": "IWE723",
      "Name": "Customer Analytics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "MG405-M": {
      "Code": "MG405-M",
      "Name": "Project Management",
      "Venue": "Class Room : LT 305",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Gajendra Adil"
      ],
      "Division": "M"
  },
  "MG406-M": {
      "Code": "MG406-M",
      "Name": "Operations Management",
      "Venue": "Class Room : LT 306",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Rahul Patil"
      ],
      "Division": "M"
  },
  "ME104-S1": {
      "Code": "ME104-S1",
      "Name": "Engineering Mechanics",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Nitesh Yelve"
      ],
      "Division": "S1"
  },
  "MG802": {
      "Code": "MG802",
      "Name": "Marketing Theory and Contemporary Issues",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Sharma"
      ],
      "Division": ""
  },
  "ME104-S2": {
      "Code": "ME104-S2",
      "Name": "Engineering Mechanics",
      "Venue": "Class Room : LC 302",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Parag Tandaiya"
      ],
      "Division": "S2"
  },
  "MGS802": {
      "Code": "MGS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sarthak Gaurav"
      ],
      "Division": ""
  },
  "ME213": {
      "Code": "ME213",
      "Name": "Manufacturing Practice Lab",
      "Venue": "",
      "Slots": [
          "L4",
          "L1",
          "L2"
      ],
      "Instructors": [
          " Amber Shrivastava"
      ],
      "Division": ""
  },
  "MGT804": {
      "Code": "MGT804",
      "Name": "Qualitative Research Methodologies",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " T.T. Niranjan"
      ],
      "Division": ""
  },
  "ME219-S1": {
      "Code": "ME219-S1",
      "Name": "Fluid Mechanics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Neeraj Kumbhakarna"
      ],
      "Division": "S1"
  },
  "SOM101-S1": {
      "Code": "SOM101-S1",
      "Name": "Introduction to Management",
      "Venue": "Class Room : LA 201",
      "Slots": [
          "3B",
          "5A"
      ],
      "Instructors": [
          " Mayank Pareek"
      ],
      "Division": "S1"
  },
  "ME219-S2": {
      "Code": "ME219-S2",
      "Name": "Fluid Mechanics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Avishek Ranjan"
      ],
      "Division": "S2"
  },
  "SOM101-S2": {
      "Code": "SOM101-S2",
      "Name": "Introduction to Management",
      "Venue": "Class Room : LA 201",
      "Slots": [
          "3C",
          "X3"
      ],
      "Instructors": [
          " Ashish Pandey"
      ],
      "Division": "S2"
  },
  "ME219-S3": {
      "Code": "ME219-S3",
      "Name": "Fluid Mechanics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Shivasubramanian Gopalakrishnan"
      ],
      "Division": "S3"
  },
  "SOM612": {
      "Code": "SOM612",
      "Name": "Business Research Methods",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ashish Singh"
      ],
      "Division": ""
  },
  "ME224": {
      "Code": "ME224",
      "Name": "Fluid Mechanics Lab",
      "Venue": "",
      "Slots": [
          "L4",
          "L3",
          "L2"
      ],
      "Instructors": [
          " Avishek Ranjan",
          " Shivasubramanian Gopalakrishnan",
          " Neeraj Kumbhakarna"
      ],
      "Division": ""
  },
  "SOM613": {
      "Code": "SOM613",
      "Name": "Corporate Finance - II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Rohan Chinchwadkar"
      ],
      "Division": ""
  },
  "SOM614": {
      "Code": "SOM614",
      "Name": "Organization Behavior & Human Resources I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ashish Pandey",
          " Bhargava S"
      ],
      "Division": ""
  },
  "ME226": {
      "Code": "ME226",
      "Name": "Mechanical Measurements",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Amit Agrawal"
      ],
      "Division": ""
  },
  "SOM615": {
      "Code": "SOM615",
      "Name": "Operations Management II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " T.T. Niranjan"
      ],
      "Division": ""
  },
  "ME228": {
      "Code": "ME228",
      "Name": "Applied Data Science and Machine Learning",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Alankar Alankar"
      ],
      "Division": ""
  },
  "SOM616": {
      "Code": "SOM616",
      "Name": "Technology Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Karuna Jain"
      ],
      "Division": ""
  },
  "ME230-M": {
      "Code": "ME230-M",
      "Name": "Mechanical Processing of Materials",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " De Amitava"
      ],
      "Division": "M"
  },
  "SOM617": {
      "Code": "SOM617",
      "Name": "Corporate Strategy",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Snehal Awate"
      ],
      "Division": ""
  },
  "ME230-S1": {
      "Code": "ME230-S1",
      "Name": "Mechanical Processing of Materials",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Soham Mujumdar"
      ],
      "Division": "S1"
  },
  "SOM618": {
      "Code": "SOM618",
      "Name": "Organization Behavior & Human Resources II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Ashish Pandey"
      ],
      "Division": ""
  },
  "ME230-S2": {
      "Code": "ME230-S2",
      "Name": "Mechanical Processing of Materials",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Amber Shrivastava"
      ],
      "Division": "S2"
  },
  "SOM619": {
      "Code": "SOM619",
      "Name": "Corporate Governance and Business Ethics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Varadraj B. Bapat"
      ],
      "Division": ""
  },
  "ME230-S3": {
      "Code": "ME230-S3",
      "Name": "Mechanical Processing of Materials",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " De Amitava"
      ],
      "Division": "S3"
  },
  "SOM621": {
      "Code": "SOM621",
      "Name": "Legal Aspects of Business",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Varadraj B. Bapat"
      ],
      "Division": ""
  },
  "SOM623": {
      "Code": "SOM623",
      "Name": "Final Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "ME306-S1": {
      "Code": "ME306-S1",
      "Name": "Applied Thermodynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " M.D.Atrey"
      ],
      "Division": "S1"
  },
  "SOM633": {
      "Code": "SOM633",
      "Name": "Quality Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Indrajit Mukherjee"
      ],
      "Division": ""
  },
  "ME306-S2": {
      "Code": "ME306-S2",
      "Name": "Applied Thermodynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Upendra Bhandarkar"
      ],
      "Division": "S2"
  },
  "SOM643": {
      "Code": "SOM643",
      "Name": "Introduction to ERP",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Gajendra Adil",
          " Atul Kanyalkar"
      ],
      "Division": ""
  },
  "ME306-S3": {
      "Code": "ME306-S3",
      "Name": "Applied Thermodynamics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Shankar Krishnan"
      ],
      "Division": "S3"
  },
  "SOM649": {
      "Code": "SOM649",
      "Name": "Corporate Competitiveness",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Kiran Kumar Momaya"
      ],
      "Division": ""
  },
  "ME310-S1": {
      "Code": "ME310-S1",
      "Name": "Microprocessors and Automatic Control Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Gandhi Prasanna S."
      ],
      "Division": "S1"
  },
  "SOM652": {
      "Code": "SOM652",
      "Name": "Indian Financial and Business Model",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Varadraj B. Bapat"
      ],
      "Division": ""
  },
  "ME310-S2": {
      "Code": "ME310-S2",
      "Name": "Microprocessors and Automatic Control Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Abhishek Gupta",
          " Vivek Sangwan"
      ],
      "Division": "S2"
  },
  "SOM660": {
      "Code": "SOM660",
      "Name": "Financial Modelling",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Piyush Pandey"
      ],
      "Division": ""
  },
  "ME310-S3": {
      "Code": "ME310-S3",
      "Name": "Microprocessors and Automatic Control Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Gandhi Prasanna S."
      ],
      "Division": "S3"
  },
  "SOM664": {
      "Code": "SOM664",
      "Name": "Business to Business Marketing",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Sharma"
      ],
      "Division": ""
  },
  "ME310-S4": {
      "Code": "ME310-S4",
      "Name": "Microprocessors and Automatic Control Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Abhishek Gupta",
          " Vivek Sangwan"
      ],
      "Division": "S4"
  },
  "SOM665": {
      "Code": "SOM665",
      "Name": "Consumer Behaviour",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Sharma"
      ],
      "Division": ""
  },
  "SOM679": {
      "Code": "SOM679",
      "Name": "Competitiveness for Sustainable Enterprise",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kiran Kumar Momaya"
      ],
      "Division": ""
  },
  "ME312": {
      "Code": "ME312",
      "Name": "Operations Modeling and Analysis",
      "Venue": "",
      "Slots": [
          "7B",
          "7A"
      ],
      "Instructors": [
          " Avinash Bhardwaj"
      ],
      "Division": ""
  },
  "SOM680": {
      "Code": "SOM680",
      "Name": "Managing Intellectual Property",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "ME315": {
      "Code": "ME315",
      "Name": "Supervised Learning Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Nitesh Yelve"
      ],
      "Division": ""
  },
  "SOM686": {
      "Code": "SOM686",
      "Name": "Strategic Transformation",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Snehal Awate"
      ],
      "Division": ""
  },
  "ME316-M": {
      "Code": "ME316-M",
      "Name": "Kinematics and Dynamics of Machines",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Abhishek Gupta"
      ],
      "Division": "M"
  },
  "SOM691": {
      "Code": "SOM691",
      "Name": "Intelligent Systems",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME316-S1": {
      "Code": "ME316-S1",
      "Name": "Kinematics and Dynamics of Machines",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Tanmay K. Bhandakkar"
      ],
      "Division": "S1"
  },
  "SOM693": {
      "Code": "SOM693",
      "Name": "Information Technology Infrastructure Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME316-S2": {
      "Code": "ME316-S2",
      "Name": "Kinematics and Dynamics of Machines",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Abhishek Gupta"
      ],
      "Division": "S2"
  },
  "SOM700": {
      "Code": "SOM700",
      "Name": "Managing Digital Products",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME316-S3": {
      "Code": "ME316-S3",
      "Name": "Kinematics and Dynamics of Machines",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Amit Singh"
      ],
      "Division": "S3"
  },
  "SOM701": {
      "Code": "SOM701",
      "Name": "Online Marketing",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dinesh Sharma"
      ],
      "Division": ""
  },
  "ME316-S4": {
      "Code": "ME316-S4",
      "Name": "Kinematics and Dynamics of Machines",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Seshu P."
      ],
      "Division": "S4"
  },
  "SOM707": {
      "Code": "SOM707",
      "Name": "Behavioral Finance",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.N.Rao"
      ],
      "Division": ""
  },
  "ME370-S1": {
      "Code": "ME370-S1",
      "Name": "Kinematics and Dynamics of Machines Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Guha Anirban",
          " Salil Kulkarni"
      ],
      "Division": "S1"
  },
  "SOM711": {
      "Code": "SOM711",
      "Name": "Behavioural Economics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sarthak Gaurav"
      ],
      "Division": ""
  },
  "SOM712": {
      "Code": "SOM712",
      "Name": "Management of Digital Transformation in Enterprise",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME370-S2": {
      "Code": "ME370-S2",
      "Name": "Kinematics and Dynamics of Machines Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Guha Anirban"
      ],
      "Division": "S2"
  },
  "SOM717": {
      "Code": "SOM717",
      "Name": "Sustainable Supply Chain Management",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Gajendra Adil"
      ],
      "Division": ""
  },
  "ME372": {
      "Code": "ME372",
      "Name": "Heat Transfer and Metrology Lab",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Arunkumar Sridharan",
          " Gurminder Singh",
          " Rakesh G. Mote",
          " Sandip Kumar Saha",
          " Vedula R.P.",
          " Bhalchandra Puranik"
      ],
      "Division": ""
  },
  "SOM720": {
      "Code": "SOM720",
      "Name": "Sustainable Finance",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Trupti Mishra"
      ],
      "Division": ""
  },
  "ME412": {
      "Code": "ME412",
      "Name": "CFD and HT Lab",
      "Venue": "",
      "Slots": [
          "L2",
          "LX"
      ],
      "Instructors": [
          " Janani S. Murallidharan"
      ],
      "Division": ""
  },
  "SOM722": {
      "Code": "SOM722",
      "Name": "Managing Industry 4.0",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME415": {
      "Code": "ME415",
      "Name": "Computational Fluid Dynamics and Heat Transfer",
      "Venue": "Class : CL 106 ESE",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Sharma Atul"
      ],
      "Division": ""
  },
  "SOM723": {
      "Code": "SOM723",
      "Name": "Quantitative and Algorithmic Trading",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Piyush Pandey"
      ],
      "Division": ""
  },
  "ME420": {
      "Code": "ME420",
      "Name": "Cryogenic Engineering I",
      "Venue": "Class : ME-F24",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " M.D.Atrey"
      ],
      "Division": ""
  },
  "SOM724": {
      "Code": "SOM724",
      "Name": "Econometrics of Financial Markets",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Piyush Pandey"
      ],
      "Division": ""
  },
  "ME496": {
      "Code": "ME496",
      "Name": "BTP II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Nitesh Yelve"
      ],
      "Division": ""
  },
  "SOM725": {
      "Code": "SOM725",
      "Name": "Customer Analytics",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sonar M Rajendra"
      ],
      "Division": ""
  },
  "ME594": {
      "Code": "ME594",
      "Name": "Dual Degree Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Nitesh Yelve"
      ],
      "Division": ""
  },
  "SOM728": {
      "Code": "SOM728",
      "Name": "Business Analytics and Simulation",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pankaj Dutta"
      ],
      "Division": ""
  },
  "ME6103": {
      "Code": "ME6103",
      "Name": "Ultrafast Lasers: Fundamentals and Applications",
      "Venue": "",
      "Slots": [
          "L1",
          "8B"
      ],
      "Instructors": [
          " Deepak Marla",
          " Dipanshu Bansal"
      ],
      "Division": ""
  },
  "SOM744": {
      "Code": "SOM744",
      "Name": "Multivariate Data Analysis",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Usha Ananthakumar"
      ],
      "Division": ""
  },
  "SOM793": {
      "Code": "SOM793",
      "Name": "Compulsory IDDDP Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Indrajit Mukherjee",
          " Piyush Pandey"
      ],
      "Division": ""
  },
  "ME6106": {
      "Code": "ME6106",
      "Name": "Computational Structural Dynamics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Salil Kulkarni"
      ],
      "Division": ""
  },
  "SOM794": {
      "Code": "SOM794",
      "Name": "Optional IDDDP Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Indrajit Mukherjee",
          " Piyush Pandey"
      ],
      "Division": ""
  },
  "SOM802": {
      "Code": "SOM802",
      "Name": "Theory of Finance",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " S.V.D.Nageswara Rao"
      ],
      "Division": ""
  },
  "ME6114": {
      "Code": "ME6114",
      "Name": "Joint Biomechanics",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Darshan Sunil Shah"
      ],
      "Division": ""
  },
  "ME6118": {
      "Code": "ME6118",
      "Name": "Spray Theory and Applications",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Abhijeet Kumar"
      ],
      "Division": ""
  },
  "ME613": {
      "Code": "ME613",
      "Name": "Finite Element and Boundary Element Methods",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " R. Ganesh"
      ],
      "Division": ""
  },
  "ME616": {
      "Code": "ME616",
      "Name": "Fracture Mechanics",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Krishna Jonnalagadda"
      ],
      "Division": ""
  },
  "ME639": {
      "Code": "ME639",
      "Name": "Linear Systems Theory",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Vivek Sangwan"
      ],
      "Division": ""
  },
  "ME643": {
      "Code": "ME643",
      "Name": "Materials Processing and Simulation Laboratory",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Date P.P.",
          " Pradeep Dixit",
          " Shyamprasad Karagadde",
          " Sushil Mishra",
          " Asim Tewari"
      ],
      "Division": ""
  },
  "ME651": {
      "Code": "ME651",
      "Name": "Fluid Dynamics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Bhalchandra Puranik"
      ],
      "Division": ""
  },
  "ME657": {
      "Code": "ME657",
      "Name": "Thermal and Fluids Engg Laboratory",
      "Venue": "",
      "Slots": [
          "7B",
          "L1",
          "7A"
      ],
      "Instructors": [
          " Janani S. Murallidharan",
          " Rane Milind",
          " Shankar Krishnan",
          " Sreedhara Sheshadri",
          " Amit Agrawal",
          " Rane Milind"
      ],
      "Division": ""
  },
  "ME663": {
      "Code": "ME663",
      "Name": "Advanced Heat Transfer",
      "Venue": "Class Room : LT 206",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Arunkumar Sridharan"
      ],
      "Division": ""
  },
  "ME673": {
      "Code": "ME673",
      "Name": "Mathematical Methods in Engineering",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Vedula R.P."
      ],
      "Division": ""
  },
  "ME677": {
      "Code": "ME677",
      "Name": "Laser Material Processing",
      "Venue": "Class Room : LT 201",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Deepak Marla"
      ],
      "Division": ""
  },
  "ME678": {
      "Code": "ME678",
      "Name": "Fundamentals of Gas Dynamics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Abhilash Chandy"
      ],
      "Division": ""
  },
  "ME683": {
      "Code": "ME683",
      "Name": "Cryogenic Engineering - I",
      "Venue": "Class : ME-F24",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " M.D.Atrey"
      ],
      "Division": ""
  },
  "ME684": {
      "Code": "ME684",
      "Name": "Airconditioning System Design",
      "Venue": "Class Room : LT 203",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Rane Milind"
      ],
      "Division": ""
  },
  "ME691": {
      "Code": "ME691",
      "Name": "R & D Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Nitesh Yelve"
      ],
      "Division": ""
  },
  "ME712": {
      "Code": "ME712",
      "Name": "Computer Numerical Control and Programming.",
      "Venue": "Class Room : LC 201",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Pande S.S."
      ],
      "Division": ""
  },
  "ME730": {
      "Code": "ME730",
      "Name": "Ultra-Precision Machining",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Rakesh G. Mote"
      ],
      "Division": ""
  },
  "ME748": {
      "Code": "ME748",
      "Name": "Computer Aided Simulation of Machines",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Guha Anirban"
      ],
      "Division": ""
  },
  "ME750": {
      "Code": "ME750",
      "Name": "Sheet Metal Engineering",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Sushil Mishra"
      ],
      "Division": ""
  },
  "ME754": {
      "Code": "ME754",
      "Name": "Textile Machines Design & Automation",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Guha Anirban"
      ],
      "Division": ""
  },
  "ME761": {
      "Code": "ME761",
      "Name": "Advanced Stereology and Microstructural Analysis",
      "Venue": "Class : CL 105 ESE",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Asim Tewari"
      ],
      "Division": ""
  },
  "ME762": {
      "Code": "ME762",
      "Name": "Advanced Engineering Dynamics",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " V. Kartik"
      ],
      "Division": ""
  },
  "ME768": {
      "Code": "ME768",
      "Name": "Introduction to Microsystems Packaging",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Pradeep Dixit"
      ],
      "Division": ""
  },
  "ME769": {
      "Code": "ME769",
      "Name": "Combustion in Automobile and Gas Turbine Engines",
      "Venue": "Class : ME-F24",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sreedhara Sheshadri"
      ],
      "Division": ""
  },
  "ME772": {
      "Code": "ME772",
      "Name": "Processing of Aerospace Materials-I",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Amol A. Gokhale"
      ],
      "Division": ""
  },
  "ME779": {
      "Code": "ME779",
      "Name": "Control Systems",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Manik Dhanesh"
      ],
      "Division": ""
  },
  "ME790": {
      "Code": "ME790",
      "Name": "Materials modelling using atomistic first-principles calculations",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Ankit Jain"
      ],
      "Division": ""
  },
  "ME793": {
      "Code": "ME793",
      "Name": " Multiscale Materials Informatics, Discovery and Design",
      "Venue": "Class : CL 102 ESE",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Alankar Alankar"
      ],
      "Division": ""
  },
  "ME794": {
      "Code": "ME794",
      "Name": "Statistical Design of Experiments",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Soham Mujumdar"
      ],
      "Division": ""
  },
  "ME800": {
      "Code": "ME800",
      "Name": "Additive Manufacturing: Design, Processes and Inspection",
      "Venue": "Class Room : LT 305",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Gurminder Singh"
      ],
      "Division": ""
  },
  "ME802": {
      "Code": "ME802",
      "Name": "Manufacturing Technologies for Electric Mobility",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Date P.P."
      ],
      "Division": ""
  },
  "ME899": {
      "Code": "ME899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Sandip Kumar Saha"
      ],
      "Division": ""
  },
  "MS101-P13": {
      "Code": "MS101-P13",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P13"
  },
  "MS101-P14": {
      "Code": "MS101-P14",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P14"
  },
  "MS101-P15": {
      "Code": "MS101-P15",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P15"
  },
  "MS101-P16": {
      "Code": "MS101-P16",
      "Name": "Makerspace",
      "Venue": "Class Room : LA 202",
      "Slots": [
          "3A"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P16"
  },
  "MS101-P19": {
      "Code": "MS101-P19",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "2A",
          "3A",
          "4A",
          "1C",
          "2C",
          "4C"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P19"
  },
  "MS101-P20": {
      "Code": "MS101-P20",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "2A",
          "3A",
          "4A",
          "1C",
          "2C",
          "4C"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P20"
  },
  "MS101-P21": {
      "Code": "MS101-P21",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "5B",
          "6B",
          "1B",
          "2B",
          "4B"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P21"
  },
  "MS101-P22": {
      "Code": "MS101-P22",
      "Name": "Makerspace",
      "Venue": "",
      "Slots": [
          "5B",
          "6B",
          "1B",
          "2B",
          "4B"
      ],
      "Instructors": [
          " Chatterjee Kishore",
          " Debraj Chakraborty",
          " D.N. Pawaskar",
          " Karunakaran K.P.",
          " Kushal R. Tuckley",
          " Narendra Shiradkar",
          " Pandey P.C.",
          " Rajneesh Bhardwaj",
          " Sharma Dinesh",
          " J.John",
          " Prabhu S V"
      ],
      "Division": "P22"
  },
  "MMM694": {
      "Code": "MMM694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pradeep Dixit"
      ],
      "Division": ""
  },
  "MM104": {
      "Code": "MM104",
      "Name": "Materials Tetrahedron",
      "Venue": "Class Room : LH 302",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Parag Bhargava"
      ],
      "Division": ""
  },
  "MM105": {
      "Code": "MM105",
      "Name": "It\u2019s a materials world!",
      "Venue": "Class Room : LC 201",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Parag Bhargava"
      ],
      "Division": ""
  },
  "MM152": {
      "Code": "MM152",
      "Name": "Materials & Technology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Parag Bhargava"
      ],
      "Division": ""
  },
  "MM206": {
      "Code": "MM206",
      "Name": "Experimental Techniques in Materials Science",
      "Venue": "Class Room : LT 303",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Prasanna T.R.S.",
          " Sudhanshu Mallick"
      ],
      "Division": ""
  },
  "MM210": {
      "Code": "MM210",
      "Name": "Numerical Methods for Materials Engineers",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Anirban Patra"
      ],
      "Division": ""
  },
  "MM218": {
      "Code": "MM218",
      "Name": "Process Kinetics and Transport",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Deepoo Kumar",
          " N.N.Viswanathan"
      ],
      "Division": ""
  },
  "MM220": {
      "Code": "MM220",
      "Name": "Computation Lab",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Prita Pant",
          " Amrita Bhattacharya"
      ],
      "Division": ""
  },
  "MM222": {
      "Code": "MM222",
      "Name": "Electrochemistry of Materials and its Applications",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Smrutiranjan Parida",
          " Amartya Mukhopadhyay"
      ],
      "Division": ""
  },
  "MM224": {
      "Code": "MM224",
      "Name": "Electrochemistry and Corrosion Lab",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Aswani Yella",
          " Raja V. S."
      ],
      "Division": ""
  },
  "MM226": {
      "Code": "MM226",
      "Name": "Supervised Learning Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Tanushree H. Choudhury"
      ],
      "Division": ""
  },
  "MM312-S1": {
      "Code": "MM312-S1",
      "Name": "Heat Treatment Laboratory",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Mural S Prasanna Kumar",
          " Prabhu N."
      ],
      "Division": "S1"
  },
  "MM312-S2": {
      "Code": "MM312-S2",
      "Name": "Heat Treatment Laboratory",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Mural S Prasanna Kumar",
          " Prabhu N."
      ],
      "Division": "S2"
  },
  "MM318-M": {
      "Code": "MM318-M",
      "Name": "Electronic Properties of Materials",
      "Venue": "Class : CL 111 ESE",
      "Slots": [
          "7B",
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Tanushree H. Choudhury",
          " Amrita Bhattacharya"
      ],
      "Division": "M"
  },
  "MM318-S1": {
      "Code": "MM318-S1",
      "Name": "Electronic Properties of Materials",
      "Venue": "Class : CL 111 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Amrita Bhattacharya"
      ],
      "Division": "S1"
  },
  "MM318-S2": {
      "Code": "MM318-S2",
      "Name": "Electronic Properties of Materials",
      "Venue": "Class : CL 105 ESE",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Tanushree H. Choudhury"
      ],
      "Division": "S2"
  },
  "MM320": {
      "Code": "MM320",
      "Name": "Principles of Process Metallurgy",
      "Venue": "Class Room : LH 101",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Somnath Basu",
          " Khosla N.K."
      ],
      "Division": ""
  },
  "MM322-S1": {
      "Code": "MM322-S1",
      "Name": "Casting and Joining Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Manish M. Pande",
          " K. Bhanumurthy"
      ],
      "Division": "S1"
  },
  "MM322-S2": {
      "Code": "MM322-S2",
      "Name": "Casting and Joining Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Manish M. Pande",
          " K. Bhanumurthy"
      ],
      "Division": "S2"
  },
  "MM323-S1": {
      "Code": "MM323-S1",
      "Name": "Manufacturing Processes Laboratory",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Abhijeet Sangle",
          " Mithun Chowdhury"
      ],
      "Division": "S1"
  },
  "MM323-S2": {
      "Code": "MM323-S2",
      "Name": "Manufacturing Processes Laboratory",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Abhijeet Sangle",
          " Mithun Chowdhury"
      ],
      "Division": "S2"
  },
  "MM357": {
      "Code": "MM357",
      "Name": "Ceramics and Powder Metallurgy",
      "Venue": "Class Room : LH 102",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Ashutosh Gandhi"
      ],
      "Division": ""
  },
  "MM359": {
      "Code": "MM359",
      "Name": "Metal Casting and Joining",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " K. Bhanumurthy",
          " Durga A."
      ],
      "Division": ""
  },
  "MM396": {
      "Code": "MM396",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Aswani Yella",
          " Mural S Prasanna Kumar"
      ],
      "Division": ""
  },
  "MM406": {
      "Code": "MM406",
      "Name": "Semiconductor Devices and Processing",
      "Venue": "Class Room : LT 302",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Triratna Muneshwar"
      ],
      "Division": ""
  },
  "MM408": {
      "Code": "MM408",
      "Name": "Mechanical Working of Metals ",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " MJNV Prasad",
          " Samajdar I."
      ],
      "Division": ""
  },
  "MM426-S1": {
      "Code": "MM426-S1",
      "Name": "Equipment and Processes Design Lab.",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Dinkar S. Patil",
          " K. Bhanumurthy",
          " V. K. Srivastava"
      ],
      "Division": "S1"
  },
  "MM426-S2": {
      "Code": "MM426-S2",
      "Name": "Equipment and Processes Design Lab.",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Dinkar S. Patil",
          " K. Bhanumurthy",
          " V. K. Srivastava"
      ],
      "Division": "S2"
  },
  "MM448-S1": {
      "Code": "MM448-S1",
      "Name": "Thin Films Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Triratna Muneshwar",
          " Dinkar S. Patil"
      ],
      "Division": "S1"
  },
  "MM448-S2": {
      "Code": "MM448-S2",
      "Name": "Thin Films Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Triratna Muneshwar",
          " Dinkar S. Patil"
      ],
      "Division": "S2"
  },
  "MM454": {
      "Code": "MM454",
      "Name": "Corrosion & Protection of Materials",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Vijayshankar Dandapani"
      ],
      "Division": ""
  },
  "MM462-S1": {
      "Code": "MM462-S1",
      "Name": "Corrosion & Protection Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Smrutiranjan Parida",
          " Vijayshankar Dandapani"
      ],
      "Division": "S1"
  },
  "MM462-S2": {
      "Code": "MM462-S2",
      "Name": "Corrosion & Protection Lab",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Smrutiranjan Parida",
          " Vijayshankar Dandapani"
      ],
      "Division": "S2"
  },
  "MM492": {
      "Code": "MM492",
      "Name": "B.Tech Project I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Avradeep Pal"
      ],
      "Division": ""
  },
  "MM494": {
      "Code": "MM494",
      "Name": "B.Tech Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Avradeep Pal"
      ],
      "Division": ""
  },
  "PH110-D1": {
      "Code": "PH110-D1",
      "Name": "Introduction to Classical and Quantum Physics",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Sankar S.Uma"
      ],
      "Division": "D1"
  },
  "MM6004": {
      "Code": "MM6004",
      "Name": "Machine Learning for Materials Engineering",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " M.P. Gururajan"
      ],
      "Division": ""
  },
  "MM612": {
      "Code": "MM612",
      "Name": "Computational Laboratory ",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Sanjay Chandra",
          " Ajay Singh Panwar"
      ],
      "Division": ""
  },
  "MM622": {
      "Code": "MM622",
      "Name": "Advanced Concepts in Iron Making",
      "Venue": "Class Room : LT 104",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Somnath Basu",
          " N.N.Viswanathan"
      ],
      "Division": ""
  },
  "PH110-D2": {
      "Code": "PH110-D2",
      "Name": "Introduction to Classical and Quantum Physics",
      "Venue": "Class Room : LT 105",
      "Slots": [
          "X2"
      ],
      "Instructors": [
          " ",
          " Kantimay Siba Pada Das Gupta Das Gupta"
      ],
      "Division": "D2"
  },
  "MM624": {
      "Code": "MM624",
      "Name": "Advanced Concepts in Steel Making",
      "Venue": "Class Room : LT 204",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Manish M. Pande",
          " Deepoo Kumar"
      ],
      "Division": ""
  },
  "MM626": {
      "Code": "MM626",
      "Name": "Thermomechanical Processing and Forming of Steel",
      "Venue": "Class Room : LT 301",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " MJNV Prasad"
      ],
      "Division": ""
  },
  "MM638": {
      "Code": "MM638",
      "Name": "Polymer Blends and Composites",
      "Venue": "Class Room : LT 206",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Arup R. Bhattacharyya"
      ],
      "Division": ""
  },
  "PH110-D3": {
      "Code": "PH110-D3",
      "Name": "Introduction to Classical and Quantum Physics",
      "Venue": "Class Room : LT 304",
      "Slots": [
          "X3"
      ],
      "Instructors": [
          "  ",
          " Punit  Parmananda"
      ],
      "Division": "D3"
  },
  "MM642": {
      "Code": "MM642",
      "Name": "Modelling of Metallurgical Processes",
      "Venue": "Class Room : LT 304",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Sanjay Chandra"
      ],
      "Division": ""
  },
  "MM650": {
      "Code": "MM650",
      "Name": "Protective Coatings",
      "Venue": "Class Room : LT 302",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Smrutiranjan Parida"
      ],
      "Division": ""
  },
  "MM652": {
      "Code": "MM652",
      "Name": "Advanced Ceramics",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Kulkarni Ajit R.",
          " Avradeep Pal"
      ],
      "Division": ""
  },
  "MM656": {
      "Code": "MM656",
      "Name": "Simulation and Optimisation",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Sumit Saxena"
      ],
      "Division": ""
  },
  "MM658": {
      "Code": "MM658",
      "Name": "Fracture Mechanics and Failure Analysis",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Nagamani J. Balila"
      ],
      "Division": ""
  },
  "MM674": {
      "Code": "MM674",
      "Name": "Materials & Processes for Semiconductor Devices",
      "Venue": "Class Room : LT 301",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Dusane Rajiv O."
      ],
      "Division": ""
  },
  "PH110-D4": {
      "Code": "PH110-D4",
      "Name": "Introduction to Classical and Quantum Physics",
      "Venue": "Class Room : LT 303",
      "Slots": [
          "X1",
          "X2"
      ],
      "Instructors": [
          "  ",
          " Anirban  Sain"
      ],
      "Division": "D4"
  },
  "MM677": {
      "Code": "MM677",
      "Name": "Diffusion and Kinetics",
      "Venue": "Class Room : LT 301",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " M.P. Gururajan"
      ],
      "Division": ""
  },
  "MM684": {
      "Code": "MM684",
      "Name": "X-Ray Diffraction and Electron Microscopy",
      "Venue": "Class Room : LT 105",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Samajdar I.",
          " Prasanna T.R.S."
      ],
      "Division": ""
  },
  "MM685": {
      "Code": "MM685",
      "Name": "Electrical Materials: fundamentals and applications",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Titas Dasgupta"
      ],
      "Division": ""
  },
  "MM688": {
      "Code": "MM688",
      "Name": "Non-Crystalline Materials",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Kulkarni Ajit R."
      ],
      "Division": ""
  },
  "MM691": {
      "Code": "MM691",
      "Name": "Topics in Phase Transformations",
      "Venue": "Class Room : LT 304",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Prabhu N."
      ],
      "Division": ""
  },
  "MM694": {
      "Code": "MM694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Smrutiranjan Parida"
      ],
      "Division": ""
  },
  "PS602": {
      "Code": "PS602",
      "Name": "Public Policy in Practice",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Malish C.M.",
          " N.C.Narayanan"
      ],
      "Division": ""
  },
  "PH117-P1": {
      "Code": "PH117-P1",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P1"
  },
  "MM700": {
      "Code": "MM700",
      "Name": "Electrochemical and Materials Perspective in Energy Storage",
      "Venue": "Class : CL 109 ESE",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Amartya Mukhopadhyay"
      ],
      "Division": ""
  },
  "PS604": {
      "Code": "PS604",
      "Name": "Technology, Culture and Policy",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Mehra A."
      ],
      "Division": ""
  },
  "PH117-P10": {
      "Code": "PH117-P10",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "5B",
          "6B"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P10"
  },
  "MM712": {
      "Code": "MM712",
      "Name": "Advances in Design and Control of Corrosion",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Raja V. S."
      ],
      "Division": ""
  },
  "PS607": {
      "Code": "PS607",
      "Name": "Public Policy Theory II",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Malish C.M.",
          " N.C.Narayanan"
      ],
      "Division": ""
  },
  "PH117-P2": {
      "Code": "PH117-P2",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "L2"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P2"
  },
  "MM718": {
      "Code": "MM718",
      "Name": "Laser Processing and Nanostructures",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Shobha Shukla"
      ],
      "Division": ""
  },
  "PH117-P3": {
      "Code": "PH117-P3",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P3"
  },
  "PS610": {
      "Code": "PS610",
      "Name": "Quantitative and Qualitative Research Methods",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Malish C.M.",
          " Prabhir Vishnu Poruthiyil"
      ],
      "Division": ""
  },
  "MM722": {
      "Code": "MM722",
      "Name": "Molecular Simulations for Mateirals Engineering ",
      "Venue": "Class Room : LC 002",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Ajay Singh Panwar"
      ],
      "Division": ""
  },
  "PH117-P4": {
      "Code": "PH117-P4",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "L4"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P4"
  },
  "PS614": {
      "Code": "PS614",
      "Name": "Water Policy II - Advanced  Themes in Water Policy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " N.C.Narayanan"
      ],
      "Division": ""
  },
  "MM739": {
      "Code": "MM739",
      "Name": "Semiconductor Photoelectrochemistry and Photocatalysis",
      "Venue": "Class Room : LT 204",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Aswani Yella"
      ],
      "Division": ""
  },
  "PH117-P7": {
      "Code": "PH117-P7",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "2A",
          "3A",
          "4A"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P7"
  },
  "PS619": {
      "Code": "PS619",
      "Name": "Health Policy: An Introduction ",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Santosh Noronha"
      ],
      "Division": ""
  },
  "MM746": {
      "Code": "MM746",
      "Name": "Concepts of Advanced Polymer Science & Engineering",
      "Venue": "Class : CL 113 ESE",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Mithun Chowdhury"
      ],
      "Division": ""
  },
  "PH117-P8": {
      "Code": "PH117-P8",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "1B",
          "2B",
          "4B"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P8"
  },
  "PS630": {
      "Code": "PS630",
      "Name": "Technology and the Future of Workers",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Anupam Guha"
      ],
      "Division": ""
  },
  "MM749": {
      "Code": "MM749",
      "Name": "Statistics and Probability for Materials Engineers",
      "Venue": "Class Room : LT 206",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Hina Amol Gokhale"
      ],
      "Division": ""
  },
  "PH117-P9": {
      "Code": "PH117-P9",
      "Name": "Physics Lab",
      "Venue": "",
      "Slots": [
          "1C",
          "2C",
          "4C"
      ],
      "Instructors": [
          " Nitin Kumar",
          " Mohamad Aslam"
      ],
      "Division": "P9"
  },
  "PS633": {
      "Code": "PS633",
      "Name": "Writing Policy",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Naveen Bharathi"
      ],
      "Division": ""
  },
  "MM750": {
      "Code": "MM750",
      "Name": "Vibrational Spectroscopy for Materials Scientists",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Shobha Shukla"
      ],
      "Division": ""
  },
  "PH216": {
      "Code": "PH216",
      "Name": "Statistical Physics",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Dibyendu Das"
      ],
      "Division": ""
  },
  "MM754": {
      "Code": "MM754",
      "Name": "Sustainable Materials for Water Treatment",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Mural S Prasanna Kumar"
      ],
      "Division": ""
  },
  "PS634": {
      "Code": "PS634",
      "Name": "Constitutional Law and Public Policy",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Robinson Rowena",
          " Rahul Suresh Sapkal"
      ],
      "Division": ""
  },
  "PH222": {
      "Code": "PH222",
      "Name": "Digital Electronics and Microprocessors",
      "Venue": "",
      "Slots": [
          "L2",
          "LX"
      ],
      "Instructors": [
          " Maniraj Mahalingam"
      ],
      "Division": ""
  },
  "MM756": {
      "Code": "MM756",
      "Name": "Physical Metallurgy and Mechanical Properties of Steels",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Aparna Singh"
      ],
      "Division": ""
  },
  "PH232": {
      "Code": "PH232",
      "Name": "Physics Laboratory I (General Physics Lab)",
      "Venue": "",
      "Slots": [
          "L1",
          "L3"
      ],
      "Instructors": [
          " Pramod Kumar"
      ],
      "Division": ""
  },
  "PS636": {
      "Code": "PS636",
      "Name": "Information Economy, Platforms and Governance",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Jha Shishir Kumar"
      ],
      "Division": ""
  },
  "MM801": {
      "Code": "MM801",
      "Name": "Specialty steels: Making and Casting",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Manish M. Pande"
      ],
      "Division": ""
  },
  "PH252-M": {
      "Code": "PH252-M",
      "Name": "Introduction to Quantum Mechanics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Das Pragya"
      ],
      "Division": "M"
  },
  "PS637": {
      "Code": "PS637",
      "Name": "Circular Economy: Policy and Practices",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Pradip P. Kalbar",
          " Ajay A Deshpande"
      ],
      "Division": ""
  },
  "PH303": {
      "Code": "PH303",
      "Name": "Supervised Learning",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "MM899": {
      "Code": "MM899",
      "Name": "Communication Skills",
      "Venue": "Class Room : LT 001",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Mural S Prasanna Kumar",
          " Arup R. Bhattacharyya"
      ],
      "Division": ""
  },
  "PS640": {
      "Code": "PS640",
      "Name": "Gender and Development",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Ahonaa Roy"
      ],
      "Division": ""
  },
  "MMS802": {
      "Code": "MMS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Dipti Gupta"
      ],
      "Division": ""
  },
  "PH307": {
      "Code": "PH307",
      "Name": "Introduction to Numerical Analysis",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Alok Shukla"
      ],
      "Division": ""
  },
  "PS641": {
      "Code": "PS641",
      "Name": "Trustworthy Systems: A Policy Engagement",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Jha Shishir Kumar",
          " Sundeep Oberoi"
      ],
      "Division": ""
  },
  "PS642": {
      "Code": "PS642",
      "Name": "Policy and Practice of Education",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Malish C.M."
      ],
      "Division": ""
  },
  "PH309": {
      "Code": "PH309",
      "Name": "Quantum Mechanics II",
      "Venue": "",
      "Slots": [
          "4C"
      ],
      "Instructors": [
          " Soumya Bera"
      ],
      "Division": ""
  },
  "PS644": {
      "Code": "PS644",
      "Name": "Advanced Topics in AI, Data, and Policy",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Anupam Guha"
      ],
      "Division": ""
  },
  "PH408": {
      "Code": "PH408",
      "Name": "Mathematical Physics II",
      "Venue": "",
      "Slots": [
          "3A"
      ],
      "Instructors": [
          " Siddhartha Santra"
      ],
      "Division": ""
  },
  "PS694": {
      "Code": "PS694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Malish C.M."
      ],
      "Division": ""
  },
  "PS701": {
      "Code": "PS701",
      "Name": "Energy Transition",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Anjali Sharma"
      ],
      "Division": ""
  },
  "PH410": {
      "Code": "PH410",
      "Name": "Statistical Physics",
      "Venue": "Class Room : LT 303",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Raghunath Chelakkot"
      ],
      "Division": ""
  },
  "PS798": {
      "Code": "PS798",
      "Name": "MPP Dissertaion -II Stage",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Jha Shishir Kumar"
      ],
      "Division": ""
  },
  "PH418": {
      "Code": "PH418",
      "Name": "Introduction to Condensed Matter Physics",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Singh P.P."
      ],
      "Division": ""
  },
  "PS801": {
      "Code": "PS801",
      "Name": "State, Markets, and Public Policy",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Prabhir Vishnu Poruthiyil"
      ],
      "Division": ""
  },
  "PH422": {
      "Code": "PH422",
      "Name": "Quantum Mechanics II",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Shankaranarayanan Subramaniam"
      ],
      "Division": ""
  },
  "PS899": {
      "Code": "PS899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Anjali Sharma",
          " Anupam Guha"
      ],
      "Division": ""
  },
  "PH424": {
      "Code": "PH424",
      "Name": "Electromagnetic Theory I",
      "Venue": "Class Room : LT 302",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " B Nandi"
      ],
      "Division": ""
  },
  "PSS802": {
      "Code": "PSS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Prabhir Vishnu Poruthiyil"
      ],
      "Division": ""
  },
  "PH436": {
      "Code": "PH436",
      "Name": "Introduction to Condensed Matter Physics",
      "Venue": "Class Room : LC 301",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Hridis Kumar Pal"
      ],
      "Division": ""
  },
  "PH438": {
      "Code": "PH438",
      "Name": "Statistical Physics",
      "Venue": "Class Room : IC 3",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Mithun K. Mitra"
      ],
      "Division": ""
  },
  "PH441": {
      "Code": "PH441",
      "Name": "Physics Lab (General Physics)",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Pramod Kumar"
      ],
      "Division": ""
  },
  "PH444": {
      "Code": "PH444",
      "Name": "Electromagnetic Theory",
      "Venue": "Class Room : VMCC31",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Anshuman Kumar"
      ],
      "Division": ""
  },
  "PH446": {
      "Code": "PH446",
      "Name": "Physics Laboratory (Solid state and Nuclear Physics)",
      "Venue": "",
      "Slots": [
          "L1"
      ],
      "Instructors": [
          " Mahajan Avinash V.",
          " Sadhana Dash"
      ],
      "Division": ""
  },
  "PH500": {
      "Code": "PH500",
      "Name": "Thin Film Physics & Technology",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Pramod Kumar"
      ],
      "Division": ""
  },
  "PH510": {
      "Code": "PH510",
      "Name": "Electromagnetic Theory II",
      "Venue": "",
      "Slots": [
          "2A",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Varun Bhalerao"
      ],
      "Division": ""
  },
  "PH512": {
      "Code": "PH512",
      "Name": "Physics Lab (Optics and Spectroscopy)",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Kundu Tapanendu",
          " P Vasa"
      ],
      "Division": ""
  },
  "PH530": {
      "Code": "PH530",
      "Name": "Light Matter Interaction",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Kundu Tapanendu"
      ],
      "Division": ""
  },
  "PH534": {
      "Code": "PH534",
      "Name": "Quantum Information and Computing",
      "Venue": "",
      "Slots": [
          "13A",
          "13B"
      ],
      "Instructors": [
          " Sai Vinjanampathy",
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "PH540": {
      "Code": "PH540",
      "Name": "Elementary Particle Physics",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Kumar Rao"
      ],
      "Division": ""
  },
  "PH544": {
      "Code": "PH544",
      "Name": "General Theory of Relativity",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vikram Rentala"
      ],
      "Division": ""
  },
  "PH550": {
      "Code": "PH550",
      "Name": "Soft Matter Physics",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sunita Srivastava"
      ],
      "Division": ""
  },
  "PH554": {
      "Code": "PH554",
      "Name": "Computational Many Body Physics",
      "Venue": "Class Room : LT 305",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Sumiran Pujari"
      ],
      "Division": ""
  },
  "PH562": {
      "Code": "PH562",
      "Name": "Continuum Mechanics",
      "Venue": "Class Room : LT 206",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Amitabha Nandi"
      ],
      "Division": ""
  },
  "PH564": {
      "Code": "PH564",
      "Name": "Methods in Experimental Nuclear and Particle Physics",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Sadhana Dash"
      ],
      "Division": ""
  },
  "PH566": {
      "Code": "PH566",
      "Name": "Advanced Simulation Techniques in Physics",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Aftab Alam"
      ],
      "Division": ""
  },
  "PH570": {
      "Code": "PH570",
      "Name": "Advanced Laboratory Techniques  in Nanosience",
      "Venue": "",
      "Slots": [
          "L3"
      ],
      "Instructors": [
          " Mohamad Aslam"
      ],
      "Division": ""
  },
  "PH574": {
      "Code": "PH574",
      "Name": "Physics of Semiconductor Devices",
      "Venue": "",
      "Slots": [
          "4A",
          "4C",
          "4B"
      ],
      "Instructors": [
          " Dinesh Kabra"
      ],
      "Division": ""
  },
  "PH576": {
      "Code": "PH576",
      "Name": "Nanoscale Quantum Transport",
      "Venue": "Class Room : LT 301",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Suddhasatta Mahapatra"
      ],
      "Division": ""
  },
  "PH578": {
      "Code": "PH578",
      "Name": "Nanodevices and Applications",
      "Venue": "Class Room : LT 304",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Senthilkumar M."
      ],
      "Division": ""
  },
  "PH580": {
      "Code": "PH580",
      "Name": "Magnetism and Superconductivity",
      "Venue": "Class Room : LT 303",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Suresh K.G."
      ],
      "Division": ""
  },
  "PH587": {
      "Code": "PH587",
      "Name": "B.Tech Project I",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "PH588": {
      "Code": "PH588",
      "Name": "B.Tech. Project II",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "PH596": {
      "Code": "PH596",
      "Name": "M.Sc. project stage 2",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "PH601": {
      "Code": "PH601",
      "Name": "Advanced Quantum Information and Computation",
      "Venue": "",
      "Slots": [
          "15B",
          "15A"
      ],
      "Instructors": [
          " Himadri Shekhar Dhar",
          " Sai Vinjanampathy"
      ],
      "Division": ""
  },
  "PH899": {
      "Code": "PH899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " P Vasa"
      ],
      "Division": ""
  },
  "PHS802": {
      "Code": "PHS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Himadri Shekhar Dhar"
      ],
      "Division": ""
  },
  "SC202-M": {
      "Code": "SC202-M",
      "Name": "Signals and Feedback Systems",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Navin Khaneja"
      ],
      "Division": "M"
  },
  "SC602": {
      "Code": "SC602",
      "Name": "Control of Nonlinear Dynamical Systems",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Sukumar Srikant"
      ],
      "Division": ""
  },
  "SC602-M": {
      "Code": "SC602-M",
      "Name": "Control of Nonlinear Dynamical Systems",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Sukumar Srikant"
      ],
      "Division": "M"
  },
  "SC607": {
      "Code": "SC607",
      "Name": "Optimization",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Avishek Ghosh"
      ],
      "Division": ""
  },
  "SC607-M": {
      "Code": "SC607-M",
      "Name": "Optimization",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Avishek Ghosh"
      ],
      "Division": "M"
  },
  "SC624": {
      "Code": "SC624",
      "Name": "Differential Geometric Methods in Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Debasish Chatterjee"
      ],
      "Division": ""
  },
  "SC624-M": {
      "Code": "SC624-M",
      "Name": "Differential Geometric Methods in Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Debasish Chatterjee"
      ],
      "Division": "M"
  },
  "SC626": {
      "Code": "SC626",
      "Name": "Systems and Control Engineering Laboratory",
      "Venue": "",
      "Slots": [
          "LX"
      ],
      "Instructors": [
          " Ankur Kulkarni",
          " Arpita Sinha",
          " Debasish Chatterjee",
          " Vivek Natarajan"
      ],
      "Division": ""
  },
  "SC627": {
      "Code": "SC627",
      "Name": "Motion Planning & Coordination of Autonomous Vehicles",
      "Venue": "",
      "Slots": [
          "L4",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Arpita Sinha"
      ],
      "Division": ""
  },
  "SC627-M": {
      "Code": "SC627-M",
      "Name": "Motion Planning & Coordination of Autonomous Vehicles",
      "Venue": "",
      "Slots": [
          "L4",
          "2C",
          "2B"
      ],
      "Instructors": [
          " Arpita Sinha"
      ],
      "Division": "M"
  },
  "SC641": {
      "Code": "SC641",
      "Name": "Solid State Systems and Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Navin Khaneja"
      ],
      "Division": ""
  },
  "SC641-M": {
      "Code": "SC641-M",
      "Name": "Solid State Systems and Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Navin Khaneja"
      ],
      "Division": "M"
  },
  "SC645": {
      "Code": "SC645",
      "Name": "Intelligent Feedback and Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Leena Vachhani"
      ],
      "Division": ""
  },
  "SC645-M": {
      "Code": "SC645-M",
      "Name": "Intelligent Feedback and Control",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Leena Vachhani"
      ],
      "Division": "M"
  },
  "SC646": {
      "Code": "SC646",
      "Name": "Distributed Optimization and Machine Learning",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Mayank Baranwal"
      ],
      "Division": ""
  },
  "SC646-M": {
      "Code": "SC646-M",
      "Name": "Distributed Optimization and Machine Learning",
      "Venue": "",
      "Slots": [
          "9A",
          "9B"
      ],
      "Instructors": [
          " Mayank Baranwal"
      ],
      "Division": "M"
  },
  "SC651": {
      "Code": "SC651",
      "Name": "Estimation on Lie Groups",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Banavar R.N."
      ],
      "Division": ""
  },
  "SC651-M": {
      "Code": "SC651-M",
      "Name": "Estimation on Lie Groups",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Banavar R.N."
      ],
      "Division": "M"
  },
  "SC654": {
      "Code": "SC654",
      "Name": "Social learning and herding",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Ankur Kulkarni"
      ],
      "Division": ""
  },
  "SC654-M": {
      "Code": "SC654-M",
      "Name": "Social learning and herding",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Ankur Kulkarni"
      ],
      "Division": "M"
  },
  "SC694": {
      "Code": "SC694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Leena Vachhani"
      ],
      "Division": ""
  },
  "SC702": {
      "Code": "SC702",
      "Name": "Linear Systems Theory for PDEs",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vivek Natarajan"
      ],
      "Division": ""
  },
  "SC702-M": {
      "Code": "SC702-M",
      "Name": "Linear Systems Theory for PDEs",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vivek Natarajan"
      ],
      "Division": "M"
  },
  "SCS802": {
      "Code": "SCS802",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Debasish Chatterjee"
      ],
      "Division": ""
  },
  "TD390": {
      "Code": "TD390",
      "Name": "Supervised Learning - Study",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Priyadarshani Jadhav"
      ],
      "Division": ""
  },
  "TD490": {
      "Code": "TD490",
      "Name": "Supervised Learning- Analysis",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Priyadarshani Jadhav"
      ],
      "Division": ""
  },
  "TD604": {
      "Code": "TD604",
      "Name": "Social Science Research Methods and Systems Dynamics",
      "Venue": "",
      "Slots": [
          "10B",
          "10A"
      ],
      "Instructors": [
          " Pankajkumar Sekhsaria",
          " Priyadarshani Jadhav"
      ],
      "Division": ""
  },
  "TD619": {
      "Code": "TD619",
      "Name": "Energy Policy and Planning",
      "Venue": "",
      "Slots": [
          "11B",
          "11A"
      ],
      "Instructors": [
          " Anand B. Rao"
      ],
      "Division": ""
  },
  "TD620": {
      "Code": "TD620",
      "Name": "Micro, Small and Medium Enterprises in Rural Areas",
      "Venue": "",
      "Slots": [
          "12A",
          "12B"
      ],
      "Instructors": [
          " Vishal R. Sardeshpande"
      ],
      "Division": ""
  },
  "TD626": {
      "Code": "TD626",
      "Name": "Technology, Society and Development",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Pankajkumar Sekhsaria"
      ],
      "Division": ""
  },
  "TD627": {
      "Code": "TD627",
      "Name": "Field Research Methods",
      "Venue": "",
      "Slots": [
          "XC",
          "XD"
      ],
      "Instructors": [
          " Bakul Rao"
      ],
      "Division": ""
  },
  "TD632": {
      "Code": "TD632",
      "Name": "Sustainable Development Goals and Corporate Social Responsibility",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Bakul Rao",
          " Parmeshwar Digamber Udmale"
      ],
      "Division": ""
  },
  "TD634": {
      "Code": "TD634",
      "Name": "Advanced Remote Sensing and GIS for Development Research",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Pennan Chinnasamy"
      ],
      "Division": ""
  },
  "TD638-M": {
      "Code": "TD638-M",
      "Name": "Development Perspectives: Ideas, Approaches, and Theories",
      "Venue": "",
      "Slots": [
          "5B",
          "5A"
      ],
      "Instructors": [
          " Subodh M. Wagle"
      ],
      "Division": "M"
  },
  "TD639": {
      "Code": "TD639",
      "Name": "Bamboo Construction for Rural Infrastructure",
      "Venue": "",
      "Slots": [
          "1A",
          "1C",
          "1B"
      ],
      "Instructors": [
          " Chaaruchandra Korde"
      ],
      "Division": ""
  },
  "TD640": {
      "Code": "TD640",
      "Name": "Health and Wellness through a lifecycle approach",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Rupal M Dalal",
          " Amit Y. Arora"
      ],
      "Division": ""
  },
  "TD642": {
      "Code": "TD642",
      "Name": "Data for Development",
      "Venue": "",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Pennan Chinnasamy"
      ],
      "Division": ""
  },
  "TD643": {
      "Code": "TD643",
      "Name": "Design of Bamboo Structures",
      "Venue": "",
      "Slots": [
          "3A",
          "3C",
          "3B"
      ],
      "Instructors": [
          " Chaaruchandra Korde"
      ],
      "Division": ""
  },
  "TD656": {
      "Code": "TD656",
      "Name": "Characterizing Hydro-Meteorological Hazards & Risk",
      "Venue": "Class Room : VMCC31",
      "Slots": [
          "6B",
          "6A"
      ],
      "Instructors": [
          " Parmeshwar Digamber Udmale"
      ],
      "Division": ""
  },
  "US603": {
      "Code": "US603",
      "Name": "Research Methods in Urban Science",
      "Venue": "",
      "Slots": [
          "8A",
          "8B"
      ],
      "Instructors": [
          " Arnab Jana"
      ],
      "Division": ""
  },
  "TD694": {
      "Code": "TD694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Priyadarshani Jadhav"
      ],
      "Division": ""
  },
  "US606": {
      "Code": "US606",
      "Name": "Urban Environmental Infrastructure",
      "Venue": "",
      "Slots": [
          "14B",
          "14A"
      ],
      "Instructors": [
          " Pradip P. Kalbar"
      ],
      "Division": ""
  },
  "TD695": {
      "Code": "TD695",
      "Name": "I Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chaaruchandra Korde"
      ],
      "Division": ""
  },
  "US612": {
      "Code": "US612",
      "Name": "Urban Design and Engineering Studio",
      "Venue": "",
      "Slots": [
          "L4",
          "L2"
      ],
      "Instructors": [
          " Himanshu Burte",
          " Pradip P. Kalbar",
          " Malini Krishnankutty"
      ],
      "Division": ""
  },
  "TD696": {
      "Code": "TD696",
      "Name": "II Stage Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Chaaruchandra Korde"
      ],
      "Division": ""
  },
  "US614": {
      "Code": "US614",
      "Name": "Urban Space: Theories and Critical Perspectives",
      "Venue": "",
      "Slots": [
          "9A"
      ],
      "Instructors": [
          " Himanshu Burte"
      ],
      "Division": ""
  },
  "TD899": {
      "Code": "TD899",
      "Name": "Communication Skills",
      "Venue": "",
      "Slots": [
          "2A",
          "2B"
      ],
      "Instructors": [
          " Anand B. Rao",
          " Chaaruchandra Korde",
          " Satish B. Agnihotri"
      ],
      "Division": ""
  },
  "US694": {
      "Code": "US694",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Arnab Jana"
      ],
      "Division": ""
  },
  "USS801": {
      "Code": "USS801",
      "Name": "Seminar",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Pradip P. Kalbar"
      ],
      "Division": ""
  },
  "TDE602": {
      "Code": "TDE602",
      "Name": "Methods for Development Research",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Subodh M. Wagle"
      ],
      "Division": ""
  },
  "TDE604": {
      "Code": "TDE604",
      "Name": "Public Policies for Development Practitioners",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Satish B. Agnihotri"
      ],
      "Division": ""
  },
  "TDE608": {
      "Code": "TDE608",
      "Name": "Qualitative Research Methods Lab",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Subodh M. Wagle"
      ],
      "Division": ""
  },
  "TDE609": {
      "Code": "TDE609",
      "Name": "MDP Project",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Bakul Rao"
      ],
      "Division": ""
  },
  "TDE610": {
      "Code": "TDE610",
      "Name": "Policy Analysis Practicum",
      "Venue": "",
      "Slots": [],
      "Instructors": [
          " Satish B. Agnihotri"
      ],
      "Division": ""
  }
}


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
      // console.log(data)
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


// console.log(courses);
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
        start_block: 15,
        num_blocks: getNumBlocks('15:00', '16:00')
    }],
    color: colors[(Math.floor(Math.random() * colors.length))]
  },
  'X3': {
    days: [{
        index: 2,
        start: '16:00',
        end: '17:00',
        start_block: 16,
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
  let daysUntilNext = ((dayOfWeek+1)%7 - currentDate.getDay() + 7) % 7;
  futureDate.setDate(currentDate.getDate() + daysUntilNext);

  // Returning in MM/DD/YYYY format
  return `${('0' + (futureDate.getMonth() + 1)).slice(-2)}/${('0' + futureDate.getDate()).slice(-2)}/${futureDate.getFullYear()}`;
}



function formatTime(tstring){
  // console.log(`formatting: ${tstring}`);
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
    // console.log(`Slot: XX${slot}XX`)

    if(slot=='N/A'){
      return
    }
    // this will break on compound slots
    slots[slot].days.forEach(day => {
  
  
  
      let start = day.start
      let end = day.end
  
      let startDT = getNextDay(day.index)+ ' ' + formatTime(start)
  
      let endDT = getNextDay(day.index)+ ' ' + formatTime(end)
  
      let description = `Name: ${courses[course]['Name']} Venue: ${courses[course]['Venue']} Instructors: ${courses[course]['Instructors']}`;

      cal.addEvent(courses[course]['Code'], description, courses[course]['Venue'], startDT, endDT, {freq: 'WEEKLY'});
      // console.log(`Created cal event for ${courses[course]['Code']}-${slot} start: ${startDT} end: ${endDT}`);
  
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

  // console.log(`Today is ${formattedDate}`)

  cal = ics();
  
  let selected_courses_collection  = document.getElementById('select-tags').selectedOptions;
  var selected_courses_list = Array.from(selected_courses_collection).map(({ value }) => value);
  // console.log(selected_courses_list)
  selected_courses_list.forEach((course)=>{
    createCalEvent(cal, course);
  })

  // console.log(selected_courses_list)
  render_courses(selected_courses_list);
  const query = new URLSearchParams({
    p: 'ca74d8b2-db8a-464c-8c95-285e679bcc06',
    i: 'timetables_created',
  })
  
  fetch(`https://app.piratepx.com/ship?${query.toString()}`)

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
                slot.innerHTML= `<div id="course_code">${course_code.split('-')[0]}</div><div id="course_venue">${course_venue}</div>`;
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
    // let svgString = generatetimeta ble2Image(courses2);
    // downloadSVG(svgString, 'timetable2.svg');
    let timetable = document.getElementById('tt');
    let og_color = timetable.style.backgroundColor;
    timetable.style.backgroundColor = 'black';
    timetable.style.paddingTop = "30%";
    timetable.style.paddingBottom = "30%";
    htmlToImage.toBlob(timetable)
    .then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'timetable.png');
      } else {
       FileSaver.saveAs(blob, 'timetable.png');
     }
     timetable.style.backgroundColor = og_color;
     timetable.style.paddingTop = "0";
     timetable.style.paddingBottom = "0";
 
     const query = new URLSearchParams({
       p: 'ca74d8b2-db8a-464c-8c95-285e679bcc06',
       i: 'timetables_downloaded',
     })
     
     fetch(`https://app.piratepx.com/ship?${query.toString()}`)
 
    })
    .catch((error)=>{
      console.log(error);
      timetable.style.backgroundColor = og_color;
      timetable.style.paddingTop = "0";
      timetable.style.paddingBottom = "0";
    const query = new URLSearchParams({
        p: 'ca74d8b2-db8a-464c-8c95-285e679bcc06',
        i: 'download_failed',
      })
      fetch(`https://app.piratepx.com/ship?${query.toString()}`)
 
    })
  

});

let add_to_cal_button = document.getElementById('add_to_cal')

add_to_cal_button.onclick = ()=>{
  // console.log(cal.events())
  cal.download('timetable')
  const query = new URLSearchParams({
    p: 'ca74d8b2-db8a-464c-8c95-285e679bcc06',
    i: 'timetables_added_to_cal',
  })
  
  fetch(`https://app.piratepx.com/ship?${query.toString()}`)

}