import "./Card.css";

function Card() {
  return (
    <div className="card Card">
      <span className="companylogo">
        <img src="..." className="" alt="" />
      </span>

      <div className="card-body">
        <p className="posted-time">
          <span>5h ago</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#6E8098" />
          </svg>

          <span>Full Time</span>
        </p>

        <p className="job-role ">Senior Software Engineer</p>
        <p className="company-name ">Scoot</p>

        <a href="#" className="location-text">
          United Kingdom
        </a>
      </div>
    </div>
  );
}

export default Card;
