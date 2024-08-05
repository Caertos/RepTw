import axios from "./axios";

export const getTweetsRequest = () => axios.get("/tweets");

export const getTweetRequest = (id) => axios.get(`/tweets/${id}`);

export const createTweetsRequest = (tweet) => axios.post("/tweets", tweet);

export const getMyTweetsRequest = () => axios.get("/myTweets");

export const getTweetsByIdRequest = () => axios.get("/tweets:id");

export const updateTweetsRequest = (tweet) =>
  axios.put(`/tweets/${tweet.id}`, tweet);

export const deleteTweetsRequest = (id) => axios.delete(`/tweets/${id}`);
