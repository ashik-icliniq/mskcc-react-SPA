import { atom } from 'nanostores';
import { onMount } from 'nanostores'
import { Cookies } from 'react-cookie';

export const isLoggedIn = atom(false);

onMount(isLoggedIn, () => {
    const cookies = new Cookies();
    cookies.get('session') && isLoggedIn.set(!isLoggedIn.get())
})

