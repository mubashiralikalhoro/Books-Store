class Author {
  constructor(id, name, image, info, booksId, totalSells) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.info = info;
    this.booksId = booksId;
    this.totalSells = totalSells;
  }
}

export default Authors = [
  new Author(
    1,
    'Salman Rushdie',
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Hayfestival-2016-Salman-Rushdie-1-cu.jpg',
    },
    'Sir Ahmed Salman Rushdie[a] CH FRSL (Hindi: अहमद सलमान रुश्दी, Urdu: احمد سلمان رشدی; born 19 June 1947)' +
      ' is an Indian-born British-American novelist and essayist.[2] His work, combining magical realism with ' +
      'historical fiction, is primarily concerned with the many connections, disruptions, and migrations between' +
      ' Eastern and Western civilizations, with much of his fiction being set on the Indian subcontinent.',
    [1],
    2000,
  ),
  new Author(
    2,
    'Anthony Horowitz',
    {
      uri: 'https://literature.britishcouncil.org/assets/Uploads/writers/_resampled/FillWyI2ODAiLCI2ODAiXQ/Anthony-Horowitz-web.jpg',
    },
    'Anthony John Horowitz, CBE (born 5 April 1955) is an English novelist and screenwriter specialising in mystery and suspense.',
    [2],
    3000,
  ),
  new Author(
    3,
    'Lisa Taddeo',
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lisa_Taddeo_%2848432121181%29_%28cropped%29.jpg/220px-Lisa_Taddeo_%2848432121181%29_%28cropped%29.jpg',
    },
    'Lisa Taddeo is an American author and journalist known for her book Three Women',
    [3],
    3400,
  ),
];
