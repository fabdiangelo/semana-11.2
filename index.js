const name = document.getElementById("name")
const lastName = document.getElementById("lastName")
const birthday = document.getElementById("birthday")
const button = document.getElementById("submitButton")

button.addEventListener('click', sendForm)

function sendForm (){
    let data = {
        name: name.value,
        lastName: lastName.value,
        birthday: birthday.value
    }
    console.log(data)

    fetch ('https://jsonplaceholder.typicode.com/users', {body: data, method: "POST"})
    .then((data) => data.json())
    .then((res) => { console.log('Todo ha salido bien: ', res) })
    .catch((e) => { console.log('Algo ha salido mal: ', e) })
}