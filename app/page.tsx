"use client";

import { useState } from 'react';
import PurchaseOrderForm from '@/components/PurchaseOrderForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <PurchaseOrderForm />
    </main>
  );
}
