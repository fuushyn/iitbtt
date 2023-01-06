
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

  htmlToImage.toBlob(el, {width: 2000, height: 2000})
  .then(function (blob) {


    if (window.saveAs) {
      window.saveAs(blob, 'my-node.png');
    } else {
     FileSaver.saveAs(blob, 'my-node.png');
   }
   el.firstChild.nextElementSibling.firstChild.style.visibility = 'visible' 
   el.firstChild.style.visibility = 'visible' 
  });

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
  slots[courses[course]['Slot']].days.forEach(day => {

    let start = day.start.split(':')
    let end = day.end.split(':')

    console.log(parseInt(start[0]))
    console.log(parseInt(start[1]))
    console.log(parseInt(end[0]))
    console.log(parseInt(end[1]))

    timetable.addEvent(course.split('-')[0]+'\n'+`${day.start} - ${day.end}`+'\n'+`${courses[course]['Venue']}`, day.name, new Date(2015,7,17,parseInt(start[0]),parseInt(start[1])), new Date(2015,7,17,parseInt(end[0]),parseInt(end[1])));

  });
  document.getElementsByClassName('time-entry').sty

}

function createCalEvent(cal, course){
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
        start: '11:35',
        end: '12:30'
      }

    ]
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
  },
  '10': {
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
  },


  '13': {
    days: [
      {
        name: 'Monday', 
        start: '19:00',
        end: '20:25'
      },
      {
        name: 'Thursay',
        start: '19:00',
        end: '20:25'
      },


    ]
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
  },
  'L1': {
    days: [
      {
        name: 'Monday', 
        start: '14:00',
        end: '16:55'
      },
    ]
  },
  'L2': {
    days: [
      {
        name: 'Tuesday', 
        start: '14:00',
        end: '16:55'
      },
    ]
  },
  'Lx': {
    days: [
      {
        name: 'Wednesday', 
        start: '14:00',
        end: '16:55'
      },
    ]
  },
  'L3': {
    days: [
      {
        name: 'Thursday', 
        start: '14:00',
        end: '16:55'
      },
    ]
  },
  'L4': {
    days: [
      {
        name: 'Friday', 
        start: '14:00',
        end: '16:55'
      },
    ]
  },
  'L5': {
    days: [
      {
        name: 'Wednesday', 
        start: '9:30',
        end: '12:30'
      },
    ]
  },
  'L6': {
    days: [
      {
        name: 'Friday', 
        start: '9:30',
        end: '12:30'
      },
    ]
  },





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
create: true,
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
    return '<div class="d-flex"><span>' + escape(`Slot ${courseSlot}`) + '</span><span class="ms-auto text-muted">' + escape( `${courseCode}: ${courseName}`) + '</span></div>'
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
  
  
}

let downbtn = document.getElementById('download')

downbtn.onclick = ()=>{
cal.download('ics')

}