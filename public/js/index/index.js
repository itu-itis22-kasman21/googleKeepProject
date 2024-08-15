// document.addEventListener('DOMContentLoaded', function() {
    
//     const addButton = document.getElementById('addButton');
//     const firstBox = document.getElementById('firstBox');
//     firstBox.style.display = 'none';

//     function revealBox(box) {
//         if(box.style.display === 'none') {
    //             box.style.display = 'block';
    //         }
//         else {
//             box.style.display = 'none';
//         }
//     }
//     addButton.addEventListener('click', function() {
    //         revealBox(firstBox);
    //     });
    // });
    // function addPlusIm() {
        //     const plusIm = document.createElement('img');
        //     plusIm.src = "./images/plus.png";
        
        //     const header = document.getElementsByClassName('header')[0];
        //     header.appendChild(plusIm);
        // }
        
        // addPlusIm();
document.addEventListener('DOMContentLoaded', function() {


function addBox() {
    const boxListDiv = document.getElementById('mainBoxList');
    const divElem = document.createElement('div');
    divElem.className = 'divElem';

    const eachBox = document.createElement('div');
    eachBox.className = 'eachBox';
    eachBox.id = 'firstBox';

    const eachTitle = document.createElement('div');
    eachTitle.className = 'eachTitle';

    const titleInput = document.createElement('textArea');
    titleInput.id = 'firstBoxTitle';
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.style.fontWeight = 'bold';

    eachTitle.appendChild(titleInput);
    eachBox.appendChild(eachTitle);

    const eachContent = document.createElement('div');
    eachContent.className = 'eachBoxContent';

    const eachContentInput = document.createElement('textarea');
    eachContentInput.type = 'text';
    eachContentInput.className = 'eachBoxContentInput';
    eachContentInput.placeholder = 'You can write here';

    eachContent.appendChild(eachContentInput);
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.className = 'saveButton';
    saveButton.id = 'firstBoxSave';
    saveButton.textContent = 'Save';

    eachContent.appendChild(saveButton);
    eachBox.appendChild(eachContent);
    divElem.appendChild(eachBox);
    boxListDiv.appendChild(divElem);

}

function extendMiddleNote() {
    const mideNoteTakingField = document.getElementById('midNoteTake');
    const midNote = document.getElementById('midBox');
    midNote.remove();

    const newBox = document.createElement('div');
    newBox.className = 'newBox';

    const noteTitle = document.createElement('div');
    noteTitle.className = 'noteTitle';

    const noteTitleInput = document.createElement('textarea');
    noteTitleInput.id = 'noteBoxTitleInput';
    noteTitleInput.type = 'text';
    noteTitleInput.placeholder = 'Title';
    noteTitleInput.style.fontWeight = 'bold';
    
    noteTitle.appendChild(noteTitleInput);
    newBox.appendChild(noteTitle);

    const noteContent = document.createElement('div');
    noteContent.className = 'noteBoxContent';

    const noteContentInput = document.createElement('textarea');
    noteContentInput.type = 'text';
    noteContentInput.className = 'noteBoxContentInput';
    noteContentInput.placeholder = 'You can write here...';

    noteContent.appendChild(noteContentInput);

    const noteSave = document.createElement('button');
    noteSave.type = 'button';
    noteSave.className = 'noteSave';
    noteSave.id = 'noteSave';
    noteSave.textContent = 'Add';

    noteContent.appendChild(noteSave);
    newBox.appendChild(noteContent);
    midNoteTake.appendChild(newBox);   
    
    noteTitleInput.focus();
    noteSave.addEventListener('click', function() {
        noteTitleInput.value = "";
        noteContentInput.value = "";
        addBox();
    });

    
}

// const addButton = document.getElementById('plusImage');
// addButton.addEventListener('click', addBox);

const midB = document.getElementById('midBox');
midB.addEventListener('click', extendMiddleNote);

// const NoteSaveButton = document.getElementById('noteSave');
// NoteSaveButton.addEventListener('click', addBox);
});
