import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ErrorIcon from "@mui/icons-material/Error";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDark, setLight } from "../../redux/darkSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLightTheme = () => {
    dispatch(setLight());
  };
  const handleDarkTheme = () => {
    dispatch(setDark());
  };

  return (
    <div className="sidebarContainer">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">Admin Dashboard</h1>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li className="sectionTitle">MAIN</li>
          <Link to="/" className="link">
            <li>
              <DashboardIcon className="icon" />
              <span className="iconTitle">Dashboard</span>
            </li>
          </Link>
        </ul>
        <ul>
          <li className="sectionTitle">LISTS</li>
          <Link to="/users" className="link">
            <li>
              <GroupIcon className="icon" />
              <span className="iconTitle">Users</span>
            </li>
          </Link>
          <Link to="/products" className="link">
            <li>
              <StoreMallDirectoryIcon className="icon" />
              <span className="iconTitle">Products</span>
            </li>
          </Link>
          <li>
            <WysiwygIcon className="icon" />
            <span className="iconTitle">Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span className="iconTitle">Delivery</span>
          </li>
        </ul>

        <ul>
          <li className="sectionTitle">USEFUL</li>
          <li>
            <QueryStatsIcon className="icon" />
            <span className="iconTitle">Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span className="iconTitle">Notifications</span>
          </li>
        </ul>

        <ul>
          <li className="sectionTitle">SERVICE</li>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span className="iconTitle">System Health</span>
          </li>
          <li>
            <ErrorIcon className="icon" />
            <span className="iconTitle">Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span className="iconTitle">Settings</span>
          </li>
        </ul>

        <ul>
          <li className="sectionTitle">USER</li>
          <li>
            <AccountBoxIcon className="icon" />

            <span className="iconTitle">Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span className="iconTitle">Logout</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <span className="sectionTitle">THEME</span>
        <div className="themes">
          <span id="white" onClick={handleLightTheme}></span>
          <span id="black" onClick={handleDarkTheme}></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
