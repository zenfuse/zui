const NavbarUnderline = ({ active }) => (
  <div
    className={`${underlineBaseClasses} ${
      active ? `bg-blue-650` : `bg-transparent`
    }`}
  />
);

export default NavbarUnderline;

const underlineBaseClasses =
  "absolute group-hover:bg-blue-650 w-full bottom-0 rounded-full transition duration-200 mx-auto translate-y-px h-[3px]";
