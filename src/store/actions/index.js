//Action creator
import * as actionTypes from "./types";

export const SUCCESS = {
  type: actionTypes.SUCCESS
};

export const FAILURE = {
  type: actionTypes.FAILURE
};

export const success = () => ({
  type: actionTypes.SUCCESS
});

export const failure = () => ({
  type: actionTypes.FAILURE
});

export const user_input = text => ({
  type: actionTypes.USER_INPUT,
  payload: text
});

export const counter = () => ({
  type: actionTypes.COUNTER
});
