var socket =io();

const form =document.getElementById("form")
const inputmessage=document.getElementById("inputmessage")
const messagecontainer=document.querySelector(".container")

const name =prompt("enter your name")

const append=(message,position)=>{
    const messageElement=document.createElement("div");
    messageElement.innerText=message;
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    messagecontainer.append(messageElement)
}

socket.emit("new-user-join",name)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(inputmessage.value){
        socket.emit('send',inputmessage.value) 
        inputmessage.value='';
    }
})

socket.on("user-join",(name)=>{
    append(`${name} user join`,"right")
})

socket.on("receive",(data)=>{
    console.log("data",data);
    append(`${data.message} ${data.name}`,"right")
})

socket.on("left",(name)=>{
    append(`${name} user left`)
})

