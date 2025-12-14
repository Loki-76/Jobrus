const content = document.getElementById("content");

/* ---------------- VACANCIES ---------------- */

const vacancies = [
    {
        title: "Frontend Developer",
        location: "Berlin, Germany",
        description: "Build modern user interfaces using HTML, CSS, and JavaScript."
    },
    {
        title: "Project Manager",
        location: "Dubai, UAE",
        description: "Manage construction and IT projects from planning to delivery."
    },
    {
        title: "Civil Engineer",
        location: "Toronto, Canada",
        description: "Work on large-scale infrastructure and building projects."
    }
];

function showVacancies() {
    content.innerHTML = "<h2>Available Vacancies</h2>";

    vacancies.forEach(job => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        content.appendChild(card);
    });
}

/* ---------------- APPLICATION FORM ---------------- */

function showApplicationForm() {
    content.innerHTML = `
        <h2>Submit Your Application</h2>
        <div class="card">
            <form onsubmit="submitApplication(event)">
                <label>First Name</label>
                <input type="text" required>

                <label>Last Name</label>
                <input type="text" required>

                <label>Passport Number</label>
                <input type="text" required>

                <label>Age</label>
                <input type="number" required>

                <label>Education</label>
                <textarea required></textarea>

                <label>Work Experience</label>
                <textarea required></textarea>

                <button type="submit">Send Application</button>
            </form>
        </div>
    `;
}

function submitApplication(event) {
    event.preventDefault();
    alert("✅ Your application has been submitted successfully!");
}

/* ---------------- ABOUT US ---------------- */

function showAbout() {
    content.innerHTML = `
        <h2>About Us</h2>
        <div class="card">
            <p>
                We are an international company operating for over <strong>15 years</strong>
                in construction, technology, and infrastructure development.
            </p>
            <p>
                Our projects have been completed in:
                <strong>Berlin, Dubai, London, Toronto, and Singapore</strong>.
            </p>
            <p>
                Ongoing projects are currently in:
                <strong>New York, Riyadh, and Sydney</strong>.
            </p>
            <p>
                Our mission is to build sustainable, innovative solutions and provide
                career opportunities worldwide.
            </p>
        </div>
    `;
}
