const list = document.querySelector(".list");
const title = document.getElementById("title");

class Library {
  libraray = [
    {
      id: 1,
      image: "1.jpg",
      price: 12000,
      bookName: "Garri Potter",
      author: "Joanna Rouling",
    },
    {
      id: 2,
      image: "2.jpg",
      price: 15000,
      bookName: "Uzuklar hukmdori",
      author: "Jon Tolkien",
    },
    {
      id: 3,
      image: "3.jpg",
      price: 50000,
      bookName: "Kichkina shahzoda",
      author: "Antuan de Sent-Ekzyuperi",
    },
    {
      id: 4,
      image: "4.jpg",
      price: 42000,
      bookName: "Da Vinchi siri",
      author: "Den Braun",
    },
    {
      id: 5,
      image: "5.jpg",
      price: 29000,
      bookName: "Alkimyogar",
      author: "Paulo Koelo",
    },
    {
      id: 6,
      image: "6.jpg",
      price: 35000,
      bookName: "Yashil yo`lak",
      author: "Stiven King",
    },
    {
      id: 7,
      image: "7.jpg",
      price: 17000,
      bookName: "Shamollarda qolgan hislarim",
      author: "Margaret Mitchell",
    },
    {
      id: 8,
      image: "8.jpg",
      price: 40000,
      bookName: "Margaret Mitchell",
      author: "Frensis Skott Fisjerald",
    },
    {
      id: 9,
      image: "9.jpg",
      price: 36000,
      bookName: "Alisa mo`jizalar mamlakatida",
      author: "Lyuis Keroll",
    },
    {
      id: 10,
      image: "10.jpg",
      price: 56000,
      bookName: "Daftar hoshiyasidagi bitiklar",
      author: "O'tkir Hoshimov",
    },
  ];
  membersOfBooked = [];
  membersId = [];
  memberName = "";
  bookName = "";

  constructor(_name) {
    console.log(`
You are welcome to "the ${_name}" library.
Which book do you want to book ...    
    `);
    title.innerHTML = `
You are welcome to "the ${_name}" library.
Which book do you want to book ...       
    `;
  }

  get books() {
    return this.libraray;
  }

  get bookNames() {
    const newBooksNames = this.libraray.map((item) => item.bookName);
    return newBooksNames;
  }

  get sortBookNames() {
    return this.bookNames.sort((a, b) => a.localeCompare(b));
  }

  deleteBook(bookName) {
    this.libraray = this.libraray.filter((item) => item.bookName !== bookName);
    // console.log(`${bookName} is deleted successful!`);
    return `${bookName} is deleted successful!`;
  }

  addBook(bookName, author) {
    if (this.libraray.length >= 20) {
      throw Error("Limit is not enough");
    }

    const newBook = {};
    newBook["id"] = Math.floor(Math.random() * 10) + 10;
    newBook["image"] = `${newBook.id}.jpg`;
    newBook.bookName = bookName;
    newBook.author = author;
    this.libraray.push(newBook);
    // console.log(`${newBook.bookName} is added to the library!`);

    return `${newBook.bookName} is added to the library!`;
  }

  addMember(memberName, bookName) {
    if (this.bookNames.includes(bookName)) {
      const newMember = {};
      newMember.id = Math.floor(Math.random() * 10) + 10;
      // for (let i = 0; i < this.membersId; i++){
      //     if (this.membersId.includes(newMember.id)) {
      //         continue again;
      //     }
      // }
      newMember.name = memberName;
      newMember.bookName = bookName;
      newMember.bookedOfDate = new Date().toLocaleDateString();
      this.membersOfBooked.push(newMember);
      return `${memberName} is added to "Members of Bookes"`;
    } else {
      return `I can't find the "${bookName}"`;
    }
  }

  get membersOfBooked() {
    return this.membersOfBooked;
  }

  get membersNames() {
    const membersNames = this.membersOfBooked.map((item) => item.name);
    return membersNames;
  }

  deleteMember(memberName, bookName) {
    this.membersOfBooked = this.membersOfBooked.filter(
      (item) => item.memberName !== memberName && item.bookName !== bookName
    );
    // console.log(`${bookName} is deleted successful!`);
    return `"${bookName}" is deleted successful from ${memberName}!`;
  }
}

const myLibrary = new Library("Central Asia");

const newBooks = myLibrary.books;
(() => {
  newBooks.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src = "image/${value.image}" alt="book" loading="lazy" /></img>
        <div class = "title">${value.author}: ${value.bookName}</div>
        <div class = "price">${value.price} so'm</div>
        <button class = "btn">Add to card</button>
    `;
    list.appendChild(newDiv);
  });
})();
