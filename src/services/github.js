import configService from "./config";
import * as METHODS from "./methods";

const baseUrl = configService.apiUrl;
const githubService = {};

githubService.commits = async function () {
  const response = await fetch(
    `${baseUrl}/repos/linder3hs/fulltime-force-git-commits/commits`
  );
  const data = await response.json();
  return data;
};

export default githubService;
