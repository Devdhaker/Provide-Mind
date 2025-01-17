// Topics data with folder addresses
const topics = [
    {
        title: "Mathematics",
        link: "./ch/tophic1.html", // Address to the Mathematics page
    },
    {
        title: "Physics",
        link: "./ch/tophic2.html", // Address to the Physics page
    },
    {
        title: "Chemistry",
        link: "./Chemistery/tophic1.html", // Address to the Chemistry page
    },
    {
        title: "Biology",
        link: "./Chemistery/tophic1.html", // Address to the Biology page
    },
    {
        title: "Computer Science",
        link: "./Chemistery/tophic1.html", // Address to the Computer Science page
    },
];

// Select the container
const container = document.getElementById("topics-container");

// Function to fetch the first two lines from a topic page
function fetchTopicDescription(link, callback) {
    fetch(link)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load page.");
            return response.text();
        })
        .then((html) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            // Find the first <h1> and <p> tags
            const title = tempDiv.querySelector("h1")?.innerText || "No Title Found";
            const description = tempDiv.querySelector("p")?.innerText || "No Description Found";

            callback({ title, description });
        })
        .catch(() => {
            callback({
                title: "Error Loading Page",
                description: "Unable to load details from the topic page.",
            });
        });
}

// Generate and append topics dynamically
function generateTopics() {
    // Reverse the topics array to make the latest topic appear first
    const reversedTopics = [...topics].reverse();

    reversedTopics.forEach((topic) => {
        fetchTopicDescription(topic.link, (data) => {
            const topicDiv = document.createElement("div");
            topicDiv.className = "topic";

            // Add topic content dynamically
            topicDiv.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <button class="read-more">Read More</button>
            `;

            // Make the entire topic clickable
            topicDiv.style.cursor = "pointer";

            // Add click event to navigate to the topic page
            topicDiv.onclick = () => {
                window.location.href = topic.link;
            };

            // Prevent button from propagating the click event
            const readMoreButton = topicDiv.querySelector(".read-more");
            readMoreButton.onclick = (event) => {
                event.stopPropagation(); // Stop the event from triggering the topicDiv's onclick
                window.location.href = topic.link;
            };

            // Prepend the topic to the container to ensure it appears at the top
            container.prepend(topicDiv);
        });
    });
}

// Initialize topic generation
generateTopics();
