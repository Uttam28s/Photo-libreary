import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useGetPhotosQuery } from '../../services/photos';
import GalleryPage from './Gallery';

// Mock the RTK Query hook
jest.mock('../../services/photos', () => ({
    useGetPhotosQuery: jest.fn(),
}));

describe('GalleryPage', () => {
    const mockPhotos = [
        {
            "albumId": 2,
            "id": 51,
            "title": "non sunt voluptatem placeat consequuntur rem incidunt",
            "url": "https://via.placeholder.com/600/8e973b",
            "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
        },
        {
            "albumId": 2,
            "id": 53,
            "title": "soluta et harum aliquid officiis ab omnis consequatur",
            "url": "https://via.placeholder.com/600/6efc5f",
            "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
        },
    ];

    beforeEach(() => {
        useGetPhotosQuery.mockReturnValue({
            data: mockPhotos,
            error: undefined,
            isLoading: false,
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render Image cards', () => {
        render(
            <MemoryRouter>
                <GalleryPage />
            </MemoryRouter>
        );

        expect(screen.getByTestId('gallery-image-wrapper')).toBeInTheDocument();
    });

    it('should show skeleton while gallery is loading', () => {
        useGetPhotosQuery.mockReturnValueOnce({
            data: undefined,
            error: undefined,
            isLoading: true,
        });

        render(
            <MemoryRouter>
                <GalleryPage />
            </MemoryRouter>
        );

        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('should show error message if there is an error', () => {
        useGetPhotosQuery.mockReturnValueOnce({
            data: undefined,
            error: 'API Error',
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <GalleryPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Right now we are facing some issue please connect after some time.')).toBeInTheDocument();
    });
});