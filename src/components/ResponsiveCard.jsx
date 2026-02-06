import { useState } from "react";
const ResponsiveCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <header className="flex flex-row justify-between w-[90%] items-center h-17.5 bg-yellow-200 px-5">
        <div>Logo</div>
        <div className="hidden w-[70%] justify-between bg-blue-600  sm:flex">
          <nav>
            <ul className="flex gap-3 bg-red-600">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </nav>
          <button className="bg-green-500">Log In</button>
        </div>
        {!isOpen && (
          <button className="sm:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {isOpen && (
          <div className="p-5 flex flex-col bg-green-500 mt-40 sm:hidden">
            <button
              className="p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav>
              <ul className="flex flex-col gap-4 bg-red-600">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
              </ul>
            </nav>
            <button className="bg-green-500">Log In</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default ResponsiveCard;
