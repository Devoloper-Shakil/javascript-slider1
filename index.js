const slideShoElement = document.querySelectorAll(".slide-element");

let countElements=1;
setInterval(()=>{
    countElements++;
const carentElement=document.querySelector(".caren")
carentElement.classList.remove("caren");

if(countElements>slideShoElement.length){
    slideShoElement[0].classList.add("caren");
    countElements=1;
}else{
    carentElement.nextElementSibling.
    classList.add("caren");
}


},2000)