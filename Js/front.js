const frontSection = document.getElementById('Front'),
      exploreMoreButton = document.getElementById('explore_more');

if (exploreMoreButton) {
    exploreMoreButton.addEventListener('click', () => {
        frontSection.classList.add('hide-front');
        setTimeout(()=>{
            window.location.href='temp/temp.html';
        },1000);
    });
}