import BuyTicket from "@/components/Header/BuyTicket";
import Borrow from "./Borrow";
import Round from "./Round";
import { useHistory } from "@/hook/history.hook";
import { formatUnits } from "viem";

const Header = () => {
  const { history } = useHistory();

  return (
    <div className=" flex-row items-center">
      <BuyTicket />
      <div className="flex justify-between mt-4 gap-4">
        <Round
          round={
            history[history.length - 2]?.round
              ? formatUnits(history[history.length - 2]?.round, 0)
              : "0"
          }
          prizePot={
            history[history.length - 2]?.prizePot
              ? formatUnits(history[history.length - 2]?.prizePot, 0)
              : "1392.56"
          }
          winnerNumber={
            history[history.length - 2]?.winningNumber
              ? history[history.length - 2]?.winningNumber
              : "xxxxxx"
          }
        />
        <Borrow />
      </div>
    </div>
  );
};

export default Header;
