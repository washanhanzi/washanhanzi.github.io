import { qwikCityGenerate } from '@builder.io/qwik-city/static/node';
import render from './entry.ssr';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

qwikCityGenerate(render, {
	origin: 'https://washanhanzi.github.io',
	outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
});