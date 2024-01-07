import './style.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import TomSelect from 'tom-select';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


console.log("thanks for dropping by. uwu\n~iitbtt")
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


let courses = 
{
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
        "Division": "D2",
        "total": 379,
        "AAAB_avg": 0.43799472295514513
    },
    "AE153-M": {
        "Code": "AE153-M",
        "Name": "Introduction to Aerospace Engg.",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Kowsik V R Bodi"
        ],
        "Division": "M",
        "total": 91,
        "AAAB_avg": 0.25274725274725274
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
        "Venue": "Class Room : LC 202",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " P J Guruprasad"
        ],
        "Division": "",
        "total": 300,
        "AAAB_avg": 0.31666666666666665
    },
    "AE238-M": {
        "Code": "AE238-M",
        "Name": "Aerospace Structural Mechanics",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " P J Guruprasad"
        ],
        "Division": "M",
        "total": 5,
        "AAAB_avg": 0.0
    },
    "AE242": {
        "Code": "AE242",
        "Name": "Aerospace Measurements Laboratory",
        "Venue": "",
        "Slots": [
            "LX"
        ],
        "Instructors": [
            " Arya Hemendra"
        ],
        "Division": ""
    },
    "AE244": {
        "Code": "AE244",
        "Name": "Low Speed Aerodynamics",
        "Venue": "Class Room : LC 201",
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
        "Venue": "Class Room : LC 201",
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
        "Venue": "Class Room : VMCC33",
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
        "Division": "",
        "total": 301,
        "AAAB_avg": 0.3521594684385382
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
        "Division": "M",
        "total": 20,
        "AAAB_avg": 0.15
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
        "Division": "",
        "total": 277,
        "AAAB_avg": 0.42238267148014447
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
        "Division": "",
        "total": 292,
        "AAAB_avg": 0.6712328767123288
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
        "Division": "",
        "total": 385,
        "AAAB_avg": 0.3038961038961039
    },
    "AE332": {
        "Code": "AE332",
        "Name": "Aircraft Design",
        "Venue": "Class Room : LC 302",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Avijit Chatterjee"
        ],
        "Division": "",
        "total": 294,
        "AAAB_avg": 0.20408163265306123
    },
    "AE332-M": {
        "Code": "AE332-M",
        "Name": "Aircraft Design",
        "Venue": "Class Room : LC 302",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Avijit Chatterjee"
        ],
        "Division": "M",
        "total": 17,
        "AAAB_avg": 0.058823529411764705
    },
    "AE427": {
        "Code": "AE427",
        "Name": "Control Systems Laboratory",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Arya Hemendra",
            " Rohit Gupta",
            " Shashi Ranjan Kumar",
            " Arnab Maity"
        ],
        "Division": "",
        "total": 223,
        "AAAB_avg": 0.484304932735426
    },
    "AE429": {
        "Code": "AE429",
        "Name": "Aircraft Design Project",
        "Venue": "",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Pant R.K."
        ],
        "Division": ""
    },
    "AE607": {
        "Code": "AE607",
        "Name": "Aerospace Propulsion Laboratory",
        "Venue": "",
        "Slots": [
            "L2"
        ],
        "Instructors": [
            " Nagendra Kumar"
        ],
        "Division": "",
        "total": 83,
        "AAAB_avg": 0.7710843373493976
    },
    "AE6103": {
        "Code": "AE6103",
        "Name": "Introduction to Space Technology",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Rohit Gupta",
            " Chandra Sekar Thyagarajan"
        ],
        "Division": ""
    },
    "AE622": {
        "Code": "AE622",
        "Name": "Computing of High Speed Flows",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Krishnendu Sinha"
        ],
        "Division": "",
        "total": 78,
        "AAAB_avg": 0.3717948717948718
    },
    "AE624": {
        "Code": "AE624",
        "Name": "Hypersonic Flow Theory",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Viren Menezes"
        ],
        "Division": "",
        "total": 126,
        "AAAB_avg": 0.29365079365079366
    },
    "AE650": {
        "Code": "AE650",
        "Name": "Mini Project",
        "Venue": "",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Pant R.K."
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
            " Hrishikesh Gadgil"
        ],
        "Division": "",
        "total": 91,
        "AAAB_avg": 0.18681318681318682
    },
    "AE658": {
        "Code": "AE658",
        "Name": "Design of Powerplants for Aircraft",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Chandra Sekar Thyagarajan"
        ],
        "Division": "",
        "total": 30,
        "AAAB_avg": 0.06666666666666667
    },
    "AE673": {
        "Code": "AE673",
        "Name": "Fiber Reinforced Composites",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Chandra S. Yerramalli"
        ],
        "Division": "",
        "total": 96,
        "AAAB_avg": 0.4166666666666667
    },
    "AE678": {
        "Code": "AE678",
        "Name": "Aeroelasticity",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Abhijit Gogulapati"
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.23529411764705882
    },
    "AE682": {
        "Code": "AE682",
        "Name": "Introduction to Thermoacoustics",
        "Venue": "Class Room : LT 303",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Vineeth Nair"
        ],
        "Division": "",
        "total": 18,
        "AAAB_avg": 0.2777777777777778
    },
    "AE700": {
        "Code": "AE700",
        "Name": "Guidance & Control of Unmanned Autonomous Vehicles",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Shashi Ranjan Kumar"
        ],
        "Division": "",
        "total": 66,
        "AAAB_avg": 0.25757575757575757
    },
    "AE705": {
        "Code": "AE705",
        "Name": "Introduction to Flight",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Kowsik V R Bodi"
        ],
        "Division": "",
        "total": 354,
        "AAAB_avg": 0.5197740112994349
    },
    "AE706": {
        "Code": "AE706",
        "Name": "Computational Fluid Dynamics",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Mandal J.C."
        ],
        "Division": "",
        "total": 145,
        "AAAB_avg": 0.2413793103448276
    },
    "AE708": {
        "Code": "AE708",
        "Name": "Aerospace Propulsion",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Nagendra Kumar"
        ],
        "Division": "",
        "total": 98,
        "AAAB_avg": 0.29591836734693877
    },
    "AE710": {
        "Code": "AE710",
        "Name": "Aeroacoustics",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Aniruddha Sinha"
        ],
        "Division": "",
        "total": 43,
        "AAAB_avg": 0.5116279069767442
    },
    "AE712": {
        "Code": "AE712",
        "Name": "Flight  Dynamics and Control",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Mangal Kothari"
        ],
        "Division": ""
    },
    "AE713": {
        "Code": "AE713",
        "Name": "Space Flight Dynamics",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Rohit Gupta"
        ],
        "Division": "",
        "total": 63,
        "AAAB_avg": 0.30158730158730157
    },
    "AE714": {
        "Code": "AE714",
        "Name": "Aircraft Design",
        "Venue": "Class Room : LC 302",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Avijit Chatterjee"
        ],
        "Division": "",
        "total": 123,
        "AAAB_avg": 0.5040650406504065
    },
    "AE717": {
        "Code": "AE717",
        "Name": "Aircraft Flight Dynamics",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Arya Hemendra"
        ],
        "Division": "",
        "total": 61,
        "AAAB_avg": 0.5573770491803278
    },
    "AE738": {
        "Code": "AE738",
        "Name": "Tensors for Engineers",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Krishnendu Haldar"
        ],
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.366412213740458
    },
    "AE780": {
        "Code": "AE780",
        "Name": "Computational Heat Transfer and Fluid Flow",
        "Venue": "Seminar Hall",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Ganapathi Bhat"
        ],
        "Division": "",
        "total": 184,
        "AAAB_avg": 0.32608695652173914
    },
    "BB101-D3-tut": {
        "Code": "BB101-D3-tut",
        "Name": "Biology",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "3C"
        ],
        "Instructors": [
            "  ",
            " Ranjith  PadinhateeriI ",
            "  ",
            " Sanjeeva  Srivastava"
        ],
        "Division": "D3",
        "total": 4962,
        "AAAB_avg": 0.4052801289802499
    },
    "BB101-D3": {
        "Code": "BB101-D3",
        "Name": "Biology",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Ranjith P.",
            " S. Srivastava"
        ],
        "Division": "D3",
        "total": 979,
        "AAAB_avg": 0.4647599591419816
    },
    "BB411": {
        "Code": "BB411",
        "Name": "Molecular Cell Biology",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Swapnil Rohidas Shinde"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.6875
    },
    "BB411-M": {
        "Code": "BB411-M",
        "Name": "Molecular Cell Biology",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Swapnil Rohidas Shinde"
        ],
        "Division": "M",
        "total": 13,
        "AAAB_avg": 0.6923076923076923
    },
    "BB412": {
        "Code": "BB412",
        "Name": "Genomics and Proteomics",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Kiran Kondabagilu"
        ],
        "Division": "",
        "total": 80,
        "AAAB_avg": 0.6125
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
        "Division": "",
        "total": 87,
        "AAAB_avg": 0.7011494252873564
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
        "Division": "M",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
    },
    "BB520": {
        "Code": "BB520",
        "Name": "Analytical Biochemistry",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " P. S. Phale"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.5454545454545454
    },
    "BB522": {
        "Code": "BB522",
        "Name": "Microbiology",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rajesh Patkar"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.48484848484848486
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
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.28125
    },
    "BB526": {
        "Code": "BB526",
        "Name": "Biomolecular Spectroscopy",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "7B",
            "7A"
        ],
        "Instructors": [
            " Ashutosh Kumar"
        ],
        "Division": "",
        "total": 36,
        "AAAB_avg": 0.6388888888888888
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
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.6363636363636364
    },
    "BB536": {
        "Code": "BB536",
        "Name": "Cryo-Electron Microscopy",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "7B",
            "7A"
        ],
        "Instructors": [
            " Sandip Laxman Kaledhonkar"
        ],
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.2857142857142857
    },
    "BB592": {
        "Code": "BB592",
        "Name": "Project Stage II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Swapnil Rohidas Shinde"
        ],
        "Division": "",
        "total": 51,
        "AAAB_avg": 0.9215686274509803
    },
    "BB602": {
        "Code": "BB602",
        "Name": "Research philosophy",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Patankar Swati"
        ],
        "Division": "",
        "total": 135,
        "AAAB_avg": 0.762962962962963
    },
    "BB606": {
        "Code": "BB606",
        "Name": "Cellular Electricity: Physics & Modeling ",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Manchanda Rohit"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.5434782608695652
    },
    "BB610": {
        "Code": "BB610",
        "Name": "Biomedical Microsystems",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " R. Srivastava"
        ],
        "Division": "",
        "total": 1226,
        "AAAB_avg": 0.8809135399673735
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
        "Division": "M",
        "total": 144,
        "AAAB_avg": 0.9583333333333334
    },
    "BB612": {
        "Code": "BB612",
        "Name": "Cell Mechanics and Mechanobiology",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Shamik Sen"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6590909090909091
    },
    "BB612-M": {
        "Code": "BB612-M",
        "Name": "Cell Mechanics and Mechanobiology",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Shamik Sen"
        ],
        "Division": "M",
        "total": 1,
        "AAAB_avg": 1.0
    },
    "BB615": {
        "Code": "BB615",
        "Name": "General Virology",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Kiran Kondabagilu"
        ],
        "Division": ""
    },
    "BB616": {
        "Code": "BB616",
        "Name": "Cellular and Tissue Engineering",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Prakriti Tayalia"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.5689655172413793
    },
    "BB616-M": {
        "Code": "BB616-M",
        "Name": "Cellular and Tissue Engineering",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Prakriti Tayalia"
        ],
        "Division": "M",
        "total": 58,
        "AAAB_avg": 0.5689655172413793
    },
    "BB621": {
        "Code": "BB621",
        "Name": "Biostatistics",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Shamik Sen"
        ],
        "Division": "",
        "total": 255,
        "AAAB_avg": 0.34509803921568627
    },
    "BB623": {
        "Code": "BB623",
        "Name": "Mechanisms of Bacterial Pathogenesis",
        "Venue": "Class : CL 112 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Anirban Banerjee"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.7428571428571429
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
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.35294117647058826
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
        "Division": "M",
        "total": 2,
        "AAAB_avg": 0.5
    },
    "BB626": {
        "Code": "BB626",
        "Name": "Modeling Biological Systems and Processes",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " P.V.Balaji"
        ],
        "Division": ""
    },
    "BB628": {
        "Code": "BB628",
        "Name": "Molecular Cell Signaling",
        "Venue": "Class Room : LT 303",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Swapnil Rohidas Shinde"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.9545454545454546
    },
    "BB642": {
        "Code": "BB642",
        "Name": "Protein Crystallography",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "3B",
            "LX"
        ],
        "Instructors": [
            " Prasenjit Bhaumik"
        ],
        "Division": "",
        "total": 56,
        "AAAB_avg": 0.625
    },
    "BB648": {
        "Code": "BB648",
        "Name": "Protein Engineering",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Samir Maji"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.6363636363636364
    },
    "BB655": {
        "Code": "BB655",
        "Name": "Introduction to Biomedical Optics",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Hari M. Varma"
        ],
        "Division": "",
        "total": 18,
        "AAAB_avg": 0.4444444444444444
    },
    "BB655-M": {
        "Code": "BB655-M",
        "Name": "Introduction to Biomedical Optics",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Hari M. Varma"
        ],
        "Division": "M",
        "total": 18,
        "AAAB_avg": 0.4444444444444444
    },
    "BB657": {
        "Code": "BB657",
        "Name": "Regulatory Aspects of Drug Development",
        "Venue": "Class Room : LT 006",
        "Slots": [
            "11B",
            "X3"
        ],
        "Instructors": [
            " Ashutosh Kumar"
        ],
        "Division": ""
    },
    "BB658": {
        "Code": "BB658",
        "Name": "Principles of Tissue Engineering",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Prakriti Tayalia"
        ],
        "Division": "",
        "total": 36,
        "AAAB_avg": 0.4166666666666667
    },
    "BB668": {
        "Code": "BB668",
        "Name": "Engineering Principles in Surgical Reconstruction",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "L4",
            "10A"
        ],
        "Instructors": [
            " Vivek P. Soni"
        ],
        "Division": ""
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
        "Division": "",
        "total": 101,
        "AAAB_avg": 0.7326732673267327
    },
    "BB701": {
        "Code": "BB701",
        "Name": "Research Proposal",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Anirban Banerjee"
        ],
        "Division": "",
        "total": 90,
        "AAAB_avg": 0.8777777777777778
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
        "Division": "",
        "total": 60,
        "AAAB_avg": 0.8333333333333334
    },
    "CE102-S1": {
        "Code": "CE102-S1",
        "Name": "Engineering Mechanics",
        "Venue": "Class Room - 208",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Manish Kumar",
            " Jayadipta Ghosh"
        ],
        "Division": "S1",
        "total": 328,
        "AAAB_avg": 0.2926829268292683
    },
    "CE102-S1-tut": {
        "Code": "CE102-S1-tut",
        "Name": "Engineering Mechanics",
        "Venue": "Class room 212",
        "Slots": [
            "6A"
        ],
        "Instructors": [
            "  ",
            " Manish  KumarI ",
            "  ",
            " Jayadipta  Ghosh"
        ],
        "Division": "S1",
        "total": 1429,
        "AAAB_avg": 0.2813156053184045
    },
    "CE102-S2-tut": {
        "Code": "CE102-S2-tut",
        "Name": "Engineering Mechanics",
        "Venue": "Class Room - 208",
        "Slots": [
            "6A"
        ],
        "Instructors": [
            " ",
            " Najeeb Mohammad Shariff"
        ],
        "Division": "S2",
        "total": 1429,
        "AAAB_avg": 0.2813156053184045
    },
    "CE102-S2": {
        "Code": "CE102-S2",
        "Name": "Engineering Mechanics",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Najeeb Mohammad Shariff"
        ],
        "Division": "S2",
        "total": 322,
        "AAAB_avg": 0.22981366459627328
    },
    "CE102-S3-tut": {
        "Code": "CE102-S3-tut",
        "Name": "Engineering Mechanics",
        "Venue": "Class Room : 209",
        "Slots": [
            "6A"
        ],
        "Instructors": [
            "  ",
            " Meera  Raghunandan"
        ],
        "Division": "S3",
        "total": 1429,
        "AAAB_avg": 0.2813156053184045
    },
    "CE102-S3": {
        "Code": "CE102-S3",
        "Name": "Engineering Mechanics",
        "Venue": "Class Room : IC 3",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Meera Raghunandan"
        ],
        "Division": "S3",
        "total": 321,
        "AAAB_avg": 0.2616822429906542
    },
    "CE234-S1-tut": {
        "Code": "CE234-S1-tut",
        "Name": "Structural Mechanics",
        "Venue": "Class Room - 228",
        "Slots": [
            "X2",
            "X3"
        ],
        "Instructors": [
            " N.K.Chandiramani"
        ],
        "Division": "S1"
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
    "CE234-S2-tut": {
        "Code": "CE234-S2-tut",
        "Name": "Structural Mechanics",
        "Venue": "Class Room - 233",
        "Slots": [
            "X2",
            "X3"
        ],
        "Instructors": [
            " Jangid R.S."
        ],
        "Division": "S2"
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
    "CE234-S3-tut": {
        "Code": "CE234-S3-tut",
        "Name": "Structural Mechanics",
        "Venue": "P. G. Lecture Room - 238",
        "Slots": [
            "X2",
            "X3"
        ],
        "Instructors": [
            " M.M.Inamdar"
        ],
        "Division": "S3"
    },
    "CE236": {
        "Code": "CE236",
        "Name": "Soil Mechanics",
        "Venue": "Class Room : LA 002",
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
    "CE238": {
        "Code": "CE238",
        "Name": "Land Surveying: Theory and Practice",
        "Venue": "Class Room : LA 001",
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
    "CE240-S1": {
        "Code": "CE240-S1",
        "Name": "Soil Mechanics Laboratory",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " A. Juneja",
            " Choudhury Deepankar",
            " Pinom Ering",
            " Prasenjit Basu",
            " Santiram Chatterjee",
            " S. Dasaka Murthy",
            " Singh D.N.",
            " Viswanadham B.V.S."
        ],
        "Division": "S1"
    },
    "CE240-S2": {
        "Code": "CE240-S2",
        "Name": "Soil Mechanics Laboratory",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " A. Juneja",
            " Choudhury Deepankar",
            " Pinom Ering",
            " Prasenjit Basu",
            " Santiram Chatterjee",
            " S. Dasaka Murthy",
            " Singh D.N.",
            " Viswanadham B.V.S."
        ],
        "Division": "S2"
    },
    "CE242-S1": {
        "Code": "CE242-S1",
        "Name": "Hydromechanics Laboratory",
        "Venue": "",
        "Slots": [
            "L2"
        ],
        "Instructors": [
            " Srineash V.K."
        ],
        "Division": "S1"
    },
    "CE242-S2": {
        "Code": "CE242-S2",
        "Name": "Hydromechanics Laboratory",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Riddhi Singh"
        ],
        "Division": "S2"
    },
    "CE244-S1": {
        "Code": "CE244-S1",
        "Name": "Transportation Engineering",
        "Venue": "Class Room : LC 001",
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
    "CE244-S2": {
        "Code": "CE244-S2",
        "Name": "Transportation Engineering",
        "Venue": "Class Room : LC 002",
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
        "Division": "",
        "total": 469,
        "AAAB_avg": 0.3326226012793177
    },
    "CE330-S1": {
        "Code": "CE330-S1",
        "Name": "Geotechnical Engineering II",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " S. Dasaka Murthy"
        ],
        "Division": "S1",
        "total": 262,
        "AAAB_avg": 0.20610687022900764
    },
    "CE330-S2": {
        "Code": "CE330-S2",
        "Name": "Geotechnical Engineering II",
        "Venue": "Class Room : VMCC33",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Pinom Ering"
        ],
        "Division": "S2",
        "total": 112,
        "AAAB_avg": 0.32142857142857145
    },
    "CE332-S1-tut": {
        "Code": "CE332-S1-tut",
        "Name": "Structural Design II",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "X2",
            "X3"
        ],
        "Instructors": [
            " Amit Kumar Das"
        ],
        "Division": "S1",
        "total": 253,
        "AAAB_avg": 0.26877470355731226
    },
    "CE332-S1": {
        "Code": "CE332-S1",
        "Name": "Structural Design II",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Amit Kumar Das"
        ],
        "Division": "S1",
        "total": 130,
        "AAAB_avg": 0.36923076923076925
    },
    "CE332-S2-tut": {
        "Code": "CE332-S2-tut",
        "Name": "Structural Design II",
        "Venue": "Class Room : LC 302",
        "Slots": [
            "X2",
            "X3"
        ],
        "Instructors": [
            " Ghosh Siddhartha"
        ],
        "Division": "S2",
        "total": 253,
        "AAAB_avg": 0.26877470355731226
    },
    "CE332-S2": {
        "Code": "CE332-S2",
        "Name": "Structural Design II",
        "Venue": "Class Room : VMCC33",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Ghosh Siddhartha"
        ],
        "Division": "S2",
        "total": 123,
        "AAAB_avg": 0.16260162601626016
    },
    "CE334-S1": {
        "Code": "CE334-S1",
        "Name": "Transportation Engineering II",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " P.Vedagiri"
        ],
        "Division": "S1",
        "total": 195,
        "AAAB_avg": 0.5897435897435898
    },
    "CE334-S2": {
        "Code": "CE334-S2",
        "Name": "Transportation Engineering II",
        "Venue": "Class Room : VMCC33",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Nagendra Rao Velaga"
        ],
        "Division": "S2",
        "total": 186,
        "AAAB_avg": 0.6129032258064516
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
        "Division": "S1",
        "total": 185,
        "AAAB_avg": 0.5675675675675675
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
        "Division": "S2",
        "total": 181,
        "AAAB_avg": 0.6464088397790055
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
        "Division": "S1",
        "total": 182,
        "AAAB_avg": 0.6318681318681318
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
        "Division": "S2",
        "total": 181,
        "AAAB_avg": 0.6132596685082873
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
        "Division": "",
        "total": 97,
        "AAAB_avg": 0.44329896907216493
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
        "Division": "",
        "total": 31,
        "AAAB_avg": 0.3225806451612903
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
        "Division": "",
        "total": 128,
        "AAAB_avg": 0.3671875
    },
    "CE484": {
        "Code": "CE484",
        "Name": "Concrete Technology",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Prakash Nanthagopalan",
            " Swathy Manohar"
        ],
        "Division": "",
        "total": 192,
        "AAAB_avg": 0.296875
    },
    "CE495": {
        "Code": "CE495",
        "Name": "BTP II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Amit Kumar Das"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.8478260869565217
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
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.47368421052631576
    },
    "CE608": {
        "Code": "CE608",
        "Name": "Eco-hydro-Climatology",
        "Venue": "Class Room - IC1",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Subimal Ghosh"
        ],
        "Division": "",
        "total": 355,
        "AAAB_avg": 0.323943661971831
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
        "Division": "",
        "total": 89,
        "AAAB_avg": 0.33707865168539325
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
        "Division": "",
        "total": 200,
        "AAAB_avg": 0.43
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
        "Division": "",
        "total": 20,
        "AAAB_avg": 0.7
    },
    "CE632": {
        "Code": "CE632",
        "Name": "Ground Improvement",
        "Venue": "Class Room : 209",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " A. Juneja"
        ],
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.7142857142857143
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
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.3958333333333333
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
        "Division": "",
        "total": 109,
        "AAAB_avg": 0.48623853211009177
    },
    "CE652": {
        "Code": "CE652",
        "Name": "Foundations of Offshore Structures",
        "Venue": "Class Room - 233",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Santiram Chatterjee"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.4666666666666667
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
        "Division": "",
        "total": 76,
        "AAAB_avg": 0.5394736842105263
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
        "Division": "",
        "total": 145,
        "AAAB_avg": 0.45517241379310347
    },
    "CE659": {
        "Code": "CE659",
        "Name": "Advanced Surveying",
        "Venue": "Class Room : 209",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Eswar Rajasekaran",
            " Raaj Ramsankaran"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.45454545454545453
    },
    "CE660": {
        "Code": "CE660",
        "Name": "Conservation of Heritage Structures",
        "Venue": "Class room 212",
        "Slots": [
            "14B",
            "14A"
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
        "Division": "",
        "total": 79,
        "AAAB_avg": 0.3291139240506329
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
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.5227272727272727
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
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.6521739130434783
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
        "Division": "",
        "total": 57,
        "AAAB_avg": 0.49122807017543857
    },
    "CE694": {
        "Code": "CE694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Choudhury Deepankar"
        ],
        "Division": "",
        "total": 320,
        "AAAB_avg": 0.7625
    },
    "CE695": {
        "Code": "CE695",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Choudhury Deepankar"
        ],
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.6666666666666666
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
        "Division": "",
        "total": 54,
        "AAAB_avg": 0.6851851851851852
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
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.6551724137931034
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
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.5217391304347826
    },
    "CE719": {
        "Code": "CE719",
        "Name": "Construction Contracts",
        "Venue": "Class Room - IC1",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Venkata S. Delhi"
        ],
        "Division": "",
        "total": 195,
        "AAAB_avg": 0.48717948717948717
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
        "Division": "",
        "total": 57,
        "AAAB_avg": 0.8070175438596491
    },
    "CE729": {
        "Code": "CE729",
        "Name": "Quality and Safety in Construction",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Albert Thomas"
        ],
        "Division": "",
        "total": 87,
        "AAAB_avg": 0.39080459770114945
    },
    "CE743": {
        "Code": "CE743",
        "Name": "Condition Assessment and Rehabilitation of Structures",
        "Venue": "Class Room - 233",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Muhammad Salman"
        ],
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.1450381679389313
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
        "Division": "",
        "total": 82,
        "AAAB_avg": 0.32926829268292684
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
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.375
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
        "Division": "",
        "total": 28,
        "AAAB_avg": 0.4642857142857143
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
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.2413793103448276
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
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.375
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
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.2608695652173913
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
        "Division": "",
        "total": 76,
        "AAAB_avg": 0.5921052631578947
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
        "Division": "",
        "total": 75,
        "AAAB_avg": 0.6
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
        "Division": "",
        "total": 148,
        "AAAB_avg": 0.4864864864864865
    },
    "CE899": {
        "Code": "CE899",
        "Name": "Communication Skills",
        "Venue": "Class room 212",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Bellie Sivakumar"
        ],
        "Division": "",
        "total": 342,
        "AAAB_avg": 0.0
    },
    "CES801": {
        "Code": "CES801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Choudhury Deepankar"
        ],
        "Division": "",
        "total": 221,
        "AAAB_avg": 0.8506787330316742
    },
    "CH110-tut": {
        "Code": "CH110-tut",
        "Name": "Interpretative Spectroscopy",
        "Venue": "Class Room : LT 304",
        "Slots": [
            "11B"
        ],
        "Instructors": [
            "  ",
            " Chandra Mouleeswara Rao  VollaI ",
            "  ",
            " Maravanji Shivaramaiah Balakrishna"
        ],
        "Division": "",
        "total": 41,
        "AAAB_avg": 0.3902439024390244
    },
    "CH110-D1": {
        "Code": "CH110-D1",
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
        "Division": "D1",
        "total": 41,
        "AAAB_avg": 0.3902439024390244
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
        "Division": "P13",
        "total": 71,
        "AAAB_avg": 0.9436619718309859
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
        "Division": "P14",
        "total": 70,
        "AAAB_avg": 0.9142857142857143
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
        "Division": "P15",
        "total": 26,
        "AAAB_avg": 0.9230769230769231
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
        "Division": "P16",
        "total": 46,
        "AAAB_avg": 0.9130434782608695
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
        "Division": "P19",
        "total": 70,
        "AAAB_avg": 0.9142857142857143
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
        "Division": "P20",
        "total": 69,
        "AAAB_avg": 0.8695652173913043
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
        "Division": "P21",
        "total": 35,
        "AAAB_avg": 0.8571428571428571
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
        "Division": "P22",
        "total": 34,
        "AAAB_avg": 0.8529411764705882
    },
    "CH202": {
        "Code": "CH202",
        "Name": "Transition Metal Chemistry",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "1A",
            "1C",
            "1B"
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
        "Venue": "Class Room : LT 001",
        "Slots": [
            "1A",
            "1C",
            "1B"
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
        "Venue": "Class Room : LT 002",
        "Slots": [
            "4A",
            "4C",
            "4B"
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
        "Venue": "Class Room : LT 002",
        "Slots": [
            "4A",
            "4C",
            "4B"
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
        "Division": "",
        "total": 9,
        "AAAB_avg": 1.0
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
        "Division": "",
        "total": 316,
        "AAAB_avg": 0.4462025316455696
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
        "Division": "M",
        "total": 316,
        "AAAB_avg": 0.4462025316455696
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
        "Division": "",
        "total": 241,
        "AAAB_avg": 0.34024896265560167
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
        "Division": "M",
        "total": 241,
        "AAAB_avg": 0.34024896265560167
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
        "Division": "",
        "total": 320,
        "AAAB_avg": 0.55625
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
        "Division": "M",
        "total": 320,
        "AAAB_avg": 0.55625
    },
    "CH410": {
        "Code": "CH410",
        "Name": "Bio-Inorganic Chemistry",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Arnab Dutta",
            " D. Maiti"
        ],
        "Division": "",
        "total": 258,
        "AAAB_avg": 0.562015503875969
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
        "Division": "",
        "total": 305,
        "AAAB_avg": 0.6688524590163935
    },
    "CH432": {
        "Code": "CH432",
        "Name": "Inorganic Chemistry Lab III",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Deepti Kalsi",
            " M. Ravikanth"
        ],
        "Division": "",
        "total": 306,
        "AAAB_avg": 0.4803921568627451
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
        "Division": "",
        "total": 236,
        "AAAB_avg": 0.5720338983050848
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
        "Division": "",
        "total": 324,
        "AAAB_avg": 0.5092592592592593
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
        "Division": "M",
        "total": 324,
        "AAAB_avg": 0.5092592592592593
    },
    "CH442": {
        "Code": "CH442",
        "Name": "Molecular Spectroscopy",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " A. Datta",
            " A.Chowdhury"
        ],
        "Division": "",
        "total": 329,
        "AAAB_avg": 0.44072948328267475
    },
    "CH442-M": {
        "Code": "CH442-M",
        "Name": "Molecular Spectroscopy",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " A. Datta",
            " A.Chowdhury"
        ],
        "Division": "M",
        "total": 329,
        "AAAB_avg": 0.44072948328267475
    },
    "CH540": {
        "Code": "CH540",
        "Name": "Drugs and Biologically Active Compounds",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Pradeep Kumar P.I.",
            " Venkateswarlu Yarlagadda"
        ],
        "Division": "",
        "total": 63,
        "AAAB_avg": 0.3968253968253968
    },
    "CH560": {
        "Code": "CH560",
        "Name": "Quantum Chemistry",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Achintya Kumar Dutta"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.5454545454545454
    },
    "CH576": {
        "Code": "CH576",
        "Name": "Statistical Mechanics",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Rahul Maitra",
            " Rajarshi Chakrabarti"
        ],
        "Division": "",
        "total": 51,
        "AAAB_avg": 0.5490196078431373
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
        "Division": "",
        "total": 188,
        "AAAB_avg": 0.6436170212765957
    },
    "CH588": {
        "Code": "CH588",
        "Name": "Organic Synthesis",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Santosh J. Gharpure",
            " Kaliappan K P"
        ],
        "Division": "",
        "total": 119,
        "AAAB_avg": 0.5462184873949579
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
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.9230769230769231
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
        "Division": "",
        "total": 191,
        "AAAB_avg": 0.900523560209424
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
        "Division": "",
        "total": 18,
        "AAAB_avg": 0.7222222222222222
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
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.2857142857142857
    },
    "CH605": {
        "Code": "CH605",
        "Name": "Chemical dynamics: quantum, classical and semiclassical methods",
        "Venue": "Class Room : LT 306",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Amber Jain"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.375
    },
    "CH806": {
        "Code": "CH806",
        "Name": "Molecular Photochemistry",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " M. Ravikanth",
            " Rodney Fernandes",
            " A. Datta"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6136363636363636
    },
    "CH824": {
        "Code": "CH824",
        "Name": "Organotransition Metal and Acceptor Ligand Complex",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Srinivasan Ramakrishnan",
            " M. S. Balakrishna"
        ],
        "Division": "",
        "total": 69,
        "AAAB_avg": 0.5652173913043478
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
        "Division": "",
        "total": 318,
        "AAAB_avg": 0.8710691823899371
    },
    "CH848": {
        "Code": "CH848",
        "Name": "Advanced Molecular Energetics",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Sandip Kar",
            " Nand Kishore"
        ],
        "Division": "",
        "total": 5,
        "AAAB_avg": 0.4
    },
    "CH849": {
        "Code": "CH849",
        "Name": "Organic Spectroscopy",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " I.N.N. Namboothiri"
        ],
        "Division": "",
        "total": 53,
        "AAAB_avg": 0.4528301886792453
    },
    "CH864": {
        "Code": "CH864",
        "Name": "Biopolymers",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Ruchi Anand",
            " Kamendra P. Sharma"
        ],
        "Division": "",
        "total": 56,
        "AAAB_avg": 0.5535714285714286
    },
    "CH899": {
        "Code": "CH899",
        "Name": "Communication Skills",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " R. B. Sunoj",
            " Shobhna Kapoor",
            " Ghosh Prasenjit"
        ],
        "Division": "",
        "total": 167,
        "AAAB_avg": 0.0
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
        "Division": "",
        "total": 187,
        "AAAB_avg": 0.6684491978609626
    },
    "CL102-D4": {
        "Code": "CL102-D4",
        "Name": "Material and Energy Balances",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Bellare J.",
            " Bhartiya S."
        ],
        "Division": "D4",
        "total": 157,
        "AAAB_avg": 0.21656050955414013
    },
    "CL208-S1": {
        "Code": "CL208-S1",
        "Name": "Chemical Reaction Engineering",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Sonali Das"
        ],
        "Division": "S1"
    },
    "CL208-S2": {
        "Code": "CL208-S2",
        "Name": "Chemical Reaction Engineering",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Sanjay Mahajani"
        ],
        "Division": "S2"
    },
    "CL210": {
        "Code": "CL210",
        "Name": "Separation Processes",
        "Venue": "Class Room : LH 101",
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
        "Division": "",
        "total": 297,
        "AAAB_avg": 0.3063973063973064
    },
    "CL238-S1": {
        "Code": "CL238-S1",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Santosh Noronha"
        ],
        "Division": "S1"
    },
    "CL238-S2": {
        "Code": "CL238-S2",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Ratul Dasgupta"
        ],
        "Division": "S2"
    },
    "CL242": {
        "Code": "CL242",
        "Name": "Fundamentals of Heat and Mass Transfer",
        "Venue": "Class Room : LH 302",
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
    "CL244-S1": {
        "Code": "CL244-S1",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Santosh Noronha"
        ],
        "Division": "S1",
        "total": 319,
        "AAAB_avg": 0.19435736677115986
    },
    "CL244-S2": {
        "Code": "CL244-S2",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Ratul Dasgupta"
        ],
        "Division": "S2",
        "total": 327,
        "AAAB_avg": 0.22935779816513763
    },
    "CL246": {
        "Code": "CL246",
        "Name": "Heat Transfer",
        "Venue": "",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " P.Sunthar",
            " Ojus Mohan"
        ],
        "Division": ""
    },
    "CL260": {
        "Code": "CL260",
        "Name": "Molecular and Statistical Thermodynamics",
        "Venue": "Organic Process Lab",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Adhikari J."
        ],
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.42857142857142855
    },
    "CL302-S1-tut": {
        "Code": "CL302-S1-tut",
        "Name": "Process Control",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "7A"
        ],
        "Instructors": [
            " Bharatkumar Suthar"
        ],
        "Division": "S1",
        "total": 287,
        "AAAB_avg": 0.24390243902439024
    },
    "CL302-S1": {
        "Code": "CL302-S1",
        "Name": "Process Control",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Bharatkumar Suthar"
        ],
        "Division": "S1",
        "total": 132,
        "AAAB_avg": 0.18181818181818182
    },
    "CL302-S2": {
        "Code": "CL302-S2",
        "Name": "Process Control",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Ravindra D. Gudi"
        ],
        "Division": "S2",
        "total": 145,
        "AAAB_avg": 0.31724137931034485
    },
    "CL302-S2-tut": {
        "Code": "CL302-S2-tut",
        "Name": "Process Control",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "X1"
        ],
        "Instructors": [
            " Ravindra D. Gudi"
        ],
        "Division": "S2",
        "total": 287,
        "AAAB_avg": 0.24390243902439024
    },
    "CL306": {
        "Code": "CL306",
        "Name": "Chemical Processes",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Vinjamur Madhu",
            " Rahul Nabar"
        ],
        "Division": "",
        "total": 558,
        "AAAB_avg": 0.2939068100358423
    },
    "CL308": {
        "Code": "CL308",
        "Name": "Overview of Indian Chemical Industry ",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sanjay Mahajani"
        ],
        "Division": ""
    },
    "CL310-S1": {
        "Code": "CL310-S1",
        "Name": "Mass Transfer II",
        "Venue": "Class : CL 112 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Abhijit Majumder"
        ],
        "Division": "S1",
        "total": 221,
        "AAAB_avg": 0.2579185520361991
    },
    "CL310-S2": {
        "Code": "CL310-S2",
        "Name": "Mass Transfer II",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Ateeque Malani"
        ],
        "Division": "S2",
        "total": 196,
        "AAAB_avg": 0.2602040816326531
    },
    "CL319": {
        "Code": "CL319",
        "Name": "Mass Transfer I",
        "Venue": "",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " P.Sunthar",
            " Ojus Mohan"
        ],
        "Division": ""
    },
    "CL324-S1": {
        "Code": "CL324-S1",
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
    "CL324-S2": {
        "Code": "CL324-S2",
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
    "CL325": {
        "Code": "CL325",
        "Name": "Chemical Reaction Engineering II",
        "Venue": "Class room-234 (Old No:230)",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Suresh A.K."
        ],
        "Division": "",
        "total": 65,
        "AAAB_avg": 0.3230769230769231
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
        "Division": "",
        "total": 291,
        "AAAB_avg": 0.281786941580756
    },
    "CL407": {
        "Code": "CL407",
        "Name": "Process Equipment Design",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Yogendra Shastri"
        ],
        "Division": "",
        "total": 532,
        "AAAB_avg": 0.15037593984962405
    },
    "CL407-tut": {
        "Code": "CL407-tut",
        "Name": "Process Equipment Design",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "7A"
        ],
        "Instructors": [
            " Yogendra Shastri"
        ],
        "Division": "",
        "total": 532,
        "AAAB_avg": 0.15037593984962405
    },
    "CL429": {
        "Code": "CL429",
        "Name": "Polymer Science and Engineering",
        "Venue": "Class room-234 (Old No:230)",
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
        "Division": "",
        "total": 148,
        "AAAB_avg": 0.7905405405405406
    },
    "CL451": {
        "Code": "CL451",
        "Name": "Chemical Process Design",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Sujit S. Jogwar"
        ],
        "Division": "",
        "total": 538,
        "AAAB_avg": 0.17657992565055763
    },
    "CL452": {
        "Code": "CL452",
        "Name": "Process Design Project",
        "Venue": "Class Room : LC 302",
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
        "Division": "",
        "total": 140,
        "AAAB_avg": 0.29285714285714287
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
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.7083333333333334
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
            " Jyoti R. Seth",
            " Partha S. Goswami",
            " Arindam Sarkar"
        ],
        "Division": "",
        "total": 101,
        "AAAB_avg": 0.8217821782178217
    },
    "CL657": {
        "Code": "CL657",
        "Name": "Computational Flow Modelling",
        "Venue": "Class room-234 (Old No:230)",
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
        "Venue": "Class : CL 112 ESE",
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
        "Venue": "Class Room : LC 002",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Rahul Nabar",
            " Sanjay Mahajani"
        ],
        "Division": "",
        "total": 227,
        "AAAB_avg": 0.48017621145374456
    },
    "CL686": {
        "Code": "CL686",
        "Name": "Advanced Process Control",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Manibhushan"
        ],
        "Division": "",
        "total": 118,
        "AAAB_avg": 0.3389830508474576
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
        "Division": "",
        "total": 169,
        "AAAB_avg": 0.621301775147929
    },
    "CL704": {
        "Code": "CL704",
        "Name": "Lecture Series",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "X1",
            "X2"
        ],
        "Instructors": [
            " Rochish Thaokar",
            " Swati Bhattacharya",
            " Bharatkumar Suthar"
        ],
        "Division": "",
        "total": 299,
        "AAAB_avg": 0.0
    },
    "CL717": {
        "Code": "CL717",
        "Name": "Evolutionary Dynamics",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Supreet Saini"
        ],
        "Division": "",
        "total": 31,
        "AAAB_avg": 0.2903225806451613
    },
    "CL726": {
        "Code": "CL726",
        "Name": "Introduction to Genomics",
        "Venue": "Organic Process Lab",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Sarika Mehra"
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.09523809523809523
    },
    "CL899": {
        "Code": "CL899",
        "Name": "Communication Skills",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Mukta Tripathy"
        ],
        "Division": "",
        "total": 157,
        "AAAB_avg": 0.0
    },
    "CLS802": {
        "Code": "CLS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Partha S. Goswami"
        ],
        "Division": "",
        "total": 88,
        "AAAB_avg": 0.7840909090909091
    },
    "CM503": {
        "Code": "CM503",
        "Name": "Atmospheric Thermodynamics",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Angshuman Modak"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
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
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.2857142857142857
    },
    "CM611": {
        "Code": "CM611",
        "Name": "Introduction to Ocean Atmosphere Dynamics",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Raghu Murtugudde"
        ],
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.0
    },
    "CM613": {
        "Code": "CM613",
        "Name": "Waves and Instabilities in Geophysical Fluid Dynamics",
        "Venue": "Class Room : LT 006",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " S. Ravichandran  "
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.25
    },
    "CM801": {
        "Code": "CM801",
        "Name": "Introduction to Risk Analysis",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Subhankar Karmakar"
        ],
        "Division": "",
        "total": 90,
        "AAAB_avg": 0.5555555555555556
    },
    "CMS801": {
        "Code": "CMS801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Vishal Dixit"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.7241379310344828
    },
    "CMS802": {
        "Code": "CMS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Vishal Dixit"
        ],
        "Division": "",
        "total": 2,
        "AAAB_avg": 1.0
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
        "Division": "D1",
        "total": 1110,
        "AAAB_avg": 0.35855855855855856
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
        "Division": "D2",
        "total": 948,
        "AAAB_avg": 0.24999999999999997
    },
    "CS104-D3": {
        "Code": "CS104-D3",
        "Name": "Software Systems Lab",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "LX",
            "5A"
        ],
        "Instructors": [
            " Kameswari Chebrolu"
        ],
        "Division": "D3",
        "total": 173,
        "AAAB_avg": 0.3063583815028902
    },
    "CS104-D3-tut": {
        "Code": "CS104-D3-tut",
        "Name": "Software Systems Lab",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "5B"
        ],
        "Instructors": [
            "  ",
            " Kameswari  Chebrolu"
        ],
        "Division": "D3",
        "total": 173,
        "AAAB_avg": 0.3063583815028902
    },
    "CS108": {
        "Code": "CS108",
        "Name": "Software Systems Lab",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "LX",
            "5A"
        ],
        "Instructors": [
            " Kameswari Chebrolu"
        ],
        "Division": ""
    },
    "CS207": {
        "Code": "CS207",
        "Name": "Discrete Structures",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Bharat Adsul"
        ],
        "Division": "",
        "total": 864,
        "AAAB_avg": 0.22685185185185186
    },
    "CS207-M": {
        "Code": "CS207-M",
        "Name": "Discrete Structures",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Bharat Adsul"
        ],
        "Division": "M",
        "total": 128,
        "AAAB_avg": 0.203125
    },
    "CS208": {
        "Code": "CS208",
        "Name": "Automata Theory and Logic",
        "Venue": "Class Room : LA 201",
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
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Sohoni Milind"
        ],
        "Division": "",
        "total": 938,
        "AAAB_avg": 0.22068230277185502
    },
    "CS213-M": {
        "Code": "CS213-M",
        "Name": "Data Structures and Algorithms",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Sohoni Milind"
        ],
        "Division": "M",
        "total": 432,
        "AAAB_avg": 0.14351851851851852
    },
    "CS217": {
        "Code": "CS217",
        "Name": "Artificial Intelligence and Machine Learning",
        "Venue": "Class Room : LH 301",
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
        "Venue": "Class Room : LA 001",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Rohit Gurjar"
        ],
        "Division": "",
        "total": 667,
        "AAAB_avg": 0.34782608695652173
    },
    "CS219": {
        "Code": "CS219",
        "Name": "Operating Systems",
        "Venue": "Class Room : LA 001",
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
        "Venue": "Class Room : LA 202",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Uday Khedkar"
        ],
        "Division": "",
        "total": 581,
        "AAAB_avg": 0.30120481927710846
    },
    "CS310": {
        "Code": "CS310",
        "Name": "Automata Theory",
        "Venue": "SIC201 : Big Class Room",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Sivakumar G."
        ],
        "Division": "",
        "total": 781,
        "AAAB_avg": 0.2855313700384123
    },
    "CS310-M": {
        "Code": "CS310-M",
        "Name": "Automata Theory",
        "Venue": "SIC201 : Big Class Room",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Sivakumar G."
        ],
        "Division": "M",
        "total": 43,
        "AAAB_avg": 0.23255813953488372
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
        "Division": "",
        "total": 588,
        "AAAB_avg": 0.5782312925170068
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
        "Division": "",
        "total": 592,
        "AAAB_avg": 0.34797297297297297
    },
    "CS333": {
        "Code": "CS333",
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
    "CS335": {
        "Code": "CS335",
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
    "CS337": {
        "Code": "CS337",
        "Name": "Artificial Intelligence and Machine Learning",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Swaprava Nath"
        ],
        "Division": ""
    },
    "CS347": {
        "Code": "CS347",
        "Name": "Operating Systems",
        "Venue": "Class Room : LA 001",
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
        "Division": "",
        "total": 585,
        "AAAB_avg": 0.7076923076923077
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
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.8947368421052632
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
        "Division": "",
        "total": 75,
        "AAAB_avg": 0.36
    },
    "CS419": {
        "Code": "CS419",
        "Name": "Introducing to Machine Learning",
        "Venue": "Class Room : VMCC33",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Abir De"
        ],
        "Division": "",
        "total": 5,
        "AAAB_avg": 0.0
    },
    "CS419-M": {
        "Code": "CS419-M",
        "Name": "Introducing to Machine Learning",
        "Venue": "Class Room : VMCC33",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Abir De"
        ],
        "Division": "M",
        "total": 400,
        "AAAB_avg": 0.3575
    },
    "CS433": {
        "Code": "CS433",
        "Name": "Automated Reasoning",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Ashutosh Kumar Gupta"
        ],
        "Division": "",
        "total": 27,
        "AAAB_avg": 0.4074074074074074
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
        "Division": "",
        "total": 152,
        "AAAB_avg": 0.8355263157894737
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
        "Division": "",
        "total": 387,
        "AAAB_avg": 0.7596899224806202
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
        "Division": "",
        "total": 257,
        "AAAB_avg": 0.8715953307392996
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
        "Division": "",
        "total": 142,
        "AAAB_avg": 0.9225352112676056
    },
    "CS6004": {
        "Code": "CS6004",
        "Name": "Code Optimization for Object-Oriented Languages",
        "Venue": "Class Room : LC 301",
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
        "Venue": "CC 101 : Class Room",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Sujoy Bhore"
        ],
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.2
    },
    "CS608": {
        "Code": "CS608",
        "Name": "Approximation Algorithms",
        "Venue": "CC 101 : Class Room",
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
        "Venue": "Class Room : LT 002",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Sivakumar G."
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.34285714285714286
    },
    "CS684": {
        "Code": "CS684",
        "Name": "Embedded Systems",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " K. Arya",
            " Paritosh K. Pandya"
        ],
        "Division": "",
        "total": 124,
        "AAAB_avg": 0.46774193548387094
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
        "Division": "",
        "total": 213,
        "AAAB_avg": 0.8403755868544601
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
        "Division": "",
        "total": 39,
        "AAAB_avg": 0.8461538461538461
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
        "Division": "",
        "total": 466,
        "AAAB_avg": 0.796137339055794
    },
    "CS695": {
        "Code": "CS695",
        "Name": "Topics in Virtualization and Cloud Computing",
        "Venue": "CC 103 : Class Room",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Purushottam Kulkarni"
        ],
        "Division": "",
        "total": 312,
        "AAAB_avg": 0.27884615384615385
    },
    "CS726": {
        "Code": "CS726",
        "Name": "Advanced Machine Learning",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " S. Sarawagi"
        ],
        "Division": "",
        "total": 347,
        "AAAB_avg": 0.40057636887608067
    },
    "CS728": {
        "Code": "CS728",
        "Name": "Organization of Web Information",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Chakrabarti Soumen"
        ],
        "Division": "",
        "total": 83,
        "AAAB_avg": 0.6626506024096386
    },
    "CS735": {
        "Code": "CS735",
        "Name": "Formal Models for Concurrent and Asynchronous Systems",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " S. Akshay"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.75
    },
    "CS736": {
        "Code": "CS736",
        "Name": "Medical Image Computing ",
        "Venue": "Class Room : 301",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Suyash P. Awate"
        ],
        "Division": "",
        "total": 258,
        "AAAB_avg": 0.3875968992248062
    },
    "CS738": {
        "Code": "CS738",
        "Name": "Concepts, Algorithms and Tools for Model Checking",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Paritosh K. Pandya"
        ],
        "Division": "",
        "total": 2,
        "AAAB_avg": 1.0
    },
    "CS745": {
        "Code": "CS745",
        "Name": "Principles of Data and System Security",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Virendra Singh"
        ],
        "Division": "",
        "total": 171,
        "AAAB_avg": 0.5146198830409356
    },
    "CS753": {
        "Code": "CS753",
        "Name": "Automatic Speech Recognition",
        "Venue": "CC 103 : Class Room",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Preethi Jyothi"
        ],
        "Division": "",
        "total": 334,
        "AAAB_avg": 0.3502994011976048
    },
    "CS754": {
        "Code": "CS754",
        "Name": "Advanced Image Processing",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Ajit V. Rajwade"
        ],
        "Division": "",
        "total": 205,
        "AAAB_avg": 0.624390243902439
    },
    "CS757": {
        "Code": "CS757",
        "Name": "Design and Re-engineering of Object Oriented Programs",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Joshi Rushikesh K."
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.5
    },
    "CS765": {
        "Code": "CS765",
        "Name": "Introduction to Blockchains, Cryptocurrencies and Smart Contracts",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Vinay J. Ribeiro"
        ],
        "Division": "",
        "total": 404,
        "AAAB_avg": 0.6138613861386139
    },
    "CS767": {
        "Code": "CS767",
        "Name": "Theoretical Machine Learning",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Ranade A."
        ],
        "Division": "",
        "total": 71,
        "AAAB_avg": 0.5070422535211268
    },
    "CS769": {
        "Code": "CS769",
        "Name": "Optimization in Machine Learning",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " G.Ramakrishnan"
        ],
        "Division": "",
        "total": 134,
        "AAAB_avg": 0.44776119402985076
    },
    "CS772": {
        "Code": "CS772",
        "Name": "Deep Learning for Natural Language Processing",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Bhattacharya P."
        ],
        "Division": "",
        "total": 369,
        "AAAB_avg": 0.3170731707317073
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
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.9333333333333333
    },
    "CS779": {
        "Code": "CS779",
        "Name": "Extremal Combinatorics",
        "Venue": "CC 105 : Class Room",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Vishwanathan Sundar"
        ],
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.6041666666666666
    },
    "CS784": {
        "Code": "CS784",
        "Name": "Image Synthesis",
        "Venue": "Class Room : LT 001",
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
        "Venue": "Class Room : LC 202",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Akash Kumar"
        ],
        "Division": ""
    },
    "CS899": {
        "Code": "CS899",
        "Name": "Communication Skills",
        "Venue": "CC 103 : Class Room",
        "Slots": [
            "XC",
            "XD"
        ],
        "Instructors": [
            " K. Arya"
        ],
        "Division": "",
        "total": 251,
        "AAAB_avg": 0.0
    },
    "CSS801": {
        "Code": "CSS801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Abir De"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.8620689655172413
    },
    "CSS802": {
        "Code": "CSS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Abir De"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
    },
    "DH301": {
        "Code": "DH301",
        "Name": "Basic Epidemiology",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "X1",
            "X2",
            "X3"
        ],
        "Instructors": [
            " G.Ramakrishnan"
        ],
        "Division": "",
        "total": 78,
        "AAAB_avg": 0.44871794871794873
    },
    "DH301-M": {
        "Code": "DH301-M",
        "Name": "Basic Epidemiology",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "X1",
            "X2",
            "X3"
        ],
        "Instructors": [
            " G.Ramakrishnan"
        ],
        "Division": "M",
        "total": 7,
        "AAAB_avg": 0.2857142857142857
    },
    "DH304": {
        "Code": "DH304",
        "Name": "Economics of Health Care",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Souvik Banerjee"
        ],
        "Division": "",
        "total": 89,
        "AAAB_avg": 0.20224719101123595
    },
    "DH304-M": {
        "Code": "DH304-M",
        "Name": "Economics of Health Care",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Souvik Banerjee"
        ],
        "Division": "M",
        "total": 12,
        "AAAB_avg": 0.25
    },
    "DH307": {
        "Code": "DH307",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " G.Ramakrishnan"
        ],
        "Division": "",
        "total": 92,
        "AAAB_avg": 0.6630434782608695
    },
    "DH307-M": {
        "Code": "DH307-M",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " G.Ramakrishnan"
        ],
        "Division": "M",
        "total": 9,
        "AAAB_avg": 0.4444444444444444
    },
    "DH602": {
        "Code": "DH602",
        "Name": "Machine Learning and Statistical Methods in Healthcare",
        "Venue": "Class Room : LC 001",
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
        "Venue": "Class Room : LC 001",
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
        "Venue": "Class Room : LT 003",
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
        "Venue": "Class Room : LT 003",
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
        "Venue": "Class Room : LT 101",
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
        "Venue": "Class Room : LT 101",
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
        "Venue": "Class Room : LT 101",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Ambarish Kunwar"
        ],
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.0
    },
    "DH899-M": {
        "Code": "DH899-M",
        "Name": "Communication Skills",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Ambarish Kunwar"
        ],
        "Division": "M",
        "total": 7,
        "AAAB_avg": 0.0
    },
    "DHS801": {
        "Code": "DHS801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Ashutosh Kumar"
        ],
        "Division": "",
        "total": 15,
        "AAAB_avg": 0.9333333333333333
    },
    "DS203-M": {
        "Code": "DS203-M",
        "Name": "Programming for Data Science",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Vinay Kulkarni"
        ],
        "Division": "M",
        "total": 550,
        "AAAB_avg": 0.48545454545454547
    },
    "DS303-M": {
        "Code": "DS303-M",
        "Name": "Introduction to Machine Learning",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Manjesh K. Hanawal"
        ],
        "Division": "M",
        "total": 470,
        "AAAB_avg": 0.46808510638297873
    },
    "DS691": {
        "Code": "DS691",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Manjunath D."
        ],
        "Division": ""
    },
    "DS694": {
        "Code": "DS694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Manjunath D."
        ],
        "Division": ""
    },
    "DS899": {
        "Code": "DS899",
        "Name": "Communication Skills",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "XC"
        ],
        "Instructors": [
            " Ankur Kulkarni"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.0
    },
    "DSS801": {
        "Code": "DSS801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Manjunath D."
        ],
        "Division": ""
    },
    "EC101-D3": {
        "Code": "EC101-D3",
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
        "Division": "D3",
        "total": 331,
        "AAAB_avg": 0.338368580060423
    },
    "EC210": {
        "Code": "EC210",
        "Name": "Intermediate Microeconomics II",
        "Venue": "Class Room : LT 101",
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
        "Venue": "Class Room : LC 201",
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
        "Venue": "Class : CL 109 ESE",
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
        "Venue": "Class Room : LT 005",
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
        "Venue": "Class Room : LC 202",
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
        "Venue": "Class Room : LC 102",
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
        "Venue": "Class Room : LC 002",
        "Slots": [
            "XC"
        ],
        "Instructors": [
            " Tara S. Shaw"
        ],
        "Division": ""
    },
    "EC411": {
        "Code": "EC411",
        "Name": "Indian Economy",
        "Venue": "Class Room : LT 003",
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
        "Venue": "Class Room : LC 102",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Subrato Banerjee"
        ],
        "Division": ""
    },
    "EC497": {
        "Code": "EC497",
        "Name": "BS Project Stage II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Tara S. Shaw"
        ],
        "Division": ""
    },
    "EC631": {
        "Code": "EC631",
        "Name": "Financial Economics",
        "Venue": "Class Room : LC 002",
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
        "Venue": "Class Room : LT 302",
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
        "Venue": "Class Room : LC 201",
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
        "Division": "S1",
        "total": 360,
        "AAAB_avg": 0.2833333333333333
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
        "Division": "S2",
        "total": 186,
        "AAAB_avg": 0.5913978494623656
    },
    "EE204": {
        "Code": "EE204",
        "Name": "Analog Circuits",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " M. B. Patil"
        ],
        "Division": "",
        "total": 568,
        "AAAB_avg": 0.23767605633802816
    },
    "EE204-M": {
        "Code": "EE204-M",
        "Name": "Analog Circuits",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " M. B. Patil"
        ],
        "Division": "M",
        "total": 147,
        "AAAB_avg": 0.2789115646258503
    },
    "EE207-S1": {
        "Code": "EE207-S1",
        "Name": "Electronic Devices & Circuits",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Ashwin Tulapurkar"
        ],
        "Division": "S1",
        "total": 268,
        "AAAB_avg": 0.30970149253731344
    },
    "EE207-S2": {
        "Code": "EE207-S2",
        "Name": "Electronic Devices & Circuits",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Dipankar Saha"
        ],
        "Division": "S2",
        "total": 253,
        "AAAB_avg": 0.2845849802371542
    },
    "EE229": {
        "Code": "EE229",
        "Name": "Signal Processing \u2013 I",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Kumar Appaiah"
        ],
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.0
    },
    "EE229-M": {
        "Code": "EE229-M",
        "Name": "Signal Processing \u2013 I",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Kumar Appaiah"
        ],
        "Division": "M",
        "total": 49,
        "AAAB_avg": 0.12244897959183673
    },
    "EE230": {
        "Code": "EE230",
        "Name": "Analog Lab",
        "Venue": "",
        "Slots": [
            "L4",
            "L3"
        ],
        "Instructors": [
            " Sandip Mondal",
            " Anil K.G."
        ],
        "Division": "",
        "total": 719,
        "AAAB_avg": 0.4339360222531293
    },
    "EE238-S1": {
        "Code": "EE238-S1",
        "Name": "Power Engineering - II",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Chatterjee Kishore"
        ],
        "Division": "S1",
        "total": 372,
        "AAAB_avg": 0.31451612903225806
    },
    "EE238-S2": {
        "Code": "EE238-S2",
        "Name": "Power Engineering - II",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Chatterjee Kishore"
        ],
        "Division": "S2",
        "total": 372,
        "AAAB_avg": 0.31451612903225806
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
        "Division": "",
        "total": 575,
        "AAAB_avg": 0.5373913043478261
    },
    "EE302-S1": {
        "Code": "EE302-S1",
        "Name": "Control Systems",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Pillai Harish"
        ],
        "Division": "S1",
        "total": 249,
        "AAAB_avg": 0.3493975903614458
    },
    "EE302-S2": {
        "Code": "EE302-S2",
        "Name": "Control Systems",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " M Belur"
        ],
        "Division": "S2",
        "total": 240,
        "AAAB_avg": 0.2375
    },
    "EE309": {
        "Code": "EE309",
        "Name": "Microprocessors",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Virendra Singh"
        ],
        "Division": "",
        "total": 879,
        "AAAB_avg": 0.4300341296928328
    },
    "EE325": {
        "Code": "EE325",
        "Name": "Probability and Random Processes",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Nikhil Karamchandani"
        ],
        "Division": "",
        "total": 410,
        "AAAB_avg": 0.2073170731707317
    },
    "EE325-M": {
        "Code": "EE325-M",
        "Name": "Probability and Random Processes",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Nikhil Karamchandani"
        ],
        "Division": "M",
        "total": 76,
        "AAAB_avg": 0.09210526315789473
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
        "Division": "",
        "total": 563,
        "AAAB_avg": 0.32326820603907636
    },
    "EE338": {
        "Code": "EE338",
        "Name": "Digital Signal Processing",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Gadre V.M."
        ],
        "Division": "",
        "total": 476,
        "AAAB_avg": 0.3445378151260504
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
        "Division": "",
        "total": 655,
        "AAAB_avg": 0.5877862595419847
    },
    "EE350-S1": {
        "Code": "EE350-S1",
        "Name": "Technical Communication",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Debanjan Bhowmik"
        ],
        "Division": "S1",
        "total": 71,
        "AAAB_avg": 0.323943661971831
    },
    "EE350-S2": {
        "Code": "EE350-S2",
        "Name": "Technical Communication",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Satish Mulleti"
        ],
        "Division": "S2",
        "total": 74,
        "AAAB_avg": 0.3783783783783784
    },
    "EE350-S3": {
        "Code": "EE350-S3",
        "Name": "Technical Communication",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Shiladri Chakraborty"
        ],
        "Division": "S3",
        "total": 72,
        "AAAB_avg": 0.4583333333333333
    },
    "EE350-S4": {
        "Code": "EE350-S4",
        "Name": "Technical Communication",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Arun Surendran"
        ],
        "Division": "S4",
        "total": 73,
        "AAAB_avg": 0.4383561643835616
    },
    "EE350-S5": {
        "Code": "EE350-S5",
        "Name": "Technical Communication",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Kulkarni S V"
        ],
        "Division": "S5",
        "total": 74,
        "AAAB_avg": 0.4864864864864865
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
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.44
    },
    "EE465": {
        "Code": "EE465",
        "Name": "Cryptocurrency and Blockchain Technologies",
        "Venue": "Class Room : EEG-401",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " S. Vijayakumaran"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.6363636363636364
    },
    "EE606": {
        "Code": "EE606",
        "Name": "Fibre Optic Communications",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Shevgaonkar R.K."
        ],
        "Division": "",
        "total": 86,
        "AAAB_avg": 0.37209302325581395
    },
    "EE6104": {
        "Code": "EE6104",
        "Name": "Internet of Things",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " V Raj Babu"
        ],
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.4230769230769231
    },
    "EE6106": {
        "Code": "EE6106",
        "Name": "Online Learning and Optimisation",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Manjunath D.",
            " Jayakrishnan Nair"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.5
    },
    "EE615": {
        "Code": "EE615",
        "Name": "Control and Computational Laboratory",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Dwaipayan Mukherjee"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.7111111111111111
    },
    "EE619": {
        "Code": "EE619",
        "Name": "Radio Frequency Microelectronics Chip Design",
        "Venue": "Class Room : VMCC32",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Rajesh H. Zele"
        ],
        "Division": "",
        "total": 242,
        "AAAB_avg": 0.48760330578512395
    },
    "EE620": {
        "Code": "EE620",
        "Name": "Physics of Transistors",
        "Venue": "Class Room : EEG-302",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Sandip Mondal",
            " Souvik Mahapatra"
        ],
        "Division": "",
        "total": 135,
        "AAAB_avg": 0.37777777777777777
    },
    "EE621": {
        "Code": "EE621",
        "Name": "Markov Chains and Queuing Systems",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " P.Chaporkar"
        ],
        "Division": "",
        "total": 320,
        "AAAB_avg": 0.378125
    },
    "EE622": {
        "Code": "EE622",
        "Name": "Optimal Control Systems",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Dwaipayan Mukherjee"
        ],
        "Division": "",
        "total": 112,
        "AAAB_avg": 0.26785714285714285
    },
    "EE636": {
        "Code": "EE636",
        "Name": "Matrix Computations",
        "Venue": "Class Room : EEG-401",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Debraj Chakraborty"
        ],
        "Division": "",
        "total": 146,
        "AAAB_avg": 0.21232876712328766
    },
    "EE651": {
        "Code": "EE651",
        "Name": "Digital Protection of Power Systems",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Prashant Navalkar"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.7555555555555555
    },
    "EE654": {
        "Code": "EE654",
        "Name": "Power Electronics - II",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Anshuman Shukla"
        ],
        "Division": "",
        "total": 124,
        "AAAB_avg": 0.532258064516129
    },
    "EE655": {
        "Code": "EE655",
        "Name": "Computer Aided Power System Analysis",
        "Venue": "Class Room : EEG-103",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Soman S.A."
        ],
        "Division": "",
        "total": 100,
        "AAAB_avg": 0.38
    },
    "EE656": {
        "Code": "EE656",
        "Name": "Electrical Machine Analysis and Control",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Fernandes B.G."
        ],
        "Division": "",
        "total": 28,
        "AAAB_avg": 0.35714285714285715
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
        "Division": "",
        "total": 155,
        "AAAB_avg": 0.7741935483870968
    },
    "EE686": {
        "Code": "EE686",
        "Name": "H V D C Transmission",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Himanshu J. Bahirat"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.75
    },
    "EE701": {
        "Code": "EE701",
        "Name": "Introduction to MEMS",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " S. Duttagupta"
        ],
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.5
    },
    "EE705": {
        "Code": "EE705",
        "Name": "V L S I Design Lab",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Patkar Sachin"
        ],
        "Division": "",
        "total": 416,
        "AAAB_avg": 0.6490384615384616
    },
    "EE706": {
        "Code": "EE706",
        "Name": "Communication Networks",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Gaurav S. Kasbekar"
        ],
        "Division": "",
        "total": 298,
        "AAAB_avg": 0.3523489932885906
    },
    "EE708": {
        "Code": "EE708",
        "Name": "Information Theory  & Coding",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " B.K.Dey"
        ],
        "Division": "",
        "total": 175,
        "AAAB_avg": 0.3142857142857143
    },
    "EE709": {
        "Code": "EE709",
        "Name": "Testing and Verification of VLSI Circuits",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Desai Madhav"
        ],
        "Division": "",
        "total": 465,
        "AAAB_avg": 0.3827956989247312
    },
    "EE712": {
        "Code": "EE712",
        "Name": "Embedded Systems Design",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "12A",
            "12B",
            "L3"
        ],
        "Instructors": [
            " Sharma Dinesh",
            " Laxmeesha Somappa"
        ],
        "Division": "",
        "total": 183,
        "AAAB_avg": 0.2459016393442623
    },
    "EE719": {
        "Code": "EE719",
        "Name": "Mixed-Signal VLSI Design",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " M.Shojaei Baghini"
        ],
        "Division": "",
        "total": 191,
        "AAAB_avg": 0.35602094240837695
    },
    "EE722": {
        "Code": "EE722",
        "Name": "Restructured Power Systems",
        "Venue": "Class Room : EEG-401",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Anupama Kowli"
        ],
        "Division": "",
        "total": 156,
        "AAAB_avg": 0.391025641025641
    },
    "EE724": {
        "Code": "EE724",
        "Name": "Nanoelectronics",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Udayan Ganguli"
        ],
        "Division": "",
        "total": 57,
        "AAAB_avg": 0.5964912280701754
    },
    "EE728": {
        "Code": "EE728",
        "Name": "Growth and Characterization of Nano-electronic Materials",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Apurba Laha"
        ],
        "Division": "",
        "total": 104,
        "AAAB_avg": 0.6538461538461539
    },
    "EE734": {
        "Code": "EE734",
        "Name": "Advanced Probability and Random Processes for Engineers",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Vivek S. Borkar"
        ],
        "Division": "",
        "total": 56,
        "AAAB_avg": 0.6428571428571429
    },
    "EE739": {
        "Code": "EE739",
        "Name": "Processor Design",
        "Venue": "Class Room : EEG-101",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Virendra Singh"
        ],
        "Division": "",
        "total": 524,
        "AAAB_avg": 0.5381679389312977
    },
    "EE747": {
        "Code": "EE747",
        "Name": "Simulation of Power System Transients",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Kulkarni A.M."
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
    },
    "EE755": {
        "Code": "EE755",
        "Name": "Quantum Transport in Nanoscale Devices",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Bhaskaran Muralidharan"
        ],
        "Division": "",
        "total": 37,
        "AAAB_avg": 0.32432432432432434
    },
    "EE761": {
        "Code": "EE761",
        "Name": "Advanced Concentration Inequalities",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Sharayu Moharir"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.5789473684210527
    },
    "EE764": {
        "Code": "EE764",
        "Name": "Wireless & Mobile Communication",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Sibi Raj B. Pillai"
        ],
        "Division": "",
        "total": 110,
        "AAAB_avg": 0.42727272727272725
    },
    "EE767": {
        "Code": "EE767",
        "Name": "Photonics System Engineering",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Arun Surendran"
        ],
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.5294117647058824
    },
    "EE769": {
        "Code": "EE769",
        "Name": "Introduction to Machine Learning",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Amit Sethi"
        ],
        "Division": "",
        "total": 939,
        "AAAB_avg": 0.2641107561235357
    },
    "EE770": {
        "Code": "EE770",
        "Name": "Design and Evaluation of Photovoltaic Power Plants",
        "Venue": "Class Room : EEG-401",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Narendra Shiradkar"
        ],
        "Division": "",
        "total": 202,
        "AAAB_avg": 0.3910891089108911
    },
    "EE774": {
        "Code": "EE774",
        "Name": "Computational Techniques in Electrical Engineering",
        "Venue": "Class Room : EEG-401",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Kumar Appaiah"
        ],
        "Division": "",
        "total": 42,
        "AAAB_avg": 0.6428571428571429
    },
    "EE779": {
        "Code": "EE779",
        "Name": "Advanced Topics in Signal Processing",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Satish Mulleti"
        ],
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.5294117647058824
    },
    "EE780": {
        "Code": "EE780",
        "Name": "Terahertz : Technology & Applications",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " S. Duttagupta",
            " Kushal R. Tuckley"
        ],
        "Division": "",
        "total": 120,
        "AAAB_avg": 0.325
    },
    "EE790": {
        "Code": "EE790",
        "Name": "Solar Photovoltaics: Photons to Farms",
        "Venue": "Class Room : EEG-001",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Pradeep R. Nair"
        ],
        "Division": "",
        "total": 54,
        "AAAB_avg": 0.6481481481481481
    },
    "EE791": {
        "Code": "EE791",
        "Name": "Power Electronic Converters for Renewable Energy",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Agarwal Vivek"
        ],
        "Division": "",
        "total": 104,
        "AAAB_avg": 0.46153846153846156
    },
    "EE793": {
        "Code": "EE793",
        "Name": "Topics in Cryptology",
        "Venue": "Class Room : IC 3",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Virendra Singh"
        ],
        "Division": "",
        "total": 163,
        "AAAB_avg": 0.48466257668711654
    },
    "EE799": {
        "Code": "EE799",
        "Name": "Advanced Antennas",
        "Venue": "Class Room : EEG-002",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " J.Mukherjee"
        ],
        "Division": "",
        "total": 91,
        "AAAB_avg": 0.5274725274725275
    },
    "EE801": {
        "Code": "EE801",
        "Name": "Introduction to Quantum Engineering",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Kasturi Saha"
        ],
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.5714285714285714
    },
    "EN220": {
        "Code": "EN220",
        "Name": "Reactions for Energy",
        "Venue": "Class : CL 110 ESE",
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
    "EN222": {
        "Code": "EN222",
        "Name": "Fluid Mechanics and Heat Transfer",
        "Venue": "Class : CL 102 ESE",
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
    "EN301": {
        "Code": "EN301",
        "Name": "Introduction to Renewable Energy Technologies",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " K.R. Balasubramaniam"
        ],
        "Division": "",
        "total": 403,
        "AAAB_avg": 0.3027295285359802
    },
    "EN302": {
        "Code": "EN302",
        "Name": "Power Generation and System Planning",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Seethamraju Srinivas"
        ],
        "Division": "",
        "total": 133,
        "AAAB_avg": 0.24060150375939848
    },
    "EN304": {
        "Code": "EN304",
        "Name": "Electrical Energy Systems",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Zakir H. Rather"
        ],
        "Division": "",
        "total": 149,
        "AAAB_avg": 0.08053691275167785
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
        "Division": "",
        "total": 124,
        "AAAB_avg": 0.6532258064516129
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
        "Division": "",
        "total": 97,
        "AAAB_avg": 0.6288659793814433
    },
    "EN312-tut": {
        "Code": "EN312-tut",
        "Name": "Control & Instrumentation",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "7A"
        ],
        "Instructors": [
            " D. Suryanarayana",
            " Venkatramanan D."
        ],
        "Division": "",
        "total": 133,
        "AAAB_avg": 0.2932330827067669
    },
    "EN312": {
        "Code": "EN312",
        "Name": "Control & Instrumentation",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " D. Suryanarayana",
            " Venkatramanan D."
        ],
        "Division": "",
        "total": 133,
        "AAAB_avg": 0.2932330827067669
    },
    "EN313": {
        "Code": "EN313",
        "Name": "Power Electronics",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Ravi Prakash Reddy Siddavatam"
        ],
        "Division": "",
        "total": 180,
        "AAAB_avg": 0.23333333333333334
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
        "Division": "",
        "total": 156,
        "AAAB_avg": 0.3525641025641026
    },
    "EN321": {
        "Code": "EN321",
        "Name": "Supervised Learning Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Gurubalan Annadurai"
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
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.5495495495495496
    },
    "EN410": {
        "Code": "EN410",
        "Name": "Energy Management",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Gurubalan Annadurai"
        ],
        "Division": "",
        "total": 116,
        "AAAB_avg": 0.29310344827586204
    },
    "EN412": {
        "Code": "EN412",
        "Name": "Thermodynamics and Statistical Mechanics",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Lalit Kumar"
        ],
        "Division": "",
        "total": 65,
        "AAAB_avg": 0.24615384615384617
    },
    "EN414": {
        "Code": "EN414",
        "Name": "Methods in Analytical Techniques",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Sankara Sarma V. Tatiparti"
        ],
        "Division": "",
        "total": 65,
        "AAAB_avg": 0.676923076923077
    },
    "EN418": {
        "Code": "EN418",
        "Name": "Introduction to Transport Phenomena",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Venkatasailanathan Ramadesigan"
        ],
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.29850746268656714
    },
    "EN422": {
        "Code": "EN422",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Karthik Sasihithlu"
        ],
        "Division": "",
        "total": 64,
        "AAAB_avg": 0.53125
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
        "Division": "",
        "total": 1,
        "AAAB_avg": 0.0
    },
    "EN604": {
        "Code": "EN604",
        "Name": "Fuel Cells",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Dayadeep S. Monder"
        ],
        "Division": "",
        "total": 97,
        "AAAB_avg": 0.2268041237113402
    },
    "EN607": {
        "Code": "EN607",
        "Name": "Energy Management",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Gurubalan Annadurai"
        ],
        "Division": "",
        "total": 191,
        "AAAB_avg": 0.36649214659685864
    },
    "EN610": {
        "Code": "EN610",
        "Name": "Hydrogen Energy",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Pratibha Sharma"
        ],
        "Division": "",
        "total": 282,
        "AAAB_avg": 0.375886524822695
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
        "Division": "",
        "total": 177,
        "AAAB_avg": 0.6836158192090396
    },
    "EN613": {
        "Code": "EN613",
        "Name": "Nuclear Reactor Theory",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Suneet Singh"
        ],
        "Division": "",
        "total": 192,
        "AAAB_avg": 0.34375
    },
    "EN615": {
        "Code": "EN615",
        "Name": "Wind Energy Conversion Systems",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Kedare S B"
        ],
        "Division": "",
        "total": 31,
        "AAAB_avg": 0.41935483870967744
    },
    "EN630": {
        "Code": "EN630",
        "Name": "Utilisation of Solar Thermal Energy",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Anish Modi"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.37142857142857144
    },
    "EN640": {
        "Code": "EN640",
        "Name": "Solar Photovoltaic, Fundamentals, Technologies and Applications",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Shaibal Sarkar"
        ],
        "Division": "",
        "total": 123,
        "AAAB_avg": 0.4878048780487805
    },
    "EN642": {
        "Code": "EN642",
        "Name": "Power Generation and Systems Planning",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Seethamraju Srinivas"
        ],
        "Division": "",
        "total": 187,
        "AAAB_avg": 0.40641711229946526
    },
    "EN645": {
        "Code": "EN645",
        "Name": "Process Integration",
        "Venue": "Class Room : LT 304",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Bandyopadhyay Santanu"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
    },
    "EN659": {
        "Code": "EN659",
        "Name": "Energy Efficient Industrial Drives",
        "Venue": "Class : CL 102 ESE",
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
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Karthik Sasihithlu"
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.5238095238095238
    },
    "EN692": {
        "Code": "EN692",
        "Name": "M.Sc.-Ph.D. Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sagar Mitra"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.7241379310344828
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
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " P.C.Ghosh"
        ],
        "Division": "",
        "total": 156,
        "AAAB_avg": 0.0
    },
    "ENT101": {
        "Code": "ENT101",
        "Name": "Introduction to Innovation & Entrepreneurship",
        "Venue": "Class Room : LH 301",
        "Slots": [
            "3B",
            "5A"
        ],
        "Instructors": [
            " B.K.Chakravarthy",
            " Ramesh Mangaleswaran",
            " Anuradha Narasimhan"
        ],
        "Division": "",
        "total": 616,
        "AAAB_avg": 0.6558441558441559
    },
    "ENT602": {
        "Code": "ENT602",
        "Name": "Technology Venture Creation",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Milind Kopikare",
            " Sankalp Pratap"
        ],
        "Division": "",
        "total": 107,
        "AAAB_avg": 0.4766355140186916
    },
    "ENT602-M": {
        "Code": "ENT602-M",
        "Name": "Technology Venture Creation",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Anuradha Narasimhan",
            " Milind Kopikare",
            " Sankalp Pratap"
        ],
        "Division": "M",
        "total": 43,
        "AAAB_avg": 0.37209302325581395
    },
    "ENT605": {
        "Code": "ENT605",
        "Name": "Business Fundamentals for Technopreneurs",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Devdip Purkayastha"
        ],
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.4117647058823529
    },
    "ENT605-M": {
        "Code": "ENT605-M",
        "Name": "Business Fundamentals for Technopreneurs",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Devdip Purkayastha"
        ],
        "Division": "M",
        "total": 17,
        "AAAB_avg": 0.4117647058823529
    },
    "ENT610": {
        "Code": "ENT610",
        "Name": "Managing Innovation and IP for Entrepreneurs",
        "Venue": "Class Room - IC1",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Anuradha Narasimhan",
            " Rajkumar R. Hirwani",
            " Vinay Dabholkar"
        ],
        "Division": "",
        "total": 62,
        "AAAB_avg": 0.3870967741935484
    },
    "ENT610-M": {
        "Code": "ENT610-M",
        "Name": "Managing Innovation and IP for Entrepreneurs",
        "Venue": "Class Room - IC1",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Anuradha Narasimhan",
            " Rajkumar R. Hirwani",
            " Vinay Dabholkar"
        ],
        "Division": "M",
        "total": 47,
        "AAAB_avg": 0.2127659574468085
    },
    "ENT612": {
        "Code": "ENT612",
        "Name": "Field Immersion for Researchers and Entrepreneurs",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "X1",
            "X2",
            "X3"
        ],
        "Instructors": [
            " Rohan Chinchwadkar",
            " Sankalp Pratap"
        ],
        "Division": ""
    },
    "ENT612-M": {
        "Code": "ENT612-M",
        "Name": "Field Immersion for Researchers and Entrepreneurs",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "X1",
            "X2",
            "X3"
        ],
        "Instructors": [
            " Rohan Chinchwadkar",
            " Sankalp Pratap"
        ],
        "Division": "M"
    },
    "ENT613": {
        "Code": "ENT613",
        "Name": "Social Enterprises & Inclusive Business",
        "Venue": "Class : CL 110 ESE",
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
        "Venue": "Class : CL 110 ESE",
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
            " Anurag Garg",
            " Virendra Sethi",
            " Tabish Nawaz"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.16666666666666666
    },
    "ES203": {
        "Code": "ES203",
        "Name": "Water and Wastewater Engineering",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Abhishek Chakraborty",
            " Anurag Garg"
        ],
        "Division": "",
        "total": 3,
        "AAAB_avg": 0.0
    },
    "ES204-D1": {
        "Code": "ES204-D1",
        "Name": "Environmental Chemistry",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Harish C. Phuleria"
        ],
        "Division": "D1",
        "total": 62,
        "AAAB_avg": 0.2903225806451613
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
        "Division": "M",
        "total": 12,
        "AAAB_avg": 0.3333333333333333
    },
    "ES208": {
        "Code": "ES208",
        "Name": "Mass Transfer Process in Environmental Systems",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "3A",
            "9B",
            "3B"
        ],
        "Instructors": [
            " Suparna Mukherji"
        ],
        "Division": "",
        "total": 130,
        "AAAB_avg": 0.13846153846153847
    },
    "ES250": {
        "Code": "ES250",
        "Name": "Environmental Studies : Science and Engineering",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Harish C. Phuleria",
            " Munish Kumar Chandel",
            " Swatantra Pratap Singh",
            " Srinidhi Balasubramanian"
        ],
        "Division": "",
        "total": 719,
        "AAAB_avg": 0.0
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
        "Division": "",
        "total": 113,
        "AAAB_avg": 0.5309734513274337
    },
    "ES302": {
        "Code": "ES302",
        "Name": "Environmental Biotechnology",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Indrajit Chakraborty",
            " Swatantra Pratap Singh"
        ],
        "Division": "",
        "total": 81,
        "AAAB_avg": 0.4444444444444444
    },
    "ES306-M": {
        "Code": "ES306-M",
        "Name": "Environment Systems Modeling",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " A.K.Dikshit"
        ],
        "Division": "M",
        "total": 7,
        "AAAB_avg": 0.7142857142857143
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
        "Division": "",
        "total": 71,
        "AAAB_avg": 0.5211267605633803
    },
    "ES312": {
        "Code": "ES312",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Manoranjan Sahu"
        ],
        "Division": "",
        "total": 71,
        "AAAB_avg": 0.4225352112676056
    },
    "ES319": {
        "Code": "ES319",
        "Name": "Computational Laboratory for Environmental Engineering",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Indrajit Chakraborty"
        ],
        "Division": "",
        "total": 104,
        "AAAB_avg": 0.4326923076923077
    },
    "ES404": {
        "Code": "ES404",
        "Name": "Planning and Design of Environmental Engineering Facilities",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "L4",
            "2A",
            "2B"
        ],
        "Instructors": [
            " Sanjeev Chaudhari"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.43478260869565216
    },
    "ES458-M": {
        "Code": "ES458-M",
        "Name": "Environmental Change and Sustainable Development",
        "Venue": "Class : CL 106 ESE",
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
        "Division": "",
        "total": 31,
        "AAAB_avg": 0.5806451612903226
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
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.6538461538461539
    },
    "ES600": {
        "Code": "ES600",
        "Name": "Environmental Science and Engineering",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Subhankar Karmakar",
            " Abhishek Chakraborty"
        ],
        "Division": "",
        "total": 209,
        "AAAB_avg": 0.3875598086124402
    },
    "ES616": {
        "Code": "ES616",
        "Name": "Energy Conversion and Environment",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Munish Kumar Chandel",
            " Virendra Sethi"
        ],
        "Division": "",
        "total": 108,
        "AAAB_avg": 0.4444444444444444
    },
    "ES624": {
        "Code": "ES624",
        "Name": "Hazardous Waste Management",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Renuka Verma",
            " Munish Kumar Chandel"
        ],
        "Division": "",
        "total": 79,
        "AAAB_avg": 0.4050632911392405
    },
    "ES642": {
        "Code": "ES642",
        "Name": "Industrial Wastewater Management and Reuse",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Renuka Verma",
            " Anurag Garg"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.43636363636363634
    },
    "ES654": {
        "Code": "ES654",
        "Name": "Groundwater Flow & Contaminant Transport through Porous Media",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Venkata Sai Vamsi Botlaguduru"
        ],
        "Division": "",
        "total": 36,
        "AAAB_avg": 0.25
    },
    "ES658": {
        "Code": "ES658",
        "Name": "Environmental Change and Sustainable Development",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Abhishek Chakraborty",
            " Indrajit Chakraborty",
            " S.R.Asolekar"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.43636363636363634
    },
    "ES664": {
        "Code": "ES664",
        "Name": "Environmental Systems Modelling",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " A.K.Dikshit"
        ],
        "Division": "",
        "total": 163,
        "AAAB_avg": 0.7055214723926381
    },
    "ES666": {
        "Code": "ES666",
        "Name": "Biological Treatment Technologies",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Amritanshu Shriwastav",
            " Suparna Mukherji"
        ],
        "Division": "",
        "total": 191,
        "AAAB_avg": 0.24607329842931938
    },
    "ES668": {
        "Code": "ES668",
        "Name": "Environmental Computation Laboratory",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Venkata Sai Vamsi Botlaguduru"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.5585585585585585
    },
    "ES670": {
        "Code": "ES670",
        "Name": "Environmental Statistics",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Harish C. Phuleria",
            " Manoranjan Sahu"
        ],
        "Division": "",
        "total": 133,
        "AAAB_avg": 0.47368421052631576
    },
    "ES672": {
        "Code": "ES672",
        "Name": "Air Pollution Control Technologies",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "4C",
            "4B",
            "7A"
        ],
        "Instructors": [
            " Manoranjan Sahu"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.4594594594594595
    },
    "ES674": {
        "Code": "ES674",
        "Name": "Aerosol Science and Engineering",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Abhishek Chakraborty",
            " Srinidhi Balasubramanian"
        ],
        "Division": "",
        "total": 93,
        "AAAB_avg": 0.4731182795698925
    },
    "ES676": {
        "Code": "ES676",
        "Name": "Membrane Processes",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Swatantra Pratap Singh"
        ],
        "Division": "",
        "total": 60,
        "AAAB_avg": 0.36666666666666664
    },
    "ES680": {
        "Code": "ES680",
        "Name": "GIS for Environmental Planning and Management",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "4A",
            "9A",
            "9B"
        ],
        "Instructors": [
            " A.K.Dikshit",
            " Srinidhi Balasubramanian"
        ],
        "Division": "",
        "total": 101,
        "AAAB_avg": 0.7821782178217822
    },
    "ES682": {
        "Code": "ES682",
        "Name": "Numerical Methods for Environmental Systems",
        "Venue": "Class : CL 102 ESE",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Amritanshu Shriwastav",
            " Tabish Nawaz"
        ],
        "Division": "",
        "total": 96,
        "AAAB_avg": 0.3958333333333333
    },
    "ES684": {
        "Code": "ES684",
        "Name": "Design of Water and Wastewater Systems",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Sanjeev Chaudhari"
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.8571428571428571
    },
    "ES691": {
        "Code": "ES691",
        "Name": "R & D Project I",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Tabish Nawaz",
            " Venkata Sai Vamsi Botlaguduru",
            " Manoranjan Sahu"
        ],
        "Division": ""
    },
    "ES692": {
        "Code": "ES692",
        "Name": "R & D Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Tabish Nawaz",
            " Venkata Sai Vamsi Botlaguduru",
            " Manoranjan Sahu"
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
        "Division": "",
        "total": 76,
        "AAAB_avg": 0.8289473684210527
    },
    "ESS802": {
        "Code": "ESS802",
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
        "Division": "",
        "total": 59,
        "AAAB_avg": 0.9322033898305084
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
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.9090909090909091
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
        "Division": "",
        "total": 59,
        "AAAB_avg": 0.8135593220338984
    },
    "ET616": {
        "Code": "ET616",
        "Name": "Multimodal Data Analysis",
        "Venue": "",
        "Slots": [
            "LX"
        ],
        "Instructors": [
            " Sahana Murthy",
            " Ritayan Mitra"
        ],
        "Division": ""
    },
    "ET623": {
        "Code": "ET623",
        "Name": "Learning Analytics",
        "Venue": "Class Room : LC 201",
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
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.7272727272727273
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
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.9393939393939394
    },
    "GNR402": {
        "Code": "GNR402",
        "Name": "Introduction to Geographic Information Systems",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Surya Durbha"
        ],
        "Division": "",
        "total": 167,
        "AAAB_avg": 0.2275449101796407
    },
    "GNR402-M": {
        "Code": "GNR402-M",
        "Name": "Introduction to Geographic Information Systems",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Surya Durbha"
        ],
        "Division": "M",
        "total": 9,
        "AAAB_avg": 0.6666666666666666
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
        "Division": "M",
        "total": 2,
        "AAAB_avg": 1.0
    },
    "GNR410-M": {
        "Code": "GNR410-M",
        "Name": "Digital Photogrammetry and GPS",
        "Venue": "",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Gedam S.S."
        ],
        "Division": "M",
        "total": 2,
        "AAAB_avg": 0.5
    },
    "GNR602": {
        "Code": "GNR602",
        "Name": "Advanced Methods in Satellite Image Processing",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Mohan B.Krishna"
        ],
        "Division": "",
        "total": 326,
        "AAAB_avg": 0.3282208588957055
    },
    "GNR618": {
        "Code": "GNR618",
        "Name": "Remote Sensing and GIS Applications to Cryosphere",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Gulab Singh"
        ],
        "Division": "",
        "total": 377,
        "AAAB_avg": 0.6710875331564987
    },
    "GNR628": {
        "Code": "GNR628",
        "Name": "Planetary Spectroscopy and Remote Sensing",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Alok Porwal"
        ],
        "Division": "",
        "total": 113,
        "AAAB_avg": 0.37168141592920356
    },
    "GNR629": {
        "Code": "GNR629",
        "Name": "Advances in Geospatial Standards, Interoperability and Knowledge Discovery",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Surya Durbha"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.7105263157894737
    },
    "GNR630": {
        "Code": "GNR630",
        "Name": "Introduction to Geospatial Technologies",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Gedam S.S.",
            " Mohan B.Krishna"
        ],
        "Division": "",
        "total": 206,
        "AAAB_avg": 0.24271844660194175
    },
    "GNR631": {
        "Code": "GNR631",
        "Name": "Rural Informatics",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Adinarayana J."
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.38235294117647056
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
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.5585585585585585
    },
    "GNR638": {
        "Code": "GNR638",
        "Name": "Machine Learning for Remote Sensing - II",
        "Venue": "Class Room : LH 301",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Biplab Banerjee"
        ],
        "Division": "",
        "total": 447,
        "AAAB_avg": 0.523489932885906
    },
    "GNR640": {
        "Code": "GNR640",
        "Name": "Geospatial Statistics",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Karthikeyan Lanka"
        ],
        "Division": "",
        "total": 41,
        "AAAB_avg": 0.4146341463414634
    },
    "GNR644": {
        "Code": "GNR644",
        "Name": "Remote Sensing of Surface Water Resources",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Karthikeyan Lanka"
        ],
        "Division": "",
        "total": 20,
        "AAAB_avg": 0.55
    },
    "GNR647": {
        "Code": "GNR647",
        "Name": "Microwave Remote Sensing",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Avik Bhattacharya",
            " Rao Y.S."
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.7142857142857143
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
        "Division": "",
        "total": 402,
        "AAAB_avg": 0.6741293532338308
    },
    "GNR651": {
        "Code": "GNR651",
        "Name": "Digital Photogrammetry and Cartography",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Gedam S.S."
        ],
        "Division": "",
        "total": 92,
        "AAAB_avg": 0.5652173913043478
    },
    "GNR694": {
        "Code": "GNR694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Deepak Singh"
        ],
        "Division": "",
        "total": 105,
        "AAAB_avg": 0.7904761904761904
    },
    "GNR697": {
        "Code": "GNR697",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Alok Porwal"
        ],
        "Division": "",
        "total": 18,
        "AAAB_avg": 0.9444444444444444
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
        "Venue": "Class Room : LT 106",
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
        "Division": "",
        "total": 86,
        "AAAB_avg": 0.0
    },
    "GNRS02": {
        "Code": "GNRS02",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Karthikeyan Lanka"
        ],
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.8275862068965517
    },
    "GP402": {
        "Code": "GP402",
        "Name": "Gravity and Magnetic Methods",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Srinivasa Rao Gangumalla"
        ],
        "Division": "",
        "total": 69,
        "AAAB_avg": 0.6086956521739131
    },
    "GP408": {
        "Code": "GP408",
        "Name": "Gravity and Magnetic Lab",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " M. Radhakrishna"
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.7205882352941176
    },
    "GP414": {
        "Code": "GP414",
        "Name": "Electrical Methods",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Anand Singh"
        ],
        "Division": "",
        "total": 69,
        "AAAB_avg": 0.782608695652174
    },
    "GP416": {
        "Code": "GP416",
        "Name": "Structural Geology & Stratigraphy",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Nibedita Rakshit",
            " Soumyajit Mukherjee"
        ],
        "Division": "",
        "total": 72,
        "AAAB_avg": 0.7777777777777778
    },
    "GP418": {
        "Code": "GP418",
        "Name": "Exploration Seismology I",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Bharath C. Shekar"
        ],
        "Division": "",
        "total": 72,
        "AAAB_avg": 0.4444444444444444
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
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.8088235294117647
    },
    "GP422": {
        "Code": "GP422",
        "Name": "Geological Field Work",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Bivin Geo George",
            " Prabhakar Naraga"
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.8382352941176471
    },
    "GP502": {
        "Code": "GP502",
        "Name": "Well Logging",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Mohan G."
        ],
        "Division": "",
        "total": 154,
        "AAAB_avg": 0.3051948051948052
    },
    "GP506": {
        "Code": "GP506",
        "Name": "Geophysical Inverse Theory",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Satish Maurya"
        ],
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.47761194029850745
    },
    "GP516": {
        "Code": "GP516",
        "Name": "Petroleum Geology and Petrophysics",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Kumar Hemant Singh"
        ],
        "Division": "",
        "total": 88,
        "AAAB_avg": 0.6590909090909091
    },
    "GP518": {
        "Code": "GP518",
        "Name": "Process Geomorphology, Remote Sensing and GIS",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " D. Ramakrishnan"
        ],
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.6041666666666666
    },
    "GP520": {
        "Code": "GP520",
        "Name": "Project Work",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "7B",
            "8A",
            "8B"
        ],
        "Instructors": [
            " Bharath C. Shekar"
        ],
        "Division": "",
        "total": 64,
        "AAAB_avg": 0.75
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
        "Division": "S1",
        "total": 73,
        "AAAB_avg": 0.3287671232876712
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
        "Division": "S2",
        "total": 73,
        "AAAB_avg": 0.4931506849315068
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
        "Division": "",
        "total": 139,
        "AAAB_avg": 0.7050359712230215
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
        "Division": "",
        "total": 159,
        "AAAB_avg": 0.7169811320754716
    },
    "GS430": {
        "Code": "GS430",
        "Name": "Metamorphic Petrology",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "2A",
            "2B"
        ],
        "Instructors": [
            " Prabhakar Naraga"
        ],
        "Division": "",
        "total": 141,
        "AAAB_avg": 0.7588652482269503
    },
    "GS434": {
        "Code": "GS434",
        "Name": "Igneous Petrology and Volcanology",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Sheth C Hetu"
        ],
        "Division": "",
        "total": 142,
        "AAAB_avg": 0.3028169014084507
    },
    "GS436": {
        "Code": "GS436",
        "Name": "Sedimentlogy ",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Sudipta Dasgupta",
            " Banerjee Santanu"
        ],
        "Division": "",
        "total": 141,
        "AAAB_avg": 0.5106382978723404
    },
    "GS438": {
        "Code": "GS438",
        "Name": "Economic and Mining Geology",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "5B",
            "2C",
            "5A"
        ],
        "Instructors": [
            " Sakthi Saravanan Chinnasamy"
        ],
        "Division": "",
        "total": 143,
        "AAAB_avg": 0.40559440559440557
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
        "Division": "",
        "total": 139,
        "AAAB_avg": 0.9568345323741008
    },
    "GS450": {
        "Code": "GS450",
        "Name": "Geological field work",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Sudipta Dasgupta",
            " Malay Mukul"
        ],
        "Division": "",
        "total": 139,
        "AAAB_avg": 0.9424460431654677
    },
    "GS530": {
        "Code": "GS530",
        "Name": "Micropalaeontology",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Jahnavi Punekar"
        ],
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.40298507462686567
    },
    "GS534": {
        "Code": "GS534",
        "Name": "Tectonics and Crustal Evolution",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Malay Mukul"
        ],
        "Division": "",
        "total": 166,
        "AAAB_avg": 0.8373493975903614
    },
    "GS536": {
        "Code": "GS536",
        "Name": "Nuclear Geology and Geochemical Prospecting",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Sameer Ranjan",
            " Mathew George"
        ],
        "Division": "",
        "total": 130,
        "AAAB_avg": 0.6076923076923076
    },
    "GS538": {
        "Code": "GS538",
        "Name": "Petroleum and Coal Geology",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Suryendu Dutta"
        ],
        "Division": "",
        "total": 135,
        "AAAB_avg": 0.6592592592592592
    },
    "GS540": {
        "Code": "GS540",
        "Name": "Climate Geology",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Bivin Geo George"
        ],
        "Division": "",
        "total": 126,
        "AAAB_avg": 0.9285714285714286
    },
    "GS542": {
        "Code": "GS542",
        "Name": "Isotope Geology",
        "Venue": "Class : CL 112 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Bivin Geo George",
            " Sameer Ranjan"
        ],
        "Division": "",
        "total": 51,
        "AAAB_avg": 0.45098039215686275
    },
    "GS545": {
        "Code": "GS545",
        "Name": "Elements of Vertebrate Palaeontology",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Nibedita Rakshit"
        ],
        "Division": "",
        "total": 9,
        "AAAB_avg": 0.5555555555555556
    },
    "GS552": {
        "Code": "GS552",
        "Name": "Geological Project",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "14B",
            "14A",
            "7A"
        ],
        "Instructors": [
            " Prabhakar Naraga"
        ],
        "Division": "",
        "total": 128,
        "AAAB_avg": 0.4140625
    },
    "GS662": {
        "Code": "GS662",
        "Name": "Petroliferous basins of India",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Nibedita Rakshit",
            " Sudipta Dasgupta"
        ],
        "Division": "",
        "total": 102,
        "AAAB_avg": 0.3137254901960784
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
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.0
    },
    "GS672": {
        "Code": "GS672",
        "Name": "Reservoir Sedimentology",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Sudipta Dasgupta",
            " Banerjee Santanu"
        ],
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.3053435114503817
    },
    "GS676": {
        "Code": "GS676",
        "Name": "Well Logging",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Mohan G."
        ],
        "Division": "",
        "total": 114,
        "AAAB_avg": 0.3157894736842105
    },
    "GS682": {
        "Code": "GS682",
        "Name": "Industrial Mineralogy",
        "Venue": "Class Room : LT 206",
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
        "Venue": "Class Room : LT 106",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Kumar Hemant Singh"
        ],
        "Division": "",
        "total": 206,
        "AAAB_avg": 0.45145631067961167
    },
    "GS707": {
        "Code": "GS707",
        "Name": "Ore Fluid Geochemistry",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Sameer Ranjan",
            " Patel S.C."
        ],
        "Division": ""
    },
    "GS710": {
        "Code": "GS710",
        "Name": "Geochemical Analysis and Instrumentation",
        "Venue": "",
        "Slots": [
            "LX"
        ],
        "Instructors": [
            " Bivin Geo George",
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
        "Venue": "Class Room : LT 004",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Mathew George"
        ],
        "Division": "",
        "total": 10,
        "AAAB_avg": 0.4
    },
    "GS820": {
        "Code": "GS820",
        "Name": "Continental Deformation and GPS Geodesy",
        "Venue": "",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Malay Mukul"
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
        "Division": "S1",
        "total": 175,
        "AAAB_avg": 0.2057142857142857
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
        "Division": "S2",
        "total": 125,
        "AAAB_avg": 0.352
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
        "Division": "S1",
        "total": 154,
        "AAAB_avg": 0.2922077922077922
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
        "Division": "S2",
        "total": 154,
        "AAAB_avg": 0.2922077922077922
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
        "Division": "",
        "total": 5,
        "AAAB_avg": 0.0
    },
    "HS250": {
        "Code": "HS250",
        "Name": "Environmental Studies",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Haripriya Gundimeda"
        ],
        "Division": "",
        "total": 717,
        "AAAB_avg": 0.0
    },
    "HS401": {
        "Code": "HS401",
        "Name": "Introduction to Paninian Grammar",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Kulkarni A Malhar"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.391304347826087
    },
    "HS4110": {
        "Code": "HS4110",
        "Name": "Experimental Archaeology: An Introduction",
        "Venue": "HS-130-D : Class Room",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Smriti Haricharan"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.25
    },
    "HS431": {
        "Code": "HS431",
        "Name": "Reading Fiction",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Suddhaseel Sen",
            " Shastri Sudha"
        ],
        "Division": "",
        "total": 73,
        "AAAB_avg": 0.3013698630136986
    },
    "HS465": {
        "Code": "HS465",
        "Name": "Moral and Political Philosophy",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Siby K.George"
        ],
        "Division": "",
        "total": 39,
        "AAAB_avg": 0.46153846153846156
    },
    "HS474": {
        "Code": "HS474",
        "Name": "Postmodernism and Philosophy",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Pravesh Jung Golay"
        ],
        "Division": "",
        "total": 3,
        "AAAB_avg": 0.0
    },
    "HS474-M": {
        "Code": "HS474-M",
        "Name": "Postmodernism and Philosophy",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Pravesh Jung Golay"
        ],
        "Division": "M",
        "total": 19,
        "AAAB_avg": 0.2631578947368421
    },
    "HS502": {
        "Code": "HS502",
        "Name": "Madhyamika Philosophy in the Buddhist Tradition",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " C.D. Sebastian"
        ],
        "Division": "",
        "total": 30,
        "AAAB_avg": 0.6333333333333333
    },
    "HS504": {
        "Code": "HS504",
        "Name": "Western Philosophy in the Time of Crisis",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Arun A. Iyer"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.3939393939393939
    },
    "HS506": {
        "Code": "HS506",
        "Name": "Writing and Research in Philosophy",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Mrinal Kaul"
        ],
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.4827586206896552
    },
    "HS551": {
        "Code": "HS551",
        "Name": "Introduction to Feminist Philosophy",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Amrita Banerjee"
        ],
        "Division": "",
        "total": 12,
        "AAAB_avg": 0.5833333333333334
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
        "Division": "",
        "total": 27,
        "AAAB_avg": 0.4074074074074074
    },
    "HS598": {
        "Code": "HS598",
        "Name": "Project Stage II",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Pravesh Jung Golay"
        ],
        "Division": "",
        "total": 18,
        "AAAB_avg": 0.7222222222222222
    },
    "HS618": {
        "Code": "HS618",
        "Name": "Introduction to Indian Astronomy",
        "Venue": "Class Room : LC 302",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " K. Ramasubramanian"
        ],
        "Division": "",
        "total": 125,
        "AAAB_avg": 0.232
    },
    "HS621": {
        "Code": "HS621",
        "Name": "Contemporary Indian Philosophy",
        "Venue": "Class Room : IC 3",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Ratikanta Panda"
        ],
        "Division": "",
        "total": 187,
        "AAAB_avg": 0.39037433155080214
    },
    "HS624": {
        "Code": "HS624",
        "Name": "Contemporary Issues in Philosophy of Mind",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Rajkishore Nath"
        ],
        "Division": "",
        "total": 163,
        "AAAB_avg": 0.4049079754601227
    },
    "HS629": {
        "Code": "HS629",
        "Name": "Ecology and Society",
        "Venue": "Class Room : LT 006",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Sarmistha Pattanaik"
        ],
        "Division": "",
        "total": 165,
        "AAAB_avg": 0.44242424242424244
    },
    "HS634": {
        "Code": "HS634",
        "Name": "Theories of Verbal Congnition (Shaabdabodha)",
        "Venue": "Class Room : LT 306",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Kulkarni A Malhar"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.6363636363636364
    },
    "HS640": {
        "Code": "HS640",
        "Name": "Civil Society: Its Foundations and Future",
        "Venue": "HS-130-C : Class Room",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Suryakant Waghmore"
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.38095238095238093
    },
    "HS643": {
        "Code": "HS643",
        "Name": "Sociology of Infrastructure",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Raile Rocky Ziipao"
        ],
        "Division": "",
        "total": 40,
        "AAAB_avg": 0.475
    },
    "HS650": {
        "Code": "HS650",
        "Name": "Research Methods: Expository Writing & Analysis",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sharmila"
        ],
        "Division": ""
    },
    "HS654": {
        "Code": "HS654",
        "Name": "Performance Historiography and Documentation",
        "Venue": "Class Room : LC 002",
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
        "Venue": "Class Room : LT 003",
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
        "Venue": "Class Room : LT 202",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Anush Kapadia"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 1.0
    },
    "HS662": {
        "Code": "HS662",
        "Name": "Indian Society",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Ramesh Bairy"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.375
    },
    "HS666": {
        "Code": "HS666",
        "Name": "Quantitative Methods in Social Sciences",
        "Venue": "Class Room : LT 103",
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
        "Venue": "Class Room : LT 004",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " A. Khan"
        ],
        "Division": "",
        "total": 86,
        "AAAB_avg": 0.27906976744186046
    },
    "HS804": {
        "Code": "HS804",
        "Name": "Advanced Theory of Society",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Robinson Rowena",
            " Ahonaa Roy"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.6285714285714286
    },
    "HS805": {
        "Code": "HS805",
        "Name": "Theory of Knowledge",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Vikram Singh Sirola"
        ],
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.4583333333333333
    },
    "HS811": {
        "Code": "HS811",
        "Name": "Literary Theory",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Sharmila"
        ],
        "Division": "",
        "total": 19,
        "AAAB_avg": 0.6842105263157895
    },
    "HS818": {
        "Code": "HS818",
        "Name": "Sociology of Social Stratification in India",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Ilito H. Achumi"
        ],
        "Division": "",
        "total": 12,
        "AAAB_avg": 0.6666666666666666
    },
    "HS828": {
        "Code": "HS828",
        "Name": "Phillosophical Points of View & Major Thinkers",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Pravesh Jung Golay"
        ],
        "Division": "",
        "total": 28,
        "AAAB_avg": 0.4642857142857143
    },
    "HS840": {
        "Code": "HS840",
        "Name": "Paninian Grammar",
        "Venue": "Class Room : LT 303",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Kulkarni A Malhar"
        ],
        "Division": "",
        "total": 5,
        "AAAB_avg": 1.0
    },
    "HS845": {
        "Code": "HS845",
        "Name": "Indian Logic",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " K. Ramasubramanian"
        ],
        "Division": "",
        "total": 20,
        "AAAB_avg": 0.5
    },
    "HS852": {
        "Code": "HS852",
        "Name": "Topics in Syntax and Semantics",
        "Venue": "Class Room : LT 104",
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
        "Venue": "Class Room : LT 004",
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
        "Venue": "Class Room : LT 204",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Naina Manjrekar"
        ],
        "Division": "",
        "total": 15,
        "AAAB_avg": 0.4666666666666667
    },
    "HS864": {
        "Code": "HS864",
        "Name": "Advanced Topics in Science and Technology Studies",
        "Venue": "Class Room : LT 104",
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
        "Venue": "Class Room : LT 102",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Ilito H. Achumi",
            " K. Ramasubramanian",
            " Mrinmoyi Kulkarni",
            " Naina Manjrekar",
            " Pooja Purang",
            " Ramesh Bairy",
            " Sharmila",
            " Smriti Haricharan",
            " Suryakant Waghmore",
            " Vibhushan Subba",
            " Amrita Banerjee"
        ],
        "Division": "",
        "total": 132,
        "AAAB_avg": 0.0
    },
    "HSS802": {
        "Code": "HSS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Rajkishore Nath"
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.8088235294117647
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
        "Division": "",
        "total": 140,
        "AAAB_avg": 0.7357142857142858
    },
    "DE106": {
        "Code": "DE106",
        "Name": "Typography Fundamentals and Exploratory Printing",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " G.V.Sreekumar"
        ],
        "Division": "",
        "total": 141,
        "AAAB_avg": 0.7375886524822695
    },
    "DE107": {
        "Code": "DE107",
        "Name": "A Study of the Power of Words",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sampurna Chattarji"
        ],
        "Division": "",
        "total": 98,
        "AAAB_avg": 0.12244897959183673
    },
    "DE108": {
        "Code": "DE108",
        "Name": "Exploration in Drawing, Tonalities",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Amitesh Sant Shrivastava"
        ],
        "Division": "",
        "total": 138,
        "AAAB_avg": 0.26811594202898553
    },
    "DE109-S1": {
        "Code": "DE109-S1",
        "Name": "Introduction to Design",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "3B",
            "5A"
        ],
        "Instructors": [
            " Swati Agarwal"
        ],
        "Division": "S1",
        "total": 453,
        "AAAB_avg": 0.3841059602649007
    },
    "DE109-S2": {
        "Code": "DE109-S2",
        "Name": "Introduction to Design",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "3C",
            "X3"
        ],
        "Instructors": [
            " Bapat V.P."
        ],
        "Division": "S2",
        "total": 385,
        "AAAB_avg": 0.4051948051948052
    },
    "DE110": {
        "Code": "DE110",
        "Name": "Form Exploration in Pottery",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mohanty Raja"
        ],
        "Division": "",
        "total": 40,
        "AAAB_avg": 0.075
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
        "Division": "",
        "total": 109,
        "AAAB_avg": 0.3577981651376147
    },
    "DE129": {
        "Code": "DE129",
        "Name": "Introduction to Weaving",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Latha Tummuru"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.6875
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
        "Division": "",
        "total": 112,
        "AAAB_avg": 0.3482142857142857
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
        "Division": "",
        "total": 93,
        "AAAB_avg": 0.3548387096774194
    },
    "DE204": {
        "Code": "DE204",
        "Name": "3D Form Studies II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Korjan"
        ],
        "Division": "",
        "total": 41,
        "AAAB_avg": 0.5609756097560976
    },
    "DE206": {
        "Code": "DE206",
        "Name": "Communication Theories, Visual Perception and Semiotics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mandar S.Rane"
        ],
        "Division": "",
        "total": 133,
        "AAAB_avg": 0.5714285714285714
    },
    "DE208": {
        "Code": "DE208",
        "Name": "Design, Storytelling and Narratives",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Aditi Chitre"
        ],
        "Division": "",
        "total": 138,
        "AAAB_avg": 0.5869565217391305
    },
    "DE210": {
        "Code": "DE210",
        "Name": "Understanding Human Anatomy",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Amitesh Sant Shrivastava"
        ],
        "Division": "",
        "total": 108,
        "AAAB_avg": 0.26851851851851855
    },
    "DE212": {
        "Code": "DE212",
        "Name": "Ceramic Glazes and Colour Development",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mohanty Raja"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.2727272727272727
    },
    "DE214": {
        "Code": "DE214",
        "Name": "Writing by Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sampurna Chattarji"
        ],
        "Division": "",
        "total": 5,
        "AAAB_avg": 0.0
    },
    "DE216": {
        "Code": "DE216",
        "Name": "Classics of  Popular Indian Cinema",
        "Venue": "Class : CL 103 ESE",
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
        "Venue": "Class : CL 103 ESE",
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
        "Division": "",
        "total": 105,
        "AAAB_avg": 0.5619047619047619
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
        "Division": "",
        "total": 103,
        "AAAB_avg": 0.33980582524271846
    },
    "DE250-S1": {
        "Code": "DE250-S1",
        "Name": "Design Thinking for Innovation",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
            " P.Sunthar",
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
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.6304347826086957
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
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.17647058823529413
    },
    "DE313": {
        "Code": "DE313",
        "Name": "3D Modeling and Prototyping",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Shilpa Ranade"
        ],
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.625
    },
    "DE314": {
        "Code": "DE314",
        "Name": "Game Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Prasad Bokil"
        ],
        "Division": "",
        "total": 42,
        "AAAB_avg": 0.4523809523809524
    },
    "DE315": {
        "Code": "DE315",
        "Name": "Applied Ergonomics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Swati Pal"
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
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.4827586206896552
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
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.6086956521739131
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
        "Division": "",
        "total": 19,
        "AAAB_avg": 0.47368421052631576
    },
    "DE326": {
        "Code": "DE326",
        "Name": "Introduction to Video Content Creation",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Bharat Chhitubhai Parmar"
        ],
        "Division": ""
    },
    "DE332": {
        "Code": "DE332",
        "Name": "Design Management, Planning and Professional Practice",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Pankaj Jhunja",
            " Abhishek Verma"
        ],
        "Division": "",
        "total": 123,
        "AAAB_avg": 0.5528455284552846
    },
    "DE403-M": {
        "Code": "DE403-M",
        "Name": "Studio Project I",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mohanty Raja"
        ],
        "Division": "M"
    },
    "DE405-M": {
        "Code": "DE405-M",
        "Name": "Studio Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mohanty Raja"
        ],
        "Division": "M"
    },
    "DE602": {
        "Code": "DE602",
        "Name": "Product Interface Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " P Kumaresan"
        ],
        "Division": "",
        "total": 59,
        "AAAB_avg": 0.7457627118644068
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
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.5172413793103449
    },
    "DE606": {
        "Code": "DE606",
        "Name": "Studies in Form II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " P Kumaresan"
        ],
        "Division": "",
        "total": 59,
        "AAAB_avg": 0.7796610169491526
    },
    "DE608": {
        "Code": "DE608",
        "Name": "Product Design -2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " R. Sandesh"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.7555555555555555
    },
    "DE612": {
        "Code": "DE612",
        "Name": "Design Issues",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Poovaiah Ravi"
        ],
        "Division": "",
        "total": 272,
        "AAAB_avg": 0.34191176470588236
    },
    "DE614": {
        "Code": "DE614",
        "Name": "Design Workshop",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " G.V.Sreekumar"
        ],
        "Division": "",
        "total": 268,
        "AAAB_avg": 0.6753731343283582
    },
    "DE616": {
        "Code": "DE616",
        "Name": "Introduction to User Studies",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Girish V. Dalvi"
        ],
        "Division": "",
        "total": 61,
        "AAAB_avg": 0.32786885245901637
    },
    "DE618": {
        "Code": "DE618",
        "Name": "Semantics and Communication Theory",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mandar S.Rane"
        ],
        "Division": "",
        "total": 102,
        "AAAB_avg": 0.7058823529411765
    },
    "DE624": {
        "Code": "DE624",
        "Name": "Introduction to Film Making",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sudesh Balan"
        ],
        "Division": "",
        "total": 105,
        "AAAB_avg": 0.7904761904761904
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
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.5454545454545454
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
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.8478260869565217
    },
    "DE632": {
        "Code": "DE632",
        "Name": "Acting and Staging",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sumant Rao"
        ],
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.5106382978723404
    },
    "DE634": {
        "Code": "DE634",
        "Name": "Digital Animation 2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sumant Rao"
        ],
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.44680851063829785
    },
    "DE636": {
        "Code": "DE636",
        "Name": "Animation Theory-2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Abhishek Verma"
        ],
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.46808510638297873
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
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.574468085106383
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
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.5142857142857142
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
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.625
    },
    "DE644": {
        "Code": "DE644",
        "Name": "Exposure to Grid System in Visual Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mandar S.Rane"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.8409090909090909
    },
    "DE646": {
        "Code": "DE646",
        "Name": "CAID Modeling for Automotive Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sugandh Malhotra"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.5
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
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.53125
    },
    "DE650": {
        "Code": "DE650",
        "Name": "Studies in 3D Form",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Unni Mohan Mohanan"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.7111111111111111
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
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.6764705882352942
    },
    "DE654": {
        "Code": "DE654",
        "Name": "Sketching-2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " P Kumaresan"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.9655172413793104
    },
    "DE656": {
        "Code": "DE656",
        "Name": "Model Making-2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Unni Mohan Mohanan"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6363636363636364
    },
    "DE660": {
        "Code": "DE660",
        "Name": "Graphic Narratives",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Aditi Chitre"
        ],
        "Division": "",
        "total": 57,
        "AAAB_avg": 0.5789473684210527
    },
    "DE666": {
        "Code": "DE666",
        "Name": "Craft Creativity and Post Modernism",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " R. Sandesh"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.8181818181818182
    },
    "DE676": {
        "Code": "DE676",
        "Name": "Rendering for Mobility Design ",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sugandh Malhotra"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.36363636363636365
    },
    "DE680": {
        "Code": "DE680",
        "Name": "Product Detailing",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Avinash Shende"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.782608695652174
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
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.9166666666666666
    },
    "DE686": {
        "Code": "DE686",
        "Name": "Handmade Character Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Arun Mascarenhas"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.16666666666666666
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
        "Division": "",
        "total": 158,
        "AAAB_avg": 0.7341772151898734
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
        "Division": "",
        "total": 99,
        "AAAB_avg": 0.4444444444444444
    },
    "DE725": {
        "Code": "DE725",
        "Name": "Designing Games for Children",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Prasad Bokil"
        ],
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.8125
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
        "Division": "",
        "total": 110,
        "AAAB_avg": 0.38181818181818183
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
        "Division": "",
        "total": 97,
        "AAAB_avg": 0.6597938144329897
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
        "Division": "",
        "total": 135,
        "AAAB_avg": 0.37777777777777777
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
        "Division": "",
        "total": 82,
        "AAAB_avg": 0.3780487804878049
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
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.4411764705882353
    },
    "DEP504": {
        "Code": "DEP504",
        "Name": "Design Research Project-Part II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Girish V. Dalvi",
            " R. Sandesh",
            " Sugandh Malhotra",
            " Sumant Rao",
            " Mazhar Kamran"
        ],
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.53125
    },
    "DEP602": {
        "Code": "DEP602",
        "Name": "Communication Design Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Mazhar Kamran"
        ],
        "Division": "",
        "total": 61,
        "AAAB_avg": 0.819672131147541
    },
    "DEP703": {
        "Code": "DEP703",
        "Name": "M.Des. Project- 3",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Girish V. Dalvi",
            " Mazhar Kamran",
            " Sugandh Malhotra",
            " Sumant Rao",
            " R. Sandesh"
        ],
        "Division": "",
        "total": 259,
        "AAAB_avg": 0.5752895752895753
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
        "Division": "",
        "total": 107,
        "AAAB_avg": 0.48598130841121495
    },
    "IE504": {
        "Code": "IE504",
        "Name": "Service and Infrastructure Systems",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rangaraj Narayan"
        ],
        "Division": "",
        "total": 163,
        "AAAB_avg": 0.37423312883435583
    },
    "IE504-M": {
        "Code": "IE504-M",
        "Name": "Service and Infrastructure Systems",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rangaraj Narayan"
        ],
        "Division": "M",
        "total": 35,
        "AAAB_avg": 0.34285714285714286
    },
    "IE506": {
        "Code": "IE506",
        "Name": "Machine Learning: Principles and Techniques",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " P. Balamurugan"
        ],
        "Division": "",
        "total": 115,
        "AAAB_avg": 0.06086956521739131
    },
    "IE607": {
        "Code": "IE607",
        "Name": "Polyhedra and Combinatorial Optimization",
        "Venue": "Class : CL 104 ESE",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " V. Narayanan"
        ],
        "Division": ""
    },
    "IE612": {
        "Code": "IE612",
        "Name": "Introduction to Financial Engineering",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " K.S.Mallikarjuna Rao"
        ],
        "Division": "",
        "total": 68,
        "AAAB_avg": 0.5
    },
    "IE614": {
        "Code": "IE614",
        "Name": "Linear Systems",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Veeraruna Kavitha"
        ],
        "Division": "",
        "total": 120,
        "AAAB_avg": 0.31666666666666665
    },
    "IE616": {
        "Code": "IE616",
        "Name": "Decision Analysis and Game Theory",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Veeraruna Kavitha",
            " Urban Larsson"
        ],
        "Division": "",
        "total": 240,
        "AAAB_avg": 0.1875
    },
    "IE616-M": {
        "Code": "IE616-M",
        "Name": "Decision Analysis and Game Theory",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Veeraruna Kavitha",
            " Urban Larsson"
        ],
        "Division": "M",
        "total": 120,
        "AAAB_avg": 0.24166666666666667
    },
    "IE620": {
        "Code": "IE620",
        "Name": "Reinforcement Learning Algorithms",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " N. Hemachandra"
        ],
        "Division": ""
    },
    "IE620-M": {
        "Code": "IE620-M",
        "Name": "Reinforcement Learning Algorithms",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " N. Hemachandra"
        ],
        "Division": "M"
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
        "Division": "",
        "total": 75,
        "AAAB_avg": 0.22666666666666666
    },
    "IE622-M": {
        "Code": "IE622-M",
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
        "Division": "M",
        "total": 13,
        "AAAB_avg": 0.23076923076923078
    },
    "IE630": {
        "Code": "IE630",
        "Name": "Simulation Modeling and Analysis",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " J. Venkateswaran"
        ],
        "Division": "",
        "total": 159,
        "AAAB_avg": 0.33962264150943394
    },
    "IE630-M": {
        "Code": "IE630-M",
        "Name": "Simulation Modeling and Analysis",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " J. Venkateswaran"
        ],
        "Division": "M",
        "total": 66,
        "AAAB_avg": 0.18181818181818182
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
        "Division": "",
        "total": 144,
        "AAAB_avg": 0.7013888888888888
    },
    "IE686": {
        "Code": "IE686",
        "Name": "MSc.Phd. Research Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Manjesh K. Hanawal"
        ],
        "Division": "",
        "total": 11,
        "AAAB_avg": 0.5454545454545454
    },
    "IE688": {
        "Code": "IE688",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " P. Balamurugan"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.6818181818181818
    },
    "IE694": {
        "Code": "IE694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " P. Balamurugan"
        ],
        "Division": "",
        "total": 108,
        "AAAB_avg": 0.39814814814814814
    },
    "IE709": {
        "Code": "IE709",
        "Name": "IEOR for Health Care",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Ashutosh Mahajan"
        ],
        "Division": "",
        "total": 64,
        "AAAB_avg": 0.390625
    },
    "IE709-M": {
        "Code": "IE709-M",
        "Name": "IEOR for Health Care",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Ashutosh Mahajan"
        ],
        "Division": "M",
        "total": 10,
        "AAAB_avg": 0.2
    },
    "IE710": {
        "Code": "IE710",
        "Name": "OR Applications in Infrastructural and Service Sectors",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rangaraj Narayan"
        ],
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.38461538461538464
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
        "Division": "",
        "total": 92,
        "AAAB_avg": 0.0
    },
    "IES601": {
        "Code": "IES601",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " V. Narayanan"
        ],
        "Division": "",
        "total": 53,
        "AAAB_avg": 0.4339622641509434
    },
    "IES802": {
        "Code": "IES802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Ashutosh Mahajan"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.5
    },
    "MA106-D1": {
        "Code": "MA106-D1",
        "Name": "Linear Algebra",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Ananthnarayan Hariharan"
        ],
        "Division": "D1"
    },
    "MA106-D2": {
        "Code": "MA106-D2",
        "Name": "Linear Algebra",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rekha Santhanam"
        ],
        "Division": "D2"
    },
    "MA106-D3": {
        "Code": "MA106-D3",
        "Name": "Linear Algebra",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Rekha Santhanam"
        ],
        "Division": "D3"
    },
    "MA106-D4": {
        "Code": "MA106-D4",
        "Name": "Linear Algebra",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Ananthnarayan Hariharan"
        ],
        "Division": "D4"
    },
    "MA108-D1": {
        "Code": "MA108-D1",
        "Name": "Differential Equations",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " K. Sureshkumar"
        ],
        "Division": "D1"
    },
    "MA108-D2": {
        "Code": "MA108-D2",
        "Name": "Differential Equations",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " K. Sureshkumar"
        ],
        "Division": "D2"
    },
    "MA108-D3": {
        "Code": "MA108-D3",
        "Name": "Differential Equations",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Santanu Dey"
        ],
        "Division": "D3"
    },
    "MA108-D4": {
        "Code": "MA108-D4",
        "Name": "Differential Equations",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Santanu Dey"
        ],
        "Division": "D4"
    },
    "MA110-D1-tut": {
        "Code": "MA110-D1-tut",
        "Name": "Linear Algebra and Differential Equations",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "X2"
        ],
        "Instructors": [
            "  ",
            " Santanu Mukti DeyI ",
            "  ",
            " Ananthnarayan  HariharanI ",
            "  ",
            " K.  SureshkumarI ",
            "  ",
            " Rekha  Santhanam"
        ],
        "Division": "D1"
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
    "MA110-D2-tut": {
        "Code": "MA110-D2-tut",
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
    "MA110-D2": {
        "Code": "MA110-D2",
        "Name": "Linear Algebra and Differential Equations",
        "Venue": "Class Room : LA 201",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rekha Santhanam",
            " Santanu Dey",
            " Ananthnarayan Hariharan",
            " K. Sureshkumar"
        ],
        "Division": "D2"
    },
    "MA110-D3-tut": {
        "Code": "MA110-D3-tut",
        "Name": "Linear Algebra and Differential Equations",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "XC"
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
        "Division": "D3"
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
    "MA110-D4-tut": {
        "Code": "MA110-D4-tut",
        "Name": "Linear Algebra and Differential Equations",
        "Venue": "Class Room : LT 206",
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
    "MA110-D4": {
        "Code": "MA110-D4",
        "Name": "Linear Algebra and Differential Equations",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rekha Santhanam",
            " Santanu Dey",
            " Ananthnarayan Hariharan",
            " K. Sureshkumar"
        ],
        "Division": "D4"
    },
    "MA214-tut": {
        "Code": "MA214-tut",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "XC"
        ],
        "Instructors": [
            " ",
            " Sudarshan Rajendra Gurjar"
        ],
        "Division": "",
        "total": 1495,
        "AAAB_avg": 0.23411371237458195
    },
    "MA214": {
        "Code": "MA214",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class Room : LH 301",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Sudarshan Gurjar"
        ],
        "Division": "",
        "total": 2,
        "AAAB_avg": 0.0
    },
    "MA406": {
        "Code": "MA406",
        "Name": "General Topology",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Chandan Biswas"
        ],
        "Division": "",
        "total": 169,
        "AAAB_avg": 0.28994082840236685
    },
    "MA408": {
        "Code": "MA408",
        "Name": "Measure Theory",
        "Venue": "Class Room - 216",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Mallesham Kummari"
        ],
        "Division": "",
        "total": 181,
        "AAAB_avg": 0.20994475138121546
    },
    "MA408-tut": {
        "Code": "MA408-tut",
        "Name": "Measure Theory",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "XC"
        ],
        "Instructors": [
            " Mallesham Kummari"
        ],
        "Division": "",
        "total": 182,
        "AAAB_avg": 0.21428571428571427
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
        "Division": "",
        "total": 177,
        "AAAB_avg": 0.3446327683615819
    },
    "MA412-tut": {
        "Code": "MA412-tut",
        "Name": "Complex Analysis",
        "Venue": "Class Room - 216",
        "Slots": [
            "X3"
        ],
        "Instructors": [
            " ",
            " Shripad Manoharrao Garge"
        ],
        "Division": "",
        "total": 224,
        "AAAB_avg": 0.35714285714285715
    },
    "MA412": {
        "Code": "MA412",
        "Name": "Complex Analysis",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Garge Shripad M."
        ],
        "Division": "",
        "total": 196,
        "AAAB_avg": 0.35714285714285715
    },
    "MA412-M-tut": {
        "Code": "MA412-M-tut",
        "Name": "Complex Analysis",
        "Venue": "Class Room - 113",
        "Slots": [
            "XD"
        ],
        "Instructors": [
            "  ",
            " Sandip  Singh"
        ],
        "Division": "M",
        "total": 224,
        "AAAB_avg": 0.35714285714285715
    },
    "MA412-M": {
        "Code": "MA412-M",
        "Name": "Complex Analysis",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Sandip Singh"
        ],
        "Division": "M",
        "total": 28,
        "AAAB_avg": 0.35714285714285715
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
        "Division": "",
        "total": 171,
        "AAAB_avg": 0.0935672514619883
    },
    "MA414-tut": {
        "Code": "MA414-tut",
        "Name": "Algebra I",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "14A"
        ],
        "Instructors": [
            " Saurav Bhaumik"
        ],
        "Division": "",
        "total": 171,
        "AAAB_avg": 0.0935672514619883
    },
    "MA504": {
        "Code": "MA504",
        "Name": "Operators on Hilbert Spaces",
        "Venue": "Class Room - 113",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Bata K. Das"
        ],
        "Division": "",
        "total": 52,
        "AAAB_avg": 0.28846153846153844
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
        "Division": "",
        "total": 16,
        "AAAB_avg": 0.5625
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
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.5714285714285714
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
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.1791044776119403
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
        "Division": "M",
        "total": 12,
        "AAAB_avg": 0.16666666666666666
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
        "Division": "",
        "total": 28,
        "AAAB_avg": 0.4642857142857143
    },
    "MA5110": {
        "Code": "MA5110",
        "Name": "Non-commutative Algebra",
        "Venue": "Class Room - 216",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Garge Shripad M."
        ],
        "Division": "",
        "total": 10,
        "AAAB_avg": 0.2
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
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Verma J.K."
        ],
        "Division": "",
        "total": 41,
        "AAAB_avg": 0.5121951219512195
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
        "Division": "",
        "total": 31,
        "AAAB_avg": 0.4838709677419355
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
        "Division": "",
        "total": 25,
        "AAAB_avg": 0.6
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
        "Division": "",
        "total": 25,
        "AAAB_avg": 0.68
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
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.5172413793103449
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
        "Division": "",
        "total": 3,
        "AAAB_avg": 0.6666666666666666
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
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.5882352941176471
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
        "Division": "",
        "total": 17,
        "AAAB_avg": 1.0
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
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.5217391304347826
    },
    "MA867": {
        "Code": "MA867",
        "Name": "Statistical Modelling- I",
        "Venue": "Class Room - 113",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Radhendushka Srivastava"
        ],
        "Division": "",
        "total": 9,
        "AAAB_avg": 0.7777777777777778
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
        "Division": "",
        "total": 161,
        "AAAB_avg": 0.2360248447204969
    },
    "SI404-tut": {
        "Code": "SI404-tut",
        "Name": "Applied Stochastic Processes",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "7A"
        ],
        "Instructors": [
            " Koushik Saha"
        ],
        "Division": "",
        "total": 180,
        "AAAB_avg": 0.2833333333333333
    },
    "SI416": {
        "Code": "SI416",
        "Name": "Optimization",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Harsha Hutridurga Ramaiah"
        ],
        "Division": "",
        "total": 267,
        "AAAB_avg": 0.23220973782771537
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
        "Division": "",
        "total": 146,
        "AAAB_avg": 0.23972602739726026
    },
    "SI422-tut": {
        "Code": "SI422-tut",
        "Name": "Regression Analysis",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "XD"
        ],
        "Instructors": [
            " S. Mukhopadhyay"
        ],
        "Division": "",
        "total": 194,
        "AAAB_avg": 0.29896907216494845
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
        "Division": "M",
        "total": 48,
        "AAAB_avg": 0.4791666666666667
    },
    "SI424-tut": {
        "Code": "SI424-tut",
        "Name": "Statistical Inference I",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "14A"
        ],
        "Instructors": [
            " Vellaisamy P."
        ],
        "Division": "",
        "total": 101,
        "AAAB_avg": 0.18811881188118812
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
        "Division": "",
        "total": 78,
        "AAAB_avg": 0.14102564102564102
    },
    "SI426": {
        "Code": "SI426",
        "Name": "Algorithms",
        "Venue": "Class Room - 114",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Madhusudan Manjunath"
        ],
        "Division": "",
        "total": 86,
        "AAAB_avg": 0.19767441860465115
    },
    "SI426-tut": {
        "Code": "SI426-tut",
        "Name": "Algorithms",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "X3"
        ],
        "Instructors": [
            " Madhusudan Manjunath"
        ],
        "Division": "",
        "total": 86,
        "AAAB_avg": 0.19767441860465115
    },
    "SI509-tut": {
        "Code": "SI509-tut",
        "Name": "Time Series Analysis",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "7B"
        ],
        "Instructors": [
            " "
        ],
        "Division": "",
        "total": 132,
        "AAAB_avg": 0.1893939393939394
    },
    "SI509": {
        "Code": "SI509",
        "Name": "Time Series Analysis",
        "Venue": "Class Room - 114",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Sabnis S.V."
        ],
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.19083969465648856
    },
    "SI526": {
        "Code": "SI526",
        "Name": "Experimental Designs",
        "Venue": "Class Room - 216",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Ashish Das"
        ],
        "Division": "",
        "total": 128,
        "AAAB_avg": 0.734375
    },
    "SI527": {
        "Code": "SI527",
        "Name": "Introduction to Derivative Pricing",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " S.Baskar"
        ],
        "Division": "",
        "total": 120,
        "AAAB_avg": 0.175
    },
    "SI527-M": {
        "Code": "SI527-M",
        "Name": "Introduction to Derivative Pricing",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " S.Baskar"
        ],
        "Division": "M",
        "total": 43,
        "AAAB_avg": 0.3488372093023256
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
        "Division": "",
        "total": 127,
        "AAAB_avg": 0.5039370078740157
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
        "Division": "",
        "total": 37,
        "AAAB_avg": 0.40540540540540543
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
        "Division": "S1",
        "total": 121,
        "AAAB_avg": 0.4297520661157025
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
        "Division": "S2",
        "total": 77,
        "AAAB_avg": 0.4025974025974026
    },
    "ME213-S1": {
        "Code": "ME213-S1",
        "Name": "Manufacturing Practice Lab",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Amber Shrivastava"
        ],
        "Division": "S1",
        "total": 98,
        "AAAB_avg": 0.9795918367346939
    },
    "ME213-S2": {
        "Code": "ME213-S2",
        "Name": "Manufacturing Practice Lab",
        "Venue": "",
        "Slots": [
            "L2"
        ],
        "Instructors": [
            " Amber Shrivastava"
        ],
        "Division": "S2",
        "total": 120,
        "AAAB_avg": 0.9916666666666667
    },
    "ME213-S3": {
        "Code": "ME213-S3",
        "Name": "Manufacturing Practice Lab",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Amber Shrivastava"
        ],
        "Division": "S3",
        "total": 130,
        "AAAB_avg": 0.9923076923076923
    },
    "ME219-S1": {
        "Code": "ME219-S1",
        "Name": "Fluid Mechanics",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Neeraj Kumbhakarna"
        ],
        "Division": "S1",
        "total": 300,
        "AAAB_avg": 0.34
    },
    "ME219-S2": {
        "Code": "ME219-S2",
        "Name": "Fluid Mechanics",
        "Venue": "Class Room - IC1",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Avishek Ranjan"
        ],
        "Division": "S2",
        "total": 306,
        "AAAB_avg": 0.35947712418300654
    },
    "ME219-S3": {
        "Code": "ME219-S3",
        "Name": "Fluid Mechanics",
        "Venue": "Class Room : IC 3",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Shivasubramanian Gopalakrishnan"
        ],
        "Division": "S3",
        "total": 204,
        "AAAB_avg": 0.31862745098039214
    },
    "ME224-S1": {
        "Code": "ME224-S1",
        "Name": "Fluid Mechanics Lab",
        "Venue": "",
        "Slots": [
            "L2"
        ],
        "Instructors": [
            " Avishek Ranjan",
            " Shivasubramanian Gopalakrishnan",
            " Neeraj Kumbhakarna"
        ],
        "Division": "S1",
        "total": 94,
        "AAAB_avg": 0.010638297872340425
    },
    "ME224-S2": {
        "Code": "ME224-S2",
        "Name": "Fluid Mechanics Lab",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " Avishek Ranjan",
            " Shivasubramanian Gopalakrishnan",
            " Neeraj Kumbhakarna"
        ],
        "Division": "S2",
        "total": 159,
        "AAAB_avg": 0.4716981132075472
    },
    "ME224-S3": {
        "Code": "ME224-S3",
        "Name": "Fluid Mechanics Lab",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Avishek Ranjan",
            " Shivasubramanian Gopalakrishnan",
            " Neeraj Kumbhakarna"
        ],
        "Division": "S3",
        "total": 51,
        "AAAB_avg": 0.8235294117647058
    },
    "ME226": {
        "Code": "ME226",
        "Name": "Mechanical Measurements",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Amit Agrawal"
        ],
        "Division": "",
        "total": 640,
        "AAAB_avg": 0.275
    },
    "ME228-S1": {
        "Code": "ME228-S1",
        "Name": "Applied Data Science and Machine Learning",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Alankar Alankar"
        ],
        "Division": "S1"
    },
    "ME228-S2": {
        "Code": "ME228-S2",
        "Name": "Applied Data Science and Machine Learning",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Shyamprasad Karagadde"
        ],
        "Division": "S2"
    },
    "ME230-M": {
        "Code": "ME230-M",
        "Name": "Mechanical Processing of Materials",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " De Amitava"
        ],
        "Division": "M"
    },
    "ME230-S1": {
        "Code": "ME230-S1",
        "Name": "Mechanical Processing of Materials",
        "Venue": "Class Room : LC 301",
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
    "ME230-S2": {
        "Code": "ME230-S2",
        "Name": "Mechanical Processing of Materials",
        "Venue": "Class Room : LC 302",
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
    "ME230-S3": {
        "Code": "ME230-S3",
        "Name": "Mechanical Processing of Materials",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " De Amitava"
        ],
        "Division": "S3"
    },
    "ME232-M": {
        "Code": "ME232-M",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Amit Singh"
        ],
        "Division": "M"
    },
    "ME232-S1": {
        "Code": "ME232-S1",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Amit Singh"
        ],
        "Division": "S1"
    },
    "ME232-S2": {
        "Code": "ME232-S2",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Seshu P."
        ],
        "Division": "S2"
    },
    "ME306-S1": {
        "Code": "ME306-S1",
        "Name": "Applied Thermodynamics",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " M.D.Atrey"
        ],
        "Division": "S1",
        "total": 146,
        "AAAB_avg": 0.1506849315068493
    },
    "ME306-S2": {
        "Code": "ME306-S2",
        "Name": "Applied Thermodynamics",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Upendra Bhandarkar"
        ],
        "Division": "S2",
        "total": 152,
        "AAAB_avg": 0.17763157894736842
    },
    "ME306-S3": {
        "Code": "ME306-S3",
        "Name": "Applied Thermodynamics",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Shankar Krishnan"
        ],
        "Division": "S3",
        "total": 77,
        "AAAB_avg": 0.2727272727272727
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
        "Division": "S1",
        "total": 229,
        "AAAB_avg": 0.8078602620087336
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
        "Division": "S2",
        "total": 134,
        "AAAB_avg": 0.7388059701492538
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
        "Division": "S3",
        "total": 103,
        "AAAB_avg": 0.6310679611650486
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
        "Division": "S4",
        "total": 102,
        "AAAB_avg": 0.7352941176470589
    },
    "ME312": {
        "Code": "ME312",
        "Name": "Operations Modeling and Analysis",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Avinash Bhardwaj"
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
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.8958333333333334
    },
    "ME316-M": {
        "Code": "ME316-M",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Abhishek Gupta"
        ],
        "Division": "M",
        "total": 6,
        "AAAB_avg": 0.16666666666666666
    },
    "ME316-S1": {
        "Code": "ME316-S1",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LH 102",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Tanmay K. Bhandakkar"
        ],
        "Division": "S1",
        "total": 207,
        "AAAB_avg": 0.24154589371980675
    },
    "ME316-S2": {
        "Code": "ME316-S2",
        "Name": "Kinematics and Dynamics of Machines",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Abhishek Gupta"
        ],
        "Division": "S2",
        "total": 142,
        "AAAB_avg": 0.24647887323943662
    },
    "ME370-S1": {
        "Code": "ME370-S1",
        "Name": "Kinematics and Dynamics of Machines Lab",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Guha Anirban",
            " Salil Kulkarni"
        ],
        "Division": "S1",
        "total": 160,
        "AAAB_avg": 0.79375
    },
    "ME370-S2": {
        "Code": "ME370-S2",
        "Name": "Kinematics and Dynamics of Machines Lab",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " Guha Anirban"
        ],
        "Division": "S2",
        "total": 164,
        "AAAB_avg": 0.7682926829268293
    },
    "ME372-S1": {
        "Code": "ME372-S1",
        "Name": "Heat Transfer and Metrology Lab",
        "Venue": "",
        "Slots": [
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
        "Division": "S1",
        "total": 308,
        "AAAB_avg": 0.7305194805194806
    },
    "ME372-S2": {
        "Code": "ME372-S2",
        "Name": "Heat Transfer and Metrology Lab",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Arunkumar Sridharan",
            " Gurminder Singh",
            " Rakesh G. Mote",
            " Sandip Kumar Saha",
            " Vedula R.P.",
            " Bhalchandra Puranik"
        ],
        "Division": "S2",
        "total": 268,
        "AAAB_avg": 0.6753731343283582
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
        "Division": "",
        "total": 65,
        "AAAB_avg": 0.5384615384615384
    },
    "ME415": {
        "Code": "ME415",
        "Name": "Computational Fluid Dynamics and Heat Transfer",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Sharma Atul"
        ],
        "Division": "",
        "total": 190,
        "AAAB_avg": 0.4473684210526316
    },
    "ME420": {
        "Code": "ME420",
        "Name": "Cryogenic Engineering I",
        "Venue": "Class : ME-F24",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " M.D.Atrey"
        ],
        "Division": "",
        "total": 15,
        "AAAB_avg": 0.5333333333333333
    },
    "ME496": {
        "Code": "ME496",
        "Name": "BTP II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Nitesh Yelve"
        ],
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.92
    },
    "ME594": {
        "Code": "ME594",
        "Name": "Dual Degree Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Nitesh Yelve"
        ],
        "Division": "",
        "total": 1,
        "AAAB_avg": 0.0
    },
    "ME6103": {
        "Code": "ME6103",
        "Name": "Ultrafast Lasers: Fundamentals and Applications",
        "Venue": "Class Room : LT 302",
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
    "ME6106": {
        "Code": "ME6106",
        "Name": "Computational Structural Dynamics",
        "Venue": "Class Room : LT 006",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Salil Kulkarni"
        ],
        "Division": "",
        "total": 24,
        "AAAB_avg": 0.3333333333333333
    },
    "ME6114": {
        "Code": "ME6114",
        "Name": "Joint Biomechanics",
        "Venue": "Class Room : LA 001",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Darshan Sunil Shah"
        ],
        "Division": "",
        "total": 191,
        "AAAB_avg": 0.47643979057591623
    },
    "ME6118": {
        "Code": "ME6118",
        "Name": "Spray Theory and Applications",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Abhijeet Kumar"
        ],
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.5714285714285714
    },
    "ME613": {
        "Code": "ME613",
        "Name": "Finite Element and Boundary Element Methods",
        "Venue": "Class Room : LT 001",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " R. Ganesh"
        ],
        "Division": "",
        "total": 102,
        "AAAB_avg": 0.38235294117647056
    },
    "ME616": {
        "Code": "ME616",
        "Name": "Fracture Mechanics",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Krishna Jonnalagadda"
        ],
        "Division": "",
        "total": 91,
        "AAAB_avg": 0.3076923076923077
    },
    "ME639": {
        "Code": "ME639",
        "Name": "Linear Systems Theory",
        "Venue": "Class Room : LT 306",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Vivek Sangwan"
        ],
        "Division": "",
        "total": 33,
        "AAAB_avg": 0.5757575757575758
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
        "Division": "",
        "total": 79,
        "AAAB_avg": 0.6962025316455697
    },
    "ME651": {
        "Code": "ME651",
        "Name": "Fluid Dynamics",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Bhalchandra Puranik"
        ],
        "Division": "",
        "total": 588,
        "AAAB_avg": 0.2976190476190476
    },
    "ME657": {
        "Code": "ME657",
        "Name": "Thermal and Fluids Engg Laboratory",
        "Venue": "Class Room : LT 004",
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
        "Division": "",
        "total": 96,
        "AAAB_avg": 0.4375
    },
    "ME663": {
        "Code": "ME663",
        "Name": "Advanced Heat Transfer",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Arunkumar Sridharan"
        ],
        "Division": "",
        "total": 373,
        "AAAB_avg": 0.3404825737265416
    },
    "ME673": {
        "Code": "ME673",
        "Name": "Mathematical Methods in Engineering",
        "Venue": "Class Room : IC 3",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Vedula R.P."
        ],
        "Division": "",
        "total": 651,
        "AAAB_avg": 0.3225806451612903
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
        "Division": "",
        "total": 43,
        "AAAB_avg": 0.3488372093023256
    },
    "ME678": {
        "Code": "ME678",
        "Name": "Fundamentals of Gas Dynamics",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "2A",
            "2C",
            "2B"
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
            "12A",
            "12B"
        ],
        "Instructors": [
            " M.D.Atrey"
        ],
        "Division": "",
        "total": 82,
        "AAAB_avg": 0.4268292682926829
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
        "Division": "",
        "total": 71,
        "AAAB_avg": 0.4084507042253521
    },
    "ME691": {
        "Code": "ME691",
        "Name": "R & D Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Nitesh Yelve"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 1.0
    },
    "ME712": {
        "Code": "ME712",
        "Name": "Computer Numerical Control and Programming.",
        "Venue": "Class Room : LT 002",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Pande S.S."
        ],
        "Division": "",
        "total": 170,
        "AAAB_avg": 0.5411764705882353
    },
    "ME730": {
        "Code": "ME730",
        "Name": "Ultra-Precision Machining",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Rakesh G. Mote"
        ],
        "Division": "",
        "total": 52,
        "AAAB_avg": 0.4423076923076923
    },
    "ME748": {
        "Code": "ME748",
        "Name": "Computer Aided Simulation of Machines",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Guha Anirban"
        ],
        "Division": "",
        "total": 259,
        "AAAB_avg": 0.37065637065637064
    },
    "ME750": {
        "Code": "ME750",
        "Name": "Sheet Metal Engineering",
        "Venue": "Class Room : LT 304",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Sushil Mishra"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.25
    },
    "ME754": {
        "Code": "ME754",
        "Name": "Textile Machines Design & Automation",
        "Venue": "Class Room : LH 302",
        "Slots": [
            "15B",
            "15A"
        ],
        "Instructors": [
            " Guha Anirban"
        ],
        "Division": "",
        "total": 271,
        "AAAB_avg": 0.28413284132841327
    },
    "ME761": {
        "Code": "ME761",
        "Name": "Advanced Stereology and Microstructural Analysis",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Asim Tewari"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.3620689655172414
    },
    "ME762": {
        "Code": "ME762",
        "Name": "Advanced Engineering Dynamics",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " V. Kartik"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.47368421052631576
    },
    "ME768": {
        "Code": "ME768",
        "Name": "Introduction to Microsystems Packaging",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Pradeep Dixit"
        ],
        "Division": "",
        "total": 6,
        "AAAB_avg": 0.8333333333333334
    },
    "ME769": {
        "Code": "ME769",
        "Name": "Combustion in Automobile and Gas Turbine Engines",
        "Venue": "Class : ME-F24",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Sreedhara Sheshadri"
        ],
        "Division": "",
        "total": 122,
        "AAAB_avg": 0.3360655737704918
    },
    "ME772": {
        "Code": "ME772",
        "Name": "Processing of Aerospace Materials-I",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Amol A. Gokhale"
        ],
        "Division": "",
        "total": 99,
        "AAAB_avg": 0.40404040404040403
    },
    "ME779": {
        "Code": "ME779",
        "Name": "Control Systems",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Manik Dhanesh"
        ],
        "Division": "",
        "total": 29,
        "AAAB_avg": 0.3448275862068966
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
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.5208333333333334
    },
    "ME793": {
        "Code": "ME793",
        "Name": " Multiscale Materials Informatics, Discovery and Design",
        "Venue": "Class Room : LH 301",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Alankar Alankar"
        ],
        "Division": "",
        "total": 153,
        "AAAB_avg": 0.39869281045751637
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
        "Division": "",
        "total": 64,
        "AAAB_avg": 0.40625
    },
    "ME800": {
        "Code": "ME800",
        "Name": "Additive Manufacturing: Design, Processes and Inspection",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Gurminder Singh"
        ],
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.47058823529411764
    },
    "ME802": {
        "Code": "ME802",
        "Name": "Manufacturing Technologies for Electric Mobility",
        "Venue": "Class Room : LT 106",
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
        "Venue": "Class Room : LT 006",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Sandip Kumar Saha"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.034482758620689655
    },
    "MS101-P13": {
        "Code": "MS101-P13",
        "Name": "Makerspace",
        "Venue": "",
        "Slots": [
            "3A",
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
        "Division": "P13",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P14": {
        "Code": "MS101-P14",
        "Name": "Makerspace",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "L1",
            "L3",
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
        "Division": "P14",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P15": {
        "Code": "MS101-P15",
        "Name": "Makerspace",
        "Venue": "",
        "Slots": [
            "3A",
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
        "Division": "P15",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P16": {
        "Code": "MS101-P16",
        "Name": "Makerspace",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "L4",
            "L2",
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
        "Division": "P16",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P19": {
        "Code": "MS101-P19",
        "Name": "Makerspace",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "2A",
            "3A",
            "4A",
            "1C",
            "2C",
            "4C",
            "6A"
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
        "Division": "P19",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P20": {
        "Code": "MS101-P20",
        "Name": "Makerspace",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "2A",
            "3A",
            "4A",
            "1C",
            "2C",
            "4C",
            "6A"
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
        "Division": "P20",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P21": {
        "Code": "MS101-P21",
        "Name": "Makerspace",
        "Venue": "",
        "Slots": [
            "6A",
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
        "Division": "P21",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "MS101-P22": {
        "Code": "MS101-P22",
        "Name": "Makerspace",
        "Venue": "",
        "Slots": [
            "6A",
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
        "Division": "P22",
        "total": 1289,
        "AAAB_avg": 0.5422808378588052
    },
    "IWE701": {
        "Code": "IWE701",
        "Name": "Strategic Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Snehal Awate"
        ],
        "Division": "",
        "total": 130,
        "AAAB_avg": 0.5461538461538461
    },
    "IWE702": {
        "Code": "IWE702",
        "Name": "Organizational Behavior and Design",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 129,
        "AAAB_avg": 0.29457364341085274
    },
    "IWE703": {
        "Code": "IWE703",
        "Name": "Data Modeling and Decisions",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Usha Ananthakumar"
        ],
        "Division": "",
        "total": 129,
        "AAAB_avg": 0.17829457364341086
    },
    "IWE704": {
        "Code": "IWE704",
        "Name": "Introduction to Financial Accounting",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 130,
        "AAAB_avg": 0.2153846153846154
    },
    "IWE705": {
        "Code": "IWE705",
        "Name": "Marketing Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Sharma"
        ],
        "Division": "",
        "total": 90,
        "AAAB_avg": 0.17777777777777778
    },
    "IWE706": {
        "Code": "IWE706",
        "Name": "Managerial Economics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 129,
        "AAAB_avg": 0.2713178294573643
    },
    "IWE710": {
        "Code": "IWE710",
        "Name": "Corporate Finance",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.24324324324324326
    },
    "IWE711": {
        "Code": "IWE711",
        "Name": "Leadership",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.25225225225225223
    },
    "IWE712": {
        "Code": "IWE712",
        "Name": "Growth, Valuations, and Sustainability",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 110,
        "AAAB_avg": 0.22727272727272727
    },
    "IWE714": {
        "Code": "IWE714",
        "Name": "Global Supply Chain Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " T.T. Niranjan"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.1981981981981982
    },
    "IWE715": {
        "Code": "IWE715",
        "Name": "Competitive Strategy & Industry Analysis",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 91,
        "AAAB_avg": 0.16483516483516483
    },
    "IWE719": {
        "Code": "IWE719",
        "Name": "Strategic Management of Innovation",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.27927927927927926
    },
    "IWE720": {
        "Code": "IWE720",
        "Name": "Business Start-up Consulting Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 84,
        "AAAB_avg": 0.20238095238095238
    },
    "IWE721": {
        "Code": "IWE721",
        "Name": "Washington D C Residency",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 89,
        "AAAB_avg": 0.24719101123595505
    },
    "IWE722": {
        "Code": "IWE722",
        "Name": "Data-Driven Decision Making: Analysis to Action",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 89,
        "AAAB_avg": 0.8089887640449438
    },
    "IWE723": {
        "Code": "IWE723",
        "Name": "Customer Analytics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 83,
        "AAAB_avg": 0.20481927710843373
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
        "Division": "M",
        "total": 159,
        "AAAB_avg": 0.2389937106918239
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
        "Division": "M",
        "total": 174,
        "AAAB_avg": 0.4540229885057471
    },
    "MG802": {
        "Code": "MG802",
        "Name": "Marketing Theory and Contemporary Issues",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Sharma"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.375
    },
    "MGS801": {
        "Code": "MGS801",
        "Name": "Credit Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sarthak Gaurav"
        ],
        "Division": ""
    },
    "MGS802": {
        "Code": "MGS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sarthak Gaurav"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.7714285714285715
    },
    "MGT804": {
        "Code": "MGT804",
        "Name": "Qualitative Research Methodologies",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " T.T. Niranjan"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.39655172413793105
    },
    "SOM101-S1": {
        "Code": "SOM101-S1",
        "Name": "Introduction to Management",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "3B",
            "5A"
        ],
        "Instructors": [
            " Mayank Pareek"
        ],
        "Division": "S1",
        "total": 456,
        "AAAB_avg": 0.31359649122807015
    },
    "SOM101-S2": {
        "Code": "SOM101-S2",
        "Name": "Introduction to Management",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "3C",
            "X3"
        ],
        "Instructors": [
            " Ashish Pandey"
        ],
        "Division": "S2",
        "total": 408,
        "AAAB_avg": 0.25735294117647056
    },
    "SOM612": {
        "Code": "SOM612",
        "Name": "Business Research Methods",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Ashish Singh"
        ],
        "Division": "",
        "total": 452,
        "AAAB_avg": 0.3141592920353982
    },
    "SOM613": {
        "Code": "SOM613",
        "Name": "Corporate Finance - II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Rohan Chinchwadkar"
        ],
        "Division": "",
        "total": 456,
        "AAAB_avg": 0.07236842105263158
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
        "Division": "",
        "total": 459,
        "AAAB_avg": 0.3420479302832244
    },
    "SOM615": {
        "Code": "SOM615",
        "Name": "Operations Management II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " T.T. Niranjan"
        ],
        "Division": "",
        "total": 458,
        "AAAB_avg": 0.21397379912663755
    },
    "SOM616": {
        "Code": "SOM616",
        "Name": "Technology Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Karuna Jain"
        ],
        "Division": "",
        "total": 459,
        "AAAB_avg": 0.42701525054466233
    },
    "SOM617": {
        "Code": "SOM617",
        "Name": "Corporate Strategy",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Snehal Awate"
        ],
        "Division": "",
        "total": 358,
        "AAAB_avg": 0.3240223463687151
    },
    "SOM618": {
        "Code": "SOM618",
        "Name": "Organization Behavior & Human Resources II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Ashish Pandey"
        ],
        "Division": "",
        "total": 348,
        "AAAB_avg": 0.28448275862068967
    },
    "SOM619": {
        "Code": "SOM619",
        "Name": "Corporate Governance and Business Ethics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Varadraj B. Bapat"
        ],
        "Division": "",
        "total": 349,
        "AAAB_avg": 0.1977077363896848
    },
    "SOM621": {
        "Code": "SOM621",
        "Name": "Legal Aspects of Business",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Varadraj B. Bapat"
        ],
        "Division": "",
        "total": 341,
        "AAAB_avg": 0.2727272727272727
    },
    "SOM623": {
        "Code": "SOM623",
        "Name": "Final Project",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.8793103448275862
    },
    "SOM633": {
        "Code": "SOM633",
        "Name": "Quality Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Indrajit Mukherjee"
        ],
        "Division": "",
        "total": 147,
        "AAAB_avg": 0.4421768707482993
    },
    "SOM643": {
        "Code": "SOM643",
        "Name": "Introduction to ERP",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Atul Kanyalkar"
        ],
        "Division": "",
        "total": 114,
        "AAAB_avg": 0.2543859649122807
    },
    "SOM649": {
        "Code": "SOM649",
        "Name": "Corporate Competitiveness",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Kiran Kumar Momaya"
        ],
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.3125
    },
    "SOM652": {
        "Code": "SOM652",
        "Name": "Indian Financial and Business Model",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Varadraj B. Bapat"
        ],
        "Division": "",
        "total": 225,
        "AAAB_avg": 0.5777777777777777
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
    "SOM664": {
        "Code": "SOM664",
        "Name": "Business to Business Marketing",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Sharma"
        ],
        "Division": "",
        "total": 163,
        "AAAB_avg": 0.44785276073619634
    },
    "SOM665": {
        "Code": "SOM665",
        "Name": "Consumer Behaviour",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Sharma"
        ],
        "Division": "",
        "total": 199,
        "AAAB_avg": 0.2613065326633166
    },
    "SOM679": {
        "Code": "SOM679",
        "Name": "Competitiveness for Sustainable Enterprise",
        "Venue": "Class : CL 112 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Kiran Kumar Momaya"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.3684210526315789
    },
    "SOM680": {
        "Code": "SOM680",
        "Name": "Managing Intellectual Property",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.V.D.Nageswara Rao"
        ],
        "Division": "",
        "total": 175,
        "AAAB_avg": 0.34285714285714286
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
    "SOM691": {
        "Code": "SOM691",
        "Name": "Intelligent Systems",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sonar M Rajendra"
        ],
        "Division": "",
        "total": 203,
        "AAAB_avg": 0.3842364532019704
    },
    "SOM693": {
        "Code": "SOM693",
        "Name": "Information Technology Infrastructure Management",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sonar M Rajendra"
        ],
        "Division": "",
        "total": 210,
        "AAAB_avg": 0.5619047619047619
    },
    "SOM700": {
        "Code": "SOM700",
        "Name": "Managing Digital Products",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sonar M Rajendra"
        ],
        "Division": "",
        "total": 189,
        "AAAB_avg": 0.5238095238095238
    },
    "SOM701": {
        "Code": "SOM701",
        "Name": "Online Marketing",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dinesh Sharma"
        ],
        "Division": "",
        "total": 137,
        "AAAB_avg": 0.26277372262773724
    },
    "SOM707": {
        "Code": "SOM707",
        "Name": "Behavioral Finance",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " S.N.Rao"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.5526315789473685
    },
    "SOM711": {
        "Code": "SOM711",
        "Name": "Behavioural Economics",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sarthak Gaurav"
        ],
        "Division": "",
        "total": 81,
        "AAAB_avg": 0.5432098765432098
    },
    "SOM712": {
        "Code": "SOM712",
        "Name": "Management of Digital Transformation in Enterprise",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sonar M Rajendra"
        ],
        "Division": "",
        "total": 178,
        "AAAB_avg": 0.550561797752809
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
    "SOM720": {
        "Code": "SOM720",
        "Name": "Sustainable Finance",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Trupti Mishra"
        ],
        "Division": "",
        "total": 20,
        "AAAB_avg": 0.3
    },
    "SOM722": {
        "Code": "SOM722",
        "Name": "Managing Industry 4.0",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Sonar M Rajendra"
        ],
        "Division": "",
        "total": 60,
        "AAAB_avg": 0.4166666666666667
    },
    "SOM723": {
        "Code": "SOM723",
        "Name": "Quantitative and Algorithmic Trading",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Piyush Pandey"
        ],
        "Division": "",
        "total": 15,
        "AAAB_avg": 0.6
    },
    "SOM724": {
        "Code": "SOM724",
        "Name": "Econometrics of Financial Markets",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Piyush Pandey"
        ],
        "Division": "",
        "total": 30,
        "AAAB_avg": 0.13333333333333333
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
    "SOM744": {
        "Code": "SOM744",
        "Name": "Multivariate Data Analysis",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Usha Ananthakumar"
        ],
        "Division": "",
        "total": 40,
        "AAAB_avg": 0.3
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
        "Division": "",
        "total": 3,
        "AAAB_avg": 0.6666666666666666
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
        "Division": "",
        "total": 2,
        "AAAB_avg": 1.0
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
    "MMM694": {
        "Code": "MMM694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Pradeep Dixit"
        ],
        "Division": "",
        "total": 32,
        "AAAB_avg": 0.625
    },
    "MM104": {
        "Code": "MM104",
        "Name": "Materials Tetrahedron",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Parag Bhargava"
        ],
        "Division": "",
        "total": 150,
        "AAAB_avg": 0.14666666666666667
    },
    "MM105-tut": {
        "Code": "MM105-tut",
        "Name": "It\u2019s a materials world!",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "11B"
        ],
        "Instructors": [
            " ",
            " Parag Kishore Bhargava"
        ],
        "Division": ""
    },
    "MM105-D3": {
        "Code": "MM105-D3",
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
        "Division": "D3"
    },
    "MM152": {
        "Code": "MM152",
        "Name": "Materials & Technology",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Parag Bhargava"
        ],
        "Division": "",
        "total": 452,
        "AAAB_avg": 0.1415929203539823
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
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.24427480916030533
    },
    "MM210": {
        "Code": "MM210",
        "Name": "Numerical Methods for Materials Engineers",
        "Venue": "Class Room : LH 101",
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
        "Venue": "Class Room : LH 302",
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
    "MM220-S1": {
        "Code": "MM220-S1",
        "Name": "Computation Lab",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Prita Pant",
            " Amrita Bhattacharya"
        ],
        "Division": "S1",
        "total": 220,
        "AAAB_avg": 0.6954545454545454
    },
    "MM220-S2": {
        "Code": "MM220-S2",
        "Name": "Computation Lab",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " Prita Pant",
            " Amrita Bhattacharya"
        ],
        "Division": "S2",
        "total": 137,
        "AAAB_avg": 0.5693430656934306
    },
    "MM222": {
        "Code": "MM222",
        "Name": "Electrochemistry of Materials and its Applications",
        "Venue": "Class Room : LH 101",
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
    "MM224-S1": {
        "Code": "MM224-S1",
        "Name": "Electrochemistry and Corrosion Lab",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " Aswani Yella",
            " Raja V. S."
        ],
        "Division": "S1"
    },
    "MM224-S2": {
        "Code": "MM224-S2",
        "Name": "Electrochemistry and Corrosion Lab",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Aswani Yella",
            " Raja V. S."
        ],
        "Division": "S2"
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
        "Division": "S1",
        "total": 124,
        "AAAB_avg": 0.22580645161290322
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
        "Division": "S2",
        "total": 125,
        "AAAB_avg": 0.224
    },
    "MM318-M": {
        "Code": "MM318-M",
        "Name": "Electronic Properties of Materials",
        "Venue": "Class Room - IC1",
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
        "Division": "M",
        "total": 256,
        "AAAB_avg": 0.2890625
    },
    "MM318-S1": {
        "Code": "MM318-S1",
        "Name": "Electronic Properties of Materials",
        "Venue": "Class Room - IC1",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Amrita Bhattacharya"
        ],
        "Division": "S1",
        "total": 126,
        "AAAB_avg": 0.2857142857142857
    },
    "MM318-S2": {
        "Code": "MM318-S2",
        "Name": "Electronic Properties of Materials",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Tanushree H. Choudhury"
        ],
        "Division": "S2",
        "total": 129,
        "AAAB_avg": 0.29457364341085274
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
        "Division": "",
        "total": 467,
        "AAAB_avg": 0.19271948608137046
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
        "Division": "S1",
        "total": 198,
        "AAAB_avg": 0.9494949494949495
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
        "Division": "S2",
        "total": 151,
        "AAAB_avg": 0.9668874172185431
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
        "Division": "S1",
        "total": 223,
        "AAAB_avg": 0.7040358744394619
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
        "Division": "S2",
        "total": 236,
        "AAAB_avg": 0.5296610169491526
    },
    "MM357": {
        "Code": "MM357",
        "Name": "Ceramics and Powder Metallurgy",
        "Venue": "Class Room : LH 101",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Ashutosh Gandhi"
        ],
        "Division": "",
        "total": 473,
        "AAAB_avg": 0.30021141649048627
    },
    "MM359": {
        "Code": "MM359",
        "Name": "Metal Casting and Joining",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " K. Bhanumurthy",
            " Durga A."
        ],
        "Division": "",
        "total": 478,
        "AAAB_avg": 0.22384937238493724
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
        "Division": "",
        "total": 612,
        "AAAB_avg": 0.4477124183006536
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
        "Division": "",
        "total": 213,
        "AAAB_avg": 0.17370892018779344
    },
    "MM408": {
        "Code": "MM408",
        "Name": "Mechanical Working of Metals ",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " MJNV Prasad",
            " Samajdar I."
        ],
        "Division": "",
        "total": 130,
        "AAAB_avg": 0.2692307692307692
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
        "Division": "S1",
        "total": 182,
        "AAAB_avg": 0.5054945054945055
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
        "Division": "S2",
        "total": 26,
        "AAAB_avg": 0.38461538461538464
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
        "Division": "S1",
        "total": 275,
        "AAAB_avg": 0.4218181818181818
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
        "Division": "S2",
        "total": 34,
        "AAAB_avg": 0.23529411764705882
    },
    "MM454": {
        "Code": "MM454",
        "Name": "Corrosion & Protection of Materials",
        "Venue": "Class Room : LC 002",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Vijayshankar Dandapani"
        ],
        "Division": "",
        "total": 425,
        "AAAB_avg": 0.35294117647058826
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
        "Division": "S1",
        "total": 3,
        "AAAB_avg": 0.0
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
        "Division": "S2",
        "total": 110,
        "AAAB_avg": 0.38181818181818183
    },
    "MM492": {
        "Code": "MM492",
        "Name": "B.Tech Project I",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Avradeep Pal"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.8181818181818182
    },
    "MM494": {
        "Code": "MM494",
        "Name": "B.Tech Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Avradeep Pal"
        ],
        "Division": "",
        "total": 8,
        "AAAB_avg": 0.875
    },
    "MM6002": {
        "Code": "MM6002",
        "Name": "Principles and Applications of Ferroelectric and Piezoelectric Materials",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Abhijeet Sangle"
        ],
        "Division": ""
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
        "Division": "",
        "total": 48,
        "AAAB_avg": 0.6875
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
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.5
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
        "Division": "",
        "total": 62,
        "AAAB_avg": 0.5161290322580645
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
        "Division": "",
        "total": 114,
        "AAAB_avg": 0.5263157894736842
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
        "Division": "",
        "total": 64,
        "AAAB_avg": 0.6875
    },
    "MM642": {
        "Code": "MM642",
        "Name": "Modelling of Metallurgical Processes",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Sanjay Chandra"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.7727272727272727
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
        "Division": "",
        "total": 111,
        "AAAB_avg": 0.36036036036036034
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
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.3333333333333333
    },
    "MM656": {
        "Code": "MM656",
        "Name": "Simulation and Optimisation",
        "Venue": "Class Room : LA 002",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Sumit Saxena"
        ],
        "Division": "",
        "total": 285,
        "AAAB_avg": 0.6982456140350877
    },
    "MM658": {
        "Code": "MM658",
        "Name": "Fracture Mechanics and Failure Analysis",
        "Venue": "Class Room : LT 304",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Nagamani J. Balila"
        ],
        "Division": "",
        "total": 12,
        "AAAB_avg": 0.5833333333333334
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
        "Division": "",
        "total": 142,
        "AAAB_avg": 0.6267605633802817
    },
    "MM677": {
        "Code": "MM677",
        "Name": "Diffusion and Kinetics",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " M.P. Gururajan"
        ],
        "Division": "",
        "total": 161,
        "AAAB_avg": 0.577639751552795
    },
    "MM684": {
        "Code": "MM684",
        "Name": "X-Ray Diffraction and Electron Microscopy",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Samajdar I.",
            " Prasanna T.R.S."
        ],
        "Division": "",
        "total": 72,
        "AAAB_avg": 0.5416666666666666
    },
    "MM685": {
        "Code": "MM685",
        "Name": "Electrical Materials: fundamentals and applications",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Titas Dasgupta"
        ],
        "Division": "",
        "total": 22,
        "AAAB_avg": 0.5909090909090909
    },
    "MM688": {
        "Code": "MM688",
        "Name": "Non-Crystalline Materials",
        "Venue": "Class Room : LT 202",
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
        "Division": "",
        "total": 13,
        "AAAB_avg": 0.5384615384615384
    },
    "MM694": {
        "Code": "MM694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Smrutiranjan Parida"
        ],
        "Division": "",
        "total": 280,
        "AAAB_avg": 0.6321428571428571
    },
    "MM700": {
        "Code": "MM700",
        "Name": "Electrochemical and Materials Perspective in Energy Storage",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Amartya Mukhopadhyay"
        ],
        "Division": "",
        "total": 113,
        "AAAB_avg": 0.3893805309734513
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
        "Division": "",
        "total": 77,
        "AAAB_avg": 0.37662337662337664
    },
    "MM718": {
        "Code": "MM718",
        "Name": "Laser Processing and Nanostructures",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Shobha Shukla"
        ],
        "Division": "",
        "total": 74,
        "AAAB_avg": 0.6756756756756757
    },
    "MM722": {
        "Code": "MM722",
        "Name": "Molecular Simulations for Mateirals Engineering ",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Ajay Singh Panwar"
        ],
        "Division": "",
        "total": 91,
        "AAAB_avg": 0.5384615384615384
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
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6818181818181818
    },
    "MM746": {
        "Code": "MM746",
        "Name": "Concepts of Advanced Polymer Science & Engineering",
        "Venue": "Class Room : LT 303",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Mithun Chowdhury"
        ],
        "Division": "",
        "total": 21,
        "AAAB_avg": 0.5714285714285714
    },
    "MM749": {
        "Code": "MM749",
        "Name": "Statistics and Probability for Materials Engineers",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Hina Amol Gokhale"
        ],
        "Division": "",
        "total": 131,
        "AAAB_avg": 0.2900763358778626
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
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.7777777777777778
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
    "MM899": {
        "Code": "MM899",
        "Name": "Communication Skills",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Mural S Prasanna Kumar",
            " Arup R. Bhattacharyya"
        ],
        "Division": "",
        "total": 270,
        "AAAB_avg": 0.0
    },
    "MMS802": {
        "Code": "MMS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Dipti Gupta"
        ],
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.7910447761194029
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
    "PH110-D1-tut": {
        "Code": "PH110-D1-tut",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "X1"
        ],
        "Instructors": [
            "  ",
            " Sankagiri  Umasankar"
        ],
        "Division": "D1"
    },
    "PH110-D2": {
        "Code": "PH110-D2",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Kantimay Das Gupta"
        ],
        "Division": "D2"
    },
    "PH110-D2-tut": {
        "Code": "PH110-D2-tut",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "X2"
        ],
        "Instructors": [
            " ",
            " Kantimay Siba Pada Das Gupta Das Gupta"
        ],
        "Division": "D2"
    },
    "PH110-D3-tut": {
        "Code": "PH110-D3-tut",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "X3"
        ],
        "Instructors": [
            "  ",
            " Punit  Parmananda"
        ],
        "Division": "D3"
    },
    "PH110-D3": {
        "Code": "PH110-D3",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LH 301",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Punit Parmanand"
        ],
        "Division": "D3"
    },
    "PH110-D4-tut": {
        "Code": "PH110-D4-tut",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LT 302",
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
    "PH110-D4": {
        "Code": "PH110-D4",
        "Name": "Introduction to Classical and Quantum Physics",
        "Venue": "Class Room : LA 202",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Anirban Sain"
        ],
        "Division": "D4"
    },
    "PH111": {
        "Code": "PH111",
        "Name": "Introduction to classical Physics",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Anirban Sain",
            " Kantimay Das Gupta",
            " Punit Parmanand",
            " Sankar S.Uma"
        ],
        "Division": "",
        "total": 1364,
        "AAAB_avg": 0.27419354838709675
    },
    "PH111-D2": {
        "Code": "PH111-D2",
        "Name": "Introduction to classical Physics",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Anirban Sain",
            " Kantimay Das Gupta",
            " Punit Parmanand",
            " Sankar S.Uma"
        ],
        "Division": "D2",
        "total": 335,
        "AAAB_avg": 0.26865671641791045
    },
    "PH112": {
        "Code": "PH112",
        "Name": "Introduction to Quantum Physics",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Anirban Sain",
            " Kantimay Das Gupta",
            " Varma Raghava",
            " Sankar S.Uma"
        ],
        "Division": ""
    },
    "PH112-D2": {
        "Code": "PH112-D2",
        "Name": "Introduction to Quantum Physics",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Anirban Sain",
            " Kantimay Das Gupta",
            " Varma Raghava",
            " Sankar S.Uma"
        ],
        "Division": "D2"
    },
    "PH117-P1": {
        "Code": "PH117-P1",
        "Name": "Physics Lab",
        "Venue": "",
        "Slots": [
            "L1"
        ],
        "Instructors": [
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P1",
        "total": 160,
        "AAAB_avg": 0.55
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
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P10",
        "total": 113,
        "AAAB_avg": 0.5486725663716814
    },
    "PH117-P2": {
        "Code": "PH117-P2",
        "Name": "Physics Lab",
        "Venue": "",
        "Slots": [
            "L2"
        ],
        "Instructors": [
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P2",
        "total": 162,
        "AAAB_avg": 0.5617283950617284
    },
    "PH117-P3": {
        "Code": "PH117-P3",
        "Name": "Physics Lab",
        "Venue": "",
        "Slots": [
            "L3"
        ],
        "Instructors": [
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P3",
        "total": 122,
        "AAAB_avg": 0.5573770491803278
    },
    "PH117-P4": {
        "Code": "PH117-P4",
        "Name": "Physics Lab",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P4",
        "total": 112,
        "AAAB_avg": 0.5982142857142857
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
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P7",
        "total": 160,
        "AAAB_avg": 0.7375
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
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P8",
        "total": 149,
        "AAAB_avg": 0.6778523489932886
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
            " Amitabha Nandi",
            " Asmita Mukherjee",
            " Nitin Kumar",
            " Senthilkumar M.",
            " Sumiran Pujari",
            " Sunita Srivastava",
            " Vikram Rentala",
            " Mohamad Aslam"
        ],
        "Division": "P9",
        "total": 113,
        "AAAB_avg": 0.5663716814159292
    },
    "PH216": {
        "Code": "PH216",
        "Name": "Statistical Physics",
        "Venue": "Class : CL 111 ESE",
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
        "Division": "",
        "total": 226,
        "AAAB_avg": 0.668141592920354
    },
    "PH252-M": {
        "Code": "PH252-M",
        "Name": "Introduction to Quantum Mechanics",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Das Pragya"
        ],
        "Division": "M",
        "total": 35,
        "AAAB_avg": 0.4857142857142857
    },
    "PH303": {
        "Code": "PH303",
        "Name": "Supervised Learning",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 103,
        "AAAB_avg": 0.8349514563106796
    },
    "PH307": {
        "Code": "PH307",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "Class : CL 104 ESE",
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
    "PH307-tut": {
        "Code": "PH307-tut",
        "Name": "Introduction to Numerical Analysis",
        "Venue": "",
        "Slots": [
            "L4"
        ],
        "Instructors": [
            " Alok Shukla"
        ],
        "Division": ""
    },
    "PH309-tut": {
        "Code": "PH309-tut",
        "Name": "Quantum Mechanics II",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "4C"
        ],
        "Instructors": [
            " Soumya Bera"
        ],
        "Division": ""
    },
    "PH309": {
        "Code": "PH309",
        "Name": "Quantum Mechanics II",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Soumya Bera"
        ],
        "Division": ""
    },
    "PH408": {
        "Code": "PH408",
        "Name": "Mathematical Physics II",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Siddhartha Santra"
        ],
        "Division": "",
        "total": 192,
        "AAAB_avg": 0.2708333333333333
    },
    "PH408-tut": {
        "Code": "PH408-tut",
        "Name": "Mathematical Physics II",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "3A"
        ],
        "Instructors": [
            " Siddhartha Santra"
        ],
        "Division": "",
        "total": 192,
        "AAAB_avg": 0.2708333333333333
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
        "Division": "",
        "total": 215,
        "AAAB_avg": 0.2
    },
    "PH418": {
        "Code": "PH418",
        "Name": "Introduction to Condensed Matter Physics",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Singh P.P."
        ],
        "Division": "",
        "total": 213,
        "AAAB_avg": 0.22065727699530516
    },
    "PH422": {
        "Code": "PH422",
        "Name": "Quantum Mechanics II",
        "Venue": "Class : CL 113 ESE",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Shankaranarayanan Subramaniam"
        ],
        "Division": "",
        "total": 207,
        "AAAB_avg": 0.21739130434782608
    },
    "PH424": {
        "Code": "PH424",
        "Name": "Electromagnetic Theory I",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " B Nandi"
        ],
        "Division": "",
        "total": 198,
        "AAAB_avg": 0.3282828282828283
    },
    "PH436": {
        "Code": "PH436",
        "Name": "Introduction to Condensed Matter Physics",
        "Venue": "Class : CL 106 ESE",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Hridis Kumar Pal"
        ],
        "Division": "",
        "total": 221,
        "AAAB_avg": 0.22171945701357465
    },
    "PH438": {
        "Code": "PH438",
        "Name": "Statistical Physics",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Mithun K. Mitra"
        ],
        "Division": "",
        "total": 213,
        "AAAB_avg": 0.19718309859154928
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
        "Division": "",
        "total": 186,
        "AAAB_avg": 0.7204301075268817
    },
    "PH444": {
        "Code": "PH444",
        "Name": "Electromagnetic Theory",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Anshuman Kumar"
        ],
        "Division": "",
        "total": 208,
        "AAAB_avg": 0.3894230769230769
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
        "Division": "",
        "total": 204,
        "AAAB_avg": 0.5784313725490197
    },
    "PH500": {
        "Code": "PH500",
        "Name": "Thin Film Physics & Technology",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Pramod Kumar"
        ],
        "Division": "",
        "total": 102,
        "AAAB_avg": 0.27450980392156865
    },
    "PH510": {
        "Code": "PH510",
        "Name": "Electromagnetic Theory II",
        "Venue": "Class : CL 112 ESE",
        "Slots": [
            "2A",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Varun Bhalerao"
        ],
        "Division": "",
        "total": 186,
        "AAAB_avg": 0.43548387096774194
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
        "Division": "",
        "total": 175,
        "AAAB_avg": 0.8971428571428571
    },
    "PH530": {
        "Code": "PH530",
        "Name": "Light Matter Interaction",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Kundu Tapanendu"
        ],
        "Division": "",
        "total": 201,
        "AAAB_avg": 0.2835820895522388
    },
    "PH534": {
        "Code": "PH534",
        "Name": "Quantum Information and Computing",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Sai Vinjanampathy",
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 220,
        "AAAB_avg": 0.2909090909090909
    },
    "PH540": {
        "Code": "PH540",
        "Name": "Elementary Particle Physics",
        "Venue": "Class Room : LT 006",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Kumar Rao"
        ],
        "Division": "",
        "total": 102,
        "AAAB_avg": 0.16666666666666666
    },
    "PH544": {
        "Code": "PH544",
        "Name": "General Theory of Relativity",
        "Venue": "Class Room : LT 303",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Vikram Rentala"
        ],
        "Division": "",
        "total": 173,
        "AAAB_avg": 0.30057803468208094
    },
    "PH550": {
        "Code": "PH550",
        "Name": "Soft Matter Physics",
        "Venue": "Class : CL 109 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Sunita Srivastava"
        ],
        "Division": "",
        "total": 72,
        "AAAB_avg": 0.4444444444444444
    },
    "PH554": {
        "Code": "PH554",
        "Name": "Computational Many Body Physics",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Sumiran Pujari"
        ],
        "Division": "",
        "total": 39,
        "AAAB_avg": 0.46153846153846156
    },
    "PH562": {
        "Code": "PH562",
        "Name": "Continuum Mechanics",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Amitabha Nandi"
        ],
        "Division": "",
        "total": 82,
        "AAAB_avg": 0.45121951219512196
    },
    "PH564": {
        "Code": "PH564",
        "Name": "Methods in Experimental Nuclear and Particle Physics",
        "Venue": "Class : CL 110 ESE",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Sadhana Dash"
        ],
        "Division": "",
        "total": 25,
        "AAAB_avg": 0.24
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
        "Division": "",
        "total": 192,
        "AAAB_avg": 0.3541666666666667
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
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.5217391304347826
    },
    "PH574": {
        "Code": "PH574",
        "Name": "Physics of Semiconductor Devices",
        "Venue": "Class : CL 103 ESE",
        "Slots": [
            "4A",
            "4C",
            "4B"
        ],
        "Instructors": [
            " Dinesh Kabra"
        ],
        "Division": "",
        "total": 118,
        "AAAB_avg": 0.1864406779661017
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
        "Division": "",
        "total": 13,
        "AAAB_avg": 0.7692307692307693
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
        "Division": "",
        "total": 89,
        "AAAB_avg": 0.4943820224719101
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
        "Division": "",
        "total": 85,
        "AAAB_avg": 0.4823529411764706
    },
    "PH587": {
        "Code": "PH587",
        "Name": "B.Tech Project I",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 96,
        "AAAB_avg": 0.8020833333333334
    },
    "PH588": {
        "Code": "PH588",
        "Name": "B.Tech. Project II",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.88
    },
    "PH596": {
        "Code": "PH596",
        "Name": "M.Sc. project stage 2",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 82,
        "AAAB_avg": 0.8658536585365854
    },
    "PH601": {
        "Code": "PH601",
        "Name": "Advanced Quantum Information and Computation",
        "Venue": "Class Room : LT 005",
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
        "Venue": "Class Room : LT 302",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " P Vasa"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.0
    },
    "PHS802": {
        "Code": "PHS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Himadri Shekhar Dhar"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.8
    },
    "PS602": {
        "Code": "PS602",
        "Name": "Public Policy in Practice",
        "Venue": "Class Room : LT 003",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Malish C.M.",
            " N.C.Narayanan"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6136363636363636
    },
    "PS604": {
        "Code": "PS604",
        "Name": "Technology, Culture and Policy",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Mehra A."
        ],
        "Division": "",
        "total": 78,
        "AAAB_avg": 0.15384615384615385
    },
    "PS607": {
        "Code": "PS607",
        "Name": "Public Policy Theory II",
        "Venue": "Class Room : LT 004",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Malish C.M.",
            " N.C.Narayanan"
        ],
        "Division": "",
        "total": 60,
        "AAAB_avg": 0.55
    },
    "PS610": {
        "Code": "PS610",
        "Name": "Quantitative and Qualitative Research Methods",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Malish C.M.",
            " Prabhir Vishnu Poruthiyil"
        ],
        "Division": "",
        "total": 94,
        "AAAB_avg": 0.5106382978723404
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
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.6470588235294118
    },
    "PS619": {
        "Code": "PS619",
        "Name": "Health Policy: An Introduction ",
        "Venue": "Class Room : LT 304",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Santosh Noronha"
        ],
        "Division": "",
        "total": 92,
        "AAAB_avg": 0.6413043478260869
    },
    "PS630": {
        "Code": "PS630",
        "Name": "Technology and the Future of Workers",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Anupam Guha"
        ],
        "Division": "",
        "total": 34,
        "AAAB_avg": 0.7058823529411765
    },
    "PS633": {
        "Code": "PS633",
        "Name": "Writing Policy",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Naveen Bharathi"
        ],
        "Division": "",
        "total": 79,
        "AAAB_avg": 0.4177215189873418
    },
    "PS634": {
        "Code": "PS634",
        "Name": "Constitutional Law and Public Policy",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Robinson Rowena",
            " Rahul Suresh Sapkal"
        ],
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.29411764705882354
    },
    "PS636": {
        "Code": "PS636",
        "Name": "Information Economy, Platforms and Governance",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Jha Shishir Kumar"
        ],
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.46
    },
    "PS637": {
        "Code": "PS637",
        "Name": "Circular Economy: Policy and Practices",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Pradip P. Kalbar",
            " Ajay A Deshpande"
        ],
        "Division": "",
        "total": 25,
        "AAAB_avg": 0.6
    },
    "PS640": {
        "Code": "PS640",
        "Name": "Gender and Development",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "13A",
            "13B"
        ],
        "Instructors": [
            " Ahonaa Roy"
        ],
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.5714285714285714
    },
    "PS641": {
        "Code": "PS641",
        "Name": "Trustworthy Systems: A Policy Engagement",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Jha Shishir Kumar",
            " Sundeep Oberoi"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.5
    },
    "PS642": {
        "Code": "PS642",
        "Name": "Policy and Practice of Education",
        "Venue": "Class Room : LT 202",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Malish C.M."
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.5
    },
    "PS644": {
        "Code": "PS644",
        "Name": "Advanced Topics in AI, Data, and Policy",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Anupam Guha"
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
        "Division": "",
        "total": 58,
        "AAAB_avg": 0.43103448275862066
    },
    "PS701": {
        "Code": "PS701",
        "Name": "Energy Transition",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Anjali Sharma"
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
    "PS899": {
        "Code": "PS899",
        "Name": "Communication Skills",
        "Venue": "Class : CL 111 ESE",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Anjali Sharma",
            " Anupam Guha"
        ],
        "Division": "",
        "total": 46,
        "AAAB_avg": 0.0
    },
    "PSS802": {
        "Code": "PSS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Prabhir Vishnu Poruthiyil"
        ],
        "Division": "",
        "total": 45,
        "AAAB_avg": 0.6444444444444445
    },
    "SC202-M": {
        "Code": "SC202-M",
        "Name": "Signals and Feedback Systems",
        "Venue": "Class Room : LT 102",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Navin Khaneja"
        ],
        "Division": "M",
        "total": 114,
        "AAAB_avg": 0.45614035087719296
    },
    "SC602": {
        "Code": "SC602",
        "Name": "Control of Nonlinear Dynamical Systems",
        "Venue": "Class Room : LT 205",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Sukumar Srikant"
        ],
        "Division": "",
        "total": 94,
        "AAAB_avg": 0.20212765957446807
    },
    "SC602-M": {
        "Code": "SC602-M",
        "Name": "Control of Nonlinear Dynamical Systems",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Sukumar Srikant"
        ],
        "Division": "M",
        "total": 13,
        "AAAB_avg": 0.07692307692307693
    },
    "SC607": {
        "Code": "SC607",
        "Name": "Optimization",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Avishek Ghosh"
        ],
        "Division": "",
        "total": 155,
        "AAAB_avg": 0.15483870967741936
    },
    "SC607-M": {
        "Code": "SC607-M",
        "Name": "Optimization",
        "Venue": "Class Room : LT 302",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Avishek Ghosh"
        ],
        "Division": "M",
        "total": 40,
        "AAAB_avg": 0.1
    },
    "SC624": {
        "Code": "SC624",
        "Name": "Differential Geometric Methods in Control",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Debasish Chatterjee"
        ],
        "Division": "",
        "total": 17,
        "AAAB_avg": 0.7647058823529411
    },
    "SC624-M": {
        "Code": "SC624-M",
        "Name": "Differential Geometric Methods in Control",
        "Venue": "Class Room : LT 104",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Debasish Chatterjee"
        ],
        "Division": "M",
        "total": 1,
        "AAAB_avg": 1.0
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
        "Division": "",
        "total": 50,
        "AAAB_avg": 0.56
    },
    "SC627": {
        "Code": "SC627",
        "Name": "Motion Planning & Coordination of Autonomous Vehicles",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "L4",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Arpita Sinha"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.4857142857142857
    },
    "SC627-M": {
        "Code": "SC627-M",
        "Name": "Motion Planning & Coordination of Autonomous Vehicles",
        "Venue": "Class : CL 105 ESE",
        "Slots": [
            "L4",
            "2C",
            "2B"
        ],
        "Instructors": [
            " Arpita Sinha"
        ],
        "Division": "M",
        "total": 16,
        "AAAB_avg": 0.6875
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
        "Division": "",
        "total": 11,
        "AAAB_avg": 0.8181818181818182
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
        "Division": "M",
        "total": 11,
        "AAAB_avg": 0.8181818181818182
    },
    "SC645": {
        "Code": "SC645",
        "Name": "Intelligent Feedback and Control",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Leena Vachhani"
        ],
        "Division": "",
        "total": 75,
        "AAAB_avg": 0.37333333333333335
    },
    "SC645-M": {
        "Code": "SC645-M",
        "Name": "Intelligent Feedback and Control",
        "Venue": "Class Room : LT 105",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Leena Vachhani"
        ],
        "Division": "M",
        "total": 7,
        "AAAB_avg": 0.2857142857142857
    },
    "SC646": {
        "Code": "SC646",
        "Name": "Distributed Optimization and Machine Learning",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Mayank Baranwal"
        ],
        "Division": "",
        "total": 55,
        "AAAB_avg": 0.509090909090909
    },
    "SC646-M": {
        "Code": "SC646-M",
        "Name": "Distributed Optimization and Machine Learning",
        "Venue": "Class Room : LC 101",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Mayank Baranwal"
        ],
        "Division": "M",
        "total": 20,
        "AAAB_avg": 0.55
    },
    "SC651": {
        "Code": "SC651",
        "Name": "Estimation on Lie Groups",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Banavar R.N."
        ],
        "Division": "",
        "total": 9,
        "AAAB_avg": 0.8888888888888888
    },
    "SC651-M": {
        "Code": "SC651-M",
        "Name": "Estimation on Lie Groups",
        "Venue": "Class Room : LT 005",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Banavar R.N."
        ],
        "Division": "M",
        "total": 1,
        "AAAB_avg": 1.0
    },
    "SC654": {
        "Code": "SC654",
        "Name": "Social learning and herding",
        "Venue": "Class Room : LC 301",
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
        "Venue": "Class Room : LC 301",
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
        "Division": "",
        "total": 67,
        "AAAB_avg": 0.582089552238806
    },
    "SC702": {
        "Code": "SC702",
        "Name": "Linear Systems Theory for PDEs",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Vivek Natarajan"
        ],
        "Division": "",
        "total": 7,
        "AAAB_avg": 0.8571428571428571
    },
    "SC702-M": {
        "Code": "SC702-M",
        "Name": "Linear Systems Theory for PDEs",
        "Venue": "Class Room : LT 101",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Vivek Natarajan"
        ],
        "Division": "M",
        "total": 6,
        "AAAB_avg": 0.3333333333333333
    },
    "SCS802": {
        "Code": "SCS802",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Debasish Chatterjee"
        ],
        "Division": "",
        "total": 10,
        "AAAB_avg": 0.8
    },
    "TD390": {
        "Code": "TD390",
        "Name": "Supervised Learning - Study",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Priyadarshani Jadhav"
        ],
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.6170212765957447
    },
    "TD490": {
        "Code": "TD490",
        "Name": "Supervised Learning- Analysis",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Priyadarshani Jadhav"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 1.0
    },
    "TD491": {
        "Code": "TD491",
        "Name": "Supervised Learning - Design",
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
        "Venue": "Class Room : LT 201",
        "Slots": [
            "10B",
            "10A"
        ],
        "Instructors": [
            " Pankajkumar Sekhsaria",
            " Priyadarshani Jadhav"
        ],
        "Division": "",
        "total": 156,
        "AAAB_avg": 0.4423076923076923
    },
    "TD619": {
        "Code": "TD619",
        "Name": "Energy Policy and Planning",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "11B",
            "11A"
        ],
        "Instructors": [
            " Anand B. Rao"
        ],
        "Division": "",
        "total": 90,
        "AAAB_avg": 0.26666666666666666
    },
    "TD620": {
        "Code": "TD620",
        "Name": "Micro, Small and Medium Enterprises in Rural Areas",
        "Venue": "Class Room : LT 305",
        "Slots": [
            "12A",
            "12B"
        ],
        "Instructors": [
            " Vishal R. Sardeshpande"
        ],
        "Division": "",
        "total": 73,
        "AAAB_avg": 0.3561643835616438
    },
    "TD626": {
        "Code": "TD626",
        "Name": "Technology, Society and Development",
        "Venue": "Class Room : LC 202",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Pankajkumar Sekhsaria"
        ],
        "Division": "",
        "total": 200,
        "AAAB_avg": 0.405
    },
    "TD627": {
        "Code": "TD627",
        "Name": "Field Research Methods",
        "Venue": "Class Room : LC 201",
        "Slots": [
            "XC",
            "XD"
        ],
        "Instructors": [
            " Bakul Rao"
        ],
        "Division": "",
        "total": 123,
        "AAAB_avg": 0.6504065040650406
    },
    "TD632": {
        "Code": "TD632",
        "Name": "Sustainable Development Goals and Corporate Social Responsibility",
        "Venue": "Class Room : LC 301",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Bakul Rao",
            " Parmeshwar Digamber Udmale"
        ],
        "Division": "",
        "total": 108,
        "AAAB_avg": 0.5277777777777778
    },
    "TD634": {
        "Code": "TD634",
        "Name": "Advanced Remote Sensing and GIS for Development Research",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Pennan Chinnasamy"
        ],
        "Division": "",
        "total": 23,
        "AAAB_avg": 0.7391304347826086
    },
    "TD638": {
        "Code": "TD638",
        "Name": "Development Perspectives: Ideas, Approaches, and Theories",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Subodh M. Wagle"
        ],
        "Division": "",
        "total": 38,
        "AAAB_avg": 0.47368421052631576
    },
    "TD638-M": {
        "Code": "TD638-M",
        "Name": "Development Perspectives: Ideas, Approaches, and Theories",
        "Venue": "Class Room : LT 103",
        "Slots": [
            "5B",
            "5A"
        ],
        "Instructors": [
            " Subodh M. Wagle"
        ],
        "Division": "M",
        "total": 38,
        "AAAB_avg": 0.47368421052631576
    },
    "TD639": {
        "Code": "TD639",
        "Name": "Bamboo Construction for Rural Infrastructure",
        "Venue": "Class Room : LT 206",
        "Slots": [
            "1A",
            "1C",
            "1B"
        ],
        "Instructors": [
            " Chaaruchandra Korde"
        ],
        "Division": "",
        "total": 35,
        "AAAB_avg": 0.45714285714285713
    },
    "TD640": {
        "Code": "TD640",
        "Name": "Health and Wellness through a lifecycle approach",
        "Venue": "Class Room : LC 102",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Rupal M Dalal",
            " Amit Y. Arora"
        ],
        "Division": "",
        "total": 78,
        "AAAB_avg": 0.23076923076923078
    },
    "TD642": {
        "Code": "TD642",
        "Name": "Data for Development",
        "Venue": "Class Room : LT 203",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Pennan Chinnasamy"
        ],
        "Division": "",
        "total": 14,
        "AAAB_avg": 0.5714285714285714
    },
    "TD643": {
        "Code": "TD643",
        "Name": "Design of Bamboo Structures",
        "Venue": "Class Room : LT 201",
        "Slots": [
            "3A",
            "3C",
            "3B"
        ],
        "Instructors": [
            " Chaaruchandra Korde"
        ],
        "Division": "",
        "total": 4,
        "AAAB_avg": 0.25
    },
    "TD656": {
        "Code": "TD656",
        "Name": "Characterizing Hydro-Meteorological Hazards & Risk",
        "Venue": "Class Room : IC 2",
        "Slots": [
            "6B",
            "6A"
        ],
        "Instructors": [
            " Parmeshwar Digamber Udmale"
        ],
        "Division": "",
        "total": 47,
        "AAAB_avg": 0.851063829787234
    },
    "TD694": {
        "Code": "TD694",
        "Name": "Seminar",
        "Venue": "Class Room : LC 001",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Priyadarshani Jadhav"
        ],
        "Division": "",
        "total": 159,
        "AAAB_avg": 0.6037735849056604
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
    },
    "US603": {
        "Code": "US603",
        "Name": "Research Methods in Urban Science",
        "Venue": "Class Room : LT 204",
        "Slots": [
            "8A",
            "8B"
        ],
        "Instructors": [
            " Arnab Jana"
        ],
        "Division": "",
        "total": 145,
        "AAAB_avg": 0.5448275862068965
    },
    "US606": {
        "Code": "US606",
        "Name": "Urban Environmental Infrastructure",
        "Venue": "Class Room : LT 301",
        "Slots": [
            "14B",
            "14A"
        ],
        "Instructors": [
            " Pradip P. Kalbar"
        ],
        "Division": "",
        "total": 63,
        "AAAB_avg": 0.4603174603174603
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
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.9230769230769231
    },
    "US614": {
        "Code": "US614",
        "Name": "Urban Space: Theories and Critical Perspectives",
        "Venue": "Class Room : LT 106",
        "Slots": [
            "9A",
            "9B"
        ],
        "Instructors": [
            " Himanshu Burte"
        ],
        "Division": "",
        "total": 44,
        "AAAB_avg": 0.6363636363636364
    },
    "US694": {
        "Code": "US694",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Arnab Jana"
        ],
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.4230769230769231
    },
    "USS801": {
        "Code": "USS801",
        "Name": "Seminar",
        "Venue": "",
        "Slots": [],
        "Instructors": [
            " Pradip P. Kalbar"
        ],
        "Division": "",
        "total": 26,
        "AAAB_avg": 0.6923076923076923
    }
}


new TomSelect("#select-tags",{
  plugins: ['remove_button'],
  create: false,
  valueField: 'Code',
	labelField: 'Name',
  searchField: ['Code', 'Name', 'Instructors', 'Slots'],
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
      let score = 0;
      if(data.AAAB_avg){
        score = data.AAAB_avg
        if(score<0.3){
            score = 1;
        }
        else if(score>0.5){
            score= 3;
        }
        else{
            score = 2;
        }
      }
      let color= 'white';
      switch (score) {
        case 0:
            break;
        case 1:
          color = '#ff685743'
          break;
        case 2:
          color = '#fff20097';
          break;
        case 3:
            color = '#6dfb0862';
            break;
      }
      
      
      return `<div class="flex-container" style="background-color: ${color}; margin-top: 2px;margin-bottom: 3px;"><span class="flex-item">` + escape( `${data.Code}: ${data.Name} `) + '</span><span class="flex-item text-muted">' + escape(`${data.Slots}`) + '</span></div>';
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