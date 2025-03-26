import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Last from './components/Last'
function App(): JSX.Element {
  return (
    <>
      <TabGroup>
        <TabList>
          <Tab>مشخصات پایوران</Tab>
          <Tab>تنظیم لوحه</Tab>
          <Tab>لوحه های گذشته</Tab>
          <Tab>تنظیمات</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>مشخصات پایوران</TabPanel>
          <TabPanel>تنظیم لوحه</TabPanel>
          <TabPanel>
            <Last />
          </TabPanel>
          <TabPanel>تنظیمات</TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  )
}

export default App
