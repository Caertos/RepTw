import Tweet from "../models/tweet.model.js";

//Funcion para cargar tweets
export const getTweets = async (req, res) => {
  const tweets = await Tweet.find().populate('user', 'userName');
  res.json(tweets);
};

//Funcion para cargar mis tweets
export const getMyTweets = async (req, res) => {
  const tweets = await Tweet.find({user: req.user.id}).populate('user', 'userName');
  res.json(tweets);
};

//Funcion para crear un tweet
export const createTweet = async (req, res) => {
    const {content} = req.body;
    const newTweet = new Tweet({
    user: req.user.id,
    content,
  });
  const savedTweet = await newTweet.save();
  res.json(savedTweet);
};
//Funcion para ver un tweet
export const getTweet = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id).populate('user', 'userName');
  if (!tweet) return res.status(404).json({ message: "Tuit no encontrado." });
  res.json(tweet);
};
//Funcion para borrar un tweet
export const deleteTweet = async (req, res) => {
  const tweet = await Tweet.findByIdAndDelete(req.params.id);
  if (!tweet) return res.status(404).json({ message: "Tuit no encontrado." });
  return res.sendStatur(204);
};
//Funcion para modificar un tweet
export const updateTweet = async (req, res) => {
  const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!tweet) return res.status(404).json({ message: "Tuit no encontrado." });
  res.json(tweet);
};
