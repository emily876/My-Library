console.log("this is index.js");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

// add methods to display prototype
Display.prototype.add = function(book){
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;

    tableBody.innerHTML+= uiString;
}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if (book.name.length<3 || book.author.length<3)
    {
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,msg){
    let message= document.getElementById('message');
    message.innerHTML +=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

  setTimeout(function(){
      message.innerHTML ='';
  },4000);        //message will dissapear after 2s
}

//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();          // to prevent default behaviour of loading page on submit

    // console.log('You have submitted library form');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let novels = document.getElementById('novels');
    let programming = document.getElementById('programming');
    let cuisine = document.getElementById('cuisine');

    if(novels.checked){
        type = novels.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cuisine.checked){
        type = cuisine.value;
    }

    let book = new Book(name,author,type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added');
    }
    else{
        //show error to the user
        display.show('danger','Sorry you cannot add this book');
    }
    
}