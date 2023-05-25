import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export default async function getProperty(url:string){
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
  });
  return data;
}