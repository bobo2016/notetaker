import React, { Component, PropTypes } from 'react'

class SearchGithub extends Component {
  constructor(){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    console.log( this.username.value )

    const username = this.username.value

    this.username.value = ""

    const path = `/profile/${username}`
    this.context.router.push(path)
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={ ref => { this.username = ref}}/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-primary btn-block">Search github</button>
          </div>
        </form>
      </div>
    )
  }
}


SearchGithub.contextTypes = {
  router: PropTypes.object
}

export default SearchGithub
