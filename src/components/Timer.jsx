import { useEffect, useState } from "react";

export default function DealTimer({ endDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="flex gap-3 justify-center items-center text-white font-semibold text-lg pt-5">
      <span className=" text-primary px-3 py-2 text-center text-5xl">
        {timeLeft.days || "0"}<span className="text-dark flex flex-col text-xs uppercase mt-4">Days</span>
      </span>   
      <span className=" text-primary px-3 py-2 text-center text-5xl">
        {timeLeft.hours || "0"}<span className="text-dark flex flex-col text-xs uppercase mt-4">Hours</span>
      </span>   
      <span className=" text-primary px-3 py-2 text-center text-5xl">
        {timeLeft.minutes || "0"}<span className="text-dark flex flex-col text-xs uppercase mt-4">Minutes</span>
      </span>   
      <span className=" text-primary px-3 py-2 text-center text-5xl">
        {timeLeft.seconds || "0"}<span className="text-dark flex flex-col text-xs uppercase mt-4">Seconds</span>
      </span>   
      
    </div>
  );
}
