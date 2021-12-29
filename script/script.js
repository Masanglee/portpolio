const body = document.body
const bg = document.querySelector(".bg")


// 배경화면 랜덤--------------------------------------------------------------------------------------------


const backgroundImages = [
    "https://cdn.pixabay.com/photo/2016/01/14/02/20/night-view-1139229_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/17/00/43/skyscrapers-5838029_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/04/06/14/46/city-6156596_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/12/25/02/59/blue-village-4717743_960_720.jpg",
]

const backgroundImage = () => {
    const random = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
    bg.style.background = `top center no-repeat url(${random})`
    bg.style.backgroundSize = "100%"
    bg.style.display = "fixed"
}
backgroundImage();
//시계--------------------------------------------------------------------------------------------
const times = document.querySelector(".text .time .year")
const times_1 = document.querySelector(".text .time .clock")


const time = () => {
    const realTime = new Date();
    const yearReal = realTime.getFullYear();
    const monthReal = realTime.getMonth() + 1;
    const dayReal = realTime.getDate();
    const hourReal = String(realTime.getHours()).padStart(2, 0)
    const minReal = String(realTime.getMinutes()).padStart(2, 0)
    const secReal = String(realTime.getSeconds()).padStart(2, 0)


    times.innerText = `${yearReal}년 ${monthReal}월 ${dayReal}일`
    times_1.innerText = `${hourReal}:${minReal}:${secReal}`
}
time();
setInterval(time, 1000)
//내나이 계산--------------------------------------------------------------------------------------------------
const bornyear = document.querySelector(".sectionbody .sectionbody2 .bornyear")
const korage = document.querySelector(".sectionbody .sectionbody2 .korage")
const interage = document.querySelector(".sectionbody .sectionbody2 .interage")

const age = () => {
    //현재시간 -태어난 시간
    const realTime = new Date().getTime()
    const born = new Date("1990-08-19").getTime();
    const ages = realTime - born;
    const korYear = Math.ceil(ages / (1000 * 60 * 60 * 24 * 365))
    bornyear.innerHTML = `1990.08.19`
    korage.innerHTML = `${korYear}세`
}
age();
setInterval(time, 1000)

//상대 나이 계산--------------------------------------------------------------------------------------------------
const input = document.querySelector("input")
const button = document.querySelector("button")
const yearCulculator = document.querySelector(".year")
const monthCulculator = document.querySelector(".month")
const dayCulculator = document.querySelector(".day")

const ageCulculator = (Event) => {
    Event.preventDefault();
    localStorage.setItem("value", input.value)
    const value = localStorage.getItem("value")
    const divinYear = String(value).substring(0, 4)
    const divinmonth = String(value).substring(4, 6)
    const divinday = String(value).substring(6, 8)

    yearCulculator.innerText = `${divinYear}년`
    monthCulculator.innerText = `${divinmonth}월`
    dayCulculator.innerText = `${divinday}일`
}
button.addEventListener("click", ageCulculator)