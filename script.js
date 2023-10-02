const menu=document.querySelector("nav i");
const list=document.querySelector(".item");
menu.addEventListener('click',(e)=>{
    e.preventDefault();
    list.classList.toggle("showitem");
});
const links = document.querySelectorAll(".item a");
        links.forEach(link => {
            link.addEventListener('click', () => {
                list.classList.remove("showitem"); // Close the menu
            });
        });