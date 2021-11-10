import { JSONConvert } from "../../utils/jsonConverts";
import { localStorageHelper } from "../../utils/localStorageHelper";
import { TUserData } from "./types";

export const drawerWidth: number = 240;

export const initialUserData = (): TUserData => {
  const userData = JSONConvert(localStorageHelper("userData") || "");
  if (userData) {
    return userData;
  }
  return {};
};
