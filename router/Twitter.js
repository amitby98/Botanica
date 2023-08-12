const axios = require('axios');

// Function to post a thank-you tweet
const postThankYouTweet = async (username) => {
  const twitterApiEndpoint = 'https://api.twitter.com/1.1/statuses/update.json';

  // Construct OAuth headers
  const headers = {
    Authorization: `OAuth oauth_consumer_key="${process.env.TWITTER_API_KEY}", oauth_token="${process.env.TWITTER_ACCESS_TOKEN}", ...`, // Include other OAuth headers
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  // Construct the tweet content
  const tweetContent = `Thank you, @${username}, for purchasing at Botanica! 🌱🌿 #BotanicaShop`;

  try {
    // Post the tweet
    const response = await axios.post(twitterApiEndpoint, `status=${encodeURIComponent(tweetContent)}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { postThankYouTweet };