const http = require("http")

interface IBook {
    title: string
    readonly author: string
    published?: Date
    pages?: number
}

// this instance of a book is an example of ducktyping, because it is implicitly understood that it is an IBook because it "acts" the same way as an IBook, and therefore must be one.

const book = {
    title: "The sword of a thousand truths",
    author: "Stan Marsh",
    published: new Date("2006-01-16"),
    pages: 247
}

function bookPrinter(book: IBook) {
    console.log(book.title)
    console.log(book)
}

bookPrinter(book)

const book2: IBook = {
    title: "The sword of a thousand truths",
    author: "Stan Marsh",
    published: new Date("2006-01-16"),
    pages: 247
}

book2.title = "The sword of a thousand truths 2"

// i dette tilfælde skal book2 være instansieret eksplicit som en IBook. 

// book2.author = "Randy marsh"

bookPrinter(book2)

class Book implements IBook {
    private _title: string
    private _author: string
    private _published: Date
    private _pages: number


    constructor(title: string, author: string, published: Date, pages: number) {
        this._title = title
        this._author = author
        this._published = published
        this._pages = pages
    }


    get title(): string {
        return this._title
    }

    set title(value: string) {
        this._title = value;
    }

    get author(): string {
        return this._author
    }

    get published(): Date {
        return this._published
    }

    set published(value: Date) {
        this._published = value;
    }

    get pages(): number {
        return this._pages
    }

    set pages(value: number) {
        this._pages = value;
    }



}
let book3 = new Book("The sword of tenthousand truths", "Randy Marsh", new Date("2006-01-16"), 247)

book3.title = "no more swords"

console.log(book3)