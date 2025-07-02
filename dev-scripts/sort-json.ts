#!/usr/bin/env bun

function deepSort(obj: unknown): unknown {
	if (Array.isArray(obj)) {
		return obj.slice().sort().map(deepSort);
	}
	if (obj && typeof obj === 'object') {
		return Object.fromEntries(
			Object.entries(obj as Record<string, unknown>)
				.sort(([a], [b]) => a.localeCompare(b))
				.map(([k, v]) => [k, deepSort(v)] as const),
		);
	}
	return obj;
}

async function main() {
	const filePath = process.argv[2];
	if (!filePath) {
		console.error('Usage: sort-json.ts <path/to/file.json>');
		process.exit(1);
	}

	// parse JSON
	const data = (await Bun.file(filePath).json()) as unknown;
	// sort keys & arrays
	const sorted = deepSort(data);
	// write back with tabs (or switch to 4 if you prefer spaces)
	await Bun.write(filePath, JSON.stringify(sorted, null, '\t') + '\n');
}

void main();
