import React from "react";
import zigzagLine from "../../assets/zigzag-line.svg";

const Quote = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto">
        {/* Quote div */}
        <div className="py-20 text-center flex flex-col items-center">
          <h1 className="font-cairo text-3xl text-white md:text-[40px] font-semibold">
            “If, at first, you do not succeed, call it version 1.0”.
          </h1>
          <p className="mt-6 text-[20px] text-accent">- Khayri R.R. Woulfe</p>
          <img
            src={zigzagLine}
            alt="zigzag-line"
            className="w-56 md:w-80 mt-10 -skew-x-[20deg]"
          />
        </div>
      </section>
    </div>
  );
};

export default Quote;
