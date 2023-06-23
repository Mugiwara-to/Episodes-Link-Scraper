import axios from "axios";

/*
Using the example episode ID of 'spy-x-family-17977$episode$89506$both',
explicitly defining default server for demostrative purposes.
*/
const url =
  "https://api.consumet.org/anime/zoro/watch?episodeId=spy-x-family-17977$episode$89506$both&server=vidcloud";
const data = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const info = await data();

console.log(info);
