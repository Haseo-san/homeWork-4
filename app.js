let buttonsContainer = document.getElementById('buttons');
buttonsContainer.addEventListener('click', () => {
    let activeButton = buttonsContainer.querySelector('li.buttonChange');
    let activeDiv = document.getElementById('info');
    if (activeButton){
        activeButton.classList.remove('buttonChange');
        activeDiv.remove();
    }
    let button = event.target.closest('li');
    if (button){
        button.classList.add('buttonChange');

    }

});

let buttonCollections = document.getElementById('Collections');
buttonCollections.addEventListener('click', () => {
    let button = event.target.closest('li');
    if (button){
        let div = document.createElement('div');
        div.id = 'info';
        div.innerHTML = "<h1>Collections</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consequatur delectus distinctio, dolore, eligendi ex facilis illum iure maxime odio odit quisquam quod repellendus reprehenderit saepe, tempore velit voluptas!</p>";
        document.body.appendChild(div);
    }
});
let buttonProfile = document.getElementById('Profile');
buttonProfile.addEventListener('click', () => {
    let button = event.target.closest('li');
    if (button){
        let div = document.createElement('div');
        div.id = 'info';
        div.innerHTML = "<h1>Profile</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis laudantium magnam nam qui, reiciendis soluta. Aut distinctio, dolor dolorem, id molestias non odio omnis pariatur quod suscipit tempore voluptates.</p>";
        document.body.appendChild(div);
    }
});
let buttonSettings = document.getElementById('Settings');
buttonSettings.addEventListener('click', () => {
    let button = event.target.closest('li');
    if (button){
        let div = document.createElement('div');
        div.id = 'info';
        div.innerHTML = "<h1>Settings</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, amet cumque expedita explicabo illo iste labore modi molestiae natus neque nihil numquam quas quo quos repudiandae sit vel voluptatem!</p>";
        document.body.appendChild(div);
    }
});