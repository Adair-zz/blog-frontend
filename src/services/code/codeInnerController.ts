// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /code/inner/do */
export async function doExecution(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doExecutionParams,
  options?: { [key: string]: any },
) {
  return request<API.SubmittedQuestion>('/code/inner/do', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
