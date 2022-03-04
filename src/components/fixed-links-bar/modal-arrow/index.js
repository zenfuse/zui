const ModalArrow = ({ open }) => (
  <div
    style={{ width: `50px` }}
    className={`shrink-0 flex relative h-1 items-center justify-center ${
      open ? `-translate-y-2` : ``
    }`}
  >
    <div
      style={{ width: `30px` }}
      className={`bg-white w-[30px] absolute -left-1 transition duration-200 rounded-bl-full rounded-tl-full h-1 ${
        open ? `-rotate-12` : `rotate-0`
      }`}
    />
    <div
      style={{ width: `30px` }}
      className={`bg-white absolute -right-1 transition duration-200  rounded-br-full rounded-tr-full h-1 ${
        open ? `rotate-12` : `rotate-0`
      }`}
    />
  </div>
);

export default ModalArrow;
