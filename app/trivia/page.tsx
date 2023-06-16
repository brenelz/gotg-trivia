import { redirect } from 'next/navigation';
import data from '../../data/data.json'
import ShowAnswer from "../ShowAnswer";
import { cookies } from 'next/headers';
import { logout } from '../actions';
import { kv } from '@vercel/kv';

export default async function Trivia() {
  const username = cookies().get('username')?.value;
  if (!username) {
    redirect('/')
  }

  const incorrectGuesses = await kv.get(`${username}:incorrect`) as number | undefined;
  const correctGuesses = await kv.get(`${username}:correct`) as number | undefined;

  return (
    <>
      <p className='mb-4'><small>{correctGuesses || 0} Correct | {incorrectGuesses || 0} Incorrect</small></p>
      {data.questions.map(question => (
        <div key={question.id} className="border-b-2 border-slate-600 mb-8 last:border-b-0">
          <p className="mb-4"><strong>{question.questionText}</strong></p>
          <ul className="flex gap-8 justify-center mb-8">
            {question.answers.map(answer => (
              <ShowAnswer key={answer.answerId} answer={answer} correctAnswerId={question.correctAnswerId} />))
            }
          </ul>
        </div>
      ))}

      <form action={logout}>
        <p>
          <button type="submit" className='mb-4'>Logout</button>
        </p >

      </form>
    </>
  )
}
