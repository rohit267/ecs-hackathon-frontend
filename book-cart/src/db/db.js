export const DBConfig = {
  name: "booksDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "books",
      storeConfig: { keyPath: "id" },
      storeSchema: [
        { name: "id", keypath: "id", options: { unique: true } },
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "authors", keypath: "authors", options: { unique: false } },
        {
          name: "average_rating",
          keypath: "average_rating",
          options: { unique: false },
        },
        { name: "isbn", keypath: "isbn", options: { unique: true } },
        {
          name: "language_code",
          keypath: "language_code",
          options: { unique: false },
        },
        {
          name: "ratings_count",
          keypath: "ratings_count",
          options: { unique: false },
        },
        { name: "price", keypath: "price", options: { unique: false } },
      ],
    },
  ],
};

//   {
//     "bookID": 1,
//     "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
//     "authors": "J.K. Rowling-Mary GrandPré",
//     "average_rating": 4.56,
//     "isbn": 439785960,
//     "language_code": "eng",
//     "ratings_count": 1944099,
//     "price": 230
//     }
