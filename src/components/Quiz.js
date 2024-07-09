import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

// Creating the Quiz component, which renders the current question and score.
const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);

    // Rendering the Quiz component with current question number and total number of questions as well as the Question component.
    return (
        <div>
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed the quiz. </div>
                        <div>You've got {quizState.correctAnswerCount} of {" "} {quizState.questions.length} right.</div>
                        <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                    </div>
                    </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex +1} / {quizState.questions.length}
                    </div>
                    <Question />
                    <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next Question</div>
                </div>
            )}            
        </div>
    ) 
};

export default Quiz;