// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:5001');
//     ws.onopen = () => {
//       console.log('WebSocket connection opened');
//     };
//     ws.onmessage = handleMessage;
//     ws.onclose = () => {
//       console.log('WebSocket connection closed');
//     };
//     ws.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };
//     setWs(ws);

//     return () => {
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []);

//   function handleMessage(e) {
//     console.log('New message', e);
//     console.log(e.data);
//   }

//   return (
//     <div className="flex h-screen">
//       <div className="bg-white w-1/3">
//         Contacts
//       </div>
//       <div className="bg-purple-100 w-2/3 p-2 flex flex-col">
//         <div className='flex-grow'>messages with selected person</div>
//         <div className='flex gap-2'>
//           <input 
//             type="text" 
//             placeholder="Type your message here"
//             className='bg-white border p-2 flex-grow ml-2 rounded-lg' 
//           />
//           <button className='p-1 bg-gray-700 text-white mr-2 rounded-lg'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [ws, setWs] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState({});

//   useEffect(() => {
//     const connectWebSocket = () => {
//       const ws = new WebSocket('ws://localhost:5001');
//       ws.onopen = () => {
//         console.log('WebSocket connection opened');
//       };
//       ws.onmessage = handleMessage;
//       ws.onclose = () => {
//         console.log('WebSocket connection closed');
//         setTimeout(connectWebSocket, 3000); // Attempt to reconnect after 3 seconds
//       };
//       ws.onerror = (error) => {
//         console.error('WebSocket error:', error);
//         ws.close();
//       };
//       setWs(ws);
//     };

//     connectWebSocket();

//     return () => {
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []);

//   function showOnlinePeople(peopleArray) {
//     const onlineUsers = {};
//     peopleArray.forEach(({ userId, username }) => {
//       if (userId && username) {
//         onlineUsers[userId] = username;
//       } else {
//         console.warn('Missing userId or username in:', { userId, username });
//       }
//     });
//     setOnlineUsers(onlineUsers);
//   }

//   function handleMessage(e) {
//     try {
//       const messageData = JSON.parse(e.data);
//       console.log('Received message:', messageData);
//       if ('online' in messageData) {
//         showOnlinePeople(messageData.online);
//       }
//     } catch (error) {
//       console.error('Error parsing message data:', error);
//     }
//   }

//   return (
//     <div className="flex h-screen">
//       <div className="bg-white w-1/3">
//         <h2>Online Users</h2>
//         <ul>
//           {Object.keys(onlineUsers).map(userId => (
//             <li key={userId}>{onlineUsers[userId]}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="bg-purple-100 w-2/3 p-2 flex flex-col">
//         <div className='flex-grow'>Messages with selected person</div>
//         <div className='flex gap-2'>
//           <input 
//             type="text" 
//             placeholder="Type your message here"
//             className='bg-white border p-2 flex-grow ml-2 rounded-lg' 
//           />
//           <button className='p-1 bg-gray-700 text-white mr-2 rounded-lg'>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';

const Home = () => {
  const [ws, setWs] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState({});

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket('ws://localhost:5001');
      ws.onopen = () => {
        console.log('WebSocket connection opened');
      };
      ws.onmessage = handleMessage;
      ws.onclose = () => {
        console.log('WebSocket connection closed');
        setTimeout(connectWebSocket, 3000); // Attempt to reconnect after 3 seconds
      };
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.close();
      };
      setWs(ws);
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  function showOnlinePeople(peopleArray) {
    console.log('Received people array:', peopleArray); // Log the received data
    const onlineUsers = {};
    peopleArray.forEach(({ userId, username }) => {
      if (userId && username) {
        onlineUsers[userId] = username;
      } else {
        console.warn('Missing userId or username in:', { userId, username });
      }
    });
    setOnlineUsers(onlineUsers);
  }

  function handleMessage(e) {
    try {
      const messageData = JSON.parse(e.data);
      console.log('Received message:', messageData);
      if ('online' in messageData) {
        showOnlinePeople(messageData.online);
      }
    } catch (error) {
      console.error('Error parsing message data:', error);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3 p-2 pl-4 pr-4">
      <ul className="space-y-4 p-6 py-2 bg-white shadow-lg rounded-xl max-w-md mx-auto">
  {Object.keys(onlineUsers).map(userId => (
    <li key={userId} className="flex items-center space-x-4 p-4 border-b border-gray-200 hover:bg-gray-100 transition ease-in-out duration-300 rounded-lg cursor-pointer">
     <Avatar username={onlineUsers[userId]} userId={userId}/>
      <span className="text-gray-800 font-semibold">{onlineUsers[userId]}</span>
    </li>
  ))}
</ul>


      </div>
      <div className="bg-purple-100 w-2/3 p-2 flex flex-col">
        <div className='flex-grow'>Messages with selected person</div>
        <div className='flex gap-2'>
          <input 
            type="text" 
            placeholder="Type your message here"
            className='bg-white border p-2 flex-grow ml-2 rounded-lg' 
          />
          <button className='p-1 bg-gray-700 text-white mr-2 rounded-lg'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
