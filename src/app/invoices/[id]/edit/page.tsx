"use client";

import AlertMessage from "@/components/AlertMessage";
import BoxContainer from "@/components/BoxContainer";
import FormCurrency from "@/components/FormCurrency";
import FormDate from "@/components/FormDate";
import FormInput from "@/components/FormInput";
import FormInputGroup from "@/components/FormInputGroup";
import FormSelect from "@/components/FormSelect";
import PageHeader from "@/components/PageHeader";
import { initialInvoice } from "@/constants/initialInvoice.constant";
import { statusConstant } from "@/constants/status.constant";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hook";
import { editInvoice } from "@/lib/redux/slice/invoice.slice";
import { requestInvoiceSchema } from "@/lib/schemas/request-invoice.schema";
import { RequestInvoice } from "@/lib/types/invoice.type";
import { TStatus } from "@/lib/types/status.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftOutlined, Save } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function InvoiceEditPage() {
  const params = useParams();
  const { data } = useAppSelector((state) => state.invoice);
  const router = useRouter();

  const dispatch = useAppDispatch();
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

  useEffect(() => {
    const pid = params.id;
    // find data by id
    const invoice = data.find((item) => item.id === pid);
    if (!invoice) {
      router.replace("/invoices/list");
    } else {
      reset(invoice);
    }
  }, [data, reset, params, router]);

  const onSubmit = (data: RequestInvoice) => {
    setShowAlert(false);
    dispatch(
      editInvoice({
        ...data,
        status: data.status as TStatus,
        id: params.id as string,
      })
    );
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      router.replace("/invoices/list");
    }, 2000);
  };

  return (
    <Box>
      <PageHeader
        title="Edit Invoice"
        extra={
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChevronLeftOutlined />}
            onClick={() => router.back()}
          >
            Back
          </Button>
        }
      />
      <BoxContainer title="Invoice Form">
        <Grid
          container
          spacing={{
            sm: 0,
            md: "35px",
          }}
        >
          <Grid
            size={{
              sm: 12,
              md: 6,
            }}
          >
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
          <Grid
            size={{
              sm: 12,
              md: 6,
            }}
          >
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
            sx={{ width: 259 }}
            onClick={handleSubmit(onSubmit)}
            startIcon={<Save />}
          >
            update Invoice
          </Button>
        </Box>
      </BoxContainer>
      {/* alert */}
      {showAlert && (
        <AlertMessage
          color="success"
          title="Invoice Updated successfully"
          message="You can view and manage your invoice in the `My Invoices` sectoin."
        />
      )}
    </Box>
  );
}
