import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from "../components/root/Root";
import ErrorPage from "../components/errorpage/ErrorPage";
import Home from "../components/home/Home";
import ListedBooks from "../components/listedbooks/ListedBooks";
import PageToRead from "../components/pagetoread/PageToRead";
import BookDetails from "../components/bookDetailes/BookDetails";

// 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home/>,
            loader: ()=> fetch("/public/data/booksData.json")
        },
        {
           path:"books/:bookId",
           element:<BookDetails/>,
           loader: ()=> fetch("/public/data/booksData.json")
          
        },
        {
            path:"/listed-books",
            element:<ListedBooks/>
        },
        {
           path:"/pages-to-read",
           element:<PageToRead/> 
        }
        
      ]
    },
  ]);


  export { router}