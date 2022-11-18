/* eslint-disable @next/next/no-img-element */
import React from "react";

const franchise = () => {
  return (
    <div>
      <section className="h-[900px] bg-[#FFEEDB]  ">
        <div className=" text-3xl font-bold font-montserrat text-[#FFC565] pt-28">
          <p className="ml-[600px]  ">Franchise Enquiry Form</p>
        </div>

        <div className="mt-10 bg-[#222222] w-[500px] h-[600px] ml-32 overflow-hidden">
          <p className=" absolute ml-[540px] capitalize font-bold">
            tIM.JENNINGS@EXAMPLE.COM (NOT SHARED)
          </p>{" "}
        </div>
      </section>
      <section className="absolute top-[1000px] bg-[#FFBEBE] w-[1380px] h-[140px] rounded-[9px] py-9  ml-16 text-justify font-montserrat">
        <img
          className="absolute top-[0px] ml-5 mt-8 w-[39px] h-[39px] overflow-hidden"
          alt=""
          src="../warning-1.svg"
        />
        <b className=" text-lg ml-20 mt-1 text-[#D32727] ">Warning</b>
        <p className="text-sm ml-20 pr-6">
          Trying to Sell Stolen or Spurious Gold Articles is a Criminal Offence,
          Sellers must provide Proper Documentation to Transact. We do not
          entertain Minors under any circumstances to Sell Gold. Individuals
          between the ages 18 to 21 Years must have Consent of their Family
          Members to Transact. Verification will be done if necessary. GoldCash
          Limited Reserves all the Rights to reject any Transaction, if found
          suspicious and can be reported to the appropriate Agencies.
        </p>
      </section>
    </div>
  );
};

export default franchise;
