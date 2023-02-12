import RepositoriesList from "./RepositoriesList";

import { IRepositoryItem } from "../../models/models";
import { loadingMessage, noResultsMessage } from "../../config/config";

import s from "styled-components";

interface IRepositoriesListProps {
  isLoading: boolean;
  errorMessage: string;
  repositories: Array<IRepositoryItem>;
}

const RepositoriesPageContainer = s.div`
display:flex;
flex-direction:column;
background-color:#e5e5e578;
padding:40px 50px;
max-width:1400px;
margin : 0 auto;
`;

export default function Repositories({
  repositories,
  errorMessage,
  isLoading,
}: IRepositoriesListProps) {
  const renderComponent = () => {
    if (isLoading) {
      return <div data-id="loading">{loadingMessage}</div>;
    } else if (errorMessage) {
      return <div data-id="error">{errorMessage}</div>;
    } else if (!repositories.length) {
      return <div data-id="no-results">{noResultsMessage}</div>;
    } else {
      return <RepositoriesList data-id="success" repositories={repositories} />;
    }
  };

  return <RepositoriesPageContainer>{renderComponent()}</RepositoriesPageContainer>;
}
