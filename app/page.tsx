"use client";

import { useState } from 'react';
import GoodsReceiptNoteForm from '@/components/GoodsReceiptNoteForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <GoodsReceiptNoteForm />
    </main>
  );
}
