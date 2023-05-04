import Image from 'next/image';
import styled from 'styled-components';

import theme from '@/styles/theme';

import Svg from '../../svg';

export const AddImageLabel = styled.label`
  width: 150px;
`;

export const AddImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  border: 1px solid ${theme.color.g300};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDeleteButton = styled(Svg.XCircle)`
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 1;
  background-color: #fff;
  border-radius: 100%;
`;

export const PreviewImage = styled(Image)`
  border-radius: inherit;
`;

export const FileInput = styled.input`
  display: none;
`;
