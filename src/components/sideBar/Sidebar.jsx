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
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="top">
        <h1 className="logo">Admin Dashboard</h1>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li className="sectionTitle">MAIN</li>
          <li>
            <DashboardIcon className="icon" />
            <span className="iconTitle">Dashboard</span>
          </li>
        </ul>
        <ul>
          <li className="sectionTitle">LISTS</li>
          <li>
            <GroupIcon className="icon" />
            <span className="iconTitle">Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span className="iconTitle">Products</span>
          </li>
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
          <span id="white"></span>
          <span id="black"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
