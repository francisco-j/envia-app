const baseUrl = 'https://eshop-deve.herokuapp.com/api/v2';

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ'

export default async function myFetch(endpoint, options = {}) {
    const response = await fetch(baseUrl + endpoint, {
        headers: {Authorization: `Bearer ${token}`},
        ...options,
    });
    return await response.json();
};
