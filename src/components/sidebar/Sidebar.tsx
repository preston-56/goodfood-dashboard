import React from "react";
import { sidebarLinks, otherLinks } from "../../data"; // Import sidebarLinks and otherLinks from data.ts
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"; // Import Material-UI components
import {
  Dashboard,
  Restaurant,
  MenuBook,
  Star,
  Settings,
  Payment,
  AccountCircle,
  Help,
} from "@mui/icons-material"; // Import Material-UI icons

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue-500 bg-opacity-25 text-dark px-6 h-full min-h-screen md:w-64 lg:w-72">
      {/* GoodFood with icon */}
      <div className="flex items-center mb-8">
        {/* Add Material-UI icon */}
        <svg
          className="w-8 h-8 mr-2 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21V19C9 17.9391 9.42143 16.9217 10.1716 16.1716C10.9217 15.4214 11.9391 15 13 15C14.0609 15 15.0783 15.4214 15.8284 16.1716C16.5786 16.9217 17 17.9391 17 19V21"></path>
          <path d="M9 21H15"></path>
          <path d="M12 10V19"></path>
          <path d="M7 3H17L21 8V17H3V8L7 3Z"></path>
        </svg>
        <span className="text-lg font-bold">GOODFOOD</span>
      </div>

      {/* Menu Links */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 flex items-center">
          <span className="mr-2">MENU</span>
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Add SVG icon for MENU */}
          </svg>
        </h2>
        <List>
          {sidebarLinks.map((link) => (
            <ListItem button key={link.id}>
              <ListItemIcon>
                {/* Use Material-UI icons */}
                {link.title === "Dashboard" && <Dashboard />}
                {link.title === "Food Order" && <Restaurant />}
                {link.title === "Manage Menu" && <MenuBook />}
                {link.title === "Customer Review" && <Star />}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </div>

      {/* Other Links */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 mt-4 flex items-center">
          <span className="mr-2">OTHERS</span>
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Add SVG icon for OTHERS */}
          </svg>
        </h2>
        <List>
          {otherLinks.map((link) => (
            <ListItem button key={link.id}>
              <ListItemIcon>
                {/* Use Material-UI icons */}
                {link.title === "Settings" && <Settings />}
                {link.title === "Payment" && <Payment />}
                {link.title === "Accounts" && <AccountCircle />}
                {link.title === "Help" && <Help />}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
