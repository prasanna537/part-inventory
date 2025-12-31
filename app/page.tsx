"use client";

import { useState } from 'react';
import PurchaseOrderLineEntryForm from '@/components/PurchaseOrderLineEntryForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <PurchaseOrderLineEntryForm />
    </main>
  );
}
