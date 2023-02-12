import Card from "../Card/Card";

import { IRepositoryItem } from "../../models/models";

import s from "styled-components";

interface IRepositoriesListProps {
  repositories: Array<IRepositoryItem>;
}

const RepositoriesListContainer = s.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;

export default function RepositoriesList({ repositories }: IRepositoriesListProps) {
  return (
    <RepositoriesListContainer>
      {repositories.map((repos: IRepositoryItem) => {
        return <Card key={repos.name + repos.description} item={repos} />;
      })}
    </RepositoriesListContainer>
  );
}
