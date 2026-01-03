"use client";

import React, { useState } from 'react';

interface GRNLineItem2 {
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
    surchargePercent: number;
    surchargeValue: number;
    discountPercent: number;
    discountValue: number;
    totalValue: number;
    dateOfReceipt: string;
    wh: string;
    sa: string;
    sp: string;
    selected: boolean;
}

export default function GoodsReceiptNoteForm2() {
    const [supplier, setSupplier] = useState('From Supplier Master');
    const [supplierDC, setSupplierDC] = useState('');

    const [lineItems, setLineItems] = useState<GRNLineItem2[]>([
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
            surchargePercent: 10,
            surchargeValue: 20,
            discountPercent: 10,
            discountValue: 20,
            totalValue: 220.00,
            dateOfReceipt: '12/12/2025',
            wh: '1',
            sa: 'GF',
            sp: '1',
            selected: false
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
            surchargePercent: 0,
            surchargeValue: 0,
            discountPercent: 10,
            discountValue: 20,
            totalValue: 180.00,
            dateOfReceipt: '12/12/2025',
            wh: '1',
            sa: 'GF',
            sp: '1',
            selected: false
        }
    ]);

    const handleToggleSelection = (id: number) => {
        setLineItems(prev => prev.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        ));
    };

    return (
        <div className="bg-white min-h-screen font-sans pb-10">
            {/* Form Content Wrapper */}
            <div className="bg-white">
                {/* Blue Header */}
                <div className="bg-[#46B2C8] py-2 border-b border-black">
                    <h1 className="text-center text-sm font-bold text-black uppercase tracking-widest">
                        Goods Receipt Note
                    </h1>
                </div>

                {/* Selection Strip (Peach/Orange) */}
                <div className="bg-[#FFCCAA] px-4 py-1 border-b border-gray-300">
                    <div className="flex items-center">
                        <div className="flex items-center mr-20">
                            <label className="text-[11px] text-red-600 font-bold w-20">Supplier</label>
                            <span className="mx-2 font-bold">:</span>
                            <select
                                value={supplier}
                                onChange={(e) => setSupplier(e.target.value)}
                                className="bg-white border border-gray-300 px-2 py-0.5 text-[11px] text-blue-800 min-w-[200px] focus:outline-none"
                            >
                                <option value="From Supplier Master">From Supplier Master</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <label className="text-[11px] text-black font-bold w-24">Supplier DC No</label>
                            <span className="mx-2 font-bold">:</span>
                            <select
                                value={supplierDC}
                                onChange={(e) => setSupplierDC(e.target.value)}
                                className="bg-white border border-gray-300 px-2 py-0.5 text-[11px] text-blue-800 min-w-[200px] focus:outline-none"
                            >
                                <option value="">Select DC No</option>
                                <option value="DC/2024/001">DC/2024/001</option>
                                <option value="DC/2024/002">DC/2024/002</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Space */}
                <div className="h-2 bg-white"></div>

                {/* Green Action Bar Placeholder */}
                <div className="bg-[#008A5E] h-6 mx-1 flex items-center justify-end px-4 mb-1">
                    {/* Empty for now as per image */}
                </div>

                {/* Main Table Container */}
                <div className="overflow-x-auto px-1">
                    <table className="w-full border-collapse border border-gray-400 text-[10px]">
                        <thead className="bg-white">
                            <tr className="border-b border-gray-400">
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">S.No</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">P.O.Seq</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">P.O.No</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">P.O.Line</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Material</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Variant</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Description</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">UOM</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Batch No</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Gross Qty</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Nett Qty</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">No of Boxes</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">QC</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Par Del?</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Price</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Gross Value</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Surcharge%</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Surcharge Value</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Discount %</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Discount Value</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Total Value</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">Date of Receipt</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">WH</th>
                                <th className="border-r border-gray-400 px-1 py-1 font-bold text-center">SA</th>
                                <th className="px-1 py-1 font-bold text-center">SP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lineItems.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={`${item.selected ? 'bg-[#73c2fb]' : 'bg-[#A0D4EA] even:bg-[#BCE4F5]'} border-b border-gray-400`}
                                >
                                    <td className="border-r border-gray-400 px-1 py-1 text-center font-bold">{index + 1}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.poSeq}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.poNo}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.poLine}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center font-bold text-blue-900">{item.material}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.variant}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-left text-blue-900">{item.description}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center text-blue-900">{item.uom}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.batchNo}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#51A2DA] text-white font-bold">{item.grossQty}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#51A2DA] text-white font-bold">{item.nettQty}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.noOfBoxes}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.qc}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.parDel}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center text-red-600 font-bold">{item.price}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center text-red-600 font-bold">{item.grossValue.toFixed(2)}</td>

                                    {/* Surcharge Group */}
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#FF9B9B] font-bold text-black">{item.surchargePercent > 0 ? item.surchargePercent : ''}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#46B2C8] font-bold text-black">{item.surchargeValue > 0 ? item.surchargeValue : ''}</td>

                                    {/* Discount Group */}
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#FF9B9B] font-bold text-black">{item.discountPercent > 0 ? item.discountPercent : ''}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#46B2C8] font-bold text-black">{item.discountValue > 0 ? item.discountValue : ''}</td>

                                    <td className="border-r border-gray-400 px-1 py-1 text-center bg-[#A0D4EA] font-bold text-black">{item.totalValue.toFixed(2)}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.dateOfReceipt}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center">{item.wh}</td>
                                    <td className="border-r border-gray-400 px-1 py-1 text-center text-blue-900 font-bold">{item.sa}</td>
                                    <td className="px-1 py-1 text-center text-blue-900 font-bold">{item.sp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Section: Bars and Totals */}
                <div className="flex px-1 mt-1 items-start">
                    {/* Left side: Blue and Peach bars */}
                    <div className="flex-grow mr-2 mt-0.5">
                        <div className="bg-[#A0D4EA] h-6 mb-0.5 border border-gray-400 w-full"></div>
                        <div className="bg-[#FFCCAA] h-16 border border-gray-400 w-full"></div>
                    </div>

                    {/* Right side: Totals */}
                    <div className="w-[280px] text-[11px] font-bold shrink-0">
                        <div className="flex justify-between py-1 bg-[#A0D4EA] px-2 mb-0.5 border border-gray-400">
                            <span className="uppercase">Total Goods Value</span>
                            <span>400.00</span>
                        </div>
                        <div className="flex justify-between py-1 bg-[#FFCCAA] px-2 mb-0.5 border border-gray-400">
                            <span className="uppercase">Packing Charge</span>
                            <span>200.00</span>
                        </div>
                        <div className="flex justify-between py-1 bg-[#FFCCAA] px-2 mb-0.5 border border-gray-400">
                            <span className="uppercase">Freight Charges</span>
                            <span>100.00</span>
                        </div>
                        <div className="flex justify-between py-1 bg-[#FFCCAA] px-2 mb-0.5 border border-gray-400">
                            <span className="uppercase">Insurance Charges</span>
                            <span>20.00</span>
                        </div>
                        <div className="flex justify-between py-1 bg-[#FFCCAA] px-2 border border-gray-400">
                            <span className="uppercase">Other Charges</span>
                            <span>50.00</span>
                        </div>
                    </div>
                </div>
            </div> {/* END OF FORM CONTENT DIV */}

            {/* Action Button Section sits outside the main form content div above */}
            <div className="flex justify-end mt-4 px-2">
                <button className="bg-[#008A5E] text-white text-[11px] px-8 py-1.5 font-bold uppercase transition-transform active:scale-95 shadow-md">
                    Verify the GRN
                </button>
            </div>
        </div>
    );
}
