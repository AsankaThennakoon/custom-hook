import { useEffect, useState } from "react";
import useIncrement from "../../../hook/increment-hook";
import Card from "../Card";
const Inc = () => {
const incre=useIncrement(true);
const decre=useIncrement(false);

  return <div>
      <Card>{incre}</Card>
      <Card>{decre}</Card>
    </div>
};

export default Inc;
