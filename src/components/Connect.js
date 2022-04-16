import React from "react";

const Connect = () => {
  return (
    <div className="inner">
      <div className="flex justify-center sm:pt-28 pt-4 sm:block">
        {/* <img src="https://res.cloudinary.com/dqzpz4w3l/image/upload/v1638776923/Bufieslogo_sk6oir.png" className="w-32 sm:w-96 " alt=""> */}
        <p className="connectHeader">MoonBirds Moonie</p>
      </div>
      {/* <div className="quantity pt-4">
                <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg></span>
                <p>1</p>
                <span><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="currentColor"></path></svg>
                </span>
            </div> */}
      <div className="pt-8">
        <p className="py-2 bottom font-bold">Install Metamask.</p>
        <p className="py-2 bottom font-bold">Click buy to mint your NFT.</p>
      </div>
      <div className="flex justify-center py-2 pt-2">
        <button className=" py-4 text-black bg-white px-8 rounded-full">
          <p
            className="text-center font-bold text-xl"
            style={{ fontFamily: "Lato" }}
          >
            Connect Wallet
          </p>
        </button>
      </div>
      <p className="text-white text-center text-xs">*Max 10 Per Wallet </p>
      <p className="text-center text-white p-4 sm:invisible visible ">
        © 2022 MoonBirds Moonie
      </p>
    </div>
  );
};

export default Connect;
