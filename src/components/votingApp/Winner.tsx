import { WinnerProps } from "../../types";

const Winner = ({ name, totalVotes }: WinnerProps) => {
    return (
        <main className="winner-container">
            <h2 className="winner-text">Winner is {name} with {totalVotes} votes</h2>
        </main>
    );
}

export default Winner;
