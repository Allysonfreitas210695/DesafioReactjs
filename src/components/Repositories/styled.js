import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  
`;

WrapperTabList.tabsRole = 'Tablist';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  font-weight: bold;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #FFF;

  margin: 8px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: green;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px black ;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  display: none;
  margin-top: -5px;

  &.is-selected{
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;