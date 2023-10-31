import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PATHS } from "../../commonTypes";

const SignIn = () => {
  const { register } = useForm();
  return (
    <>
      <Box component="form">
        <TextField
          {...register("email", { required: true })}
          type="email"
          size="small"
          fullWidth
          margin="normal"
          placeholder="Email"
        />
        <TextField
          {...register("password", { required: true })}
          type="password"
          size="small"
          fullWidth
          margin="normal"
          placeholder="Password"
        />
        <Button variant="contained" fullWidth sx={{ margin: "32px 0" }}>
          Submit
        </Button>
      </Box>
      <Typography color="grey">
        Don't have an account?&#160;
        <Link to={PATHS.SIGN_UP}>Sign Up</Link>
      </Typography>
    </>
  );
};
export default SignIn;
