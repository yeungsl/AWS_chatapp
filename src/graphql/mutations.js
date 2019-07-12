// eslint-disable
// this is an auto generated file. This will be overwritten

export const createMessage = `mutation CreateMessage($from: ID!, $to: ID!, $content: String!) {
  createMessage(from: $from, to: $to, content: $content) {
    from
    to
    msgId
    content
    createdAt
  }
}
`;
export const createMyself = `mutation CreateMyself($username: String!) {
  createMyself(username: $username) {
    username
    cognitoId
  }
}
`;
