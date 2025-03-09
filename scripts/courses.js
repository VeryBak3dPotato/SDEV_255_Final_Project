addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#addCartBtn").addEventListener("click", addToCart)
    getAllCourses()
    getEnrolledCourses()
})

async function getAllCourses(){
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses")
    if(response.ok){
        const courses = await response.json()
        let html = ""
        for(let course of courses){
            html += `<option value="${course._id}">${course.name}</option>`
        }
        document.querySelector("#cartDropdown").innerHTML = html
    }  

}

async function getEnrolledCourses(){
    const userId = localStorage.userId
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/user/" + userId)
    if (response.ok){
        let user = await response.json()
        let html = ""
        for(i=0; i<user.cart.length; i++){
            const res = await fetch ("https://locrian-harsh-scion.glitch.me/api/courses/" + user.cart[i])
            const course = await res.json()
            console.log(course)
            html+= `
                <li>
                    <h4>${course.name}</a></h4>
                    <p>
                        Instructor: ${course.instructor}
                    </p>
                    <p>
                        Credit Hours: ${course.credits}
                    </p>
                </li>
                <br>
            `
        }
        document.querySelector("#addedCourses").innerHTML = html
    }
}

async function addToCart() {
    const userID = localStorage.userId
    const courseID = document.querySelector("#cartDropdown option:checked").value
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/cart/" + userID + "/courses/" + courseID,{
        method: "POST"
    })
    if(response.ok){
        getEnrolledCourses()
    }

}