import React from 'react';

const Card= ({id,name,email}) => {
    return (
        <div className=' tc bg-light-blue dib  bw5 br3 pa3 ma2 grow shadow-2'>
            <img alt='robots' className='grow' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2 className='grow'> {name}</h2>
                <p className='grow'>{email}</p>
            </div>
        </div>
    );
}

export default Card;