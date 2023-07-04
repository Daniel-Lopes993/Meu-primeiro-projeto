let NameInput = document.querySelector("#usuario-l")
let PassInput = document.querySelector("#senha-l")
let array = JSON.parse(localStorage.getItem("USERS"))

function enviar_l(){
    if(NameInput.value.length >= 1){
        if(PassInput.value.length >= 1){
            if(CheckUserInList(NameInput.value)){
                if(PassInput.value == PullPassForUser(NameInput.value)){
                    window.alert("login bem sucedido")
                    window,location.assign("LoginSuce.html")
                } else {
                    window.alert("Sua senha está incorreta")
                }
            } else {
                window.alert("Usuário informado não existe")
            }
        } else {
            alert("O campo de senha nao pode está vazio")
        }

    } else {
        window.alert("O campo de usuario nao pode está vazio")
    }

}

function CheckUserInList(user){
    for(let i in array){
        if(user == array[i].User){
            return true
        } else if(i == array.length - 1){
            return false
        }
    }
}

function PullPassForUser(user){
    let senha
        for(let i in array){
            if(user == array[i].User){
                senha = array[i].Pass
                break
            }else if(i == array.length - 1){
                break
            }    
        }
    return senha
}
