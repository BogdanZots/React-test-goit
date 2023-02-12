type RepoOwner = {
  login: string;
};

export interface IRepositoryItem {
  language: string;
  description: string;
  name: string;
  watchers: number;
  stargazers_count: number;
  owner: RepoOwner;
}
