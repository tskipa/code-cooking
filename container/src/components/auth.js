import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/index";

export default ({ onAuthChange }) => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname === nextPathname) {
          return;
        }
        history.push(nextPathname);
      },
      onAuthChange,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
