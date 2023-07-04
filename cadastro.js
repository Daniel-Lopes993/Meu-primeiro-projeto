let NameInput = document.querySelector("#usuario-c")
let PassInput = document.querySelector("#senha-c")
let PassConfInput = document.querySelector("#confsenha-c")

let UserC = []
let reload = localStorage.getItem("USERS")
UserC = JSON.parse(reload)

function enviar_c(){
    if(CheckUserAndPass(NameInput, PassInput, PassConfInput)){
        alert("Você foi cadastrado com sucesso!!")
        Cadastrar(NameInput.value, PassInput.value)
        window.document.location.assign("Login.html")
    }
}

function CheckUserAndPass(NameInput, PassInput, PassConfInput){
    if (NameInput.value.length >= 4) {
        if(UserList(NameInput.value)){
            window.alert("O usuario informado ja está em uso.")
        }else {
             if(PassInput.value.length == 0 || PassConfInput.value.length == 0){
            alert("O campo de senha/Confirmar senha nao podem ficar vazio")
            } else if(PassInput.value.length < 6){
                alert("A senha deve conter no minimo 6 digitos")
            } else if(PassInput.value == PassConfInput.value) {
                    return true
            } else if(PassInput.value != PassConfInput.value){
                alert("As senhas nao estao identicas")
            }
        }
    } else {
        window.alert("Usuario no minimo 4 digitos")
    }
}

function UserList(user){
    for(let i in UserC) {
        if(user == UserC[i].User) {
            return true
        } else if (i == UserC.length - 1){
            return false
        }
    }
}

function Cadastrar(user, pass){
    UserC.push({User:user, Pass:pass})
    let USERS = JSON.stringify(UserC)
    localStorage.setItem("USERS", USERS)
}