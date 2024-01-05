// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /question/inner/get/id */
export async function getQuestionById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.Question>('/question/inner/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /question/inner/question_submit/get/id */
export async function getSubmittedQuestionById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubmittedQuestionByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.SubmittedQuestion>('/question/inner/question_submit/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/inner/question_submit/update */
export async function updateSubmittedQuestionById(
  body: API.SubmittedQuestion,
  options?: { [key: string]: any },
) {
  return request<boolean>('/question/inner/question_submit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
