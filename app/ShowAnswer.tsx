'use client';

import { useState } from "react";

export type ShowAnswerProps = {
    answer: { answerId: number; answerText: string }
    correctAnswerId: number
}

type Result = undefined | 'correct' | 'incorrect';

export default function ShowAnswer({ answer, correctAnswerId }: ShowAnswerProps) {
    const [result, setResult] = useState<Result>();

    return (<li>
        <button className="text-slate-400 hover:text-white" onClick={() => {
            setResult(answer.answerId === correctAnswerId ? 'correct' : 'incorrect');
        }}>
            {answer.answerText}{' '}
            {result ?
                result === 'correct' ? '✅' : '❌'
                : null}
        </button>
    </li >
    )
}