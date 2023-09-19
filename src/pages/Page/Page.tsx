import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <Box
      sx={{
        flexGrow: "1",
      }}
    ></Box>
  );
};

export default Page;
