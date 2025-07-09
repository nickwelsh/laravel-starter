import { useCallback } from 'react';

export function useInitials() {
	return useCallback((fullName: string): string => {
		const names = fullName.trim().split(' ');
		const firstName = names[0];
		const lastName = names[names.length - 1];

		if (!firstName) return '';
		if (!lastName) return firstName.charAt(0).toUpperCase();

		const firstInitial = firstName.charAt(0);
		const lastInitial = lastName.charAt(0);

		return `${firstInitial}${lastInitial}`.toUpperCase();
	}, []);
}
