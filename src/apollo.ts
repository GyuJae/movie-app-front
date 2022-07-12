import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { IMediaSave } from 'types/mediaSave'

const TOKEN = localStorage.getItem('token')
const RESENT_VIEWS = localStorage.getItem('recents') ? JSON.parse(localStorage.getItem('recents') as string) : []

export const isLoggedinVar = makeVar(!!TOKEN)
export const authTokenVar = makeVar(TOKEN)
export const isOpenUserContainerVar = makeVar(false)
export const recentViewsVar = makeVar<IMediaSave[]>(RESENT_VIEWS)

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-jwt': authTokenVar() || '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedinVar()
            },
          },
          isOpenUserContainer: {
            read() {
              return isOpenUserContainerVar()
            },
          },
          recentViews: {
            read() {
              return recentViewsVar()
            },
          },
        },
      },
    },
  }),
})
