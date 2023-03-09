import React from 'react';
import { COLOR } from '../../theme/color';
import { TYPOGRAPHY } from '../../theme/typography';
const navData = [
  {
    title: 'Home',
  },
  {
    title: 'Sign In',
  },
  {
    title: 'Sign Up',
  },
];

export const Header = () => {
  return (
    <div
      style={{
        padding: '8px 16px',
        backgroundColor: COLOR.White,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          ...TYPOGRAPHY.title.bold,
          paddingLeft: '200px',
          color: COLOR.LimeGreen,
          cursor: 'pointer',
        }}
      >
        conduit
      </div>
      <div
        style={{
          ...TYPOGRAPHY.title.regular,
          paddingRight: '200px',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {navData.map((data, index) => (
          <div
            style={{
              paddingLeft: '32px',
            }}
            key={index}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};
