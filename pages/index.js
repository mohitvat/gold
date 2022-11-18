/* eslint-disable @next/next/no-img-element */
import React from "react";

function index() {
  return (
    <div className=" w-full  overflow-hidden">
      <header className="flex absolute justify-between w-full p-6 top-0 z-10 items-center bg-transparent">
        <img className="h-[63.22px] object-cover " alt="" src="logo@2x.png" />

        <div className="text-center text-2xs text-white mr-80 ">
          <div className="font-medium mr-6  inline-block">Home</div>
          <div className="font-medium mr-6 inline-block">About us</div>
          <div className="font-medium mr-6 inline-block">Services</div>
          <div className="font-medium mr-6 inline-block">Branches</div>
          <div className="font-medium mr-6 inline-block">Career</div>
          <div className="font-medium mr-6 inline-block">Franchise</div>
          <div className="font-medium inline-block">Investor</div>
        </div>

        <button className="cursor-pointer rounded-[8px] bg-black  text-8xs font-montserrat px-8 p-3 mr-32 text-[#FFC565]">
          Download App
        </button>
      </header>
      <div className="bg-[#2F2F2F] flex w-full h-screen overflow-hidden text-left text-[55px] text-orange-100 font-montserrat">
        <div className=" w-[70%] flex flex-col justify-center">
          <div className="pl-36">
            <b className="inline-block w-[618px] pb-6">
              <p className="text-[#FFC565]">Encash Your Old and Scrap Gold</p>
            </b>
            <button className="cursor-pointer p-[14px_51px] bg-[#FFC565] rounded-[8px] shadow-[0px_13px_19px_rgba(211,_129,_39,_0.15)] flex flex-row box-border items-start justify-start">
              <div className=" text-sm tracking-[0.2px] leading-[24px] font-semibold font-montserrat text-black text-center inline-block">
                CALL US
              </div>
            </button>
          </div>
        </div>

        <div className="relative w-[30%]">
          <div className=" top-0 right-0 bg-[#FFC565] w-full h-screen" />

          <div className="absolute top-[25%] -left-[50%]">
            <img
              className="w-[500px] h-[50%] object-cover"
              alt=""
              src="image1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="text-3xl flex justify-center font-bold mt-20 text-[#FFC565] my-10 ">
        OUR PRODUCTS
      </div>
      <div className="flex justify-center text-2xl font-bold text-black ">
        <p className="">
          GoldCash Limited Offers a Quick, Smart, Authentic, Easy Process
        </p>
      </div>
      <div className="flex justify-center text-2xl font-bold text-black ">
        to get Instant Cash for your Gold.
      </div>

      <div className="absolute  rounded-[22px] bg-[#222222] w-[450px] h-[300px] overflow-hidden">
        <div className="absolute top-[164px] left-[495.14px] rounded-[25.31px] bg-orange-400 [filter:blur(120.57px)] w-[238.14px] h-[100.71px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <img
          className="absolute h-full w-full  max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-1000001986.svg"
        />
      </div>

      <div className="absolute  rounded-[22px] bg-[#222222] w-[450px] h-[300px] overflow-hidden">
        <div className="absolute top-[164px] left-[500px] rounded-[25.31px] bg-orange-400 [filter:blur(120.57px)] w-[238.14px] h-[100.71px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <img
          className="absolute h-full w-full  max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-1000001986.svg"
        />
        <div className="absolute top-[90px] left-[36px]  font-medium  w-[367px] ">
          <span className="capitalize text-white font-semibold text-3xl">
            {" "}
            Sell Your Gold in one Click.
          </span>
        </div>
        <div className="absolute top-[37px] left-[29px] text-4xl ml-2  font-semibold text-[#FFC565] text-center">
          Sell Gold
        </div>
        <button className="cursor-pointer rounded absolute mt-52 ml-8  ">
          <div className="  rounded-[8px] bg-[#FFC565] shadow-[0px_13px_19px_rgba(211,_129,_39,_0.15)] w-[173px] h-[52px]" />
          <div className="absolute top-[26.92%] left-[24.86%] text-lg  font-semibold font-montserrat text-black text-center ">
            learn More
          </div>
        </button>
        {/* <div className="absolute  rounded-[22px] bg-[#222222] w-[450px] h-[300px] overflow-hidden">
          <div className="absolute top-[164px] left-[700px] rounded-[25.31px] bg-orange-400 [filter:blur(120.57px)] w-[238.14px] h-[100.71px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <img
            className="absolute h-full w-full  max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group-1000001986.svg"
          />
        </div>
        <div className="absolute top-[150px] left-[700px] rounded-[25.31px] bg-orange-400 [filter:blur(120.57px)] w-[238.14px] h-[100.71px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <img
          className="absolute h-full w-full  max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-1000001986.svg"
        />
        <div className="absolute top-[90px] left-[36px]  font-medium  w-[367px] ">
          <span className="capitalize text-white font-semibold text-3xl">
            {" "}
            Sell Your Gold in one Click.
          </span>
        </div>
        <div className="absolute top-[37px] left-[29px] text-4xl ml-2  font-semibold text-[#FFC565] text-center">
          Sell Gold
        </div>
        <button className="cursor-pointer rounded absolute mt-52 ml-8  ">
          <div className="  rounded-[8px] bg-[#FFC565] shadow-[0px_13px_19px_rgba(211,_129,_39,_0.15)] w-[173px] h-[52px]" />
          <div className="absolute top-[26.92%] left-[24.86%] text-lg  font-semibold font-montserrat text-black text-center ">
            learn More
          </div>
        </button> */}
      </div>

      <div className="absolute top-[1200px] bg-[#FFEEDB] w-[1518px] h-[700px] overflow-hidden text-left text-10xs text-black  mt-16">
        <b className="absolute mt-[150px] ml-[120px] text-6xl font-poppins w-[500px]">
          <p className="mb-1 ml-1">begin your </p>
          <p className="gap-1">Golden journey With GoldCash</p>
        </b>
        <img
          className="absolute h-[6.65%] w-[18.19%] top-[51.25%] mr-[74%] mb-[42.1%] ml-[8.00%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../ctabuttons.svg"
        />
        <img
          className=" h-[287.11%] w-[141.59%] top-[0%] right-[-41.59%] bottom-[-187.11%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../backgroundelements.svg"
        />
        <img
          className="absolute top-[0px]  w-[1000px] h-[750px] ml-[600px]  "
          alt=""
          src="../iphone11progoldmockupremovebgpreview-1@2x.png"
        />
        <div className="absolute top-[280px] left-[800px] rounded-[15.1px] bg-white shadow-[0px_9.34896469116211px_13.66px_rgba(255,_197,_101,_0.07)] w-[150px] h-[30px] overflow-hidden ">
          <b className="absolute px-4 py-1">Sell Your Gold</b>
        </div>

        <div className="absolute top-[500px] left-[1250px] rounded-[15.1px] bg-white shadow-[0px_9.34896469116211px_13.66px_rgba(255,_197,_101,_0.07)] w-[150px] h-[30px] overflow-hidden ">
          <b className="absolute px-4 py-1">Buy Your Gold</b>
        </div>
        <img
          className="absolute top-[220px] left-[1300px] w-[80px] h-[100px]"
          alt=""
          src="../group-10000019701.svg"
        />
        <img
          className="absolute top-[500px] left-[835px] w-[80px] h-[100px]"
          alt=""
          src="../group-1000001971.svg"
        />
      </div>

      <section className="absolute top-[1950px] w-[1517px] h-[800px] text-left text-xs text-orange-100 font-montserrat bg-[#FFEEDB] mt-14">
        <div className="absolute mt-10 ml-4 w-[457px] h-[672px]">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white shadow-[0px_15px_38px_2px_rgba(0,_0,_0,_0.1)] w-[457px] h-[672px]" />
          <div className="absolute top-[33px] left-[33px] w-[393px] h-[600px]">
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[548px] left-[0px] w-[173px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] rounded-[8px] [border:1px_solid_#ffc565] box-border w-[173px] h-[52px]" />
              <div className=" top-[26.92%] left-[25.43%] text-base font-bold font-montserrat text-[#FFC565] text-center inline-block">
                Learn More
              </div>
            </button>
            <b className="absolute  top-[395px] ">
              <p className="text-[#FFC565] font-extrabold text-2xl">
                Sell Your Gold
              </p>
            </b>
            <img
              className=" rounded-[10px] w-[392px] h-[372px] object-cover"
              alt=""
              src="../rectangle-219972@2x.png"
            />
            <b className="absolute top-[444px] left-[0px] text-7xs  text-black w-[393px]">
              <p className="text-sm">
                We are offering a Quick and Easy Process to get Instant Cash for
                your Gold Jewelleries using our Services. GoldCash Limited is
                one of the Fastest-Growing Gold Buying Company.
              </p>
            </b>
          </div>
        </div>
        <div className="absolute mt-10 ml-[520px] w-[457px] h-[672px]">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white shadow-[0px_15px_38px_2px_rgba(0,_0,_0,_0.1)] w-[457px] h-[672px]" />
          <div className="absolute top-[33px] left-[33px] w-[393px] h-[600px]">
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[548px] left-[0px] w-[173px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] rounded-[8px] [border:1px_solid_#ffc565] box-border w-[173px] h-[52px]" />
              <div className=" top-[26.92%] left-[25.43%] text-base font-bold font-montserrat text-[#FFC565] text-center inline-block">
                Learn More
              </div>
            </button>
            <b className="absolute  top-[395px] ">
              <p className="text-[#FFC565] font-extrabold text-2xl">
                Sell Your Gold
              </p>
            </b>
            <img
              className=" rounded-[10px] w-[392px] h-[372px] object-cover"
              alt=""
              src="../rectangle-219972@2x.png"
            />
            <b className="absolute top-[444px] left-[0px] text-7xs  text-black w-[393px]">
              <p className="text-sm">
                We are offering a Quick and Easy Process to get Instant Cash for
                your Gold Jewelleries using our Services. GoldCash Limited is
                one of the Fastest-Growing Gold Buying Company.
              </p>
            </b>
          </div>
        </div>

        <div className="absolute mt-10 ml-[1020px] w-[457px] h-[672px]">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white shadow-[0px_15px_38px_2px_rgba(0,_0,_0,_0.1)] w-[457px] h-[672px]" />
          <div className="absolute top-[33px] left-[33px] w-[393px] h-[600px]">
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[548px] left-[0px] w-[173px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] rounded-[8px] [border:1px_solid_#ffc565] box-border w-[173px] h-[52px]" />
              <div className=" top-[26.92%] left-[25.43%] text-base font-bold font-montserrat text-[#FFC565] text-center inline-block">
                Learn More
              </div>
            </button>
            <b className="absolute  top-[395px] ">
              <p className="text-[#FFC565] font-extrabold text-2xl">
                Sell Your Gold
              </p>
            </b>
            <img
              className=" rounded-[10px] w-[392px] h-[372px] object-cover"
              alt=""
              src="../rectangle-219972@2x.png"
            />
            <b className="absolute top-[444px] left-[0px] text-7xs  text-black w-[393px]">
              <p className="text-sm">
                We are offering a Quick and Easy Process to get Instant Cash for
                your Gold Jewelleries using our Services. GoldCash Limited is
                one of the Fastest-Growing Gold Buying Company.
              </p>
            </b>
          </div>
        </div>
      </section>
      <section className=" absolute top-[2850px]  ">
        <p className="text-[37px] text-[#FFC565] font-mulish ml-[450px]">
          GoldCash Limited - Best In Services
        </p>
        <div className=" text-black font-Montserrat font-medium ml-[310px] mt-5">
          <p>
            GoldCash Limited Offers a Quick, Smart, Authentic, Easy Process to
            get Instant Cash for your Gold.GoldCash Limited <br />
            is one of the fastest-growing Gold Buying Company in India, with
            Branches Presence Across Nation in India.
          </p>
        </div>
        <div className="">
          <div className="absolute top-[150px]  w-[542px] h-[450px] ml-7">
            <div className="absolute top-[49px] left-[49px] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ">
                <p className="font-bold text-2xl">Instant Cash</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px]">
                <p className="text-base my-3">
                  We provide Instant Cash for your
                  <br /> Gold at our Branches.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] overflow-hidden"
                alt=""
                src="../money-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[150px]  w-[542px] h-[450px]">
            <div className="absolute top-[49px] left-[500px] bg-[#CCD0D3] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ml-[35px] ">
                <p className="font-bold text-2xl">ISO Certified Company</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px] ml-[35px]">
                <p className="text-base my-3">
                  An ISO 9001: 2015 Public Limited
                  <br /> Company.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] ml-7 mt-4 overflow-hidden"
                alt=""
                src="../iso-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[150px]  w-[542px] h-[450px]">
            <div className="absolute top-[49px] left-[960px] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ">
                <p className="font-bold text-2xl">All Over India Presence</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px]">
                <p className="text-base my-3 ">
                  We have 40+ Branches in 10+
                  <br /> States PAN India.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] overflow-hidden"
                alt=""
                src="../india-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[440px]  w-[542px] h-[450px] ml-2">
            <div className="absolute top-[49px] left-[49px]  bg-[#CCD0D3] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ">
                <p className="font-bold text-2xl ml-9">Best Market Rate</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px]">
                <p className="text-base my-3 ml-9">
                  We Provide Honest Market Price.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] ml-7 mt-6 overflow-hidden"
                alt=""
                src="../investment-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[440px]  w-[542px] h-[450px]">
            <div className="absolute top-[49px] left-[500px] bg-[#FFC565] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ml-[40px] ">
                <p className="font-bold text-2xl ">Customer Delight</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px]">
                <p className="text-base my-3 ml-9">
                  We are Just a Call away and work <br />
                  towards providing Best Services in <br /> a Professional
                  manner.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] ml-7 mt-6 overflow-hidden"
                alt=""
                src="../group-1000001970.svg"
              />
            </div>
          </div>
          <div className="absolute top-[440px]  w-[542px] h-[450px]">
            <div className="absolute top-[49px] left-[943px] bg-[#CCD0D3] w-[443px] h-[290px]">
              <b className="absolute top-[100px] ml-[30px] ">
                <p className="font-bold text-2xl ">Proper Documentation</p>
              </b>
              <div className="absolute top-[130px] text-base w-[443px]">
                <p className="text-base my-3 ml-9">
                  We are Best known for Smart and <br />
                  Easy Documentation Process.
                </p>
              </div>
              <img
                className=" w-[78px] h-[78px] ml-7 mt-6 overflow-hidden"
                alt=""
                src="../file-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-[2750px]  bg-[#FFEEDB]  font-montserrat h-[880px] w-[1920px]">
        <p className="text-[#FFC565] ml-[700px]  py-16 text-2xl font-bold">
          OUR AWARDS
        </p>
        <img
          className="absolute h-full w-[68.42%] right-[17.51%] left-[14.08%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-45341502.svg"
        />
        <div className="absolute top-[3800px] left-[50px] w-[500px] h-[500px]">
          <div className="absolute top-[0px] bg-black w-[700px] h-[700px]" />
          <b className="absolute top-[222px] left-[430px]  capitalize  w-[254px]">
            <p className="text-white text-3xl">
              “ NATIONAL ACHIEVERS AWARD BEING AWARDED TO OUR CEO DR RAJAN LAL
              SRIVASTAV IN 2019”
            </p>
          </b>
          <img
            className="absolute w-[402px] h-[700px] object-cover"
            alt=""
            src="../rectangle-22018@2x.png"
          />
        </div>

        <div className="absolute top-[3800px] right-[250px] w-[500px] h-[500px]">
          <div className="absolute top-[0px]  bg-black w-[700px] h-[700px]" />
          <img
            className="absolute  w-[402px] h-[700px] object-cover"
            alt=""
            src="../rectangle-22017@2x.png"
          />
          <b className="absolute top-[222px] left-[440px] capitalize w-[254px]">
            <p className="text-white text-3xl">
              “ FORBES 45/45 AWARDED TO OUR CEO DR.RAJAN LAL SRIVASTAV IN
              NATIONAL EXCELLENCE SUMMIT 2021 ”
            </p>
          </b>
        </div>
      </section>
      <section className="absolute top-[4650px] w-[1200px] h-[799px] ">
        <div className="  text-2xl font-bold font-montserrat text-[#FFC565]">
          <p className="ml-[700px]  ">Testimonials</p>
        </div>

        <div className="mt-9 rounded-[12px] bg-[#222222] w-[1200px] h-[400px] ml-40 overflow-hidden"></div>

        <img
          className="absolute top-[120px] left-[250px]  w-[300px] h-[300px] object-cover"
          alt=""
          src="../rectangle-6@2x.png"
        />
        <img
          className="absolute top-[125px] left-[650px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="../quote-1.svg"
        />
        <img
          className="absolute top-[280px] left-[1250px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="../quote-2.svg"
        />
        <img
          className="absolute top-[425px] left-[1260px] w-[58.44px] h-[15.03px]"
          alt=""
          src="../group-1000001982.svg"
        />
        <div className="absolute top-[200px] left-[700px] text-base  capitalize font-medium font-manrope text-white w-[539px]">
          Am saaaaatisfied with your service Acomplination is so clear.. Thank
          you. Gold cash
        </div>
        <div className="absolute top-[350px] left-[700px]  font-semibold text-white">
          Madhusmta Gochhyat
        </div>
      </section>
      <section className="absolute top-[5250px] left-[200px] w-[1200px]  text-center text-lg text-[#FFC565] font-montserrat">
        <div className="absolute">
          <div className="w-[50px] flex-row space-x-[145px]  ">
            <b className="mt-36 text-6xl">13K</b>
            {/* <b className=" text-xl py-6 text-black">States</b> */}

            <b className=" text-6xl">31+</b>
            <b className=" text-6xl">43+</b>
            <b className=" text-6xl">150+</b>
            <b className=" text-6xl px-5">4</b>
            {/* <b className=" text-xl py-6 text-black">States</b> */}
          </div>
        </div>
      </section>
      <section className="absolute top-[5340px] left-[210px] w-[1200px]  text-center text-black font-montserrat">
        <div className="absolute">
          <div className="w-[50px] flex-row space-x-48  ">
            <b className="mt-36 text-xl">States</b>
            {/* <b className=" text-xl py-6 text-black">States</b> */}

            <b className=" text-xl">Cities</b>
            <b className=" text-xl">Branches</b>
            <b className=" text-xl">Customer</b>
            <b className=" text-xl">countries</b>
            {/* <b className=" text-xl py-6 text-black">States</b> */}
          </div>
        </div>
      </section>

      <section className="absolute top-[5500px] bg-[#FFBEBE] w-[1380px] h-[140px] rounded-[9px] py-9  ml-16 text-justify font-montserrat">
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
      <section className="">
        <div className="absolute top-[5750px]  h-[300px]">
          <div className="absolute ml-2 bg-[#222222] w-[1500px] h-[300px]" />
        </div>
        {/* <img
          className="absolute h-[56.29%] w-[77.27%] top-[0%] right-[9.08%] bottom-[43.71%] left-[13.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-4534150.svg"
        /> */}
      </section>
    </div>
  );
}

export default index;
