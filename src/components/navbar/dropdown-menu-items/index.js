import P from '../../ui/typography/p'

const Index = ({ routes = [] }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      {routes.map((route, index) => {
        return (
          <div
            key={index}
            className={`${
              routes.length - 1 == index ? "" : "border-b-px"
            } border-gray-medium px-5 py-3`}
          >
            <P>{route.title}</P>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
