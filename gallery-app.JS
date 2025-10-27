//gallery
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = Array.from({length: 20}, (_, i) => i + 1);
const selectedIndex = null;

//gallery    
imageIndexes.forEach( i => {
    fetch(`/Images/Gallery/gallery_${i}.txt`)
        .then(response => {
            if(response.ok) {
        const image = document.createElement('img');
        fetch(`/Images/Gallery/gallery_${i}.txt`)
            .then( r => r.text())
            .then( t => selectedImage.alt = t);
        image.src = `/Images/Gallery/gallery_${i}.png`;
        image.classList.add('galleryImg');
 
        image.addEventListener('click', () =>{
            // popup stuff
            popup.style.transform = `translateY(0)`;
            fetch(`/Images/Gallery/gallery_${i}.txt`)
                .then( r => r.text())
                .then( t => selectedImage.alt = t);
            selectedImage.src = `/Images/Gallery/gallery_${i}.png`;
        })
    
        gallery.appendChild(image);
            }
        })
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.scr = '';
    popup.alt = '';
})