async function fetcher(params) {
  try {
    const response = await fetch(params);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error("Fetcher error: " + error);
    return {};
  }
}
