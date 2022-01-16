import React from "react";
const initialState = {
  books: [
    { id: 1, title: "The Power Of Now", price: 500 },
    { id: 2, title: "Reclaim Your Heart", price: 500 },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.books;

      case "ADDBOOK":
          console.log(action.payload)
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          books: [...state.books, ...newBook]
      }

    default:
      return state
  }
};

export default reducer;