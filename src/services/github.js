import configService from "./config";

const baseUrl = configService.apiUrl;
const githubService = {};

githubService.commits = async function () {
  try {
    const response = await fetch(`${baseUrl}/commits/history`);
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

githubService.files = async function (sha) {
  try {
    const response = await fetch(`${baseUrl}/commit/files/${sha}`);
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

githubService.comments = async function (sha) {
  try {
    const response = await fetch(`${baseUrl}/commit/comments/${sha}/`);
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

export default githubService;
