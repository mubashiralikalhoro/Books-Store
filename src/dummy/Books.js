import {Images} from '../assets/images';

export class Book {
  constructor(
    id,
    bookName,
    bookCover,
    rating,
    language,
    pages,
    author,
    authorId,
    genre,
    sells,
    description,
    price,
  ) {
    this.id = id;
    (this.bookName = bookName), (this.bookCover = bookCover);
    this.rating = rating;
    this.language = language;
    this.pages = pages;
    this.author = author;
    this.authorId = authorId;
    this.genre = genre;
    this.sells = sells;
    this.description = description;
    this.price = price;
  }
}

// export {Book};

export default Books = [
  new Book(
    1,
    'Other Words For Home',
    Images.book1,
    4.3,
    'English',
    341,
    'Author Name',
    1,
    ['Romance', 'Adventure', 'Drama'],
    0,
    'Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean' +
      ' in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in ' +
      'Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies ' +
      "that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle " +
      "Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends," +
      ' a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude ' +
      'can be seen as she really is.',
    10,
  ),

  new Book(
    2,
    'The Metropolis',
    Images.book2,
    4.1,
    'English',
    272,
    'Author Name',
    2,
    ['Adventure', 'Drama'],
    0,
    'In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. ' +
      'But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling ' +
      'artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence.' +
      " Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United " +
      ' States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to ' +
      'visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted' +
      'by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the' +
      " agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's" +
      '  millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching ' +
      '  adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around ' +
      '  us and the technologies guiding us into the future.',
    12,
  ),

  new Book(
    3,
    'The Tiny Dragon',
    Images.book3,
    3.5,
    'English',
    110,
    'Author Name',
    3,
    ['Drama', 'Adventure', 'Romance'],
    0,
    'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world ' +
      'to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank ' +
      'pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    100,
  ),
  new Book(
    4,
    'Other Words For Home',
    Images.book1,
    4.3,
    'English',
    341,
    'Author Name',
    1,
    ['Romance', 'Adventure', 'Drama'],
    0,
    'Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean' +
      ' in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in ' +
      'Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies ' +
      "that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle " +
      "Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends," +
      ' a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude ' +
      'can be seen as she really is.',
    10,
  ),

  new Book(
    5,
    'The Metropolis',
    Images.book2,
    4.1,
    'English',
    272,
    'Author Name',
    2,
    ['Adventure', 'Drama'],
    0,
    'In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. ' +
      'But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling ' +
      'artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence.' +
      " Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United " +
      ' States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to ' +
      'visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted' +
      'by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the' +
      " agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's" +
      '  millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching ' +
      '  adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around ' +
      '  us and the technologies guiding us into the future.',
    12,
  ),

  new Book(
    6,
    'The Tiny Dragon',
    Images.book3,
    3.5,
    'English',
    110,
    'Author Name',
    3,
    ['Drama', 'Adventure', 'Romance'],
    0,
    'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world ' +
      'to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank ' +
      'pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    100,
  ),
  new Book(
    7,
    'Other Words For Home',
    Images.book1,
    4.3,
    'English',
    341,
    'Author Name',
    1,
    ['Romance', 'Adventure', 'Drama'],
    0,
    'Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean' +
      ' in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in ' +
      'Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies ' +
      "that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle " +
      "Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends," +
      ' a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude ' +
      'can be seen as she really is.',
    10,
  ),

  new Book(
    8,
    'The Metropolis',
    Images.book2,
    4.1,
    'English',
    272,
    'Author Name',
    2,
    ['Adventure', 'Drama'],
    0,
    'In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. ' +
      'But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling ' +
      'artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence.' +
      " Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United " +
      ' States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to ' +
      'visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted' +
      'by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the' +
      " agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's" +
      '  millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching ' +
      '  adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around ' +
      '  us and the technologies guiding us into the future.',
    12,
  ),

  new Book(
    9,
    'The Tiny Dragon',
    Images.book3,
    3.5,
    'English',
    110,
    'Author Name',
    3,
    ['Drama', 'Adventure', 'Romance'],
    0,
    'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world ' +
      'to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank ' +
      'pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    100,
  ),
];
