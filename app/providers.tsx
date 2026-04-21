'use client';

import React from 'react';
import { I18nProvider } from '@/lib/i18n';

// Wraps the app in all client-side context providers.
// Kept as a separate client component so layout.tsx can remain a server component.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}
