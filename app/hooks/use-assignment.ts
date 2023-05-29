import { useReducer } from "react";

type SpeechAssignment = Readonly<{
  text: string;
  hint: string;
  correctAnswers: string[];
  imageSrc: string;
  help: {
    text: string;
    description: string;
    pronunciation: string;
  };
}>;

type Assignment = SpeechAssignment;

type State = {
  currentAssignment: number;
  answer: string | null;
};

type Action =
  | { type: "NEXT" }
  | { type: "RESET" }
  | { type: "SET_ANSWER"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentAssignment: state.currentAssignment + 1,
      };
    case "SET_ANSWER":
      return {
        ...state,
        answer: action.payload,
      };
    default:
      return state;
  }
};
export default function useAssignment(assignments: Assignment[]) {
  const [state, dispatch] = useReducer(reducer, {
    currentAssignment: 0,
    answer: null,
  });

  const assignment = assignments.at(state.currentAssignment);
  const isValid = assignment?.correctAnswers?.includes(state.answer ?? "");

  console.log(assignment);
  return {
    currentAssignment: state.currentAssignment,
    assignment: assignments.at(state.currentAssignment),
    isValid,
    isInvalid: !isValid,
    setAnswer: (answer: string) => {
      dispatch({ type: "SET_ANSWER", payload: answer });
    },
    isFinished: assignments.length <= state.currentAssignment,
    skip: () => dispatch({ type: "NEXT" }),
    next: () => {
      if (!isValid) {
        return;
      }

      dispatch({ type: "NEXT" });
    },
  };
}
