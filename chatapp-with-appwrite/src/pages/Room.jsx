import React, { useEffect, useState } from 'react';
import client, { COLLECTION_ID, DATABASE_ID, databases } from '../appwriteConfig';
import { ID, Query, Role, Permission } from 'appwrite';
import { Trash2 } from 'react-feather';
import Header from '../components/Header';
import { useAuth } from '../utiles/AuthContext';

export default function Room() {
   const { user } = useAuth();

   const [messages, setMessages] = useState([]);
   const [loading, setLoading] = useState(false);
   const [messageBody, setMessageBody] = useState('');

   useEffect(() => {
      getMessage();
   }, []);

   useEffect(() => {
      const unsubscribe = client.subscribe(
         `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
         (res) => {
            // console.log('realtime:', res);
            if (res.events.includes('databases.*.collections.*.documents.*.create')) {
               console.log('created Message');
               setMessages((prev) => [res.payload, ...prev]);
            }
            if (res.events.includes('databases.*.collections.*.documents.*.delete')) {
               console.log('deleted Message!!!');
               setMessages((prev) => messages.filter((item) => item?.$id !== res.payload?.$id));
            }
         }
      );
      return () => unsubscribe();
   }, [messages]);

   const getMessage = async () => {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
         Query.orderDesc('$createdAt'),
         Query.limit(20),
      ]);
      setMessages(response?.documents);
   };

   // Add message to database
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      let payload = {
         user_id: user?.$id,
         username: user?.name,
         body: messageBody,
      };

      let permissions = [Permission.write(Role.user(user?.$id))];

      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), payload, permissions);
      setMessageBody('');
      setLoading(false);
   };

   // delete message from database
   const deleteMessage = async (id) => {
      setLoading(true);
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id).then(() => setLoading(false));
   };
   console.log(user);
   console.log(messages);
   return (
      <div className='container'>
         <Header />
         <div className='room--container'>
            <form id='message--from' onSubmit={handleSubmit}>
               <div>
                  <textarea
                     required
                     maxLength='1000'
                     placeholder='Say something...'
                     onChange={(e) => {
                        setMessageBody(e.target.value);
                     }}
                     value={messageBody}></textarea>
               </div>
               {/* time 38 min */}
               <div className='send-btn--wrapper'>
                  <input className='btn btn--secondary' type='submit' value='Send' />
               </div>
            </form>

            <div className='room--container'>
               {loading && <p className='loading'> Loading... </p>}
               <div>
                  {messages.map((message) => (
                     <div
                        key={message.$id}
                        className={`message--wrapper ${
                           message?.username === user?.name ? 'start' : 'end'
                        }`}>
                        <div className='message--header'>
                           <p>
                              {message?.username === user?.name ? (
                                 <span style={{ color: '#03C988', fontWeight: 600 }}>
                                    {user?.name} ●
                                 </span>
                              ) : (
                                 <span>{message?.username}</span>
                              )}
                              <small className='message-timestamp'>
                                 {new Date(message?.$createdAt).toLocaleString()}
                              </small>
                           </p>
                           {message?.$permissions?.includes(`delete(\"user:${user?.$id}\")`) && (
                              <Trash2
                                 className='delete--btn'
                                 onClick={() => {
                                    deleteMessage(message?.$id);
                                 }}
                              />
                           )}
                        </div>
                        <div className='message--body'>
                           <span>{message.body}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
