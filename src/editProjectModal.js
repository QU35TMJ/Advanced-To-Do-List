// Imports

import { currentProjectName } from './index';

// Function

const editProjectModalRender = () => {
    // Modal
    const editProjectModal = document.createElement('div');
    editProjectModal.id = 'editProjectModal';
    editProjectModal.className = 'editProjectModal';

    const popEditProject = document.createElement('div');
    popEditProject.id = 'popEditProject';
    popEditProject.className = 'popEditProject';
    editProjectModal.appendChild(popEditProject);

    const alertEditProject = document.createElement('p');
    alertEditProject.id = 'alertEditProject';
    alertEditProject.className = 'alertEditProject';
    alertEditProject.textContent = `If deleted, all associated tasks will be lost.Are you sure you want to delete "${currentProjectName.innerText}"?`
    popEditProject.appendChild(alertEditProject);

    const cancelEditButton = document.createElement('button');
    cancelEditButton.id = 'cancelEditButton';
    cancelEditButton.className = 'cancelEditButton';
    cancelEditButton.type = 'button';
    cancelEditButton.textContent = 'Cancel';
    popEditProject.appendChild(cancelEditButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'deleteProjectButton';
    deleteProjectButton.className = 'deleteProjectButton';
    deleteProjectButton.type = 'button';
    deleteProjectButton.textContent = 'Delete';
    popEditProject.appendChild(deleteProjectButton);
    
    // Secondary Functions
    
    cancelEditButton.addEventListener('click', function() {
        editProjectModal.style.display = 'none';
    })

    return editProjectModal;
};

// Exports 

export { editProjectModalRender };