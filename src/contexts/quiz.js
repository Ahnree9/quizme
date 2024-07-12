import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

// initializing the general state of the quiz.
const initialState = {
    questions,                      // Array of quiz questions
    currentQuestionIndex: 0,        // Index of the current question
    showResults: false,             // Boolean to determine whether to show results
    correctAnswerCount: 0,          // Counter fo rthe nuber of correct answer
    answers: shuffleAnswers(questions[0]),  // Shuffled answers for the first question
    currentAnswer: "",              // Currently selected answer
};

// the main reducer function for the state.
const reducer = (state, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'SELECT_ANSWER': {
            // Update the correct answer count if the selected answer is correct
            const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,  // Set the current answer to the selected answer
                correctAnswerCount,             // Update the correct answer count
            }
        }
        case "NEXT_QUESTION": {
            // Check if the current question is the last one to determine whether to show results
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex: state.currentQuestionIndex +1;   // Move to the next question if not showing results
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);               // Shuffle answers for the next question
            return {
                ...state,
                currentQuestionIndex,   // Update the current question index
                showResults,            // Update the showResults flag
                answers,                // Update the answers array
                currentAnswer: '',      // Reset the current answer
            };
        }
        case 'RESTART': {
            return initialState     // Reset the state to the initial state
        }
        default:
            return state      // Return the current state if no matching action type             
    }
};

export const QuizContext = createContext();     // Creating the QuizContext

// the QuizProvider component that wraps the entire app and provides the quiz context to all the child elements
export const QuizProvider = ({children}) => {

    // Using the useReducer hook to update the state of the quiz
    const value = useReducer(reducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>; // Providing the quiz component to child components
};