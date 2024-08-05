import { createContext, useContext, useState } from "react";
import { createTweetsRequest, getTweetsRequest } from "../api/tweets";

const TweetContext = createContext();

export const useTweets = () => {
  const context = useContext(TweetContext);

  if (!context) {
    throw new Error("useTweet debe usarse dentro de un tweetProvider");
  }

  return context;
};

export function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const res = await getTweetsRequest();
      const sortedTweets = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setTweets(sortedTweets);
    } catch (error) {
      console.log(error);
    }
  };

  const createTweet = async (tweet) => {
    try {
      console.log(tweet);
      const res = await createTweetsRequest(tweet);
      console.log(res);
      getTweets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweets,
        createTweet,
        getTweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
