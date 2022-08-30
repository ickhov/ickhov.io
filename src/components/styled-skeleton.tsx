import { styled } from "@mui/material/styles";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

const StyledSkeleton = styled((props: SkeletonProps) => (
  <Skeleton variant="rectangular" {...props} />
))(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export default StyledSkeleton;
