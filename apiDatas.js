export async function getDatas(){
    let res = await fetch('https://quiz-trainee.herokuapp.com/questions')
    let objects = await res.json()
    console.log(objects[0])
    return objects
}


