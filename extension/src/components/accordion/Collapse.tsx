import React, { useState } from 'react';

const Collapse: React.FC = () => {
    const dummyData = [
        {
            name: "facebook.com",
            value: "*********"
        },
        {
            name: "instagram.com",
            value: "**********"
        },
        {
            name: "github.com",
            value: "************"
        },
        {
            name: "dexscreener.com",
            value: "*********"
        }
    ]
    
    const [secrets, setSecrets] = useState(dummyData)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
      
    return (
        <>
            {secrets.map((secret, index) => (
                <div className="collapse collapse-arrow bg-background2 border-solid border-[0.5px] my-2 border-text2" key={index}>
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium ">
                        <div className=' w-2/4 flex justify-center items-center	gap-10'>
                        <img src={`https://${secret.name}/favicon.ico`} className='max-w-4 max-h-4 bg-yellow'/>
                        {secret.name}
                        </div>
                        
                    </div>
                    
                    <div className="collapse-content	" >
                    <div className='w-full flex justify-between	 gap-20 '>
                        
                        <div className=" py-2 px-5 w-3/6 rounded-md ml-2.5 bg-text3 flex">
                         {secret.value}
                        </div>
                        
                        <div className=' width-full flex gap-10 items-end'>
                        <button onClick = {togglePopup} className="btn  btn-sm rounded-xl text-primary1 border-solid border-0.25 border-text2">Edit</button>
                        <button onClick = {togglePopup} className="btn  btn-sm rounded-xl text-primary1 border-solid border-0.25 border-text2"	>Delete</button>
                    
                        </div>
                        

                    </div>
                    
                    </div>
                    
                </div>
                
            ))}
        </>
    )
};

export default Collapse;
