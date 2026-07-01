let activity = ["Learning React", "Learning Typescript", "Play Rimworld"]

function showActivity(){
    console.log("Activites:")
    if (activity === 0) {
        console.log("No activites yet!!")
    } else {
        activity.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`)
        })
    }
}

function addActivity(newActivity){
    activity.push(newActivity)
    console.log(`Succesfully added ${newActivity}!`)
    showActivity()
}

function deleteActivity(number){
    let index = number - 1;
    if (index >= 0 && index < activity.length) {
        let deleted = activity.splice(index, 1); //(nomor index, jumlah yg di delete)
        console.log(`Succesfully deleted number ${number}!`)
    } else {
        console.log("Unknown number!!")
    } 
    
    showActivity()
}

showActivity()
addActivity("Scroll Instagram")
addActivity("Take a shower")
deleteActivity(4)
deleteActivity(2)
deleteActivity(3)