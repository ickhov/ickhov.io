import { Grow, GrowProps } from "@mui/material";
import React from "react";

interface DelayGrowProps extends GrowProps {
  delay?: number;
}

const GrowAnimation = React.forwardRef<HTMLDivElement, DelayGrowProps>(
  (props, ref) => {
    const { delay, ...rest } = props;
    const [animate, setAnimate] = React.useState(false);

    React.useEffect(() => {
      if (delay != null) {
        const timer = setTimeout(() => {
          setAnimate(true);
        }, delay);
        return () => clearTimeout(timer);
      } else setAnimate(true);
    }, [delay]);

    return (
      <Grow
        ref={ref}
        in={animate}
        timeout={{ enter: 1000 }}
        style={{ transformOrigin: "0 0 0" }} // animate from top
        mountOnEnter
        {...rest}
      >
        {props.children}
      </Grow>
    );
  }
);

export default GrowAnimation;
