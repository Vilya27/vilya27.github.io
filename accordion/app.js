const headers = document.querySelectorAll('[data-name="accordion-title"]');


headers.forEach(function (item) {
    
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('accordion')
        
    })
})