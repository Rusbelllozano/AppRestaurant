import {ApolloClient} from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const token='ace5c3846563c123a763efd0fb4d8aff47594ddf';
const httpLink={
    uri:'https://api.github.com/graphql',
    headers:{
        authorization:`Bearer ${token}`
    }
}
export default client = new ApolloClient({
    link:new HttpLink(httpLink),
    cache:new InMemoryCache()

})