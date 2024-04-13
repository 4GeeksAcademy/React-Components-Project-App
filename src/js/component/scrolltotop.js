import React, { useState } from "react";
import "../../styles/styles.css";


export default function scrollToTop() {
  const [showBtn, setShowBtn] = useState("myBtn none");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        Top
      </button>

      <div
        style={{ backgroundColor: "black", color: "white", padding: "30px" }}
      >
        Scroll Down
      </div>
      <div
        style={{ backgroundColor: "lightgrey", padding: "30px 30px 2500px" }}
      >
        This example demonstrates how to create a "scroll to top" button that
        becomes visible
        <strong>when the user starts to scroll the page</strong>.
      </div>
    </div>
  );
}
