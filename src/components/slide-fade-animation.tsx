import { Fade, Slide, SlideProps } from "@mui/material";
import React from "react";

const SlideFadeAnimation = React.forwardRef<HTMLDivElement, SlideProps>(
  (props, ref) => (
    <Slide
      ref={ref}
      in
      direction="left"
      mountOnEnter
      timeout={{ enter: 1000 }}
      {...props}
    >
      <div>
        <Fade in timeout={{ enter: 1000 }}>
          {props.children}
        </Fade>
      </div>
    </Slide>
  )
);

export default SlideFadeAnimation;
