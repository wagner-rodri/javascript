class ToolTip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projItemElement = document.getElementById(this.id);
        const switchButton = projItemElement.querySelector('button: last-of-type');
        switchButton.addEventListener('click', )
    }
}

class ProjectList {
    projects = [];
    constructor(type, switchHandlerFunction) {
        this.type = type;
        this.switchHandler = switchHandlerFunction;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects)
    }

    addProject() {

    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex);
        
        this.project = this.projects.filter(p => p.id !== projectId)
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();