import React, { useRef } from "react";

function SearchBox({ onSearch }) {
  const inputRef = useRef("");
  const handleChange = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <div
      style={{ backgroundColor: "ghostwhite" }}
      className="sticky z-20 inset-0 py-10 ">
      <form className="flex justify-center">
        <input
          onChange={handleChange}
          ref={inputRef}
          type="text"
          placeholder="Search Player by Name or Team ..."
          className="p-3 mx-3 sm:mx-12 md:mx-24 w-full outline-none rounded-sm shadow-sm text-gray-500 border-none"
        />
      </form>
    </div>
  );
}

export default SearchBox;
