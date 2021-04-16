// Create a "close" button and append it to each list item
const closeIt = () => {
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
};

// Click on a close button to hide the current list item
const hideIt = () => {
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

};

// Add a "checked" symbol when clicking on a list item
const checked = () => {
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
};

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var close = document.getElementsByClassName("close");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var date = document.createElement('INPUT');
  date.type = 'date'; 
  date.id = 'when';
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.appendChild(date);
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
const spanFunc = () => {
    let span = document.getElementById("span");
    span.onclick = newElement;
    span.addEventListener('keydown', function(e) {
        if (e.key == 13) {
            newElement;
        }
    })
}

const hitEnter = () => {
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("span").click();
  }
});
}
export {closeIt, checked, hideIt, spanFunc, hitEnter};