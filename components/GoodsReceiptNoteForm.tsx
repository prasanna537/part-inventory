"use client";

import { useState } from 'react';

interface GRNLineItem {
    id: number;
    supplierDCNo: string;
    supplierDCDate: string;
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
    dateOfReceipt: string;
    selected: boolean;
}

export default function GoodsReceiptNoteForm() {
    const [supplier, setSupplier] = useState('Select Supplier');
    const [supplierDC, setSupplierDC] = useState('From Batch Table');

    const [lineItems, setLineItems] = useState<GRNLineItem[]>([
        {
            id: 1,
            supplierDCNo: '43878',
            supplierDCDate: '10-Dec',
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
            dateOfReceipt: '12/12/2025',
            selected: false
        },
        {
            id: 2,
            supplierDCNo: '43878',
            supplierDCDate: '10-Dec',
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
            dateOfReceipt: '12/12/2025',
            selected: false
        }
    ]);

    const handleToggleSelection = (id: number) => {
        setLineItems(prev => prev.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        ));
    };

    return (
        <div className="bg-gray-50 pb-10">
            {/* Blue Header */}
            <div className="bg-[#46B2C8] py-3 border-b border-black shadow-sm">
                <h1 className="text-center text-lg font-bold text-black uppercase tracking-widest">
                    Goods Receipt Note
                </h1>
            </div>

            {/* Selection Strip (Peach/Orange) */}
            <div className="bg-[#FFCCAA] px-6 py-3 border-b border-gray-300">
                <div className="flex items-center space-x-16">
                    <div className="flex items-center">
                        <label className="text-sm text-red-600 font-bold w-20">Supplier</label>
                        <span className="mx-2 font-bold">:</span>
                        <select
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                            className="bg-white border border-gray-300 px-3 py-1 text-sm text-blue-800 min-w-[220px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        >
                            <option value="Select Supplier">Select Supplier</option>
                            <option value="SAGARIKA ALEENA INDUSTRIES">SAGARIKA ALEENA INDUSTRIES</option>
                            <option value="ABC Manufacturing Ltd">ABC Manufacturing Ltd</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm text-black font-bold w-24">Supplier DC</label>
                        <span className="mx-2 font-bold">:</span>
                        <select
                            value={supplierDC}
                            onChange={(e) => setSupplierDC(e.target.value)}
                            className="bg-white border border-gray-300 px-3 py-1 text-sm text-blue-800 min-w-[220px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        >
                            <option value="From Batch Table">From Batch Table</option>
                            <option value="DC-2025-001">DC-2025-001</option>
                            <option value="DC-2025-002">DC-2025-002</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Space instead of Form Info Strip */}
            <div className="h-3 bg-white"></div>

            {/* Main Table Container */}
            <div className="overflow-x-auto px-2">
                <table className="w-full border-collapse border border-gray-400 text-xs shadow-md">
                    <thead className="bg-white">
                        <tr className="border-b-2 border-gray-400 bg-gray-100">
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">S.No</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Supplier DC No</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Supplier DC Date</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">P.O.Seq</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">P.O.No</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">P.O.Line</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Material</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Variant</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Description</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">UOM</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Batch No</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Gross Qty</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Nett Qty</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">No of Boxes</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">QC</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Par Del?</th>
                            <th className="border-r border-gray-400 px-2 py-2 font-bold text-left uppercase">Date of Receipt</th>
                            <th className="px-2 py-2 font-bold text-left uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lineItems.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`${item.selected ? 'bg-[#73c2fb]' : 'bg-[#A0D4EA] even:bg-[#BCE4F5]'} border-b border-gray-400 transition-colors duration-200 hover:bg-opacity-90`}
                            >
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-bold">{index + 1}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.supplierDCNo}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.supplierDCDate}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.poSeq}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.poNo}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.poLine}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-bold text-blue-900">{item.material}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.variant}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-left font-medium">{item.description}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.uom}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium font-mono bg-white/30">{item.batchNo}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center bg-[#2c7bb6] text-white font-bold text-sm shadow-inner">{item.grossQty}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center bg-[#2c7bb6] text-white font-bold text-sm shadow-inner">{item.nettQty}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.noOfBoxes}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-bold bg-white/20">{item.qc}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.parDel}</td>
                                <td className="border-r border-gray-400 px-2 py-1.5 text-center font-medium">{item.dateOfReceipt}</td>
                                <td className="px-2 py-1">
                                    <button
                                        onClick={() => handleToggleSelection(item.id)}
                                        className={`${item.selected ? 'bg-gray-600 hover:bg-gray-700' : 'bg-[#008A5E] hover:bg-[#00704d]'} text-white text-[10px] px-2 py-1 rounded font-bold uppercase w-full transition-all duration-200 shadow-sm`}
                                    >
                                        {item.selected ? 'Selected' : 'Select Batch'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Prepare GRN Button - Moved up and margin adjusted */}
            <div className="px-6 py-6 flex justify-end">
                <button className="bg-[#008A5E] hover:bg-[#00704d] text-white text-sm px-8 py-2 font-bold uppercase rounded-md transition-all duration-200 shadow-lg active:transform active:scale-95">
                    Prepare GRN
                </button>
            </div>
        </div>
    );
}
