export function sortByTime(questions, questionIds) {
  return questionIds.sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
}

export function getUnanswered(questionIds, answeredIds) {
  return questionIds.filter((questionId) => !answeredIds.includes(questionId));
}

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  return d.toLocaleTimeString("en-US") + " | " + d.toLocaleDateString();
}

export function getPercentVotes(optionVotes, totalVotes) {
  return Math.round((optionVotes / totalVotes) * 100).toString();
}

export function formatQuestion(question, users, authUser) {
  const { id } = question;
  const hasAnswered = Object.keys(users[authUser]["answers"]).includes(id);
  const answer = hasAnswered ? users[authUser]["answers"][id] : "";
  return {
    hasAnswered,
    authorName: users[question["author"]]["name"],
    authorAvatar: users[question["author"]]["avatarURL"],
    optionOne: question["optionOne"]["text"],
    optionTwo: question["optionTwo"]["text"],
    answer,
    optionOneVotes: question["optionOne"]["votes"].length,
    optionTwoVotes: question["optionTwo"]["votes"].length,
  };
}

export function prepareLeaderBoard(users) {
  const leaderboard = Object.values(users).map((user_id) => {
    let leaders = users[user_id];
    leaders.map(
      (user) =>
        (user.score = Object.keys(user.answers).length + user.questions.length)
    );
    return leaders;
  });

  return leaderboard.sort((a, b) => b.score - a.score);
}

//This function helps us to know the differentiate answered from unanswered questions
export function userQuestionData(users, authUser, questions) {

  const answeredId = Object.keys(users[authUser].answers)
    .map(ansId => {
      return questions[ansId].id;
    })
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse();

    const unansweredId = Object.keys(questions)
    .map(question => {
      return question;
    })
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse()
    .filter(question => !answeredId.includes(question));

  return {
    userId: users[authUser].id,
    answeredId,
    unansweredId,
  };
}
