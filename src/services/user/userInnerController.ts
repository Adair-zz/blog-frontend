// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /inner/get/id */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.User>('/inner/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /inner/get/ids */
export async function listByIds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByIdsParams,
  options?: { [key: string]: any },
) {
  return request<API.User[]>('/inner/get/ids', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
