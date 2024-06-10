// Function to toggle the visibility of the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const menuItems = sidebar.querySelector('.menu-items');

    // Toggle 'collapsed' class on sidebar
    sidebar.classList.toggle('collapsed');
    // Toggle 'visible' class on menu items
    menuItems.classList.toggle('visible');

    // Update the toggle icon based on the sidebar state
    if (sidebar.classList.contains('collapsed')) {
        toggleIcon.classList.remove('fa-arrow-left');
        toggleIcon.classList.add('fa-arrow-right');
    } else {
        toggleIcon.classList.remove('fa-arrow-right');
        toggleIcon.classList.add('fa-arrow-left');
    }
}

// Function to toggle the visibility of the right sidebar
function toggleRightSidebar() {
    const rightSidebar = document.getElementById('rightSidebar');
    const rightToggleIcon = document.getElementById('rightToggleIcon');

    // Toggle 'collapsed' class on right sidebar
    rightSidebar.classList.toggle('collapsed');

    // Update the right toggle icon based on the right sidebar state
    if (rightSidebar.classList.contains('collapsed')) {
        rightToggleIcon.classList.remove('fa-times');
        rightToggleIcon.classList.add('fa-arrow-left');
    } else {
        rightToggleIcon.classList.remove('fa-arrow-left');
        rightToggleIcon.classList.add('fa-times');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const projectData = {
        "tasks": [
            {
                "task_id": 18882,
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
                "assets": [
                    {
                        "asset_id": 18883,
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    }
                ]
            }
        ]
    };

    function createAssetContainer(asset) {
        const container = document.createElement('div');
        container.classList.add('asset-container');

        // Add title
        const title = document.createElement('div');
        title.textContent = asset.asset_title;
        title.classList.add('title');
        
        // Add an "i" button icon next to the title
        const iconButton = document.createElement('button');
        iconButton.textContent = 'i';
        iconButton.classList.add('icon-button');
        title.appendChild(iconButton);

        container.appendChild(title);

        // Create content container
        const content = document.createElement('div');
        content.classList.add('content');

        // Add description
        const descriptionTitle = document.createElement('p');
        descriptionTitle.textContent = 'Description:';
        descriptionTitle.classList.add('description-title');
        content.appendChild(descriptionTitle);

        const descriptionContent = document.createElement('p');
        descriptionContent.innerHTML = asset.asset_description;
        descriptionContent.classList.add('description-content');
        content.appendChild(descriptionContent);

        // Add video
        if (asset.asset_content_type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = asset.asset_content;
            iframe.frameborder = "0";
            iframe.allowFullscreen = true;
            content.appendChild(iframe);
        }

        container.appendChild(content);

        return container;
    }

    function renderTask(task) {
        const taskContainer = document.getElementById('task-container');

        // Only render the first asset (YouTube video)
        if (task.assets && task.assets.length > 0) {
            const asset = task.assets[0];
            const assetContainer = createAssetContainer(asset);
            taskContainer.appendChild(assetContainer);
        }
    }

    // Render the first task from the project data
    if (projectData.tasks && projectData.tasks.length > 0) {
        renderTask(projectData.tasks[0]);
    }
});


function toggleThreadContent() {
    const content = document.querySelector('.thread-detail-content');
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
