"use client";

import { useState } from 'react';

export default function PurchaseOrderDetailView() {
    const [formData, setFormData] = useState({
        supplierNumber: '1011',
        supplierName: 'SAGARIKA ALEENA INDUSTRIES',
        purchaseDivision: 'CO',
        poType: 'PO',
        poNo: '511',
        orderQty: '10000.00',
        orderValue: '20000.00',
        deliveredQty: '0.00',
        delValue: '0.00',
        invoiceQty: '0.00',
        invValue: '0.00',
        status: 'Hard code Listing.Default - TA',
        approvalUser: 'Admin',
        approvedDate: '',
        positionType: 'From LOV - 28',
        material: 'SE1204',
        variant: '1',
        packing: 'Box',
        quantity: '10000',
        qu: 'Nos',
        price: '2.00',
        pu: 'Nos',
        qualityGrade: 'A',
        requiredDate: '2026-01-15',
        deliveryDate: '2026-01-20',
        followUpDate: '',
        storeWH: 'Main Warehouse',
        storageArea: 'Zone A',
        storePlace: 'Rack 5',
        minDelQty: '100',
        toleranceMinus: '5%',
        tolerancePlus: '5%',
        costCenterHead: 'Operations',
        costCenterPosition: 'Floor 1',
        confFromSupplier: 'Yes',
        productTax: '5%'
    });

    return (
        <div className="max-w-[1200px] mx-auto p-4 space-y-6">
            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                {/* Cyan Header */}
                <div className="bg-cyan-500 text-center py-4 border-b border-cyan-600">
                    <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Purchase Order Line</h1>
                </div>

                {/* Yellow Info Section */}
                <div className="bg-yellow-50 p-6 border-b border-gray-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
                        {/* Left Column */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Supplier Number</label>
                                <span className="mx-2 text-gray-600">:</span>
                                <span className="flex-1 text-sm font-semibold">{formData.supplierNumber}</span>
                            </div>
                            <div className="flex items-center">
                                <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">PO Type</label>
                                <span className="mx-2 text-gray-600">:</span>
                                <span className="flex-1 text-sm font-semibold text-gray-800">{formData.poType}</span>
                            </div>
                        </div>

                        {/* Right Column (Merged into header row layout style) */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Supplier Name</label>
                                <span className="mx-2 text-gray-600">:</span>
                                <span className="flex-1 text-sm font-semibold text-gray-800">{formData.supplierName}</span>
                            </div>
                            <div className="flex items-center">
                                <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">PO No</label>
                                <span className="mx-2 text-gray-600">:</span>
                                <span className="flex-1 text-sm font-semibold text-gray-800">{formData.poNo}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1.5 w-40 flex-shrink-0">Purchase Division</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm font-semibold text-gray-800">{formData.purchaseDivision}</span>
                        </div>
                    </div>

                    {/* Totals table-like display in yellow section */}
                    <div className="mt-6 border-t border-yellow-200 pt-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-xs">
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Order Qty</p>
                                <p className="text-sm font-semibold">: {formData.orderQty}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Order Value</p>
                                <p className="text-sm font-semibold">: {formData.orderValue}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Delivered Qty</p>
                                <p className="text-sm font-semibold">: {formData.deliveredQty}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Del. Value</p>
                                <p className="text-sm font-semibold">: {formData.delValue}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Invoice Qty</p>
                                <p className="text-sm font-semibold">: {formData.invoiceQty}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-600">Inv. Value</p>
                                <p className="text-sm font-semibold">: {formData.invValue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* White Detail Section */}
                <div className="bg-white p-8 space-y-8">
                    {/* Status & Approval Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Status</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.status}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Approval User</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.approvalUser}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Approved Date</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.approvedDate || '-'}</span>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Material Details Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-32 flex-shrink-0">Position Type</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.positionType}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-24 flex-shrink-0">Material</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.material}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-24 flex-shrink-0">Variant</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.variant}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-24 flex-shrink-0">Packing</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.packing}</span>
                        </div>
                    </div>

                    {/* Quantity & Price Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 p-6 rounded-md border border-gray-100 shadow-sm">
                        <div className="flex items-center">
                            <span className="text-xs font-bold text-gray-700 w-28 flex-shrink-0 uppercase tracking-wider">Quantity</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-bold text-blue-700">{formData.quantity}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs font-bold text-gray-700 w-20 flex-shrink-0 uppercase tracking-wider">QU</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.qu}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs font-bold text-gray-700 w-20 flex-shrink-0 uppercase tracking-wider">Price</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-bold text-blue-700">{formData.price}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xs font-bold text-gray-700 w-20 flex-shrink-0 uppercase tracking-wider">PU</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.pu}</span>
                        </div>
                    </div>

                    {/* Dates & Quality Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Quality Grade</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.qualityGrade}</span>
                        </div>
                        <div className="flex items-start col-span-1 lg:col-span-2" /> {/* Spacer */}

                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Required Date</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.requiredDate}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Delivery Date</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.deliveryDate}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Follow up Date</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.followUpDate || '-'}</span>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Store & Storage Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 pt-2">
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Store WH</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.storeWH}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Storage Area</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.storageArea}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Store Place</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.storePlace}</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Minimum Del. Qty</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.minDelQty}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Tolerance (-)</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.toleranceMinus}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Tolerance (+)</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.tolerancePlus}</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Cost Center Head</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.costCenterHead}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Cost Center Position</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.costCenterPosition}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Conf. From Supplier</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.confFromSupplier}</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-xs font-bold text-gray-700 w-36 flex-shrink-0">Product Tax</span>
                            <span className="text-gray-400 mx-2">:</span>
                            <span className="text-sm font-medium text-gray-800">{formData.productTax}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty Footer for extra space like in image */}
            <div className="h-20" />
        </div>
    );
}
