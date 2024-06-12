
// const Signin= document.querySelector('.btn__sign_in');
// const Signoff= document.querySelector('.btn__sign_off');
// const body=document.querySelector('body')
// btnclic=document.querySelector('.clicked_btn')
// const CombinationButton=document.querySelector('.sign_in')
// const signHeader=document.querySelector('.signIn');
// const FormName=document.querySelector('.form_name')
// const FormEmail=document.querySelector('.form_Email')
// const FormPassoword=document.querySelector('.form_passoword')
// const SubmitButton=document.querySelector('.submit')
// const Signin_index=document.querySelector('.Hero_navbar_signinButton')
// const Signoff_index=document.querySelector('.Hero_navbar_signoffButton')
// console.log(SubmitButton)




    // Signin.addEventListener('click',function(btn){
    //     Signin.style.backgroundColor='#adb5bd'
    //     Signin.style.color='#000'
    //     Signoff.style.backgroundColor='#eee'
    //     Signoff.style.color='#555'
    //     signHeader.textContent='Sign in'
    //     FormName.style.display='block';
    
        
        
    // })



// Signoff.addEventListener('click',function(btn){
//     Signin.style.backgroundColor='#eee'
//     Signin.style.color='#555'
//     Signoff.style.backgroundColor='#adb5bd'
//     Signoff.style.color='#000'
    
//     signHeader.textContent='sign up'
//     FormName.style.display='none';

// })


// const html=`

// `




// let Name;
// let Email;
// let password;
// let arr=[]
// const getData=function (){
//     Name=FormName.value;
// Email=FormEmail.value;
// password=FormPassoword.value;

// FormEmail.value=''
// FormName.value=''
// FormPassoword.value=''
// const accounts={
//             Name:Name,
//             Email:Email,
//             password:password
//         }
//         console.log(accounts)
//         arr.push(accounts)
//         console.log(arr)
// }
// const accounts={
//     Email:'wafadar@gmail.com',
//     password:'1122'
// }

// console.log(Name,Email,password)
// SubmitButton.addEventListener('click',function(){
// if (signHeader.textContent==='sign up') {
//     if (accounts.Email===FormEmail.value&&accounts.password===FormPassoword.value) {
//         console.log('bro welcome')
// b
//     }

//     console.log("welcome")

// }
//     getData()

// })




// const SignInFunction=function(Name,Email,password){
//
// }
// SignInFunction(Name,Email,password);

// let khan=document.getElementById("bismil").innerHTML;
// console.log(khan);



// *********************************
// label
// *********************************



var nameInput = document.getElementById("name");
var nameLabel = document.getElementById("name-label");
var passwordInput = document.getElementById("password");
var passwordLabel = document.getElementById("password-label");
var emailInput = document.getElementById("email");
var emailLabel = document.getElementById("email-label");

// Add event listeners to the input elements
nameInput.addEventListener("focus", function() {
  nameLabel.style.transform = "translateY(-20px)";
  
});
nameInput.addEventListener("blur", function() {
  nameLabel.style.transform = "translateY(-14px)";
  if (nameInput.value.trim()==='') {
  nameLabel.style.transform = "translateY(0)";
    
  }
});

passwordInput.addEventListener("focus", function() {
  passwordLabel.style.transform = "translateY(-20px)";
});
passwordInput.addEventListener("blur", function() {
  passwordLabel.style.transform = "translateY(-14px)";
  if (passwordInput.value.trim()==='') {
    passwordLabel.style.transform = "translateY(0)";
      
    }
});

emailInput.addEventListener("focus", function() {
  emailLabel.style.transform = "translateY(-20px)";
});
emailInput.addEventListener("blur", function() {
  emailLabel.style.transform = "translateY(-14px)";
  if (emailInput.value.trim()==='') {
    emailLabel.style.transform = "translateY(0)";
      
    }
});









const label = document.querySelectorAll( '.label' );
const input = document.querySelectorAll( '.name2' );



