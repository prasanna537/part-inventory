"use client";

import { useState } from 'react';
import PurchaseOrderItemsForm from '@/components/PurchaseOrderItemsForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <PurchaseOrderItemsForm />
    </main>
  );
}
