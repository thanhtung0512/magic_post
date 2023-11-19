import { useNavigate, Link, useLocation } from "react-router-dom";

import style from "./Register.module.css";
// import useTitle from "../../hooks/useTitle";


const Register = () => {
//   useTitle("Register || Đăng ký tài khoản");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onLogin =()=>{
    navigate(from, { replace: true });
  }

  const inputs = [
    {
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Vui lòng nhập tên tài khoản",
      label: "Tên tài khoản",
      pattern: "^[A-z][A-z0-9-_]{3,23}$",
      required: true,
      minLength: 4,
      maxLength: 24,
      title: "Vui lòng nhập tài khoản",
      autoComplete: "username",
      autoFocus: true,
      error:
        "Tên tài khoản từ 4 đến 24 kí tự, bắt đầu bằng chữ cái, gạch chân và gạch ngang được chấp nhận",
    },
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Vui lòng nhập họ tên",
      label: "Họ và tên",
      required: true,
      title: "Vui lòng nhập họ và tên",
      maxLength: 254,
      autoComplete: "name",
      error: "Vui lòng nhập họ tên",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Vui lòng nhập email",
      label: "Email",
      // pattern: ,
      required: true,
      autoComplete: "email",
      maxLength: "254",
      // disablePaste: true, // experimental
      title: 'Vui lòng kiểm tra thông tin trong "Email"',
      error: 'Vui lòng kiểm tra thông tin trong "Email"',
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Nhập mật khẩu",
      label: "Mật khẩu",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$",
      minLength: 8,
      maxLength: 24,
      required: true,
      autoComplete: "password",
      error:
        "Không hợp lệ. Mật khẩu từ 8 đến 24 kí tự, phải bao gồm chữ thường, chữ hoa, số và ít nhất 1 trong các kí tự đặc biệt (!, @, #, $, %)",
    },
    {
      id: "passwordVerification",
      name: "passwordVerification",
      type: "password",
      placeholder: "Vui lòng nhập chính xác",
      label: "Nhập lại mật khẩu",
      //   pattern: formData.password.value,
      required: true,
      autoComplete: "off",
      maxLength: "254",
      disablePaste: true, // experimental
      title:
        'Vui lòng kiểm tra thông tin trong "Mật khẩu" và "Nhập lại mật khẩu" trùng khớp.',
      error:
        'Vui lòng kiểm tra thông tin trong "Mật khẩu" và "Nhập lại mật khẩu" trùng khớp.',
    },
  ];

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
      <h2 className={style.title}>Đăng ký</h2>
      <form className={style.form}>
        <div className={style.input}>
          <label for="username" class="form-label">
            Tên tài khoản
          </label>
          <input
            name="username"
            type="text"
            placeholder="Vui lòng nhập tên tài khoản"
            minlength="4"
            maxlength="24"
            title="Vui lòng nhập tài khoản"
          ></input>
        </div>
        <div className={style.input}>
        <label for="username" class="form-label">
            Họ và tên
          </label>
          <input
            name="username"
            type="text"
            placeholder="Vui lòng nhập họ và tên"
            minlength="4"
            maxlength="24"
            title="Vui lòng nhập họ và tên"
          ></input>
        </div>
        <div className={style.input}>
        <label for="username" class="form-label">
            Email
          </label>
          <input
            name="username"
            type="text"
            placeholder="Vui lòng nhập Email"
            minlength="4"
            maxlength="24"
            title="Vui lòng nhập Email"
          ></input>
        </div>
        <div className={style.input}>
        <label for="username" class="form-label">
            Mật khẩu
          </label>
          <input
            name="username"
            type="text"
            placeholder="Vui lòng nhập mật khẩu"
            minlength="4"
            maxlength="24"
            title="Vui lòng nhập mật khẩu"
          ></input>
        </div>
        <div className={style.input}>
        <label for="username" class="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            name="username"
            type="text"
            placeholder="Vui lòng nhập lại mật khẩu"
            minlength="4"
            maxlength="24"
            title="Vui lòng nhập lại mật khẩu"
          ></input>
        </div>
      </form>
      <div className={style.group}>
          <button onClick={onLogin}>
            Đăng ký
          </button>
        </div>
      <div className={style.redirect}>
        <p>Bạn chưa có tài khoản ?</p>
        <Link to="/login">Đăng nhập</Link>
      </div>
      <div className={style.license}>
        Khi đăng ký, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật
        của MagicPost.
      </div>
    </div>
  );
};

export default Register;
