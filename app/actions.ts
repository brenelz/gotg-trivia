'use server'

import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function login(data: FormData) {
    const username = data.get('username') as string;
    cookies().set('username', username);
}

export async function logout() {
    cookies().set({
        name: 'username',
        value: '',
        expires: new Date('2016-10-05')
    });
}

export async function recordGuess(isCorrect: boolean) {
    const username = cookies().get('username')?.value;

    if (!username) {
        throw Error('Incorrect username');
    }

    if (isCorrect) {
        await kv.incr(`${username}:correct`);
    } else {
        await kv.incr(`${username}:incorrect`);
    }

    revalidatePath('/trivia');
}
