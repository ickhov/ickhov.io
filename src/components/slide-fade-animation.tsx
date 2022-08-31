import { Fade, Slide, SlideProps } from "@mui/material";
import React from "react";

interface DelaySlideProps extends SlideProps {
  delay?: number;
}

const SlideFadeAnimation = React.forwardRef<HTMLDivElement, DelaySlideProps>(
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
      <Slide
        ref={ref}
        in={animate}
        direction="left"
        mountOnEnter
        timeout={{ enter: 1000 }}
        {...rest}
      >
        <div>
          <Fade in timeout={props.timeout || { enter: 1000 }}>
            {props.children}
          </Fade>
        </div>
      </Slide>
    );
  }
);

export default SlideFadeAnimation;
