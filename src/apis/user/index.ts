import request from '@/utils/axios';
import type { ListParams, ListModel } from '@/apis/model/user/userModel';

export const getList = (params: ListParams) => {
  return request.get<ListModel>('/list', { params });
};
