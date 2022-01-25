import * as R from "ramda";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const staticGetAction = ({ model, apiMethods: { getApi } }) =>
  createAsyncThunk(`${model}/get`, async ({ query }, { rejectWithValue }) => {
    try {
      const res = await getApi({ query: query || "?_limit=-1" });

      if (!res.error) {
        return res;
      } else {
        return rejectWithValue({
          message: R.path(["error", "message"], res) || null,
        });
      }
    } catch (error) {
      // console.log("staticGetAction res.error", model, error);
      return rejectWithValue({ message: error.message || null });
    }
  });
