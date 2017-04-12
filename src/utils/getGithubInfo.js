import axios from 'axios'

/**
 * get user info
 * @params username
 */
function getUserInfo( username ) {
  return axios.get(`https://api.github.com/users/${username}`)
}


/**
 * get user repo info
 * @params username
 */
function getUserRepos( username ){
  return axios.get(`https://api.github.com/users/${username}`)
}


function getGithubInfo( username ){
  return axios.all( [getUserInfo(username),getUserRepos(username)] )
  .then( arr=>{
    let data =  {
      userInfo: arr[0].data,
      userRepos: arr[1].data
    }

    console.log(data);
    return data
  });
}

export default getGithubInfo
