var writeUs = document.querySelector('#sign-in-footer');
var popup = document.querySelector('.modal-contact');
var closeForm = document.querySelector('#close-modal-btn');
var userName = popup.querySelector('#name');
var email = popup.querySelector('#email');
var textarea = popup.querySelector('#textarea');
var isStorageTrue = true;
var storageName = '';


window.addEventListener('keydown', function(evt){
    if(evt.keyCode == 27){
        evt.preventDefault();
        if(  popup.classList.contains('drop')){
            popup.classList.remove('drop');
        }
}
});

try{ 
    storageName = localStorage.getItem('userName');
}catch (err){
    isStorageTrue = false;
}

writeUs.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.add('drop');
    // popup.classList.remove('visually-hidden');
    if (storageName){
        userName.value = storageName;
        email.focus();
    }else{
        userName.focus();
    }
});


closeForm.addEventListener('click', function(evt){
    evt.preventDefault();
    // popup.classList.add('visually-hidden');
    popup.classList.remove('drop');
});

popup.addEventListener('submit', function (evt){
    if(!userName.value || !email.value || !textarea.value){
        evt.preventDefault();
        alert('Введите данные в форму');
    }else{
        if (isStorageTrue){
            localStorage.setItem('userName', userName.value);
        }
    }
});






var openMap = document.querySelector('#open-map');
var popupMap = document.querySelector('.big-map');
var closeMap = document.querySelector('.close-modal-btn');



window.addEventListener('keydown', function(evt){
    if(evt.keyCode == 27){
        evt.preventDefault();
        if(  popupMap.classList.contains('drop')){
            popupMap.classList.remove('drop');
        }
}
});

openMap.addEventListener('click', function(evt){
    evt.preventDefault();
    popupMap.classList.add('drop');
});


closeMap.addEventListener('click', function(evt){
    evt.preventDefault();
    // popup.classList.add('visually-hidden');
    popupMap.classList.remove('drop');
});





// document.getElementById('summary-firsth').onclick = function () {
//     document.querySelector('.summary-monopod').classList.toggle('visually-hidden');
//     document.querySelector('.summary-watch').classList.add('visually-hidden');
//     document.querySelector('.summary-quadro').classList.add('visually-hidden');


//     document.getElementById('summary-firsth').disabled = true;
//     document.getElementById('summary-second').disabled = false;
//     document.getElementById('summary-third').disabled = false;

// };

var summaryFirsth = document.getElementById('summary-firsth');
var summarySecond = document.getElementById('summary-second');
var summaryThird = document.getElementById('summary-third');

var watch = document.querySelector('.summary-watch');
var monopod =  document.querySelector('.summary-monopod');
var quadro = document.querySelector('.summary-quadro');


summaryFirsth.addEventListener('click', function(evt){
    evt.preventDefault();
    summaryFirsth.disabled = true;
    summarySecond.disabled = false;
    summaryThird.disabled = false;
    
    monopod.classList.toggle('visually-hidden');
    watch.classList.add('visually-hidden');
    quadro.classList.add('visually-hidden');
    
    monopod.classList.add('scrol');
    watch.classList.remove('scrol');
    quadro.classList.remove('scrol');
    });

summarySecond.addEventListener('click', function(evt){
evt.preventDefault();
summaryFirsth.disabled = false;
summarySecond.disabled = true;
summaryThird.disabled = false;

monopod.classList.add('visually-hidden');
watch.classList.toggle('visually-hidden');
quadro.classList.add('visually-hidden');

monopod.classList.remove('scrol');
    watch.classList.add('scrol');
    quadro.classList.remove('scrol');
});

summaryThird.addEventListener('click', function(evt){
    evt.preventDefault();
    summaryFirsth.disabled = false;
    summarySecond.disabled = false;
    summaryThird.disabled = true;
    
    monopod.classList.add('visually-hidden');
    watch.classList.add('visually-hidden');
    quadro.classList.toggle('visually-hidden');

    monopod.classList.remove('scrol');
    watch.classList.remove('scrol');
    quadro.classList.add('scrol');
    });


// document.getElementById('summary-second').onclick = function () {
//     document.querySelector('.summary-watch').classList.toggle('visually-hidden');
//     document.querySelector('.summary-monopod').classList.add('visually-hidden');
//     document.querySelector('.summary-quadro').classList.add('visually-hidden');


//     document.getElementById('summary-firsth').disabled = false;
//     document.getElementById('summary-second').disabled = true;
//     document.getElementById('summary-third').disabled = false;

// };