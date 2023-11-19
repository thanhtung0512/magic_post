import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link as ChakraLink,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return <div>This field is required!</div>;
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          setLoading(false);
          setMessage("Signed in successfully");
          setTimeout(() => {
            setMessage("");
            navigate("/");
            window.location.reload();
          }, 2000); // Display success message for 2 seconds
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img
          src="Screenshot_2023-11-15_143213-removebg-preview.png"
          width="200"
          height="200"
        ></img>
        <div className={style.CompanyName}>Magic Post</div>
      </div>
      <h2 className={style.title}>Đăng Nhập</h2>
      <form className={style.form} onSubmit={handleLogin} ref={form}>
        <div className={style.group}>
          <label htmlFor="account">Tên tài khoản</label>
          <input
            id="account"
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
          />
        </div>
        <div className={style.group}>
          <label htmlFor="password">Mật Khẩu</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>
        <div className={style.group}>
          <button ref={checkBtn} disabled={loading}> 
            {loading ? (
              <>
                Signing you in... <Spinner size="sm" ml={2} />
              </>
            ) : (
              "Đăng nhập"
            )}
          </button>
          {message && (
            <Flex justifyContent="center" alignItems="center" mt={2}>
              <Text color="teal" fontSize="md">
                {message}
              </Text>
            </Flex>
          )}

          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </div>
      </form>
      <div className={style.redirect}>
        <p>Bạn chưa có tài khoản ?</p>
        <Link to="/register">Tạo Tài khoản</Link>
      </div>
      <div className={style.license}>
        Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo
        mật của MagicPost.
      </div>
    </div>
  );
};

export default Login;
