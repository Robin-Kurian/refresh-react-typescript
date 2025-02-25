import React from "react";
import { ResultsProps } from "../../types";
import { MESSAGES } from "../../constants";

const ScoreBoard = ({ votes }: ResultsProps) => {
  const leadingCandidate = votes.reduce((prev, current) => (prev.total_votes > current.total_votes) ? prev : current);
  const isDraw = votes.every(participant => participant.total_votes === leadingCandidate.total_votes);

  return (
    <main className="scoreboard-container">
      <h2 className="scoreboard-title">Score Board</h2>
      <p>{isDraw ? MESSAGES.DRAW : `${leadingCandidate.name} leads with ${leadingCandidate.total_votes} votes.`}</p>
    </main>
  );
};

export default ScoreBoard;
