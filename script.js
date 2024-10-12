let input = document.querySelector('.in');
let sign = document.querySelector('.sign');
let show = document.querySelector('.show');
let input2 = document.querySelector('.int');
let show1 = document.querySelector('.show1');
sign.addEventListener('click',()=>{
    if(input.value == '')
    {
        input.classList.add('error');
        show.innerHTML="Enter the required field";
    }
    else
    {
        input.classList.remove('error');
        show.innerHTML=" ";
    }
    if(input2.value == '')
    {
        input2.classList.add('error');
        show1.innerHTML="Enter the required field";
    }
    else
    {
        input2.classList.remove('error');
        show1.innerHTML=" ";
    }
});
//---------------------------------------------------

let signin = document.querySelector("#Signin");
signin.addEventListener('click',()=>{
    let input1 = document.querySelector("#input1").value;
    let passinput = document.querySelector("#passinput").value;
    a=JSON.parse(localStorage.getItem('useremail'));
    b=JSON.parse(localStorage.getItem('userpass'));
    let nextpage = document.querySelector('.anchor');
    if(input1 === '' || passinput === '')
    {
        alert('Enter the required field');
    }
    else if(input1 != a || passinput != b)
    {
        alert('User not found');
    }
    else
    {
        nextpage.setAttribute('href','badminton.html');
    }
});
