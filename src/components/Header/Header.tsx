import Borrow from "./Borrow";
import Round from "./Round";
import Ticket from "./Ticket";

const Header = () => {
  return (
    <div className=" flex-row items-center">
      <Ticket />
      <div className="flex justify-between mt-4 gap-4">
        <Round />
        <Borrow />
      </div>
    </div>
  );
};

export default Header;
