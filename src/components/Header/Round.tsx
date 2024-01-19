import {
  Card,
  CardHeader,
  Button,
  CardFooter,
  Image,
  CardBody,
  Chip,
} from "@nextui-org/react";

const Round = () => {
  return (
    <Card className="border-none bg-[#a15e923a] w-1/2">
      <CardBody>
        {/* <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center"> */}
        <div className="relative flex justify-between items-center p-4 col-span-6 md:col-span-4">
          <div className="flex justify-start">
            <h3 className="font-semibold text-foreground/90">Round</h3>
            <Chip className="bg-[#A15E92] text-white ml-2">#1142</Chip>
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
                $ 19,725.60
              </span>
            </p>
          </div>
          <div className="flex justify-end">
            <Image alt="" src="/Svg/ticket.svg" width={20} height={20} />
            <p className="font-semibold text-[#A15E92] text-sm">View ticket</p>
          </div>
        </div>

        <div className="flex px-5 justify-center items-center bg-white  w-[48px] h-[48px] rounded-full font-semibold text-2xl">
          2
        </div>
      </CardBody>
    </Card>
  );
};

export default Round;
