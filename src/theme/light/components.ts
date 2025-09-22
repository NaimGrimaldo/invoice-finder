import type { Components as MuiComponents } from "@mui/material";

export const components: MuiComponents = {
    MuiButton: {
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: 8,
            },
            sizeSmall: {
                fontSize: 12,
                lineHeight: '14px',
                padding: '8px 12px',
                '& svg': {
                    width: 16,
                    height: 16,
                },
            },
            sizeMedium: {
                fontSize: 14,
                lineHeight: '16px',
                padding: '12px 16px !important'
            },
            sizeLarge: {
                fontSize: 16,
                lineHeight: '18px',
                padding: '16px 24px',
            },
            contained: {
                '& svg': {
                    width: 20,
                    height: 20,
                },
            },
            containedPrimary: {
                '& path': {
                    fill: '#fff'
                },
            }
        }
    },
    MuiFormLabel: {
        styleOverrides: {
            root: {
                marginBottom: 4,
                fontSize: 14,
                fontWeight: 500,
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: 6,
            }
        }
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                background: '#fff',
                fontSize: 14,
            }
        }
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0
        },
        styleOverrides: {
            root: {
                borderRadius: 8,
            },
            elevation1: {
                boxShadow: 'none',
                border: `1px solid #CFD5E2`,
            }
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                padding: '12px 16px',
            }
        }
    },
    MuiSkeleton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiChip: {
        defaultProps: {
            size: 'small'
        },
        styleOverrides: {
            root: {
                borderRadius: 18,
                height: 24,
                padding: '0 8px',
                fontSize: 12,
                fontWeight: 500,
            },
            sizeSmall: {
                height: 20,
                padding: '4px 8px',
            }
        }
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                background: '#242C37',
                backgroundColor: '#242C37',
                fontSize: 12,
                fontWeight: 'normal',
                fontStyle: 'normal',
                top: '10px !important',
                padding: '4px 12px',
            },
            tooltipPlacementBottom: {
                margin: '2px 0px !important'
            },
            arrow: {
                color: '#242C37'
            }
        }
    },
    MuiTypography: {
        styleOverrides: {
            body1: {
                fontSize: 14,
            },
        },
    }
}