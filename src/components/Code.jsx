import Editor from "./Editor";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 60vh;
`;

const Code = () => {
  return (
    <Container>
      <Editor heading="HTML" icon="<>" color="#FF3C41" />
      <Editor heading="CSS" icon="*" color="#0EBEFF" />
      <Editor heading="JavaSript" icon="()" color="#FCD000" />
    </Container>
  );
};

export default Code;
