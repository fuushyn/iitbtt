
// import autoComplete from "@tarekraafat/autocomplete.js";
// import  './timetable.js';
import './timetablejs.css';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './options.js'
// import './makelist.js'
// import './exporttt.js'

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


let bt = document.getElementById('ss')
let el = document.getElementById('iitbtt')
bt.onclick = function(){
  el.firstChild.nextElementSibling.firstChild.style.visibility = 'hidden' 
  el.firstChild.style.visibility = 'hidden' 
  el.firstChild.firstChild.style.visibility = 'visible'

  htmlToImage.toBlob(el, {width: 2000, height: 500})
  .then(function (blob) {


    if (window.saveAs) {
      window.saveAs(blob, 'timetable.png');
    } else {
     FileSaver.saveAs(blob, 'timetable.png');
   }
   el.firstChild.nextElementSibling.firstChild.style.visibility = 'visible' 
   el.firstChild.style.visibility = 'visible' 
  });

  // htmlToImage.toCanvas(el, {width: 3000, height: 1000})
  // .then(function (canvas) {
  //   canvas.toBlob(function(blob) {
  //     saveAs(blob, "timetableiitb.png");
  //   });

  // });


}


import {courses} from './courses.js';
// let config = {
//   selector: "#autoComplete",
//   placeHolder: "Search for Food...",
//   data: {
//       src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"],
//       // cache: true,
//   },
//   resultsList: {
//       element: (list, data) => {
//           if (!data.results.length) {
//               // Create "No Results" message element
//               const message = document.createElement("div");
//               // Add class to the created element
//               message.setAttribute("class", "no_result");
//               // Add message text content
//               message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
//               // Append message element to the results list
//               list.prepend(message);
//           }
//       },
//       noResults: true,
//   },
//   resultItem: {
//       highlight: true,
//   }

// }

// const autoCompleteJS = new autoComplete({ config });


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

let firstDate = {
  'Monday': '1/2/2023',
  'Tuesday': '1/3/2023',
  'Wednesday': '1/4/2023',
  'Thursday': '1/5/2023',
  'Friday': '1/6/2023',
}

var cal;
function createEvent(course){
  let slot = courses[course]['Slot']
  console.log(`Slot: XX${slot}XX`)

  if(slot=='N/A'){
    return
  }
  slots[courses[course]['Slot']].days.forEach(day => {


    let start = day.start.split(':')
    let end = day.end.split(':')

    console.log(parseInt(start[0]))
    console.log(parseInt(start[1]))
    console.log(parseInt(end[0]))
    console.log(parseInt(end[1]))

    timetable.addEvent(course.split('-')[0]+'  S '+course.split('-')[1].split(':')[1]+'\n'+`${day.start} - ${day.end}`+'\n'+`${courses[course]['Venue']}`, day.name, new Date(2015,7,17,parseInt(start[0]),parseInt(start[1])), new Date(2015,7,17,parseInt(end[0]),parseInt(end[1])));

    console.log('Done');
  });



}

function createCalEvent(cal, course){
  let slot = courses[course]['Slot']
  console.log(`Slot: XX${slot}XX`)

  if(slot=='N/A'){
    return
  }
  slots[courses[course]['Slot']].days.forEach(day => {



    let start = day.start
    let end = day.end

    let startDT = firstDate[day.name]+ ' ' + formatTime(start)

    let endDT = firstDate[day.name]+ ' ' + formatTime(end)


    cal.addEvent(course, courses[course]['Name'], courses[course]['Venue'], startDT, endDT, {freq: 'WEEKLY'});

  });
}

// let courses = {
//   'CS695': {
//     slot: '5',
//   },
//   'CS302': {
//     slot: '1',
//   },
//   'CS317': {
//     slot: '6',
//   },
//   'MA214': {
//     slot: '12',
//   },
//   'CS728': {
//     slot: '9',
//   },
//   'CS387': {
//     slot: 'L4',
//   },
//   'CS753': {
//     slot: '8',
//   },
//   'CS316': {
//     slot: 'L2',
//   },

// }

let colors  = [
  '#2f4f4f',
  '#8b4513',
  '#483d8b',
  '#00008b',
  '#ff4500',
  '#ba55d3',
  '#dc143c',
  '#0000ff',
  '#ff00ff',
  '#1e90ff',
  '#db7093',
  '#ff1493',
  '#ffa500',
  '#3cb371',
  '#9acd32',
  '#00bfff',
]