label.forEach( (element) =>
{
    element.innerHTML = element.innerText
        .split( '' ).map( ( letter, idx ) => `
        <span style=" transition-delay:${idx*50}ms">${ letter }</span>
        `).join( '' );
   
        input.forEach( inpu =>
          {
            inpu.addEventListener( 'focus', function (e)
            {
             console.log(e.target)
            })
          })
} );

//  Login button
const LoginButton = document.querySelector( '.Hero_navbar_signinButton' );
const CloseButton = document.querySelector( '.close-button' );
const popupMenu = document.querySelector( '.popup' );
const bodyelement = document.querySelector( '.body' );
const sectionHero=document.querySelector('.section')
LoginButton.addEventListener( 'click', function (e)
{
    e.preventDefault();
    popupMenu.classList.add( 'active' );
    bodyelement.classList.add( 'dismiss' );
    sectionHero.classList.add( 'dismiss' );
    
} );

CloseButton.addEventListener( 'click', function ()
{
  popupMenu.classList.remove( 'active' );
    bodyelement.classList.remove( 'dismiss' );
    sectionHero.classList.remove( 'dismiss' );
})
// search option and search data
const obg = {
    'first': 'hero',
    'second': 'category',
    'thirds': 'courses',
    'fourth': 'teachers',
    'fifth': 'footer'
  };
  
  const inputSearch = document.querySelector('.Hero_navbar_inputsearch');
  const searchResults = document.querySelector('.search-results');
  
  inputSearch.addEventListener('input', function() {
    const searchTerm = inputSearch.value.trim().toLowerCase();
    
    if (searchTerm === '') {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }
  
    let results = '';
  
    for (let key in obg) {
      if (obg[key].toLowerCase().includes(searchTerm)) {
        results = `<div> ${obg[key]}</div>`;
      }
    }
  
    if (results !== '') {
      searchResults.style.display = 'block';
      searchResults.innerHTML = results;
    } else {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
    }
    
    if (results === '' && searchTerm === '') {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
    }
  } );
  




  
  var form = document.getElementById("form");
  var nameInput = document.getElementById("name");
  var passwordInput = document.getElementById("password");
  var emailInput = document.getElementById("email");
  var nameErrorMessage = document.getElementById("name-error-message");
  var passwordErrorMessage = document.getElementById("password-error-message");
  var emailErrorMessage = document.getElementById("email-error-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameValue = nameInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    var emailValue = emailInput.value.trim();

    if (nameValue === "") {
      nameErrorMessage.textContent = "Please enter your name.";
      return;
    } else
    {
      nameErrorMessage.textContent = "";
      
    }

    if (passwordValue === "") {
      passwordErrorMessage.textContent = "Please enter a password.";
      return;
    } else
    {
      passwordErrorMessage.textContent = "";
      
    }

    if (emailValue === "") {
      emailErrorMessage.textContent = "Please enter your email address.";
      return;
    } else
    {
      emailErrorMessage.textContent = "";
      
    }

    if (!isValidEmail(emailValue)) {
      emailErrorMessage.textContent = "Please enter a valid email address.";
      return;
    } else
    {
      emailErrorMessage.textContent = "";
      
    }

    // If all validation passes, submit the form
    form.submit();
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  

//  slider

const teacherCards = document.querySelectorAll('.teachers_card');
const cardspart = document.querySelector('.teachers_contents');
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector( '.prev' );
const slider = document.querySelector( '.slider' );
let cardIndex = 0;
let widthCard =200;
console.log(widthCard)
const averagecards = cardspart / 3;
var documentWidth2 = +( document.documentElement.scrollWidth );
const a = +documentWidth2;




function Movenext() {
  cardIndex +=5;
  if (cardIndex > teacherCards.length-4) {
    cardIndex = 0;
  }

    cardspart.style.transform = `translateX(-${widthCard*cardIndex}px)`;

}

function Moveprev() {
  cardIndex -=5;
  if (cardIndex < 0) {
    cardIndex = teacherCards.length - 5;
  }

    cardspart.style.transform = `translateX(-${widthCard*cardIndex}px)`;

}

nextbutton.addEventListener('click', Movenext);
prevbutton.addEventListener('click', Moveprev);
