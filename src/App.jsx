import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";
import Sample from "./api/Sample";

const App = () => {
  const [count, setData] = useState(0);
  const items = Sample[count];

  const handleNext = () => {
    setData((prev) => (prev >= Sample.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setData((prev) => (prev <= 0 ? Sample.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="font-bold text-3xl text-center font-[poppins] p-4 mt-10">
        <h1>This is a 12 Cards</h1>
        <h1 className="mt-8">Student Information</h1>
      </div>
      <div key={items.id}>
        <div className=" w-100 h-60 text-xl shadow-lg  mx-auto rounded-xl p-4 bg-black text-white mt-8">
          <p>id: {items.id}</p>
          <p>name: {items.name}</p>
          <p>email: {items.email}</p>
          <p>skills: {items.skills}</p>
          <p>contact: {items.contact}</p>
        </div>
        <div className="flex justify-center mt-4">
          <div>
          <button onClick={handlePrev}>
            <IoIosArrowDropleftCircle className="h-8 w-8 -ml-1 -mt-40" />
          </button>
          </div>
          <div>
          <button onClick={handleNext}>
            <IoIosArrowDroprightCircle className="h-8 w-8 ml-115 -mt-40" />
          </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
