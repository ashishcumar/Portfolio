import { Box, Grid } from "@chakra-ui/react";
import NameAndAbout from "./components/NameAndAbout";
import WorkExp from "./components/WorkExp";
import ProjectsAndBlogs from "./components/ProjectsAndBlogs";
import NpmPackages from "./components/NpmPackages";
import Blogs from "./components/Blogs";
import TechStack from "./components/TechStack";

function App() {
  return (
    <Grid
      background={"primaryBg"}
      minHeight={"100vh"}
      width={"100vw"}
      padding={'24px'}
    >
      <Box width={{base:"90%",sm:"80%"}} height={'100%'} margin={'auto'}>
        <NameAndAbout />
        <TechStack />
        <WorkExp />
        <NpmPackages />
        <ProjectsAndBlogs />
        <Blogs />
      </Box>
    </Grid>
  );
}

export default App;
