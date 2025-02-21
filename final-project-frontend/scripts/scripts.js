// we are going ot make an event listener.. 
// it will will trigger when the DOM is loaded (aka - upon visting the webpage)
addEventListener("DOMContentLoaded", async function () {
    //const response = await fetch("https://sly-alive-visor.glitch.me/api/songs")
    const response = await this.fetch("http://localhost:3000/api/courses")
    const courses = await response.json()

    let html = ""
    for (let course of courses){
        let courseID = course.ID
        html+=`<li>${course.name} - ${course.description} - <a href="details.html?id=${courseID}">Details</a> </li>`
    }

    document.querySelector("#list_of_courses").innerHTML = html
    
})