import React, { Component } from "react";
import Message from "./message";
import MessagingFolder from "./messagingFolder";
import NavBar from "../jslibrary3/jqueryMyportal/navBar";
class MessagingApp extends Component{
    state={

    messages: [{id: 121,sent: false,from: "tweets@twitter.com",to: "jack@test.com",subject: "18 tweets from those you follow",text: "Go to your twitter page and see the tweets from those you follow.",folder: "Social",read: true,},
        {id: 141,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Bug 461 in Customer Flow",text:"When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.",folder: "Sent",read: false,},
        {id: 158,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "New post from William Jones",text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.",folder: "Social",read: true,},
        {id: 177,sent: true,from: "jack@test.com",to: "williams@test.com",subject: "Movie tomorrow",text: "Avengers Endgame is releasing tomorrow. Wanna see.",folder: "Sent",read: false,},
        {id: 179,sent: false,from: "williams@test.com",to: "jack@test.com",subject: "Re: Movie tomorrow",text:"The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.",folder: "Inbox",read: false,},
        {id: 194,sent: false,from: "retweet@twitter.com",to: "jack@test.com",subject: "Your tweet has been retweeted by Thomas",text:"Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.",folder: "Social",read: false,},
        {id: 204,sent: true,from: "mary@test.com",to: "jack@test.com",subject: "To do on Friday",text:"Test the bugs on the employee form in Release 0.7.9 and fix them.",folder: "Inbox",read: false,},
        {id: 255,sent: true,from: "mary@test.com",to: "jack@test.com",subject: "Release 0.8.4 deployed",text: "Release 0.8.4 has been deployed in the test environment.",folder: "Inbox",read: false,},
        {id: 278,sent: false,from: "mary@test.com",to: "jack@test.com",subject: "Re: Bug 461 in Customer Flow",text:"The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",folder: "Inbox",read: false,},
        {id: 281,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Re: Re: Bug 461 in Customer Flow",text: "Bug 461 has been closed.\nRegards,\nJack",folder: "Sent",read: false,},
        {id: 289,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "5 Shares, 2 Posts from your friends",text:"Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.",folder: "Social",read: true,},
    ],
    selectedFolder:'All',
    selectedMessageId: null,


    };
    handleFolderSelect = (folder) => {
        this.setState({ selectedFolder: folder, selectedMessageId: null });
      };
      handleDeleteMessage = (messageId) => {
        const updatedMessages = this.state.messages.filter((message) => message.id !== messageId);
        this.setState({ messages: updatedMessages, selectedMessageId: null });
      };
      
      
      
      handleSelectMessage = (messageId) => {
        const { messages } = this.state;
        const index = messages.findIndex((message) => message.id === messageId);
    
        if (index !== -1) {
          messages[index].read = true;
        }
        this.setState({ selectedMessageId: messageId });
    };
    render() {
        const { selectedFolder, selectedMessageId } = this.state;
        const { messages } = this.state;
        let s2='Unread Messages ';
        let s1='Total Messages ';

        const filteredMessages =
        selectedFolder === "All"
        ? this.state.messages
        : this.state.messages.filter((message) => message.folder === selectedFolder);

        return (
            <div className="container">
                <NavBar count= {s1 + messages.length}
                 
                  unreadCount={s2 +messages.filter(message => !message.read).length}
                  />
                <div className=" row table ">
                    <div className="col-2 bg-secondary text-center">
                    <h4 className="text-white ">Folders</h4>
                    <div className={"row text-light m-2 " + (selectedFolder === "All" ? "row bg-light text-dark " : "")} onClick={() => this.handleFolderSelect("All")}>All</div>
                    <div className={"row text-light m-2 " + (selectedFolder === "Inbox" ? "row bg-light text-dark " : "")} onClick={() => this.handleFolderSelect("Inbox")}>Inbox</div>
                    <div className={"row text-light m-2 " + (selectedFolder === "Social" ? "row bg-light text-dark " : "")} onClick={() => this.handleFolderSelect("Social")}>Social</div>
                    <div className={"row text-light m-2 " + (selectedFolder === "Sent" ? "row bg-light text-dark " : "")} onClick={() => this.handleFolderSelect("Sent")}>Sent</div>

                    </div>
                    <div className="col-10">
            <MessagingFolder
              messages={filteredMessages}
              selectedMessageId={selectedMessageId}
              onSelectMessage={this.handleSelectMessage}
              onDelete={this.handleDeleteMessage}

            />
       
                    </div>
                    </div>
                    </div>



         
        );
      }
    }
export default MessagingApp;