"use client";

import FormInput from "@/components/invoices/FormInput";
import FormSelect from "@/components/invoices/FormSelect";
import RenderStatus from "@/components/invoices/RenderStatus";
import { invoicesConstant } from "@/constants/invoices.constant";
import { statusConstant } from "@/constants/status.constant";
import { debounceTwo } from "@/utils/debounce";
import { formatCurrency } from "@/utils/formatCurrency";
import { Menu, Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function InvoiceListPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Hook to access search params
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );
  const [status, setStatus] = useState<string>(
    searchParams.get("status") || ""
  );

  const filteredData = useMemo(() => {
    const searchTerm = searchParams.get("search") || "";
    const statusFilter = status;

    return invoicesConstant.filter((invoice) => {
      const matchesSearch =
        invoice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.number.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "" || invoice.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchParams, status]);

  const handleSearch = (value: string) => {
    setSearch(value);
    debounceTwo(() => {
      // Create a new URLSearchParams object
      const params = new URLSearchParams(searchParams.toString());

      // Update the search query parameter
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search"); // Remove the search param if the search term is empty
      }

      // Update the URL with the new query parameters
      router.push(`${pathname}?${params.toString()}`);
    }, 400);
  };
  const handleStatusChange = (value: string) => {
    setStatus(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: 26,
            fontWeight: 700,
            mb: "38px",
          }}
        >
          My Invoices
        </Typography>
        <Box>
          <FormInput
            sx={{
              width: 216,
            }}
            size="small"
            placeholder="Search"
            value={search}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FormSelect
            emptyText="All Status"
            options={[
              {
                label: "All Status",
                value: "",
              },
              ...statusConstant,
            ]}
            sx={{
              width: 135,
              ml: 3,
            }}
            size="small"
            value={status}
            onChange={(e) => {
              const value = e?.target?.value || "";
              handleStatusChange(value as string);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: "30px",
        }}
      >
        <TableContainer>
          <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#F7F9FC",
              }}
            >
              <TableRow>
                <TableCell>Invoice</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    fontSize: "16px",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#1C2434",
                      }}
                    >
                      {row.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#64748B",
                      }}
                    >
                      {row.number}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {dayjs(row.dueDate).format("MMM DD,YYYY")}
                  </TableCell>
                  <TableCell>
                    <RenderStatus status={row.status} />
                  </TableCell>
                  <TableCell>{formatCurrency(row.amount)}</TableCell>
                  <TableCell>
                    <IconButton>
                      <Menu />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
