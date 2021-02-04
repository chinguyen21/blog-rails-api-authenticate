
URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    createUser();
    authUser();
})

const showSecretMessage = () => {
    section = document.querySelector('#secret-message')
    h1 = document.createElement('h1')
    h1.innerText = "We are Children of the Code. The best cohort ever"
    section.appendChild(h1)

}

const createUser = () => {
    let form = document.querySelector(".ui1")
   
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if (Object.values(document.querySelectorAll('#alert-wrong-pw'))) {
            Object.values(document.querySelectorAll('#alert-wrong-pw')).forEach(p => p.remove())
        }
        newUser = {
            name: event.target.name.value, 
            age: event.target.age.value,
            email: event.target.email.value,
            // password: event.target.password.value,
            // password_confirmation: event.target.password_confirmation.value
        }
        reqPackage = {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }
        fetch(`${URL}/users`, reqPackage)
        .then(res => res.json())
        .then(res_status => {
            if (res_status.status != 200) {
                res_status.errors.forEach(error => {
                    let p = document.createElement('p')
                    p.id = "alert-wrong-pw"
                    p.innerText = error
                    form.appendChild(p)
                })
                
            } else {
                form.classList.remove('show')

                let h5= document.createElement('h5')
                h5.innerText = "Now you can see the message"
                document.querySelector('.message').appendChild(h5)

                setTimeout(()=> showSecretMessage(), 2000);
                form.reset()
            }
        })
    })
}



// const authUser = () => {
//      let form = document.querySelector(".ui2")
//      form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         if ( document.querySelector('#alert-wrong-pw')) {
//             document.querySelector('#alert-wrong-pw').remove()
//         }
//         checkUser = {
//             email: event.target.email.value, 
//             password: event.target.password.value
//         }
//         reqPackage = {
//             method: "POST", 
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(checkUser)
//         }
//         fetch(`${URL}/authUser`, reqPackage)
//         .then(res => res.json())
//         .then(res_status => {
//             if (res_status.status != 200) {
//                     let p = document.createElement('p')
//                     p.id = "alert-wrong-pw"
//                     p.innerText = res_status.message
//                     form.appendChild(p)
                
//             } else {
//                 form.classList.remove('show')

//                 let h5= document.createElement('h5')
//                 h5.innerText = "Now you can see the message"
//                 document.querySelector('.message').appendChild(h5)

//                 setTimeout(()=> showSecretMessage(), 2000);
//                 form.reset()
//             }
//         })
//     })

// }