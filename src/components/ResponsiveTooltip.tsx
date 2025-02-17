import {
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding: "10px 16px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    boxShadow: "none",
    padding: 0,
  },
}));

interface ResponsiveTooltipProps extends TooltipProps {
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function ResponsiveTooltip({
  breakpoint = "md",
  children,
  ...props
}: ResponsiveTooltipProps) {
  const theme = useTheme();
  const isBreakpointActive = useMediaQuery(theme.breakpoints.up(breakpoint));

  if (isBreakpointActive) {
    return (
      <CustomTooltip arrow placement="right-start" {...props}>
        {children}
      </CustomTooltip>
    );
  }

  return <>{children}</>;
}
