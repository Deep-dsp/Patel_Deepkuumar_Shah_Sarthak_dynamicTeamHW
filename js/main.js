(() => {

    let imageSelection = document.querySelectorAll(".imageCon img"),
        title = document.querySelector("div .memberName"),
        desCon = document.querySelector("div .memberBio"),
        dsp = document.querySelector(".dspImage"),
        sarthak = document.querySelector(".sarthakImage");

    const teamBio = [
                        ["Deepkumar Patel",`Deepkumar Patel is highly motivated individual who is always curious to learn something new regarding his field of interest. He is focused and always be ready to work in any kind of situations. His field of interest is to create web applications, graphic designing and 3D modelling. It is quite strange as all his interest are very diffrent. He is a computer engineer and curretly studying 'Interactive Media Design' to sharpen his skill at FANSHAWE COLLEGE.`], ["Sarthak Shah",`Sarthal Shah is young adult looking for career in the field of web development. He is self-motivated person and has good skill of content writing for web development.He is curretly studying 'Interactive Media Design' to sharpen his skill at FANSHAWE COLLEGE.`]

    ];


    function container()
    {
      var fetchedImage = `${this.dataset.image}`;
      console.log(fetchedImage);
      title.textContent = `${teamBio[this.dataset.content][0]}`;
      desCon.textContent = `${teamBio[this.dataset.content][1]}`;

      dsp.style.filter = "grayscale(0%)";
      sarthak.style.filter = "grayscale(100%)";

      if(fetchedImage == "sarthak")
      {
        sarthak.style.filter = "grayscale(0%)";
        dsp.style.filter = "grayscale(100%)";
      }
    }

    imageSelection.forEach(img => img.addEventListener('click', container));
})();
