class StudentAuth{
    constructor(){ 
        document.querySelector("body").style.display = "none"
        const auth = localStorage.getItem("auth")
        const role = localStorage.getItem("role")
        this.validateAuth(auth, role)
    }

    async validateAuth(auth, role){
        console.log(role, auth)
        if((auth != 1) || (role === "teacher")){
            document.querySelector("body").style.display = "block"
            document.querySelector("body").innerHTML = "Access Denied: You must be logged in as a student to access this window."
        }
        else{
            document.querySelector("body").style.display = "block"
            console.log("user logged in")
            console.log(role)
        }
    }
}