"use client";

import { useState } from 'react';
import PurchaseOrderDetailView from '@/components/PurchaseOrderDetailView';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <PurchaseOrderDetailView />
    </main>
  );
}
