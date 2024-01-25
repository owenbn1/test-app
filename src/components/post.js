import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      content:this.props.content
    }
  }
  render() {
     let commentOne = {
       content: 'This is my post',
       username: 'Tommy',
       date: '12-12-2018'
     };
     let commentTwo = {
       content: 'This is another post',
       username: 'Sammy',
       date: '12-17-2018'
     };
     let commentThree = {
       content: 'Here\'s a post form me',
       username: 'Sally',
       date: '12-12-2018'
     };


    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          Username and Time
        </div>
        <div className="card-body"> This is where our content goes</div>
        <div className="card-footer">
          <LikeButton/>
          <ReplyButton/>
          <Comment {...commentOne}/>
          <Comment {...commentTwo}/>
          <Comment {...commentThree}/>
        </div>
      </div>
    )
  }
}
