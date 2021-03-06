import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;

      console.log("me", action);
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };
    default:
      return state;
  }
}
