import { useIndex } from '../../context';

import { allDisplays } from '../../lookups/Displays';

import { Displays_Emoji } from '../../types';

function DisplaysSelector() {
  const { displays, handleDisplaysClick } = useIndex();

  return (
    <div className='DisplaysSelector flex justify-center gap-8'>
      {Object.entries(allDisplays[0]).map(([emoji, text]) => {
        const isActive = displays.includes(emoji as Displays_Emoji);

        return (
          <button
            type='button'
            className={`text-2xl ${!isActive ? 'inactive' : ''} hover:ring-1 sm:text-3xl`}
            title={text}
            onClick={() => handleDisplaysClick(emoji as Displays_Emoji)}
            key={emoji}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}

export default DisplaysSelector;
