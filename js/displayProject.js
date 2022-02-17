function displayRecipe(projects) {
    projects.forEach((project) => {
        const projectsContainer = document.querySelector(".resumedProject");
        let projectCard = new Projects(project);
        projectsContainer.innerHTML += projectCard.displayProjects();
        
    })
}