console.log("Events & Event object part 1");

document.getElementById('container').addEventListener('click',function(e){    //you can use click or mouseover .. event occur by click and also by mouse hover
    console.log(e);
    console.log("you have click the container class");
    // location.href="https://techydeepanshu.xyz";
    let variable = e.target;
    console.log(variable);

    variable = e.target.className;
    console.log(variable);

    variable = e.target.id;
    console.log(variable);

    variable = Array.from(e.target.classList);
    console.log(variable);

    variable = e.offsetX;
    console.log(variable);

    variable = e.offsetY;
    console.log(variable);

    variable = e.clientX;    //along browser window
    console.log(variable);

    variable = e.clientY;   //along browser window
    console.log(variable);
})