// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /question/add */
export async function addQuestion(body: API.QuestionAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/question/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/delete */
export async function deleteQuestionById(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/question/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/my/list/page/vo */
export async function listQuestionVOByPage(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO>('/question/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/update */
export async function updateQuestion(
  body: API.QuestionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/question/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
