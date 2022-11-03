const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const toggleSwitch = document.getElementsByClassName('toggle-switch');
const localTimeZone = document.getElementById('timezone');


saveBtn.addEventListener('click', (e)=>{
    for(let i = 0; i < toggleSwitch.length; i++){
        localStorage.setItem(toggleSwitch[i].getAttribute('id'), toggleSwitch[i].checked);
   }
   location.reload();
});

for (let i=0; i < toggleSwitch.length; i++) {
	const checked = JSON.parse(localStorage.getItem(toggleSwitch[i].getAttribute("id")));
	toggleSwitch[i].checked = checked;
}


localTimeZone.addEventListener('change', (e)=>{
    let selected = e.target.value;
    localStorage.setItem('timezone', selected);
});

if(localStorage.getItem('timezone')){
    localTimeZone.value = localStorage.getItem('timezone');
}

cancelBtn.addEventListener('click', ()=>{
   localStorage.clear();
   location.reload();
});


