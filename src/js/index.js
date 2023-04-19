const bars = document.querySelectorAll('.bar')

bars.forEach(bar => {
    bar.addEventListener('mouseover', () =>{
        bar.previousElementSibling.classList.remove('none')
    })
    bar.addEventListener('mouseout', () =>{
        bar.previousElementSibling.classList.add('none')
    })
});