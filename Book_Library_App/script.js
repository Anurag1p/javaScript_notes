console.log("Book Library App");


class Book {
    constructor(bookName, author, type) {
        this.name = bookName;
        this.author = author;
        this.type = type;
    }
}

class display extends Book{
    add(book) {
        console.log("adding...")
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                     <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tableBody.innerHTML += uiString;
        let data = localStorage.getItem('note');
        let bookName = document.getElementById('bookName');
        let author = document.getElementById('author');
        let dataObj;
        // if(data == null){
        //     dataObj = [];
        // }
        // else{
            dataObj = JSON.parse(data);  //data ko array mein badldeta hai
        // }
        let myObj = {
            bName: bookName.value,
            aName: author.value
        }
        dataObj.push(myObj);
        localStorage.setItem('data',JSON.stringify(dataObj));

    }
    clear() {
        console.log("cleaning...");
        let bookName = document.getElementById('bookName');
        let author = document.getElementById('author');
        // libraryform.reset();
        bookName.value = '';
        author.value = '';
    }
    validate(book) {
        console.log("validate...");
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessege) {
        console.log("show...");
        let msg = document.getElementById('messege');
        let boldTxt;
        if (type === 'success') {
            boldTxt = 'Success';
        }
        else {
            boldTxt = 'Error';
        }
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldTxt}:</strong> ${displayMessege}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                         </div>`;
        setTimeout(function () {
            msg.innerHTML = '';
        }, 5000);
    }
}

let libraryForm = document.getElementById('send');
libraryForm.addEventListener('click',function(event){

    
    console.log("submiting....");
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let BCA = document.getElementById('BCA');
    let BSC = document.getElementById('BSC');
    let BA = document.getElementById('BA');
    
    if (BCA.checked) {
        type = BCA.value;
    } else if (BSC.checked) {
        type = BSC.value;
    } else if (BA.checked) {
        type = BA.value;
    }
    
    let bk = new Book(bookName, author, type);
    console.log(bk);
    let disp = new display();
    
    if (disp.validate(bk)){
        
        disp.add(bk);
        // disp.clear();
        // disp.show('success', 'Your book has been successfully added');
    }
    // else {
    //     disp.show('danger', 'Sorry you cannot add this book');
    // }
    console.log("running..");
    // event.preventDefault();
    // e.defaultPrevented();
});
