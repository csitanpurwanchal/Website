import React from "react";
import "./notice.css";
import NoticeHeader from "./components/NoticeHeader";
import NoticeList from "./components/NoticeList";

const Notices = () => {
  return (
    <div className="notices-container">
      <NoticeHeader />
      <NoticeList />
  
    </div>
  );
};

export default Notices;