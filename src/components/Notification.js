const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    if(!message.includes("Information")){
    return (
      <div className='successNotification'>
        {message}
      </div>
    )
    }
    return (
      <div className='errorNotification'>
        {message}
      </div>
    )
    
  }
  
  export default Notification