import React from 'react';
import "./Navbar.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const Navbar: React.FC = () => {
  return (
    <div className="navbarContainer">
      <div className="left">
        <button id="sidebarToggle">
          <ReorderIcon id="icon" />
        </button>
        <YouTubeIcon id="icon" style={{ color: 'red' }} />
        <h1>YouTube</h1>
      </div>
      <div className="center">
        <input id="searchBar" placeholder="Search" />
        <button id="searchButton">
          <SearchIcon style={{ color: "grey" }} />
        </button>
      </div>
      <div className="right">
        <button
          id="createVideo"
        // onClick={() => (window.location.pathname = "/upload")}
        >
          <VideoCallIcon id="icon" />
        </button>
        <img
          id="profilePic"
        // src={profilePicture}
        // onClick={() => (window.location.pathname = "/account")}
        />
        {/* {loggedIn ? (
          <img
            id="profilePic"
            src={profilePicture}
            onClick={() => (window.location.pathname = "/account")}
          />
        ) : (
          <button
            id="signInButton"
            onClick={() => {
              window.location.pathname = "signin";
            }}
          >
            {" "}
            Sign In
          </button>
        )} */}
      </div>
    </div>
  )
};

export default Navbar;