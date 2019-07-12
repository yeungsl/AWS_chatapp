// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const allUsers = gql `query AllUsers {
  allUsers {
    username
    cognitoId
  }
}
`;
export const me = `query Me {
  me {
    username
    cognitoId
  }
}
`;
export const messageFrom = `query MessageFrom($from: ID!) {
  messageFrom(from: $from) {
    from
    to
    msgId
    content
    createdAt
  }
}
`;
export const messageTo = `query MessageTo($to: ID!) {
  messageTo(to: $to) {
    from
    to
    msgId
    content
    createdAt
  }
}
`;
