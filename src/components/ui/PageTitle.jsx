import React from "react";

function PageTitle({ title, subHeading }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className=" text-2xl md:text-3xl  font-medium ">{title}</h1>

      <p className="font-light max-md:text-sm">{subHeading}</p>
    </div>
  );
}

export default PageTitle;
