import React, { useState } from 'react';
import { ReactComponent as Rocket } from '../../../assets/rocket.svg';
import {
  CapsuleButtonWrapper,
  CapsuleButton,
  RocketWrapper,
  LandingPad,
  LandingPadWrapper,
  LandingPadButton,
  LandingPadInput,
} from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function ControlCapsule() {
  const dispatch = useDispatch();
  const regex = /[#$%&]/g;

  const [landingId, setLandingId] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  function fetchCapsules() {
    dispatch({
      type: 'SET_LOADING',
      payload: 'Loading',
    });
    axios
      .get('http://localhost:4000/api/capsules/all')
      .then((responseData) => {
        dispatch({
          type: 'SET_DATA',
          payload: responseData.data.returnData,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SET_ERROR',
          payload: `Error: ${error.response.data.message}`,
        });
      });
  }

  function getInput(e) {
    if (regex.test(e.target.value)) {
      setDisableButton(true);
    } else {
      setLandingId(e.target.value);
      setDisableButton(false);
    }
  }

  function fetchLandingPad() {
    if (regex.test(landingId)) {
      setDisableButton(true);
      dispatch({
        type: 'SET_ERROR',
        payload: 'Error: Input should not contain any of #, $, %, & characters',
      });
    } else {
      dispatch({
        type: 'SET_LOADING',
        payload: 'Loading',
      });
      axios
        .get('http://localhost:4000/api/landing-pad', {
          params: {
            landingId: landingId.toUpperCase(),
          },
        })
        .then((response) => {
          dispatch({
            type: 'SET_DATA',
            payload: [response.data.returnData],
          });
        })
        .catch((error) => {
          dispatch({
            type: 'SET_ERROR',
            payload: `Error: ${error.response.data.message}`,
          });
        });
    }
  }

  return (
    <>
      <CapsuleButtonWrapper>
        <CapsuleButton onClick={fetchCapsules}>Capsules</CapsuleButton>
      </CapsuleButtonWrapper>
      <RocketWrapper>
        <Rocket />
      </RocketWrapper>
      <LandingPad>
        <LandingPadWrapper>
          <LandingPadInput onKeyUp={getInput}></LandingPadInput>
          <LandingPadButton disabled={disableButton} onClick={fetchLandingPad}>
            Landing Pad
          </LandingPadButton>
        </LandingPadWrapper>
      </LandingPad>
    </>
  );
}
