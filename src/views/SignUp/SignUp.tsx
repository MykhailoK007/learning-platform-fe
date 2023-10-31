import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PATHS } from "../../commonTypes";

const SignUp = () => {
  return (
    <>
      <Box component="form">
        <TextField
          type="email"
          fullWidth
          size="small"
          margin="normal"
          placeholder="Email"
        />
        <Button fullWidth variant="contained" sx={{ margin: "32px 0" }}>
          Submit
        </Button>
      </Box>
      <Typography color="grey">
        Already have an account?&#160;
        <Link to={PATHS.SIGN_IN}>Sign In</Link>
      </Typography>
    </>
  );
};

export default SignUp;
