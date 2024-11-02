import React from "react";
import PropTypes from "prop-types";

const ListedBooks = () => {
    // 
//     const [active, setActive] = useState(true);
//   console.log(active);
//   const handleActive1 = () => {
//     setActive(false);
//   };
//   const handleActive2 = () => {
//     setActive(true);
//   };
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted w-48 ">
        <a  role="tab" className="tab">
          Read
        </a>
        <a  role="tab" className="tab tab-active">
            wishlist
        </a>
      </div>
    </div>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
