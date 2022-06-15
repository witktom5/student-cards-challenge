const students = [
  {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
  },
  {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
  },
  {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 7, 5],
  },
];

const cardContainer = document.querySelector('.card-container');

// add student cards

const addCards = () => {
  for (let student of students) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create card elements

    const studentFirstName = document.createElement('p');
    const studentLastName = document.createElement('p');
    const studentLecturesQty = document.createElement('p');
    const studentAverage = document.createElement('p');

    // Set the elements inner text

    studentFirstName.innerText = 'First Name: ' + student.name;
    studentLastName.innerText = 'Last Name: ' + student.lastName;

    const lecturesQty = student.marks.filter((v) => v !== null).length;
    studentLecturesQty.innerText = 'Lectures visited: ' + lecturesQty;

    const average = student.marks.reduce((a, b) => a + b) / lecturesQty;
    studentAverage.innerText = 'Average mark: ' + average;

    // Add border conditionally

    if (average <= 5) card.style.border = 'solid 1px red';
    if (average > 5) card.style.border = 'solid 1px green';

    // Add elements to DOM

    card.append(studentFirstName);
    card.append(studentLastName);
    card.append(studentLecturesQty);
    card.append(studentAverage);

    cardContainer.append(card);
  }
};

addCards();

//  Onclick on the cards - activate/deactivate cards

const allCards = document.querySelectorAll('.card');

function changeColorOnClick() {
  if (this.style.backgroundColor !== 'grey') {
    this.style.backgroundColor = 'grey';
    for (let card of allCards) {
      if ((card.style.backgroundColor = 'grey' && card !== this)) {
        card.style.backgroundColor = 'white';
      }
    }
  } else {
    this.style.backgroundColor = 'white';
  }
}

//  Add event listener

for (let card of allCards) {
  card.addEventListener('click', changeColorOnClick);
}
