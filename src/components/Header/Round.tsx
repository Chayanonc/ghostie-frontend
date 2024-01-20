import {
  Card,
  Image,
  CardBody,
  Chip,
} from "@nextui-org/react";
import TicketIcon from "../Icon/TicketIcon";
import { Match } from "@/constants/mockup/table";
import MatchCard from "../Crad/MatchCard";

type RoundTypes = {
  round: string;
  prizePot: string;
  numberWining: string;
  match?: any;
};

const Round = ({ round, prizePot, numberWining, match }: RoundTypes) => {
  return (
    <Card className="border-none bg-[#a15e923a] w-1/2">
      <CardBody>
        <div className="relative flex justify-between items-center p-3 col-span-6 md:col-span-4">
          <div className="flex justify-start">
            <h3 className="font-semibold text-foreground/90">Round</h3>
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
            <p className="flex justify-center">
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

        <div className="flex gap-5 justify-center items-center">
          {Array.from(numberWining).map((value: any, index: number) => (
            <h6
              key={index}
              className="text-2xl font-semibold border-2 w-11 h-11 border-primary border-opacity-50 rounded-full text-center flex items-center justify-center bg-white"
            >
              {value}
            </h6>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {Match.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <MatchCard title={item.label} detail={item.total} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Round;
