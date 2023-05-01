import styled from 'styled-components';

import svg from '@/components/svg';

export const CafeSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px 20px 20px;
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
`;

export const SearchModeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchMode = styled.div``;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchButton = styled(svg.Search)`
  position: absolute;
  right: 16px;
  bottom: 12px;
`;
