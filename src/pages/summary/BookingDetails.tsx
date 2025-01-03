import Auth from "../auth/Auth";
import dateIcon from '../../assets/Icon.png';
import salonIcon from "../../assets/Icon2.png";
import masterIcon from "../../assets/Icon3.png";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { useGetSalonBySlugQuery } from "../../api/SalonApi";
import deleteIcon from '../../assets/trash.png'

interface Service {
  name: string;
  description?: string;
  price: number;
  duration: number;
  id: number;
}
const BookingDetails: React.FC<{
  selectedMaster: any;
  selectedDate: any;
  selectedTime: any;
  selectedServices: Service[];
  setSelectedServices: any;
  handleSendCode: any;
  handleConfirmCode: any;
  register: any;
  handleSubmit: any;
  isSendingCode: boolean;
  comment: string;
  setComment: any;
}> = ({
  selectedMaster,
  selectedDate,
  selectedTime,
  selectedServices,
  handleSendCode,
  handleConfirmCode,
  isSendingCode,
  setSelectedServices,
  comment,
  setComment,
  register,
  handleSubmit,
}) => {
  const slug = "ulybkaaa";
  if (!selectedMaster) {
    return <p>Мастер не выбран. Пожалуйста, выберите мастера.</p>;
  }
  const { data: salonData} = useGetSalonBySlugQuery(slug);
  const salon = salonData?.data;
  const total = selectedServices.reduce(
    (acc, service) => {
      return {
        price: acc.price + service.price,
        duration: acc.duration + service.duration,
      };
    },
    { price: "", duration: "" }
  );

  const formattedDateTime = `${format(selectedDate, "eee", { locale: ru })
    .slice(0, 2)
    .toUpperCase()}, ${format(selectedDate, "dd MMM", {
    locale: ru,
  })} (${selectedTime})`;

  const handleDeleteService = (serviceId: number) => {
    setSelectedServices((prevServices: any[]) =>
      prevServices.filter((service) => service.id !== serviceId)
    );
  };

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
              {formattedDateTime}
            </p>
          </div>
        </div>
        <div className="mb-4 flex gap-3">
          <img src={salonIcon} alt="dateIcon" className="w-12 h-12" />
          <div>
            <p className="text-sm  text-[#8C8C8C]">Название красоты:</p>
            <p className="bigMobile:text-base text-sm font-medium">
              {salon.name}
            </p>
          </div>
        </div>
        <div className="mb-4 flex gap-3">
          <img src={masterIcon} alt="dateIcon" className="w-12 h-12" />
          <div>
            <p className="text-sm  text-[#8C8C8C]">Парикмахер-стилист:</p>
            <p className="bigMobile:text-base text-sm font-medium">
              {selectedMaster.name} {selectedMaster.surname}
            </p>
          </div>
        </div>
      </div>

      {/* Услуги */}
      <div className="mb-6">
        <h2 className="bigMobile:text-2xl text-base  font-medium mb-4 px-6">
          Услуги
        </h2>
        <div className="border-t border-b divide-y px-6 min-h-[calc(4*2.4rem)] max-h-[calc(4*2.4rem)] overflow-y-auto">
          {selectedServices.map((service, index) => (
            <ServiceRow
              key={index}
              name={service.name}
              description={service.description}
              price={service.price}
              duration={service.duration}
              onDelete={() => handleDeleteService(service.id)}
            />
          ))}
        </div>
        <div className=" w-full bg-[#F5F5F5] p-2 flex justify-between items-center font-semibold px-6">
          <p>Итого:</p>
          <div>
            <p className="text-base font-medium text-right">
              {total.price} сом.
            </p>
            <p className="text-sm text-[#595959] font-normal text-right">
              {total.duration} минут
            </p>
          </div>
        </div>
      </div>
      <Auth
        handleSendCode={handleSendCode}
        handleConfirmCode={handleConfirmCode}
        register={register}
        handleSubmit={handleSubmit}
        isSendingCode={isSendingCode}
      />
      <div className="max-w-xl p-6 w-full mx-auto">
        <label className="text-base bigMobile:text-xl  font-medium mb-2">
          Комментарий (опционально)
        </label>
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Напишите ваши пожелания"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

// const DetailRow: React.FC<{ icon: string; title: string; value: string }> = ({
//   icon,
//   title,
//   value,
// }) => (
//   <div className="mb-4 flex gap-3">
//     <img src={icon} alt="icon" className="w-12 h-12" />
//     <div>
//       <p className="text-sm text-[#8C8C8C]">{title}</p>
//       <p className="bigMobile:text-base text-sm font-medium">{value}</p>
//     </div>
//   </div>
// );

const ServiceRow: React.FC<{
  name: string;
  description?: string;
  price: number;
  duration: number;
  onDelete: () => void;
}> = ({ name, description, price, duration, onDelete }) => (
  <div className="py-4 flex justify-between items-center">
    <div>
      <p className="text-base text-[#141414]">{name}</p>
      <p className="text-sm text-[#8C8C8C]">{description}</p>
    </div>
    <div className="flex flex-col">
      <p className="text-base text-[#141414]">{price} с</p>
      <p className="text-sm text-[#8C8C8C]">{duration}мин</p>
    </div>
    <button onClick={onDelete} className="text-red-500">
      <img src={deleteIcon} alt="deleteIcon" />
    </button>
  </div>
);

export default BookingDetails;