addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click", deleteCourse)
    getAllCourses()
})

async function getAllCourses(){
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses")
    if(response.ok){
        const courses = await response.json()
        let html = ""
        for(let course of courses){
            html += `<option value="${course._id}">${course.name}</option>`
        }
        document.querySelector("#courseDropdown").innerHTML = html
    }  

}

async function deleteCourse(){
    const courseID = document.querySelector("#courseDropdown option:checked").value;
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseID, {
        method: "DELETE"
    })
    
    if(response.ok){
        getAllCourses()
        document.querySelector("#error").innerHTML = "Deleted Course"
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot Delete"
    }
}