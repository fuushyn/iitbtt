import {courses} from './courses.js'

const dropdown = document.getElementById('select-tags')

for (const course in courses){
  dropdown.innerHTML += `<option value=${course}>${course}</option>`
}


console.log(dropdown.innerHTML)