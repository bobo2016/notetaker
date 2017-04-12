import React, { Component } from 'react'

import Notes from './Notes.js'
import UserRepo from './UserRepo.js'
import UserProfile from './UserProfile.js'

import getGithubInfo from '../utils/getGithubInfo.js'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      info: {},
      repos: [ 0,1,2 ],
      notes: [ ]
    }
  }

  componentWillReceiveProps(nextProps){
    this.update(nextProps.params.username)
  }

  componentDidMount(){
    this.update(this.params.username)
  }
  // componentDidMount(){
  //   const { username } = this.props.params
  //
  //
  // }

  update(username){
    getGithubInfo( username )
      .then( data => {
        this.setState({
          info: data.userInfo,
          repos: data.userRepos
        })
      })
  }
  render() {
    const { username } = this.props.params

    return (
      <div className="row">
        <div className="col-md-4">
          <Userprofile username ={username} info={ this.state.info}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <UserRepos username ={username} repos={ this.state.repos}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Notes username ={username} notes={ this.state.notes}/>
        </div>
      </div>
    )
  }
}


export default Profile
