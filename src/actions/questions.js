import { saveQuestion, saveAnswer } from "../utils/api";
import { addQuestionToUser, addAnswerToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function savePoll(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(savePoll(question));
      dispatch(addQuestionToUser(question));
    });
  };
}

function saveAnswerToQuestion(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(saveAnswerToQuestion(authUser, qid, answer));
    return saveAnswer({ authUser, qid, answer }).catch((e) => {
      console.warn("Error in handleSaveAnswer:", e);
    });
  };
}
