class Tooltip {

}

class ProjectItem {
    constructor(id, updateProjectListFunction) {
        this.id = id;
        this.updateProjectListFunction = updateProjectListFunction
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {}

    connectSwitchButton() {
        const ProjectItemElement = document.getElementById(this.id);
        const switchButton = ProjectItemElement.querySelector(
            "button:last-of-type"
        );
        switchButton.addEventListener("click", this.updateProjectListFunction.bind(this));
    }
}

class ProjectList {
    projects = [];  
    constructor(type, switchHandlerFunction) {

        this.type= type;
        this.switchHandlerFunction = switchHandlerFunction;

        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // for (let i = 0; i < this.projects.length; i++)
        for (const projectItem of projectItems) {
            console.log(ProjectItem);
            this.projects.push(
                new ProjectItem(projectItem.id, this.switchProject.bind(this))
            );
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {}

    switchProject(projectId) {
        // this.addProject();
        this.project = this.projects.find((i) => i.id === projectId);
        this.projects.filter((i) => i.id === projectId)
        // this.projects = this.projects.findIndex((i) => i.id === projectId);
        // const projectIndex = this.projects.findIndex(i => i.id === projectId);
        // this.projects.splice();
        // this.switchHandlerFunction(
        //     this.projects.find((i) => i.id === projectId)
        // )
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    }
}

App.init();