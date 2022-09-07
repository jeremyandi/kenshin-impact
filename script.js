const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const sumSlides = slides.length;
var slideNum = 0;

var autoplay;

var repeat = () =>
{
    autoplay = setInterval(function()
    {
        slides.forEach((slide) =>
        {
            slide.classList.remove("active")
        });
        slideIcons.forEach((slideIcon) =>
        {
            slideIcon.classList.remove("active")
        });

        slideNum++;
        if(slideNum > (sumSlides - 1))
        {
            slideNum = 0;
        }

        slides[slideNum].classList.add("active");
        slideIcons[slideNum].classList.add("active");
    }, 5000);
}

repeat();

prevButton.addEventListener("click", () => 
{
    slides.forEach((slide) =>
    {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) =>
    {
        slideIcon.classList.remove("active")
    });

    slideNum--;
    if(slideNum < 0)
    {
        slideNum = sumSlides-1;
    }

    slides[slideNum].classList.add("active");
    slideIcons[slideNum].classList.add("active");
});

nextButton.addEventListener("click", () => 
{
    slides.forEach((slide) =>
    {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) =>
    {
        slideIcon.classList.remove("active")
    });

    slideNum++;
    if(slideNum > (sumSlides - 1))
    {
        slideNum = 0;
    }

    slides[slideNum].classList.add("active");
    slideIcons[slideNum].classList.add("active");
});