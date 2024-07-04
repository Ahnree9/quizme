import { createContext, useReducer } from "react";
import questions from "../data";

// initializing the general state of the quiz.
const initialState = {
    questions,
    currentQuestionIndex: 0,
};

// the main reducer function for the state.
const reducer = (state, action) => {
    return state;
};

export const QuizContext = createContext();

// the QuizProvider component that wraps the entire app and provides the quiz context to all the child elements
export const QuizProvider = ({children}) => {

    // Using the useReducer hook to update the state of the quiz
    const value = useReducer(reducer, initialState);
    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};