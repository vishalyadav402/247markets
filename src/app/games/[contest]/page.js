"use client";

import ClientLayout from '@/app/ClientLayout';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/app/component/Loading';

const Page = () => {
  const router = useRouter();
 const pathname = usePathname();

  useEffect(() => {
      router.push(`${pathname}/enter-draw`); // redirects after loading
  }, []);

  return (
    <ClientLayout>
      <div className="min-h-[65vh]">
        <Loading />
      </div>
    </ClientLayout>
  );
};

export default Page;
