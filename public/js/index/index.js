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
    if(!localStorage.noteNum) {
        localStorage.noteNum = 0;
    }
    if(!localStorage.maxElem) {
        localStorage.maxElem = 0;
    }
    for(let i = 0; i < localStorage.maxElem; i++) {
        if(localStorage[`note${i}`] == undefined) {
            continue;
        }
        addBox(i);
    }

function addBox(noteIndex) {
    const boxListDiv = document.getElementById('mainBoxList');
    const divElem = document.createElement('div');
    divElem.className = 'divElem';

    const eachBox = document.createElement('div');
    eachBox.className = 'eachBox';
    eachBox.id = `${noteIndex}box`;

    const eachTitle = document.createElement('div');
    eachTitle.className = 'eachTitle';

    const titleInput = document.createElement('textArea');
    titleInput.id = `${noteIndex}boxTitle`;
    titleInput.className = 'eachBoxTitle'
    titleInput.type = 'text';
    // titleInput.placeholder = 'Title';
    const noteData = JSON.parse(localStorage.getItem(`note${noteIndex}`)) || { title: '', content: '' };
    titleInput.value = noteData.title;
    titleInput.style.fontWeight = 'bold';

    eachTitle.appendChild(titleInput);
    eachBox.appendChild(eachTitle);

    const eachContent = document.createElement('div');
    eachContent.className = 'eachBoxContent';

    const eachContentInput = document.createElement('textarea');
    eachContentInput.type = 'text';
    eachContentInput.className = 'eachBoxContentInput';
    // eachContentInput.placeholder = 'You can write here';
    // eachContentInput.textContent = JSON.parse(localStorage.getItem(`note${noteNum}`)).content;
    eachContentInput.value = noteData.content;
    eachContent.appendChild(eachContentInput);
    
    const updateButton = document.createElement('button');
    updateButton.type = 'button';
    updateButton.className = 'updateButton';
    updateButton.id = `${noteIndex}boxupdate`;
    updateButton.textContent = 'Update';
    eachContent.appendChild(updateButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'deleteButton';
    deleteButton.id = `${noteIndex}boxDelete`;
    deleteButton.textContent = 'Delete';
    eachContent.appendChild(deleteButton);
    
    eachBox.appendChild(eachContent);
    divElem.appendChild(eachBox);
    boxListDiv.appendChild(divElem);
    
    updateButton.addEventListener('click', function() {
        localStorage.setItem(`note${noteIndex}`, JSON.stringify({title: titleInput.value, content: eachContentInput.value}));
    })
    
    deleteButton.addEventListener('click', function() {
        boxListDiv.removeChild(divElem);
        localStorage.removeItem(`note${noteIndex}`);
        localStorage.noteNum--;

    });

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
        const titleSubmit = noteTitleInput.value;
        const contentSumbit = noteContentInput.value;
        localStorage.setItem(`note${localStorage.noteNum}`, JSON.stringify({title: titleSubmit, content: contentSumbit}));
        noteTitleInput.value = "";
        noteContentInput.value = "";
        addBox(localStorage.noteNum);
        localStorage.noteNum++
        localStorage.maxElem++;
    }
);

// newBox.addEventListener('focusout', comeBackToMidBox());    
}

// function comeBackToMidBox() {
    //     const middleNoteTakingField = document.createElement('div');
    //     middleNoteTakingField.className = 'middleNoteTakingField';
    //     middleNoteTakingField.id = 'midNoteTake';
    
    //     const middleBox = document.createElement('div');
    //     middleBox.className = 'middleBox';
    //     middleBox.id = 'midBox';
    
    //     const midBoxNote = document.createElement('input');
    //     midBoxNote.id = midBoxNote;
    //     midBoxNote.type = 'text';
    //     midBoxNote.placeholder = 'Take Note...';
    
//     middleBox.appendChild(midBoxNote);
//     middleNoteTakingField.appendChild(middleBox);

//     const body = document.getElementsByTagName('body')[0];
//     body.appendChild(middleNoteTakingField);
// }

// const addButton = document.getElementById('plusImage');
// addButton.addEventListener('click', addBox);

function deleteBox(key) {
    localStorage.removeItem(`${noteIndex}box`);
}


const midB = document.getElementById('midBox');
midB.addEventListener('click', extendMiddleNote);




// const NoteSaveButton = document.getElementById('noteSave');
// NoteSaveButton.addEventListener('click', addBox);
});
