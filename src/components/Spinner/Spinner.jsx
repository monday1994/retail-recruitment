import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {secondaryColor} from '../../assets/styles/colors';
import {StyledCircleSpinnerContainer} from './spinner.styles';

export const CircleSpinner = () => {
    return <StyledCircleSpinnerContainer data-testid={'spinner-test-id'}>
        <ClipLoader color={secondaryColor} loading={true} />
    </StyledCircleSpinnerContainer>
};

