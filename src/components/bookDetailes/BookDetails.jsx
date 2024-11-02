import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList} from "../../utilities/utilities";


const BookDetails = () => {
    //
    const { bookId } = useParams();
    //
    const data = useLoaderData();

    // 


 

  const [active, setActive] = useState(true);
  const [readBook,setReadBook] = useState([]);
  const handleActive1 = (id) => {
    setActive(false);
    addToStoredReadList(id);
  
    const book = data.find(item => item.bookId == id);
    const newReadBook = [...readBook,book]
    setReadBook(newReadBook);

  
  };
  const handleActive2 = (id) => {
    setActive(true);
    addToStoredWishList(id);
   
  };

  const bId = Number(bookId);
  // for spicific book by id
  const {
    bookId: newBookId,
    bookName,
    author,
    image,
    review,
    rating,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
  } = data.find((book) => book.bookId === bId);
  // 


  // 
  return (
    <div className=" md:flex justify-between items-start gap-10 py-28">
      <figure className="w-1/2 mx-auto p-24 bg-[#f3f3f3] rounded-2xl">
        <img src={image} alt="book" className="w-full rounded-2xl" />
      </figure>
      <div className="w-1/2 mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
            {bookName}
          </h1>
          <h3 className="text-base font-medium text-[#131313c8] border-b border-[#d8d8d8d0] pb-5 ">
            By : {author}
          </h3>
        </div>
        {/*  */}
        <p className="text-base font-medium text-[#131313c8] border-b border-[#d8d8d8d0] pb-5">
          {category}
        </p>
        {/*  */}
        <p className="text-base font-normal text-[#1313134f]">
          {" "}
          <strong className="text-black">Review : </strong> {review}
        </p>
        {/*  */}
        <div className="flex justify-start items-center gap-6 border-b border-[#d8d8d8d0] pb-7">
          <span className="text-[#131313] text-base font-bold">Tag</span>
          {tags.map((i, d) => (
            <span
              key={d}
              className="bg-[#F3F3F3] text-[#23BE0A] rounded-full px-4 py-1 text-base font-medium"
            >
              # {i}
            </span>
          ))}
        </div>
        {/*  */}
        <div>
          <div className="flex justify-start items-start gap-10">
            <div className="text-[#131313be] font-medium flex flex-col justify-center items-start gap-4">
              <span>Number of Pages : </span>
              <span>Publisher : </span>
              <span>Year of Publishing : </span>
              <span>Rating : </span>
            </div>
            <div className="text-[#131313] font-semibold flex flex-col justify-center items-start gap-4">
              <span>{totalPages}</span>
              <span>{publisher}</span>
              <span>{yearOfPublishing}</span>
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex gap-10 pt-10">
            <button
              onClick={()=>handleActive1(bookId)}
              className={
                !active
                  ? "bg-[#50B1C9] text-white btn btn-outline px-10"
                  : "btn btn-outline"
              }
            >
              Read
            </button>
            <button
              onClick={()=>handleActive2(bookId) }
              className={
                active
                  ? "bg-[#50B1C9] text-white btn btn-outline px-10"
                  : "btn btn-outline"
              }
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
