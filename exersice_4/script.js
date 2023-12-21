console.log("create library app");



class library {
    constructor(booklist) {

        this.book = booklist;
        this.userList = [];
        this.isbook = {}

    }
    //show all book available
    getBookList() {
        this.book.forEach(function (element) {
            console.log(`Available Books : ${element}`);
        })

    }
    issueBook(givenBook, user) {
        this.gBook = givenBook;
        this.u = user;
        this.userList.push(this.u);
        // console.log(this.book);
        // list = this.book;
        // console.log(`user name is : ${this.u}`);
        if (this.book.includes(this.gBook)) {
            if (this.isbook[this.gBook] == undefined) {
                this.isbook[this.gBook] = this.u;
                console.log(`Hey ${this.u}...`)
                console.log(`${this.gBook} Book is issued`);
            }
            else {
                console.log(`Sorry ${this.u}...`)
                console.log("this book is already issued");
            }
        } else {
            console.log(`Sorry ${this.u}...`)
            console.log("this book is not available");

        }
    }
    userL() {
        this.userList.forEach(function (e, index) {
            console.log(`${index + 1}. ${e}`);
        })
    }
    returnBook(givenBook) {
        this.gBook = givenBook;
        delete this.isbook[this.gBook];
        console.log(`${this.gBook} Book is returned`);
    }
}

let g = new library(["Hindi", "English", "Maths", "Science"]);
// console.log(getBook);
// console.log(g.getBookList());                   //show total book available
// console.log(g.issueBook("Hindi","Deepanshu"));  //issue book hindi by deepanshu
// console.log(g.issueBook("English","chintu"));    // issued book english by chintu
// console.log(g.userL());                          //show all user that issued book