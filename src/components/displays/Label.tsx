import { allDisplays } from '../../lookups/Displays';

import { Displays_Emoji } from '../../types';

type LabelProps = {
  emoji: Displays_Emoji;
};

function Label({ emoji }: LabelProps) {
  return (
    <div
      className='Label flex items-center cursor-default text-3xl px-1'
      title={allDisplays[0][emoji]}
    >
      {emoji}
    </div>
  );
}

export default Label;
