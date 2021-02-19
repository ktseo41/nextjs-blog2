import { WikiHeaderKey } from "../constants";

export type WikiHeader = {
  [WikiHeaderKey.TITLE]: string;
  [WikiHeaderKey.CREATED]: number;
  [WikiHeaderKey.MODIFIED]: number;
  [WikiHeaderKey.TAG]: string;
};
