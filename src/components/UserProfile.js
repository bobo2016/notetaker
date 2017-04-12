import React, { Component } from 'react'

class UserProfile extends Component {

  render() {
    const { username, info } = this.props
    let { avatar_url, name, company, email, followers, location, blog, bio } = info
    console.log(info);
    return (
      <div>
        <h3>User Info</h3>
        <ul>
          { avatar_url &&
          <li className="list-group-item">
            <img src={avatar_url} className="img-rounded img-responsive" alt=""/>
          </li>}
          <li className="list-group-item">Name: { name }</li>
          <li className="list-group-item">Company: { company }</li>
          <li className="list-group-item">Email: { email}</li>
          <li className="list-group-item">followers: { followers}</li>
          <li className="list-group-item">location: { location }</li>
          <li className="list-group-item">blog: { blog }</li>
          <li className="list-group-item">bio: { bio }</li>
        </ul>
      </div>
    )
  }
}


UserProfile.propTypes = {
  username: propTypes.string.isRequired,
  info: propTypes.object.isRequired
}
export default UserProfile
