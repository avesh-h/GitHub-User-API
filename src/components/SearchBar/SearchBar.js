import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";
import "../SearchBar/SearchBar.css";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchBar() {
  const [userName, setUserName] = useState("");
  const [cardData, setCardData] = useState([]);
  // const [showCard,setShowCard] = useState(false)

  const SearchUser = async (e) => {
    e.preventDefault();
    if (userName) {
      const request = await fetch(`https://api.github.com/users/${userName}`);

      const data = await request.json();

      if (data.hasOwnProperty("id")) {
        setCardData(data);
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    else{
      toast.error('Invalid Input!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter Username"
          aria-label="Search"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-light"
          type="submit"
          onClick={SearchUser}
        >
          Search
        </button>
      </form>
      <UserCard Data={cardData} />
      <ToastContainer />
    </div>
  );
}

export default SearchBar;
