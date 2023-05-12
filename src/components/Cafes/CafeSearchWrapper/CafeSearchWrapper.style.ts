import styled from 'styled-components';

import svg from '@/components/svg';
import theme from '@/styles/theme';

interface SearchModeProps {
  borderVariant: 'main' | 'default';
}

export const CafeSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px;
`;

export const CafeSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 8px 0px;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 110px;
  gap: 15px;
  animation: longerHeight 700ms;
  overflow: hidden;

  @keyframes longerHeight {
    from {
      height: 36px;
    }
    to {
      height: 110px;
    }
  }
`;

export const SearchModeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchMode = styled.div<SearchModeProps>`
  padding: 8px;
  border-bottom: 1px solid
    ${(props) => (props.borderVariant === 'main' ? theme.color.main : 'black')};
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchButton = styled(svg.Search)`
  position: absolute;
  right: 16px;
  bottom: 12px;
`;

export const SearchLanding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
