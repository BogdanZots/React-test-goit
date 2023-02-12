import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { API_URL, RESULTS_PER_PAGE } from "../../../config/config";

import { IRepositoryItem } from "../../../models/models";

export interface IResponseSchema {
  data: Array<IRepositoryItem>;
  pagesCount: number;
  searchParam: string;
}

interface IAxiosResponse {
  items: Array<IRepositoryItem>;
  total_count: number;
}

export const fetchRepositories = createAsyncThunk<IResponseSchema, any, any>(
  `${API_URL}`,
  async ({ currentPage = 1, perPage = RESULTS_PER_PAGE, searchParam }, { rejectWithValue }) => {
    try {
      const response = await axios.get<IAxiosResponse>(
        `${API_URL}/search/repositories?q=${searchParam}&per_page=${perPage}&page=${currentPage}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        },
      );
      return {
        searchParam,
        data: response.data.items,
        pagesCount: Math.ceil(response.data.total_count / RESULTS_PER_PAGE),
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
