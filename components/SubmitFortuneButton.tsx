/* eslint-disable no-console */
import React from 'react';
import { Button } from '@geist-ui/react';

type FortuneSubmission = {
  lyric: string;
  artist: string;
  song: string;
};

const SubmitFortuneButton: React.FC = () => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const fortune = {
      lyric: 'Du blir inte smart av den skiten som du läser',
      artist: 'YESSS',
      song: 'Killarna i Båstad'
    };

    e.preventDefault();
    const res = await fetch('/api/submit-fortune', {
      method: 'POST',
      body: JSON.stringify(fortune)
    });
    // Success if status code is 201
    if (res.status === 201) {
      console.log('Success: Fortune submitted!');
    } else {
      console.log('Error: Fortune not submitted!');
    }
  };

  return (
    <Button
      auto
      type="success"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
      Submit fortune
    </Button>
  );
};

export default SubmitFortuneButton;
