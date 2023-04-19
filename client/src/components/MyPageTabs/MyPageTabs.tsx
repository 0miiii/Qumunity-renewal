import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyQuestions from "./MyQuestions/MyQuestions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const MyPageTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          variant="fullWidth"
        >
          <Tab label="Qestions" {...a11yProps(0)} />
          <Tab label="Answers" {...a11yProps(1)} />
          <Tab label="Bookmarks" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyQuestions />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Answers
      </TabPanel>
      <TabPanel value={value} index={2}>
        Bookmarks
      </TabPanel>
    </Box>
  );
};

export default MyPageTabs;
