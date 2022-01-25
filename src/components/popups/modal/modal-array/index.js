import React, { useEffect, useMemo, useState } from "react";
import ModalPortal from "../modal-portal";
import { getActionKey } from "../../../../functions/utils/redux/action-utils";

const ModalArray = ({
  showEffect = () => {},
  ArrayItem,
  array,
  getRenderCardProps,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const modalComponentId = useMemo(() => {
    if (props.modalComponentId) {
      return props.modalComponentId;
    }
    const name = props.RenderCard.name;
    if (!name || name === "anonymous") {
      return `component${getActionKey()}`;
    }
    return name;
  }, []);

  useEffect(() => {
    showEffect({ show, setShow });
  }, [ArrayItem ? show : props.show, props]);

  const showCurrentItem = (index) => {
    setCurrentItem(index);
    setShow(true);
  };
  const renderCardProps = getRenderCardProps(array[currentItem], currentItem);

  return (
    <>
      <ModalPortal
        modalComponentId={modalComponentId}
        renderCardProps={renderCardProps}
        setShow={setShow}
        show={show}
        {...props}
      />
      {array.map((item, index) => (
        <ArrayItem
          key={index}
          item={item}
          index={index}
          showCurrentItem={showCurrentItem}
        />
      ))}
    </>
  );
};

export default ModalArray;
