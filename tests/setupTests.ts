import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { setupServer } from 'msw/node'
import { handlers } from './handlers'
 
export const server = setupServer(...handlers)

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
