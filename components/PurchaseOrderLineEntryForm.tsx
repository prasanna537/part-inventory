"use client";

import { useState } from 'react';

interface POLineItem {
    poLine: number;
    material: string;
    var: string;
    description: string;
    costHead: string;
    costCenter: string;
    qu: string;
    orderQty: number;
    price: number;
    pu: string;
    requiredDate: string;
    deliveryDate: string;
    followUpDate: string;
    surchargePercent: number;
    surchargeValue: number;
    discountPercent: number;
    discountValue: number;
    taxPercent: number;
    value: number;
}

export default function PurchaseOrderLineEntryForm() {
    const [supplierNumber, setSupplierNumber] = useState('1011');
    const [supplierName, setSupplierName] = useState('SAGARIKA ALEENA INDUSTRIES');
    const [purchaseDivision, setPurchaseDivision] = useState('CO');
    const [poType, setPoType] = useState('PO');
    const [poSeries, setPoSeries] = useState('CO');
    const [poNo, setPoNo] = useState('511');

    const [lineItems, setLineItems] = useState<POLineItem[]>([
        {
            poLine: 1,
            material: 'SE1204',
            var: '1',
            description: 'Face Mask',
            costHead: '',
            costCenter: '',
            qu: 'Nos',
            orderQty: 10000.00,
            price: 2.00,
            pu: 'Nos',
            requiredDate: '',
            deliveryDate: '',
            followUpDate: '',
            surchargePercent: 0,
            surchargeValue: 0,
            discountPercent: 10.00,
            discountValue: 2000.00,
            taxPercent: 5.00,
            value: 18000.00
        },
        {
            poLine: 2,
            material: 'SE1205',
            var: '1',
            description: 'Ear Plug',
            costHead: '',
            costCenter: '',
            qu: 'Nos',
            orderQty: 10000.00,
            price: 3.00,
            pu: 'Nos',
            requiredDate: '',
            deliveryDate: '',
            followUpDate: '',
            surchargePercent: 0,
            surchargeValue: 0,
            discountPercent: 0,
            discountValue: 0,
            taxPercent: 5.00,
            value: 30000.00
        },
        {
            poLine: 3,
            material: 'SE1206',
            var: '1',
            description: 'Ear Muffs',
            costHead: '',
            costCenter: '',
            qu: 'Nos',
            orderQty: 1000.00,
            price: 12.00,
            pu: 'Nos',
            requiredDate: '',
            deliveryDate: '',
            followUpDate: '',
            surchargePercent: 2.00,
            surchargeValue: 0.00,
            discountPercent: 0,
            discountValue: 0,
            taxPercent: 12.00,
            value: 12000.00
        }
    ]);

    const summaryData = {
        goodsValue: 60000.00,
        surchargePercent: 10.00,
        surchargeAmount: 6000.00,
        discountPercent: 0,
        discountAmount: 0,
        packing: 100.00,
        freight: 500.00,
        insurance: 0,
        total: 66600.00,
        taxes: [
            { label: 'SGST', rate: '2.50%', base: 53278.08, value: 1331.95 },
            { label: 'SGST', rate: '2.50%', base: 53278.08, value: 1331.95 },
            { label: 'SGST', rate: '6.00%', base: 13585.91, value: 815.15 },
            { label: 'SGST', rate: '6.00%', base: 13585.91, value: 815.15 },
        ],
        grandTotal: 70894.21
    };

    return (
        <div className="max-w-[1600px] mx-auto p-4 space-y-6">
            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                {/* Cyan Header */}
                <div className="bg-cyan-500 text-center py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Purchase Order - Line Entry</h1>
                </div>

                {/* Info Section - Yellow theme (as per second photo) */}
                <div className="bg-yellow-50 p-6 border-b border-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Supplier Number</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{supplierNumber}</span>
                        </div>
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Supplier Name</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{supplierName}</span>
                        </div>
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Purchase Division</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{purchaseDivision}</span>
                        </div>
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">PO Type</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{poType}</span>
                        </div>
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">PO Series</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{poSeries}</span>
                        </div>
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">PO No</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-bold text-gray-800">{poNo}</span>
                        </div>
                    </div>
                </div>

                {/* Line Items Table */}
                <div className="bg-white overflow-x-auto text-[11px]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border-b border-gray-300">
                                {["PO Line", "Material", "Var", "Description", "Cost Head", "Cost Center", "QU", "Order Qty", "Price", "PU", "Required Date", "Delivery Date", "Follow-up Date", "Surcharge %", "Surcharge Value", "Discount %", "Discount Value", "Tax%", "Value"].map((head) => (
                                    <th key={head} className="px-2 py-2 text-left text-gray-700 font-bold border-r border-gray-300 whitespace-nowrap">
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {lineItems.map((item, idx) => (
                                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-2 py-2 border-r border-gray-300 text-center">{item.poLine}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.material}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-center">{item.var}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.description}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.costHead}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.costCenter}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.qu}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.orderQty.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.price.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.pu}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.requiredDate}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.deliveryDate}</td>
                                    <td className="px-2 py-2 border-r border-gray-300">{item.followUpDate}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.surchargePercent.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.surchargeValue.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.discountPercent.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.discountValue.toFixed(2)}</td>
                                    <td className="px-2 py-2 border-r border-gray-300 text-right">{item.taxPercent.toFixed(2)}</td>
                                    <td className="px-2 py-2 text-right font-bold">{item.value.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary Section - Bottom Right */}
                <div className="bg-white p-6 flex justify-end border-t border-gray-200">
                    <div className="w-96 text-xs overflow-hidden rounded-md border border-gray-300 shadow-sm">
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Goods Value</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.goodsValue.toFixed(2)}</div>
                        </div>
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Surcharge %</div>
                            <div className="w-20 px-3 py-2 border-r border-gray-300 text-center">{summaryData.surchargePercent.toFixed(2)}</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.surchargeAmount.toFixed(2)}</div>
                        </div>
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Discount%</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.discountAmount.toFixed(2)}</div>
                        </div>
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Packing</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.packing.toFixed(2)}</div>
                        </div>
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Freight</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.freight.toFixed(2)}</div>
                        </div>
                        <div className="flex border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold bg-gray-100">Insurance</div>
                            <div className="w-24 px-3 py-2 text-right font-bold">{summaryData.insurance.toFixed(2)}</div>
                        </div>
                        <div className="flex bg-cyan-100 border-b border-gray-300">
                            <div className="flex-1 px-3 py-2 border-r border-gray-300 font-bold text-cyan-800">Total</div>
                            <div className="w-24 px-3 py-2 text-right font-bold text-cyan-800">{summaryData.total.toFixed(2)}</div>
                        </div>
                        {summaryData.taxes.map((tax, i) => (
                            <div key={i} className="flex border-b border-gray-200 hover:bg-gray-50">
                                <div className="w-16 px-3 py-2 border-r border-gray-200 font-medium bg-gray-50">{tax.label}</div>
                                <div className="flex-1 px-3 py-2 border-r border-gray-200 text-center">{tax.rate}</div>
                                <div className="w-24 px-3 py-2 border-r border-gray-200 text-right text-gray-600">{tax.base.toFixed(2)}</div>
                                <div className="w-24 px-3 py-2 text-right font-bold">{tax.value.toFixed(2)}</div>
                            </div>
                        ))}
                        <div className="flex bg-cyan-600 text-white">
                            <div className="flex-1 px-3 py-4 font-bold uppercase tracking-wider">Grand Total</div>
                            <div className="w-24 px-3 py-4 text-right font-bold text-lg">{summaryData.grandTotal.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end p-4">
                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded shadow-lg transition-all transform hover:scale-105"
                >
                    Save Purchase Order
                </button>
            </div>
        </div>
    );
}
