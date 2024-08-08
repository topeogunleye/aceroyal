const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const instagramUserId = '7922619145';

export const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/${instagramUserId}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
};
