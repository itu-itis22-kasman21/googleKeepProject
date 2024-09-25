// Function to initialize local storage with noteNum if it doesn't exist
function initializeLocalStorage() {
    if (!localStorage.noteNum) {
        localStorage.noteNum = 0;
    }
    if(!localStorage.darkButtonClick) {
        localStorage.darkButtonClick = 0;
    }
}
// Function to load all note boxes from local storage
function loadBoxes() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === 'noteNum' || key == 'darkButtonClick') {
            continue;
        } else {
            let indexNote = localStorage.key(i).substring(4);
            addBox(Number(indexNote));
        }
    }
}
// Function to add a single note box to the page
function addBox(noteIndex) {
    const noteBoxesContainer = document.getElementById('note-boxes-container');

    const eachBox = document.createElement('div');
    eachBox.className = 'each-box';
    eachBox.id = `box${noteIndex}`;

    const eachTitle = document.createElement('div');
    eachTitle.className = 'eachTitle';

    const titleInput = document.createElement('textarea');
    titleInput.id = `box-title${noteIndex}`;
    titleInput.className = 'each-box-title';
    titleInput.type = 'text';

    const noteData = JSON.parse(localStorage.getItem(`note${noteIndex}`)) || { title: '', content: '' };
    titleInput.value = noteData.title;
    titleInput.style.fontWeight = 'bold';

    eachTitle.appendChild(titleInput);
    eachBox.appendChild(eachTitle);

    const eachContent = document.createElement('div');
    eachContent.className = 'each-box-content';

    const eachContentInput = document.createElement('textarea');
    eachContentInput.type = 'text';
    eachContentInput.className = 'each-box-content-input';
    eachContentInput.id = `box-content${noteIndex}`;
    eachContentInput.value = noteData.content;
    eachContent.appendChild(eachContentInput);

    const updateButton = document.createElement('button');
    updateButton.type = 'button';
    updateButton.className = 'update-button';
    updateButton.id = `button-update${noteIndex}`;
    updateButton.textContent = 'Save';
    eachContent.appendChild(updateButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.id = `button-delete${noteIndex}`;
    deleteButton.textContent = 'Delete';
    eachContent.appendChild(deleteButton);

    eachBox.appendChild(eachContent);
    noteBoxesContainer.insertBefore(eachBox, noteBoxesContainer.firstChild); // new added item become first item
}
// Function to create the middle note input area
// function createMiddleNote() {
//     const mideNoteTakingField = document.getElementById('mid-note-write-container');
//     //removed older small note area
//     const midNote = document.getElementById('mid-note-write');
//     // midNote.classList.add('gizle');


//     //this is container of middle note taking area
    
//     //new big note taking area
//     const midLargeBox = document.createElement('div');
//     midLargeBox.className = 'mid-large-box';
//     midLargeBox.id = 'mid-large-box'
//     midLargeBox.classList.add('gizle');

//     const midLargeBoxTitle = document.createElement('div');
//     midLargeBoxTitle.className = 'mid-large-box-title';

//     const midLargeBoxTitleInput = document.createElement('textarea');
//     midLargeBoxTitleInput.id = 'mid-large-box-title-input';
//     midLargeBoxTitleInput.type = 'text';
//     midLargeBoxTitleInput.placeholder = 'Title';
//     midLargeBoxTitleInput.style.fontWeight = 'bold';

//     midLargeBoxTitle.appendChild(midLargeBoxTitleInput);
//     midLargeBox.appendChild(midLargeBoxTitle);

//     const midContent = document.createElement('div');
//     midContent.className = 'mid-large-box-content';

//     const midContentInput = document.createElement('textarea');
//     midContentInput.type = 'text';
//     midContentInput.className = 'mid-large-box-content-input';
//     midContentInput.placeholder = 'You can write here...';

//     midContent.appendChild(midContentInput);

//     const midSaveButton = document.createElement('button');
//     midSaveButton.type = 'button';
//     midSaveButton.className = 'mid-save-button';
//     midSaveButton.id = 'mid-save-button';
//     midSaveButton.textContent = 'Add';

//     midContent.appendChild(midSaveButton);
//     midLargeBox.appendChild(midContent);
//     mideNoteTakingField.appendChild(midLargeBox);

//     midLargeBoxTitleInput.focus();
// }
function search(query) {
    //hides all boxes
    for(let i = 0; i < localStorage.getItem('noteNum'); i++) {
        const hideBoxe = document.getElementsByClassName('each-box')[i];
        if(hideBoxe) {
            hideBoxe.classList.add('gizle');    
        }
    }
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key == 'noteNum' || key == 'darkButtonClick') {
            continue;
        }

        const noteData = JSON.parse(localStorage.getItem(key));
        const title = noteData.title.toLowerCase();
        const content = noteData.content.toLowerCase();
        const searchQuery = query.toLowerCase();

        if(title.includes(searchQuery) || content.includes(searchQuery)) {
            const showBox = document.getElementById(`box${key.substring(4)}`);
            showBox.classList.remove('gizle');
        }
    }
}
function darkMode() {
    const root = document.documentElement;
    const darkButton = document.getElementById('dark-mode-button');
    const dayButton = document.getElementById('day-mode-button');
    const darkSearchInputColor = document.getElementById('header-search-input');
    if(localStorage.darkButtonClick % 2 == 0) { // make it day mode
        root.style.setProperty('--theme-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--border', 'none');
        root.style.setProperty('--search-box-shadow', 'rgba(0, 0, 0, 0.2) 0px 8px 10px -1px, rgba(0, 0, 0, 0.12) 0px 4px 8px -1px');
        root.style.setProperty('--boxes-shadow', 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px');
        root.style.setProperty('--search-background', '#F1F3F4');
        darkButton.classList.remove('gizle');
        dayButton.classList.add('gizle');
    }
    else {  // make it dark mode
        root.style.setProperty('--theme-color', '#202124');
        root.style.setProperty('--text-color', '#E8EAED');
        root.style.setProperty('--border', '1px solid #5F6368');
        root.style.setProperty('--search-box-shadow', 'none');
        root.style.setProperty('--boxes-shadow', 'none');
        root.style.setProperty('--search-background', 'theme-color');
        darkButton.classList.add('gizle');
        dayButton.classList.remove('gizle');
        darkSearchInputColor.style.color = 'black';
    }
}
// Main function to run when the window loads
window.addEventListener('load', function () {
    initializeLocalStorage();
    darkMode();
    loadBoxes();
    //createMiddleNote();

    // Single event listener for all clicks
    document.addEventListener('click', function (event) {
        const target = event.target;
        
        const midNote = document.getElementById('mid-note-write');        
        const midLargeBox = document.getElementById('mid-large-box');
        const midLargeBoxInput = document.getElementById('mid-large-box-title-input');
        // const contentInput = document.querySelector('.mid-large-box-content-input');
        
        // Check if the clicked element or any of its parents have the class 'mid-note-write'
        if (target.closest('.mid-note-write')) {
            midNote.classList.add('gizle');
            midLargeBox.classList.remove('gizle');
            midLargeBoxInput.focus();
            // midLargeBoxInput.placeholder = 'Title';
            // contentInput.placeholder = 'You can write here...';
        } 
        else if (!target.closest('.mid-large-box')) {
            midNote.classList.remove('gizle');
            midLargeBox.classList.add('gizle');
        }
        
        if (target.id.startsWith('button-update')) {
            const noteIndex = target.id.replace('button-update', '');
            const titleInput = document.getElementById(`box-title${noteIndex}`);
            const contentInput = document.getElementById(`box-content${noteIndex}`);
            localStorage.setItem(`note${noteIndex}`, JSON.stringify({ title: titleInput.value, content: contentInput.value }));
        } else if (target.id.startsWith('button-delete')) {
            const noteIndex = target.id.replace('button-delete', '');
            const noteBoxesContainer = document.getElementById('note-boxes-container');
            const eachBoxContainer = document.getElementById(`box${noteIndex}`);
            noteBoxesContainer.removeChild(eachBoxContainer);
            localStorage.removeItem(`note${noteIndex}`);
            localStorage.noteNum--;
        } else if (target.id === 'mid-save-button') {
            const titleInput = document.getElementById('mid-large-box-title-input');
            const contentInput = document.querySelector('.mid-large-box-content-input');
            const titleSubmit = titleInput.value;
            const contentSubmit = contentInput.value;
            localStorage.setItem(`note${localStorage.noteNum}`, JSON.stringify({ title: titleSubmit, content: contentSubmit }));
            titleInput.value = "";
            contentInput.value = "";
            addBox(localStorage.noteNum);
            localStorage.noteNum++;
            titleInput.focus(); // cursor will be on title input
        } //else if(target.id === 'search-button') {
        //     const searchInput = document.getElementById('header-search-input');
        //     search(searchInput.value);
        //} 
        else if(target.id === 'dark-mode-button' || target.id === 'day-mode-button') {
                localStorage.darkButtonClick++;
                darkMode();
        }
    }); 

    document.addEventListener('input', function(event) {
        const midNote = document.getElementById('mid-note-write');
        const midLargeBox = document.getElementById('mid-large-box');
        const midLargeBoxInput = document.getElementById('mid-large-box-title-input')
        
        if(event.target.id == 'header-search-input') {
            search(event.target.value);
        } else if(event.target.id === 'mid-note-input') {
            midNote.classList.add('gizle');
            midLargeBox.classList.remove('gizle');
            midLargeBoxInput.focus();
        }
    })
    
});
