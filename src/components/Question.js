import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

// creating the Question component, which renders the current question and answer options
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);                              // using the useContext hook to access the quiz context and state
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];        // getting the current question from the quizState

    // Rendering the Question component with the question prompt and list of answer options
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {/* Mapping over the answers to render each Answer component */}
                {quizState.answers.map((answer, index) => (
                    <Answer 
                    answerText={answer}                     // passing the answer text to the Answer component
                    key={index}                             // providing a unique key for each answer                
                    index={index}                           // passing the index of the answer
                    currentAnswer={quizState.currentAnswer} // passing the currently selected answer
                    correctAnswer={currentQuestion.correctAnswer}   // passing the correct answer for the current question
                    onSelectAnswer={(answerText) => dispatch({ type: 'SELECT_ANSWER', payload: answerText })} />
                ))}
            </div>
        </div>
    );
};

export default Question;