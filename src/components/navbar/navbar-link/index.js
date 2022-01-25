import SmartButton from "../../smart-button";

const Index = ({ children }) => {
  return (
    <div className="mx-3">
      <SmartButton className="@ftf font-family-rubik-semi-bold" variant="text">
        {children}
      </SmartButton>
    </div>
  );
};

export default Index;
