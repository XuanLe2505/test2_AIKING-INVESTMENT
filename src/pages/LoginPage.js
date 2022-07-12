import React, { useState } from "react";
import {
  Link,
  Stack,
  Typography,
  Alert,
  IconButton,
  InputAdornment,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink } from "react-router-dom";

import { FCheckbox, FormProvider, FTextField } from "../components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box } from "@mui/system";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: true,
};

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    // reset,
    // setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    let { email, password } = data;

    console.log(email);
    console.log(password);
  };

  return (
    <Box sx={{ bgcolor: "#E5E1E6" }}>
      <Container
        maxWidth="xs"
        sx={{ my: 5, bgcolor: "#fff", borderRadius: "16px", p: 3 }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "poppins",
            pb: 3,
          }}
        >
          LOGIN YOUR ACCOUNT
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.responseError && (
              <Alert severity="error">{errors.responseError.message}</Alert>
            )}

            <FTextField name="email" label="Email address" />

            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FCheckbox name="remember" label="Remember me" />
            <Link
              component={RouterLink}
              variant="subtitle2"
              to="/forgot"
              sx={{ textDecoration: "none", ":hover": { color: "#001440" } }}
            >
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            sx={{
              bgcolor: "#FFA400",
              color: "#000",
              fontWeight: 600,
              ":hover": { bgcolor: "#FE5000" },
              mb: "20px",
            }}
            loading={isSubmitting}
          >
            Login
          </LoadingButton>

          <Alert severity="info">
            Don’t have an account?{" "}
            <Link
              variant="subtitle2"
              component={RouterLink}
              to="/register"
              sx={{ textDecoration: "none", ":hover": { color: "#001440" } }}
            >
              Get started
            </Link>
          </Alert>
        </FormProvider>
      </Container>
    </Box>
  );
}

export default LoginPage;
