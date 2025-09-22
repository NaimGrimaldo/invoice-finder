import { type ReactNode } from "react";
import { Grid, Typography, type GridProps } from "@mui/material";
import EmptyStateImg from "@/assets/img/empty_state.svg";
import { useStyles } from "./EmptyState.styles";

export interface EmptyStateProps extends GridProps {
    text?: string;
    secondaryText?: string;
    children?: ReactNode | ReactNode[];
    containerProps?: GridProps;
}

export function EmptyState({
    text,
    children,
    className,
    containerProps,
    secondaryText,
    ...rest
}: EmptyStateProps) {
    const { classes, cx } = useStyles();

    return (
        <Grid
            container
            justifyContent="center"
            className={cx(classes.container, className)}
            {...rest}
        >
            <Grid size={{ xs: 12 }} className={classes.iconContainer}>
                <EmptyStateImg />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Typography
                    className={cx(classes.text, classes.mediumText)}
                    dangerouslySetInnerHTML={{ __html: text ?? 'Aún no hay información' }}
                />

                {secondaryText && (
                    <Typography
                        className={classes.secondaryText}
                        dangerouslySetInnerHTML={{ __html: secondaryText }}
                    />
                )}
            </Grid>

            {children && (
                <Grid size={{ xs: 12 }} className={classes.children} {...containerProps}>
                    {children}
                </Grid>
            )}
        </Grid>
    )
}