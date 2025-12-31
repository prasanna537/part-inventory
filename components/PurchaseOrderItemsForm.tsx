"use client";

import { useState } from 'react';

interface Material {
    sNo: number;
    lowStock: boolean;
    material: string;
    var: string;
    description: string;
    qu: string;
    minimumStockReqd: number;
    stockAvailable: number;
    openPOQty: number;
    balanceToOrder: number;
    reOrderQty: number;
    priceList: string;
    isAdded: boolean;
}

export default function PurchaseOrderItemsForm() {
    const [supplierNumber, setSupplierNumber] = useState('1011');
    const [supplierName, setSupplierName] = useState('SAGARIKA ALEENA INDUSTRIES');
    const [poType, setPoType] = useState('PO');
    const [poSeries, setPoSeries] = useState('CO');
    const [poNo, setPoNo] = useState('511');

    const [materials, setMaterials] = useState<Material[]>([
        {
            sNo: 1,
            lowStock: true,
            material: 'SE2205',
            var: '1',
            description: 'Clinical Face Mask',
            qu: 'Nos',
            minimumStockReqd: 20000.00,
            stockAvailable: 8000.00,
            openPOQty: 3000.00,
            balanceToOrder: 9000.00,
            reOrderQty: 10000.00,
            priceList: '2025',
            isAdded: false
        },
        {
            sNo: 2,
            lowStock: true,
            material: 'SE2210',
            var: '1',
            description: 'Industrial Ear Plug',
            qu: 'Nos',
            minimumStockReqd: 10000.00,
            stockAvailable: 6000.00,
            openPOQty: 0.00,
            balanceToOrder: 4000.00,
            reOrderQty: 10000.00,
            priceList: '2025',
            isAdded: false
        },
        {
            sNo: 3,
            lowStock: true,
            material: 'SE2203',
            var: '1',
            description: 'Industrial Ear Muffs',
            qu: 'Nos',
            minimumStockReqd: 5000.00,
            stockAvailable: 5000.00,
            openPOQty: 200.00,
            balanceToOrder: -200.00,
            reOrderQty: 1000.00,
            priceList: '2025',
            isAdded: false
        }
    ]);



    const handleAddToPO = (index: number) => {
        setMaterials(prev => prev.map((item, i) =>
            i === index ? { ...item, isAdded: !item.isAdded } : item
        ));
    };

    const handleGoToPOLine = () => {
        console.log('Go to PO Line clicked');
    };

    return (
        <>
            <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
                {/* Cyan Header - matching PurchaseOrderForm */}
                <div className="bg-cyan-500 text-center py-4 rounded-t-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Purchase Order - Materials</h1>
                </div>

                {/* Yellow/Cream Section - PO Information */}
                <div className="bg-yellow-50 p-6 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
                        {/* Row 1 */}
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 w-44 flex-shrink-0">Supplier Number</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm text-gray-800">{supplierNumber}</span>
                        </div>

                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 w-44 flex-shrink-0">Supplier Name</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm text-gray-800">{supplierName}</span>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 w-44 flex-shrink-0">PO Type</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm text-gray-800">{poType}</span>
                        </div>

                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 w-44 flex-shrink-0">PO Series</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm text-gray-800">{poSeries}</span>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center">
                            <label className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 w-44 flex-shrink-0">PO No</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <span className="flex-1 text-sm text-gray-800">{poNo}</span>
                        </div>
                    </div>


                </div>

                {/* White Section - Materials Table */}
                <div className="bg-white border border-gray-300 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-white border-b border-gray-300">
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">S.No</th>
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">Low Stock</th>
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">Material</th>
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">Var</th>
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">Description</th>
                                <th className="px-3 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">QU</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Minimum Stock<br />Reqd</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Stock<br />Available</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Open PO<br />Qty</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Balance to<br />Order</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Re Order<br />Qty</th>
                                <th className="px-3 py-2 text-right text-gray-800 font-semibold border-r border-gray-300">Pice<br />List</th>
                                <th className="px-3 py-2 text-center text-gray-800 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((material, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="px-3 py-3 border-r border-gray-300">{material.sNo}</td>
                                    <td className="px-3 py-3 border-r border-gray-300">
                                        {material.lowStock && (
                                            <span className="text-red-600 font-bold text-xs">
                                                LOWSTOCK
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-3 py-3 border-r border-gray-300">{material.material}</td>
                                    <td className="px-3 py-3 border-r border-gray-300">{material.var}</td>
                                    <td className="px-3 py-3 border-r border-gray-300">{material.description}</td>
                                    <td className="px-3 py-3 border-r border-gray-300">{material.qu}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.minimumStockReqd.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.stockAvailable.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.openPOQty.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.balanceToOrder.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.reOrderQty.toFixed(2)}</td>
                                    <td className="px-3 py-3 text-right border-r border-gray-300">{material.priceList}</td>
                                    <td className="px-3 py-3 text-center">
                                        <button
                                            onClick={() => handleAddToPO(index)}
                                            className={`${material.isAdded
                                                ? 'bg-gray-400 cursor-default'
                                                : 'bg-teal-600 hover:bg-teal-700'
                                                } text-white font-medium text-xs py-2 px-4 rounded transition-all duration-200 min-w-[100px]`}
                                        >
                                            {material.isAdded ? 'Added to PO' : 'Add to PO'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Teal Button - Outside main container, matching PurchaseOrderForm */}
            <div className="max-w-7xl mx-auto flex justify-end mt-10">
                <button
                    onClick={handleGoToPOLine}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-8 rounded transition-all duration-200"
                >
                    Go to PO Line
                </button>
            </div>
        </>
    );
}
