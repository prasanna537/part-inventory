"use client";

import { useState } from 'react';

interface PurchaseOrderData {
    poType: string;
    poSeries: string;
    poNo: string;
    supplier: string;
    purchaseOrganization: string;
    statusOfOrder: string;
    articleGroup: string;
    responsible: string;
    contactPerson: string;
    currency: string;
    termNo: string;
    exchangeRate: string;
    paymentTerm: string;
    deliveryTerm: string;
    deliveryWareHouse: string;
    deliveryStorageArea: string;
    deliveryStoragePlace: string;
    priceList: string;
    supplierTax: string;
    approvalAuthority: string;
}

export default function PurchaseOrderForm() {
    const [formData, setFormData] = useState<PurchaseOrderData>({
        poType: 'PO - Purhcase Order',
        poSeries: 'CO - Coimbatore',
        poNo: '511',
        supplier: 'SAGARIKA ALEENA INDUSTRIES',
        purchaseOrganization: 'CO - Coimbatore',
        statusOfOrder: 'TA',
        articleGroup: '8',
        responsible: 'Prem Kumar',
        contactPerson: 'Mr. Ramesh',
        currency: 'INR',
        termNo: '1',
        exchangeRate: '1',
        paymentTerm: 'Net30',
        deliveryTerm: 'EXW',
        deliveryWareHouse: '01 - CBE Gandhi Road',
        deliveryStorageArea: 'GF - Ground Floor',
        deliveryStoragePlace: '01 - STD',
        priceList: '2025',
        supplierTax: 'WST - With in State',
        approvalAuthority: 'Mr. Raju'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        alert('Proceeding to Purchase Order Lines...');
    };

    return (
        <>
            <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
                {/* Blue Header */}
                <div className="bg-cyan-500 text-center py-4 rounded-t-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Purchase Order - Head</h1>
                </div>

                {/* Yellow/Cream Section - Top 3 rows */}
                <div className="bg-yellow-50 p-6 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
                        {/* Row 1 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">PO Type</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.poType}
                                onChange={(e) => setFormData({ ...formData, poType: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="PO - Purchase Order">PO - Purchase Order</option>
                                <option value="RFQ - Request For Quotation">RFQ - Request For Quotation</option>
                                <option value="CO - Contract Order">CO - Contract Order</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">PO Series</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.poSeries}
                                onChange={(e) => setFormData({ ...formData, poSeries: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="CO - Coimbatore">CO - Coimbatore</option>
                                <option value="CH - Chennai">CH - Chennai</option>
                                <option value="BL - Bangalore">BL - Bangalore</option>
                            </select>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">PO No</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.poNo}
                                onChange={(e) => setFormData({ ...formData, poNo: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="511">511</option>
                                <option value="512">512</option>
                                <option value="513">513</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Supplier</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.supplier}
                                onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="SAGARIKA ALEENA INDUSTRIES">SAGARIKA ALEENA INDUSTRIES</option>
                                <option value="ABC Manufacturing Ltd">ABC Manufacturing Ltd</option>
                                <option value="XYZ Suppliers Pvt Ltd">XYZ Suppliers Pvt Ltd</option>
                            </select>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Purchase Orrganisation</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.purchaseOrganization}
                                onChange={(e) => setFormData({ ...formData, purchaseOrganization: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="CO - Coimbatore">CO - Coimbatore</option>
                                <option value="CH - Chennai">CH - Chennai</option>
                                <option value="BL - Bangalore">BL - Bangalore</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Status of Order</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.statusOfOrder}
                                onChange={(e) => setFormData({ ...formData, statusOfOrder: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="TA">TA - To be Approved</option>
                                <option value="AP">AP - Approved</option>
                                <option value="PE">PE - Pending</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* White Section - Remaining fields */}
                <div className="bg-white p-6 border border-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
                        {/* Row 4 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Article Group</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.articleGroup}
                                onChange={(e) => setFormData({ ...formData, articleGroup: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="8">8 - Electronics</option>
                                <option value="1">1 - Raw Materials</option>
                                <option value="2">2 - Consumables</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Responsible</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.responsible}
                                onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="Prem Kumar">Prem Kumar</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                        {/* Row 5 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Contact Person (Suppl)</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.contactPerson}
                                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                className="flex-1 text-sm text-blue-600 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="Mr. Ramesh">Mr. Ramesh</option>
                                <option value="Ms. Priya">Ms. Priya</option>
                                <option value="Mr. Vijay">Mr. Vijay</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Currency</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.currency}
                                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="INR">INR - Indian Rupee</option>
                                <option value="USD">USD - US Dollar</option>
                                <option value="EUR">EUR - Euro</option>
                            </select>
                        </div>

                        {/* Row 6 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Term No</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.termNo}
                                onChange={(e) => setFormData({ ...formData, termNo: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Exchange Rate</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.exchangeRate}
                                onChange={(e) => setFormData({ ...formData, exchangeRate: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="1">1.00</option>
                                <option value="80">80.00</option>
                                <option value="90">90.00</option>
                            </select>
                        </div>

                        {/* Row 7 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Payment Term</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.paymentTerm}
                                onChange={(e) => setFormData({ ...formData, paymentTerm: e.target.value })}
                                className="flex-1 text-sm text-blue-600 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="Net30">Net30</option>
                                <option value="Net60">Net60</option>
                                <option value="Cash">Cash on Delivery</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Delivery Term</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.deliveryTerm}
                                onChange={(e) => setFormData({ ...formData, deliveryTerm: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="EXW">EXW - Ex Works</option>
                                <option value="FOB">FOB - Free On Board</option>
                                <option value="CIF">CIF - Cost Insurance Freight</option>
                            </select>
                        </div>

                        {/* Row 8 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Delivery Ware House</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.deliveryWareHouse}
                                onChange={(e) => setFormData({ ...formData, deliveryWareHouse: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="01 - CBE Gandhi Road">01 - CBE Gandhi Road</option>
                                <option value="02 - CBE Cross Cut Road">02 - CBE Cross Cut Road</option>
                                <option value="03 - CH Main Warehouse">03 - CH Main Warehouse</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Delivery Storage Area</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.deliveryStorageArea}
                                onChange={(e) => setFormData({ ...formData, deliveryStorageArea: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="GF - Ground Floor">GF - Ground Floor</option>
                                <option value="FF - First Floor">FF - First Floor</option>
                                <option value="SF - Second Floor">SF - Second Floor</option>
                            </select>
                        </div>

                        {/* Row 9 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Delivery Storage Place</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.deliveryStoragePlace}
                                onChange={(e) => setFormData({ ...formData, deliveryStoragePlace: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="01 - STD">01 - STD</option>
                                <option value="02 - SPL">02 - SPL</option>
                                <option value="03 - RAW">03 - RAW</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Price List</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.priceList}
                                onChange={(e) => setFormData({ ...formData, priceList: e.target.value })}
                                className="flex-1 text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>

                        {/* Row 10 */}
                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Supplier Tax</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.supplierTax}
                                onChange={(e) => setFormData({ ...formData, supplierTax: e.target.value })}
                                className="flex-1 text-sm text-blue-600 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="WST - With in State">WST - With in State</option>
                                <option value="CST - Central">CST - Central</option>
                                <option value="IGST - Interstate">IGST - Interstate</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="text-sm text-gray-800 w-44 flex-shrink-0">Approval Authority</label>
                            <span className="mx-2 text-gray-600">:</span>
                            <select
                                value={formData.approvalAuthority}
                                onChange={(e) => setFormData({ ...formData, approvalAuthority: e.target.value })}
                                className="flex-1 text-sm text-blue-600 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="Mr. Raju">Mr. Raju</option>
                                <option value="Mr. Kumar">Mr. Kumar</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teal Button - Outside main container */}
            <div className="max-w-7xl mx-auto flex justify-end mt-10">
                <button
                    onClick={handleSubmit}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-8 rounded transition-all duration-200"
                >
                    Enter Purchase Order Lines
                </button>
            </div>
        </>
    );
}
