export async function getDatas(){
    let response = await fetch('https://quiz-trainee.herokuapp.com/questions')
    let data = await response.json()
    console.log(data)
    return data
}

