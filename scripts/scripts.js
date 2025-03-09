addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses")
    const courses = await response.json()

    let html = ""
    for (let course of courses) {
        let courseID = course._id
        html += `
        <li>
            <h4><a href="details.html?id=${courseID}">${course.name}</a></h4>
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

    document.querySelector("#list_of_courses").innerHTML = html
})