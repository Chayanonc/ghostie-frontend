import {
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";
type MatchCardTypes = {
  title: string | any;
  detail: string | any;
};

const MatchCard = ({ title, detail }: MatchCardTypes) => {
  return (
    <Card className="w-[160px]">
      <CardHeader className="flex gap-3 justify-center">
          <p className="font-semibold text-center">{title}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-center text-[#A15E92]">{detail}</p>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default MatchCard;
