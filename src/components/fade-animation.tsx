import { Fade, FadeProps } from "@mui/material";
import React from "react";

interface DelayFadeProps extends FadeProps {
  delay?: number;
}

const FadeAnimation = React.forwardRef<HTMLDivElement, DelayFadeProps>(
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
      <Fade
        ref={ref}
        in={animate}
        timeout={{ enter: 1000 }}
        mountOnEnter
        {...rest}
      >
        {props.children}
      </Fade>
    );
  }
);

export default FadeAnimation;
