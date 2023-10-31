import { Card, CardContent, CardHeader, Box, Typography } from "@mui/material";
import { CredentialResponse } from "google-one-tap";
type TProps = {
  children: React.ReactNode;
  title: string;
};
const LoginLayout: React.FC<TProps> = ({ children, title }) => {
  function handleCredentialResponse(response: CredentialResponse) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv")!,
      { theme: "outline", size: "medium" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };
  return (
    <Box sx={{ margin: "0 auto", mt: "200px", width: "400px" }}>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ sx: { textAlign: "center" } }}
        />
        <CardContent>{children}</CardContent>
      </Card>
      <Typography margin="20px 0" textAlign="center" color="grey400]">
        Or
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div id="buttonDiv"></div>
      </Box>
    </Box>
  );
};
export default LoginLayout;
