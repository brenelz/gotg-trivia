'use client';

import { useState } from "react";
import { recordGuess } from "./actions";

export type Answer = { answerId: number; answerText: string }


export type ShowAnswerProps = {
    answer: Answer
    correctAnswerId: number
}

type Result = undefined | 'correct' | 'incorrect';

export default function ShowAnswer({ answer, correctAnswerId }: ShowAnswerProps) {
    const [result, setResult] = useState<Result>();

    return (<li>
        <button
            disabled={result !== undefined}
            className="text-slate-400 hover:text-white"
            onClick={() => {
                const isCorrect = answer.answerId === correctAnswerId
                setResult(isCorrect ? 'correct' : 'incorrect');
                recordGuess(isCorrect);
            }
            }>
            {answer.answerText}{' '}
            {result ?
                result === 'correct' ? '✅' : '❌'
                : null}
        </button>
    </li >
    )
}