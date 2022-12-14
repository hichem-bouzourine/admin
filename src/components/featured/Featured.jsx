import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={6} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="value">420$</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="summaryItem">
            <div className="title">Target</div>
            <div className="value positive">
              <KeyboardArrowUpOutlinedIcon />
              $12.4k
            </div>
          </div>
          <div className="summaryItem">
            <div className="title">Last week</div>
            <div className="value negative">
              <KeyboardArrowDownIcon />
              $12.4k
            </div>
          </div>
          <div className="summaryItem">
            <div className="title">Last month</div>
            <div className="value negative">
              <KeyboardArrowDownIcon />
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
