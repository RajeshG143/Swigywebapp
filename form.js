let form= document.querySelector("#form")
let username= document.querySelector("#username")
let email = document.querySelector("#email")
let password=  document.querySelector("#password")
let cpassword= document.querySelector("#confirmpassword")


console.log(cpassword)

form.addEventListener("submit",(e)=>{
        e.preventDefault()
        validation()
})

function validation(){
    let usernamevalue= username.value
    let emailvalue= email.value 
    let passwordvalue= password.value
    let cpasswordvalue= cpassword.value
    let url ="http://localhost:3600/arr"
    let success=true

    if(usernamevalue == ""){
        setError(username,"user name is required")
        success=false
    }
    else{
        setSuccess(username)
    }

    if(emailvalue == ""){
        setError(email,"email id is required")
        success=false
    }
    else if( ! (emailvalue.includes("@gmail") || emailvalue.includes("@email") ) ){
        setError(email, "email requireds @gmail, @email")
        success=false
    }
    else if( !(emailvalue.endsWith(".com") || emailvalue.endsWith('.in'))){
        setError(email, "email need to ends with .com or .in ")
        success=false
    }
    else{
        setSuccess(email)
    }

    if(passwordvalue == ""){
        setError(password,"password id is required")
        success=false
    }
    else if(passwordvalue.length <5){
        setError(password, "password must be atleast 5 character")
        success=false
    }
    else{
        setSuccess(password)
    }

    if(cpasswordvalue == ""){
        setError(cpassword,"confirm password id is required")
        success=false
    }
    else if(cpasswordvalue != passwordvalue){
        setError(cpassword, "password doesnot match")
        success=false
    }
    else{
        setSuccess(cpassword)
    }


    if(success){
        let post={usernamevalue,emailvalue,passwordvalue,cpasswordvalue}
        console.log(post)

        let option= {
            method:"Post",
            header:{"content-type":"application/json"},
            body:JSON.stringify(post)
        }
        Apirequest(url, option)
    }


}

function setError(tag, msg){
    let parentTag= tag.parentElement
   // console.log(parentTag)
    parentTag.querySelector("#error").innerHTML= msg

    parentTag.classList.add("error")
}

function setSuccess(tag){
    let parentTag= tag.parentElement
   // console.log(parentTag)
    parentTag.querySelector("#error").innerHTML=""

    parentTag.classList.remove("error")
    parentTag.classList.add("success")
}



 async function Apirequest(url, option){
    let reponse = await fetch(url, option)
}