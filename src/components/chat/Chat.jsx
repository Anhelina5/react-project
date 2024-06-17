import { useState } from "react";
import './chat.scss';

function Chat(){
  const [chat, setChat] = useState(true)
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
            <span>Kulbabka</span>
            <p>
                Internet is a great invention..
            </p>
        </div>

        <div className="message">
            <img src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
            <span>Kulbabka</span>
            <p>
                Internet is a great invention..
            </p>
        </div>

        <div className="message">
            <img src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
            <span>Kulbabka</span>
            <p>
                Internet is a great invention..
            </p>
        </div>

        <div className="message">
            <img src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
            <span>Kulbabka</span>
            <p>
                Internet is a great invention..
            </p>
        </div>

        <div className="message">
            <img src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
            <span>Kulbabka</span>
            <p>
                Internet is a great invention..
            </p>
        </div>

      </div>
      {chat && (
        <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img
                         src="https://cikavosti.com/wp-content/uploads/2018/10/f8b121865b9d8b83982029b93a8dc7be.jpg" alt="" />
                         Kulbabka
                </div>
                <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
                <p>Internet is a great invention</p>
                <span>1 hour ago</span>
            </div>
        
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Chat;
