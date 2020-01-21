import React, { Component } from 'react';
import UserCard from './UserCard';

import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import green from '@material-ui/core/colors/green'

export default class Profile extends Component {
    render() {
        const {
            copyProfileLinkToClipboard,
            friendRequestSent,
            isMe,
            isFriend,
        } = this.props;
     return (
         <UserCard {...this.props} showProfileIcon={false}>
            <Button onClick={() => copyProfileLinkToClipboard()}>Copy Direct Profile Link</Button>
            {(isMe ? <Typography>Me</Typography> :
            (isFriend ?
                <Typography ><CheckCircleIcon style={{fontColor: green.A400}} /> You're Friends </Typography>
            : 
            ( ! isFriend ?
            <Fab color="secondary" aria-label="Add" className={this.props.classes.fab} onClick={this.props.addFriend}>
                <AddIcon />
            </Fab> : undefined))
              )}
         </UserCard>
     );
    }
}   