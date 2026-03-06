// script.js

// Function to load projects
function loadProjects() {
    // Simulate fetching projects from an API or data source
    const projects = [
        { id: 1, name: 'Project A', description: 'Description of project A' },
        { id: 2, name: 'Project B', description: 'Description of project B' },
        { id: 3, name: 'Project C', description: 'Description of project C' }
    ];

    // Display projects
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectElement);
    });
}

// Call the function on page load
window.onload = loadProjects;