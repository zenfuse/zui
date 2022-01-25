import * as R from "ramda";
import { getJson } from "../string-utils";

export const getActionKey = (length = 10e9) =>
  Math.round(Math.random() * length);

export const indexById = (payload) =>
  R.indexBy(
    R.prop("id"),
    R.map((x) => ({ ...x }), payload)
  );

export const checkActualStorage = (localEntries, apiEntriesCount) =>
  localEntries &&
  getJson(localEntries) &&
  apiEntriesCount === R.length(JSON.parse(localEntries));

export const setStaticToLocal = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};
