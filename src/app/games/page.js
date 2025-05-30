"use client";

import ClientLayout from '@/app/ClientLayout';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/component/Loading';

const Page = () => {
  const router = useRouter();

  useEffect(() => {   
      router.push('/'); // redirects after loading
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
