
class Auth{
    constructor(){ 
        document.querySelector("body").style.display = "none"
        const auth = localStorage.getItem("auth")
        const role = localStorage.getItem("role")
        this.validateAuth(auth, role)

    }

    async validateAuth(auth, role){
        console.log(role, auth)

        if(auth != 1) {
            window.location.replace("/index.html")
            const logout = document.querySelector("#logout")
            if (logout) logout.style.display = "none"
        } else if (role === "student") {
            document.querySelector("body").style.display = "block"
            const editBtn = document.querySelector("#editBtn")
            if (editBtn) editBtn.style.display = "none"
            const deleteCourseBtn = document.querySelector("#deleteCourseBtn")
            if (deleteCourseBtn) deleteCourseBtn.style.display = "none"
            const deleteNav = document.querySelector("#deleteNav")
            if (deleteNav) deleteNav.style.display = "none"
            const addNav = document.querySelector("#addNav")
            if (addNav) addNav.style.display = "none"
        } else if (role === "teacher") {
            document.querySelector("body").style.display = "block"
            const cartNav = document.querySelector("#cartNav")
            if (cartNav) cartNav.style.display = "none"
        }

        
    }

    logOut(){
        localStorage.removeItem("auth")
        localStorage.removeItem("token")
        localStorage.removeItem("uname")

        window.location.replace("/index.html")
    }
}