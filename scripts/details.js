addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')
    console.log(courseId)

    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId)
    const course = await response.json()
    console.log(course)

    let html = ""
    html += `
        <h1>${course.name}</h1>
        <h2>${course.subject}</h2>
        <h3>Insctructor: ${course.instructor}
        <br>
        Credit Hours: ${course.credits}</h3>
        <p style="text-align:left">${course.description}</p>
    `
    document.querySelector("#details").innerHTML = html
    
    let editBtn = ""
    editBtn += `<a href="edit.html?id=${course._id}">EDIT</a>`
    document.querySelector("#editBtn").innerHTML = editBtn

    let deleteCourseBtn = ""
    deleteCourseBtn += `<a href="#">DELETE</a>`
    document.querySelector("#deleteCourseBtn").innerHTML = deleteCourseBtn
})

addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteCourseBtn").addEventListener("click", deleteCourse)
})

async function deleteCourse(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')

    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId, {
        method: "DELETE"
    })
    
    if(response.ok){
        alert("Deleted Course")
        window.location.replace("/all_courses.html")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot Delete Course"
    }
}