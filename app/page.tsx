import data from '../data/data.json'
import ShowAnswer from "./ShowAnswer";

export default async function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl mt-12 mb-4 font-bold">Guardians of the Galaxy Trivia</h1>
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
    </div>
  )
}
