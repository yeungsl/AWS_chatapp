import React from 'react';
import {graphql, withApollo} from 'react-apollo';
import {allUsers} from './graphql/queries';
import {ChatList, ChatListItem, Avatar, Column, Row, Title} from '@livechat/ui-kit';


class UserList extends React.Component{

    change(){
        return(
            <ChatListItem active>
                <Avatar letter="T" />
                <Column fill>
                    <Row justify>
                        <Title ellipsis>IDK</Title>
                    </Row>
                </Column>
            </ChatListItem>
        );
    }


    renderUser(user){
        return(
            <ChatListItem onClick={this.change}>
                <Avatar letter="T" />
                <Column fill>
                    <Row justify>
                        <Title ellipsis>{user.username}</Title>
                    </Row>
                </Column>
            </ChatListItem>
        );
    }

    render(){
        const users = this.props.data;
        return(
            <ChatList style={{ maxWidth: 300 }}>
                {users.map(this.renderUser)}
            </ChatList>
        );
    }
}

export default withApollo(graphql(
    allUsers,{
    options:{
        fetchPolicy: 'cache-and-network'
    },
    props: props =>({
        data: props.data.allUsers
    })
})(UserList));