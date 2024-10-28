import { Suspense } from "react";
import { Metadata } from "next";
import TableComprobantes from "./table";
import SearchComprobante from "./search";
import TableComprobanteSkeleton from "./tableSkeleton";


export const metadata: Metadata = {
    title: 'Comprobantes declarados',
    icons: '/kayser.ico'
}

export default function ComprobantePage({
    searchParams }: {
        searchParams?: {
            search?: string,
            page?: string,
            type?: string
        }
    }
) {

    console.log(searchParams);
    const search = searchParams?.search || ''
    const currentPage = Number(searchParams?.page) || 1
    const type = searchParams?.type || 'OSF_SERIE_DOCUMENTO'


    return (
        <div className="flex flex-col gap-2">
            <SearchComprobante />

            <Suspense key={search + currentPage + type} fallback={<TableComprobanteSkeleton />}>
                <TableComprobantes currentPage={currentPage} search={search} type={type} />
            </Suspense>
            {/* <p>xd</p> */}
        </div>

    )
}