var slots = {
  '1': {
    days: [
      {
        name: 'Monday', 
        start: '8:30',
        end: '9:25'
      },
      {
        name: 'Tuesday',
        start: '9:30',
        end: '10:25'
      },
      {
        name: 'Thursday',
        start: '10:35',
        end: '11:30'
      }

    ]
    ,Color: colors[0]
  },
  '2': {
    days: [
      {
        name: 'Monday', 
        start: '9:30',
        end: '10:25'
      },
      {
        name: 'Tuesday',
        start: '10:35',
        end: '11:30'
      },
      {
        name: 'Thursday',
        start: '11:35',
        end: '12:30'
      }

    ]
    ,Color: colors[8]

  },
  '3': {
    days: [
      {
        name: 'Monday', 
        start: '10:35',
        end: '11:30'
      },
      {
        name: 'Tuesday',
        start: '11:35',
        end: '12:30'
      },
      {
        name: 'Thursday',
        start: '8:30',
        end: '9:25'
      }

    ]
    ,Color: colors[13]

  },
  '4': {
    days: [
      {
        name: 'Monday', 
        start: '11:35',
        end: '12:30'
      },
      {
        name: 'Tuesday',
        start: '8:30',
        end: '9:25'
      },
      {
        name: 'Thursday',
        start: '9:30',
        end: '10:25'
      }

    ]
    ,Color: colors[3]

  },
  '5': {
    days: [
      {
        name: 'Wednesday', 
        start: '9:30',
        end: '10:55'
      },
      {
        name: 'Friday',
        start: '9:30',
        end: '10:55'
      },


    ]
    ,Color: colors[4]

  },
  '6': {
    days: [
      {
        name: 'Wednesday', 
        start: '11:05',
        end: '12:30'
      },
      {
        name: 'Friday',
        start: '11:05',
        end: '12:30'
      },


    ]
    ,Color: colors[5]

  },
  '7': {
    days: [
      {
        name: 'Wednesday', 
        start: '8:30',
        end: '9:25'
      },
      {
        name: 'Friday',
        start: '8:30',
        end: '9:25'
      },


    ]
    ,Color: colors[6]

  },
  '8': {
    days: [
      {
        name: 'Monday', 
        start: '14:00',
        end: '15:25'
      },
      {
        name: 'Thursday',
        start: '14:00',
        end: '15:25'
      },


    ]
    ,Color: colors[7]

  },
  '9': {
    days: [
      {
        name: 'Monday', 
        start: '15:30',
        end: '16:55'
      },
      {
        name: 'Thursday',
        start: '15:30',
        end: '16:55'
      },


    ]
    ,Color: colors[1]

  },
  '10': {
    days: [
      {
        name: 'Tuesday', 
        start: '14:00',
        end: '15:25'
      },
      {
        name: 'Friday',
        start: '14:100',
        end: '15:25'
      },


    ]
    ,Color: colors[9]

  },
  '11': {
    days: [
      {
        name: 'Tuesday', 
        start: '15:30',
        end: '16:55'
      },
      {
        name: 'Friday',
        start: '15:30',
        end: '16:55'
      },


    ]
    ,Color: colors[10]

  },
  '12': {
    days: [
      {
        name: 'Monday', 
        start: '17:30',
        end: '19:00'
      },
      {
        name: 'Thursday',
        start: '17:30',
        end: '19:00'
      },


    ]
    ,Color: colors[11]

  },

  '14': {
    days: [
      {
        name: 'Tuesday', 
        start: '17:30',
        end: '19:00'
      },
      {
        name: 'Friday',
        start: '17:30',
        end: '19:00'
      },


    ]
    ,Color: colors[12]

  },


  '13': {
    days: [
      {
        name: 'Monday', 
        start: '19:00',
        end: '20:25'
      },
      {
        name: 'Thursday',
        start: '19:00',
        end: '20:25'
      },


    ]
    ,Color: colors[2]

  },

  '15': {
    days: [
      {
        name: 'Tuesday', 
        start: '19:00',
        end: '20:25'
      },
      {
        name: 'Friday',
        start: '19:00',
        end: '20:25'
      },


    ]
    ,Color: colors[14]

  },
  'X': {
    days: [
      {
        name: 'Wednesday', 
        start: '17:30',
        end: '19:00'
      },
      {
        name: 'Wednesday',
        start: '19:00',
        end: '20:25'
      },


    ]
    ,Color: colors[15]

  },
  'L1': {
    days: [
      {
        name: 'Monday', 
        start: '14:00',
        end: '16:55'
      },
    ]
    ,Color: colors[0]

  },
  'L2': {
    days: [
      {
        name: 'Tuesday', 
        start: '14:00',
        end: '16:55'
      },
    ]
    ,Color: colors[1]

  },
  'LX': {
    days: [
      {
        name: 'Wednesday', 
        start: '14:00',
        end: '16:55'
      },
    ]
    ,Color: colors[2]

  },
  'L3': {
    days: [
      {
        name: 'Thursday', 
        start: '14:00',
        end: '16:55'
      },
    ]
    ,Color: colors[3]

  },
  'L4': {
    days: [
      {
        name: 'Friday', 
        start: '14:00',
        end: '16:55'
      },
    ]
    ,Color: colors[4]

  },
  'L5': {
    days: [
      {
        name: 'Wednesday', 
        start: '9:30',
        end: '12:30'
      },
    ]
    ,Color: colors[5]

  },
  'L6': {
    days: [
      {
        name: 'Friday', 
        start: '9:30',
        end: '12:30'
      },
    ]
    ,Color: colors[6]

  },





}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var timetable = new Timetable();
timetable.setScope(8, 21); // optional, only whole hours between 0 and 23
timetable.useTwelveHour(); //optional, displays hours in 12 hour format (1:00PM)

