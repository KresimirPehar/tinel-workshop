import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import LoadingSpinnerContainer from './LoadingSpinner.style';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <ClipLoader size='50px' />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
