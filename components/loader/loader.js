import utilStyles from "./loader.module.css";

const SimpleLoader = () => {
  return (
    <div
      className={`${
        utilStyles.greyBg
      } ${"text-center d-flex d-flex align-items-center justify-content-center position-fixed"}`}
    >
      <div
        className={`${utilStyles.spinner} ${"spinner-border text-white"}`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SimpleLoader;
