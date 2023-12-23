import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentLeft}>
          <div className={style.company}>
            <img
              src="/assests/images/Screenshot_2023-11-15_143213-removebg-preview.png"
              width="40px"
              height="40px"
            />
            <span>Magic Post</span>
          </div>
          <div className={style.bold}>CÔNG TY CỔ PHẦN GIAO HÀNG MAGIC POST</div>
          <div>
            <div className={style.ul1}>
              <p>Về chúng tôi</p>
              <p>Tuyển dụng</p>
              <p>Dịch vụ</p>
            </div>
            <div className={style.ul1}>
              <p>Quy định chung</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
        </div>
        <div className={style.contentRight}>
          <span className={style.bold}>
            CÔNG TY CỔ PHẦN GIAO HÀNG MAGIC POST
          </span>
          <div>
            <span>
              Giấy CNĐKKD: 0106181807 - Ngày cấp 21/05/2013, đăng ký thay đổi
              lần 09 ngày 04/06/2020.
            </span>
            <span>
              Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư TP
              Hà Nội
            </span>
          </div>

          <div>
            <span>
              Giấy phép bưu chính số 346/GP-BTTTT do Bộ TT&TT cấp này 23/08/2019
            </span>
            <span>
              Văn bản xác nhận thông báo hoạt động bưu chính số 2784/XN-BTTTT do
              Bộ TT&TT cấp ngày 19/08/2019
            </span>
            <span>
              Văn bản xác nhận thông báo hoạt động bưu chính của 62 chi nhánh
              trên toàn quốc
            </span>
          </div>
          <div>
            <span>
              Địa chỉ trụ sở chính: Tòa nhà VTV, số 8 Phạm Hùng, phường Mễ Trì,
              quận Nam Từ Liêm, thành phố Hà Nội, Việt Nam
            </span>
            <span>Hotline: 0775313999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
