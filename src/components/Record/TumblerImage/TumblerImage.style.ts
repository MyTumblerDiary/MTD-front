import Image from 'next/image';

import styled from 'styled-components';
import theme from '@/styles/theme';

export const AddImageLabel = styled.label`
  width: 150px;
`;

export const AddImageButton = styled.div`
  height: 150px;
  border-radius: 8px;
  border: 1px solid ${theme.color.g300};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImage = styled(Image)`
  border-radius: 8px;
`;

export const PreviewImageContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    border-radius: 100%;
  }
`;
