import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';

function ProfilePage(){
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: 
              <img 
                src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" 
                alt=""
              /> 
            </span>
            <span>Username: <b>Kulbabka</b></span>
            <span>E-mail: <b>kkk1298@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />


        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
