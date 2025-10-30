/**
 * Tests for utils/apiUtils.js
 * - Mocks axios to avoid real network calls
 * - Uses table-driven tests (test.each)
 */
import { jest } from '@jest/globals';

// Mock the axios module before importing the modules that use it.
jest.unstable_mockModule('axios', () => ({
    default: {
        // provide a mock implementation for get which we will control in tests
        get: jest.fn()
    }
}));

// Import the modules under test and the mocked axios module
const axios = (await import('axios')).default;
const { getWeather, getUsers, getPostsByUser } = await import('../utils/apiUtils.js');

describe('apiUtils', () => {
    afterEach(() => {
        // Reset axios mocks between tests
        axios.get.mockReset();
        jest.restoreAllMocks();
    });

    describe('getWeather', () => {
        const apiKey = 'fake-key';

        test.each([
            // Normal successful response
            {
                name: 'returns data when API responds with 200',
                city: 'London',
                axiosResponse: { status: 200, data: { location: { name: 'London' }, current: {} } },
                expected: { location: { name: 'London' }, current: {} }
            },
            // Edge case: different city
            {
                name: 'handles another city normally',
                city: 'New York',
                axiosResponse: { status: 200, data: { location: { name: 'New York' }, current: {} } },
                expected: { location: { name: 'New York' }, current: {} }
            }
        ])('$name', async ({ city, axiosResponse, expected }) => {
            // Arrange: mock axios.get to resolve with the provided response
            axios.get.mockResolvedValueOnce(axiosResponse);

            // Act & Assert: ensure function resolves to expected data
            await expect(getWeather(city, apiKey)).resolves.toEqual(expected);
            // Verify axios was called with the expected URL
            expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`q=${city}`));
        });

        test('throws when API responds with non-200 status', async () => {
            // Arrange: mock non-200 status
            axios.get.mockResolvedValueOnce({ status: 500 });

            // Act & Assert: function should reject with API call failed
            await expect(getWeather('City', apiKey)).rejects.toThrow('API call failed');
        });

        test('propagates network errors from axios', async () => {
            // Arrange: simulate network error
            axios.get.mockRejectedValueOnce(new Error('Network failure'));

            // Act & Assert: function should reject with the same error
            await expect(getWeather('City', apiKey)).rejects.toThrow('Network failure');
        });
    });

    describe('getUsers', () => {
        test('returns users array on success', async () => {
            // Arrange: mock a successful users response
            const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
            axios.get.mockResolvedValueOnce({ status: 200, data: users });

            // Act & Assert
            await expect(getUsers()).resolves.toEqual(users);
            expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('jsonplaceholder.typicode.com/users'));
        });

        test('throws when API returns non-200 status', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ status: 404 });

            // Act & Assert
            await expect(getUsers()).rejects.toThrow('Failed to fetch users');
        });

        test('propagates axios errors', async () => {
            // Arrange
            axios.get.mockRejectedValueOnce(new Error('Timeout'));

            // Act & Assert
            await expect(getUsers()).rejects.toThrow('Timeout');
        });
    });

    describe('getPostsByUser', () => {
        test.each([
            // Normal use: user with posts
            {
                name: 'returns posts for a user',
                userId: 1,
                posts: [{ id: 1, userId: 1, title: 'Post 1' }]
            },
            // Edge: user with no posts (empty array)
            {
                name: 'returns empty array when user has no posts',
                userId: 999,
                posts: []
            }
        ])('$name', async ({ userId, posts }) => {
            // Arrange
            axios.get.mockResolvedValueOnce({ status: 200, data: posts });

            // Act & Assert
            await expect(getPostsByUser(userId)).resolves.toEqual(posts);
            expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`posts?userId=${userId}`));
        });

        test('throws when API returns non-200 status for posts', async () => {
            axios.get.mockResolvedValueOnce({ status: 500 });
            await expect(getPostsByUser(1)).rejects.toThrow('Failed to fetch posts');
        });
    });
});
