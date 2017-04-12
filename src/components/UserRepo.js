import React, { Component } from 'react'

class UserRepo extends Component {
  render() {
    return (
      <div>
        <h3>Git repo</h3>
        <ul className="list-group">
          {
            repos.map((repo,index) => {
              return(
                <li className="list-group-item" key={index}>
                  <h4>
                    <a href={ repo.html_url }>{repo.name}</a>
                  </h4>
                  <p>{repo.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

UserRepo.propTypes = {
  username: propTypes.string.isRequired,
  repos: propTypes.array.isRequired
}
export default UserRepo
