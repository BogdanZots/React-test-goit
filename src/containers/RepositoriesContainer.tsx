import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import Input, { fetchReposPayload } from "../components/Input/Input";
import Pagination from "../components/Pagination/Pagination";
import Repositories from "../components/Repositories/Repositories";

import { fetchRepositories } from "../store/reducers/repositories/repositoriesAction";
import { getRepositories } from "../store/selectors/repositories";

import { DEFAULT_SEARCH_PARAM } from "../config/config";

import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export default function RepositoriesContainer() {
  const { items, errorMessage, isLoading, pagesCount, searchParam } = useAppSelector(store =>
    getRepositories(store),
  );

  const dispatch = useAppDispatch();
  const fetchRepos = useCallback((params: fetchReposPayload) => {
    dispatch(fetchRepositories({ ...params, searchParam: params?.searchParam || searchParam }));
  }, []);
  useEffect(() => {
    fetchRepos({ searchParam: searchParam ? searchParam : DEFAULT_SEARCH_PARAM });
  }, []);

  return (
    <StyledAppContainer>
      <Input onChange={fetchRepos} placeholder="Search" />
      <Repositories repositories={items} errorMessage={errorMessage} isLoading={isLoading} />
      <Pagination searchParam={searchParam} onChange={fetchRepos} pagesCount={pagesCount} />
    </StyledAppContainer>
  );
}
