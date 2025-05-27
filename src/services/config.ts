export interface Config {
    useMockData: boolean;
}

export const config: Config = {
    useMockData: import.meta.env.VITE_USE_MOCK_DATA === 'true' || false
};