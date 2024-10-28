export const fetchAPI = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something wrong");
  }
  const data = await response.json();
  return data;
};
