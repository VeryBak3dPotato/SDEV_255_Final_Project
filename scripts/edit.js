addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updateBtn").addEventListener("click", updateCourse)
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')

    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId)
    if(response.ok){
        let course =  await response.json()
        // document.querySelector("#courseId").value = course._id
        document.querySelector("#name").value = course.name
        document.querySelector("#subjectArea").value = course.subject
        document.querySelector("#creditHours").value = course.credits
        document.querySelector("#description").value = course.description
        document.querySelector("#instructor").value = course.instructor
    }

})

async function updateCourse(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')

    const course = {
        _id: courseId,
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subjectArea").value,
        credits: document.querySelector("#creditHours").value,
        description: document.querySelector("#description").value,
        instructor: document.querySelector("#instructor").value,
    }
   
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)

    })

    if(response.ok){
        alert("Updated Course")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot Update Course"
    }
}