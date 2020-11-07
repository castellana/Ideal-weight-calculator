// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

// • Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1


const height = document.getElementById("height")
const age = document.getElementById("age")
const normalBody = document.getElementById('normalBody')
const slimBody = document.getElementById('slimBody')
const broadBody = document.getElementById('broadBody')
const result = document.getElementById('result')





const calculate = () => {
    console.log("working");
    console.log(height.value);
    console.log(age.value);
    console.log(normalBody.value);
    console.log(slimBody.value);
    console.log(broadBody.value);
    result.innerHTML =""  //para vaciar las frases del caso anterior

    if (normalBody.checked) {
        let weight1 = [(height.value - 100) + (age.value / 10)] * 0.9
        result.innerHTML += `${Math.round(weight1)} Kg.`
    } else if (slimBody.checked) {
        let weight2 = [(height.value - 100) + (age.value / 10)] * 0.9 * 0.9
        result.innerHTML += `${Math.round(weight2)} Kg.`
    } else {
        let weight3 = [(height.value - 100) + (age.value / 10)] * 0.9 * 1.1
        result.innerHTML += `${Math.round(weight3)}Kg.`
    }
}
calculate()



