// Topics data with folder addresses
const topics = [
    {
        title: "Mathematics",
        link: "./math/tophic1.html", // Address to the Mathematics page
    },
    {
        title: "Physics",
        link: "./physics/physics.html", // Address to the Physics page
    },
    {
        title: "Chemistry",
        link: "./chemistry/chemistry.html", // Address to the Chemistry page
    },
    {
        title: "Biology",
        link: "./biology/biology.html", // Address to the Biology page
    },
    {
        title: "Computer Science",
        link: "./computer_science/computer_science.html", // Address to the Computer Science page
    },
];

// Select the container
const container = document.getElementById("topics-container");

// Function to fetch the first two lines from a topic page
function fetchTopicDescription(link, callback) {
    fetch(link)
        .then((response) => response.text())
        .then((html) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            // Find the first two lines (e.g., <h1> and <p>)
            const title = tempDiv.querySelector("h1")?.innerText || "No Title Found";
            const description = tempDiv.querySelector("p")?.innerText || "No Description Found";

            callback({ title, description });
        })
        .catch(() => {
            callback({ title: "Error Loading Page", description: "Unable to load details." });
        });
}

// Generate and append topics dynamically
topics.forEach((topic) => {
    fetchTopicDescription(topic.link, (data) => {
        const topicDiv = document.createElement("div");
        topicDiv.className = "topic";

        // Add topic data
        topicDiv.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <a href="${topic.link}" target="_blank">Read More</a>
        `;

        // Make the entire box clickable
        topicDiv.onclick = () => window.open(topic.link, "_blank");

        container.appendChild(topicDiv);
    });
});
