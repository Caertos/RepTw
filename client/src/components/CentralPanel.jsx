import avatarIcon from "../assets/img/avatar.png";
import "../homeStyle.css";
import { useTweets } from "../context/TweetContext";
import { useEffect } from "react";
import { format } from "date-fns";

function CentralPanel() {
  const { getTweets, tweets } = useTweets();
  console.log(tweets);

  useEffect(() => {
    getTweets();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd MMM yyyy, hh:mm a");
  };

  return (
    <div className="flex flex-col tweetContainer">
      <span className="upCentralPanel"></span>
      {tweets.map((tweet) => (
        <div
          className="flex flex-col border-solid border-zinc-300 border-2 p-2 mx-5 my-2 rounded-2xl"
          key={tweet.id}
        >
          <div className="flex">
            <img
              src={avatarIcon}
              className="m-5 w-14 rounded-full text-gray-900"
              alt="avatar"
            />
            <div className="flex flex-col ml-2">
              <span className="text-xs font-bold">{tweet.user.userName}</span>
              <span className="text-gray-900">{tweet.content}</span>
            </div>
            <button className="sticky text-s font-bold mt-4 w-24 h-7 text-center rounded-3xl ml-auto btnStyle">
              Seguir
            </button>
          </div>
          <span className="text-right m-3 text-gray-900">{formatDate(tweet.createdAt)}</span>
        </div>
      ))}
    </div>
  );
}

export default CentralPanel;

