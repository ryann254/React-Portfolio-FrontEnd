import {
  ADD_EVENT_ACHIEVEMENTS,
  ADD_WORK_EDUCATION,
  EVENT_OR_WORK_ADDED,
  REMOVE_LEFT_SIDE,
} from "../action-types";

export const addWork = (data) => {
  return { type: ADD_WORK_EDUCATION, payload: data };
};

export const addEvent = (data) => {
  return { type: ADD_EVENT_ACHIEVEMENTS, payload: data };
};

export const changeEditStatus = () => {
  return { type: EVENT_OR_WORK_ADDED };
};

export const removeLeft = () => {
  return { type: REMOVE_LEFT_SIDE };
};
