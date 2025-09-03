import "./LoadingSpinner.css";
import LoadingSpinnerGif from "../../assets/Loading-Spinner.gif";

function LoadingSpinner() {
  return (
    <div className="d-flex al-center jc-center loading-overlay-container">
      <img src={LoadingSpinnerGif} alt="Loading" height="80px"></img>
    </div>
  );
}

export default LoadingSpinner;