timetable.addLocations(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);


// timetable.addEvent('Frankadelic', 'Monday', new Date(2015,7,17,10,45), new Date(2015,7,17,12,30));

var options = {
  url: '#', // makes the event clickable
  class: 'vip', // additional css class
  data: { // each property will be added to the data-* attributes of the DOM node for this event
    id: 4,
    ticketType: 'VIP'
  },
  onClick: function(event, timetable, clickEvent) {} // custom click handler, which is passed the event object and full timetable as context  
};
// timetable.addEvent('Jam Session', 'Monday', new Date(2015,7,17,21,15), new Date(2015,7,17,23,30), options);



var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable'); // any css selector

new TomSelect("#select-tags",{
plugins: ['remove_button'],
// create: true,
onItemAdd:function(){
  this.setTextboxValue('');
  this.refreshOptions();
},
render:{
  option:function(data,escape){
    // console.log(data)
    const courseName= courses[data.value]['Name']
    const courseCode = data.text.split(' ')[0].split('-')[0]
    const courseSlot = courses[ data.text.split(' ')[0]]['Slot']
    console.log(`code ${courseCode} slot: ${courseSlot}`);
    // return '<div class="d-flex"><span class="ms-auto text-muted">' + escape(data.text) + '</span></div>';
    return '<div class="d-flex"><span>' + escape( `${courseCode}: ${courseName}`)+ '</span><span class="ms-auto text-muted">' +  escape(`Slot ${courseSlot}`)+ '</span></div>'
  },
  item:function(data,escape){
    const courseName= courses[data.value]['Name']
    const courseCode = data.text.split(' ')[0].split('-')[0]
    const courseSlot = courses[data.text.split(' ')[0]]['Slot']

    return '<div>' + escape(`${courseCode}: ${courseName}`) + '</div>';
  }
}
});

const ttbtn = document.getElementById('creatett');
ttbtn.onclick = function(){
  timetable = new Timetable();
  timetable.setScope(8, 21); // optional, only whole hours between 0 and 23
  timetable.useTwelveHour(); //optional, displays hours in 12 hour format (1:00PM)
  
  timetable.addLocations(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  
    
  cal = ics();

  // timetable.addEvent('Frankadelic', 'Monday', new Date(2015,7,17,10,45), new Date(2015,7,17,12,30));
  
  options = {
    url: '#', // makes the event clickable
    class: 'vip', // additional css class
    data: { // each property will be added to the data-* attributes of the DOM node for this event
      id: 4,
      ticketType: 'VIP'
    },
    onClick: function(event, timetable, clickEvent) {} // custom click handler, which is passed the event object and full timetable as context  
  };
  // timetable.addEvent('Jam Session', 'Monday', new Date(2015,7,17,21,15), new Date(2015,7,17,23,30), options);
  
  let selectedCourses  = document.getElementById('select-tags').selectedOptions;
  var values = Array.from(selectedCourses).map(({ value }) => value);
  values.forEach((course)=>{
    createEvent(course);
    createCalEvent(cal, course);
  })

  renderer = new Timetable.Renderer(timetable);
  renderer.draw('.timetable'); // any css selector
  
  let entries = document.getElementsByClassName('time-entry');
  // console.log(entries)
  for(let i=0; i<entries.length; i++){
    let courseName = entries[i].innerText.split('\n')[0].split(' ')[0]
    let slot = entries[i].innerText.split('\n')[0].split(' ')[3]
    console.log(`${courseName}-S:${slot}`)
    let color = slots[slot].Color
    entries[i].style.backgroundColor = color
  }

}

let downbtn = document.getElementById('download')

downbtn.onclick = ()=>{
cal.download('ics')

}