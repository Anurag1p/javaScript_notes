let d = document.querySelectorAll('.LC20lb');

Array.from(d).forEach(function(element , indexOf){
    let i = indexOf%2; 
    if(i==0){
        d[indexOf].style.color="red";
    }
    else{
            d[indexOf].style.color="green";
    }
})


// change background image
document.querySelector('body').style.background="linear-gradient(0deg, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.36)),url('https://source.unsplash.com/user/erondu/daily')";
document.querySelector('body').style.backgroundAttachment="fixed";