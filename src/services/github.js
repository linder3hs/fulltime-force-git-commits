import configService from "./config";

const baseUrl = `${configService.apiUrl}/repos/linder3hs/fulltime-force-git-commits/commits`;
const githubService = {};

githubService.commits = async function () {
  const response = await fetch(`${baseUrl}`);
  return await response.json();
};

githubService.files = async function (sha) {
  const response = await fetch(`${baseUrl}/${sha}`);
  return await response.json();
};

githubService.comments = async function (sha) {
  const response = await fetch(`${baseUrl}/${sha}/comments`);
  return await response.json();
};

export default githubService;
