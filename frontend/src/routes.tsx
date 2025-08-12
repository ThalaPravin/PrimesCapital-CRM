import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Vendor Imports
import MainDashboardV from "views/vendor/default";
import NFTMarketplaceV from "views/vendor/marketplace";
import ProfileV from "views/vendor/profile";
import LeadsTable from "views/vendor/tables";
import RTLDefaultV from "views/vendor/default";
import LeadForm from "views/vendor/forms";
import VendorForm from "views/admin/forms";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAddTask,
  MdAddCard,
  MdOutlinePersonAdd,
} from "react-icons/md";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Add Vendor",
    layout: "/admin",
    path: "vendor-form",
    icon: <MdOutlinePersonAdd className="h-6 w-6" />,
    component: <VendorForm />,
  },
  {
    name: "Add Lead",
    layout: "/admin",
    path: "lead-form",
    icon: <MdOutlinePersonAdd className="h-6 w-6" />,
    component: <LeadForm />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },

  {
    name: "Vendor Dashboard",
    layout: "/vendor",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboardV />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: "Data Tables",
    layout: "/vendor",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <LeadsTable />,
  },
  {
    name: "Profile",
    layout: "/vendor",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProfileV />,
  },
  {
    name: "Add Lead",
    layout: "/vendor",
    path: "lead-form",
    icon: <MdOutlinePersonAdd className="h-6 w-6" />,
    component: <LeadForm />,
  },
  {
    name: "Logout",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
