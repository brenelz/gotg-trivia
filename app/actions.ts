'use server'

import { cookies } from 'next/headers'
import { Answer } from './ShowAnswer';

export async function login(data: FormData) {
    const username = data.get('username') as string;
    cookies().set('username', username);
}

export async function recordGuess(isCorrect: boolean) {
    console.log(isCorrect);
}
