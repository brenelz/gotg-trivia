import { login } from "./actions";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
    if (cookies().get('username')?.value) {
        redirect('/trivia')
    }
    return (
        <div className="text-center">
            <form action={login}>
                <h1 className="text-4xl mt-12 mb-4 font-bold">Guardians of the Galaxy Trivia</h1>
                <h2>Enter your username</h2>

                <div className="m-4">
                    <input className="text-black p-2" type="text" name="username" />
                </div>
                <p><input type="submit" className="text-slate-400 hover:text-white cursor-pointer" value="Login" /> </p>
            </form>
        </div >
    )
}
