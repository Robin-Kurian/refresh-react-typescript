import { useState } from "react";
import Votes from "./Votes";
import Winner from "./Winner";
import ScoreBoard from "./ScoreBoard";
import { participants } from '../../data';
import Button from './../Button';
import './VotingManager.css'
const VotingManager = () => {
    const [votes, setVotes] = useState(participants);
    const [showWinner, setShowWinner] = useState(false);
    const totalVotes = votes.reduce((acc, participant) => acc + participant.total_votes, 0);

    const winner = votes.reduce((prev, current) => (prev.total_votes > current.total_votes) ? prev : current);

    return (
        <main>
            <h1>Voting App</h1>
            <div style={{ width: "100%" }}>
                {/* VoteBox */}
                <Votes votes={votes} setVotes={setVotes} showWinner={showWinner} />

                {/* Show Winner or Score board */}
                {showWinner ? (
                    <Winner name={winner.name} totalVotes={winner.total_votes} />
                ) :
                    totalVotes > 0 && <ScoreBoard votes={votes} />}
                <Button
                    className="vote-button"
                    style={{ marginTop: "10px" }}
                    disabled={totalVotes === 0 || showWinner}
                    onClick={() => {
                        setShowWinner(true);
                    }}
                    label="Show Winner"
                />
            </div>

        </main>
    )
}

export default VotingManager
