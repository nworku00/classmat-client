let url = `http://localhost:3000`

let numDrum = ''
let numBass = ''
let numPian = ''

let drum = document.querySelector('.drum')
let bass = document.querySelector('.bass')
let pian = document.querySelector('.pian')
let generator = document.querySelector('.generator')

let call = () => {
    function selectValue() {
    
    outputDrum = drum.options[drum.selectedIndex].value;

    outputBass = bass.options[bass.selectedIndex].value;
    
    outputPian = pian.options[pian.selectedIndex].value;
}
    selectValue()
    fetch(`${url}/drummers`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= parseInt(outputDrum); i++){
            
            let drumHtml= `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data[i].instrument}</li>
                    <li class="list-group-item">${data[i].name}</li>
                </ul>
            </div>
            `
            let sec = document.createElement("div");
            sec.classList.add('col')
            sec.innerHTML = drumHtml;
            generator.append(sec);
        } 
    }).catch(err => {
        console.log(err)
    })
    fetch(`${url}/bassists`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= parseInt(outputBass); i++){
            
            let bassHtml= `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data[i].instrument}</li>
                    <li class="list-group-item">${data[i].name}</li>
                </ul>
            </div>
            `
            let sec = document.createElement("div");
            sec.classList.add('col')
            sec.innerHTML = bassHtml;
            generator.append(sec);
        } 
    }).catch(err => {
        console.log(err)
    })
    fetch(`${url}/pianists`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= parseInt(outputPian); i++){
            
            let pianHtml= `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data[i].instrument}</li>
                    <li class="list-group-item">${data[i].name}</li>
                </ul>
            </div>
            `
            let sec = document.createElement("div");
            sec.classList.add('col')
            sec.innerHTML = pianHtml;
            generator.append(sec);
        } 
    }).catch(err => {
        console.log(err)
    })
}
