import {courses} from './courses'

const dropdown = document.getElementById('select-tags')

for (const course in courses){
  dropdown.innerHTML += `<option value=${course}>${course}: ${courses[course]['Name']}</option>`
}

console.log(dropdown.innerHTML)