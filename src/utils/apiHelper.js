import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const organizationId = localStorage.getItem('organizationId:');
    const role = localStorage.getItem('user_role:');
    const userId = localStorage.getItem('userid:');
    
    if (organizationId) {
      const orgIdInt = parseInt(organizationId, 10);
      if (!isNaN(orgIdInt)) {
        config.headers['X-Organization-Id'] = orgIdInt;
      }
    }
    if (role) {
      config.headers['X-Role'] = role;
    }
    if (userId) {
      config.headers['X-User-Id'] = userId;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.error;
    error.message = message;
    throw error;
  }
};

export const get = (url, config = {}) => apiRequest('GET', url, null, config);
export const post = (url, data, config = {}) => apiRequest('POST', url, data, config);
export const put = (url, data, config = {}) => apiRequest('PUT', url, data, config);
export const patch = (url, data, config = {}) => apiRequest('PATCH', url, data, config);
export const del = (url, config = {}) => apiRequest('DELETE', url, null, config);
