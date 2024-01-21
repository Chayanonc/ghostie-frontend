import { Card, Image, CardBody, Chip } from "@nextui-org/react";
import TicketIcon from "../Icon/TicketIcon";
import MatchCard from "../Card/MatchCard";
import NumberIcon from "../Icon/NumberIcon";

type RoundTypes = {
  round: string;
  prizePot: string;
  winnerNumber: string;
};

const Round = ({ round, prizePot, winnerNumber }: RoundTypes) => {
  const Match = [
    {
      label: "Match all",
      total: `${(Number(prizePot) * 0.7).toFixed(2)} USDC`,
    },
    {
      label: "Match 5 (15%)",
      total: `${(Number(prizePot) * 0.15).toFixed(2)} USDC`,
    },
    {
      label: "Match 4 (10%)",
      total: `${(Number(prizePot) * 0.1).toFixed(2)} USDC`,
    },
    {
      label: "Match 3 (5%)",
      total: `${(Number(prizePot) * 0.05).toFixed(2)} USDC`,
    },
  ];
  return (
    <Card className="border-none bg-[#a15e923a] w-1/2">
      <CardBody className="py-0">
        <div className="relative flex justify-between items-center p-3 col-span-6 md:col-span-4">
          <div className="flex justify-start">
            <h3 className="font-semibold text-foreground/90 my-auto">Round</h3>
            <Chip className="bg-[#A15E92] text-white ml-2">#{round}</Chip>
          </div>
          <div className="flex-row justify-center mt-0">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0"
              src="/Svg/winning-number.svg"
              width={157}
              height="100%"
            />
            <p className="flex justify-center mt-1">
              <span className="text-[#000000] text-sm">Prize pot :</span>
              <span className="font-semibold text-[#A15E92] text-sm ml-2">
                $ {prizePot}
              </span>
            </p>
          </div>
          <div className="my-auto flex text-primary ">
            <TicketIcon />
            <h4 className="text-sm font-light text-primary my-auto mt-0.5 ml-0.5">
              View ticket
            </h4>
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center my-3">
          {Array.from(winnerNumber).map((value: any, index: number) => (
            <NumberIcon key={index} number={value} />
          ))}
        </div>
        <div className="flex gap-2 mt-2 justify-center">
          {Match.map((item, index) => (
            <MatchCard key={index} title={item.label} detail={item.total} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Round;
