// News-image entry: copy the image beside this file to the output path.
// The image sums up the world news of Tuesday 24 November 2026.
// The copy is byte-for-byte identical on every run, with no network.

// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(out, 'entry.png'));
