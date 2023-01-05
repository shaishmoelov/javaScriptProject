const form  = document.querySelector('form');
const textArea = document.querySelector('textarea');
const list = document.querySelector('.list');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = textArea.value;
    list.appendChild(li);
    //Update Local Storage With List
    const data_str = JSON.stringify(list);
    console.log(data_str);
    localStorage.setItem('list', data_str);
});
