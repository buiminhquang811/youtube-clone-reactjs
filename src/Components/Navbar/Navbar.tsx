import React, { useState, useEffect, useContext } from 'react';
import "./Navbar.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { ToggleSidebarContext } from '../../Helper/Context';

const Navbar: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string>('');
  const { showSidebar, setShowSidebar } = useContext(ToggleSidebarContext);

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      setLoggedIn(true);
      setProfilePicture(sessionStorage.getItem('imageUrl') as string);
    }
  }, [sessionStorage.getItem('loggedIn')])

  return (
    <div className="navbarContainer">
      <div className="left">
        <button id="sidebarToggle" onClick={() => setShowSidebar(!showSidebar)}>
          <ReorderIcon id="icon" />
        </button>
        <div id="homeBtn">
          <YouTubeIcon id="icon" style={{ color: 'red' }} onClick={() => (window.location.pathname = "/")} />
          <h1>YouTube</h1>
        </div>
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
          onClick={() => (window.location.pathname = "/upload")}
        >
          <VideoCallIcon id="icon" />
        </button>
        {loggedIn ? (
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
        )}
      </div>
    </div>
  )
};

export default Navbar;