import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  deleteFormLs,
  getStoredReadList,
  getStoredWishList,
} from "../../utilities/utilities";
import { TbHttpDelete } from "react-icons/tb";

const ListedBooks = () => {
  //
  const [readList, setReadList] = useState([]);
  const [WishList, setWishlist] = useState([]);
  // call data by loader
  const allBooks = useLoaderData();
  //
  useEffect(() => {
    //   for readList
    const storedReadList = getStoredReadList();
    const intSoredReadList = storedReadList.map((item) => Number(item));
    const readBoooks = allBooks.filter((item) =>
      intSoredReadList.includes(item.bookId)
    );
    setReadList(readBoooks);
    // 

   
    //  for wishList
    const storedWishList = getStoredWishList();
    const intStoredWishList = storedWishList.map((item) => Number(item));
    const wishBooks = allBooks.filter((item) =>
      intStoredWishList.includes(item.bookId)
    );
    setWishlist(wishBooks);
  }, []);

console.log(readList)
  // 
  const handleDelete=(id,idx)=>{
       // 
    const afterDeleteRead = readList.filter(item => item.bookId !== id );
    setReadList(afterDeleteRead)
    // 
    const afterDeleteWish = WishList.filter(item => item.bookId !== idx );
    setWishlist(afterDeleteWish)
    deleteFormLs(id,idx)

  }

  // 

  const navigation = useNavigate()

  return (
    <Tabs>
      <TabList>
        <Tab>ReadList</Tab>
        <Tab>WishList</Tab>
      </TabList>

      <TabPanel>
        <div className="py-10 ">
          {readList.map((item) => (
            <div className=" md:flex justify-between items-start gap-10 p-6 border border-[#d8d8d8d0] rounded-2xl mb-6 relative">
              <figure className="w-3/12 mx-auto p-20 bg-[#f3f3f3] rounded-2xl">
                <img
                  src={item.image}
                  alt="book"
                  className="w-full rounded-2xl"
                />
              </figure>
              <div className="w-9/12 mx-auto space-y-10">
                <div>
                  <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
                    {item.bookName}
                  </h1>
                  <h3 className="text-base font-medium text-[#131313c8]">
                    By : {item.author}
                  </h3>
                </div>
                {/*  */}

                <div className="flex justify-start items-center gap-6">
                  <span className="text-[#131313] text-base font-bold">
                    Tag
                  </span>
                  {item.tags.map((i, d) => (
                    <span
                      key={d}
                      className="bg-[#F3F3F3] text-[#23BE0A] rounded-full px-4 py-1 text-base font-medium"
                    >
                      # {i}
                    </span>
                  ))}
                  <span>Year of Publishing : {item.yearOfPublishing}</span>
                </div>
                {/*  */}
                <div>
                  <div className="flex justify-start items-start gap-10 border-b border-[#d8d8d8d0] pb-7">
                    <div className="text-[#131313] font-semibold flex justify-center items-center gap-8 ">
                      <p>
                        <span>Publisher : </span>
                        {item.publisher}
                      </p>
                      <p>
                        <span>Page : </span>
                        {item.totalPages}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-10 pt-10">
                    <p className="text-base font-medium text-[#328EFF] bg-[#328eff35]  px-6 py-2 rounded-full">
                      Category : {item.category}
                    </p>
                    <p className="text-base font-medium text-[#FFAC33] bg-[#ffad332f]  px-6 py-2 rounded-full">
                      Ratings : {item.rating}
                    </p>
                    <Link
                      to={`/books/${item.bookId}`}
                      className="text-base font-medium text-[#fff] bg-[#23BE0A]  px-6 py-2 rounded-full"
                    >
                      View Details
                    </Link>
                    {/*  */}
                  </div>
                </div>
              </div>
              <div onClick={()=> handleDelete(item.bookId,null)} className=" hover:bg-red-400 transition-all absolute -right-3 -top-3 cursor-pointer bg-slate-300 rounded-full p-2">
                <TbHttpDelete className="text-2xl"/>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
      <div className="py-10">
        {WishList.map((item) => (
          <div className=" md:flex justify-between items-start gap-10 p-6 border border-[#d8d8d8d0] rounded-2xl mb-6 relative">
            <figure className="w-3/12 mx-auto p-20 bg-[#f3f3f3] rounded-2xl">
              <img src={item.image} alt="book" className="w-full rounded-2xl" />
            </figure>
            <div className="w-9/12 mx-auto space-y-10">
              <div>
                <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
                  {item.bookName}
                </h1>
                <h3 className="text-base font-medium text-[#131313c8]">
                  By : {item.author}
                </h3>
              </div>
              {/*  */}

              <div className="flex justify-start items-center gap-6">
                <span className="text-[#131313] text-base font-bold">Tag</span>
                {item.tags.map((i, d) => (
                  <span
                    key={d}
                    className="bg-[#F3F3F3] text-[#23BE0A] rounded-full px-4 py-1 text-base font-medium"
                  >
                    # {i}
                  </span>
                ))}
                <span>Year of Publishing : {item.yearOfPublishing}</span>
              </div>
              {/*  */}
              <div>
                <div className="flex justify-start items-start gap-10 border-b border-[#d8d8d8d0] pb-7">
                  <div className="text-[#131313] font-semibold flex justify-center items-center gap-8 ">
                    <p>
                      <span>Publisher : </span>
                      {item.publisher}
                    </p>
                    <p>
                      <span>Page : </span>
                      {item.totalPages}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start items-center gap-10 pt-10">
                  <p className="text-base font-medium text-[#328EFF] bg-[#328eff35]  px-6 py-2 rounded-full">
                    Category : {item.category}
                  </p>
                  <p className="text-base font-medium text-[#FFAC33] bg-[#ffad332f]  px-6 py-2 rounded-full">
                    Ratings : {item.rating}
                  </p>
                  <Link
                    to="/"
                    className="text-base font-medium text-[#fff] bg-[#23BE0A]  px-6 py-2 rounded-full"
                  >
                    View Details
                  </Link>
                  {/*  */}
                </div>
              </div>
            </div>
            <div onClick={()=> handleDelete(null,item.bookId)} className="absolute -right-3 -top-3 cursor-pointer bg-slate-300 rounded-full p-2 hover:bg-red-400 transition-all">
                <TbHttpDelete className="text-2xl"/>
              </div>
          </div>
        ))}
         </div>
      </TabPanel>
     
    </Tabs>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
