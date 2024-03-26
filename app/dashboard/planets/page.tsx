
import Table from '@/app/ui/base/table/table';
import Search from '@/app/ui/base/search/search';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return <><Search />
  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
  <Table query={query} currentPage={currentPage} />
</Suspense></>
}