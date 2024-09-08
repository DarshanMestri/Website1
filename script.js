const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function(){
    // alert("hehe")
    fixed.style.display = "block"
    })

    elemC.addEventListener("mouseleave", function(){
    // alert("hehe")
    fixed.style.display = "none"
    })

    // This is for single elem print
    // var elem1 = document.querySelector("#elem1")
    // elem1.addEventListener("mouseenter", function(){
    //     var image = elem1.getAttribute("data-image")
    //     // console.log(image)
    //     fixed.style.backgroundImage = `url(${image})`
    // })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        // console.log(image)
        fixed.style.backgroundImage = `url(${image})`
        })
    })

}

function swipperanimation () {
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

page4animation()
swipperanimation()
loaderAnimation()
