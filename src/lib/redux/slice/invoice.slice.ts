import { invoicesConstant } from "@/constants/invoices.constant";
import { Invoice } from "@/lib/types/invoice.type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InvoiceState {
  data: Invoice[];
}

const initialState: InvoiceState = {
  data: invoicesConstant,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.data.push(action.payload);
    },
    removeInvoice: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
    editInvoice: (state, action: PayloadAction<Invoice>) => {
      console.log("🚀 ~ state:", state);
      const index = state.data.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      const updatedData = [...state.data];
      state.data = updatedData;
      if (index !== -1) {
        const updatedData = [...state.data];
        updatedData[index] = action.payload;

        state.data = updatedData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInvoice, editInvoice, removeInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
