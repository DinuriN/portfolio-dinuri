import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { desc } from 'motion/react-client';

const Project = ({title, description, subdescription, href, image, tags, setPreview,}) => {
    const [isHidden, setIsHidden]=useState(false);
  return (
    <>
    <div 
    className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'
    onMouseEnter={()=>setPreview(image)}
    onMouseLeave={()=>setPreview(null)}
    >
    <div>
      <p className='text-2xl'>{title}</p>
      <div className='flex gap-5 mt-2 text-sand'>
        {tags.map((tag)=>(
            <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      </div>
      <button 
      onClick={()=>setIsHidden(true)}
      className='flex items-center gap-1 cursor-pointer hover-animation'>
        Read More
        <img src="public/assets/arrow-right.svg" className='w-5'/>
      </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    {isHidden && (<ProjectDetails 
    title={title} 
    description={description} 
    subdescription={subdescription}
    image={image}
    tags={tags}
    href={href}
    closeModel={()=>setIsHidden(false)}
    />)}
    </>
  );
}

export default Project;
