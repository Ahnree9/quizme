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
            <div className="score">
                Question {quizState.currentQuestionIndex +1} / {quizState.questions.length}
            </div>
            <Question />
        </div>
    )
};

export default Quiz;