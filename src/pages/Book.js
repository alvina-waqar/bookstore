import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function Book() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div>
        <div > </div>
        <Container>
          {books && books.map((item) => (
            <div>
              <h3>{item.title}</h3>
              <button>Rs.{item.price}</button>
            </div>
          ))}
        </Container>
      </div>
    </>
  );

}

export default Book
