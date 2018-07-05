import React from 'react';

const Feed = ({ getUsersList, getUsersDetails }) => (
  <div>

      <button onClick={getUsersList}>get user list</button>
      <button onClick={getUsersDetails}>get user Details</button>
      <div className="ui  list">

          <div className="item">
              <i className=" large user circle icon "  alt='user img'/>
              <div className="content">
                  <a className="header">Rachel</a>
                  <div className="description">Last seen Eating <a><b>Burger</b></a> 21 mins ago.</div>
              </div>
          </div>

      </div>

  </div>

)

export default Feed;