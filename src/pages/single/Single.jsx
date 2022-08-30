import "./single.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Informations</h1>
            <div className="item">
              <img
                src="https://avatars.githubusercontent.com/u/78175363?v=4"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">BOUZOURINE Hichem</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    Hichembouzourine.uni@gmail.com
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+213 699 092 353</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Ouled Yaich, Blida, Algeria</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">DZA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User Spending ( Last 6 Months)" aspect="100%" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
