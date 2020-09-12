let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ayano.png') {
      myImage.setAttribute('src','images/dankmeme.jpg');
    } else {
      myImage.setAttribute('src','images/ayano.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h5');

function setUserName() {
    let myName = prompt('Give me ya name good sir.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Watch YuruYuri, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Watch YuruYuri, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}