import { Request } from './client';

export const login = async (params) => {
  const data = await Request.post('/login', { params });
  return data;
};

export const registerCustomer = async (params) => {
  const data = await Request.post('/register/customer', { params });
  return data;
};

export const getDietitians = async () => {
  const { data } = await Request.get('/dietitians');
  return data;
};

export const getAllProjects = async () => {
  const data = Request.get('/projects');
  return data;
};

export const getProject = async (projectId) => {
  const data = Request.get(`/projects/${projectId}`);
  return data;
};
