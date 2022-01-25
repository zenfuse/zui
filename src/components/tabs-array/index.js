import Tab from "../ui/tab";

const TabsArray = ({ tabs, isActive, setIsActive }) => {
  return (
    <div className={"flex w-full border-b relative overflow-visible"}>
      <div
        style={{
          width: `${100 / tabs.length}%`,
          bottom: "-1px",
          height: "2px",
          left: `${(100 / tabs.length) * isActive}%`,
          boxShadow:
            "0px 2px 6px rgba(46, 180, 255, 0.3), 0px 15px 12px rgba(60, 120, 255, 0.12), 0px 8px 7px rgba(60, 120, 255, 0.143066), 0px 4px 4px rgba(60, 120, 255, 0.18), 0px 2px 2px rgba(60, 120, 255, 0.24)",
        }}
        className={`absolute bottom-0 bg-blue-primary rounded-full transition-all duration-300 ease-in-out`}
      />
      {tabs.map((tab, index) => (
        <Tab
          width={100 / tabs.length}
          key={index}
          index={index}
          setIsActive={setIsActive}
          isActive={isActive === index}
          {...tab}
        />
      ))}
    </div>
  );
};

export default TabsArray;
