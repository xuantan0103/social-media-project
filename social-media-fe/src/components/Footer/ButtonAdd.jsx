import React, {useState} from 'react';

export const Button = (props) => {
  const [isShow, setIsShow] = useState(false);
  const requestAdd = (id) => {
    setIsShow(true)
    props.addFriend(id)
  }

  return(
    <React.Fragment>
      {isShow ? <button>Invitation sent</button> : <button onClick={() => requestAdd(props.id)}>Add Friend</button>}
    </React.Fragment>
  )
}