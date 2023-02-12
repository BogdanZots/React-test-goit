import { createSlice } from "@reduxjs/toolkit";
import { IRepositoryItem } from "../../../models/models";

import { fetchRepositories } from "./repositoriesAction";

interface IState {
  isLoading: boolean;
  errorMessage: string;
  items: Array<IRepositoryItem>;
  pagesCount: number;
  searchParam: string;
}

const initialState: IState = {
  isLoading: false,
  errorMessage: "",
  items: [],
  pagesCount: 0,
  searchParam: "",
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "Network error";
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      const { data, pagesCount, searchParam } = action.payload;
      state.items = data;
      state.isLoading = false;
      state.pagesCount = pagesCount;
      state.searchParam = searchParam;
    });
  },
});

export default repositoriesSlice.reducer;
