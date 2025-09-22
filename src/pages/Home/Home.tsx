import { useState, useEffect } from "react";
import { DateInput, Table } from "@/components";
import { Container, Divider, Grid, Typography, CircularProgress, Alert, Button, Chip } from "@mui/material";
import { useStyles } from "./Home.styles";
import { API_BASE_URL } from "@/config";


export function HomePage() {
  const { classes } = useStyles()
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(new Date())
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1);
  const [pageSize] = useState(25); // o el valor que tu API use por defecto
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const fetchInvoices = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (startDate) params.append('q[invoice_date_gteq]', startDate);
      if (endDate) params.append('q[invoice_date_lteq]', endDate);
      params.append("page", page.toString());
      params.append("per_page", pageSize.toString());

      const response = await fetch(`${API_BASE_URL}/api/v1/invoices?${params.toString()}`);
      if (!response.ok) throw new Error("Error al obtener las facturas");

      const result = await response.json();
      const formattedData = result.data.map(item => ({
        id: item.id,
        ...item.attributes
      }));

      setData(formattedData);
      setTotalPages(result.meta.total_pages);
      setTotalResults(result.meta.total);
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (event: any, newPage: number) => {
    setPage(newPage); // 👈 esto cambia la página
  };

  const handleSearch = () => {
    setPage(1)
    fetchInvoices();
  };

  useEffect(() => {
    fetchInvoices();
  }, [page]);

  const formatCurrency = (amount) => {
    if (amount == null) return "";
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN"
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric", month: "long", day: "numeric"
    }).format(date);
  };



  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>

        <Grid size={{ xs: 12 }} className={classes.container}>
          <Typography className={classes.title}> Consulta de facturas </Typography>
          <Divider className={classes.divider} />
        </Grid>

        <Grid size={{ xs: 12 }} className={classes.container}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <DateInput
                label="Fecha inicial"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <DateInput
                label="Fecha final"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} display="flex" alignItems="bottom">
              <Button variant="contained" color="primary" onClick={handleSearch}>
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }}>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          <Table
            columns={[
              { label: "ID", key: "invoice_number" },
              { label: "Fecha", key: "invoice_date", render: (value) => formatDate(value) },
              { label: "Total", key: "total", render: (value) => formatCurrency(value) },
              { label: "Estatus", key: "status" },
              {
                label: "Activo", key: "active", render: (value) => (
                  <Chip
                    label={value ? "Activo" : "Inactivo"}
                    color={value ? "success" : "default"}
                    size="small"
                  />
                )
              }
            ]}
            data={data}
            pagination={{
              page,
              pageSize,
              totalPages,
              totalResults,
              handlePagination,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}