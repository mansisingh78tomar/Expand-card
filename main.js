const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removingActiveClass();
        panel.classList.add('active');
    })
})

function removingActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}

var selector = document.body;

function modechanger(){
    selector.classList.toggle('dark-mode')
}