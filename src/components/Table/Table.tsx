import { Fragment } from "react";
import {
    Table as MuiTable,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
    TableContainer,
    Grid,
    type TableRowProps,
} from "@mui/material";
import { useStyles } from "./Table.styles";
import { type PaginationProps, Pagination } from "./Pagination";
import { EmptyState } from "../EmptyState";

import _ from "lodash";

export type TableColumnType<T = any> = {
    label: string;
    key: keyof T;
    render?: (value: any, row: T) => any | string | Element;
    align?: 'center' | 'left' | 'right';
}

export type TableActionType<T = any> = {
    label: string;
    onClick?: (row: T) => void;
    disabled?: boolean | ((row: T) => boolean);
    render?: (row: T) => any;
    to?: (row: T) => string;
}
export interface TableProps<T = any> {
    columns: TableColumnType<T>[];
    data?: T[];
    actions?: TableActionType<T>[];
    enableDrag?: boolean;
    handleDrag?: (reorderedData: Array<any>) => void;
    actionsLabel?: string;
    pagination?: PaginationProps
    onItemClick?: (row: T) => void;
    /**
     * Hide the footer of the table
     * (results count and pagination)
     */
    hideFooter?: boolean
    /**
     * Disable the card wrapper
     */
    disableCard?: boolean
    rowProps?: TableRowProps
    hideHeader?: boolean
}

export function Table<T>(props: TableProps<T>) {
    const { classes } = useStyles();
    const Component = props.disableCard ? Fragment : Paper;

    const {
        data,
        columns,
        actions,
        actionsLabel,
        pagination,
        onItemClick,
        hideFooter,
        hideHeader,
    } = props

    const {
        page,
        pageSize,
        totalPages,
        totalResults,
        handlePagination
    } = pagination ?? {};

    return (
        <Component elevation={1} className={classes.paper}>
            {(!data || data?.length == 0) ? (
                <EmptyState />
            ) : (
                <>
                    <TableContainer>
                        <MuiTable className={classes.desktop}>

                            {!hideHeader && (
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column: TableColumnType, columnIndex: number) => (
                                            <TableCell
                                                key={`header-${columnIndex}`}
                                                align={column.align}
                                                className={classes.header}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                        {actions && (
                                            <TableCell align="right">
                                                {actionsLabel || 'Opciones'}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                </TableHead>
                            )}

                            {(data?.length || 0) > 0 && (
                                <TableBody>
                                    {data?.map((row, rowIndex) => {
                                        return (
                                            <TableRow
                                                key={`row-${rowIndex}`}
                                                className={classes.row}
                                                onClick={() => {
                                                    if (onItemClick) {
                                                        onItemClick(row);
                                                    }
                                                }}
                                            >
                                                {columns.map(({ key, render, align }: TableColumnType) => {
                                                    const value = _.get(row, key);
                                                    return (
                                                        <TableCell
                                                            key={`row-${rowIndex}-${key?.toString()}`}
                                                            align={align}
                                                        >
                                                            {render ? render(value, row) : value}
                                                        </TableCell>
                                                    )
                                                })}

                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            )}
                        </MuiTable>
                    </TableContainer>

                    {!hideFooter && (
                        <Grid
                            container
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            className={classes.paginationContainer}
                        >
                            <div>
                                <span className={classes.totals}>
                                    Se muestran {data?.length ?? 0} de {totalResults ?? data.length ?? 0} resultados
                                </span>
                            </div>

                            <div>
                                {!_.isEmpty(pagination) && (
                                    <Pagination
                                        page={page!}
                                        pageSize={pageSize!}
                                        totalPages={totalPages!}
                                        totalResults={totalResults!}
                                        handlePagination={handlePagination!}
                                    />
                                )}
                            </div>
                        </Grid>
                    )}

                </>
            )}

        </Component>
    )
}