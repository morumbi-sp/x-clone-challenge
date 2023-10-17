'use client';

import { AuthProvider, useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { User } from 'firebase/auth';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const { user, loading } = useAuth();

  const router = useRouter();

  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    router.push('/entry');
  }

  return <div>home</div>;
}
