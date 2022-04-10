let lis = document.querySelectorAll('.portfolio ul li');
let cont1 = document.querySelectorAll('.cont1');

for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = () => {
        lis.forEach((el) => {
            el.classList.remove(...['btn','btn-danger'])
        })
        lis[i].classList.add(...['btn','btn-danger']);
        //
        for (let l = 0; l < cont1.length; l++) {
            if (cont1[l].classList.contains(lis[i].getAttribute('data-custom'))) {
                cont1.forEach((el) => !el.classList.contains(lis[i].getAttribute('data-custom')) ? el.style.display = 'none' : "")
                cont1[l].style.display = 'block'
            } 
            //          
        }
    }
}