import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClickScreen = () => {
    navigate("/customer/scan-product");
  };
  return (
    <div
      className="flex  flex-col items-center justify-between py-20 h-full cursor-pointer "
      onClick={handleClickScreen}
    >
      <div className="bg-white/30 p-8 rounded-md backdrop-blur-md ">
        <p className="lg:text-5xl md:text-3xl font-bold text-[#f2f4f6]  ">
          PaymentKiosk İle Hızlı Alıverişler Dileriz
        </p>
      </div>

      <div className="bg-white/30 p-8 rounded-md backdrop-blur-md animate-bounce ">
        <p className="lg:text-3xl md:text-2xl font-medium text-[#f2f4f6]  ">
          Başlamak İçin Tıklayın
        </p>
      </div>
    </div>
  );
};

export default Welcome;
