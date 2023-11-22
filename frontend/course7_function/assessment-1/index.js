$("#btn-add-skill").click(function (e) { 
    e.preventDefault();
    // menambahkan skill
    const skillName = $("#skill-name").val();
    const skillValue = $("#skill-value").val()

    $("#skill-container").append(generateProgressSkill(skillName, skillValue));
});

function generateProgressSkill(title, value){
    // value define from 1 - 100
    if (value > 100){
        value = 100
    } else if(value < 1){
        value = 1
    }
    
    // create container element
    const divContainer = document.createElement("div")
    divContainer.setAttribute("class", "progress mb-4")
    divContainer.setAttribute("role","progressbar")
    divContainer.setAttribute("aria-label","Basic Example")
    divContainer.setAttribute("aria-valuenow","25")
    divContainer.setAttribute("aria-valuemin","0")
    divContainer.setAttribute("aria-valuemax","100")
    divContainer.setAttribute("style","height: 25px")

    // create element value
    const divElement = document.createElement("div")
    divElement.setAttribute("class", "progress-bar")
    divElement.setAttribute("style", `width: ${value}%`)
    divElement.innerText = title

    // assemble
    divContainer.append(divElement)
    return divContainer
}