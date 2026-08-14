const baseURL = 'https://api.github.com';

export async function fetchGithubUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuario nao encontrado.');
    }
    return await response.json();
}

export async function fetchGithubRepos(userName){
    const response = await fetch(`${baseURL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositorios nao encontrados.');
    }
    return await response.json();
}