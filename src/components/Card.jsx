import React from "react";

const Card = ({ challenge }) => {
  return (
    <div className="card w-96 shadow-xl bg-base-100">
      <div className="card-body ">
        <h2 className="card-title  text-warning">{challenge.title}</h2>
        <p className="text-error">{challenge.desc}</p>
        <div className="badge badge-primary">
          Standing gained: {challenge.reputation}
        </div>
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Expires at: {challenge.expiry.split('T')[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
