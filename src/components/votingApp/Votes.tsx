import React from "react";
import { VotesProps } from "../../types";

const Votes = ({ votes, setVotes, showWinner }: VotesProps) => {
  const handleVoteClick = (participantId: number) => {
    setVotes(votes.map(participant =>
      participant.id === participantId
        ? { ...participant, total_votes: participant.total_votes + 1 }
        : participant
    ));
  };

  return (
    <main className="votes-container">
      {votes.map((participant) => (
        <div key={participant.id} className="vote-card">
          <h2 className="vote-name">{participant.name}</h2>
          <p>Votes: {participant.total_votes}</p>
          <button
            className="vote-button"
            disabled={showWinner}
            onClick={() => handleVoteClick(participant.id)}
          >
            Vote
          </button>
        </div>
      ))}
    </main>
  );
};

export default Votes;
