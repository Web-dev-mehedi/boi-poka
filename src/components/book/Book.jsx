import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,author,image,review,totalPage,rating,tags,publisher,yearOfPublishing,category}= book || {};

    return (
      <Link to={`books/${bookId}`}>
            <div  className="card p-6 border border-[#13131324] rounded-2xl space-y-6">
        <figure className='w-full py-8 bg-[#F3F3F3] rounded-2xl'>
          <img className='w-32 h-44 mx-auto'
            src={image}
            alt="Book"
          />
        </figure>
        <div className="space-y-5">
           <div className="flex justify-start items-start gap-5">
              {
                tags.map(item=>(
                    <span className="bg-[#F3F3F3] text-[#23BE0A] rounded-full px-4 py-1 text-base font-medium">{item}</span>  
                ))
                } 
            </div> 
            {/*  */}
            <div className='space-y-5 border-b-2 border-dashed border-[#13131328] pb-5'>
              <h2 className="text-2xl font-bold playFair text-[#131313]">{bookName} </h2>
               <p className='text-base font-medium text-[#131313c8]'>{author}</p>         
           </div>
                  
            <div className='flex justify-between items-center text-base font-medium text-[#131313c8] pt-2'>
                <span>{category}</span>
                  <div className='flex justify-start gap-4  items-center'>
                    <span>{rating}</span>
                        <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                  </div>
           </div>
        </div>
      </div>
      </Link>
    );
};

Book.propTypes = {
    
};

export default Book;