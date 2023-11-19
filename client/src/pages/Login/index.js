import { useNavigate, Link, useLocation } from 'react-router-dom';

import style from './Login.module.css'
// import useTitle from '../../hooks/useTitle'
const Login = () => {

//   useTitle('MagicPost.com | Đăng nhập');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onLogin =()=>{
    navigate(from, { replace: true });
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
      <img
          src="Screenshot_2023-11-15_143213-removebg-preview.png"
          width='200'
          height='200'
        ></img>
        <div className={style.CompanyName}>Magic Post</div>
      </div>
      <h2 className={style.title}>Đăng Nhập</h2>
      <form className={style.form}>
      <div className={style.group}>
          <label htmlFor='account'>Tên tài khoản</label>
          <input id='account' type='text' />
        </div>
        <div className={style.group}>
          <label htmlFor='password'>Mật Khẩu</label>
          <input id='password' type='password' />
        </div>
        <div className={style.group}>
          <button onClick={onLogin}>
            Đăng nhập
          </button>
        </div>
      </form>
      <div className={style.redirect}>
        <p>Bạn chưa có tài khoản ?</p>
        <Link to='/register'>Tạo Tài khoản</Link>
      </div>
      <div className={style.license}>
        Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của MagicPost.
      </div>
    </div>
  );
};
export default Login;
