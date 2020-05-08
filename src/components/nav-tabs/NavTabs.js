import React from "react";
import { Link } from "react-router-dom";
import Tab from "./Tab";
import TabContent from "./TabContent";

class NavTabs extends React.Component {
  componentDidMount() {
    this.tabItem = document.querySelectorAll(".tab-item");
    this.tabContentItem = document.querySelectorAll(".tab-content-item");
  }

  getTabContentOne = () => {
    return (
      <div className="tab-1-content-inner">
        <div>
          <p className="text-lg">
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </p>
          <Link to="#" className="btn btn-lg">
            Watch Free For 30 Days
          </Link>
        </div>
        <img src="tab-content-1.png" alt="tab-content-1" />
      </div>
    );
  };

  getTabContentTwo = () => {
    return (
      <>
        <div className="tab-2-content-top">
          <p className="text-lg">
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </p>
          <Link to="#" className="btn btn-lg">
            Watch Free For 30 Days
          </Link>
        </div>
        <div className="tab-2-content-bottom">
          <div>
            <img src="tab-content-2-1.png" alt="tab-content-2-pc" />
            <p className="text-md">Watch on your TV</p>
            <p className="text-dark">
              Smart Tvs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray
              players and more.
            </p>
          </div>
          <div>
            <img src="tab-content-2-2.png" alt="tab-content-2-mobile" />
            <p className="text-md">Watch instantly or download for later</p>
            <p className="text-dark">
              Available on phone and tablet, wherever you go.
            </p>
          </div>
          <div>
            <img src="tab-content-2-3.png" alt="tab-content-2-desktop" />
            <p className="text-md">Use any computer</p>
            <p className="text-dark">Watch right on Netflix.com</p>
          </div>
        </div>
      </>
    );
  };

  getTabContentThree = () => {
    return (
      <>
        <div className="text-center">
          <p className="text-lg">
            Choose one plan and watch everything on Netflix
          </p>
          <Link to="#" className="btn btn-lg">
            Watch Free For 30 Days
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly price after free month ends on 6/19/20</td>
              <td>$8.99</td>
              <td>$12.99</td>
              <td>$15.99</td>
            </tr>
            <tr>
              <td>HD Available</td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Ultra HD Available</td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Screens you can watch on at the same time</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Watch on your laptop, TV, phone and tablet</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Unlimited movies and TV shows</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Cancel anytime</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>First month free</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  onClickTab = (event) => {
    this.removeTabBorder();
    this.removeShowClass();

    // Add border to current tab
    event.currentTarget.classList.add("tab-border");
    // Grab content item from DOM
    const tabContentItem = document.querySelector(
      `#${event.currentTarget.id}-content`
    );
    // Add show class
    tabContentItem.classList.add("show");
  };

  removeTabBorder = () => {
    this.tabItem.forEach((item) => {
      item.classList.remove("tab-border");
    });
  };

  removeShowClass = () => {
    this.tabContentItem.forEach((item) => {
      item.classList.remove("show");
    });
  };

  render() {
    return (
      <>
        <section className="tabs">
          <div className="container">
            <Tab
              id="tab-1"
              iconName="fas fa-door-open fa-3x"
              text="Cancel anytime"
              onClickTab={this.onClickTab}
              defaultClass="tab-border"
            />
            <Tab
              id="tab-2"
              iconName="fas fa-tablet-alt fa-3x"
              text="Watch anywhere"
              onClickTab={this.onClickTab}
            />
            <Tab
              id="tab-3"
              iconName="fas fa-tags fa-3x"
              text="Pick your price"
              onClickTab={this.onClickTab}
            />
          </div>
        </section>
        <section className="tab-content">
          <div className="container">
            <TabContent
              id="tab-1-content"
              content={this.getTabContentOne()}
              defaultClass="show"
            />
            <TabContent id="tab-2-content" content={this.getTabContentTwo()} />
            <TabContent
              id="tab-3-content"
              content={this.getTabContentThree()}
            />
          </div>
        </section>
      </>
    );
  }
}

export default NavTabs;
