var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i = 0; 

  var slides = document.getElementsByClassName("fadingSlide");

  if (n > slides.length)
  {
      slideIndex = 1;
  }
  else if (n < 1)
  {
      slideIndex = slides.length;
  }
  
  for (; i < slides.length; i++)
  {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block";
}

