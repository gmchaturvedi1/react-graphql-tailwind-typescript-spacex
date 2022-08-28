import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';

interface Props {
 data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
 if (!data.launch) {
  return <div>No launch available</div>;
 }

 return (
  <>
   <div className='bg-white'>
    <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
     <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
      <div className='space-y-5 sm:space-y-4'>
       <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Flight {data.launch.flight_number}</h2>
       <p className='text-xl text-gray-500'>{data.launch.launch_success ? 'Success' : 'Fail'}</p>
      </div>

      <div className='lg:col-span-2'>
       <ul role='list' className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
        {!!data.launch.links &&
         !!data.launch.links.flickr_images &&
         data.launch.links.flickr_images.map((image, i) =>
          image ? <img key={i} className='w-16 h-16 rounded-full lg:w-20 lg:h-20' src={image} alt='' /> : <div key={i}>No Image</div>
         )}
       </ul>
      </div>
     </div>
     <div className=''></div>
    </div>
   </div>
  </>
 );
};

export default LaunchProfile;

//   <div className={className}>
//    <div className={`${className}__status`}>
//     <span>Flight {data.launch.flight_number}: </span>
//     {data.launch.launch_success ? (
//      <span className={`${className}__success`}>Success</span>
//     ) : (
//      <span className={`${className}__failed`}>Failed</span>
//     )}
//    </div>
//    <h1 className={`${className}__title`}>
//     {data.launch.mission_name}
//     {data.launch.rocket && ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
//    </h1>
//    <p className={`${className}__description`}>{data.launch.details}</p>
//    {!!data.launch.links && !!data.launch.links.flickr_images && (
//     <div className={`${className}__image-list`}>
//      {data.launch.links.flickr_images.map((image, i) =>
//       image ? <img src={image} className={`${className}__image`} key={image} alt={`${data.launch?.mission_name} ${i}`} /> : null
//      )}
//     </div>
//    )}
//   </div>;
