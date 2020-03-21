(() => {

    let imageSelection = document.querySelectorAll(".imageCon img");


    function container()
    {
      let fetchedImage = `${this.dataset.image}Image`;
      console.log(fetchedImage);
    }

    imageSelection.forEach(img => img.addEventListener('click', container));
})();
