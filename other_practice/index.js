console.log("sticky header");

{
    const nav = document.querySelector("#navTrans");
    // let lastScrollY = window.scrollY;
    
    window.addEventListener("scroll",()=>{
        if(window.scrollY<200){
            console.log("div showing");
            nav.classList.remove("invisible");
            
        }else{
            console.log("div hide");
            nav.classList.add("invisible");
        }
    })
}