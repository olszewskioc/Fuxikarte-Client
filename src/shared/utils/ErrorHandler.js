export const extractApiError = (error) => {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.message) return error.message;
  return null;
};
