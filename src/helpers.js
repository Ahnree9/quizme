// Creating the shufffleAnswers function, which takes a question object as input and returns a shuffled array of asnwer options
export const shuffleAnswers = (question) => {

    // Creating an array of all answer options, with the correct answer first
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    // Shuffling the answer options by assigning each answer option a random sort value, sorting the array based on those sort values, and then returning only the answer values in their shuffled order
    return unshuffledAnswers.map(answer => ({ sort: Math.random(), value: answer })).sort((a, b) => a.sort - b.sort).map((obj) => obj.value);
};