let url = `http://localhost:3000`

let numDrum = ''
let numBass = ''
let numPian = ''

let drum = document.querySelector('.drum')
let bass = document.querySelector('.bass')
let pian = document.querySelector('.pian')
let generator = document.querySelector('.gene')
//
//function selectValue() {
//     drum = document.querySelector('.drum');
//     output= drum.options[drum.selectedIndex].value;
// }
let call = () => {
    fetch(`${url}/bassists`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}