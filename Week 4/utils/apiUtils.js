import axios from 'axios';


export async function getWeather(city, apiKey) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await axios.get(url);
    if (response.status !== 200) throw new Error('API call failed');
    return response.data;
}


export async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get(url);
    if (response.status !== 200) throw new Error('Failed to fetch users');
    return response.data;
}


export async function getPostsByUser(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const response = await axios.get(url);
    if (response.status !== 200) throw new Error('Failed to fetch posts');
    return response.data;
}
