import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const TOKEN = localStorage.getItem('token')

export const isLoggedinVar = makeVar(!!TOKEN)
export const authTokenVar = makeVar(TOKEN)
export const isOpenUserContainerVar = makeVar(false)

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
        },
      },
    },
  }),
})
