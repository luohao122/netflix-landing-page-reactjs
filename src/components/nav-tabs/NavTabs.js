import React from "react";
import Tab from "./Tab";

class NavTabs extends React.Component {
  render() {
    return (
      <section class="tabs">
        <div class="container">
          <Tab />
          <Tab />
          <Tab />
        </div>
      </section>
    );
  }
}

export default NavTabs;
