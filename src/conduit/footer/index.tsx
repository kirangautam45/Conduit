import { COLOR } from '../../theme/color';
export const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        background: 'linear-gradient(#485563, #29323c)',
        textAlign: 'center',
        padding: '15px',
        bottom: '0px',
      }}
    >
      <div
        style={{
          padding: '15px',
          zIndex: '999',
          color: COLOR.White,
          display: 'block',
        }}
      >
        Fork on GitHub
      </div>
    </div>
  );
};
