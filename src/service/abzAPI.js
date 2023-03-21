import { apiData } from 'configuration/config';
import { $privateHost, $publicHost } from './hosts';

export const fetchUsers = async (page = 1) => {
  const { data } = await $publicHost.get(`/users`, {
    params: {
      count: apiData.per_count,
      page,
    },
  });
  return data;
};

export const fetchPositions = async () => {
  const { data } = await $publicHost.get(`/positions`);
  return data;
};

export const fetchToken = async () => {
  const { data } = await $publicHost.get(`/token`);
  return data;
};

export const postUser = async userData => {
  const { data } = await $privateHost.post(`/users`, userData);
  return data;
};
