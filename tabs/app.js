const tabHead = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHead.forEach(function(item){
    item.addEventListener('click', function(){
        
       const contentBox = document.querySelector('#' + this.dataset.tab);
       
       contentBoxes.forEach(function(item){
        item.classList.add('hidden');
       })
       contentBox.classList.remove('hidden');
    })
})