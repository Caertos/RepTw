import { useTweets } from "../context/TweetContext";
import "../homeStyle.css";
import { useForm } from "react-hook-form";

function NewTweetPanel() {
  const { register, handleSubmit } = useForm();
  const { createTweet } = useTweets();

  const onSubmit = handleSubmit((data) => {
    createTweet(data);
  });

  return (
    <div className="flex flex-col relative tweetInputContainer">
      <form onSubmit={onSubmit} className="flex flex-col">
        <textarea
          type="text"
          placeholder="¿Qué hay de nuevo?"
          {...register("content")}
          className="tweetInput text-gray-900"
          rows="4"
        />
        <div className="flex-1 p-2 absolute bottom-0 right-0">
          <button className="btnStyle rounded-2xl font-bold w-24">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTweetPanel;
