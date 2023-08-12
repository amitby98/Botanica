const axios = require('axios');

//Twitter API
const twitterApiKey = 'YZgh9jfOHs8wFaZZdg93xRCKg';
const twitterApiSecret = 'LNh88HHJQmnlwTA19p69aGnn5excIOdb8jAeaWZzkR2h3e0dy0';
const twitterAccessToken = '1690243769235390464-6yXYTPp3ItGzm53XO0BnHZ4ISNq4ul';
const twitterAccessTokenSecret = 'bJ1Ikri5w7ROeNMc5EvWU7mGObhH3T4iELfAiAQxMOcF5';

const twitterApiEndpoint = 'https://api.twitter.com/1.1/statuses/update.json';


const postThankYouTweet = async (username) => {
  const tweetContent = `Thank you, @${username}, for purchasing at Botanica! 🌱🌿 #BotanicaShop`;

  const headers = {
    Authorization: `OAuth oauth_consumer_key="${twitterApiKey}", oauth_token="${twitterAccessToken}", ...`, // Include other OAuth headers
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await axios.post(twitterApiEndpoint, `status=${encodeURIComponent(tweetContent)}`, { headers });
    console.log('Thank-you tweet posted successfully:', response.data);
  } catch (error) {
    console.error('Error posting thank-you tweet:', error);
  }
};

// Export the function
module.exports = { postThankYouTweet };
