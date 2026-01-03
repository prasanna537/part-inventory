"use client";

import React, { useState } from 'react';

interface GRNLineItemFinal {
    id: number;
    poSeq: string;
    poNo: string;
    poLine: string;
    material: string;
    variant: string;
    description: string;
    uom: string;
    batchNo: string;
    grossQty: number;
    nettQty: number;
    noOfBoxes: number;
    qc: string;
    parDel: string;
    price: number;
    grossValue: number;
    surchargeValue: number;
    discountValue: number;
    totalValue: number;
}

export default function GoodsReceiptNoteFinal() {
    const [supplier, setSupplier] = useState('From Supplier Master');
    const [dcDate, setDcDate] = useState('12/12/2025');

    const [lineItems] = useState<GRNLineItemFinal[]>([
        {
            id: 1,
            poSeq: 'CO',
            poNo: '1',
            poLine: '1',
            material: 'SE1024',
            variant: '1',
            description: 'Face Mask',
            uom: 'Nos',
            batchNo: '2003',
            grossQty: 100,
            nettQty: 100,
            noOfBoxes: 2,
            qc: '1A',
            parDel: 'N',
            price: 2,
            grossValue: 200.00,
            surchargeValue: 20.00,
            discountValue: 0.00,
            totalValue: 180.00
        },
        {
            id: 2,
            poSeq: 'CO',
            poNo: '1',
            poLine: '2',
            material: 'SE1025',
            variant: '1',
            description: 'Earplug',
            uom: 'Nos',
            batchNo: '2004',
            grossQty: 50,
            nettQty: 50,
            noOfBoxes: 5,
            qc: '1A',
            parDel: 'Y',
            price: 4,
            grossValue: 200.00,
            surchargeValue: 0.00,
            discountValue: 20.00,
            totalValue: 220.00
        }
    ]);

    // Financial calculations
    const totalGoodsValue = 400.00;
    const packingCharges = 200.00;
    const transportCharges = 100.00;
    const insuranceCharges = 20.00;
    const otherCharges = 50.00;

    const subtotal = 770.00;
    const sgstPercent = 2.50;
    const cgstPercent = 2.50;
    const sgstValue = 19.25;
    const cgstValue = 19.25;
    const grandTotal = 808.50;

    return (
        <div className="bg-white min-h-screen pb-20 font-sans">
            {/* Blue Header Bar */}
            <div className="bg-[#46B2C8] py-1.5 border-b border-black">
                <h1 className="text-center text-[12px] font-bold text-black uppercase tracking-widest">
                    Goods Receipt Note
                </h1>
            </div>

            {/* Selection Strip (Peach) */}
            <div className="bg-[#FFCCAA] px-4 py-1.5 border-b border-gray-300">
                <div className="flex items-center">
                    <div className="flex items-center w-1/2">
                        <label className="text-[11px] text-red-600 font-bold w-16">Supplier</label>
                        <span className="mx-2 font-bold">:</span>
                        <select
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                            className="bg-white border border-gray-300 px-2 py-0.5 text-[11px] text-blue-800 min-w-[200px] focus:outline-none ml-2"
                        >
                            <option value="">Select Supplier</option>
                            <option value="SAGARIKA ALEENA INDUSTRIES">SAGARIKA ALEENA INDUSTRIES</option>
                            <option value="ABC Manufacturing Ltd">ABC Manufacturing Ltd</option>
                        </select>
                    </div>
                    <div className="flex items-center w-1/2 justify-center">
                        <label className="text-[11px] text-black font-bold mr-4">Supplier DC Date</label>
                        <span className="text-[11px] font-bold">{dcDate}</span>
                    </div>
                </div>
            </div>

            {/* Main Table Container */}
            <div className="overflow-x-auto px-1 mt-4">
                <table className="w-full border-collapse border border-gray-400 text-[10px]">
                    <thead className="bg-white">
                        <tr className="border-b border-gray-400">
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">S.No</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">P.O.Seq</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">P.O.No</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">P.O.Line</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Material</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Variant</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Description</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">UOM</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Batch No</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Gross Qty</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Nett Qty</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">No of Boxes</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">QG</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Par Del?</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Price</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Gross Value</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Surcharge Value</th>
                            <th className="border-r border-gray-400 px-1 py-1 font-bold text-left">Discount Value</th>
                            <th className="px-1 py-1 font-bold text-left">Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lineItems.map((item, index) => (
                            <tr
                                key={item.id}
                                className="bg-[#A0D4EA] even:bg-[#BCE4F5] border-b border-gray-400"
                            >
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center font-bold">{index + 1}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-blue-900 font-bold">{item.poSeq}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-blue-900 font-bold">{item.poNo}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-blue-900 font-bold">{item.poLine}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center font-bold text-blue-900">{item.material}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-blue-900 font-bold">{item.variant}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-left text-blue-900 font-bold">{item.description}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-blue-900 font-bold">{item.uom}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center font-mono">{item.batchNo}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center bg-[#2c7bb6] text-white font-bold">{item.grossQty}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center bg-[#2c7bb6] text-white font-bold">{item.nettQty}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center">{item.noOfBoxes}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center">{item.qc}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center">{item.parDel}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-red-600 font-bold">{item.price}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center text-red-600 font-bold">{item.grossValue.toFixed(2)}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center font-bold">{item.surchargeValue.toFixed(2)}</td>
                                <td className="border-r border-gray-400 px-1 py-0.5 text-center font-bold">{item.discountValue.toFixed(2)}</td>
                                <td className="px-1 py-0.5 text-center font-bold">{item.totalValue.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Final Totals Section */}
            <div className="flex justify-end mt-4 px-4 pr-10">
                <div className="w-[320px] text-[11px] font-bold">
                    <div className="flex justify-between py-0.5 px-2">
                        <span className="uppercase">Total Goods Value</span>
                        <span>{totalGoodsValue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-0.5 px-2">
                        <span className="uppercase">Packing Charges</span>
                        <span>{packingCharges.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-0.5 px-2">
                        <span className="uppercase">Transport Charges</span>
                        <span>{transportCharges.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-0.5 px-2">
                        <span className="uppercase">Insurance Charges</span>
                        <span>{insuranceCharges.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-0.5 px-2 border-b border-gray-400">
                        <span className="uppercase">Other Charges</span>
                        <span>{otherCharges.toFixed(2)}</span>
                    </div>

                    {/* Subtotal Group */}
                    <div className="flex justify-between py-1 px-2 mt-1">
                        <span className="uppercase text-sm">Total</span>
                        <span className="text-sm">{subtotal.toFixed(2)}</span>
                    </div>

                    {/* GST Section */}
                    <div className="flex justify-between py-0.5 px-2 mt-1">
                        <div className="flex w-32 justify-between">
                            <span className="uppercase">SGST</span>
                            <span>{sgstPercent.toFixed(2)}%</span>
                        </div>
                        <span>{sgstValue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-0.5 px-2">
                        <div className="flex w-32 justify-between">
                            <span className="uppercase">CGST</span>
                            <span>{cgstPercent.toFixed(2)}%</span>
                        </div>
                        <span>{cgstValue.toFixed(2)}</span>
                    </div>

                    {/* Grand Total */}
                    <div className="flex justify-between py-1 px-2 mt-1 bg-white border-t border-gray-400">
                        <span className="uppercase text-[12px]">Grand Total</span>
                        <span className="text-[12px]">{grandTotal.toFixed(1)}</span>
                    </div>
                </div>
            </div>

            {/* Green Action Button */}
            <div className="flex justify-end mt-8 px-4 pr-10">
                <button className="bg-[#008A5E] text-white text-[12px] px-20 py-2 font-bold uppercase transition-transform active:scale-95 shadow-md rounded hover:bg-[#00704d]">
                    Save & Print
                </button>
            </div>
        </div>
    );
}
