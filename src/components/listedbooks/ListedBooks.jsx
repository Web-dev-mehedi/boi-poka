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
import { FaArrowDown } from "react-icons/fa";

const ListedBooks = () => {
  const [sort,setSort] = useState("")
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

  //
  const handleDelete = (id, idx) => {
    //
    const afterDeleteRead = readList.filter((item) => item.bookId !== id);
    setReadList(afterDeleteRead);
    //
    const afterDeleteWish = WishList.filter((item) => item.bookId !== idx);
    setWishlist(afterDeleteWish);
    deleteFormLs(id, idx);
  };

  //
  

  const handleSort =(sortType)=>{
      setSort(sortType);

      if(sortType === "Number of pages"){
        const sortedReadList =[...readList.sort((a, b) => a.totalPages - b.totalPages)];
        setReadList(sortedReadList)
    }

    if(sortType=== "Rating"){
      const sortedReadList= [...readList.sort((a,b)=> b.rating - a.rating)];
      setReadList(sortedReadList)
    }

    if(sortType=== "Publisher year"){
      const sortedReadList =[...readList.sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)];
      setReadList(sortedReadList)
    }

    // wishlist


    if(sortType === "Number of pages"){
      const sortedWishList =[...WishList.sort((a, b) => a.totalPages - b.totalPages)];
      setReadList(sortedWishList)
  }

  if(sortType=== "Rating"){
    const sortedWishList= [...WishList.sort((a,b)=> b.rating - a.rating)];
    setReadList(sortedWishList)
  }

  if(sortType=== "Publisher year"){
    const sortedWishList =[...WishList.sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)];
    setReadList(sortedWishList)
  }

      }


  const navigation = useNavigate();

  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-6">
        <h1 className="bg-[#13131316] w-full text-3xl text-center font-bold rounded-2xl p-6">Books</h1>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white text-xl font-medium">
            {/*  */}
            Sort By
           {
           sort ? `: ${sort}`:<FaArrowDown />
           } 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={()=>handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSort("Number of pages")}>
              <a> Number of pages</a>
            </li>

            <li  onClick={()=>handleSort("Publisher year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className="py-10">
        <TabList>
          <Tab>ReadList Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="py-10 ">
            {readList.map((item) => (
              <div className="space-y-8 md:flex justify-between items-start gap-10 p-6 border border-[#d8d8d8d0] rounded-2xl mb-6 relative">
                <figure className="w-full md:w-3/12 mx-auto p-10 sm:p-20 md:p-6 lg:p-10 xl:p-20 bg-[#f3f3f3] rounded-2xl">
                  <img
                    src={item.image}
                    alt="book"
                    className="w-full rounded-2xl object-cover"
                  />
                </figure>
                <div className="w-full md:w-9/12 mx-auto space-y-10">
                  <div>
                    <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
                      {item.bookName}
                    </h1>
                    <h3 className="text-base font-medium text-[#131313c8]">
                      By : {item.author}
                    </h3>
                  </div>
                  {/*  */}

                  <div className="flex justify-start items-center gap-6 flex-wrap ">
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
                    <div className="flex justify-start items-start  gap-10 border-b border-[#d8d8d8d0] pb-7">
                      <div className="text-[#131313] font-semibold flex flex-wrap justify-between items-center gap-8 ">
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

                    <div className="flex justify-start items-center gap-10 pt-10 flex-wrap">
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
                <div
                  onClick={() => handleDelete(item.bookId, null)}
                  className=" hover:bg-red-400 transition-all absolute -right-3 -top-12 cursor-pointer bg-slate-300 rounded-full p-2"
                >
                  <TbHttpDelete className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="py-10">
            {WishList.map((item) => (
              <div className="space-y-8 md:flex justify-between items-start gap-10 p-6 border border-[#d8d8d8d0] rounded-2xl mb-6 relative">
                <figure className="w-full md:w-3/12 mx-auto p-10 sm:p-20 md:p-6 lg:p-10 xl:p-20 bg-[#f3f3f3] rounded-2xl">
                  <img
                    src={item.image}
                    alt="book"
                    className="w-full rounded-2xl"
                  />
                </figure>
                <div className="w-full md:w-9/12 mx-auto space-y-10">
                  <div>
                    <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
                      {item.bookName}
                    </h1>
                    <h3 className="text-base font-medium text-[#131313c8]">
                      By : {item.author}
                    </h3>
                  </div>
                  {/*  */}

                  <div className="flex justify-start items-center gap-6 flex-wrap">
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
                      <div className="text-[#131313] font-semibold flex justify-between items-center gap-8 flex-wrap ">
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

                    <div className="flex justify-start items-center gap-10 pt-10 flex-wrap">
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
                <div
                  onClick={() => handleDelete(null, item.bookId)}
                  className="absolute -right-3 -top-12 cursor-pointer bg-slate-300 rounded-full p-2 hover:bg-red-400 transition-all"
                >
                  <TbHttpDelete className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
