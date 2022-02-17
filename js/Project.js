class Projects {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.time = data.time;
      this.description = data.description;
      this.tags = data.tags;
    }
    displayProjects() {
      //html index
      return `
      <figure class="project">
      <a href="photographe.html?id=${this.id}">
      <img src="public/images/${this.id}/logo/${this.name}.png" alt="logo ${this.name}" class="project-img">
        <h2></h2>
      </a>
      <figcaption class="project-content">
        <p class="project-description">${this.description}</p>
        <div class="preview">
        <img src="public/images/${this.id}/preview/previewVersionPC.png" alt="logo ${this.name}" class="preview-img"> 
        <img 
        </div>
      </figcaption>
      <ul class="project-tag tag-style">
            ${this.tags
                .map(
                (tag) => `<li class="tags tag-style" tag="${tag}">${tag}</li>`
                )
                .join(" / ")}</li>
        </ul>
      </figure>
          
          `;
    }
  }
  