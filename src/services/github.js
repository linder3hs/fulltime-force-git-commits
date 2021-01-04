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
  try {
    const response = await fetch(`${baseUrl}/files/${sha}`);
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

githubService.comments = async function (sha) {
  try {
    const response = await fetch(`${baseUrl}/comments/${sha}/`);
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error(err);
  }
};

export default githubService;
