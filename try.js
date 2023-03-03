
const button=document.querySelector("button")
button.addEventListener("click",cityfn)

// let resultdiv= document.createElement("div")
//     resultdiv.id="result"
//     console.log("created")



function cityfn(){

    const input= document.getElementById("input")
    const city=input.options[input.selectedIndex].value

    let population=0,Language=0,temples=0

    switch(city){

    case "Chennai":
        population=12807834
        Language="Tamil"
        temples=500
        break;

        case "Villupuram":
            population=4807834
            Language="Tamil"
            temples=300
            break;

            case "Salem":
                population=6807834
                Language="Tamil"
                temples=400
                break;

                case "Thiruvannamalai":
                    population=7807834
                    Language="Tamil"
                    temples=700
                    break;

                    case "Trichy":
                        population=6637834
                        Language="Tamil"
                        temples=350
                        break;

                        case "Vellore":
                            population=6807834
                            Language="Tamil"
                            temples=250
                            break;
}

    let text=`The Indian city of ${city} has a population ${population} and spoke language is ${Language}, temple counts are ${temples} `

    console.log(text)
// document.querySelector("container").appendChild("resultdiv")
document.getElementById("result").innerHTML = text


}
