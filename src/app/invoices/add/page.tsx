"use client";

import AlertMessage from "@/components/AlertMessage";
import FormCurrency from "@/components/invoices/FormCurrency";
import FormDate from "@/components/invoices/FormDate";
import FormInput from "@/components/invoices/FormInput";
import FormInputGroup from "@/components/invoices/FormInputGroup";
import FormSelect from "@/components/invoices/FormSelect";
import { statusConstant } from "@/constants/status.constant";
import { requestInvoiceSchema } from "@/lib/schemas/request-invoice.schema";
import { initialInvoice, RequestInvoice } from "@/lib/types/invoice.type";
import LocalStorage from "@/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function InvoiceAddPage() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestInvoice>({
    resolver: zodResolver(requestInvoiceSchema),
    defaultValues: initialInvoice,
  });
  const onSubmit = (data: RequestInvoice) => {
    setShowAlert(false);
    LocalStorage.setLocalStorage("invoice", JSON.stringify(data));
    setShowAlert(true);
    reset(initialInvoice);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 700,
          mb: "38px",
        }}
      >
        Add Invoice
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            py: "15px",
            px: "26px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Invoice Form
        </Typography>
        <Divider />
        <Box sx={{ p: "26px" }}>
          <Grid container spacing={"35px"}>
            <Grid size={6}>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <FormInputGroup
                    label="Name"
                    required
                    errorText={errors.name?.message}
                  >
                    <FormInput
                      error={!!errors.name}
                      placeholder="Enter your invoice name"
                      {...field}
                    />
                  </FormInputGroup>
                )}
              />
              <Controller
                control={control}
                name="dueDate"
                render={({ field }) => (
                  <FormInputGroup
                    label="Due Date"
                    required
                    errorText={errors.dueDate?.message}
                  >
                    <FormDate value={field.value} onChange={field.onChange} />
                  </FormInputGroup>
                )}
              />
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <FormInputGroup
                    label="Status"
                    required
                    errorText={errors.status?.message}
                  >
                    <FormSelect
                      emptyText="Choose the status"
                      error={!!errors.status}
                      options={statusConstant}
                      {...field}
                    />
                  </FormInputGroup>
                )}
              />
            </Grid>
            <Grid size={6}>
              <Controller
                control={control}
                name="number"
                render={({ field }) => (
                  <FormInputGroup
                    label="Number"
                    required
                    errorText={errors.number?.message}
                  >
                    <FormInput
                      error={!!errors.number}
                      placeholder="Enter your invoice number"
                      {...field}
                      onChange={(event) => {
                        let inputValue = event.target.value;

                        // Menambahkan prefix "INV" jika belum ada
                        if (!inputValue.startsWith("INV")) {
                          inputValue = `INV${inputValue.replace(/^INV/, "")}`;
                        }

                        if (field.onChange) {
                          field.onChange(inputValue);
                        }
                      }}
                    />
                  </FormInputGroup>
                )}
              />
              <Controller
                control={control}
                name="amount"
                render={({ field }) => (
                  <FormInputGroup
                    label="Amount"
                    required
                    errorText={errors.amount?.message}
                  >
                    <FormCurrency
                      value={field.value}
                      onChange={field.onChange}
                      error={!!errors.amount}
                      label="Amount"
                      placeholder="Enter your invoice amount"
                    />
                  </FormInputGroup>
                )}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", pt: "58px" }}>
            <Button
              size="large"
              variant="contained"
              sx={[
                (theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }),
                (theme) => ({
                  "&:disabled": {
                    backgroundColor: theme.palette.grey[400],
                    color: theme.palette.common.white,
                  },
                }),
              ]}
              // sx={{ width: 259, bgcolor: "primary.main" }}
              onClick={handleSubmit(onSubmit)}
              startIcon={<Add />}
            >
              Add Invoice{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }} />
      {/* alert */}
      {showAlert && (
        <AlertMessage
          color="success"
          title="Invoice Added successfully"
          message="You can view and manage your invoice in the `My Invoices` sectoin."
        />
      )}
    </Box>
  );
}
