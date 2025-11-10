import React from "react";
import { Card, CardTitle } from "../ui/card";
import { TypographyH2 } from "../ui/typography";

const BookProjects = () => {
  return (
    <>
      <Card className="w-full border-0 shadow-[0 0 black]">
        <CardTitle>
          <TypographyH2>Projects by techs</TypographyH2>
        </CardTitle>
      </Card>
      <Card className="w-full border-0 shadow-[0 0 black]"></Card>
    </>
  );
};

export default BookProjects;
