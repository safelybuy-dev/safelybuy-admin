import {
  Bag,
  // BitcoinIcon,
  DeliveryIcon,
  GiftCardIcon,
  Tickets,
} from "svg";

export const navMenuItems = [
  {
    color: "lime",
    hasDropdown: true,
    SVG: Bag,
    dropdownLinks: [
      { text: "Manage Inventory", url: "/shopping/inventory" },
      { text: "Order Mannagement", url: "/shopping/orders" },
    ],
    text: "Shopping",
  },
  {
    color: "green",
    hasDropdown: false,
    SVG: DeliveryIcon,
    text: "Delivery",
    url: "/delivery",
  },
  {
    color: "purple",
    hasDropdown: true,
    SVG: Tickets,
    dropdownLinks: [
      { text: "Manage Inventory", url: "/tickets/inventory" },
      { text: "Tickets Mannagement", url: "/tickets/sales" },
    ],
    text: "Tickets",
  },
  // {
  //   color: "yellow",
  //   hasDropdown: true,
  //   SVG: BitcoinIcon,
  //   dropdownLinks: [
  //     { text: "Bitcoin History", url: "/bitcoin/history" },
  //     { text: "Set Bitcoin Prices", url: "/bitcoin/price" },
  //   ],
  //   text: "Bitcoin",
  // },
  {
    color: "orange",
    hasDropdown: true,
    SVG: GiftCardIcon,
    dropdownLinks: [
      { text: "Gift Card History", url: "/giftcard/history" },
      { text: "Set Giftcard Prices", url: "/giftcard/prices" },
    ],
    text: "Gift Card",
  },
  {
    color: "blue",
    hasDropdown: true,
    SVG: Tickets,
    dropdownLinks: [
      { text: "View Restaurants", url: "/food/restuarants" },
      { text: "View Restaurant Orders", url: "/food/orders" },
      { text: "View Meal Plans", url: "/food/meal-plan" },
      { text: "View Meal Plan Orders", url: "/food/meal-plan/orders" },
      { text: "Meal Plan Extras", url: "/food/meal-plan/extras" },
    ],
    text: "Food",
  },
];

export const mainMenuItems = [
  { url: "/users", text: "Administrator Management" },
  { url: "/customers", text: "Customer Management" },
  { url: "/contents", text: "Content Management" },
  { url: "/discounts", text: "Discount Promotion Management" },
  { url: "/sellers", text: "Seller Management" },
  { url: "/mails", text: "Email Marketing" },
  { url: "/referrals", text: "Referral Management" },
  { url: "/payments", text: "Payment Request" },
];
