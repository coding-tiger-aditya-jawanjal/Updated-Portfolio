import React from "react";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import AboutAdmin from "../components/AboutAdmin";
import SkillsAdmin from "../components/SkillsAdmin";
import ContactsAdmin from "../components/ContactsAdmin";
import ProjectsAdmin from "../components/ProjectsAdmin";

const AdminPanel = () => {
  return (
    <>
      <Heading textAlign={"center"} as={"h2"} pb={"10"}>
        Update Portfolio
      </Heading>
      <Tabs mt={"20"} align="center" pb={"24"}>
        <TabList>
          <Tab>About</Tab>
          <Tab>Skills</Tab>
          <Tab>Contact</Tab>
          <Tab>Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AboutAdmin />
          </TabPanel>
          <TabPanel>
            <SkillsAdmin />
          </TabPanel>
          <TabPanel>
            <ContactsAdmin />
          </TabPanel>
          <TabPanel>
            <ProjectsAdmin />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AdminPanel;
