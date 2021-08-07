import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import { Money, StarCircle, UserIcon, ArrowRight } from "../../svg";

export const TopStat = ({ title, subtitle, svg, color, link, linkText }) => (
  <div className={`px-12 md:px-6 rounded-3xl py-8 md:py-4 bg-white`}>
    <div className="flex justify-between items-center w-full">
      <div className="">
        <h3 className="text-purple-500 text-2xl md:text-xl">{title}</h3>
        <p className="">{subtitle}</p>
      </div>
      <span className={`bg-${color}-200 p-6 rounded-full`}>{svg}</span>
    </div>
    <div className="p-12 md:p-6"></div>
    <Link to={link} className="">
      <Button
        primary
        roundedLg
        text={linkText}
        icon={<ArrowRight color="white" />}
      />
    </Link>
  </div>
);

const index = () => {
  return (
    <div className="w-full">
      <Breadcrumb parentText="Referrals" parentLink="/referrrals" />
      <h2 className="text-xl">Referrals</h2>
      <div className="grid mt-10 grid-cols-3 md:grid-cols-1 gap-12 md:gap-6">
        <TopStat
          linkText="Set Points"
          link="/referrals/points"
          color="orange"
          svg={<StarCircle />}
          title="Set Points"
          subtitle="Set points to naira"
        />
        <TopStat
          linkText="View Now"
          link="/referrals/redemption"
          color="blue"
          svg={<Money />}
          title="Points Redemption"
          subtitle="History of points coverted by users"
        />
        <TopStat
          linkText="Manage"
          link="/referrals/manage"
          color="purple"
          svg={<UserIcon />}
          title="Manage Referrals"
          subtitle="An overview of users referred"
        />
      </div>
    </div>
  );
};

export default index;
