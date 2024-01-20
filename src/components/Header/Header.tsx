import BuyTicket from "@/components/Header/BuyTicket";
import Borrow from "./Borrow";
import Round from "./Round";

const Header = () => {
  return (
    <div className=" flex-row items-center">
      <BuyTicket />
      <div className="flex justify-between mt-4 gap-4">
        <Round round={"1142"} prizePot={"19,725.60"} numberWining={"124057"} />
        <Borrow />
      </div>
    </div>
  );
};

export default Header;
