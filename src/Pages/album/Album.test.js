import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../services/albums';
import AlbumPage from './Album';

jest.mock('../../services/albums');

describe('AlbumPage', () => {
    const mockAlbums = [
        { id: 1, title: 'Album 1' },
        { id: 2, title: 'Album 2' },
    ];

    beforeEach(() => {
        useGetAlbumsQuery.mockReturnValue({
            data: mockAlbums,
            error: undefined,
            isLoading: false,
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render album cards with titles', () => {
        render(
            <MemoryRouter>
                <AlbumPage />
            </MemoryRouter>
        );

        expect(screen.getByTestId('album-wrapper')).toBeInTheDocument();
    });

    it('should show skeleton while albums are loading', () => {
        useGetAlbumsQuery.mockReturnValueOnce({
            data: undefined,
            error: undefined,
            isLoading: true,
        });

        render(
            <MemoryRouter>
                <AlbumPage />
            </MemoryRouter>
        );

        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('should show error message if there is an error', () => {
        useGetAlbumsQuery.mockReturnValueOnce({
            data: undefined,
            error: 'API Error',
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <AlbumPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Right now we are facing some issue please connect after some time.')).toBeInTheDocument();
    });
});