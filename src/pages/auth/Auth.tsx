


const Auth: React.FC = () => {
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
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Введите имя"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1  text-[#757575]">
              Фамилия
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Введите фамилию"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-[#757575]">
              Номер телефона*
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md"
              placeholder="+992 Введите номер телефона"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1  text-[#757575]">
              Электронная почта
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Введите электронную почту"
            />
          </div>
          <div className="">
            <label className="text-base bigMobile:text-xl  font-medium mb-2">
              Комментарий (опционально)
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              placeholder="Напишите ваши пожелания"
              rows={3}
            ></textarea>
          </div>
        </form>
      </div>
    );
};

export default Auth;
