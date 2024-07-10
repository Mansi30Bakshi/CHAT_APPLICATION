// Home.jsx
// LOGIN?SINGUP COMPLETE
// import { connection } from 'mongoose';
// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const[ws,setWs] = useState(null);
//   useEffect(() =>{
//      const ws = new WebSocket('ws://localhost:5001')
//      setWs(ws);
//      ws.addEventListener('message',{handleMessage})
//   },[]);

//    function handleMessage (e){
//        console.log('new message',e);
//        console.log(e.data);
//    }


//   return (
//     <>
//     <div className="flex h-screen">
//       <div className="bg-white w-1/3">
//         Contacts
//       </div>
//       <div className="bg-purple-100 w-2/3 p-2 flex flex-col">
//         <div className='flex-grow'>messages with selected person</div>
//         <div className='flex gap-2'>
//           <input type="text" 
//           placeholder="Type your message here"
//           className='bg-white  border p-2 flex-grow ml-2 rounded-lg'>
//           </input>
//           <button className=' p-1 bg-gray-700 text-white mr-2 rounded-lg'>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
// </svg>


//          </button>
//         </div>

//       </div>
//     </div>
//     </>
//   );
// };

// export default Home;

// import { connection } from 'mongoose';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5001');
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
    ws.onmessage = handleMessage;
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    setWs(ws);

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  function handleMessage(e) {
    console.log('New message', e);
    console.log(e.data);
  }

  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3">
        Contacts
      </div>
      <div className="bg-purple-100 w-2/3 p-2 flex flex-col">
        <div className='flex-grow'>messages with selected person</div>
        <div className='flex gap-2'>
          <input 
            type="text" 
            placeholder="Type your message here"
            className='bg-white border p-2 flex-grow ml-2 rounded-lg' 
          />
          <button className='p-1 bg-gray-700 text-white mr-2 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

