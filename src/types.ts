export interface ParticipantsProps {
    id: number;
    name: string;
    total_votes: number;
  }

export interface VotesProps {
  votes: ParticipantsProps[];
  setVotes: React.Dispatch<React.SetStateAction<ParticipantsProps[]>>;
  showWinner: boolean;
}

export interface WinnerProps {
    name: string;
    totalVotes: number;
}

export interface ResultsProps {
  votes: ParticipantsProps[];
}
