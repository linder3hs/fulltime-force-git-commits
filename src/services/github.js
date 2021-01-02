import configService from "./config";

const baseUrl = configService.apiUrl;
const githubService = {};

githubService.commits = async function () {
  try {
    const response = await fetch(`${baseUrl}/history`);
    const data = await response.json();
    console.log(data.status);
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

githubService.files = async function (sha) {
  const response = await fetch(`${baseUrl}/files/${sha}`);
  return await response.json();
};

githubService.comments = async function (sha) {
  const response = await fetch(`${baseUrl}/comments/${sha}/`);
  return await response.json();
};

export default githubService;
