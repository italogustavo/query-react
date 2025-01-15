import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
            },
            {
                id: '123123',
                code: 'f230fh0g34444',
                name: 'Bamboo Watch44444',
                description: 'Product Description44444',
                image: 'bamboo-watch.jpg',
                price: 87,
                category: 'Accessories4444',
                quantity: 46,
                inventoryStatus: 'INSTOCK',
                rating: 5,
            },
        ]);
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <DataTable
                                paginator
                                rows={10}
                                dataKey="id"
                                removableSort
                                value={products}
                                showGridlines
                                selectionMode={'checkbox'}
                                resizableColumns
                            >
                                <Column field="code" header="Code"></Column>
                                <Column field="name" header="Name"></Column>
                                <Column
                                    field="category"
                                    header="Category"
                                ></Column>
                                <Column
                                    field="quantity"
                                    header="Quantity"
                                    sortable
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
