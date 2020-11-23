import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faThumbtack,
  faUsers,
  faQuestionCircle,
  faInbox,
  faHashtag,
  faAngleDown,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Content from "./shared/Content";

export default function Main() {
  const [activeSpace, setActiveSpace] = useState("home");

  function handleActiveSpace(data) {
    setActiveSpace(data);
  }
  return (
    <div id="main">
      {/* ###################### ICON BAR ############################## */}
      <div id="first-sidebar">
        <a className="icon-link" id="home">
          <img
            alt="home"
            id="channel-icon"
            src="/channel-icons/ps-shelf-navy.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <hr />

        <a id="smiley">
          <img
            id="channel-icon"
            alt="smiley"
            src="/channel-icons/ps-icon.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <a id="ship">
          <img
            alt="ship"
            id="channel-icon"
            src="/channel-icons/ship.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <a id="leaf">
          <img
            alt="leaf"
            id="channel-icon"
            src="/channel-icons/leaf.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <a id="ps-smile">
          <img
            alt="ps-smile"
            id="channel-icon"
            src="/channel-icons/ps-icon2.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <a id="sun">
          <img
            alt="sun"
            id="channel-icon"
            src="/channel-icons/sun.png"
            onClick={(e) => handleActiveSpace(e.target.alt)}
          />
        </a>
        <hr />
        <div className="channel-button">
          <div className="channel-button-content">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </div>
        </div>
      </div>
      {/* ####################### SPACE CHANNELS BAR ###################### */}
      <div id="second-sidebar">
        <div className="top-menu" id="menu-second-sidebar">
          <p className="title"> product.space </p>
          <div className="caret">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <div id="content-second-sidebar">
          <div className="menu-item-container">
            <div className="menu-item">
              <div className="caret-sm">
                <FontAwesomeIcon icon={faAngleRight} size="sm" />
              </div>
              <p className="subtitle"> CATALOGUE </p>
            </div>
          </div>
          <div className="menu-item-container">
            <div className="menu-item">
              <div className="caret-sm">
                <FontAwesomeIcon icon={faAngleRight} size="sm" />
              </div>
              <p className="subtitle"> ORDERS </p>
            </div>
          </div>
          <div className="menu-item-container">
            <div className="menu-item">
              <div className="caret-sm">
                <FontAwesomeIcon icon={faAngleDown} size="sm" />
              </div>
              <p className="subtitle"> CHANNELS </p>
            </div>
            <div className="list">
              <div className="list-item">
                <div className="menu-hashtag">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <p className="list-item-text"> spaces </p>
              </div>
              <div className="list-item">
                <div className="menu-hashtag">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <p className="list-item-text"> influencer </p>
              </div>
              <div className="list-item">
                <div className="menu-hashtag">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <p className="list-item-text"> landing </p>
              </div>
            </div>
          </div>
          <div className="menu-item-container">
            <div className="menu-item">
              <div className="caret-sm">
                <FontAwesomeIcon icon={faAngleRight} size="sm" />
              </div>
              <p className="subtitle"> CUSTOMERS </p>
            </div>
          </div>
          <div className="menu-item-container">
            <div className="menu-item">
              <div className="caret-sm">
                <FontAwesomeIcon icon={faAngleRight} size="sm" />
              </div>
              <p className="subtitle"> MARKETING </p>
            </div>
          </div>
        </div>
      </div>
      {/* ################### MAIN CONTENT ##################### */}
      <div id="main-content">
        <div className="top-menu" id="menu-main-content">
          <div id="active-channel">
            <div className="menu-hashtag">
              <FontAwesomeIcon icon={faHashtag} size="lg" />
            </div>
            <p className="title"> spaces </p>
          </div>
          <div className="icon-group">
            <div className="icon">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faThumbtack} size="lg" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </div>
          </div>
        </div>
        {/* ######################## CONTENT ########################## */}
        <Content activeSpace={activeSpace} />
      </div>
      {/* ###################### RIGHT SIDEBAR #################### */}
      <div id="right-sidebar">
        <div className="top-menu" id="menu-right-sidebar">
          <div className="search-bar">
            <p id="search-bar-text"> Search </p>
            <FontAwesomeIcon icon={faSearch} size="sm" />
          </div>
          <div className="icon-group">
            <div className="icon">
              <FontAwesomeIcon icon={faInbox} size="lg" />
            </div>
            <div>
              <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
            </div>
          </div>
        </div>
        <Content activeSpace={activeSpace} />
      </div>
      <style jsx>{`

    // ######################## MENU ################################

    .top-menu {
        border-bottom: 1px solid #202225;
        box-shadow: 0 1px 1px -1px #202225;
        height: 60px;
        padding: 10px;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #menu-second-sidebar {

    }
    #menu-main-content {
       
    }
    #menu-right-sidebar {
         background-color: #373940;
    }

    // ####################### CONTAINERS ##########################
    #main {
        display: flex;
        flex-direction: row:
        height: 100vh;
        justify-content: flex-start;
        min-width: 950px;
    }
    #first-sidebar {
        padding-top:  5px;
        flex-grow: 0;
        height: 100vh; 
        width: 70px;
        text-align: center;
        background-color: #202225;
    }
    #second-sidebar {
        flex-grow: 0;
        width: 240px;
        height:  100vh; 
        background-color: #292B2F;
    }
    #main-content {
        flex-grow: 1;
        height:  100vh; 
        background-color: #373940;
    }
    .content {
      padding: 10px;
    }
    #right-sidebar {
        height: 100vh;
        width 240px;
        background-color: #292B2F;
    }
    .menu-item {
        display: flex;
        align-items: center;
    }
    .menu-item-container {
      margin-bottom: 8px;
    }
    .list-item {
      display: flex;
      align-items: center;
    }
    #active-channel {
      display: flex;
      align-items: center;
    }


    // ############################## CONTENT #######################

    #content-second-sidebar {
        padding-top: 20px;
        padding-left: 8px;
    }

    .list {
        padding-left: 16px;
    }

    .icon-group {
        display: flex;
        color: #8E9298;
    }
    .icon {
        margin-right: 20px;
    }
    .caret {
      color: white;
      margin-right: 8px;
    }
    .caret-sm {
      color: #8E9298;
      margin-right: 8px;
      padding-bottom: 3px;
    }
    .menu-hashtag {
      color: #8E9298;
      margin-right: 8px;
      padding-top: 2px;
    }
    .icon:hover {
        color: white;
    }

    .search-bar {
        display: flex;
        background-color: #202225;
        color: #72767E;
        border-radius: 8px;
        padding: 0px 10px;
        align-items: center;
        margin-left: -20px;
    }

    // ############################# ICONS ##########################
    #channel-icon {
        width: 50px;
        border-radius: 50px; 
        transition: 0.25s;
        cursor: pointer;
        margin-bottom: 5px;
        margin-top: 8px;
    }

    .icon-link:focus channel-icon {
      width: 100%;
    }

    #channel-icon:hover {
        border-radius: 12px;
    }

    .channel-button {
        transition: 0.25s;
        background-color: #373940;
        border-radius: 35px;
        cursor: pointer;
        height: 50px;
        margin: 10px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .channel-button-content { 
        color: #43B581;
    }

    .channel-button:hover {
        border-radius: 12px;
        background-color: #43B581; 
    }
    
    .channel-button:hover .channel-button-content{
        color: white; 
    }

    hr {
        height: 2px;
        width: 50%;
        border: 2px solid #373940;
        margin-top: 5px;
    }

    // #################### FONTS #################################

    .title  {
        font-weight: 600;
        color: white;
    }

    .subtitle {
        font-weight: 500;
        font-size: 13px;
        color: #8E9298;
    }
    .list-item-text {
        font-weight: 600;
        color: #8E9298;
        font-size: 16px;
    }

    #search-bar-text {
        margin-right: 50px;
        font-size: 13px;
    }

    //  ###################### MEDIA QUERIES ########################

    @media only screen and (max-width: 500px) {
      #first-sidebar {
        margin-left: -70px;
      }
      #second-sidebar {
        margin-left: -195px;
      }
    }
}

    `}</style>
    </div>
  );
}
