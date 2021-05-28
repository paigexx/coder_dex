var current_username = ""
var cards_div = document.querySelector("#cards")
var no_one = document.querySelector(".no_one")

function getUsername(element){
    console.log(element.value)
    current_username = element.value
}

function remove(){
    no_one.remove()
}

function coder_card(data){
    var res = `<div class="coder_card">
                    <img src="${data.avatar_url}" alt="${data.login}"" 
                    <div>
                        <p>Username: ${data.login}</p> 
                        <p>Name: ${data.name}</p>
                        <p>Location: ${data.location}</p>
                        <p>Public Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + current_username) 
    var coder_data = await response.json()
    cards_div.innerHTML = coder_card(coder_data) + cards_div.innerHTML
}
