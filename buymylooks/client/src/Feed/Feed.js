import React from 'react';

const Feed = ({ signOut }) => (
  <div>
		<button onClick={signOut}>
			Logout
		</button>
	</div>
)

export default Feed;