const Answer = ({ answerText, index, onSelectAnswer, currentAnswer, correctAnswer }) => {
    const letterMapping = ["A", "B", "C", "D"];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;  // check if the answer is correct
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;  // check if the answer is wrong
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : ""; //CSS class for correct answer
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";       // CSS class for wrong answer
    const disabledClass = currentAnswer ? "disabled-answer" : "";       // CSS class for disabling further selections
    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answerText)}> {/* Handle the answer selection */}
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{answerText}</div>
        </div>
    );
};

export default Answer;