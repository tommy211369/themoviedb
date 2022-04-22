import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/tommy211369" target="blank">
        Made with React by <span>Tommy Thongrasamy</span>
      </a>
      <a
        href="https://developers.themoviedb.org/3/getting-started/introduction"
        target="blank"
        className="Footer"
      >
        Powered by The Movie Database API{" "}
      </a>
    </div>
  );
}

export default Footer;
