import React from "react";
import "../styles/Vote.css";

const Vote = () => {
  return (
    <div className="vote-box">
      <div>
        <h2>Vote</h2>
      </div>
      <div className="vote-context d-flex flex-column justify-content-between mt-4">
        <div>
          <div className="mb-4">
            <h5>Question?</h5>
          </div>
          <div>
            <div className="form-check mt-5 mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-secondary bg-info text-white pl-4 pr-4 pt-1 pb-1"
        type="button"
      >
        Vote
      </button>
    </div>
  );
};

export default Vote;
