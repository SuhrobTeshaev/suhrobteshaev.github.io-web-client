import Auth from "../auth/Auth";
import dateIcon from '../../assets/Icon.png';
import salonIcon from "../../assets/Icon2.png";
import masterIcon from "../../assets/Icon3.png";
const BookingDetails: React.FC = () => {
  return (
    <div className=" max-w-xl w-full mx-auto bg-white shadow-lg ">
      {/* Детали записи */}
      <div className="mb-6 px-6">
        <h2 className="bigMobile:text-2xl text-base font-medium mb-4">
          Детали записи
        </h2>
        <div className="mb-4 flex gap-3">
          <img src={dateIcon} alt="dateIcon" className="w-12 h-12" />
          <div>
            <p className="text-sm  text-[#8C8C8C]">Дата и время:</p>
            <p className="bigMobile:text-base text-sm font-medium">
              ПН, 12 окт (9:30)
            </p>
          </div>
        </div>
        <div className="mb-4 flex gap-3">
          <img src={salonIcon} alt="dateIcon" className="w-12 h-12" />
          <div>
            <p className="text-sm  text-[#8C8C8C]">Название красоты:</p>
            <p className="bigMobile:text-base text-sm font-medium">
              Студия красоты "Насиба"
            </p>
          </div>
        </div>
        <div className="mb-4 flex gap-3">
          <img src={masterIcon} alt="dateIcon" className="w-12 h-12" />
          <div>
            <p className="text-sm  text-[#8C8C8C]">Парикмахер-стилист:</p>
            <p className="bigMobile:text-base text-sm font-medium">
              Наргис Ибодулаева
            </p>
          </div>
        </div>
      </div>

      {/* Услуги */}
      <div className="mb-6">
        <h2 className="bigMobile:text-2xl text-base  font-medium mb-4 px-6">Услуги</h2>
        <div className="border-t border-b divide-y px-6 min-h-[calc(4*2.4rem)] max-h-[calc(4*2.4rem)] overflow-y-auto">
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="text-base text-[#141414]">Стрижка / Лысина</p>
              <p className="text-sm text-[#8C8C8C]">Мужская стрижка</p>
            </div>

            <div className="flex flex-col ">
              <p className="text-base text-[#141414]">50 сом.</p>
              <p className="text-sm text-[#8C8C8C]">1 час</p>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="text-base text-[#141414]">Стрижка / Лысина</p>
              <p className="text-sm text-[#8C8C8C]">Мужская стрижка</p>
            </div>

            <div className="flex flex-col ">
              <p className="text-base text-[#141414]">50 сом.</p>
              <p className="text-sm text-[#8C8C8C]">1 час</p>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="text-base">Стрижка / Лысина</p>
              <p className="text-sm text-gray-500">Мужская стрижка</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-[#141414] text-xs font-normal ">50 сом.</p>
              <p className="text-[#8C8C8C] text-xs font-normal">1 час</p>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#F5F5F5] p-2 flex justify-between items-center font-semibold px-6">
          <p>Итого:</p>
          <div>
            <p className="text-base font-medium text-right">100 сом.</p>
            <p className="text-sm text-[#595959] font-normal text-right">
              2 часа
            </p>
          </div>
        </div>
      </div>
      <Auth />
    </div>
  );
};

export default BookingDetails;