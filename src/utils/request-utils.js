export const getRequestUrl = ({ url, referer }) => {
  const endpoint = {
    referer: referer,
    url: encodeURIComponent(url)
  };
  return `https://onepix.dev/recoby?endpoint=${JSON.stringify(endpoint)}`;
};