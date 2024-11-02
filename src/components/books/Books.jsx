import React from 'react';
import PropTypes from 'prop-types';
import Book from '../book/Book';

const Books = ({books}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
               books.map(item =><Book key={item.bookId} book={item}/>)
            }
        </div>
    );
};

Books.propTypes = {
    Books:PropTypes.array.isRequired
};

export default Books;