const body = document.body

const backgroundImages = [
   "https://cdn.pixabay.com/photo/2016/01/14/02/20/night-view-1139229_960_720.jpg",
   "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_960_720.jpg",
   "https://cdn.pixabay.com/photo/2020/12/17/00/43/skyscrapers-5838029_960_720.jpg",
   "https://cdn.pixabay.com/photo/2021/04/06/14/46/city-6156596_960_720.jpg",
   "https://cdn.pixabay.com/photo/2019/12/25/02/59/blue-village-4717743_960_720.jpg",
  ]

const backgroundImage = () => {
   const random = backgroundImages[ Math.floor(Math.random()*backgroundImages.length)]
body.style.background=`top center no-repeat url(${random})` 
body.style.backgroundSize="100%"
body.style.display="fixed"
}
backgroundImage();

//background: no-repeat;