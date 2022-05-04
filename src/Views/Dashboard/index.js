import React, { useState, Suspense, lazy } from "react";
import Footer from "components/Footer";
import Header from "./Main/Header";
import { MobileMenu } from "./Main/MobileMenu";
import { Route, Switch } from "react-router-dom";
const Main = lazy(() => import("./Main"));
const Messaging = lazy(() => import("./Main/Messaging"));
const Shopping = lazy(() => import("../Shopping"));
const Inventory = lazy(() => import("../Shopping/Inventory"));
const Orders = lazy(() => import("../Shopping/Orders"));
const Delivery = lazy(() => import("../Delivery"));
const DeliveryOrders = lazy(() => import("../Delivery/Orders"));
const Tickets = lazy(() => import("../Tickets"));
const TicketsInventory = lazy(() => import("../Tickets/Inventory"));
const RestuarantInventory = lazy(() => import("../Food/Inventory"));
const MenuInventory = lazy(() => import("../Food/Menu"));
const FoodOrdersInventory = lazy(() => import("../Food/orders"));
const MealPlan = lazy(() => import("../Food/mealplan"));
const MealPlanOrders = lazy(() => import("../Food/mealplan-orders"));
const MealPlanExtras = lazy(() => import("../Food/mealplan-extras"));
const TicketSales = lazy(() => import("../Tickets/Sales"));
const Bitcoin = lazy(() => import("../Bitcoin"));
const BitcoinHistory = lazy(() => import("../Bitcoin/History"));
const BitcoinPrices = lazy(() => import("../Bitcoin/Prices"));
const GiftCard = lazy(() => import("../GitCard"));
const GiftCardHistory = lazy(() => import("../GitCard/History"));
const GiftCardPrices = lazy(() => import("../GitCard/Prices"));
const Customers = lazy(() => import("../Customers"));
const Sellers = lazy(() => import("../Sellers"));
const Mails = lazy(() => import("../Mails"));
const Users = lazy(() => import("../Users"));
const Contents = lazy(() => import("../Contents"));
const Referrals = lazy(() => import("../Referrals"));
const ReferralManagement = lazy(() =>
  import("../Referrals/ReferralManagement")
);
const SetPoints = lazy(() => import("../Referrals/SetPoints"));
const Redemption = lazy(() => import("../Referrals/PointsRedemption"));
const Discounts = lazy(() => import("../Discounts"));
const DiscountsCodes = lazy(() => import("../Discounts/Codes"));
const DiscountsPromotions = lazy(() => import("../Discounts/Promotions"));
const Payments = lazy(() => import("../Payments"));

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative bg-purple-50 min-h-screen">
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} />
      <div className="flex py-56 px-16 pb-60 md:pb-96 md:flex-wrap md:justify-center md:py-24 md:px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/messages">
              <Messaging />
            </Route>

            {/* SHOPPING */}
            <Route exact path="/shopping">
              <Shopping />
            </Route>
            <Route exact path="/shopping/orders">
              <Orders />
            </Route>
            <Route exact path="/shopping/inventory">
              <Inventory />
            </Route>

            {/* DELIVERY */}
            <Route exact path="/delivery">
              <Delivery />
            </Route>
            <Route exact path="/delivery/orders">
              <DeliveryOrders />
            </Route>

            {/* TICKETS */}
            <Route exact path="/tickets">
              <Tickets />
            </Route>
            <Route exact path="/tickets/inventory">
              <TicketsInventory />
            </Route>
            <Route exact path="/tickets/sales">
              <TicketSales />
            </Route>

            {/* FOOD */}
            <Route exact path="/food/restuarants">
              <RestuarantInventory />
            </Route>

            <Route
              exact
              path={["/food/restuarants/all", "/food/restuarant/:id"]}
            >
              <MenuInventory />
            </Route>

            <Route exact path="/food/orders">
              <FoodOrdersInventory />
            </Route>

            {/* MEAL-PLAN */}

            <Route exact path="/food/meal-plan/orders">
              <MealPlanOrders />
            </Route>
            <Route exact path="/food/meal-plan/extras">
              <MealPlanExtras />
            </Route>
            <Route expact path="/food/meal-plan">
              <MealPlan />
            </Route>

            {/* BITCOIN */}
            <Route exact path="/bitcoin">
              <Bitcoin />
            </Route>
            <Route exact path="/bitcoin/history">
              <BitcoinHistory />
            </Route>
            <Route exact path="/bitcoin/price">
              <BitcoinPrices />
            </Route>

            {/* GIFTCARD */}
            <Route exact path="/giftcard">
              <GiftCard />
            </Route>
            <Route exact path="/giftcard/history">
              <GiftCardHistory />
            </Route>
            <Route exact path="/giftcard/prices">
              <GiftCardPrices />
            </Route>

            {/* CUSTOMERS */}
            <Route exact path="/customers">
              <Customers />
            </Route>

            {/* SELLERS */}
            <Route exact path="/sellers">
              <Sellers />
            </Route>

            {/* MAILS */}
            <Route exact path="/mails">
              <Mails />
            </Route>

            {/* USERS */}
            <Route exact path="/users">
              <Users />
            </Route>

            {/* CONTENTS */}
            <Route exact path="/contents">
              <Contents />
            </Route>

            {/* REFERRALS */}
            <Route exact path="/referrals">
              <Referrals />
            </Route>
            <Route exact path="/referrals/manage">
              <ReferralManagement />
            </Route>
            <Route exact path="/referrals/points">
              <SetPoints />
            </Route>
            <Route exact path="/referrals/redemption">
              <Redemption />
            </Route>

            {/* DISCOUNTS */}
            <Route exact path="/discounts">
              <Discounts />
            </Route>
            <Route exact path="/discounts/code">
              <DiscountsCodes />
            </Route>
            <Route exact path="/discounts/promotions">
              <DiscountsPromotions />
            </Route>

            {/* PAYMENTS */}
            <Route exact path="/payments">
              <Payments />
            </Route>

            {/* HOME */}
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer admin />
    </div>
  );
}
