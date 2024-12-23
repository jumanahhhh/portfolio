import React from 'react';
import { technologies } from '../constants';
import {Wrap} from '../hoc'
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Wrap(Tech, "");
