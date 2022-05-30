import "./ArrowToTop.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import ScrollUp from "react-scroll-up";

function ArrowToTop() {
  return (
    <div>
      <ScrollUp showUnder={120} duration={400}>
        <ArrowUpwardIcon className="ArrowToTop" />
      </ScrollUp>
    </div>
  );
}

export default ArrowToTop;
