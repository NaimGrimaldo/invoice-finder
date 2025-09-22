import { Pagination as MuiPagination, PaginationItem, type PaginationProps as MuiPaginationProps, Grid } from "@mui/material";
import { useStyles } from "./Pagination.styles";

export interface PaginationProps {
    totalResults?: number;
    page?: number;
    pageSize?: number;
    totalPages?: number;
    handlePagination: (event: any, newPage: number) => void;
}

export function Pagination({
    page,
    totalPages,
    handlePagination,
    ...rest
}: PaginationProps & MuiPaginationProps) {
    const { classes } = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            className={classes.container}
        >
            <MuiPagination
                count={totalPages}
                page={page}
                onChange={handlePagination}
                siblingCount={2}
                className={classes.pagination}
                renderItem={(item) => <PaginationItem className={classes.item} {...item} />}
                size="small"
                {...rest}
            />
        </Grid>
    )
}