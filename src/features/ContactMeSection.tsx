import React from 'react'

const ContactMeSection = ()=>{
    return(
        <div className='w-300 pb-16'>
            <div className="grid gap-x-6 gap-y-4 grid-cols-2 grid-rows-2 auto-rows-min">
                <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col gap-1">
                    <label htmlFor="nameInput" className='pl-1 font-bold text-slate-500'>Name</label>
                    <input type="text" name="" id="nameInput" className='flex-1 rounded-xl border-2 border-slate-200 px-4'/>
                </div>
                <div className="col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col gap-1">
                    <label htmlFor="emailInput" className='pl-1 font-bold text-slate-500'>Email</label>
                    <input type="email" name="" id="emailInput" className='h-10 rounded-xl border-2 border-slate-200 px-4' />
                </div>                
                <div className="col-start-2 col-end-2 row-span-2 flex flex-col gap-1">
                    <label htmlFor="messageInput" className='pl-1 font-bold text-slate-500'>Message</label>
                    <textarea className="w-full flex-1 rounded-xl border-2 border-slate-200 px-4" name="" id="messageInput" ></textarea>
                </div>

            </div>

        </div>
    );
}

export default ContactMeSection