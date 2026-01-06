export const useApi = () => {
  const { public: { apiBase } } = useRuntimeConfig()
  const get = (path: string, opts: any = {}) => $fetch(path, { baseURL: apiBase, ...opts })
  return { get, apiBase }
}
