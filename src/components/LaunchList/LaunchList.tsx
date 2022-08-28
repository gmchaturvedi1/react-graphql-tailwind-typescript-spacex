import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';

export interface OwnProps {
 handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
 data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
 <div className='bg-white'>
  <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
   <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
    <div className='space-y-5 sm:space-y-4'>
     <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Launches</h2>
     <p className='text-xl text-gray-500'></p>
    </div>

    <div className='lg:col-span-3'>
     <div className='grid grid-cols-7 gap-2'>
      {!!data.launches &&
       data.launches.map((launch) => (
        <div key={launch?.mission_name} onClick={() => handleIdChange(launch?.flight_number!)}>
         <div className='flex items-center space-x-4 lg:space-x-6 border-2 rounded-lg p-3'>
          {/* <img className='w-16 h-16 rounded-full lg:w-20 lg:h-20' src={person.imageUrl} alt='' /> */}
          <div className='font-medium text-lg leading-6 space-y-1'>
           <h3>{launch?.mission_name} </h3>
           <p className='text-indigo-600'>{launch?.launch_year}</p>
          </div>
         </div>
        </div>
       ))}
     </div>
    </div>
   </div>
  </div>
 </div>
);

export default LaunchList;
