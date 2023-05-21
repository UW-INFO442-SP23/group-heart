//Gloria
import React from "react";
export const MyModel = React.forwardRef((props, ref) => {
  const hide = (event) => {
    props.tohide(event);
  };
  return (
    <div id="modal" ref={ref}>
      <div id="layout-modal">
        <div id="header" style={{ backgroundColor: props.color }}>
          <span id="x" onClick={hide}>
            x
          </span>
        </div>
        {props.children}
      </div>
    </div>
  );
});
