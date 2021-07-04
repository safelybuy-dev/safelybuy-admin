import {
  BackroundGradient,
  Bag,
  BitcoinIcon,
  DeliveryIcon,
  SellSwapPhone,
  Tickets,
} from "../svg";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import SpotlightCard from "../components/SpotlightCard";

const SamplePage = () => (
  <div className="relative justify-between flex flex-col min-h-screen text-center">
    <div>
      <header className="flex tracking-wide justify-between mx-12 my-6 md:mx-6 md:my-3">
        <Logo color="black" text="transact with no regret" />
        <div className="flex items-center">
          <Button text="Sign up" underlined />
          <Button text="Login" primary roundedFull />
        </div>
      </header>
      <h1 className="pt-8 pb-2 font-bold px-12 text-6xl z-10 md:px-8 md:text-4xl">
        Shop . Trade . Delivery . Events
      </h1>
      <p className="font-medium">All in one place</p>
    </div>
    <div className="flex relative justify-center full-width z-10 px-12 md:mx-2 md:px-1">
      <div
        className="px-20 w-ful top-0 absolute flex justify-center md:hidden"
        style={{ filter: "blur(80px)" }}
      >
        {<BackroundGradient />}
      </div>
      <div
        className="px-0 w-full top-0 absolute hidden justify-center md:flex"
        style={{ filter: "blur(40px)" }}
      >
        {<BackroundGradient />}
      </div>
      <div className="flex md:hidden justify-center w-full flex-wrap">
        <SpotlightCard text="Shopping" svg={<Bag />} />
        <SpotlightCard
          tag
          tagText="PROMO"
          text="Delivery"
          svg={<DeliveryIcon />}
        />
        <SpotlightCard text="Tickets" svg={<Tickets />} />
        <SpotlightCard text="Bitcoin & Gift Cards" svg={<BitcoinIcon />} />
        <SpotlightCard
          tag
          tagText="50% OFF"
          text="Sell or Swap Phone"
          svg={<SellSwapPhone />}
        />
      </div>
      <div className="hidden md:flex justify-center w-full flex-wrap">
        <SpotlightCard text="Shopping" small svg={<Bag />} />
        <SpotlightCard
          tag
          tagText="50% OFF"
          text="Sell or Swap Phone"
          svg={<SellSwapPhone />}
          small
        />
        <SpotlightCard
          small
          text="Bitcoin & Gift Cards"
          svg={<BitcoinIcon />}
        />
        <SpotlightCard
          tag
          tagText="PROMO"
          text="Delivery"
          svg={<DeliveryIcon />}
          small
        />
        <SpotlightCard small text="Tickets" svg={<Tickets />} />
      </div>
    </div>
    <div className="relative z-10">
      <div className="relative hidden justify-center mt-10 md:flex">
        {<image src={'devices mobile'}/>}
      </div>
      <div className="px-12 relative flex justify-center mt-10 md:hidden">
        {<image src={'device icon'}/>}
      </div>
      <Footer />
    </div>
  </div>
);

export default SamplePage;
