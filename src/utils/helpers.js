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
  const leaderboard = Object.keys(users).map((user_id) => {
    let leader = users[user_id];
    leader["score"] =
      Object.keys(leader["answers"]).length + leader["questions"].length;
    return leader;
  });

  return leaderboard.sort((a, b) => b.score - a.score);
}
