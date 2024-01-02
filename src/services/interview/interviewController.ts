// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /interview/add */
export async function addInterviewQuestion(
  body: API.InterviewQuestionAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/interview/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interview/delete */
export async function deleteInterviewQuestionById(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/interview/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interview/my/list/topic */
export async function getInterviewQuestionsByQuery(
  body: API.InterviewQuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListInterviewQuestionVO>('/interview/my/list/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interview/update */
export async function updateInterviewQuestion(
  body: API.InterviewQuestionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/interview/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
