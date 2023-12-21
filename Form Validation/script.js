console.log("form validation");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
// $('#success').hide();
// $('#failed').hide();

console.log(name, email, phone);



name.addEventListener('blur',()=>{
    console.log("name is blur");

    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regx , str);

    if(regx.test(str)){
        console.log("its mateched");
        name.classList.remove('is-invalid');
        validName = true;
    }else{
        console.log("its not matched");
        name.classList.add("is-invalid");
        validName = false;
    }

})
email.addEventListener('blur',()=>{
    console.log("email is blur");
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-z]){2,7}$/;
    let str = email.value;
    console.log(regx , str);

    if(regx.test(str)){
        console.log("its mateched");
        email.classList.remove('is-invalid');
        validEmail = true;
    }else{
        console.log("its not matched");
        email.classList.add("is-invalid");
        validEmail = false;
    }

})
phone.addEventListener('blur',()=>{
    console.log("phone is blur");
    let regx = /[0-9]{10}$/;
    let str = phone.value;
    console.log(regx , str);

    if(regx.test(str)){
        console.log("its mateched");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }else{
        console.log("its not matched");
        phone.classList.add("is-invalid");
        validPhone = false;
    }

})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("clicked on submit button");
    console.log(validName,validEmail,validPhone);

    if(validName && validEmail && validPhone){
        let success = document.getElementById('success');
        success.classList.add('show');
        failed.classList.remove('show');
        // $('#success').show();        
        // $('#failed').hide();        
    }else{
        let failed = document.getElementById('failed');
        failed.classList.add('show');
        success.classList.remove('show');
        // $('#failed').show();        
        // $('#success').hide();        

    }
})
