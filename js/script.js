
(function () {
    onload = function () {
        document.getElementById('sign-in').onclick = function () {
            document.querySelector('.modal-contact').classList.toggle('visually-hidden');

        };
        document.getElementById('sign-in-footer').onclick = function () {
            document.querySelector('.modal-contact').classList.toggle('visually-hidden');
        };
        document.getElementById('close-modal-btn').onclick = function () {
            document.querySelector('.modal-contact').classList.toggle('visually-hidden');
        };
        // document.getElementById('write-us').onclick = function () {
        //     document.querySelector('.modal-contact').classList.toggle('visually-hidden');
        // };
        document.getElementById('close-modal-map__btn').onclick = function () {
            document.querySelector('.big-map').classList.toggle('visually-hidden');
        };
        document.getElementById('open-map').onclick = function () {
            document.querySelector('.big-map').classList.toggle('visually-hidden');
        };


        document.getElementById('delivery').onclick = function () {
            document.querySelector('.services-description-delivery').classList.toggle('visually-hidden');
            document.querySelector('.services-description-warranty').classList.add('visually-hidden');
            document.querySelector('.services-description-credit').classList.add('visually-hidden');

            document.querySelector('.img-credit').classList.add('visually-hidden');
            document.querySelector('.img-delivery').classList.toggle('visually-hidden');
            document.querySelector('.img-warranty').classList.add('visually-hidden');


            document.getElementById('delivery').disabled = true;
            document.getElementById('warranty').disabled = false;
            document.getElementById('credit').disabled = false;


        };



        document.getElementById('warranty').onclick = function () {
            document.querySelector('.services-description-warranty').classList.toggle('visually-hidden');
            document.querySelector('.services-description-delivery').classList.add('visually-hidden');
            document.querySelector('.services-description-credit').classList.add('visually-hidden');


            document.querySelector('.img-credit').classList.add('visually-hidden');
            document.querySelector('.img-warranty').classList.toggle('visually-hidden');
            document.querySelector('.img-delivery').classList.add('visually-hidden');


            document.getElementById('delivery').disabled = false;
            document.getElementById('warranty').disabled = true;
            document.getElementById('credit').disabled = false;

        };



        document.getElementById('credit').onclick = function () {
            document.querySelector('.services-description-credit').classList.toggle('visually-hidden');
            document.querySelector('.services-description-delivery').classList.add('visually-hidden');
            document.querySelector('.services-description-warranty').classList.add('visually-hidden');

            document.querySelector('.img-credit').classList.toggle('visually-hidden');
            document.querySelector('.img-delivery').classList.add('visually-hidden');
            document.querySelector('.img-warranty').classList.add('visually-hidden');

            document.getElementById('delivery').disabled = false;
            document.getElementById('warranty').disabled = false;
            document.getElementById('credit').disabled = true;

        };

        /*=== === ТОП № ТОВАРОВ ПЕРЕКЛЮЧАТЕЛЬ  === ===  */
        document.getElementById('summary-firsth').onclick = function () {
            document.querySelector('.summary-monopod').classList.toggle('visually-hidden');
            document.querySelector('.summary-watch').classList.add('visually-hidden');
            document.querySelector('.summary-quadro').classList.add('visually-hidden');


            document.getElementById('summary-firsth').disabled = true;
            document.getElementById('summary-second').disabled = false;
            document.getElementById('summary-third').disabled = false;

        };

        document.getElementById('summary-second').onclick = function () {
            document.querySelector('.summary-watch').classList.toggle('visually-hidden');
            document.querySelector('.summary-monopod').classList.add('visually-hidden');
            document.querySelector('.summary-quadro').classList.add('visually-hidden');


            document.getElementById('summary-firsth').disabled = false;
            document.getElementById('summary-second').disabled = true;
            document.getElementById('summary-third').disabled = false;

        };


        document.getElementById('summary-third').onclick = function () {
            document.querySelector('.summary-quadro').classList.toggle('visually-hidden');
            document.querySelector('.summary-watch').classList.add('visually-hidden');
            document.querySelector('.summary-monopod').classList.add('visually-hidden');


            document.getElementById('summary-firsth').disabled = false;
            document.getElementById('summary-second').disabled = false;
            document.getElementById('summary-third').disabled = true;

        };

        

        // function setFocus(){
        //     document.getElementById("name").focus();
        // }

    };

    // function toggleClass(elem) {
    //     var elem = document.getElementById(elem);
    //     elem.className == 'visually-hidden' ? elem.className = ' ' : elem.className = 'visually-hidden';
    // }
    // function addClass(elem) {
    //     var elem = document.getElementById(elem);
    //     elem.className == 'visually-hidden' ? elem.className = ' ' : elem.className = 'visually-hidden';
    // }
})();

// function zapret()
// {
//     var btn = document.getElementById('ds').disabled = true;
// }
