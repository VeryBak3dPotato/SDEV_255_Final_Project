addEventListener("DOMContentLoaded", function(){
    this.document.querySelector("#addBtn").addEventListener("click", addCourse)
})


async function addCourse(){
    const course = {
        name: document.querySelector("#name").value,
        subjectArea: document.querySelector("#subjectArea").value,
        creditHours: document.querySelector("#creditHours").value,
        description: document.querySelector("#description").value
    }

    const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added course with ID of" + results._id)

        //reset the form
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHtml = "Cannot Add Song"
    }
}
