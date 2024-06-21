import { useMutation, useQueryClient, MutationFunction, useQuery } from "@tanstack/react-query"
import { useAuth0 } from "@auth0/auth0-react"
import request from "superagent"

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export function useHooks() {
  return {
    getUsernames: useGetUsernames,
    getPlants: useGetPlants,
  }
}

function useAuthQueryTemplate(path:string, keys: string[]) {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  return useQuery({
    enabled: isAuthenticated,
    queryKey: keys,
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const res = await request
        .get(`${rootURL}/${path}`)
        .set('Authorization', `Bearer ${token}`)
      return res.body
    },
  })
}

export function useMutationTemplate<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  queryKeyArry: Array<string | number>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyArry })
    },
  })
  return mutation
}

const useGetUsernames = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  return useQuery({
    enabled: isAuthenticated,
    queryKey: ['users'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const res = await request
        .get(`${rootURL}/usernames`)
        .set('Authorization', `Bearer ${token}`)
      return res.body
    },
  })
}

const useGetPlants = () => {
  return useAuthQueryTemplate('/plants', ['plants'])
}