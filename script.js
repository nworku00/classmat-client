let url = `http://localhost:3000`

let numDrum = ''
let numBass = ''
let numPian = ''

let drum = document.querySelector('.drum')
let bass = document.querySelector('.bass')
let pian = document.querySelector('.pian')
let generator = document.querySelector('.gene')

//function selectValue() {
//     select= document.querySelector('#select');
//     output= select.options[select.selectedIndex].value;
//     document.querySelector('.output').textContent= output;
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