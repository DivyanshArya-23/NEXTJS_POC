import utilStyles from "./loader.module.css";

import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// const sleep = async (milliseconds) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//     console.log(currentDate);
//   } while (currentDate - date < milliseconds);
// };

const SimpleLoader = () => {
  const loader = useSelector((state) => state.loader);

  // const [success, setSuccess] = useState(false);

  // const unmountFunc = async () => {
  //   setSuccess(true);
  //   console.log("on");
  //   sleep(2000);
  //   console.log("off");
  //   setSuccess(false);
  // };

  // useEffect(() => {
  //   return async () => {
  //     console.log("unmount");
  //     unmountFunc();
  //   };
  // }, []);
  return (
    loader && (
      <div
        className={`${
          utilStyles.greyBg
        } ${"text-center d-flex d-flex align-items-center justify-content-center position-fixed"}`}
      >
        {/* {success ? (
          <div
            id="LoaderSuccess"
            className={`${utilStyles.spinner}`}
            role="status"
          >
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-check-circle-fill"
              fill="#00aa33" //"currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              />
            </svg>
          </div>
        ) : ( */}
        <div
          id="LoaderSpinner"
          className={`${utilStyles.spinner} ${"spinner-border text-white"}`}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        ){/* } */}
      </div>
    )
  );
};

export default SimpleLoader;
