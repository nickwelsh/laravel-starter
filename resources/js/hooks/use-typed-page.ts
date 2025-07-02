import { type PageProps } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';

import { type InertiaData } from '@/types/generated';

export function useTypedPage<T extends PageProps>() {
	return usePage<InertiaData & T>();
}
