import React from 'react';
import { ConsoleWrapper, MessageDiv, ErrorMessage, ConsolePre } from './styles';
import { useSelector } from 'react-redux';

export default function DisplayConsole() {
  const capsuleData = useSelector((state) => state.spaceData);

  return (
    <ConsoleWrapper>
      {capsuleData.isInitial ? (
        <MessageDiv>
          Please click on Capsules to fetch all the capsule data or enter a
          value inside input field and click on Landing Pad to get landing pad
          data
        </MessageDiv>
      ) : capsuleData.isLoading ? (
        <MessageDiv>Loading...</MessageDiv>
      ) : capsuleData.error ? (
        <ErrorMessage>{capsuleData.errorMessage}</ErrorMessage>
      ) : (
        capsuleData.capsule?.map((data, i) => (
          <ConsolePre key={i}>{JSON.stringify(data, null, 2)}</ConsolePre>
        ))
      )}
    </ConsoleWrapper>
  );
}
