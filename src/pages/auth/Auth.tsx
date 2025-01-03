import { useState } from "react";

const Auth: React.FC<{
  handleSendCode: any;
  handleConfirmCode: any;
  handleSubmit: any;
  register: any;
  isSendingCode: boolean;
}> = ({
  handleSendCode,
  handleConfirmCode,
  isSendingCode,
  register,
  handleSubmit,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(event.target.value.trim() !== "");
  };



  return (
    <div className="pb-2 px-6">
      <h2 className=" text-base bigMobile:text-2xl font-semibold mb-4">
        Ваши данные
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-normal mb-1 text-[#757575]">
            Имя*
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full p-2 outline-none border rounded-md"
            placeholder="Введите имя"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1  text-[#757575]">Фамилия</label>
          <input
            type="text"
            {...register("surname")}
            className="w-full p-2 outline-none border rounded-md"
            placeholder="Введите фамилию"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm  mb-1 text-[#757575]">
            Номер телефона*
          </label>
          <div className="flex w-full h-11   gap-2">
            <input
              type="tel"
              {...register("phone", { required: true })}
              className="w-full px-2 outline-none border rounded-md max-w-[22.25rem]"
              placeholder="+992 Введите номер телефона"
            />
            <button
              type="submit"
              disabled={isSendingCode}
              onClick={handleSubmit(handleSendCode)}
              className="bg-[#E87248] text-white rounded-xl px-4 py-3  w-full max-w-[11.65rem]  justify-end"
            >
              {isSendingCode ? "Отправка..." : "Отправить код"}
            </button>
          </div>
        </div>
        <div className="mb-4 relative ">
          <label className="block text-sm  mb-1 text-[#757575]">
            Введите код
          </label>
          <input
            type="text"
            {...register("code")}
            className="w-full p-2 border outline-none rounded-md "
            onChange={handleInputChange}
            placeholder="Введите код подтверждения"
          />
          <span
            onClick={handleSubmit(handleConfirmCode)}
            className={`absolute top-2/3 right-3 transform -translate-y-1/2 px-3 py-1 rounded-md 
          ${
            isFilled
              ? " text-orange-500  cursor-pointer"
              : "text-gray-400 cursor-not-allowed"
          }`}
          >
            Подтвердить
          </span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
