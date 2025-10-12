import React, { useState } from "react";
import axios from 'axios';
import {
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Alert,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const {name,email,password} = formData;
    console.log(name,email,password);
    
    // Add your signup logic here
    axios.post('http://localhost:3000/signup',{
      name,
      email,
      password
    })
   .then( (response)=>{
    // console.log(response.data);
   })
   .catch((error)=>{
    console.log(error);
   })

    console.log("Signup data:", formData);
    setSuccess("Account created successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    setSuccess("");
  };
  

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar
              sx={{
                bgcolor: "secondary.main",
                mb: 2,
                width: 56,
                height: 56,
              }}
            >
              <PersonAddIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Create Account
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Join us today - it only takes a minute
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                variant="outlined"
                required
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                variant="outlined"
                required
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                variant="outlined"
                required
              />

              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                variant="outlined"
                required
              />

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                    },
                  }}
                >
                  Create Account
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  size="large"
                  onClick={handleReset}
                  sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
                >
                  Reset
                </Button>
              </Box>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{" "}
                  <Link
                    component="button"
                    type="button"
                    onClick={() => navigate("/login")}
                    sx={{ textDecoration: "none" }}
                  >
                    Sign in here
                  </Link>
                </Typography>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
