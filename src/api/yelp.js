import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2qQHIdV0nwsbcx8P4UjVzWgehA2KjpnCp30yn3KhAV3HlWpkdYfXdveElM7hmoaFOkM2vKCgay0uvU8O84xiSGXtFGOMLmXpClfzU1qc344oVVexNJXjmZ60OwluZHYx'

    }
})